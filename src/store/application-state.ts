import { UiState, INITIAL_UISTATE } from "./ui-state";
import { StoreData, INITIAL_STORE_DATA } from "./store-data";

export interface ApplicationState {

    uiState : UiState,
    storeData : StoreData

}

export const INITIAL_APPLICATION_STATE : ApplicationState= {
    uiState: INITIAL_UISTATE,
    storeData : INITIAL_STORE_DATA ,
}