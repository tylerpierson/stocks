import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Dashboard from './pages/Dashboard/Dashboard'
import Stock from './pages/Stock/Stock'
import About from './pages/About/About'
import Nav from './components/Nav/Nav'

export default function App(){
    return (
        <div className='App'>
            <Nav/>
            <Routes>
                <Route path="/" element={<Home/>}/>      
                <Route path="/about" element={<About/>}/>      
                <Route path="/dashboard" element={<Dashboard/>}/>      
                <Route path="/stocks/:symbol" element={<Stock/>}/>                                                
            </Routes>
        </div>
    )
}