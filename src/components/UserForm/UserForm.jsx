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
  Label,
  Img,
  Input,
  Button,
  Wrapper,
  // ContainerImg,
  // Wrapper,
  // Input,
  // DatePick,
  // Btn,
  // BlockInput,
  // Forms,
  // InputFile,
  // ImgBtn,
  // ImgAvatar,
  // LabelBtn,
  // LabelImg,
  // User,
  // SvgAvatar,
  // VectorPng,
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
      <h1> User Profile</h1>
      <Wrapper>
        <form onSubmit={formik.handleSubmit}>
          <Label htmlFor="avatar">
            <Img src="" alt="User avatar" />
            <Input type="file" name="avatar" accept="image/*" />
            <br></br>
            {isUser.username ?? 'User Name'}
            <br></br>
            User
          </Label>
          <br></br>
          <Label htmlFor="usrName">User Name</Label>
          <Input
            id="usrName"
            name="userName"
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
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            name="phone"
            type="phone"
            placeholder="38 (097) 256 34 77"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone}
          ></Input>
          <br></br>
          <Label htmlFor="birthday">Birthday</Label>
          <Input
            id="birthday"
            name="birthday"
            type="birthday"
            placeholder="25/08/1995"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.birthday}
          ></Input>
          <br></br>
          <Label htmlFor="skype">Skype</Label>
          <Input
            id="skype"
            name="skype"
            type="skype"
            placeholder="Add a skype number"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.skype}
          ></Input>
          <br></br>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="nadiia@gmail.com"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
          ) : null}
          <br></br>
          <Button type="submit">Save changes</Button>
        </form>
      </Wrapper>
    </div>
  );
};
export default UserForm;
