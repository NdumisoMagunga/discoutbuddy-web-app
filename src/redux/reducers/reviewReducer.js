import {FETCH_REVIEW} from '../actions/types';

export default function(state = [], action){
    switch(action.type){
        case FETCH_REVIEW:
        return action.payload;
         default:
        return state;
    }
}