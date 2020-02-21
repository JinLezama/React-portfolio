import React, { Component } from 'react';

import PortfolioItem from "./portfolio-item"
import portfolioItem from './portfolio-item';


export default class portfolioContainer extends Component {
    constructor() {
        super();

        console.log("Portfolio container has rendered")
    }

    portfolioItems () {
        const data = ["Quip", "Eventbrite", "Ministry Safe"]

        return data.map(item => {
            return <PortfolioItem />
        })
    }

    render() {
        return (
            <div className='portfolioContainer'>
                <h2>Portfolio items go here updated...</h2>

              {this.portfolioItems()}
            </div>
        );
    }
}