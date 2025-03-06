import { useState, useEffect } from 'react'
import { saveText, getText } from '../utils/localStorage'

const WordCounter = () => {
  const [text, setText] = useState(getText(''))
}

export default WordCounter
