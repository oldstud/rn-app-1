import {loginRequest,loginSuccess,loginError} from './actions'
import auth from '@react-native-firebase/auth';

export const LoginFirebase = (email,password) => async dispatch =>{
    dispatch(loginRequest());
    
    try {
        auth()
        .signInWithEmailAndPassword(email, password)
        
        .then(()=>{
        dispatch(loginSuccess(true));
          console.log('welcome')
        })
        .catch((error)=>{
          dispatch(loginError(error.code))
          console.log(error.code)
        })
    
    }
    catch(error){
      // console.log(error.code)
      
    }
}


export const RegistrationFirebase = (email,password) => async dispatch => {
    dispatch(loginRequest());
try{
    auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
    console.log('User account created & signed in!');
    dispatch(loginSuccess(true));
     })
    }catch(error){
        dispatch(loginError(error));
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
      }
      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }
    console.log(error);
    
}
}

export const LogOutFirebase = () =>async dispatch=> {
    dispatch(loginRequest());
    try {
    auth()
    .signOut()
    .then(()=>dispatch(loginSuccess(false)))
    .then(() => console.log('User signed out!'));
    }catch(error){
        console.log('try later')
    }

}
