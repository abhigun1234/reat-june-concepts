import logo from './logo.svg';
import './App.css';
import Register from './Register'
import Header from './Header';
import AboutUs from './AboutUs';
import ListOfCountries from './ListOfCountries'
import HeaderApp from './HeaderApp';
import Home from './Home';
import Custumerinfo from './Custumerinfo';
import ConditaionalRendering from './ConditaionalRendering';
import Parent from './Parent'
import Product from './Product'
import MyParent from './MyParent';
import DashBoard from './DashBoard';
import Login from './Login';
import { Route, Switch } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import PageNotFound from './PageNotFound'
import Fail from './Fail'
import ProductList from './ProductList'
import MyLogin from './MyLogin';
import CustumerList from './CustumerList'
import UserForm from './UserForm'
import CourseList from './CourseList'
function App() {
  return (
    <div className="App myapp">
      {/* <CourseList></CourseList> */}
      {/* <UserForm></UserForm> */}
  
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route path='/' exact component={MyLogin}></Route>
          <Route path='/dashboard' exact component={DashBoard}></Route>
          <Route path='/aboutus' exact component={AboutUs}></Route>
          <Route path='/customer' exact component={Custumerinfo}></Route>
          <Route path='/authfail' exact component={Fail}></Route>
          <Route path='/productlist' exact component={ProductList}></Route>
          <Route path='/custlist' exact component={CustumerList}></Route>
          <Route path='/register' exact component={Register}></Route>
          <Route path='*' exact component={PageNotFound}></Route>

        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
