import React, { Component } from 'react';

import PortfolioItem from "./portfolio-item"
import portfolioItem from './portfolio-item';


export default class portfolioContainer extends Component {
    constructor() {
        super();
        
        console.log("Portfolio container has rendered")
    }
    render() {
        return (
            <div className='portfolioContainer'>
                <h2>Portfolio items go here updated...</h2>

                <PortfolioItem/>
            </div>
        );
    }
}