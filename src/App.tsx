import { useState } from 'react'

function App() {
  const [text, setText] = useState("")

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>入力された文字: {text}</p>
    </div>
  )
}

export default App