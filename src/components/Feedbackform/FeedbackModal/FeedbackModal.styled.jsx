import styled from '@emotion/styled/macro';

export const FeedbackContainer = styled.div`
  box-sizing: border-box;
  margin-top: -10px;
  width: 335px;
  min-height: 246px;
  margin-right: auto;
  margin-left: auto;
  @media screen and (min-width: 768px) {
    width: 404px;
  }
`;
export const RatingWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RatingTitle = styled.div`
  color: ${({ color }) => color || '#343434cc'};
  font-family: Inter;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.16;
`;
export const FormFeedback = styled.form`
  .toolbar {
    display: flex;
    justify-content: space-between;
    max-width: 404px;
    margin-top: 18px;
    padding-bottom: 8px;
    align-items: center;
  }

  .head {
    align-items: center;
    color: ${({ reviewtextcolor }) => reviewtextcolor || '#343434cc'};
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
    resize: none;
    border: ${({ textfielborder }) => textfielborder || 'none'};
    border-radius: 8px;
    color: ${({ textfieldcolor }) => textfieldcolor || '#343434'};
    background-color: ${({ textfieldbg }) => textfieldbg || '#F6F6F6'};
    font-family: Inter;
    font-size: 14px;
    font-weight: 600;
    line-height: 1.28;

    ::placeholder {
      color: ${({ textfieldcolor }) => textfieldcolor || '#343434'};
      opacity: 1;
    }
    :active,
    :hover,
    :focus {
      outline: 0;
      outline-offset: 0;
    }

    @media screen and (min-width: 768px) {
      max-width: 404px;
      height: 127px;
    }
  }

  .buttonwrapper {
    display: flex;
    gap: 10px;
    margin-top: 18px;

    .btn-foot-first {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background: var(--color-button-blue);
      border-radius: 8px;
      padding: 10px;
      color: #ffffff;
      font-size: 14px;
      font-weight: 600;
      line-height: 1.17;
      border: 0;
      cursor: pointer;

      &:hover {
        background: #2b78ef;
        color: #fff;
        box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);
        transition: background-color color box-shadow 0.2s;
      }
    }

    .btn-foot-second {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background: ${({ bgbtn }) =>
        bgbtn || 'var(--color-choice-light-no-active)'};
      border-radius: 8px;
      padding: 10px;
      color: ${({ textfieldcolor }) => textfieldcolor || '#343434'};
      font-size: 14px;
      font-weight: 600;
      line-height: 1.17;
      border: 0;
      cursor: pointer;

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
    border: none;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    cursor: pointer;
  }

  & button:not(:last-child) {
    margin-right: 8px;
  }

  .btnEdit {
    color: #3e85f3;
    background-color: ${({ editbtnbg }) =>
      editbtnbg || 'var(--color-choice-light-no-active)'};
  }

  .btnEdit:hover,
  .btnEdit:active {
    background-color: #3e85f3;
    color: #ffffff;
  }
  .textInFover {
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
