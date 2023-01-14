import { useState, useEffect } from 'react'

const useScrollLock = () => {
  const [isLocked, setIsLocked] = useState(false)
  const bodyStyle = document.body.style

  useEffect(() => {
    isLocked
      ? bodyStyle.overflowY = 'hidden'
      : bodyStyle.overflowY = 'auto'
  }, [isLocked, bodyStyle])

  const toggleScrollLock = () => setIsLocked(!isLocked)

  const unlockScroll = () => {
    bodyStyle.overflowY = 'auto'
  }

  return {
    isLocked,
    toggleScrollLock,
    unlockScroll
  }
}

export default useScrollLock
