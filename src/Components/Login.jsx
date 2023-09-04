import React,{useState,useRef} from 'react'
import { validate } from '../../Utils/Validate'
import { Header } from './Header'
import { createUserWithEmailAndPassword,signInWithEmailAndPassword ,updateProfile} from "firebase/auth";
import './Login.css'
import { auth } from '../../Utils/Firebase';
import { useDispatch } from 'react-redux';
export const Login = () => {

  const [isTrue,setIstrue] = useState(true)
  const [message, setMessage] = useState(null)

  const dispatch = useDispatch()
  const handlechange =()=>{
    setIstrue(!isTrue)
  }
    const name = useRef(null)
   const email = useRef(null)
   const password = useRef(null)
  const handleButtonclick =()=>{
    
    const msg = validate()
    setMessage(msg)
    if(msg==null) return;

    if(!isTrue){
      createUserWithEmailAndPassword(auth,email.current.value,password.current.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        updateProfile(user, {
          displayName: name.current.value, photoURL: "https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp"
        }).then(() => {
          // Profile updated!
          // ...
          const { uid, email, displayName , photoUrl } = auth.currentUser;
          dispatch(addUser({ uid: uid, email: email, displayName: displayName , photoUrl:photoUrl }))
          
        }).catch((error) => {
          setMessage(error.message)
        });
       
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        setMessage(errorCode + "" + errorMessage)
      });
    
    }else{
      signInWithEmailAndPassword(auth, email.current.value,password.current.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
       
        console.log(user)
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setMessage(errorCode + "" + errorMessage)
      });
    
    }
   
  }
  return (
    <>
      <div>
        <Header />

        <div>
          <img src='https://assets.nflxext.com/ffe/siteui/vlv3/855ed6e2-d9f1-4afd-90da-96023ec747c3/85eb5b91-25ed-4965-ace9-ba8e4a0ead8d/IN-en-20230828-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt='backimg' />
        </div>
        <form onSubmit={(e)=>e.preventDefault()} className='formsign'>
       <h1 className='textsign'>{isTrue ? 'Sign In':'Sign Up'}</h1>
       {!isTrue &&   <input ref={name} className='text' type="text" placeholder='UserName'/>}
  <input ref={email} className='text' type="text" placeholder='Email Address'/>
  <input ref={password} className='text' type="text" placeholder='Password'/>
  <p className='error'>{message}</p>
  <button className='button' onClick={handleButtonclick}>
  {isTrue ? 'Sign in':'Sign up'}</button>
  <p className='netflixx' onClick={handlechange}>
    
   {isTrue ? 'New to Netflix? SIgn Up Now':'already an user! Sign In'} </p>
  
        </form>
      </div>


    </>
  )
}
