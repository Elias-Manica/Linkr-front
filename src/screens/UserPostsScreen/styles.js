import styled from "styled-components";

const Header = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  padding: 0px 10px;
  width: 100%;
  height: 72px;
  background-color: #151515;
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    border-radius: 50%;
    height: 53px;
    width: 53px;
  }

  .searchBar {
    width: 50%;
  }
`;

const SearchArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .search {
    width: 50%;
  }

  /* .hidden {
		display: none;
	} */
`;

const TitleImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  margin: 0px 10px;
`;

export { TitleImg, Header, SearchArea };
