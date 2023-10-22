import React from 'react';
import { Avatar } from './UserForm.styled';

const PreviewAvatar = ({ file }) => {
  const [preview, setPreview] = React.useState(null);
  const reader = new FileReader();
  reader.readAsDataURL(file);

  reader.onload = () => {
    setPreview(reader.result);
  };
  return (
    <>
      <Avatar src={preview} alt="User avatar" />
    </>
  );
};

export default PreviewAvatar;
