
import { createReducer,combineReducers } from "@reduxjs/toolkit";
// import { createSlice } from '@reduxjs/toolkit';
// import { loginAction, logoutAction } from "./actions";
import * as actions from "./actions";


export const reducerAuth = createReducer({isLoggin:false},{
    [actions.loginSuccess]:(state,action)=> Object.assign({}, state, {
        isLoggin: action.payload
      }),
    })
    
    export const isLoading = createReducer(false,{
        [actions.loginRequest]:()=> true,
        [actions.loginSuccess]:()=>false,
        [actions.loginError]:()=>false,
    })
    
    export const error = createReducer(null,{
        [actions.loginError]:(_,action)=>action.payload,
        [actions.loginRequest]:()=> null,
    })
    
    export default combineReducers({
        reducerAuth,
        isLoading,
        error
    })



// export const reducerAuth = createReducer({isLoggin:false},{
//     [loginAction]:(state)=>{
//         state.isLoggin = true
//     },
//     [logoutAction]:(state)=>{
//         state.isLoggin = false;
//     }
// })  


// const authSlice = createSlice({
//     name:'authentication',
//     initialState:{
//         isLogin:false,

//     },
//     reducers:{
//         logIn(state){
//             state.isLogin = true;
//         },
//         logOut(state){
//             state.isLogin = false;
//         }
//     }

// })

// export const {logIn,logOut} = authSlice.actions;