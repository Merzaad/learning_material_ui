import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TestBoard from './TestBoard'
import Board from './Board'
import { store } from './app/store'
import NavbarM from './Navbar'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<NavbarM />}>
            <Route index element={<Board />} />
            <Route path="/testboard" element={<TestBoard />} />
          </Route>
        </Routes>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
)
