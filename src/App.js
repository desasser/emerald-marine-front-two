import React from 'react';
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
import SingleProduct from "./pages/SingleProduct"
import SingleBlog from "./pages/SingleBlog"
import Support from "./pages/Support"
import theme from './theme-provider'

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
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
