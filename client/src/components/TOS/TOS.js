import React, { Component } from 'react';
import './TOS_styles.css';

export default class TOS extends Component {
   render() {
      return (
         <div>
            <div className="tos-container">
               <button onClick={this.props.backFromTOS} className="tos-btn">
                  Back
               </button>
               <div className="tos">
                  <div className="tos-content">
                     <h2>Terms of Service Agreement</h2>
                     <p>
                        I am not a lawyer so I will make this simple. “You” and
                        “Your” refer to the person or party accepting the terms
                        of service. “LGBT Through History” refers to the website
                        at domain name “https://www.lgbtthroughhistory.com/” or
                        "http://www.lgbtthroughhistory.com/". “I”, “me”, "my",
                        “myself” all refer to the entity that created the
                        website LGBT Through History, which is the website that
                        this terms of service agreement refers too.
                     </p>
                     <br />
                     <p>
                        You authorize that I may store any information that you
                        provided to LGBT Through History. You authorize that I
                        may send messages to any email address that you provide
                        to LGBT Through History via any third party I authorize.
                        You authorize that Stripe, a third party payment
                        processer, may handle your payment information and
                        process the payment.
                     </p>
                     <br />
                     <p>
                        You must be at least 18 years or older to use LGBT
                        Through History. You agree that you provided information
                        of willing parties only; willing parties being parties
                        that understand and want the daily emails provided by
                        LGBT Through History. You will be held responsible for
                        any charges of any kind that you cause to both willing
                        and unwilling parties. You agree that you will only
                        provide information of parties that are willing to
                        receive the services provided by LGBT Though History.
                        You agree that you are human. Both I and LBGT Though
                        History will not offer any refund of any kind for any
                        reason. You agree not to steal, take, modify,
                        redistribute, or use my intellectural property in any
                        way including commercial and non-commercial that is not
                        intended.
                     </p>
                     <br />
                     <p>
                        You agree that you will not use the services provided by
                        LGBT Through History in any illegal, abusive, intrusive
                        or disruptive manner. You agree that you are solely
                        responsible for any form of dispute both legal and
                        illegal that may result from the services provided by
                        LGBT Through History that arise due to any information
                        that you provided to LGBT Through History. You are
                        solely responsible and will handle at your own expense
                        any and all costs (of any kind) that result from legal
                        or illegal claims that arise do to your use of LGBT
                        Through History and the services provided by LGBT
                        Through History. I may ammend or change both the terms
                        of service agreement and privacy policy at any time. The
                        last time this document was updated was 12/19/2019.
                     </p>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}
