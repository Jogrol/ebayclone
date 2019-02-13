import {ADS_FETCHED} from '../actions/ads'

export default function (state = null, action : any) {

    switch(action.type) {
        case ADS_FETCHED:
            return action.Ads
        default:
            return state;
    }
}