import React from 'react';
import useForm from "../custom/useForm";
import { axiosWithAuth } from "../custom/axiosWithAuth";
import { Label, Form, Button } from 'reactstrap';

const initialValue = {
    name: "",
    email: "",
    age: 0
}

export default function AddFriend(props) {
    const { setFriends, activeFriend } = props;
    const [ values, handleChanges ] = useForm("Add-A-Friend-FormData", initialValue);

    const submitFriend = event => {
        event.preventDefault();
        axiosWithAuth()
            .post("/api/friends", values)
            .then( res => {
                setFriends(res.data)
            })
            .catch( error => {
                console.log(error)
                debugger
            })
        localStorage.removeItem("Add-A-Friend-FormData");
        
    }

    const editFriend = event => {
        event.preventDefault();
        axiosWithAuth()
        .put(`/api/friends/${activeFriend}`, values)
            .then( res => {
                setFriends(res.data)
            })
            .catch( error => {
                console.log(error)
                debugger
            })
    }

    const deleteFriend = event => {
        event.preventDefault();
        axiosWithAuth()
        .delete(`/api/friends/${activeFriend}`)
            .then( res => {
                setFriends(res.data)
            })
            .catch( error => {
                console.log(error)
                debugger
            })
    }
    return (
        <div>
            <Form>
                <Label>
                    <input type="text"
                        name="name"
                        value={values.name}
                        onChange={handleChanges}></input>
                </Label>
                {"   "}
                <Label>
                    <input type="text"
                        name="email"
                        value={values.email}
                        onChange={handleChanges}></input>
                </Label>
                <Label>
                    <input type="number"
                        name="age"
                        value={values.number}
                        onChange={handleChanges}></input>
                </Label>
                <br/>
                <hr/>
                <Button onClick={submitFriend}>Add A Friend!</Button> {"  "}
                <Button onClick={editFriend}>Edit Selected Friend</Button>{"  "}
                <Button onClick={deleteFriend}>Delete Selected Friend</Button>
            </Form>   
        </div>
    )
}
