import React, { Component } from 'react';
import './howItWorks_styles.css';

export default class HowItWorks extends Component {
    render() {
        return (
            <div className="how-it-works-container">
                <div className="how-it-works-content">
                    <h3>How it Works</h3>
                    <p>
                        Simply sign yourself up or surprise a friend with a gift.
                        Select the number of days that the phone number provided
                        should recieve texts. For that many days the number you
                        provided will receive daily messages between 11pm and 6pm
                        PST. Each message will talk about an influential LGBT person in
                        history and where to learn more.
                    </p>
                </div>
            </div>
        );
    }
}
