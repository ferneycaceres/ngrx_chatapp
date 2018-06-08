import {StoreData} from "../store-data";
import {Action} from "@ngrx/store";
import * as _ from 'lodash';
import { USER_THREADS_LOADED_ACTION, UserThreadsLoadedAction, SendNewMessageAction, SEND_NEW_MESSAGE_ACTION } from "../actions/actions";
import { Message } from "../../../shared/model/message";

const uuidv4 = require('uuid/v4');


export function storeData(state: StoreData, action:Action) : StoreData {
    switch (action.type)  {

        case USER_THREADS_LOADED_ACTION:

            return handleLoadUserThreadsAction(state,<any>action);

        case SEND_NEW_MESSAGE_ACTION:
            
            return handleSendNewMessageAction(state,<any>action);

        default:
            return state;
    }
}


function handleLoadUserThreadsAction(state:StoreData, action: UserThreadsLoadedAction): StoreData {
    return {
        participants: _.keyBy(action.payload.participants, 'id'),
        messages: _.keyBy(action.payload.messages, 'id'),
        threads: _.keyBy(action.payload.threads, 'id')
    };
}

function handleSendNewMessageAction(state:StoreData,action:SendNewMessageAction){
    const newStoreState = _.cloneDeep(state);

    const currentThread = newStoreState.threads[action.payload.threadId];

    const newMessage: Message = {
        text: action.payload.text,
        threadId : action.payload.threadId,
        timestamp:new Date().getTime(),
        participantId:action.payload.participantId,
        id:uuidv4()
    };

    currentThread.messageIds.push(newMessage.id);

    newStoreState.messages[newMessage.id] = newMessage;

    return newStoreState;
}