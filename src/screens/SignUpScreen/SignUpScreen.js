import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { postSignUp } from "../../services/linkrService";
import { Button, Form, LeftContainer, RightContainer, Wrapper } from "./styles";

export default function SignUpScreen() {
    const navigate = useNavigate();
    const [disabled, setDisabled] = useState(false);
    const [form, setForm] = useState({
        email: "", 
        password: "", 
        username: "", 
        pictureurl: "" 
    });

    useEffect(() => {
        if(localStorage.getItem("linkr") !== null) {
            navigate("/timeline");
        }
    }, []);

    function handleForm(event) {
        setForm({
            ...form, 
            [event.target.name]: event.target.value
        });
    }

    function verifyEmptyFields() {
        if(form.email === "" || form.password === "" || form.username === "" || form.pictureurl === "") {
            return alert("All fields are required!");
        }
    }

    function signUp(event) {
        event.preventDefault();

        setDisabled(true);

        postSignUp(form)
            .then(resp => {
                setDisabled(false);
                navigate("/");
            })
            .catch(resp => {
                setDisabled(false);
                console.error(resp);
                if(resp.response.status === 409) return alert("E-mail already registered!");
                
                if(resp.response.data.filter(value => value.includes("fails to match the required pattern:"))) {
                    return alert("Unsupported URL format! Please choose another one");
                }
            });
    }

    return (
        <Wrapper>
            <LeftContainer>
                <h1>linkr</h1>
                <h2>save, share and discover the best links on the web</h2>
            </LeftContainer>
            <RightContainer>
                <Form onSubmit={signUp}>
                    <input 
                        type="email" 
                        name="email" 
                        value={form.name} 
                        placeholder="e-mail" 
                        onChange={handleForm} 
                        disabled={disabled} 
                        required 
                    />

                    <input 
                        type="password" 
                        name="password" 
                        value={form.name} 
                        placeholder="password" 
                        onChange={handleForm} 
                        disabled={disabled} 
                        required 
                    />

                    <input 
                        type="text" 
                        name="username" 
                        value={form.name} 
                        placeholder="username" 
                        onChange={handleForm} 
                        disabled={disabled} 
                        required 
                    />

                    <input 
                        type="url" 
                        name="pictureurl" 
                        value={form.name} 
                        placeholder="picture url" 
                        onChange={handleForm} 
                        disabled={disabled} 
                        required 
                    />
                    
                    <Button type="submit" disabled={disabled} onClick={verifyEmptyFields}>Sign Up</Button>
                </Form>

                <Link to={"/"}>
                    <p>Switch back to log in</p>
                </Link>
            </RightContainer>
        </Wrapper>
    );
}