import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Layout from './components/Layout'
import OurServices from './pages/services/OurServices'
import Flights from './pages/services/Flights'
import Stays from './pages/services/Stays'
import Signin from './pages/auth/Signin'
import Signup from './pages/auth/Signup'
import Authlayout from './pages/auth/Authlayout'
import PrivateRoutes from './utils/PrivateRoutes'
import About from './pages/About'
import Blogs from './pages/Blogs'
import Offers from './pages/Offers'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route element={<PrivateRoutes />}>
            <Route path='about' element={<About />} />
            <Route path='blogs' element={<Blogs />} />
            <Route path='offers' element={<Offers />} />
            <Route path='our-services' element={<OurServices />}>
              <Route index element={<Flights />} />
              <Route path='stays' element={<Stays />} />
            </Route>
          </Route>
          <Route element={<Authlayout />}>
            <Route path='signin' element={<Signin />} />
            <Route path='signup' element={<Signup />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
