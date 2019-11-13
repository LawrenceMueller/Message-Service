import React, { Component } from "react";
import "./PP_styles.css";

export default class PP extends Component {
    render() {
        return (
        <div>
            <div className="pp-container">
                <button onClick={this.props.backFromPP} className="pp-btn">Back</button>
                <div className="pp">
                    <div className="pp-content">
                    <h2>Privacy Policy</h2>
                    <p>
                        I am not a lawyer so I will make this simple. “You” and “Your”
                        refer to the person or party accepting the terms of service.
                        “LBGT Through History” refers to the website at domain name
                        “https://LBGTThroughHistory.com”. “I”, “me”, “myself” all refer
                        to the entity that owns and created the website LBGT Through
                        History, which is the website that the this terms of service
                        agreement refers too.
                    </p>
                    <br />
                    <p>
                        You authorize that I may store any information that you provide
                        to LBGT Through History in any way that I see fit. You authorize
                        that I may use this stored information in order to send messages
                        to phone numbers and emails that you provided to LBGT Though
                        History. You authorize Stripe to process your payment
                        information and authorize that Stripe may also send you messages
                        via email. You authorize that I may use the services of Twilio
                        in order to send messages to the phone numbers and emails that
                        you provided. Any questions or concerns that you may have in
                        regards to the services provided by LBGT Through History should
                        be directed to LGBTThoughHistoy@gmail.com.
                    </p>
                    </div>
                </div>
            </div>
        </div>
        );
    }
    }
