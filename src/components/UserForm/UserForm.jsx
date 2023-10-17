import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Formik, ErrorMessage } from 'formik';
import { object, string, date } from 'yup';

import { selectUser } from 'redux/auth/auth-selectors';
import { fetchingCurrentUser, updateUser } from 'redux/auth/auth-operations';

import Icon from '../Pictures/sprite.svg';

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

const validationFormikSchema = object({
  name: string().max(16).required(),
  birthday: date(),
  email: string().email().required(),
  skype: string().max(16),
});

const UserForm = () => {
  const [avatarURL, setAvatarURL] = useState(null);
  const [newBirthday, setNewBirthday] = useState(null);
  const [isUpdateForm, setIsUpdateForm] = useState(null);

  const { user } = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isUpdateForm) {
      dispatch(fetchingCurrentUser());
      setIsUpdateForm(null);
    }
  }, [dispatch, isUpdateForm]);

  return (
    <Wrapper>
      <Formik
        enableReinitialize={true}
        initialValues={{
          name: user ? user.name : '',
          email: user ? user.email : '',
          phone: user ? user.phone : '',
          skype: user ? user.skype : '',
          birthday: newBirthday
            ? newBirthday
            : user
            ? new Date(user.birthday)
            : new Date(),
        }}
        onSubmit={async (values, { resetForm }) => {
          console.log('values', values);
          const formData = new FormData();
          formData.append('name', values.name);
          formData.append('email', values.email);
          if (values.phone) {
            formData.append('phone', values.phone);
          }
          if (values.skype) {
            formData.append('skype', values.skype);
          }
          formData.append('birthday', values.birthday);
          if (avatarURL) {
            formData.append('avatar', avatarURL);
          }

          await dispatch(updateUser(formData));
          setIsUpdateForm(true);
          resetForm();
        }}
        validationSchema={validationFormikSchema}
      >
        {({ values, handleSubmit, handleChange, handleBlur }) => (
          <Forms autoComplete="off" onSubmit={handleSubmit}>
            <ContainerImg>
              {avatarURL ? (
                <ImgAvatar src={URL.createObjectURL(avatarURL)} alt="avatar" />
              ) : user?.avatarURL ? (
                <ImgAvatar src={user.avatarURL} alt="avatar" />
              ) : (
                <SvgAvatar>
                  <use href={Icon + '#icon-ph-user'}></use>
                </SvgAvatar>
              )}

              <LabelImg htmlFor="avatar">
                <ImgBtn>
                  <use href={Icon + 'icon-plus'}></use>
                </ImgBtn>

                <InputFile
                  id="avatar"
                  type="file"
                  onChange={event => setAvatarURL(event.target.files[0])}
                  accept="image/*,.png,.jpg,.gif,.web"
                  name="avatar"
                ></InputFile>
              </LabelImg>
            </ContainerImg>
            <h2>{user?.name} </h2>
            <User>User</User>
            <BlockInput>
              <LabelBtn htmlFor="name">
                <p>User Name</p>
                <Input
                  type="text"
                  name="name"
                  id="name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Nadiia Doe"
                ></Input>
                <ErrorMessage name="name" />
              </LabelBtn>

              <LabelBtn htmlFor="phone">
                <p>Phone</p>
                <Input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={values.phone ? values.phone : ''}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="38 (097) 256 34 77"
                ></Input>
                <ErrorMessage name="phone" />
              </LabelBtn>

              <LabelBtn htmlFor="birthday">
                <p>Birthday</p>
                <DatePick
                  type="date"
                  name="birthday"
                  id="birthday"
                  input={true}
                  maxDate={new Date()}
                  selected={values.birthday}
                  onChange={data => {
                    setNewBirthday(data);
                  }}
                  placeholder="25/08/1995"
                  dateFormat="dd/MM/yyyy"
                />

                <VectorPng>
                  <use href={Icon + 'icon-plus'}></use>
                </VectorPng>

                <ErrorMessage name="birthday" />
              </LabelBtn>

              <LabelBtn htmlFor="skype">
                <p>Skype</p>
                <Input
                  type="text"
                  name="skype"
                  id="skype"
                  placeholder="Add a skype number"
                  value={values.skype ? values.skype : ''}
                  onChange={handleChange}
                  onBlur={handleBlur}
                ></Input>
                <ErrorMessage name="skype" />
              </LabelBtn>

              <LabelBtn htmlFor="email">
                <p>Email</p>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="nadiia@gmail.com"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                ></Input>
                <ErrorMessage name="email" />
              </LabelBtn>
            </BlockInput>
            <Btn type="submit">Save changes</Btn>
          </Forms>
        )}
      </Formik>
    </Wrapper>
  );
};
export default UserForm;
