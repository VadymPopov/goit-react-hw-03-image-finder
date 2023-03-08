import React from "react";
import PropTypes from 'prop-types';
import { Button } from "./Button.styled";

const LoadMoreBtn = ({onClick})=>{
    return(
        <Button type="submit" onClick={onClick} >Load more</Button>
    ) 
}

LoadMoreBtn.propTypes = {
    onClick: PropTypes.func
};

export default LoadMoreBtn;