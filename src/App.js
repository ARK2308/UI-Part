import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

//User Routes Link 
import Layout from './layouts/Layout';
import Home from './pages/Home/Home';
import { Routes, Route } from 'react-router-dom';
import ProductsPage from './pages/ProductsPage/ProductsPage';
import ProductDetailsPage from './pages/ProductDetailsPage/ProductDetailsPage';
import Carts from './pages/Carts/Carts';
import UserProfile from './pages/UserProfile/UserProfile';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import ResetPassword from './pages/ForgotPassword/ResetPassword';
import Shipping from './pages/Shipping/Shipping';
import Checkout from './pages/Checkout/checkout';
import UserOrders from './pages/UserOrders/UserOrders';

// Admin Routes Link
import AdminCommonLayout from './pages/Admin/AdminCommonLayout';
import AdminLogin from './pages/AdminLogin/AdminLogin';
import AdminDashboard from './pages/Admin/AdminDashboard';
import AdminProductspage from './pages/Admin/AdminProductsPage';
import AddProducts from './pages/Admin/AddProducts';
import AddCategory from './pages/Admin/AddCategory';
import Orders from './pages/Admin/Orders';
import Error from './pages/Error/Error'
import toast, { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="App">
      
        <Routes>
          {/* Admin Routes */}
          <Route path='/admin/dashboard' element={<AdminCommonLayout ><AdminDashboard /></AdminCommonLayout>} />
          <Route path='/admin/products' element={<AdminCommonLayout ><AdminProductspage /></AdminCommonLayout>} />
          <Route path='/admin/addproducts' element={<AdminCommonLayout ><AddProducts /></AdminCommonLayout>} />
          <Route path='/admin/addcategory' element={<AdminCommonLayout ><AddCategory /></AdminCommonLayout>} />
          <Route path='/admin/orders' element={<AdminCommonLayout ><Orders /></AdminCommonLayout>} />
          <Route path='/adminlogin' element={<Layout><AdminLogin /></Layout>} />

          {/* User Route */}
          <Route path='/' element={<Layout><Home /></Layout>} />
          <Route path='/products' element={<Layout><ProductsPage /></Layout>} />
          <Route path='/productdetails/:id' element={<Layout><ProductDetailsPage /></Layout>} />
          <Route path='/carts' element={<Layout><Carts /></Layout>} />
          <Route path='/userprofile' element={<Layout><UserProfile /></Layout>} />
          <Route path="/login" element={<Layout><Login /></Layout>} />
          <Route path="/register" element={<Layout><Register /></Layout>} />
          <Route path="/forgotpassword" element={<Layout><ForgotPassword /></Layout>} />
          <Route path="/resetpassword/:id/:token" element={<Layout><ResetPassword /></Layout>} />
          <Route path="/shipping" element={<Layout><Shipping /></Layout>} />
          <Route path="/checkout" element={<Layout><Checkout /></Layout>} />
          <Route path="/userorders" element={<Layout><UserOrders /></Layout>} />
          <Route path='*' element={<Layout><Error /></Layout>} />
        </Routes>
        <Toaster /> 
    </div>
  );
}

export default App;
