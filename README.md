# fe-sprint-coz-shopping

## 개요

- 장바구니 기능이 있는 상품페이지를 구현합니다. 기본적인 디자인은 해당 링크에서 확인할 수 있습니다. 해당 프로젝트의 목적은 주어진 디자인에 맞추어 기능을 구현하는 방법론을 학습합니다.
- 에자일 방법론 중 스크럼 방법을 활용해서 진행합니다.
- [디자인 링크](https://www.figma.com/file/TfWAvMXegGEJiS3etqOSfs/FE-S4-project?type=design&node-id=3%3A77&t=3LJWT6Y8o2tLK7f2-1)

## 구현 요소

- 크게 3개의 페이지로 구성됩니다. Home, Bookmark, ProductList입니다.

### 1. Router 설정

- 기존 CRA로 형성한 react 템플릿에서는 BrowserRouter로 감싸는 형태로 작업하였을 때 정상적으로 출력이 되었지만, vite 템플릿에서는 작동이 되지 않아서 공식 홈페이지 듀토리얼을 참고하면서 다시 진행하였습니다.
- [공식 블로그](https://reactrouter.com/en/main/start/tutorial)
  - 4개의 페이지를 만들어서 기본 router 구성 Home, ProductList, Bookmark, NotFound

### 2. 기본 CSS 설정
- styledComponent의 전역 스타일 설정하기, `createGlobalStyle`를 활용했습니다. 그리고 reset css를 적용했습니다. [reset css](https://meyerweb.com/eric/tools/css/reset/)
- styledComponent Theme을 활용해서 기본적으로 사용하는 폰트의 크기, 각 margin 값, color를 설정했습니다. 
- reset css로 인해 변화된 NotFound Page의 css를 수정했습니다.