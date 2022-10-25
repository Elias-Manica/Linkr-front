import React, { useState, useEffect, useCallback, useRef } from "react";

import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import { HiOutlinePencilSquare, HiOutlineTrash } from "react-icons/hi2";
import { TbSend } from "react-icons/tb";

import {
	deletePost,
	updatePost,
	insertLikePost,
	removeLikePost,
} from "../../services/postService";

import {
	ContainerDelete,
	ContainerDescription,
	ContainerEdit,
	ContainerEditInput,
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
	ContainerLOading,
	CommentsContainer,
} from "./styles";

import Microlink from "@microlink/react";
import { useNavigate } from "react-router-dom";
import ModalDelete from "../ModalDelete/ModalDelete";
import { ReactTagify } from "react-tagify";

import { Oval } from "react-loader-spinner";

export default function PostUser({ value, getPostsTimeLine, getHashtags }) {
	const userInfo = JSON.parse(localStorage.getItem("linkr"));
	const [isOpen, setIsOpen] = useState(false);
	const [description, setDescription] = useState("");
	const [edit, setEdit] = useState(false);
	const [putDescription, setPutDescription] = useState("");
	const [loading, setLoading] = useState(false);
	const [liked, setLiked] = useState(false);
	const navigate = useNavigate();

	const inputRef = useRef(null);

	console.log(value, " value");

	async function editPost(token, id) {
		setLoading(true);
		const body = {
			link: value.link,
			text: putDescription,
		};
		try {
			const response = await updatePost(token, body, id);
			getPostsTimeLine();
			setLoading(false);
		} catch (error) {
			alert("An error occured during edit post");
			setLoading(false);
		}
	}

	async function openTextEdit(e) {
		e.preventDefault();
		if (edit === true && putDescription !== description) {
			editPost(userInfo.token, value.id);
			return;
		}
		setEdit(!edit);
	}

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
		setPutDescription(textSepareted.join(" "));
	}, [value.hashtags, value.text]);

	useEffect(() => {
		replaceText();

		if (edit) {
			inputRef.current.focus();
		}
	}, [replaceText, edit]);

	return (
		<>
			<ViewPost key={value.id}>
				<ContainerUser>
					<ContainerImage
						src={value.pictureurl}
						onClick={() => goToUserPage()}
					/>
					<ViewIcon liked={liked} onClick={() => likePost()}>
						{liked ? <IoMdHeart /> : <IoMdHeartEmpty />}
					</ViewIcon>
					<TextLike>{value.qtdlikes} likes</TextLike>
				</ContainerUser>
				<ContainerInfosPost>
					<form>
						<ContainerNameEdit>
							<NameUser onClick={() => goToUserPage()}>
								{value.username}
							</NameUser>
							{userInfo.userid === value.userid ? (
								<ContainerIconEdit>
									<ContainerEdit onClick={(e) => openTextEdit(e)}>
										<HiOutlinePencilSquare />
									</ContainerEdit>
									<ContainerDelete onClick={() => setIsOpen(!isOpen)}>
										<HiOutlineTrash />
									</ContainerDelete>
								</ContainerIconEdit>
							) : null}
						</ContainerNameEdit>
						<ContainerDescription>
							{loading ? (
								<ContainerLOading>
									<Oval
										height={30}
										width={30}
										color="#171717"
										wrapperStyle={{}}
										wrapperClass=""
										visible={true}
										ariaLabel="oval-loading"
										secondaryColor="#FFFFFF"
										strokeWidth={2}
										strokeWidthSecondary={2}
									/>
								</ContainerLOading>
							) : edit ? (
								<ContainerEditInput
									value={putDescription}
									onChange={(e) => setPutDescription(e.target.value)}
									ref={inputRef}
								/>
							) : (
								<ReactTagify
									tagClicked={(tag) => goToHashtagPage(tag)}
									tagStyle={{
										color: "white",
										fontWeight: "bold",
										cursor: "pointer",
									}}
								>
									<DescriptionPost>{description}</DescriptionPost>
								</ReactTagify>
							)}

							<ContainerLink>
								<Microlink url={value.link} />
							</ContainerLink>
						</ContainerDescription>
					</form>
				</ContainerInfosPost>
				<ModalDelete
					isOpen={isOpen}
					setIsOpen={setIsOpen}
					postId={value.id}
					getPostsTimeLine={getPostsTimeLine}
					getHashtags={getHashtags}
				/>
			</ViewPost>
			<CommentsContainer>
				<img src={value.pictureurl} alt="" />
				<form>
					<input type="text" placeholder="write a comment..." />
					<button>
						<TbSend />
					</button>
				</form>
			</CommentsContainer>
		</>
	);
}
