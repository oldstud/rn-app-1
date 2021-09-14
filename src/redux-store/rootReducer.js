import { configureStore } from "@reduxjs/toolkit";
import reducer from './AuthReducer/reducerAuth'


export const store = configureStore({
    reducer:{
        reducer,
    }

});

// export const store = configureStore({
//     reducer:{
//         auth:reducerAuth,
//     }

// });