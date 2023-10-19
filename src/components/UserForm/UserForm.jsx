import { useDispatch, useSelector } from 'react-redux';
import { Formik, useFormik } from 'formik';
import ValidSchema from 'helpers/schemaYap.js';
import { update } from 'redux/auth/authOperations.js';

import { selectUser } from '../../redux/auth/authSelectors.js';
import {
  Avatar,
  BtnUserForm,
  InputUserForm,
  LabelUserForm,
  User,
  UserFormBox,
  UserName,
} from './UserForm.styled.jsx';

const UserForm = () => {
  const dispatch = useDispatch();
  const updateUser = updateUser => {
    dispatch(update(updateUser));
  };
  const isUser = useSelector(selectUser);
  console.log(isUser);

  const formik = useFormik({
    initialValues: {
      usrName: isUser.username ?? '',
      phone: isUser.phone ?? '',
      birthday: isUser.birthday ?? '',
      skype: isUser.skype ?? '',
      email: isUser.email ?? '',
    },
    onSubmit: values => {
      // console.log(values.skype);
      updateUser(values);
    },
  });

  return (
    <Formik validationSchema={ValidSchema}>
      <form onSubmit={formik.handleSubmit}>
        <UserFormBox validationSchema={ValidSchema}>
          <label htmlFor="avatar">
            <Avatar
              src={isUser.avatarURL}
              alt="User avatar"
              width={125}
              height={125}
            />
            <input type="file" name="avatar" accept="image/*" />

            <UserName>{isUser.username ?? 'User Name'}</UserName>

            <User>User</User>
          </label>

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

          <LabelUserForm htmlFor="phone">Phone</LabelUserForm>
          <InputUserForm
            id="phone"
            name="phone"
            type="phone"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone}
          ></InputUserForm>

          <LabelUserForm htmlFor="birthday">Birthday</LabelUserForm>
          <InputUserForm
            id="birthday"
            name="birthday"
            type="birthday"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.birthday}
          ></InputUserForm>

          <LabelUserForm htmlFor="skype">Skype</LabelUserForm>
          <InputUserForm
            id="skype"
            name="skype"
            type="skype"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.skype}
          ></InputUserForm>

          <LabelUserForm htmlFor="email">Email</LabelUserForm>
          <InputUserForm
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
          ) : null}

          <BtnUserForm type="submit">Save changes</BtnUserForm>
        </UserFormBox>
      </form>
    </Formik>
  );
};

export default UserForm;
