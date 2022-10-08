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
import PersonInfo from './PersonInfo';
import EmpData from './EmpData';
import ProductDetails from './ProductDetails';
import ProductData from './ProductData';
import AddProduct from './AddProduct';
import AddPosts from './AddPosts';
import mainLogo from'./ecart.png';
import ProductDataEcomm from './ProductDataEcomm';

function App() {

function clickMe(){

  alert("hello")
}
  return (
    <div className="App myapp"  style={{ backgroundImage: "url(/ecart.png)" }}>
     
  
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route path='/' exact component={DashBoard}></Route>
          <Route path='/dashboard' exact component={DashBoard}></Route>
          <Route path='/aboutus' exact component={AboutUs}></Route>
          <Route path='/customer' exact component={Custumerinfo}></Route>
          <Route path='/authfail' exact component={Fail}></Route>
          <Route path='/productlist' exact component={ProductList}></Route>
          <Route path='/register' exact component={Register}></Route>
          <Route path='/addproduct' exact component={AddProduct}></Route>
          <Route path='/emp' exact component={EmpData}></Route>
          <Route path='/login' exact component={Login}></Route>
          
          
          <Route path='*' exact component={PageNotFound}></Route>

        </Switch>
      </BrowserRouter> 
              
    </div>
  );
}

export default App;
