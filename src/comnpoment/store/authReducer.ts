import { AuthAction } from "./action"
const initalSate ={
    isLoggednIn : false,
    // trong đây để khởi tạo đối tượng cần làm cái gì bên trong ??
}

const authReducer = (state =initalSate, action :{type: string , data :any} )=>{
    /*
    action :
    {
        type : ''
        payLoad : Trạng thái hiện tại của cái action
    }
    
    */ 
    switch(action.type){
        case AuthAction.LOGIN:
        console.log(action)
        return {
            ... state,
            isLoggednIn :true,
        }
        default: 
            break;
    }
    return state 
}


export default authReducer