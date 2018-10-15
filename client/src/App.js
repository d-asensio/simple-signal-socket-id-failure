import React, { Component } from 'react'

import io from 'socket.io-client'
import SimpleSignalClient from 'simple-signal-client'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      peers: []
    }

    this._socket = io('//localhost:5000')
    this._signalClient = new SimpleSignalClient(this._socket)

    this._attachSignalingEvents()
  }

  _attachSignalingEvents () {
    this._signalClient.on('ready', lastId => this._handleSignalingReady(lastId))
    this._signalClient.on('request', request => this._handleSignalingRequest(request))
    this._signalClient.on('peer', peer => this._handleSignalingPeer(peer))
  }

  _handleSignalingReady (lastId) {
    if (lastId) this._signalClient.connect(lastId)
  }

  _handleSignalingRequest (request) {
    request.accept()
  }

  _handleSignalingPeer (newPeer) {
    const { peers } = this.state
    this.setState({
      peers: [
        ...peers,
        newPeer
      ]
    })
  }

  render() {
    const { peers } = this.state
    return (
      <ul>
        {peers.map( peer =>
          <li>
            {peer.id}
          </li>
        )}
      </ul>
    )
  }
}

export default App
