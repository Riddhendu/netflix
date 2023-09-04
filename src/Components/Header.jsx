import React,{useEffect} from 'react'
import './Header.css'
import { signOut } from "firebase/auth";
import { auth } from '../../Utils/Firebase';
import {useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from '../../Utils/UserSlice';


export const Header = () => {
  const dispatch = useDispatch()
 const navigate = useNavigate()
 const user = useSelector(store=>store.user)
 useEffect(() => {
  const  unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const { uid, email, displayName , photoUrl } = user;
      dispatch(addUser({ uid: uid, email: email, displayName: displayName , photoUrl:photoUrl }))
      navigate('/browse')
      // ...
    } else {
      // User is signed out
      // ...
      navigate('/')
      dispatch(removeUser())
     
    }
  });
  return () => unsubscribe();
}, [])
  const handleSignout =()=>{
    signOut(auth).then(() => {
     
    }).catch((error) => {
      // An error happened.
    });
  }
  return (
    <>
      <div>
        <img className='netfiximg' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png?20190206123158' alt='logonetflix' />
        {user && <>
          <img className='usericon' src={user.photoUrl} /> <button className='signout' onClick={handleSignout}>sign out</button>
        </> }
       
      </div>

    </>
  )
}
