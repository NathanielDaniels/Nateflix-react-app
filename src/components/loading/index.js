import React from 'react'
import { Spinner, LockBody, ReleaseBody, Picture } from './styles/loading'

export default function Loading({src, ...restProps}) {
  return (
    <Spinner {...restProps}>
      <LockBody />
      <Picture src={`./images/users/${src}.png`} />
      {/* <Picture src={`./images/misc/loading.gif`} /> */}
      {/* <Picture src={`./images/misc/spinner.png`} /> */}
    </Spinner>
  )
}

Loading.ReleaseBody = function LoadingReleaseBody() {
  return <ReleaseBody />
}