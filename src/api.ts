import axios from "axios";
import net_thumbnail from "./assets/images/net1.gif";
import net1 from "./assets/images/net1.gif";
import net2 from "./assets/images/net2.gif";
import net3 from "./assets/images/net3.gif";
import net4 from "./assets/images/net4.png";
import net5 from "./assets/images/net5.png";
import todo_thumbnail from "./assets/images/todo_thumbnail.png";
import todo1 from "./assets/images/todo_darkmode.gif";
import todo2 from "./assets/images/todo_create.gif";
import todo3 from "./assets/images/todo_update.gif";
import todo4 from "./assets/images/todo_delete.gif";
import todo5 from "./assets/images/todo_category.gif";
import coin_thumbnail from "./assets/images/coin_thumbnail.png";
import coin1 from "./assets/images/coin_sort.gif";
import coin2 from "./assets/images/coin_darkmode.gif";
import coin3 from "./assets/images/coin_detail.gif";
import coin4 from "./assets/images/coin_nav.gif";
import mysite_thumbnail from "./assets/images/mysite_thumbnail.png";

const todoImages = [todo1, todo2, todo3, todo4, todo5];
const netImages = [net1, net2, net3, net4, net5];
const coinImages = [coin1, coin2, coin3, coin4];

const BASE_URL = `https://raw.githubusercontent.com/duckguya/myapi/main/portfolio/projects.json`;

export async function GetProjects() {
  const response = await axios.get(`${BASE_URL}`);

  //   contents[].image
  //   thumbnail
  // 이미지 데이터 넣기.
  let copy = [...response.data];

  copy.map((data) => {
    if (data.name === "TODO") {
      data.thumbnail = todo_thumbnail;
    }
    if (data.name === "NETFLIX") {
      data.thumbnail = net_thumbnail;
    }
    if (data.name === "CRYPTO") {
      data.thumbnail = coin_thumbnail;
    }
    if (data.name === "MYSITE") {
      data.thumbnail = mysite_thumbnail;
    }
  });

  return response.data;
}

export async function GetProjectDetail(id: number) {
  const response = await axios.get(`${BASE_URL}`);

  let copy = { ...response.data[id] };
  if (copy.name === "TODO") {
    copy.contents.map((d: any, index: number) => {
      d.image = todoImages[index];
    });
  }
  if (copy.name === "NETFLIX") {
    copy.contents.map((d: any, index: number) => {
      d.image = netImages[index];
    });
  }
  if (copy.name === "CRYPTO") {
    copy.contents.map((d: any, index: number) => {
      d.image = coinImages[index];
    });
  }

  return copy;
}

interface IData {
  sub_title: string;
  image: string;
  text: string;
}

export interface IProjectData {
  id: number;
  title: string;
  name: string;
  technologies: string[];
  description: string;
  demo_link: string;
  github_link: string;
  function: string[];
  contents: IData[];
  thumbnail: string;
}
