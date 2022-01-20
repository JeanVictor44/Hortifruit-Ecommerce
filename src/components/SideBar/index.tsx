import { 
  Container, 
  Header, 
  Profile, 
  SignOutProfile,
  ProfileImage, 
  CountFruits 
} from './style'

export function Sidebar() {
  const name = 'Jean Victor'
  const fruits = 10
  return (
    <Container>
      <Header> 
        
        <Profile>
          <ProfileImage>
            {name.slice(0,2).toUpperCase()}
          </ProfileImage>

          <div>
            <span>Jean Victor</span>
            <SignOutProfile>
              <a href="/"> Sign out</a>
            </SignOutProfile>
          </div>

        </Profile>

        <CountFruits> {fruits} </CountFruits>
      </Header>


    </Container>
  )
}
