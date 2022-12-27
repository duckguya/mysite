import net1 from "../assets/images/net1.gif";
import net2 from "../assets/images/net2.gif";
import net3 from "../assets/images/net3.gif";
import net4 from "../assets/images/net4.png";
import net5 from "../assets/images/net5.png";

type portfoilo = [
  {
    id: number;
    title: string;
    technologies: string[];
    about: string;
    content: { function: string[]; explanation: string[] };
    images: string[];
  }
];

class Portfolio {
  id!: number;
  title!: string;
  technologies!: string[];
  about!: string;
  link!: string;
  content!: { function: string[]; explanation: string[] };
  images!: string[];
}

export interface IGetPortfolioDetail extends Portfolio {}

export const PortfolioContent = [
  {
    id: 0,
    title: "Netflix clone",
    technologies: [
      "Javascript",
      "React",
      "Typescript",
      "styled-component",
      "react-query",
    ],
    about: "TMDB API를 이용하여 영화, 드라마 페이지 구현하기",
    link: "https://duckguya.github.io/netflix-clone/#/",
    function: [
      "영화/드라마 리스트 페이지",
      "영화 디테일 페이지(내가 선택한 영화와 비슷한 콘텐츠 리스트, 내가 선택한 영화 예고편)",
      "검색 페이지",
      "react-loading-skeleton으로 로딩화면",
      "error page",
    ],
    contents: [
      {
        image: net1,
        text: `Content List
        모든 페이지의 레이아웃 배치는 flex를 사용했습니다.
        메인 상단부분은 현재 상영 중인 영화 리스트에서 첫 번째 영화를 선택하여 배치했습니다.
        영화 리스트는 현재 상영 중인, 가장 인기 있는, 개봉 예정인 영화 리스트를 호출했습니다. 쿼리에 language를 넣어 한국어로 된 영화 리스트를 받을 수 있게 요청했습니다.
        영화에 마우스 오버를 하면 영화의 제목과 별점이 나타납니다.
        carousel을 구현하기 위해 react-slick 라이브러리를 사용했습니다. 기본 carousel에서 넷플릭스와 어울리도록 커스터마이징을 하였습니다.\n
        영화 페이지와 티비쇼 페이지의 레이아웃이 같기 때문에 하나의 컴포넌트로 어떻게 재활용 할지 고민했습니다.
        시작부터 깔끔히 코드를 짜야 한다는 생각에 집중하다 보니 오히려 코드가 정리되지 않았습니다. 그래서 각각의 컴포넌트를 만들고 후반에 정리하는 작업을 했습니다.
        각각 라우터를 만들어주고 하나의 리스트 컴포넌트를 연결해 주었습니다. props에 type을 줘서 tv, movie를 구분할 수 있게 했습니다.
        컴포넌트를 통합하고 나니 css를 수정해도 같이 반영되어 훨씬 유용하게 사용할 수 있었습니다.
        `,
      },
      {
        image: net2,
        text: `Content Detail
        react-player 라이브러리를 사용하였습니다. 해당 콘텐츠에 youtube 영상이 포함되어 있으면 비디오를 key를 가져오는 api를 호출했습니다.
        오래된 영화같이 영상이 포함되어 있지 않으면 포스터를 대신 배치했습니다.

        비슷한 콘텐츠 api를 호출하여 하단을 채워주었습니다. 비슷한 콘텐츠는 리스트가 많기 때문에 9개로 제한하였습니다.
        `,
      },
      {
        image: net3,
        text: `Content Search
        애니메이션은 framer-motion 라이브러리를 사용하였습니다. 검색 아이콘을 클릭하면 설정해놓은  애니메이션이 실행됩니다.\n
        검색 api는 영화와 티비쇼가 같이 검색되어 결과가 반환되기 때문에 영화 레이아웃과 티비 레이아웃을 나누었습니다.
        콘테츠 리스트와 같이 같은 레이아웃을 쓰기때문에 하나의 컴포넌트에 리스트 컴포넌트와 디테일 컴포넌트를 넣어주었습니다. 리스트는  props에 type을 넣어주어 구분하였습니다.\n
        검색결과가 없을 경우 메시지를 띄어주어 사용자가 확인 할 수 있게 하였습니다.
        `,
      },

      {
        image: net4,
        text: `Loading Page
        데이터를 가져오는 동안 빈화면 대신 콘텐츠를 표시하는 용도로 react-loading-skeloton 라이브러리를 사용했습니다.
        스켈레톤 컴포넌트를 만들어 필요한 화면에 넣어주었습니다.
        `,
      },
      {
        image: net5,
        text: `Error Page
        `,
      },
    ],

    images: [net1],
  },
  //   {
  //     id: 1,
  //     title: "Netflix clone",
  //     technologies: ["Javascript", "React", "Typescript", "styled-component"],
  //     about:
  //       "a sharp or sudden cry; a word, phrase, or sound that expresses a strong emotion",
  //     link: "",
  //     content: {
  //       function: [
  //         "TMDB API 호출하여 영화 데이터 가져오기",
  //         "영화 리스트 페이지",
  //         "영화 디테일 페이지(내가 선택한 영화와 비슷한 콘텐츠 리스트, 내가 선택한 영화 예고편)",
  //         "영화 검색 페이지",
  //         "내가 선택한 영화와 비슷한 콘텐츠 리스트",
  //         "react-loading-skeleton으로 로딩화면",
  //         "error page",
  //       ],
  //       explanation: [""],
  //     },

  //     images: [net1, sample2],
  //   },
];
