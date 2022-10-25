import React from "react";
import Css from "./style";

function Post({ username, text, link, profile }) {
	return (
		<Css.Post>
			<Css.ProfileLabel>
				<Css.ProfilePost src={profile} alt="perfil" />
			</Css.ProfileLabel>
			<Css.ContentLabel>
				<div className="username">{username}</div>
				<div>{text}</div>
				<div>{link}</div>
			</Css.ContentLabel>
		</Css.Post>
	);
}
export default Post;
