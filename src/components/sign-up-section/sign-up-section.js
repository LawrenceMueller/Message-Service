import React, { Component } from 'react';
import './sign-up-section_styles.css';
import Checkout from '../checkout/checkout';
import TOS from '../TOS/TOS';
import PP from '../PP/PP';
import HIW from '../HowItWorks/howItWorks';

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numOfMonths: 0,
            phoneNumber: '',
            tosPage: false,
            ppPage: false
        };

        this.monthsChange = this.monthsChange.bind(this);
        this.phoneChange = this.phoneChange.bind(this);
        this.handlePP = this.handlePP.bind(this);
        this.handleTOS = this.handleTOS.bind(this);
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

    handleTOS(){
        this.setState({
            tosPage: !this.state.tosPage
        });
    }

    handlePP(){
        this.setState({
            ppPage: !this.state.ppPage
        });
    }

    render() {
        if(this.state.tosPage === true){
            return <TOS backFromTOS={this.handleTOS}/>
        }
        if(this.state.ppPage === true){
            return <PP backFromPP={this.handlePP}/>
        }
        return (
            <div>
                <HIW/>
                <div className="container">
                    <div className="group">
                        <label className="special-label">
                            Number of days
                        </label>
                        <select
                            value={this.state.numOfMonths}
                            onChange={this.monthsChange}
                        >
                            <option value="0">0</option>
                            <option value="1">30 - $5</option>
                            <option value="2">60 - $10</option>
                            <option value="3">90 - $15</option>
                            <option value="4">120 - $20</option>
                            <option value="5">150 - $25</option>
                            <option value="6">180 - $30</option>
                            <option value="7">210 - $35</option>
                            <option value="8">240 - $40</option>
                            <option value="9">270 - $45</option>
                            <option value="10">300 - $50</option>
                            <option value="11">330 - $55</option>
                            <option value="12">360 - $60</option>
                        </select>
                    </div>
                    <div className="group">
                        <label>Phone (with country code)</label>
                        <input
                            className="google_input"
                            type="text"
                            value={this.state.phoneNumber}
                            onChange={this.phoneChange}
                            placeholder="+1444-444-4444"
                            id="phone"
                        />
                        <label id="terms">
                            By clicking "pay with card" you agree to the{' '}
                            <span onClick={this.handleTOS}>
                                Terms of Service,
                            </span>
                            <span onClick={this.handlePP}>
                                Privacy Policy,
                            </span>{' '}
                            and that all payment transactions will be handled
                            through{' '}
                            <span>
                                <a target="_blank" href="https://stripe.com/" rel="noopener noreferrer">
                                    Stripe.
                                </a>
                            </span>
                        </label>
                    </div>
                    <div className="checkout-form">
                        <Checkout
                            name={"LGBT Through History"}
                            description={"Daily Messages from LGBT Through History for " + this.state.numOfMonths * 30 + " days"}
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
