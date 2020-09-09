import styled from 'styled-components';

export const StyledMessage = styled.div`
  background-color: #1d1e1f;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 70%;
  height: 100vh;
`;

export const StyledMessageHeader = styled.div`
  width: 100%;
  height: 6.5%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;

  #message-header-left {
    display: flex;
    flex-direction: row;
    height: 100%;
    width: 50%;
  }

  #message-header-right {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    height: 100%;
    width: 50%;

    svg {
      color: #0199ff;
    }
  }

  #message-information {
    display:flex;
    flex-direction: column;
    justify-content: center;
  }

  h2 {
    color: white;
    margin-block-start: 0;
    margin-block-end: 0;
  }

  p {
    color: #656667;
    margin-block-start: 0;
    margin-block-end: 0;
  }

`;


export const StyledMessageFooter = styled.div`
  width: 100%;
  height: 6.5%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: .2rem;

  svg {
    color: #0199ff;
    font-size: 32px;
  }

  button:nth-child(1) {
    svg {
      background-color: #0199ff;
      border-radius: 50%;
      color: #1d1e1f;
    }
  }

  #message-footer-input {
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: nowrap;
    position: relative;
    border-radius: 30px;
    background-color: #2e3031;
    
    textarea {
      width: 90%;
      border: none;
      color: #656667;
      font-size: 1.2rem;
      overflow: auto;
      background-color: #2e3031;
      padding: .8rem 0;
      font-family: "ubuntu";
      resize: none;
      padding-right: 1rem;
      ::-webkit-scrollbar {
        display: none;
      }

      :focus {
        outline: none;
      }

      ::placeholder {
        color: #656667;
        font-size: 1.2rem;
      }
    }

    svg {
      position: absolute;
      background-color: #2e3031;
      color: #0199ff;
    }
  }
`;

export const StyledMessageSection = styled.div`
  height: 87%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const StyledPersonalMessage = styled.div`
  max-width: 45%;
  max-height: 100%;
  background-color: #0199ff;
  margin-left: auto;
  margin-right: 1rem;
  margin: 1rem 1rem 1rem auto;
  padding: .2rem 1rem;
  border-radius: 15px;

  p {
    max-width: 100%;
    -webkit-hyphens: auto;
    -moz-hyphens: auto;
    -ms-hyphens: auto;
    hyphens: auto;
    color: white;
  }
`;