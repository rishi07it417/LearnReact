import {WITHDRAW_MONEY,DEPOSIT_MONEY} from '../stateConstant'

 const initialState = 0; 
 const reducer =(state=initialState,action)=>{
    console.log('Amount Reducer :: state:'+state+'| action:',action);
    if(action.type===DEPOSIT_MONEY){
        return state+action.payload;
    }
    else if(action.type===WITHDRAW_MONEY){
        return state-action.payload;
    }
    else{
        return state;
    }
}

export default reducer;