import {
  ContainerHashtag,
  ContainerTrends,
  LineTrend,
  SubTitleHashtag,
  TextHashtag,
  TittleTrend,
  ViewHashtags,
} from "./styles";

export default function HashtagDiv() {
  return (
    <ContainerTrends>
      <ViewHashtags>
        <TittleTrend>trending</TittleTrend>
        <LineTrend />
        <ContainerHashtag>
          <TextHashtag>javascript</TextHashtag>
          <SubTitleHashtag>1 linkr</SubTitleHashtag>
          <TextHashtag>react</TextHashtag>
          <SubTitleHashtag>2 linkr</SubTitleHashtag>
          <TextHashtag>javascript</TextHashtag>
          <TextHashtag>react</TextHashtag>
          <TextHashtag>javascript</TextHashtag>
          <TextHashtag>react</TextHashtag>
        </ContainerHashtag>
      </ViewHashtags>
    </ContainerTrends>
  );
}
