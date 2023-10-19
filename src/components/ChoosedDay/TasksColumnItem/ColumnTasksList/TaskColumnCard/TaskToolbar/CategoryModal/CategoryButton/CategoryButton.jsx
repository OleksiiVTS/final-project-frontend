import sprite from 'components/Pictures/sprite.svg';

const CategoryButton = ({ category, title, changeCategory }) => {
  return (
    <button
      onClick={() => changeCategory(category)}
      aria-label="change task category"
      type="button"
    >
      {title}
      <span>
        <svg>
          <use href={sprite + '#arrow-circle-broken-right'}></use>
        </svg>
      </span>
    </button>
  );
};

export default CategoryButton;
