import { SET_MESSAGES, MESSAGE_POSTED, SELECT_CHANNEL } from '../actions';

export default function(state = null, action) {
  switch (action.type) {
    case SET_MESSAGES: {
      return action.payload.messages;
    }
    case MESSAGE_POSTED: {
      const copiedState = state.slice(0);
      copiedState.push(action.payload);
      return copiedState;
    }
    case SELECT_CHANNEL: {
      return []; // Channel has changed. Clearing view.
    }
    default:
      return state;
  }
}
