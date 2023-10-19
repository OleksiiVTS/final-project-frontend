import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';

import { StyledCategoryModal } from './CategoryModal.styled';
import CategoryButton from './CategoryButton/CategoryButton';

import { editTask } from 'redux/task/taskOperations';
import { selectIsError } from 'redux/task/taskSelectors';
import { CATEGORY_LIST } from 'constants/categoryList';
import { parseCategoryTitle } from 'helpers/helpers';

const CategoryModal = ({ task, coords, closeModal }) => {
  const dispatch = useDispatch();
  const error = useSelector(selectIsError);

  const variants = CATEGORY_LIST.filter(cat => cat !== task.category);

  const handleOverlayClick = e => {
    if (e.currentTarget === e.target) closeModal();
  };

  const changeCategory = category => {
    dispatch(editTask({ ...task, category }));
    !error && closeModal();
  };

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [closeModal]);

  return createPortal(
    <StyledCategoryModal coords={coords} onClick={handleOverlayClick}>
      <div className="modal">
        {variants.map(variant => (
          <CategoryButton
            key={variant}
            category={variant}
            title={parseCategoryTitle(variant)}
            changeCategory={changeCategory}
          />
        ))}
      </div>
    </StyledCategoryModal>,
    document.body
  );
};

export default CategoryModal;
