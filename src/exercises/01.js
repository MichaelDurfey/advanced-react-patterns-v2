// Building the toggle component

import React from 'react'
import {Switch} from '../switch'

// 🐨 uncomment this import to get the switch component.
// It takes an `onClick` and an `on` prop


class Toggle extends React.Component {
  constructor() {
    super();
    this.state = {
      on: false,
    }
  }
  // Use an updater function when referencing current state and updating it to avoid batching issues
  handleClick = () => {
    this.setState((currentState) => {
      return {on: !currentState.on}
    }, () => {
      this.props.onToggle(this.state.on)
    })
  }

  render() {
    // 🐨 here you'll want to return the switch with the `on` and `onClick` props
    return(
      <div>
        <Switch on={this.state.on} onClick={this.handleClick}/>
      </div>
    )
  }
}

// Don't make changes to the Usage component. It's here to show you how your
// component is intended to be used and is used in the tests.
// You can make all the tests pass by updating the Toggle component.
function Usage({
  onToggle = (...args) => console.log('onToggle', ...args),
}) {
  return <Toggle onToggle={onToggle} />
}
Usage.title = 'Build Toggle'

export {Toggle, Usage as default}
