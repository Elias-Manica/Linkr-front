import styled from "styled-components";

const Css = {
  NewPost: styled.div`
    height: 209px;
    width: 611px;
    background-color: white;
    border-radius: 5px;
    display: flex;
    padding: 1rem;

    h1 {
      color: #707070;
      font-family: Lato;
      font-size: 20px;
      font-weight: 300;
      padding: 5px;
    }
  `,
  ProfilePost: styled.div`
    height: 50px;
    width: 50px;
    background-color: lightgray;
    border-radius: 50%;
    margin: 10px;
  `,
  ProfileLabel: styled.div`
    width: 15%;
  `,
  PostLabel: styled.div`
    width: 85%;
  `,
  Box1: styled.div`
    display: flex;
    align-items: center;
  `,
  InputUrl: styled.input`
    height: 30px;
    width: 100%;
    border-radius: 5px;
    border: none;
    margin-bottom: 5px;
    background-color: #efefef;
    ::placeholder {
      color: #949494;
      font-family: Lato;
      font-size: 15px;
      font-weight: 300;
    }
  `,
  InputText: styled.input`
    height: 66px;
    width: 100%;
    border-radius: 5px;
    margin-bottom: 5px;
    border: none;
    background-color: #efefef;
    ::placeholder {
      color: #949494;
      font-family: Lato;
      font-size: 15px;
      font-weight: 300;
    }
  `,
  ButtonPublish: styled.button`
    height: 31px;
    width: 112px;
    border-radius: 5px;
    background-color: #1877f2;
    border: none;
    cursor: pointer;
    p {
      color: #ffffff;
      font-family: Lato;
      font-size: 14px;
      font-weight: 700;
    }
  `,
  BoxButton: styled.div`
    display: flex;
    width: 100%;
    justify-content: end;
  `,
};

export default Css;