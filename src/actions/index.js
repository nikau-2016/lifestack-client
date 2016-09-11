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

export const login = (username, password) => {
  return function (dispatch) {
    request
      .post(`${url}/login`)
      .send({username: username, password: password})
      .end((err, res) => {
        if (err) {
          // ERROR HANDLING HERE
          console.log(err)
        } else {
          dispatch(setUser(res.body.data))
          dispatch(push('/profile'))
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

export const upVote = (id) => {
  return (dispatch, getState) => {
    request
      .post(`${url}/v1/skills/${id}/upvote`)
      .end((err, res) => {
        if (err) {
          // ERROR HANDLING HERE
          console.log(err)
        } else {
          console.log("Upvote")
        }
      })
  }
}

export const downVote = (id) => {
  return (dispatch, getState) => {
    request
    .post(`${url}/v1/skills/${id}/downvote`)
    .end((err, res) => {
      if (err) {
          // ERROR HANDLING HERE
          console.log(err)
        } else {
          console.log("Downvote")
        }
      })
  }
}
