import React, {useState} from 'react';
import './App.css';
import 'antd/dist/antd.css';
import {Route, Routes} from "react-router-dom";
import PrivateRoutesHoc from "./Components/privateHocs/PrivateRoutesHoc";
import Landing from "./Components/Landing";
import LoginPage from "./Components/Login-page/LoginPage";
import UserContext, {initialState} from "./Components/UserContext/UserContext";

function App() {
    const [isAuth , setIsAuth] = useState<boolean>(false)
  return (
    <div className="App">
        <UserContext.Provider value={initialState}>
        <Routes>
            <Route element={<Landing/>}>
                <Route path={"/"} element={<PrivateRoutesHoc isAuth={isAuth} />}>
                    <Route path="main" element={<p>main</p>} />
                    <Route path="main/:id" element={<p>id</p>} />
                </Route>
                <Route path="*" element={<p>There's nothing here: 404!</p>} />
                <Route path="login" element={<LoginPage setIsAuth={setIsAuth}/>} />
            </Route>
        </Routes>
        </UserContext.Provider>
    </div>
  );
}

export default App;
