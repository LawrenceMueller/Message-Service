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
                            {/* <br/>
                            <p>
                                When you opt-in to the service, we will send you
                                an SMS message to confirm your signup. You can
                                cancel this service at any time. Just text{' '}
                                <strong>"STOP"</strong> to #####. After you send
                                the message
                                <strong>"STOP"</strong> to us, we will send you
                                a reply message to confirm that you have been
                                unsubscribed. After this, you will no longer
                                receive messages from us. If you want to join
                                again, just sign up as you did the first time
                                and we will start sending messages to you again.
                                If at any time you forget what keywords are
                                supported, just text <strong>"HELP"</strong> to
                                #####. After you send the message
                                <strong>"HELP"</strong> to us, we will respond
                                with instructions on how to use our service as
                                well as how to unsubscribe.
                            </p>
                            <br/>
                            <p>
                                We are able to deliver messages to the following
                                mobile phone carriers: Major Carriers: AT&amp;T,
                                Verizon Wireless, Sprint, T-Mobile Minor
                                Carriers: U.S. Cellular, Boost Mobile, MetroPCS,
                                Virgin Mobile, Alaska Communications Systems
                                (ACS), Appalachian Wireless (EKN), Bluegrass
                                Cellular, Cellular One of East Central, IL
                                (ECIT), Cellular One of Northeast Pennsylvania,
                                Cricket, Coral Wireless (Mobi PCS), COX, Cross,
                                Element Mobile (Flat Wireless), Epic Touch
                                (Elkhart Telephone), GCI, Golden State, Hawkeye
                                (Chat Mobility), Hawkeye (NW Missouri), Illinois
                                Valley Cellular, Inland Cellular, iWireless
                                (Iowa Wireless), Keystone Wireless (Immix
                                Wireless/PC Man), Mosaic (Consolidated or CTC
                                Telecom), Nex-Tech Wireless, NTelos, Panhandle
                                Communications, Pioneer, Plateau (Texas RSA 3
                                Ltd), Revol, RINA, Simmetry (TMP Corporation),
                                Thumb Cellular, Union Wireless, United Wireless,
                                Viaero Wireless, and West Central (WCC or 5 Star
                                Wireless).
                            </p>
                            <br/>
                            <p>
                                As always, Message and Data Rates May Apply for
                                any messages sent to you from us and to us from
                                you. If you have any questions about your text
                                plan or data plan, it is best to contact your
                                wireless provider. For all questions about the
                                services provided by this short code, you can
                                send an email to lgbtthroughhistory@gmail.com.
                            </p> */}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
