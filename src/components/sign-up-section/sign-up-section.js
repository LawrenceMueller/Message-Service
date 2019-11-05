import React, { Component } from 'react';
import './sign-up-section_styles.css';
import Checkout from '../Stripe-Checkout/CheckoutForm';

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            country: 'USA',
            numOfMonths: 0
        };

        this.countryChange = this.countryChange.bind(this);
        this.monthsChange = this.monthsChange.bind(this);
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

    render() {
        return (
            <div>
                <div className="container">
                    <div className="group">
                        <label className="special-label">Country</label>
                        <select
                            value={this.state.country}
                            onChange={this.countryChange}
                        >
                            <option value="USA">USA</option>
                            <option value="CAN">Canada</option>
                            <option value="UK">United Kingdom</option>
                        </select>
                    </div>
                    <div className="group">
                        <label className="special-label">
                            Number of months at $5 per month
                        </label>
                        <select
                            value={this.state.numOfMonths}
                            onChange={this.monthsChange}
                        >
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
                        <Checkout price={this.state.numOfMonths * 5} />
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