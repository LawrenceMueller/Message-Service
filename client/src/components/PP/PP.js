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
                        “LGBT Through History” refers to the website at domain name
                        “http://www.lgbtthroughhistory.com/”. “I”, “me”, “myself” all refer
                        to the entity that owns and created the website LGBT Through
                        History, which is the website that the this terms of service
                        agreement refers too.
                    </p>
                    <br />
                    <p>
                        You authorize that I may store any information that you provide
                        to LGBT Through History in any way that I see fit. You authorize
                        that I may use this stored information in order to send messages
                        to email addresses that you provided to LGBT Though
                        History. You authorize Stripe to process your payment
                        information and authorize that Stripe may also send you messages
                        via email. Any questions or concerns that you may have in
                        regards to the services provided by LGBT Through History should
                        be directed to lgbtthroughhistory@gmail.com.
                    </p>
                    </div>
                </div>
            </div>
        </div>
        );
    }
    }
