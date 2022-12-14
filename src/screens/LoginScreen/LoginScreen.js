import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { postLogin } from "../../services/linkrService";
import { Button, Form, LeftContainer, RightContainer, Wrapper } from "./styles";

export default function LoginScreen() {
	const navigate = useNavigate();
	const [disabled, setDisabled] = useState(false);
	const [form, setForm] = useState({
		email: "",
		password: "",
	});

	useEffect(() => {
		if (localStorage.getItem("linkr") !== null) {
			navigate("/timeline");
		}
	}, []);

	function handleForm(event) {
		setForm({
			...form,
			[event.target.name]: event.target.value,
		});
	}

	function login(event) {
		event.preventDefault();

		setDisabled(true);

		postLogin(form)
			.then((resp) => {
				setDisabled(false);
				const userInfoJSON = JSON.stringify({
					userid: resp.data.userid,
					username: resp.data.username,
					pictureurl: resp.data.pictureurl,
					token: resp.data.token,
				});
				localStorage.setItem("linkr", userInfoJSON);
				navigate("/timeline");
			})
			.catch((resp) => {
				setDisabled(false);
				console.error(resp);
				alert("E-mail or password are invalid!");
			});
	}

	function verifyEmptyFields() {
		if (
			form.email === "" ||
			form.password === "" ||
			form.username === "" ||
			form.pictureurl === ""
		) {
			return alert("All fields are required!");
		}
	}

	return (
		<Wrapper>
			<LeftContainer>
				<div>
				<h1>linkr</h1>
				<h2>save, share and discover the best links on the web</h2>
				</div>
			</LeftContainer>
			<RightContainer>
				<div>
				<Form onSubmit={login}>
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

					<Button type="submit" disabled={disabled} onClick={verifyEmptyFields}>
						Log In
					</Button>
				</Form>
				</div>
				
				<Link to={"/sign-up"}>
					<p>First time? Create an account!</p>
				</Link>
			</RightContainer>
		</Wrapper>
	);
}
