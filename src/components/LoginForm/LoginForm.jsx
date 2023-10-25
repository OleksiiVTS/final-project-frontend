import React from 'react';
import { Formik } from 'formik';
import {
  BoxInput,
  Error,
  FormField,
  FormLabel,
  FormPosition,
  FormStyled,
  FormTitle,
  Image,
  LoginButton,
  LoginContainer,
  PageContainer,
  SingUp,
  ImagePosition,
  CorrectInput,
  InputIconEmail,
  InputIconPassword,
  GoogleBtn,
} from './LoginForm.styled';
import { MdErrorOutline } from 'react-icons/md';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { FiLogIn } from 'react-icons/fi';
import * as Yup from 'yup';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { app } from '../../redux/auth/firebase';

import IMG from '../Pictures/login_goose.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { login } from 'redux/auth/authOperations';
import { selectError, selectIsLoading } from 'redux/auth/authSelectors';
import { Circles } from 'react-loader-spinner';
import Modal from 'components/Modal/Modal';
import InfoModal from 'components/InfoModal/InfoModal';
import { useState } from 'react';

const LoginForm = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const loginError = useSelector(selectError);
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => setShowModal(false);

  let userSchema = Yup.object().shape({
    email: Yup.string()
      .trim()
      .matches(
        /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
        'Invalid email. Valid email contain xxx@xxx.xxx'
      )
      .required('Email is required field'),
    password: Yup.string()
      .trim()
      .min(8, 'Password should be 8 chars minimum.')
      .max(20, 'Password should be 20 chars maximum')
      .required('Password is required field'),
  });

  const googleLogin = async () => {
    const auth = getAuth(app);
    const googleAuthProvider = new GoogleAuthProvider().addScope('email');
    try {
      const result = await signInWithPopup(auth, googleAuthProvider);
      const googleUser = {
        email: result.user.providerData[0].email,
        password: result.user.providerData[0].uid,
      };
      dispatch(login(googleUser));
      setShowModal(true);
    } catch (error) {}
  };

  const commonLogin = async values => {
    dispatch(login(values));
    setShowModal(true);
  };

  return (
    <PageContainer>
      <FormPosition>
        <LoginContainer>
          <FormTitle>Log In</FormTitle>
          <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={userSchema}
            validateOnChange={false}
            validateOnBlur={false}
            onSubmit={commonLogin}
          >
            {({ errors, isValid }) => (
              <FormStyled>
                <BoxInput>
                  {!isValid ? (
                    <FormLabel
                      style={
                        errors.email
                          ? { color: '#E74A3B' }
                          : { color: '#3CBC81' }
                      }
                      htmlFor="email"
                    >
                      Email
                    </FormLabel>
                  ) : (
                    <FormLabel htmlFor="email">Email</FormLabel>
                  )}

                  {!isValid ? (
                    <>
                      <FormField
                        style={
                          errors.email
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
                        id="email"
                        type="text"
                        name="email"
                        placeholder="Enter email"
                        aria-required="true"
                        aria-invalid={!!errors.email}
                        aria-describedby="emailError"
                      />
                      {errors.email ? (
                        <>
                          <Error id="emailError">{errors.email}</Error>
                          <InputIconEmail>
                            <MdErrorOutline size={24} color="#E74A3B" />
                          </InputIconEmail>
                        </>
                      ) : (
                        <>
                          <CorrectInput>This is a CORRECT email</CorrectInput>
                          <InputIconEmail>
                            <AiOutlineCheckCircle size={24} color="#3CBC81" />
                          </InputIconEmail>
                        </>
                      )}
                    </>
                  ) : (
                    <>
                      <FormField
                        id="email"
                        type="text"
                        name="email"
                        placeholder="Enter email"
                        aria-required="true"
                        aria-invalid={!!errors.email}
                        aria-describedby="emailError"
                      />
                    </>
                  )}
                </BoxInput>

                <BoxInput>
                  {!isValid ? (
                    <FormLabel
                      style={
                        errors.password
                          ? { color: '#E74A3B' }
                          : { color: '#3CBC81' }
                      }
                      htmlFor="password"
                    >
                      Password
                    </FormLabel>
                  ) : (
                    <FormLabel htmlFor="password">Password</FormLabel>
                  )}
                  {!isValid ? (
                    <>
                      <FormField
                        style={
                          errors.password
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
                        id="password"
                        type="password"
                        name="password"
                        placeholder="Enter password"
                        aria-required="true"
                        aria-invalid={!!errors.password}
                        aria-describedby="passwordError"
                      />
                      {errors.password ? (
                        <>
                          <Error id="passwordError">{errors.password}</Error>
                          <InputIconPassword>
                            <MdErrorOutline size={24} color="#E74A3B" />
                          </InputIconPassword>
                        </>
                      ) : (
                        <>
                          <CorrectInput>
                            This is a CORRECT password
                          </CorrectInput>
                          <InputIconPassword>
                            <AiOutlineCheckCircle size={24} color="#3CBC81" />
                          </InputIconPassword>
                        </>
                      )}
                    </>
                  ) : (
                    <>
                      <FormField
                        id="password"
                        type="password"
                        name="password"
                        placeholder="Enter password"
                        aria-required="true"
                        aria-invalid={!!errors.password}
                        aria-describedby="passwordError"
                      />
                    </>
                  )}
                </BoxInput>

                {isLoading ? (
                  <div style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                    <Circles
                      height="80"
                      width="80"
                      color="#3E85F3"
                      ariaLabel="circles-loading"
                      wrapperStyle={{}}
                      wrapperClass=""
                      visible={true}
                    />
                  </div>
                ) : (
                  <>
                    <LoginButton type="submit" disabled={isLoading}>
                      Log in <FiLogIn style={{ marginLeft: 11 }} />
                    </LoginButton>
                    <GoogleBtn
                      type="button"
                      onClick={googleLogin}
                      disabled={isLoading}
                    >
                      Sign in with Google 🚀{' '}
                    </GoogleBtn>
                  </>
                )}
              </FormStyled>
            )}
          </Formik>
        </LoginContainer>
        <ImagePosition>
          <SingUp to="/register">Sing up</SingUp>
          <Image
            srcSet={`
            ${require('../Pictures/login_goose.jpg')} 1x,
            ${require('../Pictures/login_goose@2x.jpg')} 2x
            `}
            src={IMG}
            alt="Goose"
          />
        </ImagePosition>
      </FormPosition>
      {showModal && loginError && !isLoading && (
        <Modal closeModal={closeModal}>
          <InfoModal message={loginError} closeModal={closeModal}></InfoModal>
        </Modal>
      )}
    </PageContainer>
  );
};

export default LoginForm;
