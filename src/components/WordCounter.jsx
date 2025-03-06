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
}

export default WordCounter
