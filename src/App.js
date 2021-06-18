import React, { useEffect } from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { makeStyles, CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles'
import { updateProducts, updateBlogPosts, updateNewsArticles, updatePressReleases } from './utils/helpers/updateStore';
import Cart from "./pages/Cart"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import News from "./pages/News"
import AdminLogin from './pages/AdminLogin'
import Admin from './pages/Admin'
import Products from "./pages/Products"
import SingleProduct from "./pages/SingleProduct"
import SingleBlog from "./pages/SingleBlog"
import Support from "./pages/Support"
import theme from './theme-provider'
import store from './utils/store'

const useStyles = makeStyles({
  main: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '0 auto',
    maxWidth: '80%',
    marginTop: '64px',
    //  height: '80vh'
  },
})

function App() {
  const classes = useStyles()
  const products = store.getState().products.products;
  const blog = store.getState().blog.blog;
  const newsArticles = store.getState().newsArticles.newsArticles;
  const pressReleases = store.getState().pressReleases.pressReleases;

  useEffect(() => {
    updateProducts();
    updateBlogPosts();
    updateNewsArticles();
    updatePressReleases();
  }, [products, blog, newsArticles, pressReleases])
  // 

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
            <Route path="/news/:id" component={SingleBlog} />
            <Route path="/news" component={News} />
            <Route path="/product/:sku" component={SingleProduct} />
            <Route path="/products" component={Products} />
            <Route path="/support" component={Support} />
            <Route path='/login' component={AdminLogin} />
            <Route path='/admin' component={Admin} />
          </Switch>
        </main>
      </Router>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
