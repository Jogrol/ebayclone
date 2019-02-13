import React from 'react'
import {connect} from 'react-redux'
import {loadAd} from '../actions/ads'
import AdsDetail from './adsDetail'


class AdsDetailContainer extends React.Component <any> {

    componentDidMount() {
        this.props.loadAd(this.props.match.params.id)
      }


    render() {
        if (this.props.Ad === null) return "loading..."
        return <AdsDetail Ad={this.props.Ad}
        />
    }
}


const mapStateToProps = (state: any) => (
    {
      Ad: state.Ad
    })

    export default connect (mapStateToProps, {loadAd})(AdsDetailContainer)