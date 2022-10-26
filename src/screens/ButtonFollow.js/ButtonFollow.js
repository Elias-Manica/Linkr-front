import Css from "./styles";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Oval } from "react-loader-spinner";

import {
  verifyFollow,
  followingUser,
  unfollowing,
} from "../../services/linkrService";

const ButtonFollow = ({ userInfo, id }) => {
  const [following, setFollowing] = useState(false);
  const [loading, setLoading] = useState();

  async function getFollow() {
    console.log("oie");
    try {
      const response = await verifyFollow(userInfo.token, id);
      console.log(response.data);
      setFollowing(response.data.follow);
      setLoading(true);
    } catch (error) {
      console.error(error);
    }
  }

  async function followFunction() {
    try {
      if (following) {
        await unfollowing(userInfo.token, id);
        getFollow();
        return;
      }
      await followingUser(userInfo.token, id);
      getFollow();
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getFollow();
  }, []);

  if (loading) {
    return (
      <Css.ButtonFollow onClick={followFunction} >
        {following ? "Unfollow" : "Follow"}
      </Css.ButtonFollow>
    );
  } else {
    return (
      <Css.ButtonFollow onClick={followFunction} disabled="disabled">
    
        <Css.OvalStyled
          width={30}
          height={30}
          color="#171717"
          ariaLabel="oval-loading"
          secondaryColor="#FFFFFF"
        />
      </Css.ButtonFollow>
    );
  }
};

export default ButtonFollow;
