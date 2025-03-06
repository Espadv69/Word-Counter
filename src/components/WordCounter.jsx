import { useState, useEffect } from 'react'
import { saveText, getText } from '../utils/localStorage'

const WordCounter = () => {
  const [text, setText] = useState(getText(''))

  useEffect(() => {
    saveText(text)
  }, [text])

  const handleChange = (e) => {
    setText(e.target.value)
  }

  const wordCount = text.trim() === '' ? 0 : text.trim().split(/\s+/).length
  const charCount = text.length

  return (
    <div className="max-w-xl mx-auto mt-10 p-4 border rounded-lg shadow-lg">
      <h1>Word Counter</h1>
      <textarea
        rows="6"
        value={text}
        onChange={handleChange}
        placeholder="Type something..."
      />
      <div className="">
        <p>
          Words: <span>{wordCount}</span>
        </p>
        <p>
          Characters: <span>{charCount}</span>
        </p>
      </div>
    </div>
  )
}

export default WordCounter
