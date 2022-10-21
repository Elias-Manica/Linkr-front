import {
  ContainerHashtag,
  ContainerLoading,
  ContainerText,
  ContainerTrends,
  LineTrend,
  SubTitleHashtag,
  TextEmpty,
  TextHashtag,
  TittleTrend,
  ViewHashtags,
} from "./styles";

import { Oval } from "react-loader-spinner";

import { Link } from "react-router-dom";

export default function HashtagDiv({ hashtag, loadingHashtag }) {
  return (
    <ContainerTrends>
      <ViewHashtags>
        <TittleTrend>trending</TittleTrend>
        <LineTrend />
        <ContainerHashtag>
          {loadingHashtag ? (
            <ContainerLoading>
              <Oval
                height={80}
                width={80}
                color="#171717"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel="oval-loading"
                secondaryColor="#FFFFFF"
                strokeWidth={2}
                strokeWidthSecondary={2}
              />
            </ContainerLoading>
          ) : hashtag.length > 0 ? (
            hashtag.map((value) => (
              <ContainerText key={value.id}>
                <Link to={`/hashtag/${value.name}`}>
                  <TextHashtag>#{value.name}</TextHashtag>
                </Link>
                <SubTitleHashtag>{value.quantidade} linkr</SubTitleHashtag>
              </ContainerText>
            ))
          ) : (
            <TextEmpty>
              There are no trending hashtags at the moment :(
            </TextEmpty>
          )}
        </ContainerHashtag>
      </ViewHashtags>
    </ContainerTrends>
  );
}
