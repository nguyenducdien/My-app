export const CHANGE_COLOR='CHANGE_COLOR';

interface ChangeColorAction {
    type: typeof CHANGE_COLOR;
    payload: {
        buttonId : string;
        color:string;
    }   
}
export  type buttonAction = ChangeColorAction;
export const changeColor = (buttonId: string, color: string): buttonAction => ({
    type: CHANGE_COLOR,
    payload: { buttonId, color }
  });