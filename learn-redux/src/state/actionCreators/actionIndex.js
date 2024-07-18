import {WITHDRAW_MONEY,DEPOSIT_MONEY} from '../stateConstant'

export const despositMoney =(data)=>{
    console.log('Action Deposit Money Data :'+data);

    return (dispatch)=>{
        dispatch({
            type:DEPOSIT_MONEY,
            payload:data
        });
    }
}

export const withdrawMoney =(data)=>{
    console.log('Action Withdraw Money Data :'+data);
    return (dispatch)=>{
        dispatch({
            type:WITHDRAW_MONEY,
            payload:data
        });
    }
}