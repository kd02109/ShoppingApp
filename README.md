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
  - BrowserRouter와 createBrowserRouter의 차이에 대해서 이해할 수 있었다. createBrowserRouter에서는 DataRoiter를 제공하기 때문에 더 많은 기능을 사용할 수 있었다. (ex. data APIs) 따라서 NotFound 페이지에서 사용하고 있는 useRouteError 훅은 createBrowserRouter에서만 사용가능하였다. [링크](https://reactrouter.com/en/6.11.1/routers/picking-a-router)


### 2. 기본 CSS 설정
- styledComponent의 전역 스타일 설정하기, `createGlobalStyle`를 활용했습니다. 그리고 reset css를 적용했습니다. [reset css](https://meyerweb.com/eric/tools/css/reset/)
- styledComponent Theme을 활용해서 기본적으로 사용하는 폰트의 크기, 각 margin 값, color를 설정했습니다. 
- reset css로 인해 변화된 NotFound Page의 css를 수정했습니다.

### 3. 헤더 컴포넌트 만들기
- 헤더 컴포넌트를 작성했습니다. 최대한 피그마에서 작성한 디자인과 유사하게 만들도록 노력했습니다. 
- icon 같은 경우 svg 와 fontawsome 아이콘을 함께 활용해서 icon을 활용했습니다.
- 말풍선 같은 경우는 다음 블로그를 참고했습니다. [링크](https://www.ilikepixels.co.uk/bubbler/)

### 4. Footer 컴포넌트 만들기
- FooterComponent 구현. 

### 5. 메인 페이지 구현하기
#### 5-1. API 가지고 오기 
- react-query를 활용해서 API 데이터를 불러왔습니다. 
#### 5-2. Card 컴포넌트 만들기 
- Card Component를 만들었습니다. API의 타입 속성에 따라 설명 모양에 차이가 있어서 Description.jsx 컴포넌트에서 분기 처리를 하여 렌더링하도록 작성했습니다. 
- 가격과 follower 같은 경우는 쉼표 처리를 해주어야 하기 때문에 정규표현식을 활용했습니다. `toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')`
#### 5-3. 모달 만들기
- 모달 만들기는 예전에 만든 Modal component를 참고했습니다. [Modal Link](https://codesandbox.io/s/react-modal-5m26zu)

### 6. redux를 통한 상태관리
#### 6.1 청사진 구상하기
- 우선 rtk query를 사용하지 않고, react query를 활용하고자 한다. 따라서 react query로 받아온 데이터를 redux의 데이터로 구성하는 action을 만들어야 한다. 더불어 data를 받아 올 때, 데이터 내에서 bookmark에 관한 정보가 없기 때문에, bookmark 프로퍼티를 추가해주어야 한다. 

- 먼저 redux-toolkit을 활용해서 코드를 작성하였다. 총 3개의 action을 수행하도록 작성하였다. bookmark 추가 기능과 bookmark 해제 기능, react-query에서 받아온 데이터를 초기 데이터로 설정하는 것이다. 

- 이때 어디서 react query로 받아온 데이터를 처리해서 redux로 보내주는가가 문제 였다. 이를 해결하기 위해 가장 최상위인 App에서 데이터를 받아오고 이를 dispatch하도록 구상하였다. 

#### 6.2 작성 중 마주친 문제점
- bookmark 컴포넌트를 만들고, useEffect를 활용해서 App.jsx에서 최초로 API 데이터를 redux로 보내도록 설정하였다. 이때 발생하는 문제는, 페이지를 새로고침 하였을때, react query에서 cashe된 데이터를 활용하기에 새롭게 보내는 데이터가 없다는 것을 확인할 수 있었다. 또한 매번 새로 고침 할때마다 데이터가 초기화 되기 때문에 북마크 기능이 소용이 없었다. 이를 해결하기 위해 localstorage를 활용했다. 

#### 6.3 redux-persist 적용하기 [참고](https://velog.io/@_jouz_ryul/LocalStorage-SessiongStorage-%EA%B7%B8%EB%A6%AC%EA%B3%A0-Redux-Persist)
- redux 과련 라이브러리 중에서 local storage를 적용해주는 라이브러리를 사용해서 코드를 작성했다. 이때 redux-toolkit으로 작성한 코드를 적용하는 과정에서 애러가 지속적으로 발생해, toolkit을 활용하지 않고 일반 redux와 react-redux를 활용하는 코드로 수정하였다.(아직 toolkit에 익숙하지 않아 어디서 발생하는 오류인지 찾을 수 없어 코드를 전체적으로 수정했다.!) 추가적으로 localStorage에 저장된 데이터가 있다면, react-query 데이터를 활용하지 않고, localStorage 데이터를 활용하도록 initialvalue를 수정하였다. 
- 정상 작동을 테스트 해보니 작동은 정상적으로 하였다. 다만 localStorage를 적용하니 메인 페이지의 상품페이지가 고정된 상품만 보여주게 되어 이를 수정하기 위해 random으로 숫자를 뽑는 함수를 작성했다. 

### 7. filter Component
