import React from 'react';
import {createCount} from "../Support/suport";



const initialState = [
    {user: "admin" , password: "admin" ,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwQZ1dTw5Vfxa_ZAHR-ZtCSsAe3NL-r_YTCA&usqp=CAU" ,
        id : 1 , todos : [
            {task: "one" , id : createCount(), done :false}
        ]}
]

const UserContext = () => {
    return (
        <div>

        </div>
    );
};

export default UserContext;
