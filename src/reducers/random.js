export default (state = {}, action) => {
  switch (action.type) {
    case "UPDATE_RANDOM":
      return action.random
    default:
      return state
  }
}
