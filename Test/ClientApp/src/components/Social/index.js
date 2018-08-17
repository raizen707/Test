import React, { Component } from 'react';

//Components
import FacebookLogin from './FacebookLogin/'
import GoogleLogin from './GoogleLogin';

class social extends Component {

    render() {
        return (
            <div>
                <h2>Facebook, Google and LinkedIn login with ReactJs</h2>
                <p>
                    <FacebookLogin />   
                    <GoogleLogin />
                </p>
            </div>
        )
    }
}

export default social;