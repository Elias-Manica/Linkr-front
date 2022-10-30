import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  height: 100vh;

  @media screen and (max-width: 765px) {
    height: 100vh;
    flex-direction: column;
  }
`;

export const LeftContainer = styled.div`
  background-color: #000000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 65%;

  h1 {
    color: #ffffff;
    font-family: "Passion One";
    font-size: 106px;
    font-weight: 700;
    letter-spacing: 0.05em;
  }

  h2 {
    color: #ffffff;
    font-family: "Oswald";
    font-size: 43px;
    font-weight: 700;

    line-height: 64px;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    font-size: 32px;
    align-items: center;
    text-align: center;
    padding: 0;

    h1 {
      font-size: 4rem;
    }
    h2 {
      font-size: 2rem;
    }
  }
  @media screen and (min-width: 768px) {
    align-items: center;
    font-size: 23px;
    width: 65%;
    text-align: start;
    div {
      width: 100%;
      padding: 120px;
    }
    h1 {
      font-size: 76px;
      line-height: 60px;
    }
  }
  @media screen and (min-width: 1000px) {
    h2 {
      width: 460px;
    }
  }
  @media screen and (max-width: 340px ){
    h2{
      line-height: normal;
    }
  }
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 35%;

  p {
    color: #ffffff;
    font-family: "Lato";
    font-size: 20px;
    font-size: 400;
    text-align: center;
    text-decoration: underline;
  }
  @media screen and (max-width: 768px) {
    align-items: center;
    width: 100%;
    flex-grow: 0;
    font-size: 23px;
    div {
      width: 100%;
      padding: 1rem;
    }
  }
  @media screen and (min-width: 768px) {
    align-items: center;
    flex-grow: 0;
    width: 35%;
    font-size: 23px;
    div {
      width: 100%;
      padding: 1rem;
    }
  }
  
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  input {
    font-family: "Oswald";
    font-weight: 700;
    font-size: 27px;
    height: 65px;
    margin-bottom: 13px;
    padding: 0 0 5px 17px;
    border: none;
    border-radius: 6px;
  }

  input::placeholder {
    color: #9f9f9f;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    flex-grow: 1;
    height: auto;
    
  }
`;

export const Button = styled.button`
  background-color: #1877f2;
  color: #ffffff;
  font-family: "Oswald";
  font-weight: 700;
  font-size: 27px;
  height: 65px;
  margin-bottom: 15px;
  padding-bottom: 5px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  opacity: ${(props) => (props.disabled ? 0.7 : 1)};
`;
