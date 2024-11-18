import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'

import Navbar from './components/Navbar'
import Search from './components/Search'
import UserGrid from './components/UserGrid'
import Alert from './components/Alert'
import Profile from './components/Profile'
import NotFound from './components/NotFound'

import GithubState from './contexts/GitHub/githubState'
import AlertState from './contexts/Alert/alertState'

function App() {
    return (
        <GithubState>
            <AlertState>
                <BrowserRouter>
                    <div className="app">
                        <Navbar />
                        <div className="container">
                            <Alert />
                            <Routes>
                                <Route
                                    path='/'
                                    element={
                                        <>
                                            <Search />
                                            <UserGrid />
                                        </>
                                    }
                                />
                                <Route
                                    path='/users/:login'
                                    element={
                                        <Profile />
                                    }
                                />
                                <Route
                                    path='*'
                                    element={
                                        <NotFound />
                                    }
                                />
                            </Routes>
                        </div>
                    </div>
                </BrowserRouter>
            </AlertState>
        </GithubState>
    )
}

export default App