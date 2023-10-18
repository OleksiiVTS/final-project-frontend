import React from 'react';
import styled from 'styled-components';
import icon from '../Pictures/burger-menu-button.svg';
import moon from '../Pictures/moon.png'
import avatar from '../Pictures/avatar.jpg'

const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
    width: 100%;
    height: 100%;
`;

const BurgerIcon = styled.button`
    background-image: url(${icon});
    width: 25px;
    height: 25px;
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
    background-color: #3E85F3;
    color: white;
    line-height: 16px;
    padding: 8px 20px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
`;

const MoonIcon = styled.button`
    background-image: url(${moon});
    background-size: contain;
    background-repeat: no-repeat;
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
    border: 3px solid #3E85F3;
    background-image: url(${avatar});
    background-size: cover;
    width: 32px;
    height: 32px;
    border-radius: 50%;
`;

const Header = () => {
    return (
        // <PageContainer>
            <Wrapper>
                <BurgerIcon></BurgerIcon>
                <SectionWrapper>
                <FeedbackBtn>Feedback</FeedbackBtn>
                <UserWrapper>
                <MoonIcon></MoonIcon>
                <Username>Nadiia</Username>
                <Userphoto></Userphoto>
                </UserWrapper>
                </SectionWrapper>
            </Wrapper>
        // </PageContainer>
    );
};

export default Header;