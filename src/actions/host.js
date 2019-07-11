export const hostSetRoom = (payload) => {
  console.log('setting host room')
  return dispatch => {
    dispatch({
      type: 'HOST_SET_ROOM',
      payload
    })
  }
}

export const playerJoined = (payload) => {
  return dispatch => {
    dispatch({
      type: 'HOST_PLAYER_JOINED',
      payload
    })
  }
}

export const setPlayerName = (payload) => {
  return dispatch => {
    dispatch({
      type: 'HOST_SET_PLAYER_NAME',
      payload
    })
  }
}

export const playerAnswerReceived = (payload) => {
  return dispatch => {
    dispatch({
      type: 'HOST_PLAYER_ANSWER_RECEIVED',
      payload
    })
  }
}



export const updateAnswers = (payload) => {
  return dispatch => {
    dispatch({
      type: 'HOST_UPDATE_ANSWERS',
      payload
    })
  }
}

export const setRound = (payload) => {
  return dispatch => {
    dispatch({
      type: 'HOST_SET_ROUND',
      payload
    })
  }
}

export const updatePlayers = (payload) => {
  return dispatch => {
    dispatch({
      type: 'HOST_UPDATE_PLAYERS',
      payload
    })
  }
}


export const playerLeft = (payload) => {
  return dispatch => {
    dispatch({
      type: 'HOST_PLAYER_LEFT',
      payload
    })
  }
}


export const setFinalPlayers = (payload) => {
  return dispatch => {
    dispatch({
      type: 'HOST_SET_FINAL_PLAYERS',
      payload
    })
  }
}

export const showHints = (payload) => {
  return dispatch => {
    dispatch({
      type: 'HOST_SHOW_HINTS',
      payload
    })
  }
}
export const setGameState = (payload) => {
  return dispatch => {
    dispatch({
      type: 'HOST_SET_GAME_STATE',
      payload
    })
  }
}

export const nextQuestion = (payload) => {
  return dispatch => {
    dispatch({
      type: 'HOST_NEXT_QUESTION',
      payload
    })
  }
}





