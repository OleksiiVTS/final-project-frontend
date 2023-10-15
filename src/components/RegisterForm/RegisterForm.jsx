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
} from './RegisterForm.styled';
import * as Yup from 'yup';

import IMG from '../Pictures/singup_goose.jpg';

const RegisterForm = () => {
  let userSchema = Yup.object().shape({
    name: Yup.string()
      .trim()
      .min(2, 'Name is too short - should be 2 chars minimum.')
      .max(20, 'Name is too long - should be 20 chars maximum.')
      .required('Name is required'),
    email: Yup.string()
      .trim()
      .matches(
        /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
        'Invalid email. Valid email contain xxx@xxx.xxx'
      )
      .required('Email is required'),
    password: Yup.string()
      .trim()
      .min(6, 'Password should be 6 chars minimum.')
      .max(20, 'Password should be 20 chars maximum')
      .required('Password is required')
      .matches(/[a-zA-Z]/, 'Password mast contain Latin letters.'),
  });

  return (
    <PageContainer>
      <FormPosition>
        <RegisterContainer>
          <FormTitle>Sign Up</FormTitle>
          <Formik
            initialValues={{ name: '', email: '', password: '' }}
            validationSchema={userSchema}
            onSubmit={async values => {
              console.log(values);
            }}
          >
            {({ values, errors, touched }) => (
              <FormStyled>
                <BoxInput>
                  {errors.name || values.name.trim() ? (
                    <FormLabel
                      style={
                        errors.name
                          ? { color: '#E74A3B' }
                          : { color: '#3CBC81' }
                      }
                      htmlFor="name"
                    >
                      Name
                    </FormLabel>
                  ) : (
                    <FormLabel htmlFor="name">Name</FormLabel>
                  )}

                  {errors.name || values.name.trim() ? (
                    <>
                      <FormField
                        style={
                          errors.name
                            ? { borderColor: '#E74A3B', position: 'relative' }
                            : { borderColor: '#3CBC81', position: 'relative' }
                        }
                        id="name"
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                      />
                      {errors.name ? (
                        <>
                          <Error>{errors.name}</Error>
                          <InputIconName>
                            <MdErrorOutline size={24} color="#E74A3B" />
                          </InputIconName>
                        </>
                      ) : (
                        <>
                          <CorrectInput>This is an CORRECT name</CorrectInput>
                          <InputIconName>
                            <AiOutlineCheckCircle size={24} color="#3CBC81" />
                          </InputIconName>
                        </>
                      )}
                    </>
                  ) : (
                    <>
                      <FormField
                        id="name"
                        type="text"
                        name="name"
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
                          <CorrectInput>This is an CORRECT email</CorrectInput>
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
                        type="text"
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
                            This is an CORRECT password
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

                <RegButton type="submit">
                  Sign Up <FiLogIn size={18} style={{ marginLeft: 11 }} />
                </RegButton>
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
