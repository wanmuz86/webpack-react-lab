import React, { Suspense } from 'react'
import logo from './assets/logo.png'

const ComponentA = React.lazy(()=> import('./components/ComponentA'))
const ComponentB = React.lazy(()=> import('./components/ComponentB'))

const App = () => {
  return (
    <div>
        <h1 className='heading'>Hello React + Typescript with Webpack</h1>
        <img src={logo} alt="logo" />
        <Suspense fallback={<p>Loading...</p>}>
        <ComponentA/>
        <ComponentB/>
        </Suspense>
        
    </div>
  )
}

export default App