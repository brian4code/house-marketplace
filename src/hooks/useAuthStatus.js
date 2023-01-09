import { useState, useEffect } from "react"
import {getAuth, onAuthStateChanged} from 'firebase/auth'

// custom hook to check for logged in status 

export const useAuthStatus = () => {
  const [loggedIn, setLoggedIn] = useState(false)
  const [checkingStatus, setCheckingStatus] = useState(true)

  useEffect(() => {
    const auth = getAuth()
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedIn(true)
      }
      setCheckingStatus(false)
    })
  })

  return { loggedIn, checkingStatus }
}
