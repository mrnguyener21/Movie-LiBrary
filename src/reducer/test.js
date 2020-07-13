import { TESTONE } from '../constant/actionType'

export default (state=[], action) => {
    switch(action.type){
        case TESTONE: return [...state,'test succesful'];
        default: return state;
    }
}

