import React, { Component } from 'react';
import './howItWorks_styles.css';

export default class HowItWorks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tosPage: false,
            ppPage: false
        };
    }

    render() {
        return (
            <div className="how-it-works-container">
                <div className="how-it-works-content">
                    <h3>How it Works</h3>
                    <p>
                        Simply sign yourself up or surprise a friend with a
                        gift. Select the number of days that the phone number
                        provided should recieve texts. For that many days
                        starting a day after sign up, the number you provided
                        will receive daily messages between 12pm and 5pm PST.
                        Each message will talk about an influential LGBT person
                        in history and where to learn more. For any support
                        please email: lgbtthroughhistory@gmail.com
                    </p>
                </div>
            </div>
        );
    }
}
