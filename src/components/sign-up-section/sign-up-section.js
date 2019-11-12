import React, { Component } from 'react';
import './sign-up-section_styles.css';
import { parsePhoneNumberFromString } from 'libphonenumber-js';
import Checkout from '../checkout/checkout';

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            country: '',
            numOfMonths: 0,
            phoneNumber: ''
        };

        this.countryChange = this.countryChange.bind(this);
        this.monthsChange = this.monthsChange.bind(this);
        this.phoneChange = this.phoneChange.bind(this);
        this.phoneClean = this.phoneClean.bind(this);
    }

    countryChange(event) {
        this.setState({
            country: event.target.value
        });
    }

    monthsChange(event) {
        this.setState({
            numOfMonths: event.target.value
        });
    }

    phoneChange(event) {
        this.setState({
            phoneNumber: event.target.value
        });
    }

    phoneClean() {
        let phoneCombo;
        if (this.state.country[0] !== '+') {
            phoneCombo = '+' + this.state.country + this.state.phoneNumber;
            const finalPhone = parsePhoneNumberFromString(phoneCombo);
            console.log('here');
            return finalPhone.isValid ? finalPhone.number : 'invalid-phone';
        } else {
            phoneCombo = this.state.country + this.state.phoneNumber;
            const finalPhone = parsePhoneNumberFromString(phoneCombo);
            console.log('here');
            return finalPhone.isValid ? finalPhone.number : 'invalid-phone';
        }
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="group">
                        <label className="special-label">
                            Country Phone Code
                        </label>
                        <input
                            className="google_input"
                            type="text"
                            value={this.state.country}
                            onChange={this.countryChange}
                            placeholder='ex: USA is "+1"'
                            id="phone"
                        />
                    </div>
                    <div className="group">
                        <label className="special-label">
                            Number of months at $5 per month
                        </label>
                        <select
                            value={this.state.numOfMonths}
                            onChange={this.monthsChange}
                        >
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                        </select>
                    </div>
                    <div className="group">
                        <label>Phone</label>
                        <input
                            className="google_input"
                            type="text"
                            value={this.state.phoneNumber}
                            onChange={this.phoneChange}
                            placeholder="xxx-xxx-xxxx"
                            id="phone"
                        />
                        <label id="terms">
                            By clicking "pay with card" you agree to the{' '}
                            <span>
                                <a target="_blank">Terms of Service, </a>
                            </span>
                            <span>
                                <a target="_blank">Privacy Policy, </a>
                            </span>{' '}
                            and that all payment transaction will be handled
                            through{' '}
                            <span>
                                <a target="_blank" href="https://stripe.com/">
                                    Stripe.
                                </a>
                            </span>
                        </label>
                    </div>
                    <div className="checkout-form">
                        <Checkout
                            name={"LGBT Through History"}
                            description={"Daily Messages from LGBT Through History"}
                            amount={this.state.numOfMonths * 500}
                            phone={this.state.phoneNumber}
                            credits={this.state.numOfMonths * 30}
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
