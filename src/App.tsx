import React, {useState} from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import PrivateRoutesHoc from "./privateHocs/PrivateRoutesHoc";
import Landing from "./Components/Landing";

function App() {
    const [isAuth , setIsAuth] = useState<boolean|null>(null)
  return (
    <div className="App">
        <Routes>
            <Route path={"/"} element={<PrivateRoutesHoc isAuth={isAuth} />}>
                <Route path="main" element={<p>main</p>} />
                <Route path="main/:id" element={<p>id</p>} />
            </Route>
            <Route path="*" element={<p>There's nothing here: 404!</p>} />
            <Route path="login" element={<p>login</p>} />
        </Routes>
    </div>
  );
}

export default App;
