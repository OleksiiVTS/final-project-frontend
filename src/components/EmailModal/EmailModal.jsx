import { Formik } from 'formik';
import * as Yup from 'yup';

import {
  ConfirmBtn,
  BtnWrapper,
  TextDiv,
  IconWrapper,
} from './EmailModal.styled';
// import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectTheme } from 'redux/header/headerSlice';
import { MdErrorOutline } from 'react-icons/md';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import {
  BoxInput,
  CorrectInput,
  Error,
  FormField,
  FormStyled,
  InputIconEmail,
} from 'components/RegisterForm/RegisterForm.styled';

const EmailModal = ({ closeModal }) => {
  const theme = useSelector(selectTheme);

  const Submit = values => {
    console.log(values);
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

  return (
    <>
      <TextDiv style={theme === 'dark' ? { color: '#fff' } : { color: '#000' }}>
        Please enter your email
      </TextDiv>

      <Formik
        initialValues={{ subEmail: '' }}
        validationSchema={emailSchema}
        validateOnBlur={false}
        validateOnChange={false}
        onSubmit={async (values, API) => {
          Submit(values, API);
        }}
      >
        {({ errors, isValid }) => (
          <FormStyled>
            <BoxInput>
              {!isValid ? (
                <>
                  <FormField
                    style={
                      errors.subEmail
                        ? {
                            borderColor: '#E74A3B',
                            backgroundColor: '#FFFFFF',
                            position: 'relative',
                          }
                        : {
                            borderColor: '#3CBC81',
                            backgroundColor: '#FFFFFF',
                            position: 'relative',
                          }
                    }
                    id="subEmail"
                    type="text"
                    name="subEmail"
                    placeholder="Enter email"
                    aria-required="true"
                    aria-invalid={!!errors.subEmail}
                    aria-describedby="subEmailError"
                  />
                  {errors.subEmail ? (
                    <>
                      <Error id="emailError">{errors.subEmail}</Error>
                      <IconWrapper>
                        <MdErrorOutline size={24} color="#E74A3B" />
                      </IconWrapper>
                    </>
                  ) : (
                    <>
                      <CorrectInput>This is a CORRECT email</CorrectInput>
                      <IconWrapper>
                        <AiOutlineCheckCircle size={24} color="#3CBC81" />
                      </IconWrapper>
                    </>
                  )}
                </>
              ) : (
                <>
                  <FormField
                    id="subEmail"
                    type="text"
                    name="subEmail"
                    placeholder="Enter email"
                    aria-required="true"
                    aria-invalid={!!errors.subEmail}
                    aria-describedby="subEmailError"
                  />
                </>
              )}
            </BoxInput>

            <BtnWrapper>
              <ConfirmBtn type="submit">Submit</ConfirmBtn>
            </BtnWrapper>
          </FormStyled>
        )}
      </Formik>
    </>
  );
};

export default EmailModal;
