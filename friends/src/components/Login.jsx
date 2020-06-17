import React from 'react';
import useForm from "../custom/useForm";
import { axiosWithAuth } from "../custom/axiosWithAuth";
import { Form, Label, Button } from "reactstrap";

const initialValue = {
    username: "",
    password: ""
  };

export default function Login(props) {
    const [values, handleChanges] = useForm("Login-Form-Data", initialValue);

    const login = event => {
        event.preventDefault();
        axiosWithAuth()
          .post('/api/login', values)
          .then(res => {
            window.localStorage.setItem('token', res.data.payload);
            props.history.push('/Home');
          })
          .catch(err => console.log(err));
        localStorage.removeItem("Login-Form-Data");
      };

    return (
        <div>
            <Form onSubmit={login}>
                <Label> Username:{" "}
                    <input
                        type="text"
                        value={values.username}
                        name="username"
                        placeholder="Lambda School"
                        onChange={handleChanges}></input>
                </Label>
                <br/>
                <Label> Password:{" "}
                    <input
                        type="password"
                        value={values.password}
                        name="password"
                        placeholder="i<3Lambd4"
                        onChange={handleChanges}></input>
                </Label>
                <br/>
                <Button>Submit</Button>
            </Form>
        </div>
    )
}
