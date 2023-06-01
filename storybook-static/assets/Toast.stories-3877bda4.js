import{j as s}from"./jsx-runtime-7f32a618.js";import{c as C,a as d,P as p,F as c,s as x}from"./store-0798463d.js";import{t as m}from"./theme-bf917847.js";import"./index-0e95cdc0.js";import"./_commonjsHelpers-725317a4.js";const f=C`
    0%{
        transform: translateX(100%);
    }
    50%{
        transform: translateX(0%);
    }
`,o=d.div`
  padding: 18px 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.15);
  border-radius: 12px;
  gap: 8px;
  span {
    font-weight: 600;
    font-size: ${t=>t.theme.font.small};
  }

  animation: ${f} 1s ease-in-out;
`;function l({toastBoomark:t,label:e,...g}){return s.jsx(s.Fragment,{children:t?s.jsxs(o,{children:[s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",children:s.jsx("path",{d:"M11.9994 20.1062L6.18253 23.7753C5.92556 23.9465 5.65691 24.0199 5.37658 23.9954C5.09625 23.971 4.85096 23.8731 4.64071 23.7019C4.43046 23.5307 4.26693 23.3164 4.15013 23.0591C4.03332 22.8018 4.00996 22.5146 4.08005 22.1976L5.62187 15.2631L0.470782 10.6035C0.237173 10.3833 0.0914008 10.1324 0.0334656 9.85059C-0.0244695 9.56881 -0.00718245 9.29388 0.0853268 9.0258C0.178771 8.75674 0.318936 8.53659 0.505824 8.36537C0.692711 8.19415 0.949681 8.08408 1.27673 8.03516L8.07477 7.41143L10.7029 0.880566C10.8197 0.587044 11.001 0.366903 11.2467 0.220142C11.4925 0.0733806 11.7434 0 11.9994 0C12.2564 0 12.5073 0.0733806 12.7521 0.220142C12.9969 0.366903 13.1782 0.587044 13.2959 0.880566L15.924 7.41143L22.7221 8.03516C23.0491 8.08408 23.3061 8.19415 23.493 8.36537C23.6799 8.53659 23.82 8.75674 23.9135 9.0258C24.0069 9.29486 24.0247 9.57028 23.9667 9.85206C23.9088 10.1338 23.7626 10.3843 23.528 10.6035L18.3769 15.2631L19.9188 22.1976C19.9888 22.5156 19.9655 22.8032 19.8487 23.0605C19.7319 23.3179 19.5683 23.5317 19.3581 23.7019C19.1478 23.8731 18.9026 23.971 18.6222 23.9954C18.3419 24.0199 18.0732 23.9465 17.8163 23.7753L11.9994 20.1062Z",fill:"#FFD361"})}),e?s.jsx("span",{children:e}):s.jsx("span",{children:"상품이 북마크에 추가되었습니다."})]}):s.jsxs(o,{children:[s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",children:s.jsx("path",{d:"M11.9994 20.1062L6.18253 23.7753C5.92556 23.9465 5.65691 24.0199 5.37658 23.9954C5.09625 23.971 4.85096 23.8731 4.64071 23.7019C4.43046 23.5307 4.26693 23.3164 4.15013 23.0591C4.03332 22.8018 4.00996 22.5146 4.08005 22.1976L5.62187 15.2631L0.470782 10.6035C0.237173 10.3833 0.0914008 10.1324 0.0334656 9.85059C-0.0244695 9.56881 -0.00718245 9.29388 0.0853268 9.0258C0.178771 8.75674 0.318936 8.53659 0.505824 8.36537C0.692711 8.19415 0.949681 8.08408 1.27673 8.03516L8.07477 7.41143L10.7029 0.880566C10.8197 0.587044 11.001 0.366903 11.2467 0.220142C11.4925 0.0733806 11.7434 0 11.9994 0C12.2564 0 12.5073 0.0733806 12.7521 0.220142C12.9969 0.366903 13.1782 0.587044 13.2959 0.880566L15.924 7.41143L22.7221 8.03516C23.0491 8.08408 23.3061 8.19415 23.493 8.36537C23.6799 8.53659 23.82 8.75674 23.9135 9.0258C24.0069 9.29486 24.0247 9.57028 23.9667 9.85206C23.9088 10.1338 23.7626 10.3843 23.528 10.6035L18.3769 15.2631L19.9188 22.1976C19.9888 22.5156 19.9655 22.8032 19.8487 23.0605C19.7319 23.3179 19.5683 23.5317 19.3581 23.7019C19.1478 23.8731 18.9026 23.971 18.6222 23.9954C18.3419 24.0199 18.0732 23.9465 17.8163 23.7753L11.9994 20.1062Z",fill:"#DFDFDF",fillOpacity:"1"})}),e?s.jsx("span",{children:e}):s.jsx("span",{children:"상품이 북마크에서 제거되었습니다."})]})})}l.__docgenInfo={description:"",methods:[],displayName:"Toast"};const{store:h}=x,F={title:"Toast",component:l,decorators:[t=>s.jsx(p,{store:h,children:s.jsx(c,{theme:m,children:s.jsx(t,{})})})]},r={args:{label:"Hello",toastBoomark:!1}};var a,n,i;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    label: "Hello",
    toastBoomark: false
  }
}`,...(i=(n=r.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};const T=["ToastUI"];export{r as ToastUI,T as __namedExportsOrder,F as default};
//# sourceMappingURL=Toast.stories-3877bda4.js.map
