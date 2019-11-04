import React, { Component } from 'react';
import './splash_styles.css';

export default class Splash extends Component {
    render() {
        return (
            <div>
                <section className="hero">
                    <div className="hero-inner">
                        <h1>LGBT Through History</h1>
                        <h2>
                            A daily message service to learn all about influential LGBT people through history!
                        </h2>
                    </div>
                </section>
            </div>
        );
    }
}
