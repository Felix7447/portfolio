import { useState } from 'react'

const useShowMenu = () => {
  const [showMenu, setShowMenu] = useState(false)
  const toggle = () => setShowMenu(!showMenu)

  return {
    showMenu,
    toggle
  }
}

export default useShowMenu
