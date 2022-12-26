import sample1 from "../assets/images/net.gif";
import sample2 from "../assets/images/test2.png";

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
    technologies: ["Javascript", "React", "Typescript", "styled-component"],
    about: "TMDB API를 이용하여 영화, 드라마 페이지 구현하기",
    link: "https://duckguya.github.io/netflix-clone/#/",
    function: [
      "영화 리스트 페이지",
      "영화 디테일 페이지(내가 선택한 영화와 비슷한 콘텐츠 리스트, 내가 선택한 영화 예고편)",
      "영화 검색 페이지",
      "내가 선택한 영화와 비슷한 콘텐츠 리스트",
      "react-loading-skeleton으로 로딩화면",
      "error page",
    ],
    contents: [
      {
        image: sample1,
        text: `Movie List
        모든 페이지의 레이아웃 배치는 flex를 사용했습니다.
        메인 상단부분은 현재 상영중인 영화 리스트에서 첫 번째 영화를 선택하여 배치했습니다.\n
        영화 리스트는 현재 상영 중인, 가장 인기있는, 개봉 예정인 영화 리스트를 호출했습니다. 쿼리에 language를 넣어 한국어로 된 영화 리스트를 받을 수 있게 요청했습니다.\n
        영화에 마우스오버를 하면 영화의 제목과 별점이 나타납니다.\n
        carousel을 구현하기위해 react-slick라이브러리를 사용했습니다. 넷플릭스와 어울리도록 커스터마이징했습니다.\n
        `,
      },
      {
        image: sample1,
        text: `모든 페이지의 레이아웃 배치는 flex를 사용했습니다.
        메인 상단부분은 현재 상영중인 영화 리스트에서 첫 번째 영화를 선택하여 배치했습니다.\n
        영화 리스트는 현재 상영 중인, 가장 인기있는, 개봉 예정인 영화 리스트를 호출했습니다. 쿼리에 language를 넣어 한국어로 된 영화 리스트를 받을 수 있게 요청했습니다.\n
        영화에 마우스오버를 하면 영화의 제목과 별점이 나타납니다.\n
        carousel을 구현하기위해 react-slick라이브러리를 사용했습니다. 넷플릭스와 어울리도록 커스터마이징했습니다.\n
        `,
      },
    ],

    images: [sample1, sample2],
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

  //     images: [sample1, sample2],
  //   },
];
