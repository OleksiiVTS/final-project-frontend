import React from 'react';
import MainLayout from '../../../components/MainLayout/MainLayout.jsx';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { selectUser } from 'redux/auth/authSelectors.js';
import { useSelector } from 'react-redux';

// import { Link } from 'react-router-dom';
// import { Circles } from 'react-loader-spinner'; //! Спинер

const AccountPage = () => {
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
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      phone: Yup.string(),
      birthday: Yup.string(),
      skype: Yup.string(),
      email: Yup.string().email('Invalid email address').required('Required'),
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <MainLayout>
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
    </MainLayout>
    // {isLoading && !error && (
    //     <Circles
    //       height="80"
    //       width="80"
    //       color="#4d78a9"
    //!       wrapperClass={css.loader}
    //     />
    //   )}
  );
};

export default AccountPage;

// .loader {
//     position: fixed;
//     top: 0;
//     width: 100%;
//     height: 100%;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//   }
