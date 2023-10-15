import React from 'react';
import sptite from '../../../Pictures/sprite.svg';
// import { ReactComponent as PlusCircleLogo } from '../../../Pictures/plus-circle.svg';
import { StyledColumnHeadBar } from './ColumnHeadBar.styled';

const ColumnHeadBar = ({ title, type_id }) => {
  return (
    <StyledColumnHeadBar className="columnHeadBar">
      <h3>{title}</h3>
      <button type="button">
        <svg>
          <use href={sptite + '#icon-plus-circle'}></use>
        </svg>
        {/* <PlusCircleLogo /> */}
      </button>
    </StyledColumnHeadBar>
  );
};

export default ColumnHeadBar;
