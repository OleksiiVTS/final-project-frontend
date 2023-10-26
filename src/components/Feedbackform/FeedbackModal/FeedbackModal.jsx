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
import { selectIsLoading, selectOwnReview } from 'redux/review/reviewSelectors';
import Loader from 'components/Loader';
import { selectTheme } from 'redux/header/headerSlice';

const FeedbackModal = ({ isActive, closeModal }) => {
  const [feedbackRating, setFeedbackRating] = useState(5);
  const [feedbackComment, setFeedbackComment] = useState('');
  const [isReview, setIsReview] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [hasFetchedReview, setHasFetchedReview] = useState(false);
  const theme = useSelector(selectTheme);
  const ownReview = useSelector(selectOwnReview);
  const isLoading = useSelector(selectIsLoading);

  const dispatch = useDispatch();

  const handleSubmit = async event => {
    event.preventDefault();
    const comment = event.currentTarget.elements.user_message.value;
    const userReview = { comment, rating: feedbackRating };
    closeModal();

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
    closeModal();
  };

  const getFeedbackRating = rating => {
    setFeedbackRating(rating);
  };
  if (!isLoading && isEditing) {
    const edit = document.getElementById('edit');
    edit.classList.add('textInFover');
  }

  useEffect(() => {
    if (Object.keys(ownReview).length !== 0) {
      setIsReview(true);
      setFeedbackComment(ownReview.comment);
      setFeedbackRating(ownReview.rating);
      return;
    }

    if (!hasFetchedReview) {
      dispatch(getOwnReview()).then(result => {
        if (Object.keys(result.payload).length === 0) {
          setIsReview(false);
          setFeedbackComment('');
          setFeedbackRating(5);
        }
        setHasFetchedReview(true);
      });
    }
  }, [dispatch, ownReview, hasFetchedReview]);

  return (
    <FeedbackContainer>
      {isLoading && <Loader />}
      {!isLoading && (
        <>
          <RatingWrapper>
            <RatingTitle
              color={
                theme === 'dark' ? 'var(--color-field-names-dark)' : '#343434cc'
              }
            >
              Rating
            </RatingTitle>

            {(!isReview || isEditing) && (
              <div className="stars" style={{ cursor: 'pointer' }}>
                <StarApp
                  isActive={isActive}
                  rating={feedbackRating}
                  getRating={getFeedbackRating}
                />
              </div>
            )}

            {isReview && !isEditing && (
              <div className="stars">
                <StarApp rating={feedbackRating} />
              </div>
            )}
          </RatingWrapper>
          {isActive && (
            <FormFeedback
              onSubmit={handleSubmit}
              textfieldbg={
                theme === 'dark' ? 'var(--color-theme-dark)' : '#F6F6F6'
              }
              textfieldcolor={theme === 'dark' ? '#ffffff' : '#343434'}
              textfielborder={
                theme === 'dark' ? '1px solid  #FFFFFF26' : 'none'
              }
              reviewtextcolor={
                theme === 'dark' ? 'var(--color-field-names-dark)' : '#343434cc'
              }
              bgbtn={
                theme === 'dark'
                  ? 'var(--color-choice-dark-no-active)'
                  : 'var(--color-choice-light-no-active)'
              }
              editbtnbg={
                theme === 'dark'
                  ? 'var(--color-choice-dark-no-active)'
                  : 'var(--color-choice-light-no-active)'
              }
            >
              <div className="toolbar">
                <div>
                  <p className="head">Review</p>
                </div>
                {isReview && (
                  <StyledFeedbackToolbar
                    editbtnbg={
                      theme === 'dark'
                        ? 'var(--color-choice-dark-no-active)'
                        : 'var(--color-choice-light-no-active)'
                    }
                  >
                    <div className="controlsWrapper">
                      <button
                        id="edit"
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
                  required
                  name="user_message"
                  placeholder="Enter text"
                  className="text_content"
                  value={feedbackComment}
                  onChange={onCommentChange}
                ></textarea>
              )}
              {isReview && !isEditing && (
                <textarea
                  required
                  name="user_message"
                  placeholder="Enter text"
                  className="text_content"
                  value={feedbackComment}
                  readOnly
                ></textarea>
              )}
              {isActive && (!isReview || isEditing) && (
                <div className="buttonwrapper">
                  <button type="submit" className="btn-foot-first">
                    {!isEditing ? 'Save' : 'Edit'}
                  </button>
                  <button
                    type="button"
                    className="btn-foot-second"
                    onClick={closeModal}
                  >
                    Cancel
                  </button>
                </div>
              )}
            </FormFeedback>
          )}
        </>
      )}
    </FeedbackContainer>
  );
};

export default FeedbackModal;
