import React from 'react'
import SkillVideo from './SkillVideo'


export default React.createClass({
  props: {
    videos: React.PropTypes.array.isRequired,
    onUpvote: React.PropTypes.func.isRequired,
    onDownvote: React.PropTypes.func.isRequired
  },
  getInitialState () {
    return {
      currentTab: "tutorial"
    }
  },
  render () {
    const videos = (this.props.videos || [])
      .filter(elem => {
        return elem.type === this.state.currentTab
      })
      .sort((a, b) => a.votes < b.votes)
      .map(elem => {
        return <SkillVideo key={elem.id}
                    id={elem.id}
                    url={elem.url}
                    votes={elem.votes}
                    onUpvote={this.props.onUpvote}
                    onDownvote={this.props.onDownvote} />
    })

    return (
      <div className="tab">
      <button onClick={() => this.setState({currentTab:"tutorial"})}>
        Tutorials
      </button>
        {videos}
      </div>
    )
  }
})
