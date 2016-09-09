import request from 'superagent'
const env = process.env.NODE_ENV || 'development'
const url = env === 'production' ? 'https://s2pid-kweschinz.herokuapp.com/'
                                    :'http://localhost:3000/'
