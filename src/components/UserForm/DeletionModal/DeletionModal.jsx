import Modal from 'components/Modal/Modal';
import { Formik, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser } from 'redux/auth/authOperations';
import * as Yup from 'yup';
import {
  StyledButtonCancel,
  StyledButtonDelete,
  StyledButtonWrapper,
  StyledErrorText,
  StyledField,
  StyledForm,
  StyledFormText,
  StyledTitle,
  StyledWarningText,
} from './DeletionModal.styled';
import { selectUser } from 'redux/auth/authSelectors';
import { useState } from 'react';

const DeletionModal = ({ closeModal }) => {
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  let emailSchema = Yup.object().shape({
    email: Yup.string()
      .trim()
      .matches(
        /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
        'Invalid email. Valid email contain xxx@xxx.xxx'
      )
      .required('Email is required field'),
  });

  const handleSubmit = async ({ email }) => {
    if (email !== user.email) return setError(true);
    setError(false);
    dispatch(deleteUser(email));
  };
  return (
    <Modal closeModal={closeModal}>
      <StyledTitle>Warning!</StyledTitle>
      <StyledWarningText>
        Deleting your account can't be undone, and all data associated with it
        will be lost.
      </StyledWarningText>
      <Formik
        initialValues={{ email: '' }}
        validationSchema={emailSchema}
        validateOnChange={false}
        validateOnBlur={false}
        onSubmit={handleSubmit}
      >
        <StyledForm>
          <StyledFormText>
            Enter your email to confirm your action
          </StyledFormText>
          <div>
            <StyledField
              type="email"
              id="email"
              name="email"
              placeholder="Enter email"
              className={error ? 'error' : ''}
            />
            {error && <StyledErrorText>Invalid email</StyledErrorText>}
          </div>

          <StyledButtonWrapper>
            <StyledButtonCancel type="button" onClick={closeModal}>
              Cancel
            </StyledButtonCancel>
            <StyledButtonDelete type="submit">
              Delete account
            </StyledButtonDelete>
          </StyledButtonWrapper>
        </StyledForm>
      </Formik>
    </Modal>
  );
};

export default DeletionModal;
