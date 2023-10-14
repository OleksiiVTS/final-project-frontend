import { Formik } from 'formik';
import { FiLogIn } from 'react-icons/fi';
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
} from './RegisterForm.styled';
import * as Yup from 'yup';

import IMG from '../Pictures/singup_goose.jpg';

const RegisterForm = () => {
  let userSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Name is too short - should be 2 chars minimum.')
      .max(20, 'Name is too long - should be 20 chars maximum.')
      .required('Name is required'),
    email: Yup.string()
      .matches(
        /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
        'Invalid email. Valid email contain xxx@xxx.xxx'
      )
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password is too short - should be 6 chars minimum.')
      .max(20, 'Password is too long - should be 20 chars maximum')
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
                  <FormLabel htmlFor="name">Name</FormLabel>
                  <FormField
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                  />
                  {errors.name && touched.name ? (
                    <Error>{errors.name}</Error>
                  ) : null}
                </BoxInput>

                <BoxInput>
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <FormField
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Enter email"
                  />
                  {errors.email && touched.email ? (
                    <Error>{errors.email}</Error>
                  ) : null}
                </BoxInput>

                <BoxInput>
                  <FormLabel htmlFor="password">Password</FormLabel>
                  <FormField
                    id="password"
                    type="password"
                    name="password"
                    placeholder="Enter password"
                  />
                  {errors.password && touched.password ? (
                    <Error>{errors.password}</Error>
                  ) : null}
                </BoxInput>
                <RegButton type="submit">
                  Sign Up <FiLogIn size={18} style={{ marginLeft: 11 }} />
                </RegButton>
              </FormStyled>
            )}
          </Formik>
        </RegisterContainer>
        <ImagePosition>
          <LogIn>Log In</LogIn>
          <Image src={IMG} alt="Goose" />
        </ImagePosition>
      </FormPosition>
    </PageContainer>
  );
};

export default RegisterForm;
