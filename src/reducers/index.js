import { combineReducers } from "redux";
import * as actionTypes from "../actions/types";

// USER reducer
const initUserState = {
  currentUser: null,
  isLoading: true,
};

const user_reducer = (state = initUserState, action) => {
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        currentUser: action.payload.currentUser,
        isLoading: false,
      };
    case actionTypes.CLEAR_USER:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

// CHANNEL reducer
const initChannelState = {
  currentChannel: null,
  isPrivateChannel: false,
};

const channel_reducer = (state = initChannelState, action) => {
  switch (action.type) {
    case actionTypes.SET_CURRENT_CHANNEL:
      return {
        ...state,
        currentChannel: action.payload.currentChannel,
      };
    case actionTypes.SET_PRIVATE_CHANNEL:
      return {
        ...state,
        isPrivateChannel: action.payload.isPrivateChannel,
      };
    case actionTypes.SET_USER_POSTS:
      return {
        ...state,
        userPosts: action.payload.userPosts,
      };
    default:
      return state;
  }
};

// COLORS reducer
const initColorsState = {
  primaryColor: "#4c3c4c",
  secondaryColor: "#eee",
};

const colors_reducer = (state = initColorsState, action) => {
  switch (action.type) {
    case actionTypes.SET_COLORS:
      return {
        primaryColor: action.payload.primaryColor,
        secondaryColor: action.payload.secondaryColor,
      };

    default:
      return state;
  }
};

// SIDEBAR reducer
const initSideBarState = {
  showBackdrop: false,
};

const sidebar_reducer = (state = initSideBarState, action) => {
  switch (action.type) {
    case actionTypes.SET_SHOW_SIDEBAR:
      return {
        showBackdrop: action.payload.showBackdrop,
      };

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  user: user_reducer,
  channel: channel_reducer,
  colors: colors_reducer,
  sideBar: sidebar_reducer,
});

export default rootReducer;
