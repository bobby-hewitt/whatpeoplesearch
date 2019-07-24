import React, { Component } from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import io from 'socket.io-client';
import {subscribeToPlayerEvents} from './player'
import { playerSetRoom, playerSetSelf, setLoading, setLikes } from 'actions/player'

class SocketListener extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
      subscribeToPlayerEvents(this)
  }




  render(){
    return(
      <div>
      
      </div>
    )
  }
}

const mapStateToProps = state => ({
  // count: state.counter.count
  playerRoom: state.player.room,
  dev: state.dev
})

const mapDispatchToProps = dispatch => bindActionCreators({
  push: (path) => push( path),
  setLikes,
  playerSetSelf,
  setLoading,
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SocketListener)