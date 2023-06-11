import{j as r}from"./jsx-runtime-7f32a618.js";import"./index-0e95cdc0.js";import{a as i,P as y,F as w,s as C}from"./store-0798463d.js";import{u as B,B as S,d as D}from"./Bookmark-94d2786d.js";import{t as P}from"./theme-bf917847.js";import{G as T}from"./GlobalStyle-7a09ab27.js";import"./_commonjsHelpers-725317a4.js";const s=i.div`
  width: 264px;
  margin-top: 6px;
  display: flex;
  justify-content: space-between;
`,o=i.div`
  display: flex;
  flex-direction: column;
`,x=i(o)``,n=i.span`
  font-size: ${e=>e.theme.font.small?e.theme.font.small:"14px"};
  font-weight: 600;
  text-align: start;
`,f=i(n)`
  font-weight: 400;
  margin-top: 3px;
  text-align: start;
`,m=i(n)`
  text-align: end;
  color: ${e=>e.color?e.theme.color.blue:"black"};
`,p=i(f)`
  text-align: end;
`,l={product:"Product",category:"Category",brand:"Brand",exhibition:"Exhibition"};function b({type:e,title:t,follower:d,discount:a,price:_,sub:k}){if(e===l.product)return r.jsxs(s,{children:[r.jsx(o,{children:r.jsx(n,{children:t})}),r.jsxs(x,{children:[r.jsxs(m,{color:"percent",children:[a,"%"]}),r.jsxs(p,{children:[_.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","),"원"]})]})]});if(e===l.category)return r.jsx(s,{children:r.jsx(o,{children:r.jsx(n,{children:t})})});if(e===l.brand)return r.jsxs(s,{children:[r.jsx(o,{children:r.jsx(n,{children:t})}),r.jsxs(x,{children:[r.jsx(m,{children:"관심고객수"}),r.jsx(p,{children:d.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")})]})]});if(e===l.exhibition)return r.jsxs(s,{children:[r.jsxs(o,{children:[r.jsx(n,{children:t}),r.jsx(f,{children:k})]}),r.jsx(x,{})]})}b.__docgenInfo={description:"",methods:[],displayName:"Description"};const v=i.article`
  width: 260px;
  height: 264px;
  cursor: pointer;
  margin: 12px 0px;
`,E=i.div`
  background-image: url(${e=>e.back?e.back:e.image});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  width: 264px;
  height: 210px;
  border-radius: 10px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;function j({data:e,...t}){const d=B(),a=()=>{d(D(e.id,e.brand_image_url?e.brand_image_url:e.image_url,e.title?e.title:e.brand_name,e.bookmarked))};return e||(e={id:90,type:"Exhibition",title:"맥북 모음전",sub_title:"애플 케어 추가 할인",brand_name:null,price:null,discountPercentage:null,image_url:"https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2020&q=80",brand_image_url:null,follower:null}),r.jsx(r.Fragment,{children:r.jsxs(v,{onClick:a,children:[r.jsx(E,{back:e.brand_image_url,image:e.image_url,children:r.jsx(S,{bookmark:e.bookmarked,id:e.id})}),r.jsx(b,{type:e.type,title:e.title?e.title:e.brand_name,follower:e.follower,discount:e.discountPercentage,price:e.price,sub:e.sub_title})]})})}j.__docgenInfo={description:"",methods:[],displayName:"Card"};const{store:G}=C,A={title:"Card",component:j,decorators:[e=>r.jsx(y,{store:G,children:r.jsxs(w,{theme:P,children:[r.jsx(T,{}),r.jsx(e,{})]})})],argTypes:{}},c={args:{}};var h,u,g;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {}
}`,...(g=(u=c.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};const N=["CardComponent"];export{c as CardComponent,N as __namedExportsOrder,A as default};
//# sourceMappingURL=Card.stories-a44623b0.js.map
