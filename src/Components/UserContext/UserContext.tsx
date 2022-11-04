import React, {createContext, useContext} from 'react';
import {createCount} from "../Support/suport";

interface TodosInterface {
    task: string;
    id: number;
    done: boolean;

}

interface InitialStateInterface {
    user : string;
    password : string;
    image : string;
    userIsAuth : boolean;
    id: number;
    todos : TodosInterface[] | [];
}
export const initialState = [
    {user: "admin" , password: "admin" ,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwQZ1dTw5Vfxa_ZAHR-ZtCSsAe3NL-r_YTCA&usqp=CAU" ,
        userIsAuth : false,
        id : 1 , todos : [
            {task: "one" , id : createCount(), done :false},
            {task: "two" , id : createCount(), done :false},
            {task: "three" , id : createCount(), done :false},
            {task: "four" , id : createCount(), done :false},
        ]
    },
    {user: "1" , password: "1" ,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwQZ1dTw5Vfxa_ZAHR-ZtCSsAe3NL-r_YTCA&usqp=CAU" ,
        userIsAuth : false,
        id : 1 , todos : [
            {task: "one" , id : createCount(), done :false},
            {task: "two" , id : createCount(), done :false},
            {task: "three" , id : createCount(), done :false},
            {task: "four" , id : createCount(), done :false},
        ]
    }
];



const UserContext = createContext<InitialStateInterface[] | []>([] )


export default UserContext;
