import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App'
import store from './redux/store'
import { Provider } from 'react-redux'

//const root = ReactDOM.createRoot(document.getElementById('root'))

//root.render(
  ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </React.StrictMode>
  </Provider>,
    document.getElementById('root'))
//)