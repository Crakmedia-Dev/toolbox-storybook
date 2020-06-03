import 'jsdom-global/register'
import React from 'react'
import { mount } from 'enzyme'
import Picture from './index'

describe('Picture', () => {
  let component
  const ALTERNATIVE_TEXT = 'yolo'
  const SOURCES = [
    { url: '1.url', type: '1' },
    { url: '2.url', type: '2' },
    { url: 'asdasdasd', type: '3' }
  ]

  const windowIntersectionObserver = window.IntersectionObserver
  let mockIntersectionObserver

  beforeEach(() => {
    mockIntersectionObserver = {
      observe: jest.fn(),
      disconnect: jest.fn(),
      unobserve: jest.fn()
    }
    window.IntersectionObserver = jest.fn().mockImplementation(() => mockIntersectionObserver)
  })

  afterEach(() => {
    window.IntersectionObserver = windowIntersectionObserver
  })

  it('should render component', () => {
    component = mount(<Picture alt={ALTERNATIVE_TEXT} sources={SOURCES} />)
    expect(component).toBeTruthy()
  })

  it('should observe pictures being loaded', () => {
    component = mount(<Picture alt={ALTERNATIVE_TEXT} sources={SOURCES} />)
    expect(mockIntersectionObserver.observe).toHaveBeenCalled()
  })

  it('should unobserve pictures on component unmount', () => {
    component = mount(<Picture alt={ALTERNATIVE_TEXT} sources={SOURCES} />)
    component.unmount()
    expect(mockIntersectionObserver.unobserve).toHaveBeenCalledTimes(1)
  })

  it('should not unobserve pictures on component unmount when IntersectionObserver is not defined', () => {
    window.IntersectionObserver = undefined
    component = mount(<Picture alt={ALTERNATIVE_TEXT} sources={SOURCES} />)
    component.unmount()

    expect(mockIntersectionObserver.unobserve).toHaveBeenCalledTimes(0)
  })
})
