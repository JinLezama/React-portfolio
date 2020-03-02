import React, { Component } from 'react';

export default class PortfolioForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            description: "",
            category: "",
            position: "",
            url: "",
            thumb_image: "",
            banner_image: "",
            logo: ""
        };

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        console.log("handle change", e)
    }

    render() {
        return (
            <div>
                <h1>PortfolioForm</h1>
                

                <form>
                    <div>
                        <input
                            type="text"
                            name="name"
                            placeholder="Portfolio item Name"
                            value={this.state.name}
                            onChane={this.handleChange}
                        />

                        <input
                            type="text"
                            name="url"
                            placeholder="URL"
                            value={this.state.url}
                            onChane={this.handleChange}
                        />
                    </div>

                    <div>
                        <input
                            type="text"
                            name="position"
                            placeholder="Position"
                            value={this.state.position}
                            onChane={this.handleChange}
                        />

                        <input
                            type="text"
                            name="catwgory"
                            placeholder="Category"
                            value={this.state.category}
                            onChane={this.handleChange}
                        />
                    </div>

                    <div>
                        <input
                            type="text"
                            name="description"
                            placeholder="Description"
                            value={this.state.description}
                            onChane={this.handleChange}
                        />
                    </div>

                    <div>
                        <button type="submit">Save</button>
                    </div>
                </form>
            </div>
        );
    }
}