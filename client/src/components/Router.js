export default <Router history={hashHistory}>
  <Route path="/" component={App}>
    <IndexRoute component={Header}/>
    <Route path="login" component={Login}/>
  </Route>
</Router>