import React from 'react';
import sprite from '../../../Pictures/sprite.svg';
// import { ReactComponent as PlusCircleLogo } from '../../../Pictures/plus-circle.svg';
import { StyledColumnHeadBar } from './ColumnHeadBar.styled';

// import { useDispatch } from 'react-redux';
// import { addTask } from 'redux/tasks/operations';

const ColumnHeadBar = ({ title, category }) => {
  // const dispatch = useDispatch();

  const handleClick = e => {
    console.log(`add task to ${category}`);
    //
    // onClick={dispatch(addTask)}
  };

  return (
    <StyledColumnHeadBar className="columnHeadBar">
      <h3>{title}</h3>
      <button onClick={handleClick} aria-label="add task" type="button">
        <svg>
          <use href={sprite + '#icon-plus-circle'}></use>
        </svg>
        {/* <PlusCircleLogo /> */}
      </button>
    </StyledColumnHeadBar>
  );
};

export default ColumnHeadBar;
