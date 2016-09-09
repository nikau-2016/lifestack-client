import React from 'react'
import SkillVideo from './SkillVideo'

export default () => {
  return <SkillVideo id={6} url="https://www.youtube.com/embed/1w-oQ-i1XB8" votes={320} onUpvote={evt => console.log(evt.target.id)} onDownvote={evt => console.log(evt.target.id)} />
}
