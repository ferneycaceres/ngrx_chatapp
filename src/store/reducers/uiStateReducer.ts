import {UiState, INITIAL_UISTATE} from "../ui-state";
import {Action} from "@ngrx/store";
import { THREAD_SELECTED_ACTION } from "../actions/actions";


export function uiState(state: UiState = INITIAL_UISTATE, action: any) : UiState {

    switch (action.type)  {

        case THREAD_SELECTED_ACTION:

            const newState = Object.assign({}, state);

            newState.currentThreadId = action.payload;

            return newState;


        default:
            return state;
    }

}