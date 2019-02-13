import React from 'react'
import {connect} from 'react-redux'
import {loadAds, createAd} from '../actions/ads'
import ListofAds from './listofAds'
import AddAdvertisement from "./addAdvertisement"

class ListofAdsContainer extends React.Component <any> {

  
  componentDidMount() {
    this.props.loadAds()
  }

    render() {
  
      if (this.props.Ads === null) return "loading..."
      return (
      <div>
      <ListofAds Ads={this.props.Ads} />
      <AddAdvertisement />
     </div>
      )}
  }

  const mapStateToProps = (state: any) => ({
    Ads: state.Ads
  })

export default connect (mapStateToProps, {loadAds, createAd})(ListofAdsContainer)