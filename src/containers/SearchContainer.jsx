import React from 'react'
import SkillVideo from '../components/SkillVideo'
import Tab from '../components/Tab'

const videos = [{
  id: 4,
  url: "https://www.youtube.com/embed/1w-oQ-i1XB8",
  votes: 123,
  type: "showcase"
},
{
  id: 5,
  url: "https://www.youtube.com/embed/1w-oQ-i1XB8",
  votes: 777,
  type: "tutorial"
},
{
  id: 6,
  url: "https://www.youtube.com/embed/1w-oQ-i1XB8",
  votes: 456,
  type: "showcase"
}]
const proofs = []


export default () => {
  return <Tab videos={videos}
              onUpvote={evt => console.log(evt.target.id)}
              onDownvote={evt => console.log(evt.target.id)} />
}
