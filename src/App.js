import './App.css';
import Header from './components/Header/Header.jsx';
import Nav from './components/Nav/Nav.jsx';
import Profile from './components/Profile/Profile.jsx';
import Dialogs from './components/Dialogs/Dialogs';
import Music from './components/Music/Music.jsx';
import Setting from './components/Setting/Setting.jsx';
import News from './components/News/News.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = (props) => {
   return (
      <BrowserRouter>
         <div className='app-wrapper'>
            <Header />
            <Nav state={props.state.navPage} />
            <div className="app-wrapper-content">
               <Routes>
                  <Route
                     path="/profile/*"
                     element={<Profile
                        state={props.state.postPage}
                        dispath={props.dispath}
                     />} />
                  <Route
                     path="/dialogs/*"
                     element={<Dialogs
                        state={props.state.messagePage}
                        dispath={props.dispath}
                     />} />
                  <Route path="/news/*" element={<News items={props.state.links} />} />
                  <Route path="/music/*" element={<Music x={props.state.gremis} />} />
                  <Route path="/setting/*" element={<Setting settings={props.state.settings} />} />
               </Routes>
            </div>
         </div>
      </BrowserRouter>
   )
}

export default App
