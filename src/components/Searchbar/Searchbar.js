import { useState } from "react";
import PropTypes from "prop-types";
import { Box } from "components/Box";
import {ReactComponent as Search} from "../../icon/search.svg";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { SearchForm, SearchInput, SearchFormBtn } from "./Searchbar.styled";

export const Searchbar = ({onFormSubmit}) => {
    const [searchLine, setSearchLine] = useState('');

    const handleChange = (e) => {
        setSearchLine(e.currentTarget.value)
    };    

    const handleSubmit = (e) => {
        e.preventDefault();

        if(searchLine.trim() === ''){
            Notify.failure('Please enter a request!');
        }
       
        onFormSubmit(searchLine);
        setSearchLine('');
    }

    return (
            <Box as="header" >          
                <SearchForm onSubmit={handleSubmit}>
                    <SearchFormBtn type="submit">
                    <Search/>
                        </SearchFormBtn>
                    <SearchInput
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    value={searchLine}
                    onChange={handleChange}
                    />
                </SearchForm>
            </Box>
        )
};

Searchbar.propTypes = {
    onFormSubmit: PropTypes.func.isRequired,
};