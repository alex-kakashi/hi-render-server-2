import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Helmet } from 'react-helmet'

class Home2 extends React.Component {
  componentWillMount() {
    console.log("componentWillMount")
  }
  componentDidMount() {
    console.log("componentDidMount")
  }


  render() {
    return (
      <div>
        <Helmet>
          <title>Home xx2</title>
          <meta property="og:title" content="gggg" />
        </Helmet>

        <p>Home ss2</p>
      </div>)
  }
}

const bindAction = dispatch => ({
})

const mapStateToProps = state => ({
})

export default withRouter(connect(mapStateToProps, bindAction)(Home2))
