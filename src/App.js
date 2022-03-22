import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import Nav from './components/Nav/Nav.jsx';
import Profile from './components/Profile/Profile.jsx';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import NewsContainer from './components/News/NewsContainer';
import MusicContainer from './components/Music/MusicContainer';
import SettingContainer from './components/Setting/SettingContainer';
import Users from './components/Users/Users';

const App = () => {
   return (
      <BrowserRouter>
         <div className='app-wrapper'>
            <Header />
            <Nav />
            <div className="app-wrapper-content">
               <Routes>
                  <Route path="/profile/*" element={<Profile />} />
                  <Route path="/dialogs/*" element={<DialogsContainer />} />
                  <Route path="/news/*" element={<NewsContainer />} />
                  <Route path="/music/*" element={<MusicContainer />} />
                  <Route path="/setting/*" element={<SettingContainer />} />
                  <Route path="/users/*" element={<Users/>}/>
               </Routes>
            </div>
         </div>
      </BrowserRouter>
   )
}

export default App
