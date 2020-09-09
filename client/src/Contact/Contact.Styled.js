import styled from 'styled-components';

export const StyledContact = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  background-color: #2e3031;

  #contact-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  #contact-header-left {
    display: flex;
    flex-direction: row;
    font-size: .8rem;
    color: white;
  }

  #contact-header-right {
    display: flex;
    flex-direction: row;
    align-items: center;
    
      svg {
        color: white;
      }
  }
`;

export const StyledSearchBar = styled.div`
  /* width: 90%;
  margin: 0 auto;
  background-color: #4b4c4d;
  border: 1px solid #656667;
  border-radius: 5px;
  padding: .2rem 0; */
  width: 90%;
  margin: 0 auto;
  background-color: #4b4c4d;
  border-radius: 5px;
  border: 1px solid #656667;
  position: relative;

  input {
    background-color: #4b4c4d;
    border: none;
    width: 90%;
    padding: .4rem 0;
    padding-left: 5px;
    font-size: .9rem;

    :focus {
      outline: none;
    }

    :hover {
      
    }
  }

  svg {
    position: absolute;
    left: 2px;
    color: #656667;
  }
`;

export const StyledPerson = styled.div`

  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  margin: 1rem auto 0 auto;
  width: 100%;

  :hover {
    background-color: #65666777;
  }

  #contact-person-name {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 90%;
    h2 {
      margin-block-start: 0;
      margin-block-end: 0;
      color: white;
    }
    p {
      margin-block-start: 0;
      margin-block-end: 0;
      color: #656667;
    }
  }


`;