import { BrowserRouter as Router, Switch, Route, Link, useParams, useRouteMatch } from 'react-router-dom'

// screens
import Home from './screens/Home'
import Movies from './screens/Movies'
import Movie from './screens/Movie'
import Admin from './screens/Admin'
// import CategoryPage from './screens/CategoryPage'


// components
import SideBar from './components/SideBar'
import Categories from './components/Categories'

export default function App() {
  return (
    <Router>
      <div className="container">
        <div className="row">
          <h1 className="mt-3">Go watch a Movie</h1>
          <hr className="mb-3"/>
        </div>

        <div className="row">
          <div className="col-md-2">
            <SideBar />
          </div>

          <div className="col-md-10">
              <Switch>
                <Route path='/movies/:id' component={Movie} />

                <Route path="/movies">
                  <Movies />
                </Route>
                <Route exact path="/by-category">
                  <CategoryPage />
                </Route>

                <Route
                  exact
                  path='/by-category/drama'
                  render={(props) => <Categories {...props} title={`Drama`} />}
                />
                <Route
                  exact
                  path='/by-category/comedy'
                  render={(props) => <Categories {...props} title={'Comedy'} />}
                />

                <Route path="/admin">
                  <Admin />
                </Route>
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
          </div> 
        </div> 
      </div> 
    </Router>
  );
}
const CategoryPage = () => {
  let { path, url } = useRouteMatch();
  
  return (
      <>
          <h2>Categories</h2>
         <ul>
           <li><Link to={`${path}/comedy`}>Comedy </Link></li>
           <li><Link to={`${path}/drama`}>Drama </Link></li>
         </ul>
      </>
  );
}