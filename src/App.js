import './App.css';
import Header from './components/Header/Header.jsx';
import Nav from './components/Nav/Nav.jsx';
import Profile from './components/Profile/Profile.jsx';
import Dialogs from './components/Dialogs/Dialogs';
import Music from './components/Music/Music.jsx';
import Setting from './components/Setting/Setting.jsx';
import News from './components/News/News.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';

const App = (props) => {
   return (
      <BrowserRouter>
         <div className='app-wrapper'>
            <Header />
            <Nav
               state={props.state.navPage}
               dispatch={props.dispatch}
            />
            <div className="app-wrapper-content">
               <Routes>
                  <Route
                     path="/profile/*"
                     element={<Profile
                        state={props.state.postPage}
                        dispatch={props.dispatch}
                        store={props.store}
                     />} />
                  <Route
                     path="/dialogs/*"
                     element={<DialogsContainer
                        store={props.store}
                     />} />
                  <Route
                     path="/news/*"
                     element={<News
                        state={props.state.links}
                        dispatch={props.dispatch}
                     />} />
                  <Route
                     path="/music/*"
                     element={<Music
                        state={props.state.gremis}
                        dispatch={props.dispatch}
                     />} />
                  <Route
                     path="/setting/*"
                     element={<Setting
                        state={props.state.settings}
                        dispatch={props.dispatch}
                     />} />
               </Routes>
            </div>
         </div>
      </BrowserRouter>
   )
}

export default App
