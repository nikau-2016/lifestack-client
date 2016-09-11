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

const setUser = (user) => {
  return {
    type: "SET_USER",
    user: user
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
          console.log("Upvote", res.body.data)
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
          console.log("Downvote", res.body.data)
          dispatch(updateSearch(res.body.data))
        }
      })
  }
}
