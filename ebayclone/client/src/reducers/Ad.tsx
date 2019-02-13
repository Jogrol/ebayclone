import {AD_FETCHED} from '../actions/ads'
import { AdsInterface } from '../actions/ads'

export default function (state = null, action : any) {

    switch(action.type) {
        case AD_FETCHED:
            return action.Ad
    
        default:
            return state;
    }
}