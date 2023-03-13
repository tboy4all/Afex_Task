import { axiosClientAuthed } from "../../../api/live/axios";
import ACTION_TYPE from "./type"

const axios = axiosClientAuthed();

export const updateLoaderState = (bool: boolean, dispatch: any)=>{
    dispatch({
        type: ACTION_TYPE.APP_LOADER,
        payload: bool
    })
}

export const updateClientData = (data: any, dispatch: any)=>{
    dispatch({
        type: ACTION_TYPE.APP_CLIENT,
        payload: data
    })
}

export const updateOrderData = (data: any, dispatch: any)=>{
    dispatch({
        type: ACTION_TYPE.APP_ORDER,
        payload: data
    })
}

export const fetchLiveMarket = async (dispatch: any)=>{
    // @ts-ignore
    const _liveMarket = await axios.get("/security-price/live");
    // console.log(_liveMarket)
    // dispatch({
    //     type: ACTION_TYPE.APP_LOADER,
    //     payload: bool
    // })
}