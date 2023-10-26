import { format } from 'date-fns';
// import DatePicker from 'react-datepicker';
import { Formik, useFormik } from 'formik';
import ValidSchema from 'helpers/ValidSchema.js';
import 'react-datepicker/dist/react-datepicker.css';
import { selectUser } from '../../redux/auth/authSelectors.js';
import {
  Avatar,
  BoxForm,
  BtnUserForm,
  Chevron,
  Error,
  FieldWrap,
  FormaBox,
  Icon,
  IconDiv,
  InputUserForm,
  LabelAvatar,
  LabelUserForm,
  User,
  UserFormBox,
  UserName,
  WhiteBox,
  FieldWrapDate,
  SVGWrap,
  StyledDeleteButton,
  StyledDeleteIcon,
} from './UserForm.styled.jsx';
import { useRef } from 'react';
import PreviewAvatar from './PreviewAvatar.js';
import { selectTheme } from 'redux/header/headerSlice.js';
import { useState } from 'react';

import ConfirmationModal from './ConfirmationModal/ConfirmationModal.jsx';
import { useSelector } from 'react-redux';
import sprite from '../Pictures/sprite.svg';
import DeletionModal from './DeletionModal/DeletionModal.jsx';

const UserForm = () => {
  const [showModal, setShowModal] = useState(false);
  const [formValues, setFormValues] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

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
      file: isUser.file,
    },
    onSubmit: values => {
      setShowModal(true);
      var imagefile = document.getElementById('avatar');
      const formatedDate = format(values.birthday, 'yyyy-MM-dd');
      setFormValues({
        ...values,
        avatarURL: imagefile,
        birthday: formatedDate,
      });
    },
    validationSchema: ValidSchema,
  });

  const closeModal = () => setShowModal(false);
  // const Input = ({ onChange, placeholder, value, isSecure, id, onClick }) => (
  //   <InputUserForm
  //     bg={theme === 'dark' ? 'var(--color-choice-dark-no-active)' : '#fff'}
  //     color={theme === 'dark' ? '#fff' : '#000'}
  //     bordercolor={
  //       theme === 'dark'
  //         ? 'var(--color-field-names-dark)'
  //         : 'rgba(17, 17, 17, 0.1)'
  //     }
  //     onChange={onChange}
  //     placeholder={placeholder}
  //     value={value}
  //     isSecure={isSecure}
  //     id={id}
  //     onClick={onClick}
  //   />
  // );

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
              <LabelAvatar htmlFor="avatar">
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
                  <Icon />
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
              </LabelAvatar>
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
              <FieldWrapDate>
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
                  placeholder={'YYYY/MM/DD'}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.birthday}
                />
                {/* <DatePicker
                  id="birthday"
                  selected={formik.values.birthday}
                  name="birthday"
                  customInput={<Input inputRef={fileRef} />}
                  onChange={date => formik.setFieldValue('birthday', date)}
                  style={{ width: '100%' }}
                /> */}
                <SVGWrap>
                  <Chevron
                    width="18"
                    height="18"
                    stroke={theme === 'dark' ? '#fff' : '#000'}
                  >
                    <use href={sprite + '#icon-chevron-down'}></use>
                  </Chevron>
                </SVGWrap>
              </FieldWrapDate>
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
                ) : null}
              </FieldWrap>
            </BoxForm>
            <BtnUserForm type="submit">Save changes</BtnUserForm>
            <StyledDeleteButton
              type="button"
              onClick={() => {
                setShowModal(!showModal);
                setIsDeleting(true);
              }}
            >
              <StyledDeleteIcon>
                <use href={sprite + '#icon-trash'}></use>
              </StyledDeleteIcon>
            </StyledDeleteButton>
          </UserFormBox>
        </FormaBox>
      </Formik>
      {showModal && !isDeleting && (
        <ConfirmationModal values={formValues} closeModal={closeModal} />
      )}
      {showModal && isDeleting && (
        <DeletionModal
          closeModal={() => {
            closeModal();
            setIsDeleting(false);
          }}
        />
      )}
    </>
  );
};

export default UserForm;
