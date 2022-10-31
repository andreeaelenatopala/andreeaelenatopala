import { useState, useEffect } from 'react'

const useMobileResolution = () => {
  const [isMobileRes, setIsMobileRes] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsMobileRes(true)
      } else {
        setIsMobileRes(false)
      }
    }

    window.addEventListener('resize', handleResize)

    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return isMobileRes
}

export default useMobileResolution
