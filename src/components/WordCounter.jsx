import { useState, useEffect } from 'react'
import { saveText, getText } from '../utils/localStorage'

import ResetButton from './ResetButton'

const WordCounter = () => {
  const [text, setText] = useState(getText(''))

  useEffect(() => {
    saveText(text)
  }, [text])

  const handleChange = (e) => {
    let inputText = e.target.value

    inputText = inputText.replace(/\s{2,}/g, ' ')

    setText(inputText)
  }

  const handleReset = () => {
    const confirm = window.confirm('Are you sure you want to reset?')
    if (confirm) {
      setText('')
    }
  }

  const cleanedText = text.replace(/\s+/g, ' ').trim()

  const wordCount = cleanedText === '' ? 0 : cleanedText.split(' ').length
  const charCount = cleanedText.length

  return (
    <div className="max-w-xl mx-auto mt-10 p-4 border rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Word Counter</h1>
      <textarea
        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        rows="6"
        value={text}
        onChange={handleChange}
        placeholder="Type something..."
      />
      <div className="mt-3 text-gray-700">
        <p>
          Words: <span className="font-semibold">{wordCount}</span>
        </p>
        <p>
          Characters: <span className="font-semibold">{charCount}</span>
        </p>
      </div>
      <ResetButton onReset={handleReset} />
    </div>
  )
}

export default WordCounter
