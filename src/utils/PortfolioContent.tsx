import net1 from "../assets/images/net1.gif";
import net2 from "../assets/images/net2.gif";

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
        각각 라우터 페이지를 만들어주고 하나의 리스트 컴포넌트를 연결해 주었습니다. props에 type을 줘서 tv, movie를 구분할 수 있게 했습니다.
        컴포넌트를 통합하고 나니 css를 수정해도 같이 반영되어 훨씬 유용하게 사용할 수 있었습니다.
        `,
      },
      {
        image: net2,
        text: `Content Detail
        
        `,
      },
      {
        image: net1,
        text: `Content Search
        `,
      },

      {
        image: net1,
        text: `Loading Page
        `,
      },
      {
        image: net1,
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
