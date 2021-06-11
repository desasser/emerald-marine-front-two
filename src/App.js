import React, {useEffect} from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { makeStyles, CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles'
import Cart from "./pages/Cart"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import News from "./pages/News"
import AdminLogin from './pages/AdminLogin'
import Admin from './pages/Admin'
import Products from "./pages/Products"
import Support from "./pages/Support"
import theme from './theme-provider'
import store from './utils/store'
import API from './utils/API'

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

  useEffect(() => {
    API.getAllProducts().then(res => {
      store.dispatch({
        type: 'GET_PRODUCTS',
        payload: {
          products: res.data
        }
      });
    });
    API.getAllBlogPosts().then(res => {
      store.dispatch({
        type: 'GET_BLOG_POSTS',
        payload: {
          blog: res.data
        }
      });
    });
    API.getAllNewsArticles().then(res => {
      store.dispatch({
        type: 'GET_NEWS_ARTICLES',
        payload: {
          newsArticles: res.data
        }
      });
    });
    API.getAllPressReleases().then(res => {
      store.dispatch({
        type: 'GET_PRESS_RELEASES',
        payload: {
          pressReleases: res.data
        }
      });
    });
    
  }, [store.getState().products.products, store.getState().blog.blog, store.getState().newsArticles.newsArticles, store.getState().pressReleases.pressReleases])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <main className={classes.main}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/cart" component={Cart} />
            <Route path="/contact" component={Contact} />
            <Route path="/home" component={Home} />
            <Route path="/news" component={News} />
            <Route path="/products" component={Products} />
            <Route path="/support" component={Support} />
            <Route path='/login' component={AdminLogin}/>
            <Route path='/admin' component={Admin}/>
          </Switch>
        </Router>
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
