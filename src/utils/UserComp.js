// eslint-disable-next-line max-classes-per-file
import React, {Component, useEffect, useCallback, useState, memo} from 'react'

// Hoc、render props和hook都是为了解决代码复用的问题，但是hoc和render props都有特定的使用场景和明显的缺点。hook是react16.8更新的新的API，让组件逻辑复用更简洁明了，同时也解决了hoc和render props的一些缺点。


// 可傳入性別參數的 HOC
const UserGenderHOC = gender => WrappedComponent => {
  return class userGenderHOC extends Component {
    render() {
      return <WrappedComponent gender={gender} {...this.props} />
    }
  }
}
// 計數 HOC
const CountHOC = WrappedComponent => {
  return class countHOC extends Component {
    constructor() {
      super()
      this.state = {count: 0}
    }

    incrementCount = () => {
      this.setState({count: this.state.count + 1})
    }

    render() {
      return <WrappedComponent {...this.props} count={this.state.count} incrementCount={this.incrementCount} />
    }
  }
}
// 改用 Decorator 方式
@UserGenderHOC('Male')
@CountHOC
class UserComp extends Component {
  render() {
    const {gender, count, incrementCount} = this.props
    return (
      <div>
        <div>Gender: {gender}</div>
        <div>Number: {count}</div>
        <button onClick={incrementCount}>Add Number</button>
      </div>
    )
  }
}

export default UserComp // 匯出元件
