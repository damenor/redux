import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'

const initialState = null

export const createReducers = (actions) => {
  let reducers = {}
  actions.map(action => {
    reducers[action.props] = (state = initialState, actionEvent) => actionEvent.type === action.type ? actionEvent.data : state
  })
  reducers.routing = routerReducer
    
  return combineReducers(reducers)
}