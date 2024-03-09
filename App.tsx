import * as React from 'react';
import MainContainer from './navigation/MainContainer';
import Login from './navigation/screens/Auth/Login';
import { useState, useEffect } from 'react';
import { User, onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebaseConfig';

function App(){
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log('user', user)
      setUser(user)
    })
  }, [])

  return(
    <>
        {user ? 
        (<MainContainer />) : 
        (<Login />) 
        }
    </>
  )
}

export default App;