import net_thumbnail from "../assets/images/net1.gif";
import net2 from "../assets/images/net2.gif";
import net3 from "../assets/images/net3.gif";
import net4 from "../assets/images/net4.png";
import net5 from "../assets/images/net5.png";
import todo_thumbnail from "../assets/images/todo_thumbnail.png";
import todo1 from "../assets/images/todo_darkmode.gif";
import todo2 from "../assets/images/todo_create.gif";
import todo3 from "../assets/images/todo_update.gif";
import todo4 from "../assets/images/todo_delete.gif";
import todo5 from "../assets/images/todo_category.gif";
import coin_thumbnail from "../assets/images/coin_thumbnail.png";
import coin1 from "../assets/images/coin_sort.gif";
import coin2 from "../assets/images/coin_darkmode.gif";
import coin3 from "../assets/images/coin_detail.gif";
import coin4 from "../assets/images/coin_nav.gif";

class Portfolio {
  id!: number;
  title!: string;
  technologies!: string[];
  about!: string;
  link!: string;
  content!: { function: string[]; explanation: string[] };
  thumbnail!: string;
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
    title: "To Do List",
    technologies: [
      "React",
      "Typescript",
      "styled-component",
      "Recoil",
      "Localstorage",
    ],
    description: "recoil을 활용한 ToDoList 구현하기",
    link: "https://duckguya.github.io/to-do-list/#/",
    function: [
      "Recoil을 이용한 다크 모드 구현",
      "ToDo 생성",
      "ToDo 수정",
      "ToDo 삭제",
      "recoil selector를 이용한 ToDo 카테고리 변경",
    ],
    contents: [
      {
        image: todo1,
        text: `다크 모드
        Recoil을 사용하여 atom의 값에 따라 다크 모드와 라이트 모드가 변경되도록 구현하였습니다. atom의 기본값은 boolean 타입으로 지정해 주었습니다.
        ThemeProvider를 다크 모드가 필요한 컴포넌트 위에 래핑 해주어 atom의 값이 변경되면 미리 설정해놓은 스타일 객체를 적용시켜 전역으로 theme의 스타일을 사용할 수 있게 하였습니다.

        useRecoilState을 사용하여 다크 모드 버튼을 누르면 현재 값의 반대 값으로 변경시켜 값을 업데이트했습니다. 해당 atom을 구독하고 있던 ThemeProvider에 theme의 값이 변경되어 다크 모드와 라이트 모드를 사용할 수 있게 하였습니다.
        `,
      },
      {
        image: todo2,
        text: `ToDo 생성
        생성한 투두를 바로 볼 수 있게 상태 관리 라이브러리인 recoil을 사용하였습니다.
        ToDo 저장 버튼 클릭 시 recoil atom의 state 값을 업데이트하기 위해 useSetRecoilState 함수를 사용하였습니다. 리턴된 setter 함수에 작성한 toDo와 카테고리 위치 그리고 id를 넣어주었습니다. id는 Date 함수로 밀리 초를 사용하여 유니크한 값을 사용할 수 있게 하였습니다.

        저장 및 상태 동기화를 위해 Recoil-persist 라이브러리를 사용하였습니다.
        localstorage에 저장하기 위해 아무런 설정을 해주지 않았습니다.

        useForm hook을 사용하여 input에서 값을 불러오고 유효성 검사를 하였습니다. register 메소드를 사용하여 검증 규칙을 적용할 수 있게 하였습니다.
        uesFormState hook으로부터 받은 errors 객체를 이용해 에러가 날 경우 필요한 문구를 내보내어 사용자가 문제를 인식할 수 있게 하였습니다.
        유효성 검사를 통과하면 handleSubmit함수를 사용하여 form의 데이터를 매개변수로 전달받아 사용하였습니다.
        `,
      },
      {
        image: todo3,
        text: `ToDo 수정
        컴포넌트 상태 관리를 위하여 리액트의 Hook인 useState를 사용하였습니다.
        useState를 이용해 boolean 타입인 isEdit 변수를 만들고 값에 따라 수정 페이지가 나타나도록 하였습니다.
        useRecoilState 함수를 사용하여 setter 함수를 받아 업데이트하였습니다.
        스프레드 연산자로 기존 데이터를 복사한 후 findIndex 함수로 수정할 id와 같은 값을 찾아 index를 반환하였습니다. splice 함수로 해당 인덱스를 삭제해주고 slice 함수로 수정할 인덱스 앞뒤에 있는 데이터를 찾아주었습니다. 해당 값들을  스프레드 연산자로 넣어주고 가운데에 새 투두 데이터를 넣어주어 수정해 주었습니다.
        `,
      },
      {
        image: todo4,
        text: `ToDo 삭제
        스프레드 연산자를 이용하여 기존에 있던 데이터를 복사해 주었습니다. 그리고 findIndex 함수를 이용해 id 값이 동일한 데이터의 인덱스 값을 반환시켜줍니다. slice 함수를 이용하여 해당 인덱스 데이터를 삭제시킵니다.
        `,
      },
      {
        image: todo5,
        text: `ToDo 카테고리 변경
        recoil의 selector를 이용하여 카테고리 state가 변경되면 가져와야 할 ToDo 데이터를 변경할 수 있도록 처리하였습니다.
        recoil atom을 이용하여 카테고리 state를 만들어주었습니다. 카테고리 변경 버튼을 누르면 useRecoilState로 카테고리 state를 변경합니다. 해당 atom이 변하면 toDoSelector가 업데이트됩니다. toDoSelector는 get을 통해 전처리한 toDoState와 categoryState를 가져옵니다. 그리고 filter 함수를 통해 같은 카테고리의 데이터를 리턴하여 재렌더링합니다.
        `,
      },
    ],

    thumbnail: todo_thumbnail,
  },
  {
    id: 1,
    title: "Netflix clone",
    technologies: ["React", "Typescript", "styled-component", "react-query"],
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
        image: net_thumbnail,
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

    thumbnail: net_thumbnail,
  },
  {
    id: 2,
    title: "Crypto Tracker",
    technologies: [
      "React",
      "Typescript",
      "styled-component",
      "Recoil",
      "usequery",
    ],
    description: "coinpaprika api를 활용한 암호화폐 트래커 페이지 만들기",
    link: "",
    function: [
      "랭크순, 오름차순, 내림차순  정렬 기능 구현",
      "recoil을 이용한 다크 모드 구현",
      "outlet으로 중첩 랜더링을 한 디테일 페이지",
      "useInterval을 사용한 nav bar",
    ],
    contents: [
      {
        image: coin1,
        text: `정렬 기능
        랭크순, 오름차순, 내림차순으로 정렬 기능을 구현하였습니다.
서버로부터 데이터를 조회하기 위해 useQuery를 사용하였습니다. useQuery의 두 번째 인자에 api 호출 함수를 넣어주었습니다. 
호출 함수의 props에 정렬 카테고리를 전달하여 데이터를 반환하기 전 sort() 함수를 사용할 수 있게 하였습니다.

api를 호출하여 전달받은 데이터에는 coin 리스트와 token 리스트가 섞여있어 분리 처리를 하였습니다. filter 함수를 통해 데이터의 type이 token인 것과 coin인 것을 구분하여 반환하도록 처리하였습니다.
        `,
      },
      {
        image: coin2,
        text: `다크 모드
        Recoil을 사용하여 atom의 값에 따라 다크 모드와 라이트 모드가 변경되도록 구현하였습니다. atom의 기본값은 boolean 타입으로 지정해 주었습니다.
ThemeProvider를 다크 모드가 필요한 컴포넌트 위에 래핑 해주어 atom의 값이 변경되면 미리 설정해놓은 스타일 객체를 적용시켜 전역으로 theme의 스타일을 사용할 수 있게 하였습니다.

useRecoilState을 사용하여 다크 모드 버튼을 누르면 현재 값의 반대 값으로 변경시켜 값을 업데이트했습니다. 해당 atom을 구독하고 있던 ThemeProvider에 theme의 값이 변경되어 다크 모드와 라이트 모드를 사용할 수 있게 하였습니다.
        `,
      },
      {
        image: coin3,
        text: `디테일 페이지
        useParams 훅을 사용하여 url 파라미터에서 id 값을 가져왔습니다. 가져온 id를 api 호출 함수 props에 전달하여 해당 페이지의 디테일 데이터를 호출하여 렌더링 하였습니다. 

chart와 price 컴포넌트는 중첩 라우팅하여 표시해 주었습니다.
react router dom으로부터 improt 해온 Link 훅으로 서브 페이지를 추가한 후 Outlet 훅으로 부모 라우트의 컴포넌트에 자식 라우트 컴포넌트 위치를 지정해 주었습니다.

chart는 react-apexcharts 라이브러리를 사용하여 커스텀 하였습니다.
        `,
      },
      {
        image: coin4,
        text: `nav bar
        리스트 중 상위 5개의 암호화폐를 5초 주기로 교체하여 보여주었습니다.

setInterval 함수의 문제점을 보완한 커스텀 훅인 useInterval 함수를 사용하였습니다. 디테일 api를 호출해야 했기 때문에 coinId를 찾을 수 있는 리스트의 해당 인덱스가 필요했습니다.
ustState를 이용하여 index의 초깃값을 설정해 주고 5초마다 인덱스의 값이 1씩 증가하게 하였습니다.
useEffect의 두 번째 인자 값에 index를 넣어주어 index의 값이 변경되면 refetch 함수를 실행하여 react query가 refetch를 수행하도록 하였습니다.
        `,
      },
    ],

    thumbnail: coin_thumbnail,
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
