export default (state = {}, action) => {
  switch (action.type) {
    case "UPDATE_SEARCH":
      return action.skill
    default:
      return state
  }
}
