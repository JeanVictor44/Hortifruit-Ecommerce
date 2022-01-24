import GlobalStyles from './styles/global'
import { Routes } from './routes'
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalContext } from './context';


const App =  () => {  

  return (
    <GlobalContext>
      <Router>
        <GlobalStyles/>
          <Routes />
        
      </Router>
      
      
    </GlobalContext>
  )
}

export default App;
