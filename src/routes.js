import Home from './pages/home/home.component';
import Register from './components/RegisterComponent/Register';
import LogIn from './components/Login.Components/LogIn'

export const privateRoutes = [];

export const publicRoutes = [
  {
    url: '/',
    component: Home
  },
   {
    url: '/login',
    component: LogIn
  },
  {
    url: '/register',
    component: Register
  }
 
];
