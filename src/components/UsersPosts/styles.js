import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

export const FeedHeader = styled.header`
  border: 1px solid #b6bbcb;
  display: flex;
  flex-direction: row;
  justify-content: left;

  img {
    border-radius: 50%;
    width: 25px;
  }

  h4 {
    padding-top: 0.75rem;
  }
`;

export const FeedHeaderUser = styled.figure`
  display: flex;
  flex-direction: row;
  justify-content: left;
  padding: 0.65rem;

  img {
    border-radius: 50%;
    height: 25px;
  }
`;

export const FeedItself = styled.figure`
  display: flex;
  flex-direction: column;

  img {
    width: 30rem;
  }

  @media screen and (min-width: 768px) {
    img {
      width: 45rem;
    }
  } ;
`;
