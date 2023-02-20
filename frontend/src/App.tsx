import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="min-w-min mb-16">
        <img src={reactLogo} className="align-text-bottom ml-28" alt="react logo" width="100" />
      </div>
      <h1>CMR + Django</h1>
      <div className="card mb-8">
        <button className = "mb-8" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code>
        </p>
      </div>
      <p className="read-the-docs">
        This is being hosted on Firebase.  
      </p>
    </div>
  )
}

export default App
