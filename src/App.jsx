import React from 'react'
import { Provider } from 'react-redux'
import appStore from '../Utils/AppStore'
import { Body } from './Components/Body'



const App = () => {
  return (
    <>
    <Provider store={appStore}>
    <Body/>
    </Provider>
  
    </>
  )
}

export default App