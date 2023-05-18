# fe-sprint-coz-shopping

## 개요

- 장바구니 기능이 있는 상품페이지를 구현합니다. 기본적인 디자인은 해당 링크에서 확인할 수 있습니다. 해당 프로젝트의 목적은 주어진 디자인에 맞추어 기능을 구현하는 방법론을 학습합니다.
- 에자일 방법론 중 스크럼 방법을 활용해서 진행합니다. github의 프로젝트를 활용했습니다. [링크](https://github.com/users/kd02109/projects/1/views/1)
- [디자인 링크](https://www.figma.com/file/TfWAvMXegGEJiS3etqOSfs/FE-S4-project?type=design&node-id=3%3A77&t=3LJWT6Y8o2tLK7f2-1)

## 기술스택
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black"><img src="https://img.shields.io/badge/Css-1572B6?style=for-the-badge&logo=Css&logoColor=white"><img src="https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=Redux&logoColor=purple"><img src="https://img.shields.io/badge/Prettier-%5E2.8.8-yellow?logo=prettier&style=for-the-badge">
## 구현 요소(명세서)
### Main page(메인 페이지)

- path: /
- Header와 Footer를 갖고 있으며, 해당 GNB와 Footer는 어느 페이지를 가더라도 항상 존재해야 한다.
  - Header 내 햄버거 버튼 존재, 햄버거 버튼 펼칠 시 내부에
      - Header는 페이지 내 스크롤이 발생하더라도 항상 상단에 붙어있어야 한다.
      - 메인로고 → 클릭하면 / 페이지로 이동
      - 햄버거 버튼
          - 상품리스트 → 클릭하면 /products/list 페이지로 이동
          - 북마크페이지 → 클릭하면 /bookmark 페이지로 이동
  - Footer
      - 일련의 텍스트 정보들
- 해당 메인페이지에서는
    - 모든 타입의 상품 정보를 4개 보여준다 (필터기능 없이)
      - 보여지는 상품의 타입은 혼합되어 있을 수 있다 (상품, 카테고리, 기획전, 브랜드)
    - 모든 타입의 북마크 된 상품 정보를 4개 보여준다 (필터기능 없이)
      - 보여지는 상품의 타입은 혼합되어 있을 수 있다 (상품, 카테고리, 기획전, 브랜드)
<hr/>

### Products list page(상품리스트 페이지)

- path: /products/list
- 서버에서 제공하는 상품 리스트들을 확인할 수 있는 페이지이며   
  - 무한 스크롤을 통해 상품들을 계속 보여줄 수 있어야 한다 .무한스크롤은 쿼리파라미터를 통한 매번 api call이 아닌, 최초 1번 api call을 통해 전체 데이터를 받아온 후 적용합니다.
- 상품은 각 상품별로 타입이 존재한다. (상품, 카테고리, 기획전, 브랜드)
- 상단의 필터 버튼을 통해 상품을 타입별로 조회해 보여줄 수 있어야 한다.
- 각 상품을 클릭하면 해당 상품의 사진을 보여주는 모달을 띄울 수 있어야 한다.
- 각 상품에 존재하는 북마크 버튼을 눌러 원하는 상품을 북마크 할 수 있어야 한다.
- 이미 북마크 된 상품의 경우, 북마크 버튼에 표시를 해주어야 하며 다시 한 번 북마크 버튼을 클릭 시 해당 상품을 북마크에서 삭제한다.
- 북마크 버튼을 클릭하여 북마크에 추가 할 때 그리고 삭제할 때는 사용자에게 알림 토스트가 표시되어야 한다.
<hr/>

### Bookmark page(북마크 페이지)

- path: /bookmark
- 사용자가 북마크 한 상품 들을 확인할 수 있는 페이지로 무한 스크롤이 가능해야 한다.
- 상품리스트 페이지에 존재하는 필터링 버튼과 같은 버튼을 이용해 상품을 타입별로 필터해 보여줄 수 있어야 한다.


# 진행 과정 정리 

### 1. Router 설정

- 기존 CRA로 형성한 react 템플릿에서는 BrowserRouter로 감싸는 형태로 작업하였을 때 정상적으로 출력이 되었지만, vite 템플릿에서는 작동이 되지 않아서 공식 홈페이지 듀토리얼을 참고하면서 다시 진행하였습니다.
- [공식 블로그](https://reactrouter.com/en/main/start/tutorial)
  - 4개의 페이지를 만들어서 기본 router 구성 Home, ProductList, Bookmark, NotFound
  - BrowserRouter와 createBrowserRouter의 차이에 대해서 이해할 수 있었다. createBrowserRouter에서는 DataRoiter를 제공하기 때문에 더 많은 기능을 사용할 수 있었다. (ex. data APIs) 따라서 NotFound 페이지에서 사용하고 있는 useRouteError 훅은 createBrowserRouter에서만 사용가능하였다. [링크](https://reactrouter.com/en/6.11.1/routers/picking-a-router)
- App을 절대경로로 설정하여 Router 작업을 진행하였습니다. 초기에 createBrowserRouter에서 제공하는 DataAPIs가 매우 매력적으로 다가왔습니다. 특히 DataAPIs가 제공하는 여러 훅중에서 useRouteError가 매력적이었습니다. 설정에 따라서 router 애러 뿐만 아니라, 다른 애러도 캡쳐해서 페이지를 자동으로 전환 해주는 기능이 인상깊었습니다. 이러한 APU를 사용하기 위해서 createBrowserRouter를 적용하였습니다. 
- 여기서 문제는 createBrowserRouter를 사용한 경우 Outlet과 함께 사용되는데, 저는 각각의 페이지에 prop전달을 하고 싶어서 Routes와 Route를 활용했습니다.
```js
// ./routers/Routers.jsx
import { createBrowserRouter } from "react-router-dom";
import NotFound from "../pages/NotFound";
import ProductLists from "../pages/ProductLists";
import Bookmark from "../pages/Bookmark";
import App from "../App";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products/list",
        element: <ProductLists />,
      },
      {
        path: "/bookmark",
        element: <Bookmark />,
      },
    ],
    errorElement: <NotFound />,
  },
]);

export default router;

```

```js
// ./App.jsx
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ProductLists from "./pages/ProductLists";
import Bookmark from "./pages/Bookmark";
import useHeaderClick from "./hook/useHeaderClick";
import NotFound from "./pages/NotFound";
import useApi from "./hook/useApi";
import { useDispatch } from "react-redux";
import { dispatchData } from "./redux/action/actions";
import { useEffect, useState } from "react";
import Toast from "./components/Toast";

function App() {
  // header 클릭 적용하기
  const { click, setClick, handleClick } = useHeaderClick();
  //api 불러오기
  const { data, isLoading } = useApi();

  //Toast 조정
  const [toast, setToast] = useState(false);
  const [toastBookmar, setToastBookmark] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => {
      setToast(false);
    }, 1000);
    return () => {
      clearTimeout(id);
    };
  }, [toast, toastBookmar]);
  //query 데이터 redux에 저장하기
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(dispatchData(data));
  }, []);

  return (
    <>
      <Header click={click} setClick={setClick} handleClick={handleClick} />
      <Routes>
        <Route
          path="*"
          element={
            <Home
              handleClick={handleClick}
              isLoading={isLoading}
              setToast={setToast}
              setToastBookmark={setToastBookmark}
            />
          }
        />
        <Route
          path="/products/list"
          element={
            <ProductLists
              handleClick={handleClick}
              setToast={setToast}
              setToastBookmark={setToastBookmark}
            />
          }
        />
        <Route
          path="/bookmark"
          element={
            <Bookmark
              handleClick={handleClick}
              setToast={setToast}
              setToastBookmark={setToastBookmark}
            />
          }
        />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      {toast && <Toast toastBookmar={toastBookmar} />}
      <Footer handleClick={handleClick} />
    </>
  );
}

export default App;

```

💣 다음과 같이 설정 하였을 때, 콘솔에서 다음과 같은 경고창을 보여지게 됩니다. 
```
history.ts:487 You rendered descendant <Routes> (or called `useRoutes()`) at "/" (under <Route path="/">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="/"> to <Route path="*">.
```
- 제시한 해결방법 처럼 path를 수정한 상태에서도 이와 같은 문제가 발생하고 있습니다. createBrowserRouter와 Routes를 혼합해서 사용한 문제 인듯 하여, 하나의 방식만 사용하도록 수정이 필요할 것 같습니다.

### 2. 기본 CSS 설정
- styledComponent의 전역 스타일 설정하기, `createGlobalStyle`를 활용했습니다. 그리고 reset css를 적용했습니다. [reset css](https://meyerweb.com/eric/tools/css/reset/)
- styledComponent Theme을 활용해서 기본적으로 사용하는 폰트의 크기, 각 margin 값, color를 설정했습니다. 
- reset css로 인해 변화된 NotFound Page의 css를 수정했습니다.

### 3. 헤더 컴포넌트 만들기
- 헤더 컴포넌트를 작성했습니다. 최대한 피그마에서 작성한 디자인과 유사하게 만들도록 노력했습니다. 
- icon 같은 경우 svg 와 fontawsome 아이콘을 함께 활용해서 icon을 활용했습니다.
- 말풍선 같은 경우는 다음 블로그를 참고했습니다. [링크](https://www.ilikepixels.co.uk/bubbler/)
- 헤더 컴포넌트의 햄버거를 클릭하면 Dropdown 형태로 메뉴가 등장해야 합니다. 이때 햄버거 버튼이 클릭 되어야 햄버거가 사라지게 되는 형태가 불편하다고 느꼈습니다. 그래서 전역에서 state를 감지해서 사용할 수 있도록 수정했습니다. component hook useHeaderClick을 만들어서 App 상에서 state를 관리하도록 하였습니다. 햄버거 버튼이 클릭 되어 DropDown 컴포넌트가 보이는 상태라면, 어떤 화면을 클릭해도 다시 닫히도록 구성했습니다.

### 4. Footer 컴포넌트 만들기
- FooterComponent 구현. 

### 5. 메인 페이지 구현하기
#### 5-1. API 가지고 오기 
- react-query를 활용해서 API 데이터를 불러왔습니다. 
- 초기에는 api 함수만을 따로 분리하였는데, 데이터를 불러와서 결과를 받는 hook 또한 분리하는 것이 좋을 듯 하여 useApi component hook을 만들었습니다.
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

- redux에서 actions을 받고 reducer을 하는 과정에서 store에 저장된 데이터가 변경되어 특정 과정에서 애러가 발생하는 것을 확인했습니다. 이를 수정하기 위해서 redux-persist가 저장하는 데이터 형태로 state의 데이터 형태를 수정하였으며, 각각의 action이 반환하는 데이터의 형태도 일치시켰습니다.

### 7. filter Component
- filter 버튼은 고정된 형태입니다. 데이터가 변화될 일이 없기 때문에, index로 key 값을 주어도 문제가 없었습니다. 
- 각각의 버튼에 사용할 이미지를 배열 형태로 가지고 오고, 각 버튼의 이름또한 배열로 정리했습니다.
- 버튼이 클릭 되었을 때, 버튼을 강조하기 위한 css 수정이 필요했습니다. 이를 위해 numState를 useState를 통해 state로 만들었습니다. 버튼이 클릭되었을 떄, 각 버튼의 index에 맞추어 numState의 값을 index의 값으로 수정했습니다. 이를 통해서 index와 numState의 값이 같을때, 해당 버튼이 클릭 되었다는 표시를 할 수 있도록 작성하였습니다. 

### 8. 북마크 페이지 & 상품페이지
- 두 페이지의 형태는 데이터를 보여주는 방식만 다를 뿐 모두 똑같이 작성했습니다. 다만 같은 코드가 너무 똑같이 반복되어 모든 기능을 구현후에 코드 리펙토링을 해야 할 것 같습니다.
- 또한 numState의 상태에 따라 화면에 뿌려줄 데이터를 추렸습니다. 이 과정에서도 같은 코드를 5번이나 반복해서 역시 이후에 리펙토링이 필요할 것 같습니다.


### 9. Toast UI 페이지 구성
- 처음 생각한 방식은 redux를 통한 toastUI 구성이었습니다. 마침 CH3 redux를 학습할 당시에 예시 코드에 redux middleware 중 하나인 thunk를 활용하여 toast ui작업을 한 코드가 있어서 이를 리펙토링 하여 작업을 하면 될 것 같았습니다. 
- 하지만 redux를 활용하기 위해서 크게 두 가지 문제가 있었습니다. 첫 번째로 하나의 기능 구현을 위해서 새로운 reducer를 생성하고 전역 변수로 상태를 관리하는게 과연 맞을까? 라는 의문을 가지게 되었습니다. 하나의 기능을 위해 구현할 부가적인 코드가 너무나 많아진다고 생각하였습니다. 또한 현재 구현하는 APP의 규모가 그리 크지 않기 때문에 굳이 toast를 비동기로 처리해야 할 필요를 느끼지 못했습니다. 
- 그래서 useState와 useEffect를 활용하여 Toast UI를 작업하도록 하였습니다.
- 처음에는 Bookmark 컴포넌트에 Toast 컴포넌트를 작성하여 작업을 하려 했습니다. 하지만 이때 각 Card 컴포넌트 별로 Toast 컴포넌트의 위치가 잡혀지고 최대 100개의 Toast 컴포넌트가 생성된다는 것을 확인할 수 있었습니다. 이는 고정된 하나의 position을 잡는 것에 문제가 있었습니다. 그래서 Toast 컴포넌트의 위치를 APP에 위치하여 하나의 컴포넌트 만을 state 처리를 통해 불러오도록 하였습니다.
- 총 두개의 state를 활용하였습니다. toastBookmark와 toast state를 활용하였습니다. toastBookmar는 보여주어야 할 Toast의 형태를 결정하는 state이고 toast state는 toast를 화면에 렌더링을 트리거하는 state로 작동하도록 구성하였습니다. 
- 이후 useEffect를 통해 setTimeout을 설정해서 작업을 하였습니다. 의존성 배열에  toastBookmark와 toast를 추가하여 해당 값이 변경될 때 마다 useState가 실행되도록 작성하였습니다.


### 10. 무한 스크롤 구현
- "react-intersection-observer"를 통해 구현하였습니다. 
- 화면 간의 이동중, 불러온 무한 스크롤이 유지 되지 않는 문제를 해결해야 할 것 같습니다. 

# CODE REFACTORING

## 1. Router 수정하기
- 처음으로 createBrowserRouter를 프로젝트에 시도해 보았을 때, 다음과 같은 경고가 콘솔에 나타났습니다. 

```
history.ts:487 You rendered descendant <Routes> (or called `useRoutes()`) at "/" (under <Route path="/">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="/"> to <Route path="*">.
```
- 이는 Routes를 중첩으로 사용하여 생긴 위험 경고 였습니다. 그래서 createBrowserRouter, BrowserRouter중 하나를 선택해서 적용을 해야 했습니다. 

- 이를 위한 해결 방법으로 Outlet을 활용하는 것이었습니다. 하지만 저의 코드에서 전역에서 관리해야 할 state를 뿌려 주고 있는 상황에서 Outlet에서 Prop 전달을 할 수 있는 방법이 없었습니다. 따라서  contextAPI혹은 reducer를 활용해서 이를 관리하고자 합니다. 
- 물론 useRoutes나 loader와 같은 새로운 기능을 활용하면 되지만, 제한된 시간 내에 이를 다시 학습하는 것은 어려움이 있었습니다. 그래서 이를 새로운 reducer를 만들어서 관리하고자 합니다. 추후 createBrowerRouter를 학습하고자 합니다.

## 2 CSS 수정하기
- Theme의 형태를 변경했습니다. 
- GlobalStyle의 #root에 base font-size를 지정한 후 모드 상대 수치인 rem으로 변경했습니다.
- margin 관리를 spacing06, spacing11로 변경했습니다. 이는 해당 사이트를 참고하여 변경했습니다. [링크](https://carbondesignsystem.com/guidelines/spacing/overview)

## 3 Util Directory의 getRandomForSlice 수정하기
- 처음의 수정 방향은 random으로 뽑은 숫자가 배열 데이터의 길이 - 4보다 클시 주어진 배열에서 `[99,0,1,2]`식으로 뽑아낼 방식으로 수정하려 했다. 구현한 코드는 다음과 같다.

```js
export default getRandomForSlice(data){
  const random = Math.floor(Math.random() * 100);
  const { length } = data;
  const sliceData = [];
  for (let i = random; i < random + 4; i++) {
    if (i > length - 1) {
      sliceData.push({...data[i - length]});
    } else {
      sliceData.push({...data[i]});
    }
  }
  return sliceData;
}
``` 

- 이렇게 해서 새로운 배열을 만들고 이를 state로 관리 할때 문제가 발생하였다. bookmark가 될시 별 마크의 색이 변화해야 하는데, 기존의 state형태를 고정으로 가지고 있기에 redux와 연동된 새로운 데이터를 받아오지 못하고 setState를 자식 컴포넌트에게 넘겨 수정해주어야 했다. 이는 불필요한 작업이라고 느껴서 기존의 방식처럼 number 데이터를 넘겨주는 형식을 사용하는 것으로 채택하였다. 
- 만약 이렇게 뽑아온 배열을 state로 관리하지 않을시 북마크 클릭시 모든 상품 리스트가 재렌더링 되기 때문에, 사용 측면에서 불편함을 경험했다.
- 그래서 기존의 RandomNum을 뽑아주는 형식을 사용하였고 코드를 최종적으로 다음과 같이 수정하였다.
```js
export default function getRandomForSlice(data, chooseNum) {
  return Math.floor(Math.random() * data.length - chooseNum);
}
```
- 뿌려줄 데이터의 개수가 변경, 혹은 전체 데이터의 개수가 변경될 것을 고려했습니다.
- 렌더링 할 데이터의 개수가 변화할 경우 Home에서 상수로 관리하고 있는 변수만 조절할 경우 자동으로 렌더링 되도록 수정했습니다.


## 4. 헤더 컴포넌트의 햄버거 아이콘 클릭 전역에서 관리하기.
- 이전에는 APP에 state를 설정해서 각 페이지에 뿌려주는 형식으로 진행했습니다. 하지만 router를 수정 하는 과정에서 각 기능을 분리하는 게 좋을 것 같아 이를 전역 관리 변수로 변경했습니다.
- hambegerReducer를 만들어 관리를 하였으며, 각 페이지에서 Dropdown 컴포넌트가 열려 있을시 화면 어디를 클릭해도 닫히도록 하기 위해서 별개의 훅 useClick을 만들어서 코드를 수정했습니다.

## 5. Toast UI 작동 방식 refactioring.

- 최상위 컴포넌트인 APP에서 전역으로 toast관련 state를 설정하여 각각의 페이지의 카드 컴포넌트에 뿌려주는 방식으로 tost UI를 만들었습니다. 이때 마주친 문제는 총 두 가지 였습니다. 
  1. state 관리가 어려웠습니다. 그렇게 깊은 구조도 아니지만, state가 잘못 되었을 시 수정 하는 방법이 쉽지 않았습니다.
  2. 하나의 toast ui를 관리하는 것은 충분했지만, 배열 형식으로 state를 관리하고자 할때 하드 코딩이 되고 하나의 state에 너무 많은 값을 관리하게 되었습니다.


https://github.com/kd02109/fe-sprint-coz-shopping/assets/57277708/2afe1100-1ddc-4ffb-b4bb-56fbe0004549

- useReducer를 활용하면 데이터가 복잡해지는 구조는 해결할 수 있지만, 여전히 state 관리가 어렵다는 문제가 있었습니다. 따라서 contextAPI와 함께 사용을 해야 했습니다. 하지만 현재 전역 상태관리로 redux를 사용하고 있기 때문에 redux를 활용하기로 하였습니다. 
- 비동기로 동작하여 데이터를 처리해야 하기 때문에 관련 middleware인 redux-thunk를 설치하여 새로운 reducer를 만들었습니다. (toastReducer)
- toastReducer는 기본적으로 데이터를 비워둔 상태로 관리하는 것을 목표로 했습니다. 빈 배열을 초기 데이터로 설정하여 새로운 데이터가 들어오면 하나씩 쌓이고 처음 들어온 데이터 부터 제거되는 queue를 차용해서 reducer의 구조를 작성했습니다.


https://github.com/kd02109/fe-sprint-coz-shopping/assets/57277708/948d77bf-1c1c-4be4-90be-18f3f15a0e93


## 6. MODAL 버그 픽스
- 기존에는 Modal을 Card 컴포넌트 안에 위치하게 하였습니다. 이때 정상적으로 작동하지만, 북마크 페이지에서 북마크를 해제할시 Card component가 unmount되면서 Modal 또한 강제로 종료되는 현상이 있었습니다. (위의 영상에서 확인할 수 있습니다.)
- 따라서 Modal 컴포넌트를 전역에서 설정해서 redux를 통해 상태 관리를 하도록 수정하였습니다. 이를 통해 버그를 해결할 수 있었습니다. 


https://github.com/kd02109/fe-sprint-coz-shopping/assets/57277708/32ca3a48-bfb4-4c55-9801-0879a5cea739


## 7. 컴포넌트 수정 
#### 1. Card 컴포넌트 수정 
```js
// ./pages/home.js
            <section>
              <Title>상품 리스트</Title>
              <List>
                {state
                  .slice(randomNumber, randomNumber + CHOOSENUMBER)
                  .map((item) => (
                    <li key={item.id}>
                      <Card data={item} />
                    </li>
                  ))}
              </List>
            </section>
```
- 위의 코드를 다음과 같이 Component로 분리하여 수정하였습니다. 
```js
            <CardList
              title={"상품 리스트"}
              state={state.slice(randomNumber, randomNumber + CHOOSENUMBER)}
            />
```
#### 2. 문자열을 객체로 관리
- 이전에는 직접 하드 타이핑 하는 식으로 문자열을 사용했습니다. 
- 반복적으로 사용되는 문자열을 객체로 관리하여 실수가 나오는 부분을 줄였습니다. 
```js
// ./src/components/Description.jsx
const cardType = {
  product: "Product",
  category: "Category",
  brand: "Brand",
  exhibition: "Exhibition",
};
```

#### 3. 북마크페이지, 상품리스트 페이지 통합관리
- 기존에는 뿌려주는 데이터만 다르고 동일한 페이지를 하드코딩해서 분리하여 사용하고 있었습니다.
- 따라서 컴포넌트와 페이지의 역할을 분리했습니다. 두 페이지의 공통된 부분을 컴포넌트로 뽑아냈습니다. 각각의 페이지는 컴포넌트에 필요한 데이터를 정제하여 뿌려주는 역할을 하도록 수정했습니다. 

#### 4. 숫자 타입을 통한 페이지 관리의 불명확성 
- 숫자 타입으로 필터 컴포넌트를 관리하여 뿌려줄 데이터를 정했습니다.
```js
const [numState, setNumState] = useState(0);
 {numState === 0 &&
            state
              .filter((item) => item.bookmarked)
              .map((item) => (
                <li key={item.id}>
                  <Card data={item} />
                </li>
              ))}
```
- 이때의 문제점은 어떤 데이터를 적용하는지가 명확하지 않았으며, 데이터를 분류하는 방법도 명확히 알기 힘들다는 점을 알 수 있었습니다. 그래서 숫자가 아닌 상품 타입을 문자열로 작성하여 관리하도록 하였습니다. 

```js
const filterSet = {
  all: "전체",
  product: "상품",
  categoryl: "카테고리",
  exhibition: "기획전",
  brand: "브랜드",
};

 {filterState === filterSet.all && (
        <CardList state={state.slice(0, dataNum)} />
      )}
```

- 다음과 같이 뿌려줄 데이터를 관리하는 필터를 문자열로 하여 명확히 코드를 보고 의도를 파악할 수 있도록 하였습니다.
