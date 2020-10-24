import {
  START_LOADING,
  STOP_LOADING,
  SET_CURRENT_COORS,
  SET_CURRENT_WEATHER_INFO,
  SET_CURRENT_TIME,
} from "../Actions/actionTypes";

const initialState = {
  loading: false,
  coors: {
    lat: 53.13,
    lon: 26.02,
  },
  info: {
    currentInfo: {},
    forecast: {
      day_1st: {
        day: "",
        icon: "",
        temp: "",
      },
      day_2nd: {
        day: "",
        icon: "",
        temp: "",
      },
      day_3rd: {
        day: "",
        icon: "",
        temp: "",
      },
    },
    imageUrl: "",
  },
  currentTime: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case START_LOADING:
      return {
        ...state,
        loading: true,
      };
    case STOP_LOADING:
      return {
        ...state,
        loading: false,
      };
    case SET_CURRENT_COORS:
      return {
        ...state,
        coors: action.coors,
      };
    case SET_CURRENT_WEATHER_INFO:
      return {
        ...state,
        info: action.info,
      };
    case SET_CURRENT_TIME:
      return {
        ...state,
        currentTime: action.time,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
