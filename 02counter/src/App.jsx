import { useState } from 'react' // Importing useState hook from React
import './App.css' // Importing styles

function App() {
  // Declaring state variable 'counter' and its setter 'setCounter' using this we can make changes in the ui of the website
  const [counter, setCounter] = useState(0)

  // Function to increment counter
  const increment = () => {
    setCounter(counter + 1)
  }

  // Function to decrement counter
  const decrement = () => {
    setCounter(counter - 1)
  }

  return (
    <>
      <h1 className='p-4 bg-pink-600 text-3xl'>Counter App</h1>
      <p className='text-xl'>{counter}</p>
      <button onClick={increment} className='m-2 p-2 bg-green-500 text-white'>
      Increment
      </button>
      
      <button onClick={decrement} className='m-2 p-2 bg-red-500 text-white'>
        Decrement
      </button>
    </>
  )
}

export default App // Exporting App component as default

