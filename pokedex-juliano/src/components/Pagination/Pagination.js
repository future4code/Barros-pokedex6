import React from 'react';
import { Btn, BtnContainer } from './style';

const Pagination = ({ goNextPage, goPrevPage }) => {
    return (
        <BtnContainer>
            {goPrevPage && <Btn onClick={goPrevPage}>Previous</Btn>}
            {goNextPage && <Btn onClick={goNextPage}>Next</Btn>}
        </BtnContainer>
    )
}

export default Pagination;