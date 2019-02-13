import React from 'react'
import {connect} from 'react-redux'
import {loadAds} from '../actions/ads'

class ListofAdsContainer extends React.Component <any> {

  componentDidMount() {
    this.props.loadAds()
  }

    render() {
      return (
        <div>
            <p>something</p>
        </div>
      );
    }
  }

  const mapStateToProps = (state: any) => ({
    Ads: state.ads
  })

export default connect (mapStateToProps, {loadAds})(ListofAdsContainer)