import * as Yup from 'yup';
const phoneRegExp =
  '\\+?\\d{1,4}?[\\-.\\s]?\\(?\\d{1,3}?\\)?[\\-.\\s]?\\d{1,4}[\\-.\\s]?\\d{1,4}[\\-.\\s]?\\d{1,9}';

const ValidSchema = Yup.object().shape({
  firstName: Yup.string()
    .max(16, 'Must be 16 characters or less')
    .required('Username is required'),
  phone: Yup.string().matches(phoneRegExp, 'Wrong number'),
  birthday: Yup.string(),
  skype: Yup.string().max(16, 'Must be 16 characters or less'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
});

export default ValidSchema;
