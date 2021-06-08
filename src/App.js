import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { makeStyles, CssBaseline } from '@material-ui/core';
import Cart from "./pages/Cart"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import News from "./pages/News"
import Products from "./pages/Products"
import Support from "./pages/Support"

const useStyles = makeStyles({
  main: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '0 auto',
    maxWidth: '80%',
    marginTop: '64px',
    //  height: '100vh'
  },
})

function App() {
  const classes = useStyles()

  return (
    <div className="App">
      <CssBaseline />
      <Header />
      <main className={classes.main}>
        <Router>
          <Switch>
            {/* <Route exact path="/" component={Home} /> */}
            <Route path="/cart" component={Cart} />
            {/* <Route path="/contact" component={Contact} /> */}
            {/* <Route path="/home" component={Home} /> */}
            {/* <Route path="/news" component={News} /> */}
            {/* <Route path="/products" component={Products} /> */}
            {/* <Route path="/support" component={Support} /> */}

          </Switch>
        </Router>
      </main>
      <Footer />
    </div>
  );
}

export default App;
