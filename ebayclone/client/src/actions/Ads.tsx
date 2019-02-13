import request from 'superagent'
import { any } from 'prop-types';

const baseUrl = 'http://localhost:4000'

export const ADS_FETCHED = "ADS_FETCHED"
export const AD_FETCHED = "AD_FETCHED"
export const AD_CREATE_SUCCES = "AD_CREATE_SUCCES"

const adsFetched = (Ads: any) => ({
    type: ADS_FETCHED,
    Ads
})

const showAd = (Ad : any) => ({
    type: AD_FETCHED,
    Ad
})

const eventAdCompleted = (Ad : any) => ({
    type: AD_CREATE_SUCCES,
    Ad
})

export const loadAds = () => (dispatch : any, getState: any) => {
    // when the state already contains events, we don't fetch them again
    if (getState().events) return
  
    // a GET /events request
    request(`${baseUrl}/advertisments`)
      .then(response => {
        // dispatch an EVENTS_FETCHED action that contains the events
        dispatch(adsFetched(response.body.advertisements))
      })
      .catch(console.error)
  }


export const loadAd = (id : number) => (dispatch: any) => {
    request
    .get(`${baseUrl}/advertisments/${id}`)
        .then(response => {
            dispatch(showAd(response.body)
        )})
    .catch(console.error)
    }

export const createAd = (data: any) => (dispatch: any) => {
        request
          .post(`${baseUrl}/advertisments`)
          .send(data)
          .then(response => {
            dispatch(eventAdCompleted(response.body))
          })
          .catch(console.error)
      }