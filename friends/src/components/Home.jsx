import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from "../custom/axiosWithAuth";
import AddFriend from "./AddFriend";

export default function Home() {
    const [ friends, setFriends ] = useState([]);
    const [ activeFriend, setActiveFriend ] = useState(null)

    useEffect( () => {
    axiosWithAuth()
        .get("/api/friends")
        .then( res => {
            console.log(res);
            setFriends(res.data)
        })
        .catch( error => {
        console.log(error);
        debugger
        })
    },[])

    let friend = friends.map( item => {
        return (
        <div 
        className={`${activeFriend === item.id ? "actives" : ""}`}
        key={item.id}
        onClick={() => setActiveFriend(item.id)}>
            <h4>{item.name}</h4>
            <p>{item.email} {"  "} {item.age}</p>
        </div>
        )
    })

    return (
        <div>
            <h1>Home Page *PROTECTED*</h1>
            {friend}
            <AddFriend setFriends={setFriends} activeFriend={activeFriend}/>
        </div>
    )
}
