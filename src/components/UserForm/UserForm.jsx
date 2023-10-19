import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import MainLayout from 'components/MainLayout/MainLayout';
import { Circles } from 'react-loader-spinner';

import { Formik, ErrorMessage } from 'formik';
import { object, string, date } from 'yup';

import { selectIsRefreshing, selectUser } from '../../redux/auth/authSelectors';
import {
  fetchingCurrentUser,
  updateUser,
} from '..//../redux/auth/authOperations';

import sprite from '../Pictures/sprite.svg';

import {
  ContainerImg,
  Wrapper,
  Input,
  DatePick,
  Btn,
  BlockInput,
  Forms,
  InputFile,
  ImgBtn,
  ImgAvatar,
  LabelBtn,
  LabelImg,
  User,
  SvgAvatar,
  VectorPng,
} from './UserForm.styled';

// const validationFormikSchema = object({
//   name: string().max(16).required(),
//   birthday: date(),
//   email: string().email().required(),
//   skype: string().max(16),
// });

const UserForm = () => {
  const isUser = useSelector(selectUser);
  const IsRefreshing = useSelector(selectIsRefreshing);
  // console.log(isUser);
  const formik = useFormik({
    initialValues: {
      usrName: isUser.username ?? '',
      phone: isUser.phone ?? '',
      birthday: isUser.birthday ?? '',
      skype: isUser.skype ?? '',
      email: isUser.email ?? '',
    },
    onSubmit: values => {
      // console.log(values);
      alert(JSON.stringify(values, null, 2));
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      phone: Yup.string(),
      birthday: Yup.string(),
      skype: Yup.string(),
      email: Yup.string().email('Invalid email address').required('Required'),
    }),
  });
  return IsRefreshing ? (
    <Circles
      height="80"
      width="80"
      color="#4d78a9"
      // wrapperClass={css.loader}
    />
  ) : (
    <div>
      <h1> AccountForm</h1>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="avatar">
          <img src="" alt="User avatar" />
          <input type="file" name="avatar" accept="image/*" />
          <br></br>
          {isUser.username ?? 'User Name'}
          <br></br>
          User
        </label>
        <br></br>
        <label htmlFor="usrName">User Name</label>
        <input
          id="usrName"
          name="usrName"
          placeholder="User Name"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.usrName}
        />
        {formik.touched.usrName && formik.errors.usrName ? (
          <div>{formik.errors.usrName}</div>
        ) : null}
        <br></br>
        <label htmlFor="phone">Phone</label>
        <input
          id="phone"
          name="phone"
          type="phone"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.phone}
        ></input>
        <br></br>
        <label htmlFor="birthday">Birthday</label>
        <input
          id="birthday"
          name="birthday"
          type="birthday"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.birthday}
        ></input>
        <br></br>
        <label htmlFor="skype">Skype</label>
        <input
          id="skype"
          name="skype"
          type="skype"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.skype}
        ></input>
        <br></br>
        <label htmlFor="email">Email</label>
        <input
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
        <br></br>
        <button type="submit">Save changes</button>
      </form>
    </div>
  );
};
export default UserForm;
