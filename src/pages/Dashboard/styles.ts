import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
}

export const Title = styled.h1`
  font-size: 55px;
  color: var(--dark-grey);
  line-height: 56px;

  margin-top: 80px;
  max-width: 400px;
`;

export const Form = styled.form<FormProps>`
  margin-top: 40px;
  max-width: 700px;

  display: flex;

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border-radius: 10px 0 0 10px;
    border: 2px solid var(--white);
    border-right: 0;

    color: var(--dark-grey);

    ${(props) =>
      props.hasError &&
      css`
        border-color: red;
      `}

    &::placeholder {
      color: var(--grey);
    }
  }

  button {
    width: 210px;
    height: 70px;
    background-color: var(--green);
    border: 0;
    border-radius: 0px 10px 10px 0px;

    color: var(--white-clean);
    font-weight: bold;

    transition: background-color 200ms;

    &:hover {
      background-color: ${shade(0.2, '#04d361')};
    }
  }
`;

export const Repositories = styled.div`
  margin-top: 80px;
  max-width: 700px;

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

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
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

export const Error = styled.span`
  display: block;
  margin: 16px;
  color: red;
`;
