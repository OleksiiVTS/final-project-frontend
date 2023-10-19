import React from 'react';
import styled from 'styled-components';
import avatar from '../Pictures/avatar.jpg';
import { useDispatch, useSelector } from 'react-redux';
import {
    // changeFeedbackModalOpen,
    changeSidebarModalOpen,
    changeTheme,
    // selectFeedbackModalOpen,
    selectSidebarModalOpen,
    selectTheme,
  } from 'redux/header/headerSlice';
import { useEffect, useState } from 'react';
// import { PageContainer } from 'components/LoginForm/LoginForm.styled';
import sprite from '../Pictures/sprite.svg';
import FeedbackModal from '../Feedbackform/FeedbackModal/FeedbackModal';
import Modal from 'components/Modal/Modal';
import { selectUser } from 'redux/auth/authSelectors';


const Wrapper = styled.div`
  background-color: ${({ bg }) => bg || '#F7F6F9'};
  color: ${({ color }) => color || '#000'};
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

const BurgerIcon = styled.div`
  width: 24px;
  height: 24px;
  cursor: pointer;
  display: block;
  border: none;
`;

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 18px;
`;

const UserWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
`;

const FeedbackBtn = styled.button`
  background-color: ${({ bg }) => bg || '#3e85f3'};
  color: ${({ color }) => color || '#fff'};
  line-height: 16px;
  padding: 8px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  :hover {
    background-color: var(--color-button-blue-hover);
  }
`;

const ThemeToggler = styled.div`
  width: 24px;
  height: 24px;
  cursor: pointer;
  display: block;
  border: none;
`;
const Username = styled.p`
  font-weight: bold;
  line-height: 18px;
`;

const Userphoto = styled.div`
  border: 3px solid var(--color-button-blue);
  /* background-image: url(${avatar}); */
  background-size: cover;
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;

const Header = () => {

  const [showModal, setShowModal] = useState(false);
    const toggleModal = () => setShowModal(!showModal);

  const theme = useSelector(selectTheme);
  const { username, avatarURL } = useSelector(selectUser);
  const sidebarModalStatus = useSelector(selectSidebarModalOpen);
  const dispatch = useDispatch();

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  const handleChange = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    dispatch(changeTheme(nextTheme));
  };

  let width = window.innerWidth;
  const handleSidebarChange = () => {
    const nextSidebarModalStatus = sidebarModalStatus === true ? false : true;
    dispatch(changeSidebarModalOpen(nextSidebarModalStatus));
  };

  return (
    // <PageContainer>
    <Wrapper
      bg={theme !== 'dark' ? '#F7F6F9' : '#000000'}
      color={theme === 'dark' ? '#fff' : '#000'}
    >
             {width < 1440 ? (
        <BurgerIcon onClick={handleSidebarChange}>
          <span>
            <svg stroke={theme === 'dark' ? '#fff' : '#000'}  width="24" height="24">
              <use href={sprite + '#icon-burger-menu-button'} />
            </svg>
          </span>
        </BurgerIcon>
      ) : (
        <h2>PageName</h2>
      )}
      {/* <BurgerIcon>

              <span>
							<svg fill='#000' width="24" height="24">
								<use href={sprite + '#icon-burger-menu-button'} />
							</svg>
            </span>

      </BurgerIcon> */}
      <SectionWrapper>
        <>
        <FeedbackBtn color={theme !== 'dark' ? '#fff' : '#000'} onClick={() =>
            toggleModal()
          }>
          Feedback
        </FeedbackBtn></>
        {showModal && (
            <Modal closeModal={toggleModal}>
            <FeedbackModal/>
            </Modal>
          )}
        <UserWrapper>
          <ThemeToggler onClick={handleChange}>
            <span>
              <svg fill="#3e85f3" width="24" height="24">
                {theme === 'light' ? (
                  <use href={sprite + '#icon-theme-toggler-dark'} />
                ) : (
                  <use href={sprite + '#icon-theme-toggler-light'} />
                )}
              </svg>
            </span>
          </ThemeToggler>
          <Username>{username}</Username>
          <Userphoto style={{ backgroundImage: `url(${avatarURL})` }}></Userphoto>
        </UserWrapper>
      </SectionWrapper>
    </Wrapper>
    // </PageContainer>
  );
};

export default Header;