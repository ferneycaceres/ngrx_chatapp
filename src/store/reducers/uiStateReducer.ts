import { SelectUserAction } from 'store/actions/actions';
import { SELECT_USER_ACTION } from './../actions/actions';
import {UiState, INITIAL_UISTATE} from "../ui-state";
import {Action} from "@ngrx/store";
import { THREAD_SELECTED_ACTION } from "../actions/actions";


export function uiState(state: UiState = INITIAL_UISTATE, action: any) : UiState {

    switch (action.type)  {

        case THREAD_SELECTED_ACTION:

            const newState = Object.assign({}, state);

            newState.currentThreadId = action.payload;

            return newState;

        case SELECT_USER_ACTION : 
            
            return handleSelectUserAction(state,action);



        default:
            return state;
    }

}

function handleSelectUserAction(state:UiState,action:SelectUserAction){

    const newUiState = Object.assign({}, state);

    newUiState.userId = action.payload;
    newUiState.currentThreadId =  undefined;

    return newUiState;

}