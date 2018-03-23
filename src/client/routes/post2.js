import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Helmet } from 'react-helmet'

class Post2 extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Post2</title>
          <meta property="og:title" content="sfwfwfw" />
          <meta property="og:title2" content="s1" />
          <meta property="og:title3" content="s2" />
          <meta property="og:title4" content="s3" />
        </Helmet>
        <p>Post2</p>
      </div>
    )
  }
}

const bindAction = dispatch => ({
})

const mapStateToProps = state => ({
})

export default withRouter(connect(mapStateToProps, bindAction)(Post2))
