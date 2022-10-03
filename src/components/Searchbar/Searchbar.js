import React from "react";
import PropTypes from "prop-types";
import { Box } from "components/Box";
import {ReactComponent as Search} from "../../icon/search.svg";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { SearchForm, SearchInput, SearchFormBtn } from "./Searchbar.styled";

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
        const {onFormSubmit} = this.props;
        const {searchLine} = this.state;

        if(searchLine.trim() === ''){
            Notify.failure('Please enter a request!');
        }
       
        onFormSubmit(searchLine);
        this.setState({searchLine: ''});
    }

    render () {
        return (
            <Box as="header" >          
                <SearchForm onSubmit={this.handleSubmit}>
                    <SearchFormBtn type="submit">
                    <Search/>
                        </SearchFormBtn>
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

Searchbar.propTypes = {
    onFormSubmit: PropTypes.func.isRequired,
};