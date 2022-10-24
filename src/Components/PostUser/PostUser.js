import React, { useState, useEffect, useCallback } from "react";

import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import { HiOutlinePencilSquare, HiOutlineTrash } from "react-icons/hi2";

import {
	deletePost,
	insertLikePost,
	removeLikePost,
} from "../../services/postService";

import {
	ContainerDelete,
	ContainerDescription,
	ContainerEdit,
	ContainerIconEdit,
	ContainerImage,
	ContainerInfosPost,
	ContainerLink,
	ContainerNameEdit,
	ContainerUser,
	DescriptionPost,
	NameUser,
	TextLike,
	ViewIcon,
	ViewPost,
} from "./styles";

import Microlink from "@microlink/react";
import { useNavigate } from "react-router-dom";
import ModalDelete from "../ModalDelete/ModalDelete";
import { ReactTagify } from "react-tagify";

export default function PostUser({ value, getPostsTimeLine, getHashtags }) {
	const userInfo = JSON.parse(localStorage.getItem("linkr"));
	const [isOpen, setIsOpen] = useState(false);
	const [description, setDescription] = useState("");
	const [liked, setLiked] = useState(false);
	const navigate = useNavigate();

	function goToUserPage() {
		navigate(`/users/${value.userid}`);
	}

	function goToHashtagPage(name) {
		const hashtag = name.substring(1);

		navigate(`/hashtag/${hashtag}`);
	}

	async function likePost() {
		if (liked) {
			await removeLikePost(userInfo.token, value.id, userInfo.id);
			setLiked(false);
		} else {
			await insertLikePost(userInfo.token, value.id, userInfo.id);
			setLiked(true);
		}
	}

	const replaceText = useCallback(async () => {
		const textSepareted = value.text.split(" ");

		if (value.hashtags[0] !== null) {
			let index = 0;
			for (let i = 0; i < textSepareted.length; i++) {
				if (textSepareted[i] === "$#") {
					textSepareted[i] = `#${value.hashtags[index]}`;
					index++;
				}
			}
		}
		setDescription(textSepareted.join(" "));
	}, [value.hashtags, value.text]);

	useEffect(() => {
		replaceText();
	}, [replaceText, value.qtdlikes]);

	return (
		<ViewPost key={value.id}>
			<ContainerUser>
				<ContainerImage src={value.pictureurl} onClick={() => goToUserPage()} />
				<ViewIcon liked={liked} onClick={() => likePost()}>
					{liked ? <IoMdHeart /> : <IoMdHeartEmpty />}
				</ViewIcon>
				<TextLike>{value.qtdlikes} likes</TextLike>
			</ContainerUser>
			<ContainerInfosPost>
				<ContainerNameEdit>
					<NameUser onClick={() => goToUserPage()}>{value.username}</NameUser>
					<ContainerIconEdit>
						<ContainerEdit>
							<HiOutlinePencilSquare />
						</ContainerEdit>
						<ContainerDelete onClick={() => setIsOpen(!isOpen)}>
							<HiOutlineTrash />
						</ContainerDelete>
					</ContainerIconEdit>
				</ContainerNameEdit>
				<ContainerDescription>
					<ReactTagify
						tagClicked={(tag) => goToHashtagPage(tag)}
						tagStyle={{ color: "white", fontWeight: "bold", cursor: "pointer" }}
					>
						<DescriptionPost>{description}</DescriptionPost>
					</ReactTagify>
					<ContainerLink>
						<Microlink url={value.link} />
					</ContainerLink>
				</ContainerDescription>
			</ContainerInfosPost>
			<ModalDelete
				isOpen={isOpen}
				setIsOpen={setIsOpen}
				postId={value.id}
				getPostsTimeLine={getPostsTimeLine}
				getHashtags={getHashtags}
			/>
		</ViewPost>
	);
}
