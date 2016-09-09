const initialState = {
videos: [
    {
      id: 201,
      url: "https://www.youtube.com/embed/GKSRyLdjsPA",
      votes: 150,
      type: "tutorial"
    },
    {
      id: 205,
      url: "https://www.youtube.com/embed/GKSRyLdjsPA",
      votes: 5,
      type: "showcase"
    }
  ],
    id: 101,
    skillName: "Change Lightbulb",
    category: "Domestic"
}

export default (state = initialState, action) => {
  return state
}
