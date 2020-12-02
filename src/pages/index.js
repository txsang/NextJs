import React from 'react'
import { connect } from 'react-redux'
import { decrementCounter, incrementCounter } from '@/actions/counterActions'
import { NextSeo } from 'next-seo'

class App extends React.Component {
  static async getInitialProps ({ store }) {
    // fetch API by server-side here
  }

  constructor (props) {
    super(props)
  }

  render () {
    const { handleDecrementCounter, handleIncrementCounter, counter, SEO } = this.props
    return (
      <>
        <NextSeo
          {...SEO}
          title="Home page"
          description="A short description of Home page"
        />
        <div>
          <button onClick={handleIncrementCounter}>Increment</button>
          <button onClick={handleDecrementCounter}>Decrement</button>
          <h1>{counter}</h1>
        </div>
      </>
    )
  }
}

const mapStateToProps = state => ({
  counter: state.counter.value
})

const mapDispatchToProps = (dispatch) => ({
  handleDecrementCounter: () => dispatch(decrementCounter()),
  handleIncrementCounter: () => dispatch(incrementCounter())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
