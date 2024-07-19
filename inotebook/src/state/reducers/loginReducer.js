import {LOGIN,LOGOUT,SINGUP} from '../stateConstant'


 const initialState = {
    name:"",
    email:"",
    password:""
 }; 
 const reducer = async(state=initialState,action)=>{
    console.log('Login Reducer :: state:',state,'| action:',action);
    let url = `http://localhost:3001/api/auth`;

    if(action.type===LOGIN){
        console.log(action.payload.email);
        try {
            const loginObj={
                email: action.payload.email,
                password : action.payload.password
            }
            console.log(loginObj);

            let data = await fetch(url+'/loginUser',{ method: 'post',
                body:JSON.stringify(loginObj), 
                headers: new Headers({
                    'authToken': localStorage.getItem('authToken'),
                    'Content-Type': 'application/json'
                })});
        
            let parsedData = await data.json();
            console.log(parsedData);
            if(parsedData!==null && parsedData!==undefined && parsedData.authToken){
                localStorage.setItem('authToken',parsedData.authToken);
            }
       } catch (e) {
         console.log(e);
       }

        return state;
    }
    else if(action.type===LOGOUT){
        localStorage.removeItem('authToken');
        return state;
    }
    else if(action.type===SINGUP){

        try {
            const singupObj={
                name: action.payload.name,
                email: action.payload.email,
                password : action.payload.password
            }
           
            let data = await fetch(url+'/createUser',{ method: 'post',
                body:JSON.stringify(singupObj), 
                headers: new Headers({
                    'Content-Type': 'application/json'
                })});
        
            let parsedData = await data.json();
            console.log(parsedData);
            if(parsedData!==null && parsedData!==undefined && parsedData.authToken){
                localStorage.setItem('authToken',parsedData.authToken);
            }
       } catch (e) {
         console.log(e);
       }

        return state;
    }
    else{
        return state;
    }
}

export default reducer;