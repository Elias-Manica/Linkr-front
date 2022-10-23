import styled from "styled-components";

const Css = {
  Header: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    height: 60px;
    background: #151515;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    z-index: 1;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    overflow: visible;

    h1 {
      @import url("https://fonts.googleapis.com/css2?family=Passion+One:wght@400;700;900&display=swap");
      font-family: "Passion One", cursive;
      font-style: normal;
      font-weight: 700;
      font-size: 49px;
      color: #ffffff;
      cursor: pointer;
    }
  `,
  Profile: styled.div`
    height: 53px;
    width: 53px;
    background-color: lightgray;
    border-radius: 50%;
    margin: 10px;
  `,
  Screen: styled.div`
    box-sizing: border-box;
    height: 1024px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    @import url("https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap");
    h1 {
      color: #ffffff;
      font-size: 43px;
      font-weight: 700;
      font-family: "Oswald", sans-serif;
      margin-top: 10px;
    }
  `,
 
  Box2: styled.div`
    display: flex;
    align-items: center;
  `,
  Box3: styled.div`
    display: flex;
    align-items: center;
  `,
  Trending: styled.div`
    height: 406px;
    width: 280px;
    margin: 0 0 0 2rem;
    border-radius: 16px;
    background-color: #171717;
    font-family: Oswald;
    h1 {
      font-size: 27px;
      font-weight: 700;
      line-height: 40px;
      color: #ffffff;
    }
    p {
      font-family: Lato;
      font-size: 19px;
      font-weight: 700;
      line-height: 23px;
      color: #ffffff;
    }
  `,
  Box: styled.div`
    display: flex;
    flex-direction: column;
    margin: 60px 0 0 0;
  `,
  Title: styled.div`
      @import url("https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap");
    font-family: "Oswald", sans-serif;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100px;
    font-size: 2rem;
    color: white;
  `,
  Main: styled.div`
    display: flex;
  `,
  Feed: styled.div`
    display: flex;
    flex-direction: column;
  `,
};

export default Css;
