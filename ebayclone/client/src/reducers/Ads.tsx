import {ADS_FETCHED,AD_CREATE_SUCCES} from '../actions/ads'

export default function (state : any = null, action : any) {

    switch(action.type) {
        case ADS_FETCHED:
            return action.Ads
        case AD_CREATE_SUCCES:
            return [...state, action.Ad]
        default:
            return state;
            
    }
}