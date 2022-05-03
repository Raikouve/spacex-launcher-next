import { CardWrapper } from '../styles/styledComponents';

export default function Card({ launch }) {
  return (
    <CardWrapper>
      <a key={ launch.id } href={launch.links.video_link}>
      <h2>{ launch.mission_name }</h2>
      <p>
      <strong>Launch Time: </strong>
        { new Date(launch.launch_date_local).toLocaleDateString("en-US") }
      </p>
      </a>
    </CardWrapper>
  )
}