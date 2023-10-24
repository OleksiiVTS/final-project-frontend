import React from 'react';
import {
  Wrapper,
  BurgerIcon,
  SectionWrapper,
  UserWrapper,
  FeedbackBtn,
  ThemeToggler,
  Username,
  Userphoto,
  Goose,
  LeftSide,
  PageNameInfo,
} from './Header.styled';
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
import sprite from '../Pictures/sprite.svg';
import goose from '../Pictures/goose-header.png';
import FeedbackModal from '../Feedbackform/FeedbackModal/FeedbackModal';
import Modal from 'components/Modal/Modal';
import BurgerMenu from 'components/SideBar/BurgerMenu';
import { selectUser } from 'redux/auth/authSelectors';
import debounce from 'lodash/debounce';
import { selectTasks } from 'redux/task/taskSelectors';
import { useLocation } from 'react-router-dom';
import { filterDayTasks } from 'helpers/helpers';
import { Link } from 'react-router-dom';


const Header = ({ pageName = 'GooseTrack' }) => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(!showModal);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const theme = useSelector(selectTheme);
  const tasks = useSelector(selectTasks);
 
  const { pathname } = useLocation();
  const day = pathname.slice(-2);
  const dayTasks = filterDayTasks(tasks, day);

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

  const handleSidebarChange = () => {
    dispatch(changeSidebarModalOpen(!sidebarModalStatus));
  };

  useEffect(() => {
    const handleResize = debounce(() => {
      const newWindowWidth = window.innerWidth;
      setWindowWidth(newWindowWidth);
    }, 100);

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const showLogo = Array.isArray(dayTasks) && dayTasks?.length > 0 && pathname.includes('day');

  return (
    <Wrapper
      bg={
        theme !== 'dark'
          ? 'var(--color-bg-main-light)'
          : 'var(--color-bg-main-dark)'
      }
      color={theme === 'dark' ? '#fff' : '#000'}
    >
      {windowWidth < 1440 ? (
        <BurgerIcon onClick={handleSidebarChange}>
          <span>
            <svg
              stroke={theme === 'dark' ? '#fff' : '#000'}
              width="24"
              height="24"
            >
              <use href={sprite + '#icon-burger-menu-button'} />
            </svg>
          </span>
        </BurgerIcon>
      ) : (
        <>
          {showLogo ? (
            <LeftSide>
              <Goose src={goose} alt="menu goose"></Goose>
              <PageNameInfo>
                <h2>{pageName}</h2>
                <Username>
                  <span style={{color: 'var(--color-button-blue)'}}>Let go</span> of the past and focus on the present!
                </Username>
              </PageNameInfo>
            </LeftSide>
          ) : (
            <h2>{pageName}</h2>
          )}
        </>
      )}
      <BurgerIcon>
        <span>
          <svg fill="#000" width="24" height="24">
            <use href={sprite + '#icon-burger-menu-button'} />
          </svg>
        </span>
      </BurgerIcon>

      <SectionWrapper>
        <>
          <FeedbackBtn onClick={() => toggleModal()}>Feedback</FeedbackBtn>
        </>
        {showModal && (
          <Modal closeModal={toggleModal}>
            <FeedbackModal isActive={showModal} closeModal={toggleModal} />
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
          {/* <Username>{username}</Username> */}
          <Username>
            {theme === 'light' ? (
              <Link style={{color: 'black' }} to="/account">{username}</Link>
            ) : (
            <Link style={{color: 'white' }} to="/account">{username}</Link>
            )}   
          </Username>
          <Link to="/account">
          <Userphoto
            style={{ backgroundImage: `url(${avatarURL})` }}
          >
          </Userphoto>
          </Link>
        </UserWrapper>
      </SectionWrapper>
      <BurgerMenu />
    </Wrapper>
  );
};

export default Header;
