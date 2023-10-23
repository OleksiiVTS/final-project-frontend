import styled from 'styled-components';

export const SideBarBox = styled.aside`
  background-color: ${({ bg }) => bg || '#fff'};
  border-right: 1px solid rgba(220, 227, 229, 0.5);

  min-width: 290px;
  padding: 32px 24px 24px 24px;
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: rgba(52, 52, 52, 0.5);

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
