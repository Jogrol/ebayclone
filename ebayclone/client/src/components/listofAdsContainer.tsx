import React from 'react'
import {connect} from 'react-redux'
import {loadAds} from '../actions/ads'
import ListofAds from './listofAds'

class ListofAdsContainer extends React.Component <any> {

  componentDidMount() {
    this.props.loadAds()
  }

    render() {
      if (this.props.Ads === null) return "loading..."
      return <ListofAds Ads={this.props.Ads} />
    }
  }

  const mapStateToProps = (state: any) => ({
    Ads: state.Ads
  })

export default connect (mapStateToProps, {loadAds})(ListofAdsContainer)