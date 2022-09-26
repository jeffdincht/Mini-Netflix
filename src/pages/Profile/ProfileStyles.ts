import styled from 'styled-components'

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;

  .profile-info {
    display: flex;
    flex-direction: column;
  }

  img {
    margin: 10px;
  }

  .buttons {
    display: flex;
    width: 100%;
    margin: 20px;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    .logout {
      background: #cb0000;
    }
  }
`
