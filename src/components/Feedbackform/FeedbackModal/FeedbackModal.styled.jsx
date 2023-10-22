import styled from '@emotion/styled/macro';

export const FeedbackContainer = styled.div`
  box-sizing: border-box;
  padding: 0 18px 18px 18px;
  margin-top: -20px;
  /* position: relative; */
  min-height: 246px;
`;
export const RatingWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RatingTitle = styled.div`
  color: #343434cc;
  font-family: Inter;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.16;
`;
export const FormFeedback = styled.form`
  .toolbar {
    display: flex;
    justify-content: space-between;
    margin-top: 18px;
    padding-bottom: 8px;
    align-items: center;
  }

  .head {
    align-items: center;
    color: #343434cc;
    font-family: Inter;
    font-size: 12px;
    font-weight: 500;
    line-height: 1.16;
  }

  .text_content {
    box-sizing: border-box;
    width: 100%;
    height: 130px;
    padding: 14px 18px;
    // box-sizing: border-box;
    resize: none;
    background: #efefef;
    color: #343434;
    font-family: Inter;
    font-size: 14px;
    font-weight: 600;
    line-height: 1.28;

    ::placeholder {
      color: #343434;
      opacity: 1;
    }
    :active,
    :hover,
    :focus {
      outline: 0;
      outline-offset: 0;
    }

    @media screen and (min-width: 768px) {
      height: 127px;
    }
  }

  .buttonwrapper {
    display: flex;
    gap: 10px;
    margin-top: 18px;

    .btn-foot {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #e5edfa;
      border-radius: 8px;
      padding: 10px;
      color: #343434;
      font-size: 14px;
      font-weight: 600;
      line-height: 1.17;
      border: 0;

      &:hover {
        background: #2b78ef;
        color: #fff;
        box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);
        transition: background-color color box-shadow 0.2s;
      }
    }
  }
`;
export const StyledFeedbackToolbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & button {
    line-height: 0;
    padding: 10;
    border: none;
    border-radius: 50%;
    width: 30px;
    height: 30px;
  }

  & button:not(:last-child) {
    margin-right: 8px;
  }

  .btnEdit {
    color: #3e85f3;
    background-color: #e3f3ff;
  }

  .btnEdit:hover {
    background-color: #3e85f3;
    color: #ffffff;
  }

  .btnDel {
    background-color: #ea3d6533;
    color: #ea3d65;
  }

  .btnDel:hover {
    background-color: #ea3d65;
    color: #ffffff;
  }

  & svg {
    width: 14px;
    height: 14px;
    stroke: currentColor;
    fill: none;

    @media screen and (min-width: 768px) {
      width: 16px;
      height: 16px;
    }
  }
`;
