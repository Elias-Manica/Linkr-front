import Css from "./styles";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ButtonFollow = (props) => {
  const { id } = useParams();
  const [following, setFollow] = useState(false);
  

  function followUser() {
    if( following === true) return;
    setFollow(true);
    axios
      .post("http://localhost:4000/users/:userid")
      .then((res) => {
        setFollow(false);
      })
      .catch((res) => {
        setFollow(false);
        alert('Não foi possível completar a operação');
      });
  }

  function unfollowUser(){
    setFollow(true);
    axios.delete().then( ()=>{

    }).catch( (res) => {
      setFollow(false);
      alert('Não foi possível completar a operação');
    })
  }

  return <Css.ButtonFollow onClick={followUser}>{following ? "Unfollow" : "Follow"}</Css.ButtonFollow>;
};

export default ButtonFollow;
