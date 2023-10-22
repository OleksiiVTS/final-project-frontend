//import moment from 'moment';
import { format } from 'date-fns';
import { AiFillPlusCircle } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, useFormik } from 'formik';
import ValidSchema from 'helpers/schemaYap.js';
import { update } from 'redux/auth/authOperations.js';

import { selectUser } from '../../redux/auth/authSelectors.js';
import {
  Avatar,
  BoxForm,
  BtnUserForm,
  FormaBox,
  IconDiv,
  InputUserForm,
  LabelUserForm,
  User,
  UserFormBox,
  UserName,
  WhiteBox,
} from './UserForm.styled.jsx';
import { useRef } from 'react';
import PreviewAvatar from './PreviewAvatar.js';
import { selectTheme } from 'redux/header/headerSlice.js';

const UserForm = () => {
  const dispatch = useDispatch();
  const updateUser = updateUser => {
    dispatch(update(updateUser));
  };
  const isUser = useSelector(selectUser);
  const theme = useSelector(selectTheme);

  const fileRef = useRef(null);

  const formik = useFormik({
    initialValues: {
      usrName: isUser.username ?? '',
      phone: isUser.phone ?? '',
      birthday: isUser.birthday ?? '',
      skype: isUser.skype ?? '',
      email: isUser.email ?? '',
      file: null,
    },
    onSubmit: values => {
      var imagefile = document.getElementById('avatar');
      //console.log(imagefile);
      updateUser({ ...values, avatarURL: imagefile });
    },
  });
  //const nowDate = new Date();
  const dateMoment = format(new Date(), 'MM/dd/yyyy');

  return (
    <Formik validationSchema={ValidSchema}>
      <FormaBox onSubmit={formik.handleSubmit}>
        <UserFormBox
          validationSchema={ValidSchema}
          bg={theme === 'dark' ? 'var(--color-choice-dark-no-active)' : '#fff'}
          color={theme === 'dark' ? 'var(--color-field-names-dark)' : '#000'}
        >
          <div>
            <label htmlFor="avatar">
              {formik.values.file ? (
                <PreviewAvatar file={formik.values.file} />
              ) : (
                <Avatar src={isUser.avatarURL} alt="User avatar" />
              )}

              <IconDiv
                type="button"
                onClick={() => {
                  fileRef.current.click();
                }}
              >
                <AiFillPlusCircle size={24} fill="#3E85F3" />
              </IconDiv>
              <WhiteBox></WhiteBox>
              <input
                ref={fileRef}
                id="avatar"
                type="file"
                hidden
                accept="image/*"
                onChange={event => {
                  formik.setFieldValue('file', event.target.files[0]);
                }}
                onBlur={formik.handleBlur}
                value={formik.values.avatar}
              />
            </label>
            <UserName color={theme === 'dark' ? '#fff' : '#343434'}>
              {isUser.username ?? 'User Name'}
            </UserName>

            <User
              color={
                theme === 'dark' ? 'var(--color-field-names-dark)' : '#343434'
              }
            >
              User
            </User>
          </div>
          <BoxForm>
            <LabelUserForm htmlFor="usrName">User Name</LabelUserForm>
            <InputUserForm
              bg={
                theme === 'dark' ? 'var(--color-choice-dark-no-active)' : '#fff'
              }
              color={theme === 'dark' ? '#fff' : '#000'}
              bordercolor={
                theme === 'dark'
                  ? 'var(--color-field-names-dark)'
                  : 'rgba(17, 17, 17, 0.1)'
              }
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
              bg={
                theme === 'dark' ? 'var(--color-choice-dark-no-active)' : '#fff'
              }
              color={theme === 'dark' ? '#fff' : '#000'}
              bordercolor={
                theme === 'dark'
                  ? 'var(--color-field-names-dark)'
                  : 'rgba(17, 17, 17, 0.1)'
              }
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
              bg={
                theme === 'dark' ? 'var(--color-choice-dark-no-active)' : '#fff'
              }
              color={theme === 'dark' ? '#fff' : '#000'}
              bordercolor={
                theme === 'dark'
                  ? 'var(--color-field-names-dark)'
                  : 'rgba(17, 17, 17, 0.1)'
              }
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
              bg={
                theme === 'dark' ? 'var(--color-choice-dark-no-active)' : '#fff'
              }
              color={theme === 'dark' ? '#fff' : '#000'}
              bordercolor={
                theme === 'dark'
                  ? 'var(--color-field-names-dark)'
                  : 'rgba(17, 17, 17, 0.1)'
              }
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
              bg={
                theme === 'dark' ? 'var(--color-choice-dark-no-active)' : '#fff'
              }
              color={theme === 'dark' ? '#fff' : '#000'}
              bordercolor={
                theme === 'dark'
                  ? 'var(--color-field-names-dark)'
                  : 'rgba(17, 17, 17, 0.1)'
              }
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
    </Formik>
  );
};

export default UserForm;
