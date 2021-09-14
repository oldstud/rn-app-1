import { createAction } from "@reduxjs/toolkit";

export const loginAction = createAction('auth/Login');
export const logoutAction = createAction('auth/Logout');

export const loginRequest = createAction('auth/loginRequest');
export const loginSuccess = createAction('auth/loginSuccess');
export const loginError = createAction('auth/loginErorr');