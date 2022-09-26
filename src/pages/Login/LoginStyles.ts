import styled from 'styled-components'

export const LoginContainer = styled.div`
  padding: 10px;
  width: 350px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    width: 300px;
  }

  input {
    border: none;
    width: 300px;
    height: 30px;
    border-radius: 15px;
    align-content: center;
    padding: 10px;
    font-size: 17px;
  }

  button {
    width: 200px;
  }
`
