//import moment from 'moment';
import { format } from 'date-fns';
import { AiFillPlusCircle } from 'react-icons/ai';

import { Formik, useFormik } from 'formik';
import ValidSchema from 'helpers/ValidSchema.js';

import { selectUser } from '../../redux/auth/authSelectors.js';
import {
  Avatar,
  BoxForm,
  BtnUserForm,
  Error,
  FieldWrap,
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
import { useState } from 'react';

import ConfirmationModal from './ConfirmationModal/ConfirmationModal.jsx';
import { useSelector } from 'react-redux';

const UserForm = () => {
  const [showModal, setShowModal] = useState(false);
  const [formValues, setFormValues] = useState(false);

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
      setShowModal(true);
      var imagefile = document.getElementById('avatar');
      setFormValues({ ...values, avatarURL: imagefile });
    },
    validationSchema: ValidSchema,
  });

  const closeModal = () => setShowModal(false);
  //const nowDate = new Date();
  const dateMoment = format(new Date(), 'MM/dd/yyyy');

  return (
    <>
      <Formik>
        <FormaBox onSubmit={formik.handleSubmit}>
          <UserFormBox
            bg={
              theme === 'dark' ? 'var(--color-choice-dark-no-active)' : '#fff'
            }
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
              <FieldWrap>
                <LabelUserForm htmlFor="usrName">User Name</LabelUserForm>
                <InputUserForm
                  bg={
                    theme === 'dark'
                      ? 'var(--color-choice-dark-no-active)'
                      : '#fff'
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
                  style={
                    formik.touched.usrName &&
                    formik.errors.usrName && { border: '1px solid red' }
                  }
                />
                {formik.touched.usrName && formik.errors.usrName ? (
                  <Error>{formik.errors.usrName}</Error>
                ) : null}
              </FieldWrap>
              <FieldWrap>
                <LabelUserForm htmlFor="birthday">Birthday</LabelUserForm>
                <InputUserForm
                  bg={
                    theme === 'dark'
                      ? 'var(--color-choice-dark-no-active)'
                      : '#fff'
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
                  style={
                    formik.touched.birthday &&
                    formik.errors.birthday && { border: '1px solid red' }
                  }
                ></InputUserForm>
                {formik.touched.birthday && formik.errors.birthday ? (
                  <Error>{formik.errors.birthday}</Error>
                ) : null}
              </FieldWrap>
              <FieldWrap>
                <LabelUserForm htmlFor="email">Email</LabelUserForm>
                <InputUserForm
                  bg={
                    theme === 'dark'
                      ? 'var(--color-choice-dark-no-active)'
                      : '#fff'
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
                  style={
                    formik.touched.email &&
                    formik.errors.email && { border: '1px solid red' }
                  }
                />
                {formik.touched.email && formik.errors.email ? (
                  <Error>{formik.errors.email}</Error>
                ) : null}
              </FieldWrap>
              <FieldWrap>
                <LabelUserForm htmlFor="phone">Phone</LabelUserForm>
                <InputUserForm
                  bg={
                    theme === 'dark'
                      ? 'var(--color-choice-dark-no-active)'
                      : '#fff'
                  }
                  color={theme === 'dark' ? '#fff' : '#000'}
                  bordercolor={
                    theme === 'dark'
                      ? 'var(--color-field-names-dark)'
                      : 'rgba(17, 17, 17, 0.1)'
                  }
                  style={
                    formik.touched.phone &&
                    formik.errors.phone && { border: '1px solid red' }
                  }
                  id="phone"
                  name="phone"
                  type="phone"
                  placeholder="Add a phone number"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.phone}
                ></InputUserForm>
                {formik.touched.phone && formik.errors.phone ? (
                  <Error>{formik.errors.phone}</Error>
                ) : null}
              </FieldWrap>
              <FieldWrap>
                <LabelUserForm htmlFor="skype">Skype</LabelUserForm>
                <InputUserForm
                  bg={
                    theme === 'dark'
                      ? 'var(--color-choice-dark-no-active)'
                      : '#fff'
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
                  style={
                    formik.touched.skype &&
                    formik.errors.skype && { border: '1px solid red' }
                  }
                ></InputUserForm>
                {formik.touched.skype && formik.errors.skype ? (
                  <Error>{formik.errors.skype}</Error>
                ) : null}{' '}
              </FieldWrap>
            </BoxForm>
            <BtnUserForm type="submit">Save changes</BtnUserForm>
          </UserFormBox>
        </FormaBox>
      </Formik>
      {showModal && (
        <ConfirmationModal values={formValues} closeModal={closeModal} />
      )}
    </>
  );
};

export default UserForm;
