import React, { Component } from 'react';
import './TOS_styles.css';

export default class TOS extends Component {
    render() {
        return (
            <div>
                <div className="tos-container">
                    <button
                        onClick={this.props.backFromTOS}
                        className="tos-btn"
                    >
                        Back
                    </button>
                    <div className="tos">
                        <div className="tos-content">
                            <h2>Terms of Service Agreement</h2>
                            <p>
                                I am not a lawyer so I will make this simple.
                                “You” and “Your” refer to the person or party
                                accepting the terms of service. “LBGT Through
                                History” refers to the website at domain name
                                “https://LBGTThroughHistory.com”. “I”, “me”,
                                “myself” all refer to the entity that created
                                the website LBGT Through History, which is the
                                website that this terms of service agreement
                                refers too.
                            </p>
                            <br />
                            <p>
                                You authorize that I may store any information
                                that you provided to LBGT Through History. You
                                authorize that I may send messages to any phone
                                number or email that you provided to LGBT
                                Through History via any third party I authorize.
                                You authorize that Stripe, a third party payment
                                processer, may handle your payment information
                                and process the payment.
                            </p>
                            <br />
                            <p>
                                You must be at least 18 years or older to use
                                LGBT Through History. You will be held
                                responsible for any charges of any kind that you
                                cause to both willing and unwilling parties. You
                                agree that you will only provide information of
                                parties that are willing to receive the services
                                provided by LGBT Though History. You agree that
                                you are human. Both I and LBGT Though History
                                will not offer any refund of any kind for any
                                reason. You agree not to steal, take, modify,
                                redistribute, or use my intellectural property
                                in any way including commercial and
                                non-commercial that is not intended.
                            </p>
                            <br />
                            <p>
                                You agree that you will not use the services
                                provided by LGBT Through History in any illegal,
                                abusive, intrusive or disruptive manner. You
                                agree that you and not I or LGBT Through History
                                are solely responsible for any form of dispute
                                both legal and illegal that may result from the
                                services provided by LGBT Through History that
                                arise due to any information that you provided
                                to LGBT Through History. You are solely
                                responsible and will handle at your own expense
                                any and all costs (of any kind) that result from
                                legal and illegal claims that arise do to your
                                use of LGBT Through History and the services
                                provided by LGBT Through History. Myself or LGBT
                                Through History may ammend or change both the
                                terms of service agreement and privacy policy at
                                any time.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
