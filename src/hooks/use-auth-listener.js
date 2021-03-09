import { useState, useEffect, useContext} from 'react';
import { FirebaseContext } from '../context/firebase';

export default function useAuthListener() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('authUser')))

  console.log("user", user)
  console.log("Storage", JSON.parse(localStorage.getItem('authUser')))

  const { firebase } = useContext(FirebaseContext)

  useEffect(() => {
    const listener = firebase.auth().onAuthStateChange((authUser) => {
      if (authUser) {
        console.log("authUser: ", authUser)
        localStorage.setItem('authUser', JSON.stringify(authUser))
        setUser(authUser)
      } else {
        localStorage.removeItem('authUser');
        setUser(null);
      }
    })
    return () => listener()
  }, [])

  return { user };
}