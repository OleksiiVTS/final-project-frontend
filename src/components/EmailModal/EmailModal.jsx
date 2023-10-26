import { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

import {
  ConfirmBtn,
  BtnWrapper,
  TextDiv,
  IconWrapper,
} from './EmailModal.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectTheme } from 'redux/header/headerSlice';
import { MdErrorOutline } from 'react-icons/md';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import {
  BoxInput,
  CorrectInput,
  Error,
  FormField,
  FormStyled,
} from 'components/RegisterForm/RegisterForm.styled';
import { selectError, selectIsLoading } from 'redux/auth/authSelectors';
import { resendEmail } from 'redux/auth/authOperations';

const EmailModal = () => {
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const isLoading = useSelector(selectIsLoading);

  const authError = useSelector(selectError);
  const dispatch = useDispatch();

  const Submit = ({ subEmail }) => {
    dispatch(resendEmail({ email: subEmail }));
    setHasSubmitted(true);
  };

  let emailSchema = Yup.object().shape({
    subEmail: Yup.string()
      .trim()
      .matches(
        /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
        'Invalid email. Valid email contain xxx@xxx.xxx'
      )
      .required('Email is required field'),
  });

  const theme = useSelector(selectTheme);
  return (
    <>
      {(!hasSubmitted || (hasSubmitted && isLoading)) && (
        <>
          <TextDiv
            style={theme === 'dark' ? { color: '#fff' } : { color: '#000' }}
          >
            Please enter your email
          </TextDiv>

          <Formik
            initialValues={{ subEmail: '' }}
            validationSchema={emailSchema}
            validateOnBlur={true}
            validateOnChange={false}
            onSubmit={Submit}
          >
            {({ errors, isValid, touched }) => (
              <FormStyled>
                <BoxInput>
                  <>
                    <FormField
                      state={{ isValid, touched: touched.subEmail }}
                      id="subEmail"
                      type="text"
                      name="subEmail"
                      placeholder="Enter email"
                      aria-required="true"
                      aria-invalid={!!errors.subEmail}
                      aria-describedby="subEmailError"
                    />
                    {touched.subEmail && !isValid && (
                      <>
                        <Error id="subEmailError">{errors.subEmail}</Error>
                        <IconWrapper>
                          <MdErrorOutline size={24} color="#E74A3B" />
                        </IconWrapper>
                      </>
                    )}
                    {touched.subEmail && isValid && (
                      <>
                        <CorrectInput>This is a CORRECT email</CorrectInput>
                        <IconWrapper>
                          <AiOutlineCheckCircle size={24} color="#3CBC81" />
                        </IconWrapper>
                      </>
                    )}
                  </>
                </BoxInput>

                <BtnWrapper>
                  <ConfirmBtn type="submit">Submit</ConfirmBtn>
                </BtnWrapper>
              </FormStyled>
            )}
          </Formik>
        </>
      )}
      {hasSubmitted && !isLoading && (
        <TextDiv
          style={theme === 'dark' ? { color: '#fff' } : { color: '#000' }}
        >
          {authError ? authError : 'Email has been sent'}
        </TextDiv>
      )}
    </>
  );
};

export default EmailModal;
