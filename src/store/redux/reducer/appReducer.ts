import ACTION_TYPE from '../action/type'

const initState = {
  appLoading: false,
  liveMarket: [],
  orderData: null,
  clientData: null,
}

const AppReducer = (state = initState, action: any) => {
  switch (action.type) {
    case ACTION_TYPE.APP_LOADER:
      return { ...state, appLoading: action.payload }
      break

    case ACTION_TYPE.APP_LIVE_MARKET:
      return { ...state, liveMarket: action.payload }
      break

    case ACTION_TYPE.APP_ORDER:
      return { ...state, orderData: action.payload }
      break

    case ACTION_TYPE.APP_CLIENT:
      return { ...state, clientData: action.payload }
      break

    default:
      return state
      break
  }
}

export default AppReducer
