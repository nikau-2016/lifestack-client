const initialState = {
  id: 0,
  username: "0",
  profile_pic: "",
  level: 0,
  totalXp: 0,
  remainingXp: 0,
  skillList: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER":
      return action.user
    case "RESET_USER":
      return initialState
    default:
      return state
  }
}
