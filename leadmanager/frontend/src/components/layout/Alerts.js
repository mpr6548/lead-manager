import React, { Component, Fragment } from 'react'
import { withAlert } from 'react-alert'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'


export class Alerts extends Component {
    static propTypes = {
        error: PropTypes.object.isRequired
    }


    componentDidMount(prevProps) {
        const { error, alert } = this.props;
        if(error !== prevProps.error) {
            alert.error('There is an error')
        }
    }

    render() {
        return null;
    }
}

const mapStateToProps = state => ({
    error: state.errors
})


export default connect(mapStateToProps)(withAlert()(Alerts));


// stopped at 17:00 on video 4 https://www.youtube.com/watch?v=Fia-GGgHpK0