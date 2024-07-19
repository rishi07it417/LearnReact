import {LOGIN,SINGUP,LOGOUT} from '../stateConstant'

export const login =(data)=>{
    console.log('Login Data :'+data);

    return (dispatch)=>{
        dispatch({
            type:LOGIN,
            payload:data
        });
    }
}

export const logout =(data)=>{
    console.log('Logout Data :'+data);
    return (dispatch)=>{
        dispatch({
            type:LOGOUT,
            payload:data
        });
    }
}

export const signUp =(data)=>{
    console.log('SignUp Data :'+data);
    return (dispatch)=>{
        dispatch({
            type:SINGUP,
            payload:data
        });
    }
}