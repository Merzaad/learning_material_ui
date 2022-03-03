import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import TestApp from './testApp'
import { store } from './app/store'
import NavbarM from './components/navbar/navbar'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<NavbarM />}>
            <Route index element={<App />} />
            <Route path="/testApp" element={<TestApp />} />
          </Route>
        </Routes>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
)
