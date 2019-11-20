import React, { Component } from 'react';
import './sign-up-section_styles.css';

import Checkout from '../checkout/checkout';
import TOS from '../TOS/TOS';
import PP from '../PP/PP';
import HIW from '../HowItWorks/howItWorks';

import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/dist/style.css';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numOfMonths: 0,
            phoneNumber: '',
            tosPage: false,
            ppPage: false,
            codeFromTransaction: 9
        };

        this.monthsChange = this.monthsChange.bind(this);
        this.phoneChange = this.phoneChange.bind(this);
        this.handlePP = this.handlePP.bind(this);
        this.handleTOS = this.handleTOS.bind(this);
        this.changeResponseCode = this.changeResponseCode.bind(this);

        toast.configure({
            autoClose: 8000
        });
    }

    monthsChange(event) {
        this.setState({
            numOfMonths: event.target.value
        });
    }

    phoneChange(value) {
        this.setState({ phoneNumber: value });
    }

    handleTOS() {
        this.setState({
            tosPage: !this.state.tosPage
        });
    }

    handlePP() {
        this.setState({
            ppPage: !this.state.ppPage
        });
    }

    changeResponseCode(value){
        this.setState({
            codeFromTransaction: value
        })
    }

    componentDidUpdate(){
        switch (this.state.codeFromTransaction) {
            case 1:
                this.changeResponseCode(0);
                return toast.warn(
                    "The phone you entered was invalid, don't worry you were not charged. If you need to feel free to email lgbtthroughhistory@gmail.com for support"
                );
            case 2:
                this.changeResponseCode(0);
                return toast.warn(
                    "The number of days can not be 0, don't worry you were not charged. Please Try agian."
                );
            case 3:
                this.changeResponseCode(0);
                return toast.warn(
                    'Something went wrong. Double check your phone and number of days then please try again'
                );
            case 4:
                this.changeResponseCode(0);
                return toast.warn(
                    'Something went wrong on our side. You were not charged. Might want to please try again later'
                );
            case 5:
                this.changeResponseCode(0);
                return toast.warn(
                    'We missed your country code. You were not charged, please try again.'
                );
            case 6:
                this.changeResponseCode(0);
                return toast.success(
                    'You are signed up! An email reciept should be sent to you within 24 hours. You should start to receive messages within 48 hours'
                );
            default:
                console.log("");
        }
    }

    render() {
        if (this.state.tosPage === true) {
            return <TOS backFromTOS={this.handleTOS} />;
        }
        if (this.state.ppPage === true) {
            return <PP backFromPP={this.handlePP} />;
        }
        return (
            <div>
                <HIW />
                <div className="container">
                    <div className="group">
                        <label className="special-label">Number of days</label>
                        <select
                            value={this.state.numOfMonths}
                            onChange={this.monthsChange}
                        >
                            <option value="0">0</option>
                            <option value="1">20 - $5</option>
                            <option value="2">40 - $10</option>
                            <option value="3">60 - $15</option>
                            <option value="4">80 - $20</option>
                            <option value="5">100 - $25</option>
                        </select>
                    </div>
                    <div className="group">
                        <label id="phone-label">
                            Phone (with country code)
                        </label>
                        <PhoneInput
                            defaultCountry={'us'}
                            value={this.state.phoneNumber}
                            onChange={this.phoneChange}
                        />
                        <label id="terms">
                            By clicking "pay with card" you agree to the{' '}
                            <span onClick={this.handleTOS}>
                                Terms of Service,
                            </span>
                            <span onClick={this.handlePP}>Privacy Policy,</span>{' '}
                            and that all payment transactions will be handled
                            through{' '}
                            <span>
                                <a
                                    target="_blank"
                                    href="https://stripe.com/"
                                    rel="noopener noreferrer"
                                >
                                    Stripe.
                                </a>
                            </span>
                        </label>
                    </div>
                    <div className="checkout-form">
                        <Checkout
                            name={'LGBT Through History'}
                            description={
                                'Daily Messages from LGBT Through History for ' +
                                this.state.numOfMonths * 30 +
                                ' days'
                            }
                            amount={this.state.numOfMonths * 500}
                            phone={this.state.phoneNumber}
                            credits={this.state.numOfMonths * 20}
                            notifier={this.changeResponseCode}
                        />
                        <h4>
                            Total is: $
                            {this.state.numOfMonths === null
                                ? 0
                                : this.state.numOfMonths * 5}
                        </h4>
                    </div>
                </div>
            </div>
        );
    }
}
