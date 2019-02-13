import request from 'superagent'
import { any } from 'prop-types';

const baseUrl = 'http://localhost:4000'


export const ADS_FETCHED = 'ADS_FESTCHED'

const adsFetched = (ads: any) => ({
    type: ADS_FETCHED,
    ads
  })

export const loadAds = () => (dispatch: any, getState: any) => {
    // when the state already contains events, we don't fetch them again
    if (getState().ads) return
  
    // a GET /events request
    request(`${baseUrl}/ads`)
      .then(response => { console.log(response)
        // dispatch an EVENTS_FETCHED action that contains the events
        dispatch(adsFetched(response.body))
      })
      .catch(console.error)
  }