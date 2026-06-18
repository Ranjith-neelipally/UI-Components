import{j as t}from"./tslib.es6-DItdwr9I.js";import{p as o,a as i,f as I,b as g}from"./index-uMjDO6cE.js";import{r as h,R as z}from"./index-l2PZgWEW.js";import{r as me}from"./index-CaNG7YX3.js";const fe=o.button`
  display: ${({$display:e})=>e||"flex"};
  justify-content: ${({$justifyContent:e})=>e||"center"};
  align-items: ${({$alignItems:e})=>e||"center"};
  background-color: ${({$backgroundColor:e,...r})=>e||i(r).primary};
  color: ${({$fontColor:e,...r})=>e||i(r).primaryContrastText};
  padding: ${({$padding:e})=>e||"10px 24px"};
  border-radius: ${({$borderRadius:e})=>e||"12px"};
  border: ${({$border:e})=>e||"none"};
  cursor: ${({$cursor:e})=>e||"pointer"};
  font-size: ${({$fontSize:e})=>e||"14px"};
  font-weight: ${({$fontWeight:e})=>e||"600"};
  line-height: ${({$lineHeight:e})=>e||"16px"};
  margin: ${({$margin:e})=>e||"0"};
  width: ${({$display:e})=>e==="flex"?"fit-content":"auto"};
  white-space: nowrap;
  outline: none;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);

  &:hover:not(:disabled) {
    background-color: ${({$backgroundColor:e,...r})=>e||i(r).primaryHigh};
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    box-shadow: none;
  }
`,F=({children:e="hello world",type:r="button",...n})=>t.jsx(fe,{type:r,...n,children:e});F.__docgenInfo={description:"",methods:[],displayName:"Button",props:{$backgroundColor:{required:!1,tsType:{name:"string"},description:""},$fontColor:{required:!1,tsType:{name:"string"},description:""},$fontSize:{required:!1,tsType:{name:"string"},description:""},$fontWeight:{required:!1,tsType:{name:"string"},description:""},$textAlign:{required:!1,tsType:{name:"string"},description:""},$padding:{required:!1,tsType:{name:"string"},description:""},$margin:{required:!1,tsType:{name:"string"},description:""},$border:{required:!1,tsType:{name:"string"},description:""},$borderRadius:{required:!1,tsType:{name:"string"},description:""},$display:{required:!1,tsType:{name:"string"},description:""},$flexDirection:{required:!1,tsType:{name:"string"},description:""},$justifyContent:{required:!1,tsType:{name:"string"},description:""},$alignItems:{required:!1,tsType:{name:"string"},description:""},$overflow:{required:!1,tsType:{name:"string"},description:""},$cursor:{required:!1,tsType:{name:"string"},description:""},$backgroundImage:{required:!1,tsType:{name:"string"},description:""},$lineHeight:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:'"hello world"',computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"e"}],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},type:{required:!1,tsType:{name:"union",raw:'"button" | "submit" | "reset"',elements:[{name:"literal",value:'"button"'},{name:"literal",value:'"submit"'},{name:"literal",value:'"reset"'}]},description:"",defaultValue:{value:'"button"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},id:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:""}}};const xe=o.nav`
  background-color: ${({$backgroundColor:e,...r})=>e||i(r).surfaceHigh};
  display: flex;
  padding: 16px 24px;
  font-family: inherit;
  border-radius: 12px;
  border: 1px solid ${e=>i(e).primaryHigh};
  justify-content: ${({$navLoaction:e})=>e!=="side"&&"space-between"};
  flex-direction: ${({$navLoaction:e})=>e==="side"?"column":"row"};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);

  gap: ${({$navLoaction:e})=>e==="side"&&"32px"};
  width: ${({$navLoaction:e})=>e==="side"&&"20%"};
  max-width: ${({$navLoaction:e})=>e==="side"&&"250px"};
  h1 {
    margin: 0;
  }

  .main-section {
    display: flex;
    align-items: center;
    gap: ${({$navLoaction:e})=>e==="side"?"12px":"8px"};

    .topNavIcon {
      max-width: 45px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      cursor: ${({$isClickable:e})=>e?"pointer":"default"};
    }
  }

  .navlinks-section {
    display: flex;
    align-items: center;
    overflow-x: auto;
    width: ${({$navLoaction:e})=>e==="side"&&"100%"};
    .hamburger {
      display: none;
      color: ${e=>i(e).primaryText};
    }
    @media screen and (max-width: 768px) {
      .hamburger {
        display: block;
        border: none;
        background-color: transparent;
      }
    }
  }
`,ge=o.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
  .header {
    font-size: 1rem;
    font-weight: 700;
    color: ${({$navbarHeaderTextColor:e,...r})=>e||i(r).primaryText};
    line-height: 16px;
    letter-spacing: 0.25px;
  }
  .description {
    font-size: 0.8rem;
    font-weight: 500;
    color: ${({$navbarHeaderDescColor:e,...r})=>e||i(r).secondaryTextHigh};
    line-height: 14px;
    letter-spacing: 0.25px;
  }
`,he=o.ul`
  display: flex;
  gap: 16px;
  list-style-type: none;
  margin: 0;
  padding: 0;
  flex-direction: ${({$navLoaction:e})=>e==="side"?"column":"row"};
  flex: 1;

  li {
    display: flex;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`,A=o.button`
  white-space: nowrap;
  background-color: ${({$isActive:e,$navItemactiveColor:r,...n})=>e?r||i(n).primary:"transparent"};
  padding: 10px 24px;
  border-radius: 12px;
  font-size: 14px;
  line-height: 16px;
  font-weight: 600;
  color: ${({$isActive:e,$navItemActiveTextColor:r,...n})=>e?r||i(n).primaryContrastText:i(n).secondaryTextHigh};
  cursor: pointer;
  outline: none;
  border: none;
  flex: 1;
  transition: all 0.2s;

  &:hover {
    background-color: ${({$navItemHoverColor:e,$isActive:r,...n})=>r?e||i(n).primaryHigh:`${i(n).primary}20`};
    color: ${({$isActive:e,$navItemActiveTextColor:r,...n})=>e?r||i(n).primaryContrastText:i(n).primaryText};
  }

  &:disabled {
    cursor: not-allowed;
    background-color: ${e=>i(e).primaryHigh};
    color: #ffffff;
    opacity: 0.5;
  }
`,ye=o.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  margin: 0;
  padding: 0;
  position: absolute;
  right: 0;
  bottom: 0;
  background-color: ${({$backgroundColor:e,...r})=>e||i(r).surfaceHigh};
  height: 100dvh;
  box-shadow: -5px 0px 12px 0px rgba(0, 0, 0, 0.1);
  border: 1px solid ${e=>i(e).primaryHigh};
  border-radius: 12px 0 0 12px;
  z-index: 1000;

  .wrapper {
    padding: 16px 24px;
    gap: 12px;
    display: flex;
    flex-direction: column;
  }

  .close-icon {
    display: flex;
    padding: 16px;
    width: fit-content;
    cursor: pointer;
    color: ${e=>i(e).primaryText};
  }
  @media screen and (min-width: 768px) {
    display: none;
  }
`,L=({topNavIconClassName:e})=>e&&e.trim()!==""?`topNavIcon ${e}`:"topNavIcon";function W({navBarHeaderDesc:e="john Son",navbarHeaderText:r="John Doe",$navbarHeaderTextColor:n,$navbarHeaderDescColor:a}){return t.jsxs(ge,{$navbarHeaderDescColor:a,$navbarHeaderTextColor:n,children:[t.jsx("h1",{className:"header",children:r}),t.jsx("div",{className:"description",children:e})]})}W.__docgenInfo={description:"",methods:[],displayName:"NavbarTitle",props:{$backgroundColor:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"union",raw:"string | React.ReactNode",elements:[{name:"string"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:""},topNavclassName:{required:!1,tsType:{name:"string"},description:""},topNavId:{required:!1,tsType:{name:"string"},description:""},topnavIcon:{required:!1,tsType:{name:"union",raw:"React.ReactNode | string",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"string"}]},description:""},topNavIconClassName:{required:!1,tsType:{name:"string"},description:""},topNavIconId:{required:!1,tsType:{name:"string"},description:""},clickableTopnavIcon:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},customStructure:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},$isClickable:{required:!1,tsType:{name:"boolean"},description:""},navbarHeaderText:{required:!1,tsType:{name:"union",raw:"string | React.ReactNode",elements:[{name:"string"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:"",defaultValue:{value:'"John Doe"',computed:!1}},navBarHeaderDesc:{required:!1,tsType:{name:"union",raw:"string | React.ReactNode",elements:[{name:"string"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:"",defaultValue:{value:'"john Son"',computed:!1}},$navbarHeaderTextColor:{required:!1,tsType:{name:"string"},description:""},$navbarHeaderDescColor:{required:!1,tsType:{name:"string"},description:""},navItems:{required:!1,tsType:{name:"Array",elements:[{name:"NavItemProps"}],raw:"NavItemProps[]"},description:""},$navItemactiveColor:{required:!1,tsType:{name:"string"},description:""},$navItemActiveTextColor:{required:!1,tsType:{name:"string"},description:""},$navItemHoverColor:{required:!1,tsType:{name:"string"},description:""},$navLoaction:{required:!1,tsType:{name:"string"},description:""}}};function O({navItems:e,$navItemactiveColor:r,$navItemActiveTextColor:n,$navItemHoverColor:a,$backgroundColor:s,$navLoaction:l}){const[c,d]=h.useState(!1),p=h.useRef(null),f=()=>{d(!0)},x=()=>{d(!1)},b=u=>{p.current&&!p.current.contains(u.target)&&d(!1)};return h.useEffect(()=>(document.addEventListener("mousedown",b),()=>{document.removeEventListener("mousedown",b)}),[]),t.jsxs(t.Fragment,{children:[t.jsx("button",{tabIndex:0,title:"toggle nav bar","aria-label":"toggle side navigatio bar",className:"hamburger",onClick:f,children:t.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24px",height:"24px",viewBox:"0 0 24 24",fill:"none",children:[t.jsx("g",{children:t.jsx("path",{d:"M3 6.00092H21M3 12.0009H21M3 18.0009H21",stroke:"currentColor",strokeWidth:"2.5"})}),t.jsx("defs",{children:t.jsx(t.Fragment,{children:t.jsx("rect",{width:"24",height:"24",fill:"white",transform:"translate(0 0.000915527)"})})})]})}),t.jsx(he,{role:"list",$navLoaction:l,children:e&&e.map((u,v)=>t.jsx("li",{children:t.jsx(A,{id:u.id,"aria-label":u.ariaLabel,className:u.className,disabled:u.isDisabled,$isActive:u.$isActive,$navItemactiveColor:r,$navItemActiveTextColor:n,$navItemHoverColor:a,onClick:u.onClick,children:u.label},`${v}${u.id}`)},`${v}${u.id}`))}),c&&t.jsx(t.Fragment,{children:t.jsxs(ye,{id:"navbar",$backgroundColor:s,ref:p,children:[t.jsx("div",{onClick:x,className:"close-icon",children:t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24px",height:"24px",viewBox:"0 0 1024 1024",strokeWidth:"2.5",children:t.jsx("path",{fill:"currentColor",d:"M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"})})}),t.jsx("div",{className:"wrapper",children:e&&e.map((u,v)=>t.jsx("li",{children:t.jsx(A,{tabIndex:0,id:u.id,"aria-label":u.ariaLabel,className:u.className,disabled:u.isDisabled,$isActive:u.$isActive,$navItemactiveColor:r,$navItemActiveTextColor:n,$navItemHoverColor:a,onClick:u.onClick,onKeyDown:u.onClick,children:u.label},`${v}${u.id}`)},`${v}${u.id}`))})]})})]})}O.__docgenInfo={description:"",methods:[],displayName:"NavItems",props:{$backgroundColor:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"union",raw:"string | React.ReactNode",elements:[{name:"string"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:""},topNavclassName:{required:!1,tsType:{name:"string"},description:""},topNavId:{required:!1,tsType:{name:"string"},description:""},topnavIcon:{required:!1,tsType:{name:"union",raw:"React.ReactNode | string",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"string"}]},description:""},topNavIconClassName:{required:!1,tsType:{name:"string"},description:""},topNavIconId:{required:!1,tsType:{name:"string"},description:""},clickableTopnavIcon:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},customStructure:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},$isClickable:{required:!1,tsType:{name:"boolean"},description:""},navbarHeaderText:{required:!1,tsType:{name:"union",raw:"string | React.ReactNode",elements:[{name:"string"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:""},navBarHeaderDesc:{required:!1,tsType:{name:"union",raw:"string | React.ReactNode",elements:[{name:"string"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:""},$navbarHeaderTextColor:{required:!1,tsType:{name:"string"},description:""},$navbarHeaderDescColor:{required:!1,tsType:{name:"string"},description:""},navItems:{required:!1,tsType:{name:"Array",elements:[{name:"NavItemProps"}],raw:"NavItemProps[]"},description:""},$navItemactiveColor:{required:!1,tsType:{name:"string"},description:""},$navItemActiveTextColor:{required:!1,tsType:{name:"string"},description:""},$navItemHoverColor:{required:!1,tsType:{name:"string"},description:""},$navLoaction:{required:!1,tsType:{name:"string"},description:""}}};function be({navbarHeaderText:e="John Doe",navBarHeaderDesc:r="Developer",$navbarHeaderDescColor:n,$navbarHeaderTextColor:a,title:s,ariaLabel:l="Main Navigation",topNavclassName:c,topNavId:d="topNavId",topnavIcon:p="icon here",topNavIconId:f="topNavIcon",clickableTopnavIcon:x,$backgroundColor:b,customStructure:u,topNavIconClassName:v,navItems:k=[{id:"navItem1",label:"Nav Item 1",$isActive:!0},{id:"navItem2",label:"Nav Item 2"},{id:"navItem3",label:"Nav Item 3"},{id:"navItem4",label:"Nav Item 4"}],$navItemactiveColor:q,$navItemActiveTextColor:R,$navItemHoverColor:C,$navLoaction:y="top"}){const m=x?t.jsx("a",{className:L({topNavIconClassName:v,clickableTopnavIcon:x}),id:f,onClick:x,title:f,children:p&&t.jsx(t.Fragment,{children:p})}):t.jsx("div",{className:L({topNavIconClassName:v}),id:f,title:f,children:p&&t.jsx(t.Fragment,{children:p})}),$=s||W({navBarHeaderDesc:r,navbarHeaderText:e,$navbarHeaderDescColor:n,$navbarHeaderTextColor:a});return t.jsx(t.Fragment,{children:t.jsx(xe,{$navLoaction:y,$backgroundColor:b,"aria-label":l,className:c,id:d,$isClickable:x&&!0,children:u?t.jsx(t.Fragment,{children:u}):t.jsxs(t.Fragment,{children:[t.jsxs("section",{className:"main-section",children:[m,t.jsx(t.Fragment,{children:$})]}),t.jsx("section",{className:"navlinks-section",children:t.jsx(O,{$navLoaction:y,navItems:k,$navItemactiveColor:q,$navItemActiveTextColor:R,$navItemHoverColor:C,$backgroundColor:b})})]})})})}be.__docgenInfo={description:"",methods:[],displayName:"NavBar",props:{$backgroundColor:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"union",raw:"string | React.ReactNode",elements:[{name:"string"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Main Navigation"',computed:!1}},topNavclassName:{required:!1,tsType:{name:"string"},description:""},topNavId:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"topNavId"',computed:!1}},topnavIcon:{required:!1,tsType:{name:"union",raw:"React.ReactNode | string",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"string"}]},description:"",defaultValue:{value:'"icon here"',computed:!1}},topNavIconClassName:{required:!1,tsType:{name:"string"},description:""},topNavIconId:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"topNavIcon"',computed:!1}},clickableTopnavIcon:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},customStructure:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},$isClickable:{required:!1,tsType:{name:"boolean"},description:""},navbarHeaderText:{required:!1,tsType:{name:"union",raw:"string | React.ReactNode",elements:[{name:"string"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:"",defaultValue:{value:'"John Doe"',computed:!1}},navBarHeaderDesc:{required:!1,tsType:{name:"union",raw:"string | React.ReactNode",elements:[{name:"string"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:"",defaultValue:{value:'"Developer"',computed:!1}},$navbarHeaderTextColor:{required:!1,tsType:{name:"string"},description:""},$navbarHeaderDescColor:{required:!1,tsType:{name:"string"},description:""},navItems:{required:!1,tsType:{name:"Array",elements:[{name:"NavItemProps"}],raw:"NavItemProps[]"},description:"",defaultValue:{value:`[\r
  { id: "navItem1", label: "Nav Item 1", $isActive: true },\r
  { id: "navItem2", label: "Nav Item 2" },\r
  { id: "navItem3", label: "Nav Item 3" },\r
  { id: "navItem4", label: "Nav Item 4" },\r
]`,computed:!1}},$navItemactiveColor:{required:!1,tsType:{name:"string"},description:""},$navItemActiveTextColor:{required:!1,tsType:{name:"string"},description:""},$navItemHoverColor:{required:!1,tsType:{name:"string"},description:""},$navLoaction:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"top"',computed:!1}}}};const ve=o.aside`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: ${({$collapsed:e})=>e?"64px":"260px"};
  background-color: ${e=>i(e).surfaceHigh};
  border-right: 1px solid ${e=>i(e).primaryHigh}30;
  transition: width 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  box-sizing: border-box;
  font-family: "Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
`,$e=o.ul`
  list-style: none;
  margin: 0;
  padding: 8px 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
  overflow-y: auto;
  overflow-x: hidden;
  flex: 1;

  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: ${e=>i(e).primaryHigh}30;
    border-radius: 4px;
  }
`,we=o.li`
  display: flex;
  flex-direction: column;
  width: 100%;
`,Te=o.button`
  display: flex;
  align-items: center;
  width: 100%;
  border: none;
  background: ${({$isActive:e,...r})=>e?`${i(r).primary}18`:"transparent"};
  color: ${({$isActive:e,$disabled:r,...n})=>r?`${i(n).secondaryTextHigh}50`:e?i(n).primaryText:i(n).secondaryTextHigh};
  padding: ${({$collapsed:e})=>e?"12px 0":"10px 16px"};
  padding-left: ${({$depth:e,$collapsed:r})=>r?"0":`${16+e*16}px`};
  justify-content: ${({$collapsed:e})=>e?"center":"flex-start"};
  cursor: ${({$disabled:e})=>e?"not-allowed":"pointer"};
  font-size: 14px;
  font-weight: ${({$isActive:e})=>e?"600":"500"};
  text-align: left;
  transition: all 0.2s ease;
  position: relative;
  outline: none;

  &:hover {
    background: ${({$isActive:e,$disabled:r,...n})=>r?"transparent":e?`${i(n).primary}22`:`${i(n).primary}0a`};
    color: ${e=>i(e).primaryText};
  }

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 10%;
    height: 80%;
    width: 3px;
    background-color: ${e=>i(e).primary};
    opacity: ${({$isActive:e})=>e?1:0};
    transition: opacity 0.2s ease;
    border-radius: 0 4px 4px 0;
  }
`,je=o.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  margin-right: ${({$collapsed:e})=>e?"0":"12px"};
  flex-shrink: 0;
`,ke=o.div`
  width: 24px;
  height: 24px;
  border-radius: 6px;
  background: ${({$isActive:e,...r})=>e?i(r).primary:`${i(r).primaryHigh}20`};
  color: ${({$isActive:e,...r})=>e?i(r).primaryContrastText:i(r).primaryText};
  font-size: 11px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
`,qe=o.span`
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Ne=o.span`
  font-size: 11px;
  padding: 2px 6px;
  border-radius: 10px;
  background-color: ${e=>i(e).primary};
  color: ${e=>i(e).primaryContrastText};
  font-weight: 600;
  margin-left: 8px;
`,Re=o.svg`
  width: 16px;
  height: 16px;
  fill: currentColor;
  transform: rotate(${({$isOpen:e})=>e?"90deg":"0deg"});
  transition: transform 0.2s ease;
  flex-shrink: 0;
  margin-left: 8px;
  opacity: 0.7;
`,Ce=o.div`
  display: grid;
  grid-template-rows: ${({$isOpen:e})=>e?"1fr":"0fr"};
  transition: grid-template-rows 0.2s cubic-bezier(0.4, 0, 0.2, 1);
`,Ie=o.ul`
  grid-row: 1 / span 1;
  overflow: hidden;
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
`,P=(e,r)=>r&&e.children?e.children.some(n=>n.route===r||n.id===r||P(n,r)):!1,Y=({item:e,depth:r,activeRoute:n,onItemClick:a,collapsed:s})=>{const l=!!e.children&&e.children.length>0,c=n?P(e,n):!1,d=n?e.route===n||e.id===n:!!e.$isActive,[p,f]=h.useState(c);h.useEffect(()=>{c&&f(!0)},[c,n]);const x=u=>{u.stopPropagation(),!e.disabled&&(l?s?a&&a(e):f(!p):(a&&a(e),e.onClick&&e.onClick()))},b=u=>u.substring(0,2).toUpperCase();return t.jsxs(we,{children:[t.jsxs(Te,{$isActive:d,$depth:r,$disabled:e.disabled,$collapsed:s,onClick:x,title:s?e.label:void 0,children:[t.jsx(je,{$collapsed:s,children:e.icon?e.icon:t.jsx(ke,{$isActive:d,children:b(e.label)})}),!s&&t.jsxs(t.Fragment,{children:[t.jsx(qe,{children:e.label}),e.badge&&t.jsx(Ne,{children:e.badge}),l&&t.jsx(Re,{viewBox:"0 0 24 24",$isOpen:p,children:t.jsx("path",{d:"M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"})})]})]}),l&&!s&&t.jsx(Ce,{$isOpen:p,children:t.jsx(Ie,{children:e.children.map(u=>t.jsx(Y,{item:u,depth:r+1,activeRoute:n,onItemClick:a,collapsed:s},u.id))})})]})},He=({items:e,activeRoute:r,onItemClick:n,collapsed:a=!1,className:s})=>t.jsx(ve,{$collapsed:a,className:s,children:t.jsx($e,{children:e.map(l=>t.jsx(Y,{item:l,depth:0,activeRoute:r,onItemClick:n,collapsed:a},l.id))})});He.__docgenInfo={description:"",methods:[],displayName:"SideNav",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"NavItem"}],raw:"NavItem[]"},description:""},activeRoute:{required:!1,tsType:{name:"string"},description:""},onItemClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: NavItem) => void",signature:{arguments:[{type:{name:"NavItem"},name:"item"}],return:{name:"void"}}},description:""},collapsed:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const ze=o.div`
  background-color: ${({$backgroundColor:e,...r})=>e||i(r).surfaceDefault};
  display: flex;
  flex-direction: ${({$flexDirection:e})=>e||"column"};
  flex: 1;
  padding: ${({$padding:e})=>e||"2% clamp(12px, 8%, 160px)"};
  gap: ${({$gap:e})=>e||"clamp(12px, 8%, 28px)"};
  box-sizing: border-box;
  overflow: auto;

  @media screen and (max-width: 768px) {
    padding: 12px 16px;
    gap: 16px;
  }
`;function Se({$backgroundColor:e,children:r,className:n,id:a,$gap:s,$flexDirection:l,$padding:c}){return t.jsx(ze,{$backgroundColor:e,className:n,id:a,$gap:s,$flexDirection:l,$padding:c,children:r})}Se.__docgenInfo={description:"",methods:[],displayName:"RootElement",props:{$backgroundColor:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},$padding:{required:!1,tsType:{name:"string"},description:""},id:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},$gap:{required:!1,tsType:{name:"string"},description:""},$flexDirection:{required:!1,tsType:{name:"string"},description:""}}};const _e=o.div`
  width: 40px;
  height: 40px;
  overflow: hidden;
  border-radius: 50%;
  background-image: url(${({$imageUrl:e})=>e});
  background-size: cover;
  background-position: center;
  border: 1px solid ${({$borderColor:e,...r})=>e||i(r).primaryHigh};
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  background-color: ${({$backgroundColor:e,$imageUrl:r})=>e&&!r?e:"transparent"};
  cursor: pointer;
  color: ${({$textColor:e,...r})=>e||i(r).primaryText};
  font-family: inherit;
`;function Ve({label:e="John Doe",$imageUrl:r,$backgroundColor:n,$textColor:a,$borderColor:s}){return t.jsx(_e,{title:e||"Avatar",$imageUrl:r,$backgroundColor:n,$textColor:a,$borderColor:s,children:!r&&e.toUpperCase().slice(0,2)})}Ve.__docgenInfo={description:"",methods:[],displayName:"Avatar",props:{label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"John Doe"',computed:!1}},$imageUrl:{required:!1,tsType:{name:"string"},description:""},$backgroundColor:{required:!1,tsType:{name:"string"},description:""},$borderColor:{required:!1,tsType:{name:"string"},description:""},$textColor:{required:!1,tsType:{name:"string"},description:""}}};const Be=o.section`
  display: flex;
  flex-direction: column;
  background-color: ${e=>e.$backgroundColor||i(e).primaryHigh};
  padding: ${e=>e.$padding||"28px 24px"};
  gap: ${e=>e.$gap||0};
  overflow: ${e=>e.$overflow||"auto"};
  border-radius: ${e=>e.$borderRadius||"16px"};
  flex: 1;
  box-shadow: inset 0 2px 8px rgba(0, 0, 0, 0.02);
  border: 1px solid rgba(0, 0, 0, 0.03);
`;function Ae({children:e,$backgroundColor:r,$overflow:n,$gap:a}){return t.jsx(Be,{$backgroundColor:r,$overflow:n,$gap:a,children:e})}Ae.__docgenInfo={description:"",methods:[],displayName:"ContentWrapper",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},$backgroundColor:{required:!1,tsType:{name:"string"},description:""},$padding:{required:!1,tsType:{name:"string"},description:""},$margin:{required:!1,tsType:{name:"string"},description:""},$borderColor:{required:!1,tsType:{name:"string"},description:""},$borderRadius:{required:!1,tsType:{name:"string"},description:""},$overflow:{required:!1,tsType:{name:"string"},description:""},$gap:{required:!1,tsType:{name:"string"},description:""}}};const D=o.div`
  background-color: ${({$backgroundColor:e,...r})=>e||i(r).surfaceHigh};
  color: ${({$fontColor:e,...r})=>e||i(r).primaryText};
  font-size: ${({$fontSize:e})=>e||"1rem"};
  font-weight: ${({$fontWeight:e})=>e||"normal"};
  text-align: ${({$textAlign:e})=>e||"left"};
  padding: ${({$padding:e})=>e||"16px"};
  margin: ${({$margin:e})=>e||"0"};
  border: ${({$border:e})=>e||"none"};
  border-radius: ${({$borderRadius:e})=>e||"16px"};
  display: ${({$display:e})=>e||"flex"};
  flex-direction: ${({$flexDirection:e})=>e||"column"};

  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
  }

  .card-body {
    display: flex;
    flex-direction: row;
    gap: 16px;
    width: 100%;

    @media (max-width: 768px) {
      flex-direction: column;
    }

    .image-section {
      flex: 1;
      display: flex;

      .preview-image {
        width: 100%;
        height: 180px;
        object-fit: cover;
        border-radius: 12px;
        border: 1px solid rgba(0, 0, 0, 0.05);
      }
    }

    .project-preview {
      flex: 1.2;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 12px;

      .card-content {
        display: flex;
        flex-direction: column;
        gap: 6px;

        .card-title {
          font-size: 1.4rem;
          font-weight: 700;
          margin: 0;
          color: ${e=>i(e).primaryText};
        }

        .description {
          font-size: 0.95rem;
          line-height: 1.5;
          margin: 0;
          color: ${e=>i(e).secondaryTextHigh};
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }

      .card-actions {
        display: flex;
        margin-top: auto;
      }
    }
  }

  .modal-project-details {
    display: flex;
    flex-direction: column;
  }
`,Le=I`
  from { opacity: 0; }
  to { opacity: 1; }
`,De=I`
  from {
    transform: translateY(20px) scale(0.95);
    opacity: 0;
  }
  to {
    transform: translateY(0) scale(1);
    opacity: 1;
  }
`,Me=o.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: ${Le} 0.25s ease-out forwards;
`,Ee=o.div`
  background-color: ${e=>i(e).surfaceHigh};
  border: 1px solid ${e=>i(e).primaryHigh}80;
  border-radius: 16px;
  width: 90%;
  max-width: ${({size:e})=>{switch(e){case"sm":return"400px";case"lg":return"800px";case"xl":return"1140px";case"md":default:return"600px"}}};
  max-height: 85vh;
  display: flex;
  flex-direction: column;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.15), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  animation: ${De} 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
  overflow: hidden;
  font-family: inherit;
`,Fe=o.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 24px;
  border-bottom: 1px solid ${e=>i(e).primaryHigh}40;

  h3 {
    margin: 0;
    font-size: 20px;
    font-weight: 700;
    color: ${e=>i(e).primaryText};
  }
`,We=o.button`
  background: none;
  border: none;
  font-size: 24px;
  font-weight: 300;
  cursor: pointer;
  color: ${e=>i(e).secondaryTextHigh};
  transition: color 0.2s, transform 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  outline: none;

  &:hover {
    color: ${e=>i(e).primaryText};
    background-color: ${e=>i(e).primaryHigh}40;
    transform: rotate(90deg);
  }
`,Oe=o.div`
  padding: 24px;
  overflow-y: auto;
  font-size: 16px;
  line-height: 1.6;
  color: ${e=>i(e).secondaryTextHigh};
`,Pe=o.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;
  padding: 16px 24px;
  background-color: ${e=>i(e).surfaceDefault};
  border-top: 1px solid ${e=>i(e).primaryHigh}40;
`,Ye=({isOpen:e,onClose:r,title:n,children:a,footer:s,size:l="md",closeOnOverlayClick:c=!0})=>{if(h.useEffect(()=>(e?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[e]),!e)return null;const d=p=>{c&&p.target===p.currentTarget&&r()};return me.createPortal(t.jsx(Me,{onClick:d,children:t.jsxs(Ee,{size:l,children:[t.jsxs(Fe,{children:[t.jsx("h3",{children:n}),t.jsx(We,{onClick:r,"aria-label":"Close modal",children:"×"})]}),t.jsx(Oe,{children:a}),s&&t.jsx(Pe,{children:s})]})}),document.body)},Ue=({children:e,title:r,description:n,previewImage:a,hideButton:s=!1,buttonText:l="View Project",onClickButton:c,...d})=>{const[p,f]=h.useState(!1),x=()=>{c?c():f(!0)},b=()=>{f(!1)};return e?t.jsx(D,{...d,children:e}):t.jsxs(D,{...d,children:[t.jsxs("div",{className:"card-body",children:[a&&t.jsx("div",{className:"image-section",children:t.jsx("img",{src:a,alt:r||"preview",className:"preview-image"})}),t.jsxs("div",{className:"project-preview",children:[t.jsxs("div",{className:"card-content",children:[r&&t.jsx("h2",{className:"card-title",children:r}),n&&t.jsx("p",{className:"description",children:n})]}),!s&&t.jsx("div",{className:"card-actions",children:t.jsx(F,{onClick:x,children:l})})]})]}),!s&&t.jsx(Ye,{isOpen:p,onClose:b,title:r||"Project Details",children:t.jsxs("div",{className:"modal-project-details",children:[a&&t.jsx("img",{src:a,alt:r||"project image",style:{width:"100%",maxHeight:"300px",objectFit:"cover",borderRadius:"12px",marginBottom:"20px"}}),t.jsx("p",{style:{whiteSpace:"pre-line"},children:n})]})})]})};Ue.__docgenInfo={description:"",methods:[],displayName:"Card",props:{$backgroundColor:{required:!1,tsType:{name:"string"},description:""},$fontColor:{required:!1,tsType:{name:"string"},description:""},$fontSize:{required:!1,tsType:{name:"string"},description:""},$fontWeight:{required:!1,tsType:{name:"string"},description:""},$textAlign:{required:!1,tsType:{name:"string"},description:""},$padding:{required:!1,tsType:{name:"string"},description:""},$margin:{required:!1,tsType:{name:"string"},description:""},$border:{required:!1,tsType:{name:"string"},description:""},$borderRadius:{required:!1,tsType:{name:"string"},description:""},$display:{required:!1,tsType:{name:"string"},description:""},$flexDirection:{required:!1,tsType:{name:"string"},description:""},$justifyContent:{required:!1,tsType:{name:"string"},description:""},$alignItems:{required:!1,tsType:{name:"string"},description:""},$overflow:{required:!1,tsType:{name:"string"},description:""},$cursor:{required:!1,tsType:{name:"string"},description:""},$backgroundImage:{required:!1,tsType:{name:"string"},description:""},$lineHeight:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},title:{required:!1,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},previewImage:{required:!1,tsType:{name:"string"},description:""},hideButton:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},buttonText:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"View Project"',computed:!1}},onClickButton:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},id:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const Ge=o.div`
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  background-color: ${e=>i(e).surfaceHigh};
  border: 1px solid ${e=>i(e).primaryHigh}40;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  flex-direction: column;
  height: 100%;
  cursor: ${({$hasClick:e})=>e?"pointer":"default"};

  ${({$hoverEffect:e,...r})=>e==="none"?"":g`
      &:hover {
        border-color: ${i(r).primary}80;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
        ${e==="lift"&&"transform: translateY(-4px);"}

        .image-bg {
          transform: ${e==="zoom"?"scale(1.05)":"scale(1)"};
          filter: ${e==="fade"?"brightness(0.75)":"brightness(0.95)"};
        }
      }
    `}
`,Xe=o.div`
  position: relative;
  width: 100%;
  aspect-ratio: ${({$aspectRatio:e})=>e};
  background-image: url(${({$imageUrl:e})=>e});
  background-size: cover;
  background-position: center;
  transition: transform 0.5s ease, filter 0.5s ease;
  overflow: hidden;
`,Je=o.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.4) 100%);
  pointer-events: none;
`,Ke=o.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`,Qe=o.span`
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 700;
  margin-bottom: 8px;
  color: ${e=>i(e).primary};
`,Ze=o.h3`
  font-size: 18px;
  font-weight: 700;
  margin: 0 0 8px 0;
  color: ${e=>i(e).primaryText};
  line-height: 1.4;
`,er=o.p`
  font-size: 14px;
  line-height: 1.5;
  margin: 0;
  color: ${e=>i(e).secondaryTextHigh};
  flex-grow: 1;
`,rr=o.div`
  margin-top: 16px;
  padding-top: 12px;
  border-top: 1px solid ${e=>i(e).primaryHigh}20;
  display: flex;
  align-items: center;
`,tr=({imageUrl:e,title:r,subtitle:n,description:a,footer:s,aspectRatio:l="16/9",onClick:c,hoverEffect:d="zoom"})=>t.jsxs(Ge,{onClick:c,$hasClick:!!c,$hoverEffect:d,children:[t.jsx(Xe,{className:"image-bg",$imageUrl:e,$aspectRatio:l,children:t.jsx(Je,{})}),t.jsxs(Ke,{children:[n&&t.jsx(Qe,{children:n}),t.jsx(Ze,{children:r}),a&&t.jsx(er,{children:a}),s&&t.jsx(rr,{children:s})]})]});tr.__docgenInfo={description:"",methods:[],displayName:"ImageCard",props:{imageUrl:{required:!0,tsType:{name:"string"},description:""},title:{required:!0,tsType:{name:"string"},description:""},subtitle:{required:!1,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},footer:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},aspectRatio:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"16/9"',computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},hoverEffect:{required:!1,tsType:{name:"union",raw:'"zoom" | "lift" | "fade" | "none"',elements:[{name:"literal",value:'"zoom"'},{name:"literal",value:'"lift"'},{name:"literal",value:'"fade"'},{name:"literal",value:'"none"'}]},description:"",defaultValue:{value:'"zoom"',computed:!1}}}};const nr=e=>{switch(e){case"h1":return g`
        font-size: 2.5rem;
        line-height: 1.2;
        letter-spacing: -0.02em;
      `;case"h2":return g`
        font-size: 2rem;
        line-height: 1.3;
        letter-spacing: -0.01em;
      `;case"h3":return g`
        font-size: 1.5rem;
        line-height: 1.4;
      `;case"h4":return g`
        font-size: 1.25rem;
        line-height: 1.4;
      `;case"h5":return g`
        font-size: 1.125rem;
        line-height: 1.5;
      `;case"h6":return g`
        font-size: 1rem;
        line-height: 1.5;
      `;case"caption":return g`
        font-size: 0.75rem;
        line-height: 1.6;
      `;case"p":case"body":default:return g`
        font-size: 1rem;
        line-height: 1.6;
      `}},ir=(e,r)=>{const n=i(r);switch(e){case"primary":return n.primaryText;case"secondary":return n.secondaryTextHigh;case"brand":return n.primary;case"success":return n.success;case"warning":return n.warning;case"danger":return n.danger;case"info":return n.info;case"inherit":default:return"inherit"}},ar=e=>{if(!e)return"inherit";switch(e){case"normal":return 400;case"medium":return 500;case"semibold":return 600;case"bold":return 700;default:return e}},or=o.span`
  margin: 0;
  text-align: ${({$align:e})=>e};
  color: ${e=>ir(e.$colorType,e)};
  font-weight: ${({$fontWeight:e})=>ar(e)};
  font-family: inherit;
  margin-bottom: ${({$gutterBottom:e,$variant:r})=>e?r.startsWith("h")?"16px":"12px":"0"};

  ${({$variant:e})=>nr(e)}
`,H=({variant:e="body",colorType:r="primary",fontWeight:n,align:a="left",gutterBottom:s=!1,children:l,as:c,...d})=>{const p=()=>{if(c)return c;switch(e){case"h1":case"h2":case"h3":case"h4":case"h5":case"h6":case"p":case"span":return e;case"caption":return"span";case"body":default:return"p"}};return t.jsx(or,{as:p(),$variant:e,$colorType:r,$fontWeight:n,$align:a,$gutterBottom:s,...d,children:l})},sr=({level:e=1,...r})=>{const n=`h${e}`;return t.jsx(H,{variant:n,fontWeight:"bold",...r})},lr=e=>t.jsx(H,{variant:"p",colorType:"secondary",...e}),dr=e=>t.jsx(H,{variant:"caption",colorType:"secondary",fontWeight:"medium",...e}),cr=e=>t.jsx(H,{variant:"span",colorType:"brand",fontWeight:"semibold",...e});H.__docgenInfo={description:"",methods:[],displayName:"Typography",props:{variant:{required:!1,tsType:{name:"union",raw:'"h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "body" | "caption" | "span"',elements:[{name:"literal",value:'"h1"'},{name:"literal",value:'"h2"'},{name:"literal",value:'"h3"'},{name:"literal",value:'"h4"'},{name:"literal",value:'"h5"'},{name:"literal",value:'"h6"'},{name:"literal",value:'"p"'},{name:"literal",value:'"body"'},{name:"literal",value:'"caption"'},{name:"literal",value:'"span"'}]},description:"",defaultValue:{value:'"body"',computed:!1}},colorType:{required:!1,tsType:{name:"union",raw:'"primary" | "secondary" | "brand" | "success" | "warning" | "danger" | "info" | "inherit"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"brand"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"danger"'},{name:"literal",value:'"info"'},{name:"literal",value:'"inherit"'}]},description:"",defaultValue:{value:'"primary"',computed:!1}},fontWeight:{required:!1,tsType:{name:"union",raw:'"normal" | "medium" | "semibold" | "bold" | number',elements:[{name:"literal",value:'"normal"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"semibold"'},{name:"literal",value:'"bold"'},{name:"number"}]},description:""},align:{required:!1,tsType:{name:"union",raw:'"left" | "center" | "right" | "justify"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"center"'},{name:"literal",value:'"right"'},{name:"literal",value:'"justify"'}]},description:"",defaultValue:{value:'"left"',computed:!1}},gutterBottom:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},as:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:""}}};sr.__docgenInfo={description:"",methods:[],displayName:"Heading",props:{level:{required:!1,tsType:{name:"union",raw:"1 | 2 | 3 | 4 | 5 | 6",elements:[{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"},{name:"literal",value:"6"}]},description:"",defaultValue:{value:"1",computed:!1}}}};lr.__docgenInfo={description:"",methods:[],displayName:"Paragraph"};dr.__docgenInfo={description:"",methods:[],displayName:"Caption"};cr.__docgenInfo={description:"",methods:[],displayName:"HighlightText"};const pr=o.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: ${({$fullWidth:e})=>e?"100%":"auto"};
  opacity: ${({$disabled:e})=>e?.6:1};
  font-family: inherit;
`,ur=o.label`
  font-size: 14px;
  font-weight: 600;
  color: ${e=>i(e).primaryText};
`,mr=o.input`
  width: 100%;
  padding: 12px 16px;
  padding-left: ${({$hasIcon:e})=>e?"42px":"16px"};
  border-radius: 12px;
  border: 2px solid
    ${({$error:e,$success:r,...n})=>{const a=i(n);return e?a.danger:r?a.success:`${a.primaryHigh}80`}};
  background-color: ${e=>i(e).surfaceHigh};
  color: ${e=>i(e).primaryText};
  font-size: 15px;
  font-family: inherit;
  outline: none;
  transition: all 0.2s ease-in-out;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.02);

  &::placeholder {
    color: ${e=>i(e).secondaryTextHigh}a0;
  }

  &:focus {
    border-color: ${({$error:e,$success:r,...n})=>{const a=i(n);return e?a.danger:r?a.success:a.primary}};
    box-shadow: 0 0 0 4px
      ${({$error:e,$success:r,...n})=>{const a=i(n);return e?`${a.danger}20`:r?`${a.success}20`:`${a.primary}20`}};
  }

  &:disabled {
    cursor: not-allowed;
    background-color: ${e=>i(e).surfaceDefault};
  }
`,fr=o.span`
  font-size: 12px;
  font-weight: 500;
  color: ${e=>i(e).danger};
`,U=h.forwardRef(({label:e,error:r,success:n,fullWidth:a=!0,icon:s,disabled:l,...c},d)=>t.jsxs(pr,{$fullWidth:a,$disabled:l,children:[e&&t.jsx(ur,{children:e}),t.jsxs("div",{style:{position:"relative",width:"100%",display:"flex",alignItems:"center"},children:[s&&t.jsx("div",{style:{position:"absolute",left:"14px",display:"flex",alignItems:"center",justifyContent:"center",pointerEvents:"none"},children:s}),t.jsx(mr,{ref:d,$error:!!r,$success:n,$hasIcon:!!s,disabled:l,...c})]}),r&&t.jsx(fr,{children:r})]}));U.displayName="Input";U.__docgenInfo={description:"",methods:[],displayName:"Input",props:{fullWidth:{defaultValue:{value:"true",computed:!1},required:!1}}};const xr=o.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: ${({$fullWidth:e})=>e?"100%":"auto"};
  opacity: ${({$disabled:e})=>e?.6:1};
  font-family: inherit;
`,gr=o.label`
  font-size: 14px;
  font-weight: 600;
  color: ${e=>i(e).primaryText};
`,hr=o.textarea`
  width: 100%;
  padding: 12px 16px;
  border-radius: 12px;
  resize: ${({$resizable:e})=>e};
  border: 2px solid
    ${({$error:e,$success:r,...n})=>{const a=i(n);return e?a.danger:r?a.success:`${a.primaryHigh}80`}};
  background-color: ${e=>i(e).surfaceHigh};
  color: ${e=>i(e).primaryText};
  font-size: 15px;
  font-family: inherit;
  line-height: 1.5;
  outline: none;
  transition: all 0.2s ease-in-out;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.02);

  &::placeholder {
    color: ${e=>i(e).secondaryTextHigh}a0;
  }

  &:focus {
    border-color: ${({$error:e,$success:r,...n})=>{const a=i(n);return e?a.danger:r?a.success:a.primary}};
    box-shadow: 0 0 0 4px
      ${({$error:e,$success:r,...n})=>{const a=i(n);return e?`${a.danger}20`:r?`${a.success}20`:`${a.primary}20`}};
  }

  &:disabled {
    cursor: not-allowed;
    background-color: ${e=>i(e).surfaceDefault};
  }
`,yr=o.span`
  font-size: 12px;
  font-weight: 500;
  color: ${e=>i(e).danger};
`,G=h.forwardRef(({label:e,error:r,success:n,fullWidth:a=!0,rows:s=4,resizable:l="vertical",disabled:c,...d},p)=>t.jsxs(xr,{$fullWidth:a,$disabled:c,children:[e&&t.jsx(gr,{children:e}),t.jsx(hr,{ref:p,$error:!!r,$success:n,$resizable:l,rows:s,disabled:c,...d}),r&&t.jsx(yr,{children:r})]}));G.displayName="TextArea";G.__docgenInfo={description:"",methods:[],displayName:"TextArea",props:{fullWidth:{defaultValue:{value:"true",computed:!1},required:!1},rows:{defaultValue:{value:"4",computed:!1},required:!1},resizable:{defaultValue:{value:'"vertical"',computed:!1},required:!1}}};const br=(e,r,n)=>{const a=i(n);let s=a.primary,l=a.surfaceHigh;switch(e){case"success":s=a.success,l=`${a.success}15`;break;case"warning":s=a.warning,l=`${a.warning}15`;break;case"danger":s=a.danger,l=`${a.danger}15`;break;case"info":s=a.info,l=`${a.info}15`;break;case"primary":default:s=a.primary,l=`${a.primary}20`;break}if(r==="filled"){const d=e==="primary"?a.primaryContrastText:"#ffffff";return g`
      background-color: ${s};
      color: ${d};
      border: 1px solid ${s};
    `}if(r==="outlined"){const d=e==="primary"?a.primaryText:s;return g`
      background-color: transparent;
      color: ${d};
      border: 1.5px solid ${s};
    `}const c=e==="primary"?a.secondaryTextHigh:s;return g`
    background-color: ${l};
    color: ${c};
    border: 1px solid transparent;
  `},vr=o.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  font-weight: 700;
  padding: 4px 10px;
  border-radius: ${({$pill:e})=>e?"9999px":"6px"};
  line-height: 1;
  white-space: nowrap;
  font-family: inherit;

  ${({$colorType:e,$variant:r,...n})=>br(e,r,n)}
`,$r=o.button`
  background: none;
  border: none;
  font-size: 14px;
  line-height: 1;
  font-weight: 700;
  padding: 0;
  cursor: pointer;
  color: inherit;
  opacity: 0.7;
  transition: opacity 0.2s, transform 0.2s;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 1;
    transform: scale(1.15);
  }
`,X=({variant:e="subtle",colorType:r="primary",pill:n=!1,onClose:a,children:s,...l})=>t.jsxs(vr,{$variant:e,$colorType:r,$pill:n,...l,children:[s,a&&t.jsx($r,{onClick:c=>{c.stopPropagation(),a(c)},"aria-label":"Remove badge",children:"×"})]});X.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{variant:{required:!1,tsType:{name:"union",raw:'"filled" | "outlined" | "subtle"',elements:[{name:"literal",value:'"filled"'},{name:"literal",value:'"outlined"'},{name:"literal",value:'"subtle"'}]},description:"",defaultValue:{value:'"subtle"',computed:!1}},colorType:{required:!1,tsType:{name:"union",raw:'"primary" | "success" | "warning" | "danger" | "info"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"danger"'},{name:"literal",value:'"info"'}]},description:"",defaultValue:{value:'"primary"',computed:!1}},pill:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"e"}],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const wr=I`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`,M=e=>{if(typeof e=="number")return`${e}px`;switch(e){case"sm":return"20px";case"lg":return"48px";case"md":default:return"32px"}},E=(e,r)=>{const n=i(r);switch(e){case"secondary":return n.secondaryTextHigh;case"success":return n.success;case"warning":return n.warning;case"danger":return n.danger;case"info":return n.info;case"white":return"#ffffff";case"primary":default:return n.primary}},Tr=o.div`
  width: ${({$size:e})=>M(e)};
  height: ${({$size:e})=>M(e)};
  border: ${({$thickness:e})=>e}px solid ${e=>E(e.$colorType,e)}20;
  border-top: ${({$thickness:e})=>e}px solid ${e=>E(e.$colorType,e)};
  border-radius: 50%;
  animation: ${wr} 0.8s linear infinite;
  display: inline-block;
`,jr=({size:e="md",colorType:r="primary",thickness:n=3,...a})=>t.jsx(Tr,{$size:e,$colorType:r,$thickness:n,...a});jr.__docgenInfo={description:"",methods:[],displayName:"Spinner",props:{size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg" | number',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'},{name:"number"}]},description:"",defaultValue:{value:'"md"',computed:!1}},colorType:{required:!1,tsType:{name:"union",raw:'"primary" | "secondary" | "success" | "warning" | "danger" | "info" | "white"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"danger"'},{name:"literal",value:'"info"'},{name:"literal",value:'"white"'}]},description:"",defaultValue:{value:'"primary"',computed:!1}},thickness:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"3",computed:!1}}}};const kr=I`
  from { opacity: 0; }
  to { opacity: 1; }
`,qr=o.div`
  display: inline-block;
  position: relative;
`,Nr=o.div`
  display: inline-flex;
`,Rr=o.div`
  position: absolute;
  border-radius: 8px;
  padding: 6px 12px;
  color: ${e=>i(e).surfaceHigh};
  background-color: ${e=>i(e).primaryText};
  font-size: 13px;
  font-weight: 500;
  font-family: inherit;
  white-space: nowrap;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  z-index: 100;
  pointer-events: none;
  animation: ${kr} 0.15s ease-out forwards;

  /* Arrows */
  &::before {
    content: " ";
    left: 50%;
    border: solid transparent;
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-width: 6px;
    margin-left: -6px;
  }

  ${({$position:e,...r})=>{const n=i(r).primaryText;switch(e){case"top":return g`
          bottom: 100%;
          left: 50%;
          transform: translateX(-50%);
          margin-bottom: 10px;
          &::before {
            top: 100%;
            border-top-color: ${n};
          }
        `;case"bottom":return g`
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          margin-top: 10px;
          &::before {
            bottom: 100%;
            border-bottom-color: ${n};
          }
        `;case"left":return g`
          right: 100%;
          top: 50%;
          transform: translateY(-50%);
          margin-right: 10px;
          &::before {
            left: 100%;
            top: 50%;
            margin-top: -6px;
            margin-left: 0;
            border-left-color: ${n};
          }
        `;case"right":return g`
          left: 100%;
          top: 50%;
          transform: translateY(-50%);
          margin-left: 10px;
          &::before {
            right: 100%;
            top: 50%;
            margin-top: -6px;
            margin-left: -12px;
            border-right-color: ${n};
          }
        `}}}
`,Cr=({content:e,position:r="top",delay:n=200,children:a})=>{let s;const[l,c]=h.useState(!1),d=()=>{s=setTimeout(()=>{c(!0)},n)},p=()=>{clearTimeout(s),c(!1)};return t.jsxs(qr,{onMouseEnter:d,onMouseLeave:p,children:[t.jsx(Nr,{children:a}),l&&t.jsx(Rr,{$position:r,children:e})]})};Cr.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{content:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},position:{required:!1,tsType:{name:"union",raw:'"top" | "bottom" | "left" | "right"',elements:[{name:"literal",value:'"top"'},{name:"literal",value:'"bottom"'},{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:"",defaultValue:{value:'"top"',computed:!1}},delay:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"200",computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const j=(e,r,n="0 0 24 24")=>{const a=({size:s=20,color:l="currentColor",...c})=>t.jsx("svg",{width:s,height:s,viewBox:n,fill:"none",stroke:l,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...c,children:r});return a.displayName=e,a};j("HomeIcon",t.jsx("path",{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}));j("SettingsIcon",t.jsxs(t.Fragment,{children:[t.jsx("circle",{cx:"12",cy:"12",r:"3"}),t.jsx("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"})]}));j("UserIcon",t.jsxs(t.Fragment,{children:[t.jsx("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),t.jsx("circle",{cx:"12",cy:"7",r:"4"})]}));const Ir=j("ChevronDownIcon",t.jsx("polyline",{points:"6 9 12 15 18 9"}));j("ChevronRightIcon",t.jsx("polyline",{points:"9 18 15 12 9 6"}));const J=j("CloseIcon",t.jsxs(t.Fragment,{children:[t.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),t.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})),B=j("CheckIcon",t.jsx("polyline",{points:"20 6 9 17 4 12"})),K=j("InfoIcon",t.jsxs(t.Fragment,{children:[t.jsx("circle",{cx:"12",cy:"12",r:"10"}),t.jsx("line",{x1:"12",y1:"16",x2:"12",y2:"12"}),t.jsx("line",{x1:"12",y1:"8",x2:"12.01",y2:"8"})]})),Q=j("AlertTriangleIcon",t.jsxs(t.Fragment,{children:[t.jsx("path",{d:"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"}),t.jsx("line",{x1:"12",y1:"9",x2:"12",y2:"13"}),t.jsx("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"})]})),Z=j("AlertCircleIcon",t.jsxs(t.Fragment,{children:[t.jsx("circle",{cx:"12",cy:"12",r:"10"}),t.jsx("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),t.jsx("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})]}));j("ExternalLinkIcon",t.jsxs(t.Fragment,{children:[t.jsx("path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}),t.jsx("polyline",{points:"15 3 21 3 21 9"}),t.jsx("line",{x1:"10",y1:"14",x2:"21",y2:"3"})]}));j("UploadIcon",t.jsxs(t.Fragment,{children:[t.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),t.jsx("polyline",{points:"17 8 12 3 7 8"}),t.jsx("line",{x1:"12",y1:"3",x2:"12",y2:"15"})]}));const Hr=o.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: ${({$fullWidth:e})=>e?"100%":"auto"};
  opacity: ${({$disabled:e})=>e?.6:1};
  font-family: inherit;
  position: relative;
`,zr=o.label`
  font-size: 14px;
  font-weight: 600;
  color: ${e=>i(e).primaryText};
`,Sr=o.div`
  position: relative;
  width: 100%;
`,_r=o.div`
  width: 100%;
  padding: 12px 16px;
  border-radius: 12px;
  border: 2px solid
    ${({$error:e,$success:r,$isOpen:n,...a})=>{const s=i(a);return e?s.danger:r?s.success:n?s.primary:`${s.primaryHigh}80`}};
  background-color: ${e=>i(e).surfaceHigh};
  color: ${e=>i(e).primaryText};
  font-size: 15px;
  font-family: inherit;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: ${({$disabled:e})=>e?"not-allowed":"pointer"};
  transition: all 0.2s ease-in-out;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.02);
  user-select: none;

  &:focus {
    outline: none;
  }

  ${({$isOpen:e,$error:r,$success:n,...a})=>e&&g`
      box-shadow: 0 0 0 4px
        ${()=>{const s=i(a);return r?`${s.danger}20`:n?`${s.success}20`:`${s.primary}20`}};
    `}
`,Vr=o.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease-in-out;
  transform: ${({$isOpen:e})=>e?"rotate(180deg)":"rotate(0)"};
  color: ${e=>i(e).secondaryTextHigh};

  svg {
    width: 18px;
    height: 18px;
  }
`,Br=I`
  from {
    opacity: 0;
    transform: translateY(-8px) scale(0.98);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`,Ar=o.ul`
  position: absolute;
  top: calc(100% + 6px);
  left: 0;
  right: 0;
  background-color: ${e=>i(e).surfaceHigh};
  border: 1px solid ${e=>i(e).primaryHigh}80;
  border-radius: 12px;
  margin: 0;
  padding: 6px 0;
  list-style-type: none;
  max-height: 240px;
  overflow-y: auto;
  z-index: 1000;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.05);
  animation: ${Br} 0.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;

  /* Custom scrollbar */
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${e=>i(e).primaryHigh}80;
    border-radius: 3px;
  }
`,Lr=o.li`
  padding: 10px 16px;
  font-size: 14px;
  font-weight: ${({$isSelected:e})=>e?"600":"500"};
  color: ${({$isSelected:e,...r})=>e?i(r).primaryContrastText:i(r).primaryText};
  background-color: ${({$isSelected:e,...r})=>e?i(r).primary:"transparent"};
  cursor: pointer;
  transition: background-color 0.15s, color 0.15s;

  &:hover {
    background-color: ${({$isSelected:e,...r})=>e?i(r).primary:`${i(r).primary}15`};
    color: ${({$isSelected:e,...r})=>e?i(r).primaryContrastText:i(r).primary};
  }
`,Dr=o.span`
  font-size: 12px;
  font-weight: 500;
  color: ${e=>i(e).danger};
`,Mr=o.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  align-items: center;
  flex: 1;
  margin-right: 8px;
`,Er=({label:e,options:r,value:n,onChange:a,placeholder:s="Select an option",error:l,success:c,fullWidth:d=!0,disabled:p=!1,multiple:f=!1})=>{const[x,b]=h.useState(!1),u=h.useRef(null),v=Array.isArray(n)?n:n?[n]:[];h.useEffect(()=>{const y=m=>{u.current&&!u.current.contains(m.target)&&b(!1)};return x&&document.addEventListener("mousedown",y),()=>{document.removeEventListener("mousedown",y)}},[x]);const k=()=>{p||b(!x)},q=(y,m)=>{if(m.stopPropagation(),!p)if(f){const $=v.includes(y)?v.filter(N=>N!==y):[...v,y];a&&a($)}else a&&a(y),b(!1)},R=(y,m)=>{if(m.stopPropagation(),p)return;const $=v.filter(N=>N!==y);a&&a($)},C=y=>f?v.includes(y):n===y;return t.jsxs(Hr,{$fullWidth:d,$disabled:p,ref:u,children:[e&&t.jsx(zr,{children:e}),t.jsxs(Sr,{children:[t.jsxs(_r,{$error:!!l,$success:c,$isOpen:x,$disabled:p,onClick:k,style:{padding:f&&v.length>0?"6px 16px 6px 12px":"12px 16px",minHeight:"48px"},children:[f?v.length>0?t.jsx(Mr,{children:v.map(y=>{const m=r.find($=>$.value===y);return m?t.jsx(X,{variant:"subtle",colorType:"primary",onClose:$=>R(y,$),children:m.label},y):null})}):t.jsx("span",{style:{opacity:.7},children:s}):t.jsx("span",{children:(()=>{const y=r.find(m=>m.value===n);return y?y.label:s})()}),t.jsx(Vr,{$isOpen:x,children:t.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:t.jsx("polyline",{points:"6 9 12 15 18 9"})})})]}),x&&t.jsx(Ar,{children:r.map(y=>t.jsx(Lr,{$isSelected:C(y.value),onClick:m=>q(y.value,m),children:t.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%"},children:[t.jsx("span",{children:y.label}),C(y.value)&&t.jsx(B,{size:16})]})},y.value))})]}),l&&t.jsx(Dr,{children:l})]})};Er.__docgenInfo={description:"",methods:[],displayName:"Select",props:{label:{required:!1,tsType:{name:"string"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"SelectOption"}],raw:"SelectOption[]"},description:""},value:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: any) => void",signature:{arguments:[{type:{name:"any"},name:"value"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Select an option"',computed:!1}},error:{required:!1,tsType:{name:"string"},description:""},success:{required:!1,tsType:{name:"boolean"},description:""},fullWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},multiple:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const ee=o.label`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  cursor: ${({$disabled:e})=>e?"not-allowed":"pointer"};
  opacity: ${({$disabled:e})=>e?.6:1};
  font-family: inherit;
  font-size: 14px;
  font-weight: 500;
  color: ${e=>i(e).primaryText};
  user-select: none;
`,re=o.input.attrs({type:"checkbox"})`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  margin: 0;
`,Fr=o.div`
  width: 20px;
  height: 20px;
  border-radius: 6px;
  border: 2px solid
    ${({$checked:e,...r})=>e?i(r).primary:`${i(r).primaryHigh}80`};
  background-color: ${({$checked:e,...r})=>e?i(r).primary:i(r).surfaceHigh};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-in-out;
  color: ${e=>i(e).primaryContrastText};

  svg {
    width: 14px;
    height: 14px;
    stroke-width: 3px;
    opacity: ${({$checked:e})=>e?1:0};
    transform: scale(${({$checked:e})=>e?1:.8});
    transition: opacity 0.15s ease-in-out, transform 0.15s ease-in-out;
  }

  ${re}:focus-visible + & {
    box-shadow: 0 0 0 4px ${e=>i(e).primary}20;
    border-color: ${e=>i(e).primary};
  }

  ${ee}:hover:not([disabled]) & {
    border-color: ${e=>i(e).primary};
    background-color: ${({$checked:e,...r})=>e?i(r).primaryHigh:`${i(r).primary}10`};
  }
`,te=h.forwardRef(({children:e,checked:r=!1,disabled:n,onChange:a,...s},l)=>t.jsxs(ee,{$disabled:n,children:[t.jsx(re,{ref:l,checked:r,disabled:n,onChange:a,...s}),t.jsx(Fr,{$checked:r,$disabled:n,children:t.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",children:t.jsx("polyline",{points:"20 6 9 17 4 12"})})}),e&&t.jsx("span",{children:e})]}));te.displayName="Checkbox";te.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{checked:{defaultValue:{value:"false",computed:!1},required:!1}}};const Wr=o.div`
  display: flex;
  flex-direction: ${({$direction:e})=>e};
  gap: ${({$direction:e})=>e==="row"?"20px":"12px"};
  font-family: inherit;
`,ne=o.label`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  cursor: ${({$disabled:e})=>e?"not-allowed":"pointer"};
  opacity: ${({$disabled:e})=>e?.6:1};
  font-family: inherit;
  font-size: 14px;
  font-weight: 500;
  color: ${e=>i(e).primaryText};
  user-select: none;
`,ie=o.input.attrs({type:"radio"})`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  margin: 0;
`,Or=o.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid
    ${({$checked:e,...r})=>e?i(r).primary:`${i(r).primaryHigh}80`};
  background-color: ${e=>i(e).surfaceHigh};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-in-out;
  position: relative;

  &::before {
    content: "";
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${e=>i(e).primary};
    opacity: ${({$checked:e})=>e?1:0};
    transform: scale(${({$checked:e})=>e?1:.8});
    transition: opacity 0.15s ease-in-out, transform 0.15s ease-in-out;
  }

  ${ie}:focus-visible + & {
    box-shadow: 0 0 0 4px ${e=>i(e).primary}20;
    border-color: ${e=>i(e).primary};
  }

  ${ne}:hover:not([disabled]) & {
    border-color: ${e=>i(e).primary};
    &::before {
      background-color: ${({$checked:e,...r})=>e?i(r).primaryHigh:`${i(r).primary}80`};
    }
  }
`,ae=h.createContext(null),Pr=({children:e,name:r,value:n,onChange:a,direction:s="column",disabled:l=!1})=>{const c=d=>{a&&a(d.target.value)};return t.jsx(ae.Provider,{value:{name:r,value:n,onChange:c,disabled:l},children:t.jsx(Wr,{$direction:s,children:e})})},oe=h.forwardRef(({children:e,value:r,checked:n,disabled:a,onChange:s,...l},c)=>{const d=h.useContext(ae),p=!!d,f=p?d.value===r:n,x=p&&d.disabled||a,b=p?d.name:l.name,u=v=>{s&&s(v),d&&d.onChange&&d.onChange(v)};return t.jsxs(ne,{$disabled:x,children:[t.jsx(ie,{ref:c,name:b,value:r,checked:f,disabled:x,onChange:u,...l}),t.jsx(Or,{$checked:!!f,$disabled:x}),e&&t.jsx("span",{children:e})]})});oe.displayName="Radio";Pr.__docgenInfo={description:"",methods:[],displayName:"RadioGroup",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},name:{required:!1,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},direction:{required:!1,tsType:{name:"union",raw:'"row" | "column"',elements:[{name:"literal",value:'"row"'},{name:"literal",value:'"column"'}]},description:"",defaultValue:{value:'"column"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};oe.__docgenInfo={description:"",methods:[],displayName:"Radio"};const se=o.label`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  cursor: ${({$disabled:e})=>e?"not-allowed":"pointer"};
  opacity: ${({$disabled:e})=>e?.6:1};
  font-family: inherit;
  font-size: 14px;
  font-weight: 500;
  color: ${e=>i(e).primaryText};
  user-select: none;
`,le=o.input.attrs({type:"checkbox"})`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  margin: 0;
`,Yr=o.div`
  width: 44px;
  height: 24px;
  border-radius: 12px;
  background-color: ${({$checked:e,...r})=>e?i(r).primary:`${i(r).primaryHigh}40`};
  position: relative;
  transition: background-color 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  padding: 0 2px;

  ${le}:focus-visible + & {
    box-shadow: 0 0 0 4px ${e=>i(e).primary}20;
  }

  ${se}:hover:not([disabled]) & {
    background-color: ${({$checked:e,...r})=>e?i(r).primaryHigh:`${i(r).primaryHigh}60`};
  }
`,Ur=o.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${e=>i(e).surfaceHigh};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  transform: ${({$checked:e})=>e?"translateX(20px)":"translateX(0)"};
`,de=h.forwardRef(({children:e,checked:r=!1,disabled:n,onChange:a,...s},l)=>t.jsxs(se,{$disabled:n,children:[t.jsx(le,{ref:l,checked:r,disabled:n,onChange:a,...s}),t.jsx(Yr,{$checked:r,$disabled:n,children:t.jsx(Ur,{$checked:r})}),e&&t.jsx("span",{children:e})]}));de.displayName="Switch";de.__docgenInfo={description:"",methods:[],displayName:"Switch",props:{checked:{defaultValue:{value:"false",computed:!1},required:!1}}};const Gr=o.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: ${({$fullWidth:e})=>e?"100%":"auto"};
  font-family: inherit;
`,Xr=o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  font-weight: 600;
  color: ${e=>i(e).primaryText};
`,Jr=o.span`
  font-size: 13px;
  font-weight: 700;
  color: ${e=>i(e).primary};
`,Kr=o.input.attrs({type:"range"})`
  -webkit-appearance: none;
  width: 100%;
  height: 6px;
  border-radius: 3px;
  background: ${e=>i(e).primaryHigh}40;
  outline: none;
  margin: 10px 0;
  transition: background 0.15s ease-in-out;

  /* Webkit Thumb */
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: ${e=>i(e).primary};
    border: 2px solid ${e=>i(e).surfaceHigh};
    cursor: pointer;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
    transition: transform 0.1s ease-in-out, background-color 0.1s ease-in-out;
  }

  &::-webkit-slider-thumb:hover {
    transform: scale(1.15);
    background: ${e=>i(e).primaryHigh};
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  &::-webkit-slider-thumb:active {
    transform: scale(1);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
  }

  /* Firefox Thumb */
  &::-moz-range-thumb {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: ${e=>i(e).primary};
    border: 2px solid ${e=>i(e).surfaceHigh};
    cursor: pointer;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
    transition: transform 0.1s ease-in-out, background-color 0.1s ease-in-out;
  }

  &::-moz-range-thumb:hover {
    transform: scale(1.15);
    background: ${e=>i(e).primaryHigh};
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  &:disabled {
    opacity: 0.6;
    &::-webkit-slider-thumb {
      cursor: not-allowed;
      background: ${e=>i(e).secondaryTextHigh};
    }
    &::-moz-range-thumb {
      cursor: not-allowed;
      background: ${e=>i(e).secondaryTextHigh};
    }
  }
`,ce=h.forwardRef(({label:e,showValue:r=!0,fullWidth:n=!0,value:a,min:s=0,max:l=100,onChange:c,...d},p)=>t.jsxs(Gr,{$fullWidth:n,children:[(e||r)&&t.jsxs(Xr,{children:[e&&t.jsx("span",{children:e}),r&&t.jsx(Jr,{children:a})]}),t.jsx(Kr,{ref:p,value:a,min:s,max:l,onChange:c,...d})]}));ce.displayName="Slider";ce.__docgenInfo={description:"",methods:[],displayName:"Slider",props:{showValue:{defaultValue:{value:"true",computed:!1},required:!1},fullWidth:{defaultValue:{value:"true",computed:!1},required:!1},min:{defaultValue:{value:"0",computed:!1},required:!1},max:{defaultValue:{value:"100",computed:!1},required:!1}}};const Qr=o.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: ${({$fullWidth:e})=>e?"100%":"auto"};
  font-family: inherit;
`,Zr=o.label`
  font-size: 14px;
  font-weight: 600;
  color: ${e=>i(e).primaryText};
`,et=o.div`
  border: 2px dashed
    ${({$isDragActive:e,...r})=>e?i(r).primary:`${i(r).primaryHigh}60`};
  background-color: ${({$isDragActive:e,...r})=>e?`${i(r).primary}08`:i(r).surfaceHigh};
  border-radius: 12px;
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: ${({$disabled:e})=>e?"not-allowed":"pointer"};
  transition: all 0.2s ease-in-out;
  text-align: center;
  opacity: ${({$disabled:e})=>e?.6:1};

  &:hover:not([disabled]) {
    border-color: ${e=>i(e).primary};
    background-color: ${e=>i(e).surfaceDefault};
  }
`,rt=o.p`
  font-size: 14px;
  font-weight: 500;
  color: ${e=>i(e).primaryText};
  margin: 0;

  span {
    color: ${e=>i(e).primary};
    font-weight: 600;
    text-decoration: underline;
  }
`,tt=o.span`
  font-size: 11px;
  color: ${e=>i(e).secondaryTextHigh};
`,nt=o.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 6px;
`,it=o.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 12px;
  background-color: ${e=>i(e).surfaceDefault};
  border: 1px solid ${e=>i(e).primaryHigh}20;
  border-radius: 8px;
  font-size: 13px;
  color: ${e=>i(e).primaryText};
`,at=o.span`
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 70%;
`,ot=o.span`
  font-size: 11px;
  color: ${e=>i(e).secondaryTextHigh};
  margin-left: 8px;
`,st=o.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${e=>i(e).danger};
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: background-color 0.15s;

  &:hover {
    background-color: ${e=>i(e).danger}15;
  }

  svg {
    width: 16px;
    height: 16px;
  }
`,lt=o.input`
  display: none;
`,dt=({label:e,accept:r,multiple:n=!1,maxSizeMB:a=10,onChange:s,fullWidth:l=!0,disabled:c=!1})=>{const[d,p]=h.useState(!1),[f,x]=h.useState([]),b=h.useRef(null),u=m=>{const $=[],N=a*1024*1024;for(let T=0;T<m.length;T++){const S=m[T];S.size<=N?$.push(S):alert(`File "${S.name}" exceeds the maximum size of ${a}MB.`)}if($.length>0){let T=[];n?T=[...f,...$]:T=[$[0]],x(T),s&&s(T)}},v=m=>{m.preventDefault(),m.stopPropagation(),!c&&(m.type==="dragenter"||m.type==="dragover"?p(!0):m.type==="dragleave"&&p(!1))},k=m=>{m.preventDefault(),m.stopPropagation(),p(!1),!c&&m.dataTransfer.files&&m.dataTransfer.files[0]&&u(m.dataTransfer.files)},q=m=>{m.preventDefault(),m.target.files&&m.target.files[0]&&u(m.target.files)},R=()=>{!c&&b.current&&b.current.click()},C=m=>{const $=f.filter((N,T)=>T!==m);x($),s&&s($)},y=m=>{if(m===0)return"0 Bytes";const $=1024,N=["Bytes","KB","MB","GB"],T=Math.floor(Math.log(m)/Math.log($));return parseFloat((m/Math.pow($,T)).toFixed(2))+" "+N[T]};return t.jsxs(Qr,{$fullWidth:l,children:[e&&t.jsx(Zr,{children:e}),t.jsxs(et,{$isDragActive:d,$disabled:c,onDragEnter:v,onDragOver:v,onDragLeave:v,onDrop:k,onClick:R,children:[t.jsx(lt,{ref:b,type:"file",accept:r,multiple:n,disabled:c,onChange:q}),t.jsxs("svg",{style:{width:"36px",height:"36px",color:"currentColor"},viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[t.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),t.jsx("polyline",{points:"17 8 12 3 7 8"}),t.jsx("line",{x1:"12",y1:"3",x2:"12",y2:"15"})]}),t.jsxs(rt,{children:["Drag & drop files here, or ",t.jsx("span",{children:"browse"})]}),t.jsxs(tt,{children:["Max size: ",a,"MB"]})]}),f.length>0&&t.jsx(nt,{children:f.map((m,$)=>t.jsxs(it,{children:[t.jsxs(at,{children:[m.name,t.jsxs(ot,{children:["(",y(m.size),")"]})]}),t.jsx(st,{onClick:N=>{N.stopPropagation(),C($)},children:t.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[t.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),t.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})]},`${m.name}-${$}`))})]})};dt.__docgenInfo={description:"",methods:[],displayName:"FileUpload",props:{label:{required:!1,tsType:{name:"string"},description:""},accept:{required:!1,tsType:{name:"string"},description:""},multiple:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},maxSizeMB:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"10",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(files: File[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"File"}],raw:"File[]"},name:"files"}],return:{name:"void"}}},description:""},fullWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const ct=o.nav`
  display: flex;
  align-items: center;
  font-family: inherit;
  font-size: 14px;
`,pt=o.ol`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
`,ut=o.li`
  display: flex;
  align-items: center;
  color: ${({$isLast:e,...r})=>e?i(r).primaryText:i(r).secondaryTextHigh};
  font-weight: ${({$isLast:e})=>e?"600":"400"};

  a {
    color: inherit;
    text-decoration: none;
    transition: color 0.15s;

    &:hover {
      color: ${e=>i(e).primary};
      text-decoration: underline;
    }
  }
`,mt=o.span`
  display: inline-flex;
  align-items: center;
  margin: 0 8px;
  color: ${e=>i(e).secondaryTextHigh}80;
  user-select: none;

  svg {
    width: 14px;
    height: 14px;
  }
`,ft=({items:e,separator:r="/"})=>t.jsx(ct,{"aria-label":"breadcrumb",children:t.jsx(pt,{children:e.map((n,a)=>{const s=a===e.length-1;return t.jsxs(z.Fragment,{children:[t.jsx(ut,{$isLast:s,children:!s&&n.href?t.jsx("a",{href:n.href,onClick:n.onClick,children:n.label}):!s&&n.onClick?t.jsx("span",{style:{cursor:"pointer"},onClick:n.onClick,children:n.label}):t.jsx("span",{children:n.label})}),!s&&t.jsx(mt,{children:r})]},a)})})});ft.__docgenInfo={description:"",methods:[],displayName:"Breadcrumbs",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"Breadcrumb"}],raw:"Breadcrumb[]"},description:""},separator:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:'"/"',computed:!1}}}};const xt=o.nav`
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: inherit;
`,_=o.button`
  min-width: 36px;
  height: 36px;
  padding: 0 6px;
  border-radius: 8px;
  border: 1px solid
    ${({$isActive:e,...r})=>e?i(r).primary:`${i(r).primaryHigh}30`};
  background-color: ${({$isActive:e,...r})=>e?i(r).primary:i(r).surfaceHigh};
  color: ${({$isActive:e,...r})=>e?i(r).primaryContrastText:i(r).primaryText};
  font-size: 14px;
  font-weight: ${({$isActive:e})=>e?"700":"500"};
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-in-out;
  outline: none;

  &:hover:not(:disabled) {
    background-color: ${({$isActive:e,...r})=>e?i(r).primaryHigh:`${i(r).primary}15`};
    border-color: ${e=>i(e).primary};
    color: ${({$isActive:e,...r})=>e?i(r).primaryContrastText:i(r).primary};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.4;
    border-color: ${e=>i(e).primaryHigh}10;
  }

  svg {
    width: 18px;
    height: 18px;
  }
`,gt=o.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  color: ${e=>i(e).secondaryTextHigh};
  font-weight: 500;
  user-select: none;
`,ht=({currentPage:e,totalPages:r,onPageChange:n,siblingCount:a=1,disabled:s=!1})=>{const l=(x,b)=>{let u=b-x+1;return Array.from({length:u},(v,k)=>k+x)},d=(()=>{if(a*2+5>=r)return l(1,r);const b=Math.max(e-a,1),u=Math.min(e+a,r),v=b>2,k=u<r-2;if(!v&&k){let q=3+2*a;return[...l(1,q),"dots",r]}if(v&&!k){let q=3+2*a;return[1,"dots",...l(r-q+1,r)]}return v&&k?[1,"dots",...l(b,u),"dots",r]:l(1,r)})(),p=()=>{e>1&&!s&&n(e-1)},f=()=>{e<r&&!s&&n(e+1)};return t.jsxs(xt,{"aria-label":"pagination navigation",children:[t.jsx(_,{onClick:p,disabled:e===1||s,$isNavigation:!0,children:t.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:t.jsx("polyline",{points:"15 18 9 12 15 6"})})}),d.map((x,b)=>x==="dots"?t.jsx(gt,{children:"…"},`dots-${b}`):t.jsx(_,{$isActive:x===e,onClick:()=>n(x),disabled:s,children:x},x)),t.jsx(_,{onClick:f,disabled:e===r||s,$isNavigation:!0,children:t.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:t.jsx("polyline",{points:"9 18 15 12 9 6"})})})]})};ht.__docgenInfo={description:"",methods:[],displayName:"Pagination",props:{currentPage:{required:!0,tsType:{name:"number"},description:""},totalPages:{required:!0,tsType:{name:"number"},description:""},onPageChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(page: number) => void",signature:{arguments:[{type:{name:"number"},name:"page"}],return:{name:"void"}}},description:""},siblingCount:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const yt=o.a`
  font-family: inherit;
  font-size: inherit;
  font-weight: 600;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  transition: color 0.2s ease-in-out;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 1.5px;
    bottom: -1px;
    left: 0;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  ${({$variant:e,...r})=>{const n=i(r);switch(e){case"secondary":return g`
          color: ${n.secondaryTextHigh};
          &::after {
            background-color: ${n.secondaryTextHigh};
          }
          &:hover {
            color: ${n.primary};
          }
        `;case"subtle":return g`
          color: ${n.secondaryTextHigh}a0;
          font-weight: 400;
          &::after {
            background-color: ${n.primary};
          }
          &:hover {
            color: ${n.primary};
          }
        `;case"primary":default:return g`
          color: ${n.primary};
          &::after {
            background-color: ${n.primary};
          }
          &:hover {
            color: ${n.primaryHigh};
          }
        `}}}
`,pe=h.forwardRef(({children:e,variant:r="primary",external:n=!1,...a},s)=>{const l=n?{target:"_blank",rel:"noopener noreferrer"}:{};return t.jsxs(yt,{ref:s,$variant:r,...l,...a,children:[e,n&&t.jsxs("svg",{style:{width:"14px",height:"14px",display:"inline-block"},viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[t.jsx("path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}),t.jsx("polyline",{points:"15 3 21 3 21 9"}),t.jsx("line",{x1:"10",y1:"14",x2:"21",y2:"3"})]})]})});pe.displayName="Link";pe.__docgenInfo={description:"",methods:[],displayName:"Link",props:{variant:{defaultValue:{value:'"primary"',computed:!1},required:!1},external:{defaultValue:{value:"false",computed:!1},required:!1}}};const bt=o.ul`
  margin: 0;
  padding: 0;
  padding-left: 24px;
  list-style-type: ${({$ordered:e})=>e?"decimal":"disc"};
  font-family: inherit;
  display: flex;
  flex-direction: column;
  gap: 8px;
`,vt=o.li`
  font-size: 14px;
  line-height: 1.6;
  color: ${e=>i(e).primaryText};
  font-weight: 500;

  &::marker {
    color: ${e=>i(e).primary};
    font-weight: bold;
  }
`,$t=o.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 14px;
  line-height: 1.6;
  color: ${e=>i(e).primaryText};
  font-weight: 500;
`,wt=o.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${e=>i(e).primary};
  margin-top: 2px;
  flex-shrink: 0;

  svg {
    width: 16px;
    height: 16px;
  }
`,Tt=({children:e,ordered:r=!1})=>t.jsx(bt,{as:r?"ol":"ul",$ordered:r,children:e}),jt=({children:e,icon:r})=>r?t.jsx("li",{style:{listStyleType:"none"},children:t.jsxs($t,{children:[t.jsx(wt,{children:r}),t.jsx("div",{children:e})]})}):t.jsx(vt,{children:e});Tt.__docgenInfo={description:"",methods:[],displayName:"List",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},ordered:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};jt.__docgenInfo={description:"",methods:[],displayName:"ListItem",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const kt=o.div`
  width: 100%;
  overflow-x: auto;
  border-radius: 12px;
  border: 1px solid ${e=>i(e).primaryHigh}30;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.02);
`,qt=o.table`
  width: 100%;
  border-collapse: collapse;
  font-family: inherit;
  text-align: left;
  background-color: ${e=>i(e).surfaceHigh};
`,Nt=o.thead`
  background-color: ${e=>i(e).surfaceDefault};
  border-bottom: 2px solid ${e=>i(e).primaryHigh}40;
`,Rt=o.tbody`
  & > tr:not(:last-child) {
    border-bottom: 1px solid ${e=>i(e).primaryHigh}15;
  }
`,Ct=o.tr`
  transition: background-color 0.15s ease-in-out;

  &:hover {
    background-color: ${e=>i(e).primary}08;
  }

  ${({$striped:e,...r})=>e&&`
    &:nth-child(even) {
      background-color: ${i(r).surfaceDefault}50;
    }
  `}
`,It=o.th`
  padding: 14px 18px;
  font-size: 13px;
  font-weight: 700;
  color: ${e=>i(e).primaryText};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,Ht=o.td`
  padding: 14px 18px;
  font-size: 14px;
  font-weight: 500;
  color: ${e=>i(e).secondaryTextHigh};
`,zt=({children:e,responsive:r=!0,...n})=>{const a=t.jsx(qt,{...n,children:e});return r?t.jsx(kt,{children:a}):a},St=({children:e,...r})=>t.jsx(Nt,{...r,children:e}),_t=({children:e,...r})=>t.jsx(Rt,{...r,children:e}),Vt=({children:e,striped:r=!1,...n})=>t.jsx(Ct,{$striped:r,...n,children:e}),Bt=({children:e,...r})=>t.jsx(It,{...r,children:e}),At=({children:e,...r})=>t.jsx(Ht,{...r,children:e});zt.__docgenInfo={description:"",methods:[],displayName:"Table",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},responsive:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};St.__docgenInfo={description:"",methods:[],displayName:"Thead"};_t.__docgenInfo={description:"",methods:[],displayName:"Tbody"};Vt.__docgenInfo={description:"",methods:[],displayName:"Tr",props:{striped:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};Bt.__docgenInfo={description:"",methods:[],displayName:"Th"};At.__docgenInfo={description:"",methods:[],displayName:"Td"};const Lt=o.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  z-index: 9999;
  max-width: 380px;
  width: 100%;
  pointer-events: none;
`,Dt=I`
  from {
    transform: translateX(100%) translateY(10px);
    opacity: 0;
  }
  to {
    transform: translateX(0) translateY(0);
    opacity: 1;
  }
`,Mt=o.div`
  pointer-events: auto;
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 16px;
  background-color: ${e=>i(e).surfaceHigh};
  border-radius: 12px;
  border-left: 5px solid
    ${({$type:e,...r})=>{const n=i(r);return e==="success"?n.success:e==="warning"?n.warning:e==="error"?n.danger:n.info}};
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  animation: ${Dt} 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  font-family: inherit;
`,Et=o.div`
  flex-shrink: 0;
  color: ${({$type:e,...r})=>{const n=i(r);return e==="success"?n.success:e==="warning"?n.warning:e==="error"?n.danger:n.info}};
  display: flex;
  align-items: center;
  justify-content: center;
`,Ft=o.div`
  flex: 1;
`,Wt=o.h4`
  margin: 0;
  font-size: 14px;
  font-weight: 700;
  color: ${e=>i(e).primaryText};
`,Ot=o.p`
  margin: 4px 0 0 0;
  font-size: 13px;
  color: ${e=>i(e).secondaryTextHigh};
  line-height: 1.4;
`,Pt=o.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${e=>i(e).secondaryTextHigh};
  opacity: 0.7;
  padding: 0;
  margin-top: -2px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: opacity 0.15s;

  &:hover {
    opacity: 1;
  }

  svg {
    width: 16px;
    height: 16px;
  }
`,ue=h.createContext(void 0),Yt=({children:e})=>{const[r,n]=h.useState([]),a=h.useCallback(d=>{n(p=>p.filter(f=>f.id!==d))},[]),s=h.useCallback(({message:d,title:p,type:f="info",duration:x=4e3})=>{const b=Math.random().toString(36).substring(2,9);n(u=>[...u,{id:b,title:p,message:d,type:f,duration:x}]),x>0&&setTimeout(()=>{a(b)},x)},[a]),l={success:(d,p,f)=>s({message:d,title:p,type:"success",duration:f}),error:(d,p,f)=>s({message:d,title:p,type:"error",duration:f}),warning:(d,p,f)=>s({message:d,title:p,type:"warning",duration:f}),info:(d,p,f)=>s({message:d,title:p,type:"info",duration:f})},c=d=>{switch(d){case"success":return t.jsx(B,{size:20});case"warning":return t.jsx(Q,{size:20});case"error":return t.jsx(Z,{size:20});case"info":default:return t.jsx(K,{size:20})}};return t.jsxs(ue.Provider,{value:{toast:l,show:s,dismiss:a},children:[e,t.jsx(Lt,{children:r.map(d=>t.jsxs(Mt,{$type:d.type,children:[t.jsx(Et,{$type:d.type,children:c(d.type)}),t.jsxs(Ft,{children:[d.title&&t.jsx(Wt,{children:d.title}),t.jsx(Ot,{children:d.message})]}),t.jsx(Pt,{onClick:()=>a(d.id),children:t.jsx(J,{size:16})})]},d.id))})]})},bn=()=>{const e=h.useContext(ue);if(!e)throw new Error("useToast must be used within a ToastProvider");return e};Yt.__docgenInfo={description:"",methods:[],displayName:"ToastProvider",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const Ut=o.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 14px 24px;
  border-radius: 8px;
  font-family: inherit;
  font-size: 14px;
  line-height: 1.5;
  transition: all 0.25s ease-in-out;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);

  ${({$sticky:e})=>e&&g`
      position: sticky;
      top: 0;
      left: 0;
      right: 0;
      z-index: 100;
      border-radius: 0;
    `}

  ${({$variant:e,...r})=>{const n=i(r);let a="",s="";switch(e){case"success":a=`${n.success}15`,s=n.success;break;case"warning":a=`${n.warning}15`,s=n.warning;break;case"danger":a=`${n.danger}15`,s=n.danger;break;case"info":default:a=`${n.info}15`,s=n.info;break}return g`
      background-color: ${a};
      border-left: 4px solid ${s};
      color: ${n.primaryText};
      
      strong {
        color: ${s};
      }
    `}}
`,Gt=o.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 1;
`,Xt=o.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  
  color: ${({$variant:e,...r})=>{const n=i(r);return e==="success"?n.success:e==="warning"?n.warning:e==="danger"?n.danger:n.info}};
`,Jt=o.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${e=>i(e).secondaryTextHigh};
  opacity: 0.7;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.15s;

  &:hover {
    opacity: 1;
    background-color: rgba(0, 0, 0, 0.05);
  }
`,Kt=({variant:e="info",title:r,children:n,sticky:a=!1,closable:s=!1,onClose:l})=>{const[c,d]=h.useState(!0);if(!c)return null;const p=x=>{switch(x){case"success":return t.jsx(B,{size:20});case"warning":return t.jsx(Q,{size:20});case"danger":return t.jsx(Z,{size:20});case"info":default:return t.jsx(K,{size:20})}},f=()=>{d(!1),l&&l()};return t.jsxs(Ut,{$variant:e,$sticky:a,children:[t.jsxs(Gt,{children:[t.jsx(Xt,{$variant:e,children:p(e)}),t.jsxs("div",{children:[r&&t.jsxs("strong",{children:[r,": "]}),n]})]}),s&&t.jsx(Jt,{onClick:f,"aria-label":"Close banner",children:t.jsx(J,{size:16})})]})};Kt.__docgenInfo={description:"",methods:[],displayName:"Banner",props:{variant:{required:!1,tsType:{name:"union",raw:'"info" | "success" | "warning" | "danger"',elements:[{name:"literal",value:'"info"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"danger"'}]},description:"",defaultValue:{value:'"info"',computed:!1}},title:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},sticky:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},closable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const Qt=o.div`
  border: 1px solid ${e=>i(e).surfaceHigh};
  border-radius: 8px;
  overflow: hidden;
  font-family: inherit;
  background-color: ${e=>i(e).surfaceDefault};
`,Zt=o.div`
  border-bottom: 1px solid ${e=>i(e).surfaceHigh};
  
  &:last-child {
    border-bottom: none;
  }
`,en=o.button`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  background: none;
  border: none;
  text-align: left;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  color: ${e=>i(e).primaryText};
  transition: background-color 0.2s, color 0.2s;

  &:hover {
    background-color: ${e=>i(e).surfaceHigh};
  }

  ${({$isOpen:e,...r})=>e&&g`
      background-color: ${i(r).surfaceHigh};
      color: ${i(r).primary};
    `}
`,rn=o.span`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  color: ${e=>i(e).secondaryTextHigh};

  transform: ${({$isOpen:e})=>e?"rotate(180deg)":"rotate(0deg)"};
`,tn=o.div`
  overflow: hidden;
  transition: max-height 0.25s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.25s ease;
  max-height: ${({$isOpen:e,$maxHeight:r})=>e?`${r}px`:"0px"};
  opacity: ${({$isOpen:e})=>e?1:0};
  background-color: ${e=>i(e).surfaceDefault};
`,nn=o.div`
  padding: 16px 20px 20px 20px;
  font-size: 14px;
  line-height: 1.6;
  color: ${e=>i(e).secondaryTextHigh};
`,an=({title:e,children:r,isOpen:n=!1,onToggle:a})=>{const s=h.useRef(null),[l,c]=h.useState(0);return h.useEffect(()=>{s.current&&c(n?s.current.scrollHeight:0)},[n,r]),t.jsxs(Zt,{children:[t.jsxs(en,{$isOpen:n,onClick:a,type:"button",children:[t.jsx("span",{children:e}),t.jsx(rn,{$isOpen:n,children:t.jsx(Ir,{size:18})})]}),t.jsx(tn,{$isOpen:n,$maxHeight:l,children:t.jsx("div",{ref:s,children:t.jsx(nn,{children:r})})})]})},on=({children:e,allowMultiple:r=!1})=>{const[n,a]=h.useState([]),s=l=>{a(r?c=>c.includes(l)?c.filter(d=>d!==l):[...c,l]:c=>c.includes(l)?[]:[l])};return t.jsx(Qt,{children:z.Children.map(e,(l,c)=>{if(!z.isValidElement(l))return null;const d=n.includes(c);return z.cloneElement(l,{isOpen:d,onToggle:()=>s(c)})})})};an.__docgenInfo={description:"",methods:[],displayName:"AccordionItem",props:{title:{required:!0,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},isOpen:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onToggle:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};on.__docgenInfo={description:"",methods:[],displayName:"Accordion",props:{children:{required:!0,tsType:{name:"union",raw:"React.ReactElement<AccordionItemProps> | React.ReactElement<AccordionItemProps>[]",elements:[{name:"ReactReactElement",raw:"React.ReactElement<AccordionItemProps>",elements:[{name:"AccordionItemProps"}]},{name:"Array",elements:[{name:"ReactReactElement",raw:"React.ReactElement<AccordionItemProps>",elements:[{name:"AccordionItemProps"}]}],raw:"React.ReactElement<AccordionItemProps>[]"}]},description:""},allowMultiple:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const sn=o.div`
  display: grid;
  width: 100%;
  
  ${({$columns:e=12,$gap:r="16px",$alignItems:n,$justifyContent:a})=>{const s=typeof r=="number"?`${r}px`:r;return g`
      grid-template-columns: repeat(${e}, minmax(0, 1fr));
      gap: ${s};
      align-items: ${n||"stretch"};
      justify-content: ${a||"stretch"};
    `}}
`,V=(e,r,n)=>{if(r===void 0&&n===void 0)return null;const a=r!==void 0?`grid-column-end: span ${r};`:"",s=n!==void 0?`grid-column-start: ${n+1};`:"",l={sm:"576px",md:"768px",lg:"992px",xl:"1200px"}[e];return g`
    @media (min-width: ${l}) {
      ${a}
      ${s}
    }
  `},ln=o.div`
  grid-column: span 12; // default span

  ${({$span:e,$offset:r})=>{if(typeof e=="number"||typeof r=="number"){const l=typeof e=="number"?e:void 0,c=typeof r=="number"?r:void 0;return g`
        ${l!==void 0&&g`grid-column-end: span ${l};`}
        ${c!==void 0&&g`grid-column-start: ${c+1};`}
      `}const n=[],a=(e==null?void 0:e.sm)||12,s=r==null?void 0:r.sm;return n.push(g`
      grid-column-end: span ${a};
      ${s!==void 0&&g`grid-column-start: ${s+1};`}
    `),((e==null?void 0:e.md)!==void 0||(r==null?void 0:r.md)!==void 0)&&n.push(V("md",e==null?void 0:e.md,r==null?void 0:r.md)),((e==null?void 0:e.lg)!==void 0||(r==null?void 0:r.lg)!==void 0)&&n.push(V("lg",e==null?void 0:e.lg,r==null?void 0:r.lg)),((e==null?void 0:e.xl)!==void 0||(r==null?void 0:r.xl)!==void 0)&&n.push(V("xl",e==null?void 0:e.xl,r==null?void 0:r.xl)),n}}
`,dn=({children:e,columns:r=12,gap:n="16px",alignItems:a,justifyContent:s})=>t.jsx(sn,{$columns:r,$gap:n,$alignItems:a,$justifyContent:s,children:e}),cn=({children:e,span:r,offset:n})=>t.jsx(ln,{$span:r,$offset:n,children:e});dn.__docgenInfo={description:"",methods:[],displayName:"Grid",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},columns:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"12",computed:!1}},gap:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"",defaultValue:{value:'"16px"',computed:!1}},alignItems:{required:!1,tsType:{name:"string"},description:""},justifyContent:{required:!1,tsType:{name:"string"},description:""}}};cn.__docgenInfo={description:"",methods:[],displayName:"Col",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},span:{required:!1,tsType:{name:"union",raw:"number | { sm?: number; md?: number; lg?: number; xl?: number }",elements:[{name:"number"},{name:"signature",type:"object",raw:"{ sm?: number; md?: number; lg?: number; xl?: number }",signature:{properties:[{key:"sm",value:{name:"number",required:!1}},{key:"md",value:{name:"number",required:!1}},{key:"lg",value:{name:"number",required:!1}},{key:"xl",value:{name:"number",required:!1}}]}}]},description:""},offset:{required:!1,tsType:{name:"union",raw:"number | { sm?: number; md?: number; lg?: number; xl?: number }",elements:[{name:"number"},{name:"signature",type:"object",raw:"{ sm?: number; md?: number; lg?: number; xl?: number }",signature:{properties:[{key:"sm",value:{name:"number",required:!1}},{key:"md",value:{name:"number",required:!1}},{key:"lg",value:{name:"number",required:!1}},{key:"xl",value:{name:"number",required:!1}}]}}]},description:""}}};const pn=o.div`
  display: flex;
  border: none;
  
  ${({$orientation:e="horizontal",$thickness:r="1px",$color:n,$margin:a="16px 0",...s})=>{const l=i(s).surfaceHigh,c=n||l,d=typeof r=="number"?`${r}px`:r,p=typeof a=="number"?`${a}px`:a;return e==="vertical"?g`
        width: ${d};
        height: auto;
        align-self: stretch;
        background-color: ${c};
        margin: ${p==="16px 0"?"0 16px":p};
      `:g`
      height: ${d};
      width: 100%;
      background-color: ${c};
      margin: ${p};
    `}}
`,un=({orientation:e="horizontal",thickness:r="1px",color:n,margin:a="16px 0"})=>t.jsx(pn,{$orientation:e,$thickness:r,$color:n,$margin:a});un.__docgenInfo={description:"",methods:[],displayName:"Divider",props:{orientation:{required:!1,tsType:{name:"union",raw:'"horizontal" | "vertical"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'}]},description:"",defaultValue:{value:'"horizontal"',computed:!1}},thickness:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"",defaultValue:{value:'"1px"',computed:!1}},color:{required:!1,tsType:{name:"string"},description:""},margin:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"",defaultValue:{value:'"16px 0"',computed:!1}}}};const mn=o.div`
  flex-shrink: 0;

  ${({$x:e,$y:r,$flex:n})=>{const a=e!==void 0?typeof e=="number"?`${e}px`:e:void 0,s=r!==void 0?typeof r=="number"?`${r}px`:r:void 0;return g`
      width: ${a||"auto"};
      height: ${s||"auto"};
      
      ${a&&!s&&g`display: inline-block;`}
      ${!a&&s&&g`display: block;`}
      ${n!==void 0&&g`flex: ${n};`}
    `}}
`,fn=({x:e,y:r,flex:n})=>t.jsx(mn,{$x:e,$y:r,$flex:n});fn.__docgenInfo={description:"",methods:[],displayName:"Spacer",props:{x:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},y:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},flex:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""}}};const w=(e,r)=>e===void 0?r:typeof e=="number"?`${e}px`:e;o.div`
  display: flex;
  flex-direction: ${({$flexDirection:e})=>e||"column"};
  gap: ${({$gap:e})=>w(e,"24px")};
  width: 100%;
  padding: ${({$padding:e})=>w(e,"12px")};
  overflow-y: auto;
  box-sizing: border-box;
`;o.div`
  background-color: ${({$backgroundColor:e,...r})=>e||i(r).surfaceHigh};
  border: 1px solid ${e=>i(e).primaryHigh}40;
  border-radius: ${({$borderRadius:e})=>w(e,"16px")};
  padding: ${({$padding:e})=>w(e,"24px")};
  display: flex;
  flex-direction: column;
  gap: ${({$gap:e})=>w(e,"16px")};
`;o.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: ${({$gap:e})=>w(e,"20px")};
  background-color: ${({$backgroundColor:e,...r})=>e||i(r).surfaceDefault};
  padding: ${({$padding:e})=>w(e,"16px")};
  border-radius: ${({$borderRadius:e})=>w(e,"12px")};
  border: 1px solid ${e=>i(e).primaryHigh}20;
`;o.button`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${({$color:e})=>e};
  border: 3px solid ${({$isActive:e,...r})=>e?i(r).primaryText:"transparent"};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: scale(1.15);
  }
`;o.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  gap: 12px;
  margin-top: 8px;
`;o.div`
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid ${e=>i(e).primaryHigh}30;
  background-color: ${e=>i(e).surfaceDefault};
  text-align: center;
  font-size: 11px;
`;o.div`
  height: 60px;
  background-color: ${({$color:e})=>e};
  border-bottom: 1px solid ${e=>i(e).primaryHigh}20;
`;o.div`
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  color: ${e=>i(e).primaryText};
  font-weight: 600;

  span {
    font-size: 10px;
    color: ${e=>i(e).secondaryTextHigh};
    font-weight: normal;
  }
`;o.div`
  background-color: ${({$backgroundColor:e,...r})=>e||i(r).surfaceHigh};
  border: ${({$border:e,...r})=>e||`1px solid ${i(r).primaryHigh}30`};
  border-radius: ${({$borderRadius:e})=>w(e,"16px")};
  padding: ${({$padding:e})=>w(e,"20px")};
  display: flex;
  flex-direction: column;
  gap: ${({$gap:e})=>w(e,"16px")};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.02);
`;o.div`
  border-bottom: ${({$borderBottom:e,...r})=>e||`1px solid ${i(r).primaryHigh}20`};
  padding-bottom: ${({$paddingBottom:e})=>w(e,"10px")};
  margin-bottom: ${({$marginBottom:e})=>w(e,"6px")};
`;o.div`
  display: flex;
  flex-wrap: ${({$flexWrap:e})=>e||"wrap"};
  gap: ${({$gap:e})=>w(e,"12px")};
  align-items: ${({$alignItems:e})=>e||"center"};
  justify-content: ${({$justifyContent:e})=>e||"flex-start"};
`;export{on as A,X as B,Ue as C,un as D,bn as E,dt as F,dn as G,sr as H,tr as I,Cr as J,dr as K,pe as L,Ye as M,be as N,cr as O,lr as P,Pr as R,fn as S,zt as T,an as a,Ve as b,Kt as c,ft as d,F as e,te as f,Ae as g,cn as h,U as i,Tt as j,jt as k,ht as l,oe as m,Se as n,Er as o,He as p,ce as q,jr as r,de as s,St as t,Vt as u,Bt as v,_t as w,At as x,G as y,Yt as z};
