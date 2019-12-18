import styled from 'styled-components';

const StyledHome = styled.div`
  margin: 10px 10%;

  @media only screen and (max-width: 768px) {
    margin: 0 5px;
  }

  .no-results {
    display: flex;
    justify-content: center;
  }

  .news-item {
    margin: 10px 0px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-content: center;
    position: relative;

    .close-icon {
      position: absolute;
      right: 0;
      top: 0;
      z-index: 1;
    }

    img {
      width: 30%;
      margin: 1px;
    }
    .card {
      width: 70%;
      &:hover {
        text-decoration: underline black;
        cursor: pointer;
      }
    }

    @media only screen and (max-width: 768px) {
      flex-flow: column nowrap;

      img {
        width: 100%;
        margin-bottom: 0px;
      }
      
      .card {
        width: 100%;
      }
    }
  }
`;

export { StyledHome };
