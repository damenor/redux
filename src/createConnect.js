import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const mapStateToProps = (state, keys) => {
  let _state = {}
  keys.map(key => {
    _state[key] = state[key]
  })
  return _state
}

const mapDispatchToProps = (dispatch, actions) => bindActionCreators(actions, dispatch)

export const createConnect = (Component, keys = []) => {
  let actions = {}
  let keysState = []
  keys.map(key => {
    keysState = [...keysState, key.props]
    actions[key.setProps] = data => ({ type: key.type, data })
  })
  console.log(keysState, actions)
  return connect(state => mapStateToProps(state, keysState), dispatch => mapDispatchToProps(dispatch, actions))(Component)
}