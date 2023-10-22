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
import { useDispatch, useSelector } from 'react-redux';
import {
  addReview,
  deleteReview,
  getOwnReview,
  updateReview,
} from 'redux/review/reviewOperations';
import { selectOwnReview } from 'redux/review/reviewSelectors';

const FeedbackModal = ({ isActive, closeModal}) => {
  const [feedbackRating, setFeedbackRating] = useState(5);
  const [feedbackComment, setFeedbackComment] = useState('');
  const [isReview, setIsReview] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const ownReview = useSelector(selectOwnReview);

  const dispatch = useDispatch();

  const handleSubmit = async event => {
    event.preventDefault();
    const comment = event.currentTarget.elements.user_message.value;
    const userReview = { comment, rating: feedbackRating };

    if (!isEditing) {
      dispatch(addReview(userReview));
      setIsReview(true);
      return;
    }
    dispatch(updateReview(userReview));
    setIsReview(true);
    setIsEditing(false);
  };

  const onCommentChange = event => {
    const comment = event.target.value;
    setFeedbackComment(comment);
  };

  const handleDelete = () => {
    setIsReview(false);
    setFeedbackRating(5);
    setFeedbackComment('');
    dispatch(deleteReview());
  };

  const getFeedbackRating = rating => {
    setFeedbackRating(rating);
  };

  useEffect(() => {
    if (Object.keys(ownReview).length !== 0) {
      setIsReview(true);
      setFeedbackComment(ownReview.comment);
      setFeedbackRating(ownReview.rating);
      return;
    }
    if (Object.keys(dispatch(getOwnReview())) === 0) {
      setIsReview(false);
      setFeedbackComment('');
      setFeedbackRating(5);
      return;
    }
    dispatch(getOwnReview);
  }, [dispatch, ownReview]);

  return (
    <FeedbackContainer>
      <RatingWrapper>
        <RatingTitle>Rating</RatingTitle>
        <div className="stars">
          <StarApp isEditing={isEditing} isReview={isReview} rating={feedbackRating} getRating={getFeedbackRating} />
        </div>
      </RatingWrapper>
      {isActive && (
        <FormFeedback onSubmit={handleSubmit}>
          <div className="toolbar">
            <div>
              <p className="head">Review</p>
            </div>
            {isReview && (
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
                    onClick={handleDelete}
                  >
                    <svg>
                      <use href={sprite + '#icon-trash-review'}></use>
                    </svg>
                  </button>
                </div>
              </StyledFeedbackToolbar>
            )}
          </div>
          {(!isReview || isEditing) && (
            <textarea
              name="user_message"
              placeholder="Enter text"
              className="text_content"
              value={feedbackComment}
              onChange={onCommentChange}
            ></textarea>
          )}
          {isReview && !isEditing && (
            <textarea
              name="user_message"
              placeholder="Enter text"
              className="text_content"
              value={feedbackComment}
              readOnly
            ></textarea>
          )}
          {isActive && (!isReview || isEditing) && (
            <div className="buttonwrapper">
              <button type="submit" className="btn-foot">
              { !isEditing ? 'Save': 'Edit'}
              </button>
              <button type="button" className="btn-foot" onClick={closeModal}>
                Cancel
              </button>
            </div>
          )}
        </FormFeedback>
      )}
    </FeedbackContainer>
  );
};

export default FeedbackModal;
