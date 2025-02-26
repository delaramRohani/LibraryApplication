import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>Welcome to Library App 📚</h1>
        {/* <Button variant="contained" color="primary">
          Click Me
        </Button> */}
      </div>
    </>
  )
}

export default App
