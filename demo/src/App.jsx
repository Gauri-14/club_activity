import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import image1 from './assets/img1.jpeg'
import image2 from './assets/img2.jpeg'
import navbar from './navbar.jsx';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <ul>
        <li><a href="http://www.imsec.ac.in" target="_blank">External Link 1</a></li>
        <li><a href="https://example.com" target="_blank">External Link 2</a></li>
        <li><a href="https://example.com" target="_blank">External Link 3</a></li>
        <li><a href="https://example.com" target="_blank">External Link 4</a></li>
        <li><a href="https://example.com" target="_blank">External Link 5</a></li>
      </ul>
      <div>
        <img src={image1} alt="image 1" />
        <img src={image2} alt="image 2" />
      </div>
    </>
  )
}

export default App
