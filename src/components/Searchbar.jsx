import React from 'react'

export default React.createClass({
  props: {
    options: React.PropTypes.array.isRequired,
    onSelected: React.PropTypes.func.isRequired
  },
  getInitialState () {
    return {
      selectedCategory: "",
      selectedSkill: ""
    }
  },
  onCategorySelect (evt) {
    this.setState({selectedCategory: evt.target.value})
  },
  onSkillSelect (evt) {
    this.setState({selectedCategory: evt.target.value})
    this.props.onSelected(evt.target.value)
  },
  render () {
    const categories = this.props.options
                          .map(elem => elem.category)
                          .filter((elem, i, ar) => ar.indexOf(elem) === i)
                          .map((elem, i) => {
                            return <option key={i} value={elem}>{elem}</option>
                          })
    const skills = this.props.options
                      .filter(elem => elem.category === this.state.selectedCategory)
                      .map((elem, i) => {
                        return <option key={i} value={elem.id}>{elem.skillName}</option>
                      })
    return (
      <div>
        <select onChange={this.onCategorySelect} value={this.state.selectedCategory}>
          <option value="Select a category">Select a category</option>
          {categories}
        </select>
        <select onChange={this.onSkillSelect} value={this.state.selectedSkill}>
          <option value="Select a skill">Select a skill</option>
          {skills}
        </select>
      </div>
    )
  }
})
