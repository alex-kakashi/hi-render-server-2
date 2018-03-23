import React from 'react'
// import RootView from './root'
// import Home from './home'
// import Post from './post'
// import NotFound from './not-found'


const RootView = (props) => {
  return (<div>Ro ot Vi ew</div>)
}

const Home = (props) => {
  return (<div>Home</div>)
}

const Post = (props) => {
  return (<div>Post</div>)
}

const NotFound = (props) => {
  return (<div>Not found</div>)
}

const routes = [
  {
    component: RootView,
    routes: [
      {
        path: '/',
        exact: true,
        component: Home
      },
      {
        path: '/home',
        exact: true,
        component: Home
      },
      {
        path: '/post',
        component: Post
      },
      {
        path: '*',
        component: NotFound
      }
    ]
  }
];

export default routes;