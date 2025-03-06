const STORAGE_KEY = 'wordCounterText'

export const saveText = (text) => {
  localStorage.setItem(STORAGE_KEY, text)
}

export const getText = () => {
  return localStorage.getItem(STORAGE_KEY) || ''
}
