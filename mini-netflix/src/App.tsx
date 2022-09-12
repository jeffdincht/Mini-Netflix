import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainMovieSelection from './pages/MainMovieSelection/MainMovieSelection'
import PlayMovie from './pages/PlayMovie/PlayMovie'
import Profile from './pages/Profile/Profile'
import Metrics from './pages/Metrics/Metrics'
import Login from './pages/Login/Login'
import Header from './components/Header/Header'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<MainMovieSelection />} />
        <Route path="/play" element={<PlayMovie />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/metrics" element={<Metrics />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
