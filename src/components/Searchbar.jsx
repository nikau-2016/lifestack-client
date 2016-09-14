import React from 'react'

export default React.createClass({
  props: {
    options: React.PropTypes.array.isRequired,
    onSelected: React.PropTypes.func.isRequired
  },
  getInitialState () {
    return {
      selectedCategory: "",
      selectedSkill: "",
      selectedDifficulty: ""
    }
  },
  onCategorySelect (evt) {
    this.setState({selectedCategory: evt.target.value})
  },
  onSkillSelect (evt) {
    this.setState({selectedCategory: evt.target.value})
    this.props.onSelected(evt.target.value)
  },
  onDifficultySelect (evt) {
    this.setState({selectedDifficulty: evt.target.value})
  },
  render () {
    const categories = this.props.options
                          .map(elem => elem.category)
                          .filter((elem, i, ar) => ar.indexOf(elem) === i)
                          .map((elem, i) => {
                            return <option key={i} value={elem}>{elem}</option>
                          })
                          
    const difficulties = this.props.options
                          .map(elem => elem.difficulty)
                          .filter((elem, i, ar) => ar.indexOf(elem) === i)
                          .map((elem, i) => {
                            return <option key={i} value={elem}>{elem}</option>
                          })

    const skills = this.props.options
                      .filter(elem => {
                        if (this.state.selectedCategory !== "" ) {
                          return elem.category === this.state.selectedCategory
                        } else {
                          return elem
                        }
                      })
                      .filter(elem => {
                        if (this.state.selectedDifficulty !== "" ) {
                          return elem.difficulty === this.state.selectedDifficulty
                        } else {
                          return elem
                        }
                      })
                      .map((elem, i) => {
                        return <option key={i} value={elem.id}>{elem.skillName}</option>
                      })

    return (
      <div className="searchBar">
        <select className="cat" onChange={this.onCategorySelect} value={this.state.selectedCategory}>
          <option value="">Select a category</option>
          {categories}
        </select>
        <select className="diff" onChange={this.onDifficultySelect} value={this.state.selectedDifficulty}>
          <option value="">Select a difficulty</option>
          {difficulties}
        </select>
        <select className="skill" onChange={this.onSkillSelect} value={this.state.selectedSkill}>
          <option value="">Select a skill</option>
          {skills}
        </select>
      </div>
    )
  }
})
