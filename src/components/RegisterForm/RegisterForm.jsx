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
import { login, register } from 'redux/auth/authOperations';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/auth/authSelectors';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

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
      dispatch(login(googleUser));
    } catch (error) {}
  };
  

  return (
    <PageContainer>
      <FormPosition>
        <RegisterContainer>
          <FormTitle>Sign Up</FormTitle>
          <Formik
            initialValues={{ username: '', email: '', password: '' }}
            validationSchema={userSchema}
            onSubmit={async values => {
              try {
                dispatch(register(values));
              } catch (error) {
                alert(error.message);
              }
            }}
          >
            {({ values, errors, touched }) => (
              <FormStyled>

                <BoxInput>
                  {errors.username || values.username.trim() ? (
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

                  {errors.username || values.username.trim() ? (
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
                      />
                      {errors.username ? (
                        <>
                          <Error>{errors.username}</Error>
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
                      />
                    </>
                  )}
                </BoxInput>

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

                <RegButton type="submit" disabled={isLoading}>
                  Sign Up <FiLogIn size={18} style={{ marginLeft: 11 }} />
                </RegButton>
                <GoogleBtn type='button' onClick={GoogleAuth}>Sign up with Google 🚀{' '}</GoogleBtn>
              </FormStyled>
            )}
          </Formik>
        </RegisterContainer>
        <ImagePosition>
          <LogIn to="/login">Log In</LogIn>
          <Image src={IMG} alt="Goose" />
        </ImagePosition>
      </FormPosition>
    </PageContainer>
  );
};

export default RegisterForm;
