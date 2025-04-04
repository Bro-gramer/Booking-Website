import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Component/Home/Home';
import Detail from './Component/Detail/Detail';
import Book from './Component/Book/Book';
import Pay from './Component/Book/Pay';
import Done from './Component/Book/Done';
import Forget from './Component/Login/Forget';
import Create from './Component/Login/Create';
import Signup from './Component/Login/SignUp';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Signup />} />
                <Route path="/detail" element={<Detail />} />
                <Route path="/book" element={<Book />} />
                <Route path="/pay" element={<Pay />} />
                <Route path="/done" element={<Done />} />
                <Route path='/create' element={<Create />} />
                <Route path='/forget' element={<Forget />} />
            </Routes>
        </Router>

    );
}

export default App;
