import GlobalStyles from './styles/global'
import { Header } from './components/Header'
import { Sidebar } from './components/SideBar'
import { Main} from './components/Main'

const App =  () => {  

  return (
    <>
      <GlobalStyles/>
      <Header />
      <Sidebar />
      <Main />
    </>
  )
}

export default App;
