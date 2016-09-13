export default (state = {}, action) => {
  switch (action.type) {
    case "SET_CONTRIBUTOR":
      return action.contributor
    default:
      return state
  }
}
