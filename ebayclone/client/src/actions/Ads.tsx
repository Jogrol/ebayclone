import request from 'superagent'

const baseUrl = 'http://localhost:4000'

export const ADS_FETCHED = "ADS_FETCHED"

const adsFetched = (Ads: any) => ({
    type: ADS_FETCHED,
    Ads
})

export const loadAds = () => (dispatch : any, getState: any) => {
    // when the state already contains events, we don't fetch them again
    if (getState().events) return
  
    // a GET /events request
    request(`${baseUrl}/advertisments`)
      .then(response => { console.log(response.body.advertisements)
        // dispatch an EVENTS_FETCHED action that contains the events
        dispatch(adsFetched(response.body.advertisements))
      })
      .catch(console.error)
  }