import * as Yup from 'yup';
const phoneRegExp =
  '\\+?\\d{1,4}?[\\-.\\s]?\\(?\\d{1,3}?\\)?[\\-.\\s]?\\d{1,4}[\\-.\\s]?\\d{1,4}[\\-.\\s]?\\d{1,9}';

const birthdayRegExp =
  '^(0[1-9]|[12]\\d|3[01])/(0[1-9]|1[0-2])/(19\\d{2}|20\\d{2})$';

const skypeRegExp = /^[a-z][a-z0-9.,\-_]{5,31}$/i;

const ValidSchema = Yup.object().shape({
  usrName: Yup.string()
    .max(16, 'Must be 16 characters or less')
    .required('Username is required'),
  phone: Yup.string().matches(phoneRegExp, 'Please check your input'),
  birthday: Yup.string().matches(
    birthdayRegExp,
    'Wrong format. Example: 22/10/2022'
  ),
  skype: Yup.string()
    .matches(skypeRegExp, 'Please check your input')
    .max(16, 'Must be 16 characters or less'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
});

export default ValidSchema;
