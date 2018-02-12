import React from 'react'
import ReactDOM from 'react-dom'
import { Breadcrumbs, Button } from '@procore/core-react'

ReactDOM.render(
  <div>
    <Button.Processing processing={true}>foo</Button.Processing>
    <Breadcrumbs>
      <Breadcrumbs.Crumb active={true}><a>Crumb 1</a></Breadcrumbs.Crumb>
      <Breadcrumbs.Crumb>Crumb 2</Breadcrumbs.Crumb>
      <Breadcrumbs.Crumb>Crumb 3</Breadcrumbs.Crumb>
    </Breadcrumbs>
  </div>,
  document.getElementsByTagName('body')[0]
)
