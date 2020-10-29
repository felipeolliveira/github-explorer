import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1000px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    color: var(--grey);

    transition: color 200ms;

    &:hover {
      color: var(--dark-grey);
    }

    svg {
      margin-right: 5px;
    }
  }
`;

export const RepositoryInfo = styled.section`
  margin-top: 80px;

  header {
    display: flex;
    align-items: center;

    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }

    div {
      margin-left: 24px;

      strong {
        font-size: 36px;
        color: var(--dark-grey);
      }

      p {
        font-size: 18px;
        color: var(--grey);
        margin-top: 4px;
      }
    }
  }

  ul {
    display: flex;
    margin-top: 40px;
    list-style: none;

    li {
      strong {
        display: block;
        font-size: 36px;
        color: var(--dark-grey);
      }

      span {
        display: block;
        font-size: 16px;
        color: var(--grey);
        margin-top: 4px;
      }
    }

    li + li {
      margin-left: 20px;
    }
  }
`;

export const Issues = styled.div`
  margin-top: 80px;

  a {
    width: 100%;
    background-color: var(--white-clean);
    border-radius: 10px;
    padding: 24px;

    display: flex;
    align-items: center;

    transition: transform 200ms;

    &:hover {
      transform: translateX(10px);
    }

    & + a {
      margin-top: 16px;
    }

    .info {
      margin: 0 16px;
      flex: 1;

      strong {
        font-size: 20px;
        color: var(--dark-grey);
      }

      p {
        font-size: 18px;
        color: var(--grey);
        margin-top: 4px;
      }
    }

    svg {
      margin-left: auto;
    }
  }
`;
