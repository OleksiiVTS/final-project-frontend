import { useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import moment from 'moment';
import { AiFillPlusCircle } from 'react-icons/ai';

import { selectUser } from '../../redux/auth/authSelectors.js';
import {
  Avatar,
  BoxForm,
  BtnUserForm,
  FormaBox,
  IconDiv,
  InputHide,
  InputUserForm,
  LabelUserForm,
  User,
  UserFormBox,
  UserName,
  WhiteBox,
} from './UserForm.styled.jsx';

const UserForm = () => {
  // const dispatch = useDispatch();
  const isUser = useSelector(selectUser);
  console.log(isUser.avatarURL);
  const phoneRegExp =
    '\\+?\\d{1,4}?[\\-.\\s]?\\(?\\d{1,3}?\\)?[\\-.\\s]?\\d{1,4}[\\-.\\s]?\\d{1,4}[\\-.\\s]?\\d{1,9}';
  const formik = useFormik({
    initialValues: {
      usrName: isUser.username ?? '',
      phone: isUser.phone ?? '',
      birthday: isUser.birthday ?? '',
      skype: isUser.skype ?? '',
      email: isUser.email ?? '',
    },

    validationSchema: Yup.object().shape({
      firstName: Yup.string()
        .max(16, 'Must be 16 characters or less')
        .required('Username is required'),
      phone: Yup.string().matches(phoneRegExp, 'Wrong number'),
      birthday: Yup.string(),
      skype: Yup.string().max(16, 'Must be 16 characters or less'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
    }),
  });
  const nowDate = new Date();
  const dateMoment = moment(nowDate).format('YYYY-MM-DD');

  return (
    <FormaBox onSubmit={formik.handleSubmit}>
      <UserFormBox>
        <div>
          <label htmlFor="avatar">
            <Avatar src={isUser.avatarURL} alt="User avatar" />
            <IconDiv>
              <AiFillPlusCircle size={24} fill="#3E85F3" />
            </IconDiv>
            <WhiteBox></WhiteBox>
            <InputHide type="file" name="avatar" accept="image/*" />
          </label>
          <UserName>{isUser.username ?? 'User Name'}</UserName>

          <User>User</User>
        </div>
        <BoxForm>
          <LabelUserForm htmlFor="usrName">User Name</LabelUserForm>
          <InputUserForm
            id="usrName"
            name="usrName"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.usrName}
          />
          {formik.touched.usrName && formik.errors.usrName ? (
            <div>{formik.errors.usrName}</div>
          ) : null}

          <LabelUserForm htmlFor="birthday">Birthday</LabelUserForm>
          <InputUserForm
            id="birthday"
            name="birthday"
            type="birthday"
            placeholder={dateMoment}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.birthday}
          ></InputUserForm>

          <LabelUserForm htmlFor="email">Email</LabelUserForm>
          <InputUserForm
            id="email"
            name="email"
            type="email"
            placeholder="Add your email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
          ) : null}

          <LabelUserForm htmlFor="phone">Phone</LabelUserForm>
          <InputUserForm
            id="phone"
            name="phone"
            type="phone"
            placeholder="Add a phone number"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone}
          ></InputUserForm>

          <LabelUserForm htmlFor="skype">Skype</LabelUserForm>
          <InputUserForm
            id="skype"
            name="skype"
            type="skype"
            placeholder="Add a skype number"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.skype}
          ></InputUserForm>
        </BoxForm>
        <BtnUserForm type="submit">Save changes</BtnUserForm>
      </UserFormBox>
    </FormaBox>
  );
};

export default UserForm;
