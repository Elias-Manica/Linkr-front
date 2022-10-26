import styled from "styled-components";

const CssButton = {
  ButtonFollow: styled.button`
    height: 31px;
    width: 112px;
    border-radius: 5px;
    background-color: #1877f2;
    cursor: pointer;
    border: none;
    color: #ffffff;
    @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');
    font-family: 'Lato', sans-serif;
    font-size: 14px;
    font-weight: 700;

    .hidden{
      display: none;
    }

  `,
  HeaderScreen: styled.div`
  display:flex;
  justify-content: space-between;
  align-items: center;
  `
 
};

export default CssButton;