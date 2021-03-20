import React from 'react'
import { Container, Button, Video } from './styles/player'

export default function Player({children, ...restProps}) {
  return <Container {...restProps}>{children}</Container>
}

Player.Button = function PlayerButton({...restProps}) {
  return <Button {...restProps} onClick={() => console.log("new CLick")}> Play </Button>
}

Player.Video = function PlayerVideo({...restProps}) {
  return <Video {...restProps} />
}