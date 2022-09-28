import { Box } from "components/Box";
import React from "react";

export class Searchbar extends React.Component {
    state = {
        searchLine: "",
    };

    handleChange = (e) => {
        this.setState({
            searchLine: e.currentTarget.value,
        })
    };    

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.searchLine)
        this.props.onFormSubmit(this.state.searchLine);
        this.setState({searchLine: ''});
    }

    render () {
        return (
            <Box as="header" >          
                <form onSubmit={this.handleSubmit}>
                    <button type="submit">
                    <span>Search</span>
                    </button>

                    <input
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    value={this.state.searchLine}
                    onChange={this.handleChange}
                    />
                </form>
            </Box>
        )
    };
};