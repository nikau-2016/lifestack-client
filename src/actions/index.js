import request from 'superagent'
import {push} from 'react-router-redux'
const env = process.env.NODE_ENV || 'development'
const url = env === 'production' ? 'placeholderURL'
                                    :'http://localhost:3000'

const updateSearch = (skill) => {
  return {
    type: "UPDATE_SEARCH",
    skill: skill
  }
}

export const retrieveSkill = (id) => {
  return function (dispatch) {
    request
      .get(`${url}/v1/skills/${id}`)
      .end((err, res) => {
        if (err) {
          // ERROR HANDLING HERE
          console.log(err)
        } else {
          dispatch(updateSearch(res.body.data))
          dispatch(push('/search'))
        }
      })
  }
}

export const changeStatus = (skill_id, status) => {
  return function (dispatch, getState) {
    request
      .put(`${url}/v1/users/${getState().user.id}/status`)
      .send({status: status, skill_id: skill_id})
      .end((err, res) => {
        if (err) {
          console.log(err)
        } else {
          dispatch(push(`/profile/${getState().user.id}`))
        }
      })
  }
}

export const getUserDetails = (id) => {
  return function (dispatch) {
    request
      .get(`${url}/v1/users/${id}`)
      .end((err, res) => {
        if (err) {
          // ERROR HANDLING HERE
          console.log(err)
        } else {
          dispatch(setUser(res.body.data))
        }
      })
  }
}

export const uploadShowcase = (skill_id, tutorialUrl) => {
  return function (dispatch, getState) {
    const id = getState().user.id
    request
      .put(`${url}/v1/users/${id}/tutorial`)
      .send({
        skill_id: skill_id,
        tutorial: tutorialUrl
      })
      .end((err, res) => {
        if (err) {
          // ERROR HANDLING HERE
          console.log(err)
        } else {
          dispatch(setUser(res.body.data))
        }
      })
  }
}

const setUser = (user) => {
  return {
    type: "SET_USER",
    user: user
  }
}

export const displayProfile = () => {
  return function (dispatch, getState) {
    dispatch(push(`/profile/${getState().user.id}`))
  }
}

export const upVote = (video_id) => {
  return (dispatch, getState) => {
    const id = getState().search.id
    request
      .put(`${url}/v1/skills/${id}/upvote/${video_id}`)
      .end((err, res) => {
        if (err) {
          // ERROR HANDLING HERE
          console.log(err)
        } else {
          dispatch(updateSearch(res.body.data))
        }
      })
  }
}

export const downVote = (video_id) => {
  return (dispatch, getState) => {
    const id = getState().search.id
    request
      .put(`${url}/v1/skills/${id}/downvote/${video_id}`)
      .end((err, res) => {
        if (err) {
          // ERROR HANDLING HERE
          console.log(err)
        } else {
          dispatch(updateSearch(res.body.data))
        }
      })
  }
}

export const logout = (userId) => {
  return (dispatch) => {
    request
      .get(`${url}/logout`)
      .end((err, res) => {
        if (err) {
          console.log(err)
        } else {
          dispatch(resetUser())
          dispatch(push('/'))
        }
      })
  }
}

const resetUser = () => {
  return {
    type: 'RESET_USER'
  }
}

const updateRandom = (random) => {
  return {
    type: 'UPDATE_RANDOM',
    random: random
  }
}

export const getRandom = (id) => {
  return (dispatch) => {
    request
      .get(`http://localhost:3000/v1/users/${id}/random`)
      .end((err, res) => {
        if (err || !res.body.data) {
          return
        }
          dispatch(updateRandom(res.body.data))
      })
  }
}
