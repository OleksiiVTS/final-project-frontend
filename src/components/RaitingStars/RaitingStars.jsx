
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { StarColors, RaitngContainer, RaitingStars, RaitingTextarea, RaitingButton } from "./RaitingStars.styled";

function RatingStars() {
  const [currentValue, setCurrentValue] = useState(4);  //Начальный рейтинг
  const [hoverValue, setHoverValue] = useState(undefined);
  const [review, setReview] = useState("");

  const stars = Array(5).fill(0); //Кол-во звезд

  const handleClick = (value) => {
    setCurrentValue(value);
    console.log("Current rating:", value);  // Вывод значения рейтинга (от 1 до 5) в консоль
  };

  const handleMouseOver = (newHoverValue) => {
    setHoverValue(newHoverValue);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };

  const handleReviewChange = (event) => {
    setReview(event.target.value);
    console.log("Review:", event.target.value); // Вывод текста из Textarea в консоль
  };

  return (
    <RaitngContainer>
      <p> Ratings </p>
      <RaitingStars>
        {stars.map((_, index) => {
          return (
            <FaStar
              key={index}
              size={24}
              onClick={() => handleClick(index + 1)} // Вывод значения рейтинга (от 1 до 5) в консоль
              onMouseOver={() => handleMouseOver(index + 1)}
              onMouseLeave={handleMouseLeave}
              color={
                (hoverValue || currentValue) > index
                  ? StarColors.orange
                  : StarColors.grey
              }
              style={{
                marginRight: 10,
                cursor: "pointer",
              }}
            />
          );
        })}
      </RaitingStars>
      <RaitingTextarea
        placeholder="Enter text"
        value={review}
        onChange={handleReviewChange} // Вывод текста из Textarea в консоль
      />
      <RaitingButton>Edit</RaitingButton>
      <RaitingButton>Cancel</RaitingButton>
    </RaitngContainer>
  );
}

export default RatingStars;