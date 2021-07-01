import './fonts.css'
import React from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { makeStyles, CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles'
import Cart from "./pages/Cart"
import NotFound from './components/NotFound';
import Contact from "./pages/Contact"
import Oscar from "./pages/Oscar"
import Home from "./pages/Home"
import News from "./pages/News"
import AdminLogin from './pages/AdminLogin'
import Admin from './pages/Admin'
import Products from "./pages/Products"
import SingleProduct from "./pages/SingleProduct"
import SingleBlog from "./pages/SingleBlog"
import Support from "./pages/Support"
import theme from './theme-provider'
import { useSelector } from 'react-redux';

const useStyles = makeStyles({
  main: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '0 auto',
    maxWidth: '80%',
    marginTop: '64px',
    // minHeight: '50vh'
  },
})

function App() {
  const classes = useStyles()
  const products = useSelector(state => state.products.products)
  const blog = useSelector(state => state.blog.blog)
  const pr = useSelector(state => state.pressReleases.pressReleases)
  const news = useSelector(state => state.newsArticles.newsArticles)

  const allPosts = blog.concat(pr, news);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Header />
        <main className={classes.main}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/cart" component={Cart} />
            <Route path="/contact" component={Contact} />
            <Route path="/home" component={Home} />
            <Route path="/oscarwaterrescue" component={Oscar} />
            <Route path="/news/:id">
              {allPosts.length === 0 ? <Redirect to="/news" /> : <SingleBlog/>}
            </Route>
            <Route path="/news" component={News} />
            <Route path="/product/:sku">
              {products.length === 0 ? <Redirect to="/products" /> : <SingleProduct/>}
            </Route>
            <Route path="/products" component={Products} />
            <Route path="/support" component={Support} />
            <Route path='/login' component={AdminLogin} />
            <Route path='/admin' component={Admin} />
            <Route component={NotFound}/>
          </Switch>
        </main>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
