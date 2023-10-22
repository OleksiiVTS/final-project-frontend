//import moment from 'moment';
//import { format } from 'date-fns';
import { AiFillPlusCircle } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, useFormik } from 'formik';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
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

const UserForm = () => {
  const dispatch = useDispatch();
  const updateUser = updateUser => {
    dispatch(update(updateUser));
  };
  const isUser = useSelector(selectUser);
  //const dateMoment = format(new Date(), 'MM/dd/yyyy');

  const fileRef = useRef(null);

  const formik = useFormik({
    initialValues: {
      usrName: isUser.username ?? '',
      phone: isUser.phone ?? '',
      birthday: new Date(isUser.birthday),
      skype: isUser.skype ?? '',
      email: isUser.email ?? '',
      file: isUser.file,
    },
    onSubmit: values => {
      var imagefile = document.getElementById('avatar');
      //console.log(imagefile);
      updateUser({ ...values, avatarURL: imagefile });
    },
  });
  console.log(formik.values.birthday);
  return (
    <Formik validationSchema={ValidSchema}>
      <FormaBox onSubmit={formik.handleSubmit}>
        <UserFormBox validationSchema={ValidSchema}>
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
            {/* <InputUserForm
              id="birthday"
              name="birthday"
              type="birthday"
              placeholder={dateMoment}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.birthday}
            ></InputUserForm> */}
            <DatePicker
              id="birthday"
              selected={formik.values.birthday}
              name="birthday"
              onChange={date => formik.setFieldValue('birthday', date)}
            />
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
    </Formik>
  );
};

export default UserForm;
