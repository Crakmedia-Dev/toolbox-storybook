import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Picture from './styles'

// This is an empty, 1x1 transparent png. It's the source before load.
const placeHolder =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII='

const LazyPicture = ({
  alt,
  className,
  loadAnimationDelay = 0.7, // in ms
  sources = [{ url: '', type: '' }],
  defaultIndex = 0,
  onLoad = event => {
    event.target.classList.add('loaded')
  }
}) => {
  const [pictureSources, setPictureSources] = useState([])
  const [imageRef, setImageRef] = useState()

  useEffect(() => {
    let observer
    let didCancel = false

    if (imageRef && !pictureSources.length) {
      if (window.IntersectionObserver) {
        observer = new window.IntersectionObserver(
          entries => {
            entries.forEach(entry => {
              // when image is visible in the viewport + rootMargin
              if (
                !didCancel &&
                (entry.intersectionRatio > 0 || entry.isIntersecting)
              ) {
                setPictureSources(sources)
              }
            })
          },
          {
            threshold: 0.01,
            rootMargin: '75%'
          }
        )
        observer.observe(imageRef)
      } else {
        // Old browsers fallback
        setPictureSources(sources)
      }
    }

    return () => {
      didCancel = true
      // on component unmount, we remove the listener
      if (observer && observer.unobserve) {
        observer.unobserve(imageRef)
      }
    }
  }, [imageRef])

  return (
    <>
      <Picture
        ref={setImageRef}
        className={`lz-pic${className ? ` ${className}` : ''}`}
        loadAnimationDelay={loadAnimationDelay}
      >
        {pictureSources.map(src => (
          <source key={src.type} srcSet={src.url} type={src.type} />
        ))}
        <img
          onLoad={onLoad}
          alt={alt}
          src={
            pictureSources.length
              ? pictureSources[defaultIndex].url
              : placeHolder
          }
        />
      </Picture>

      <noscript>
        <img alt={alt} src={sources[defaultIndex].url} />
      </noscript>
    </>
  )
}

LazyPicture.propTypes = {
  loadAnimationDelay: PropTypes.number,
  sources: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired
    }).isRequired
  ),
  className: PropTypes.string,
  alt: PropTypes.string.isRequired,
  defaultIndex: PropTypes.number,
  onLoad: PropTypes.func
}

export default LazyPicture
