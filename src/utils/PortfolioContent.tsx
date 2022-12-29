import net1 from "../assets/images/net1.gif";
import net2 from "../assets/images/net2.gif";
import net3 from "../assets/images/net3.gif";
import net4 from "../assets/images/net4.png";
import net5 from "../assets/images/net5.png";

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

class About {
  name!: string;
  description!: string;
  techStack!: string;
  techDescription!: string[];
}
export interface IGetAbout extends About {}

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
    description: "TMDB API를 이용하여 영화, 드라마 페이지 구현하기",
    link: "https://duckguya.github.io/netflix-clone/#/",
    function: [
      "영화/드라마 리스트 페이지",
      "영화 디테일 페이지(내가 선택한 콘텐츠와 비슷한 콘텐츠 리스트, 내가 선택한 영화 예고편)",
      "검색 페이지",
      "react-loading-skeleton으로 로딩화면 구현",
      "error page",
    ],
    contents: [
      {
        image: net1,
        text: `Content List
        모든 페이지의 레이아웃 배치는 flex를 사용했습니다.
        carousel을 구현하기 위해 react-slick 라이브러리를 사용했습니다. 기본 carousel에서 넷플릭스와 어울리도록 커스터마이징을 하였습니다.\n
        영화 페이지와 티비쇼 페이지의 레이아웃이 같기 때문에 하나의 컴포넌트로 어떻게 재활용 할지 고민했습니다.
        시작부터 깔끔히 코드를 짜야 한다는 생각에 집중하다 보니 오히려 코드가 정리되지 않았습니다. 그래서 각각의 컴포넌트를 만들고 후반에 정리하는 작업을 했습니다.
        각각 라우터를 만들어주고 하나의 컴포넌트에 연결해 주었습니다. props에 type을 줘서 tv, movie를 구분을 주었습니다.
        컴포넌트를 통합하고 나니 css 작업을 효율적으로 할 수 있게되었습니다. 중복되는 코드를 자동화하여 코드를 개선시켰습니다.
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
        에러가 날 경우 사용자들이 혼란스러워하지 않게 에러 컴포넌트를 만들어주었습니다. 새로고침을 유도하도록 문구를 적고 아래 버튼을 달아줬습니다.
        `,
      },
    ],

    images: [net1],
  },
];

export const AboutExperience = [
  {
    name: "리딩퍼센트 (back-end, front-end 관리자 페이지)",
    description:
      "유저의 영어 학습을 도와주는 애플리케이션입니다. 등급 별 구독권을 결제합니다. 쿠폰을 사용할 수 있습니다. 기간 안에 학습하지 않으면 기록이 리셋되는 옵션을 가지고 있습니다. 시니어 백엔드 개발자와 시니어 프론트엔드 개발자 총 세명이서 프로젝트를 진행했습니다. 제가 맡은 역할은 주로 기술환경을 구축하고 seed파일로 더메 데이터를 생성하여 테스트를 바로 할 수 있도록 백업하였습니다.",
    techStack:
      "Adonis.js, MySQL, Docker, NCP-Object Storage, Cloud Outbound Mailer, Simple&Easy Notification Service, React.js, styled-component",
    techDescription: [
      "백엔드/프론트엔드 기술환경 구축",
      "RESTful API 설계",
      "애플리케이션 관리를 위한 관리자 페이지 개발",
      "ncp를 이용하여 비밀번호 수정을 위한 메일 전송",
      "ncp를 이용하여 알림 서비스 개발",
      "db migration 사용으로 데이터 수정하며 seed파일 생성 후 더미 데이터 생성",
    ],
  },
  {
    name: "ASK Korea (back-end)",
    description: "외국인을 대상으로한 지식in 서비스",
    techStack: "Adonis.js, MySQL, AWS S3",
    techDescription: ["백엔드 기술환경 구축", "db 설계", "RESTful API 개발"],
  },
  {
    name: "아르고스 VMA (back-end)",
    description:
      "QRCode를 통한 체크인, 체크아웃 방문객 관리 시스템. 시니어 개발자와 협업하여 진행하였습니다.",
    techStack: "Adonis.js, Next.js, AWS S3, SES",
    techDescription: [
      "백엔드/프론트엔드 기술환경 구축",
      "RESTful API 개발",
      "AWS를 이용한 메일 전송 및 파일 저장 기능 구현",
      "애플리케이션 관리를 위한 관리자 페이지 개발",
    ],
  },
  {
    name: "업테크 트레이닝 (back-end, front-end 관리자 페이지)",
    description: "키오스크 업체 사이트 제작",
    techStack: "Node.js, Firebase, AWS S3, SES, React.js, Next.js",
    techDescription: [
      "firebase 기반 Restful API 개발",
      "React.js, Next.js 기반 관리자 페이지 개발",
      "AWS를 이용한 메일 전송 및 파일 저장 기능 구현",
      "ant design을 이용하여 관리자 페이지 디자인 개발",
    ],
  },
  {
    name: "페이체크 (back-end, front-end 관리자 페이지)",
    description:
      "출/퇴근 관리 서비스. 시니어 개발자와 협업하여 진행하였습니다.",
    techStack: "Python Flask, PostgreSql, React.js, Next.js",
    techDescription: [
      "PostgreSql 기반 클라이언트 관리자 Restful API 개발",
      "React.js, Next.js 기반 클라이언트 관리자 페이지 개발",
    ],
  },
  {
    name: "알림서랍 (back-end)",
    description:
      "사용자의 취향을 학습해 알림을 분류하고 보여주는 애플리케이션. 시니어 개발자와 협업하여 진행하였습니다.",
    techStack: "Python Django",
    techDescription: ["Restful API 개발", "Daum API를 이용한 주소 찾기 구현"],
  },
  {
    name: "로아인텔리전스 (front-end 관리자 페이지)",
    description: "기사 빅데이터 사이트 관리자 페이지 제작",
    techStack: "React.js, Next.js",
    techDescription: [
      "React.js, Next.js 기반 관리자 페이지 개발",
      "ant design을 이용하여 관리자 페이지 디자인 개발",
    ],
  },
];
