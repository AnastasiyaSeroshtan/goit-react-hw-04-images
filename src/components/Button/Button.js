import { ButtonLoadMore } from "./Button.styled";

export const Button = ({handleClick}) => {
    return(
        <ButtonLoadMore onClick={() => handleClick()}>Load more</ButtonLoadMore>
    )
};