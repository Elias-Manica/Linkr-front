import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    height: 100vh;
`;

export const LeftContainer = styled.div`
    background-color: #000000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 65%;
    padding: 0 0 100px 144px;

    h1 {
        color: #FFFFFF;
        font-family: 'Passion One';
        font-size: 106px;
        font-weight: 700;
        letter-spacing: 0.05em;
    }

    h2 {
        color: #FFFFFF;
        font-family: 'Oswald';
        font-size: 43px;
        font-weight: 700;
        width: 442px;
        line-height: 64px;
    }
`;

export const RightContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 35%;
    padding: 0 55px 100px 55px;

    p {
        color: #FFFFFF;
        font-family: 'Lato';
        font-size: 20px;
        font-size: 400;
        text-align: center;
        text-decoration: underline;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;

    input {
        font-family: 'Oswald';
        font-weight: 700;
        font-size: 27px;
        height: 65px;
        margin-bottom: 13px;
        padding: 0 0 5px 17px;
        border: none;
        border-radius: 6px;
    }

    input::placeholder {
        color: #9F9F9F;
    }
`;

export const Button = styled.button`
    background-color: #1877F2;
    color: #FFFFFF;
    font-family: 'Oswald';
    font-weight: 700;
    font-size: 27px;
    height: 65px;
    margin-bottom: 15px;
    padding-bottom: 5px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    opacity: ${props => props.disabled ? 0.7 : 1};
`;