import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainMovieSelection from './pages/MainMovieSelection/MainMovieSelection'
import PlayMovie from './pages/PlayMovie/PlayMovie'
import Profile from './pages/Profile/Profile'
import Metrics from './pages/Metrics/Metrics'
import Login from './pages/Login/Login'
import Header from './components/Header/Header'
import { RequireLogin } from './components/RequireLogin/RequireLogin'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<RequireLogin><MainMovieSelection /></RequireLogin>} />
        <Route path='/play/:id' element={<RequireLogin><PlayMovie /></RequireLogin>} />
        <Route path='/profile' element={<RequireLogin><Profile /></RequireLogin>} />
        <Route path='/metrics' element={<RequireLogin><Metrics /></RequireLogin>} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
