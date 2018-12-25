import { applyMiddleware, createStore } from 'redux'
import { createLogger } from 'redux-logger'

const logger = createLogger({
  collapsed: true,
  level: 'info'
})

export const getStore = (reducer) => createStore(reducer, applyMiddleware(logger))