import { Box } from "components/Box";
import React from "react";
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
        if(this.state.searchLine.trim() === ''){
            Notify.failure('Please enter a request!');
        }
       
        this.props.onFormSubmit(this.state.searchLine);
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