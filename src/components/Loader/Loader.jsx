import { FallingLines } from  'react-loader-spinner'
import React from "react";
import { LoaderWrapper } from './Loader.styled';

const Loader = ()=>{
    return(
        <LoaderWrapper>
        <FallingLines
        color="#4fa94d"
        width="150"
        visible={true}
        ariaLabel='falling-lines-loading'
        />
        </LoaderWrapper>
    )
};

export default Loader;