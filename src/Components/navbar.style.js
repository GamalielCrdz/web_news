import styled from "styled-components";

const navbar = styled.div`
  background-color: #001f4e;
  padding: 0 10%;
  color: white;
  min-height: 50px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-content: center;
  
  @media only screen and (max-width: 768px) {
    padding: 0 5px;
  }

  .title {
    width: 70px;
    margin: 5px 0px;
  }
`;

export default navbar;