import { Formik } from 'formik';
import { FiLogIn } from 'react-icons/fi';
import { MdErrorOutline } from 'react-icons/md';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import {
  Error,
  FormField,
  FormLabel,
  FormStyled,
  FormTitle,
  LogIn,
  RegButton,
  RegisterContainer,
  BoxInput,
  Image,
  FormPosition,
  PageContainer,
  ImagePosition,
  CorrectInput,
  InputIconName,
  InputIconEmail,
  InputIconPassword,
  GoogleBtn,
} from './RegisterForm.styled';
import * as Yup from 'yup';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { app } from '../../redux/auth/firebase';

import IMG from '../Pictures/singup_goose.jpg';

import { register } from 'redux/auth/authOperations';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/auth/authSelectors';
import { Circles } from 'react-loader-spinner';
import { useState } from 'react';
import Modal from 'components/Modal/Modal';
import InfoModal from 'components/InfoModal/InfoModal';
import EmailModal from 'components/EmailModal/EmailModal';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const regError = useSelector(selectError);
  const [isGoogle, setIsGoogle] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isOpenEmailModal, setIsOpenEmailModal] = useState(false);

  const closeModal = () => setShowModal(false);

  const toggleEmailModal = () => setIsOpenEmailModal(!isOpenEmailModal);

  const message =
    'To complete the registration process, please check your mailbox';

  let userSchema = Yup.object().shape({
    username: Yup.string()
      .trim()
      .min(4, 'Name is too short - should be 4 chars minimum.')
      .max(20, 'Name is too long - should be 20 chars maximum.')
      .required('Name is required field'),
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

  const GoogleAuth = async () => {
    const auth = getAuth(app);
    const googleAuthProvider = new GoogleAuthProvider().addScope('email');
    try {
      const { user } = await signInWithPopup(auth, googleAuthProvider);
      const googleUser = {
        username: user.providerData[0].displayName,
        email: user.providerData[0].email,
        password: user.providerData[0].uid,
        token: user.accessToken,
      };
      dispatch(register(googleUser));
      setShowModal(true);
      setIsGoogle(true);
      //
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = (values, { resetForm }) => {
    dispatch(register(values));
    setShowModal(true);
    setIsGoogle(false);

    resetForm();
  };

  return (
    <PageContainer>
      <FormPosition>
        <RegisterContainer>
          <FormTitle>Sign Up</FormTitle>
          <Formik
            initialValues={{ username: '', email: '', password: '' }}
            validationSchema={userSchema}
            validateOnBlur={false}
            validateOnChange={false}
            onSubmit={async (values, API) => {
              onSubmit(values, API);
            }}
          >
            {({ errors, isValid }) => (
              <FormStyled>
                <BoxInput>
                  {!isValid ? (
                    <FormLabel
                      style={
                        errors.username
                          ? { color: '#E74A3B' }
                          : { color: '#3CBC81' }
                      }
                      htmlFor="username"
                    >
                      Name
                    </FormLabel>
                  ) : (
                    <FormLabel htmlFor="username">Name</FormLabel>
                  )}

                  {!isValid ? (
                    <>
                      <FormField
                        style={
                          errors.username
                            ? { borderColor: '#E74A3B', position: 'relative' }
                            : { borderColor: '#3CBC81', position: 'relative' }
                        }
                        id="username"
                        type="text"
                        name="username"
                        placeholder="Enter your name"
                        aria-required="true"
                        aria-invalid={!!errors.username}
                        aria-describedby="usernameError"
                      />
                      {errors.username ? (
                        <>
                          <Error id="usernameError">{errors.username}</Error>
                          <InputIconName>
                            <MdErrorOutline size={24} color="#E74A3B" />
                          </InputIconName>
                        </>
                      ) : (
                        <>
                          <CorrectInput>This is a CORRECT name</CorrectInput>
                          <InputIconName>
                            <AiOutlineCheckCircle size={24} color="#3CBC81" />
                          </InputIconName>
                        </>
                      )}
                    </>
                  ) : (
                    <>
                      <FormField
                        id="username"
                        type="text"
                        name="username"
                        placeholder="Enter your name"
                        aria-required="true"
                        aria-invalid={!!errors.username}
                        aria-describedby="usernameError"
                      />
                    </>
                  )}
                </BoxInput>

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
                    <RegButton type="submit" disabled={isLoading}>
                      Sign up <FiLogIn style={{ marginLeft: 11 }} />
                    </RegButton>
                    <GoogleBtn
                      type="button"
                      onClick={GoogleAuth}
                      disabled={isLoading}
                    >
                      Sign up with Google 🚀{' '}
                    </GoogleBtn>
                    <RegButton
                      type="button"
                      onClick={toggleEmailModal}
                      disabled={isLoading}
                    >
                      Resend verification email
                    </RegButton>
                  </>
                )}
              </FormStyled>
            )}
          </Formik>
        </RegisterContainer>
        <ImagePosition>
          <LogIn to="/login">Log In</LogIn>
          <Image
            srcSet={`
            ${require('../Pictures/singup_goose.jpg')} 1x,
            ${require('../Pictures/singup_goose2x.jpg')} 2x
          `}
            src={IMG}
            alt="Goose"
          />
        </ImagePosition>
      </FormPosition>
      {showModal && regError && !isLoading && (
        <Modal closeModal={closeModal}>
          <InfoModal message={regError} closeModal={closeModal} />
        </Modal>
      )}
      {showModal && !regError && !isGoogle && !isLoading && (
        <Modal closeModal={closeModal}>
          <InfoModal message={message} closeModal={closeModal} />
        </Modal>
      )}
      {isOpenEmailModal && (
        <Modal closeModal={toggleEmailModal}>
          <EmailModal />
        </Modal>
      )}
    </PageContainer>
  );
};

export default RegisterForm;
