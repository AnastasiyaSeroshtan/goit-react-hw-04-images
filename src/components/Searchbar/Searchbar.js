import { Box } from "components/Box";
import React from "react";
import { SearchForm, SearchInput } from "./Searchbar.styled";

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
        this.props.onFormSubmit(this.state.searchLine);
        this.setState({searchLine: ''});
    }

    render () {
        return (
            <Box as="header" >          
                <SearchForm onSubmit={this.handleSubmit}>
                    <button type="submit">
                    <span>Search</span>
                    </button>

                    <SearchInput
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    value={this.state.searchLine}
                    onChange={this.handleChange}
                    />
                </SearchForm>
            </Box>
        )
    };
};