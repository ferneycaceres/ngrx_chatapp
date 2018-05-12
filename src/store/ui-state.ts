export interface UiState{

    userId: number,
    currentThreadId : number
}

export const INITIAL_UISTATE: UiState = {
    userId: undefined,
    currentThreadId : undefined,
}