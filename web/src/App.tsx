import { useState } from 'react'

interface ButtonProps {
  title: string
}
function Button(props: ButtonProps ){
  return(
    <button>
      {props.title}
    </button>
    
  )
}
function App() {
  return (
    <div>
      <Button title='B1'/>
      <Button title='B2'/>
      <Button title='B3'/>
      <Button title='B4'/>
    </div>
  )
}

export default App
