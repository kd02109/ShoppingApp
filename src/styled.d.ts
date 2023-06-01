// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    font: {
      large: string;
      medium: string;
      small: string;
      footer: string;
    };
    title: string;
    color: {
      blue: string;
      gray: string;
    };
    margin: {
      spacing11: string; //outerMargin
      spacing06: string; //cardMargin
    };
  }
}

export {};
