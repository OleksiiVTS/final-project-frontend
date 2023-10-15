import React from 'react';
import { StyledTaskToolbar } from './TaskToolbar.styled';

import sptite from '../../../../../Pictures/sprite.svg';

const TaskToolbar = () => {
  const avatar =
    'https://ui-avatars.com/api/?name=$%7BfirstLetterName%7D&size=256%60';

  const priorityList = ['low', 'medium', 'high'];

  const priority = 'high';

  const colors = {
    low: '#72C2F8',
    medium: '#F3B249',
    high: '#EA3D65',
  };

  return (
    <StyledTaskToolbar className="taskToolbar" priority={colors[priority]}>
      <div className="infoWrapper">
        <div className="imgWrapper">
          <img src={avatar} alt="" />
        </div>
        <span>{priority}</span>
      </div>
      <div className="controlsWrapper">
        <button type="button">
          <svg>
            <use href={sptite + '#arrow-circle-broken-right'}></use>
          </svg>
        </button>
        <button type="button">
          <svg>
            <use href={sptite + '#icon-pencil'}></use>
          </svg>
        </button>
        <button type="button">
          <svg>
            <use href={sptite + '#icon-trash'}></use>
          </svg>
        </button>
      </div>
    </StyledTaskToolbar>
    //
  );
};

export default TaskToolbar;
