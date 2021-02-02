import './App.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom'

//COMPONENTE LOGIN
import Login  from './components/Auth/Login'


//COMPONENTES FIJOS
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Administradores  from './components/content/Administradores'
import Footer from './components/Footer'


//COMPONENTES DINAMICOS
import Slide  from './components/content/slide/Slide';
import Galeria  from './components/content/galeria/Galeria'
import Articulos  from './components/content/articulos/Articulos'
import Usuarios  from './components/content/usuarios/Usuarios'
import Error404  from './components/content/error404/Error404'

function App() {

  const auth = false;

if(!auth){
    return(
      <Login/>
    )
}

  return (

   
    
    <div className="sidebar-mini">
      <div className="wrapper">
      <Header/>
      <Sidebar/>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Administradores}/>
          <Route exact path="/slide" component={Slide}/>
          <Route exact path="/galeria" component={Galeria}/>
          <Route exact path="/articulos" component={Articulos}/>
          <Route exact path="/usuarios" component={Usuarios}/>
          <Route component={Error404}/>
        </Switch>
      </BrowserRouter>
      
      <Footer/>

      </div>
    </div>
  );
}

export default App;
