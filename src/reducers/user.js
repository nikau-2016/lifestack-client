const initialState = {
  id: 101,
  username: "Jimmy",
  profile_pic: "http://www.nyan.cat/cats/original.gif",
  level: 1,
  totalXp: 43,
  remainingXp: 543,
  skillList: [
      {
        id: 201,
        skillName: "Fry an Egg",
        status: "watched",
        skillXp: 25
      },
      {
        id: 202,
        skillName: "Bake an Aardvark",
        status: "watched",
        skillXp: 25
      },
      {
        id: 203,
        skillName: "Educate an Ant",
        status: "watched",
        skillXp: 25
      }
    ]
}

export default (state = initialState, action) => {
  return state
}
