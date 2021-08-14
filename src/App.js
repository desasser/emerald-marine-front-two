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
import Thank from "./pages/Thank"
import theme from './theme-provider'
import { useSelector } from 'react-redux';
import ResponsiveDrawer from './components/ResponsiveDrawer';
import {Helmet} from 'react-helmet';

const useStyles = makeStyles({
  main: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '0 auto',
    margin: '8rem 0 2rem',
    overflow: 'hidden'
  },
})

function App() {
  const classes = useStyles()
  const products = useSelector(state => state.products.products)
  const blog = useSelector(state => state.blog.blog)
  const pr = useSelector(state => state.pressReleases.pressReleases)
  const news = useSelector(state => state.newsArticles.newsArticles)

  const allPosts = blog.concat(pr, news);

  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Helmet>
          <title>Emerald Marine Products</title>
          <meta
            name="description"
            content="Keeping employees as safe as possible working on water, marine safety, and man-overboard protection need to be built-in to the culture of the organization."
          />
        </Helmet>
      { isMobile ? <ResponsiveDrawer /> : <Header />}
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
            <Route path="/thank" component={Thank} />
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
