import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import { Helmet } from 'react-helmet'

import { StaticRouter, Switch, Route } from 'react-router-dom'

import Routes from './client/routes/config-routes'
import reducers from './client/reducers'

import Home2 from './client/routes/home2'
import Post2 from './client/routes/post2'
import NotFound from './client/routes/not-found'

const store = createStore(reducers, applyMiddleware(thunk));

const app = express()
let context = {}

app.use((req, res) => {


  const html = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        <Switch>
          <Route exact path="/" component={Home2} />
          <Route exact path="/post" component={Post2} />
          <Route path="*" component={NotFound} />
        </Switch>
      </StaticRouter>
    </Provider>

    // <AppRoute location={req.url} />

    // <Routes url={req.url} context={context} />
  )

  const seo = Helmet.renderStatic()

  res.write("<!DOCTYPE html><html><head>");
  res.write(seo.title.toString())
  res.write(seo.meta.toString())
  res.write("</head><body>")
  res.write("<div id='content'>");

  res.write(html);
  res.write("</div></body></html>");
  res.end()
})

app.listen(3000, () => {
  console.log('Express app listening on port 3000')
})