import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from './pages/about/About';
import Home from './pages/home/Home';

export const Content = () => {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/about'>About</Link>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path='/about' element={<About />} />
                    <Route path='/' element={<Home />} />
                </Routes>
            </div>
        </Router>
    );
};

export default Content;
