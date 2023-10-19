import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';

import { StyledCategoryModal } from './CategoryModal.styled';

import { editTask } from 'redux/task/taskOperations';
import { selectIsError } from 'redux/task/taskSelectors';
import CategoryButton from './CategoryButton/CategoryButton';

const CategoryModal = ({ task, coords, onClose }) => {
  const dispatch = useDispatch();
  const error = useSelector(selectIsError);

  // const titles = ['To do', 'In progress', 'Done'];
  const categoryList = ['to-do', 'in-progress', 'done'];

  const variants = categoryList.filter(cat => cat !== task.category);

  const parseCategoryTitles = categoryList => {
    const capitalize = string =>
      string.charAt(0).toUpperCase() + string.slice(1);
    return categoryList.map(title => capitalize(title).replace('-', ' '));
  };

  const parsedTitles = parseCategoryTitles(variants);

  const handleOverlayClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  const changeCategory = category => {
    dispatch(editTask({ ...task, category }));
    !error && onClose();
  };

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return createPortal(
    <StyledCategoryModal coords={coords} onClick={handleOverlayClick}>
      <div className="modal">
        {variants.map((variant, idx) => (
          <CategoryButton
            category={variant}
            title={parsedTitles[idx]}
            changeCategory={changeCategory}
          />
        ))}
      </div>
    </StyledCategoryModal>,
    document.body
  );
};

export default CategoryModal;
