import { useState, useEffect } from 'react';
import sprite from '../../Pictures/sprite.svg';
import StarApp from '../StarRating/StarApp';
import {
  FeedbackContainer,
  RatingWrapper,
  RatingTitle,
  FormFeedback,
  StyledFeedbackToolbar,
} from './FeedbackModal.styled';
import { useDispatch } from 'react-redux';
import {
  addReview,
  deleteReview,
  getOwnReview,
} from 'redux/review/reviewOperations';

const FeedbackModal = () => {
  const isActive = true;
  const [feedbackRating, setFeedbackRating] = useState(5);
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = async event => {
    event.preventDefault();
    const comment = event.currentTarget.elements.user_message.value;

    const userReview = { comment, rating: feedbackRating };
    dispatch(addReview(userReview));
  };

  const getFeedbackRating = rating => {
    setFeedbackRating(rating);
  };

  useEffect(() => {
    dispatch(getOwnReview());
  }, [dispatch]);

  return (
    <FeedbackContainer>
      <RatingWrapper>
        <RatingTitle>Rating</RatingTitle>
        <div className="stars">
          <StarApp rating={feedbackRating} getRating={getFeedbackRating} />
        </div>
      </RatingWrapper>
      <FormFeedback onSubmit={handleSubmit}>
        <div className="toolbar">
          <div>
            <p className="head">Review</p>
          </div>
          {isActive && (
            <StyledFeedbackToolbar>
              <div className="controlsWrapper">
                <button
                  className="btnEdit"
                  aria-label="edit feedback"
                  type="button"
                  onClick={() => setIsEditing(!isEditing)}
                >
                  <svg>
                    <use href={sprite + '#icon-pencil'}></use>
                  </svg>
                </button>
                <button
                  className="btnDel"
                  aria-label="delete feedback"
                  type="button"
                  onClick={() => dispatch(deleteReview())}
                >
                  <svg>
                    <use href={sprite + '#icon-trash'}></use>
                  </svg>
                </button>
              </div>
            </StyledFeedbackToolbar>
          )}
        </div>
        <textarea
          name="user_message"
          placeholder="Enter text"
          className="text_content"
        ></textarea>
        {isActive && (
          <div className="buttonfoot">
            <button type="submit" className="btn-sumbit save">
              Save
            </button>
            <button type="button" className="btn-sumbit cencel">
              Cancel
            </button>
          </div>
        )}
      </FormFeedback>
    </FeedbackContainer>
  );
};

export default FeedbackModal;
