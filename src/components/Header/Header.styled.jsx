import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${({ bg }) => bg || '#F7F6F9'};
  color: ${({ color }) => color || '#000'};
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

export const BurgerIcon = styled.div`
  width: 24px;
  height: 24px;
  cursor: pointer;
  display: block;
  border: none;

  @media (min-width: 1440px) {
    display: none;
  }
`;

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 18px;
`;

export const UserWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
`;

export const FeedbackBtn = styled.button`
  background-color: ${({ bg }) => bg || '#3e85f3'};
  color: #fff;
  line-height: 16px;
  padding: 8px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  :hover {
    background-color: var(--color-button-blue-hover);
  }
`;

export const ThemeToggler = styled.div`
  width: 24px;
  height: 24px;
  cursor: pointer;
  display: block;
  border: none;
`;
export const Username = styled.p`
  font-weight: bold;
  line-height: 18px;
`;

export const Userphoto = styled.div`
  border: 3px solid var(--color-button-blue);
  background-size: cover;
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;

export const LeftSide = styled.div`
  display: flex;
  gap: 8px;
`

export const PageNameInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Goose = styled.img`

  width: 64px;
  height: 60px;
`