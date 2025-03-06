import { useState, useEffect } from 'react'
import { saveText, getText } from '../utils/localStorage'

const WordCounter = () => {
  const [text, setText] = useState(getText(''))

  useEffect(() => {
    saveText(text)
  }, [text])
}

export default WordCounter
