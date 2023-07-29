import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Home, CreatePost } from './pages';
import { logoBgW } from './assets';

const App = () => {
    return (
        <BrowserRouter>
            <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]" >
                <Link to="/">
                    <img src={logoBgW} alt="logo" className="w-48 object-contain" style={{width:'16rem'}}/>
                </Link>

                <Link to="/create-post" className="font-inter font-medium bg-[#8454F8] hover:bg-[#6F33FF] text-white px-4 py-2 rounded-xl">
                    Create
                </Link>
            </header>
            <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/create-post" element={<CreatePost/>}/>
                </Routes>
            </main>
        </BrowserRouter>
    );
};

export default App;
