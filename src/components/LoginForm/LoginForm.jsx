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
import { selectIsLoading } from 'redux/auth/authSelectors';

const LoginForm = () => {
  const dispacth = useDispatch();
  const isLoading = useSelector(selectIsLoading);


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
      .min(8, 'Password should be 6 chars minimum.')
      .max(20, 'Password should be 20 chars maximum')
      .required('Password is required field')
  });

  const GoogleAuth = async () => {
    const auth = getAuth(app);
    const googleAuthProvider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, googleAuthProvider);
      const googleUser = {
        email: result.user.email,
        password: result.user.providerData[0].uid,
      };
      dispacth(login(googleUser));
    } catch (error) {}
  };  
  

  return (
    <PageContainer>
      <FormPosition>
        <LoginContainer>
          <FormTitle>Log In</FormTitle>
          <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={userSchema}
            onSubmit={async values => {
              try {
                dispacth(login(values));
              } catch (error) {
                alert(error.message);
              }
            }}
          >
            {({ errors, values, touched }) => (
              <FormStyled>
                <BoxInput>
                  {errors.email || values.email.trim() ? (
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

                  {errors.email || values.email.trim() ? (
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
                      />
                      {errors.email ? (
                        <>
                          <Error>{errors.email}</Error>
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
                      />
                    </>
                  )}
                </BoxInput>

                <BoxInput>
                  {errors.password || values.password.trim() ? (
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
                  {errors.password || values.password.trim() ? (
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
                      />
                      {errors.password ? (
                        <>
                          <Error>{errors.password}</Error>
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
                      />
                    </>
                  )}
                </BoxInput>

                <LoginButton type="submit" disabled={isLoading}>
                  Log in <FiLogIn style={{ marginLeft: 11 }} />
                </LoginButton>
                <GoogleBtn type="button" onClick={GoogleAuth}>
                  Sign in with Google 🚀{' '}
                </GoogleBtn>
              </FormStyled>
            )}
          </Formik>
        </LoginContainer>
        <ImagePosition>
          <SingUp to="/register">Sing up</SingUp>
          <Image src={IMG} alt="Goose" />
        </ImagePosition>
      </FormPosition>
    </PageContainer>
  );
};

export default LoginForm;
