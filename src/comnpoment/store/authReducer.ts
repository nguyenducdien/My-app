import { CHANGE_COLOR,buttonAction } from "./action"
interface ButtonState {
   [key:string]: string,
  };
const initialState  :ButtonState={
    button1: 'blue',
    button2: 'blue',
    button3: 'blue',
}


const buttonReducer = (state =initialState, action :buttonAction )=>{
    /*
    action :
    {
        type : ''
        payLoad : Trạng thái hiện tại của cái action
    }
    
    */ 
    switch(action.type){
        case CHANGE_COLOR:
        
        return {
            ... state,
            [action.payload.buttonId]:action.payload.color
        }
        default: 
            return state;
    }
   
}


export default buttonReducer;