import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    backColor: string;
    pointBackColor: string;
    mainColor: string;
    pointColor: string;
    // dark: {
    //   veryDark: string;
    //   darker: string;
    //   lighter: string;
    // };
    // light: {
    //   darker: string;
    //   lighter: string;
    // };
  }
}
