"use strict";(self.webpackChunkmy_project=self.webpackChunkmy_project||[]).push([[801],{63339:(K,R,n)=>{n.r(R),n.d(R,{default:()=>_t});var e=n(67294),i=n(68547),B=n(23724),P=n(27361),Q=n.n(P);const S={i8:"4.2.2"};var W=n(32104),p=n(49656),V=n(99168),x=n(61080),C=n(78384),G=n(45697),s=n.n(G),T=n(97132),N=n(14276),v=n(80244),b=n(24824),l=n(5493),d=n(49425),E=n(9008),M=n(33957),Be=n.n(M),be=n(69567),Ne=n.n(be),Ge=n(80380);const Ue=(0,C.default)(l.Box)`
  width: ${150/16}rem;
  position: absolute;
  bottom: ${({theme:t})=>t.spaces[9]};
  left: ${({theme:t})=>t.spaces[5]};
`,te=(0,C.default)(p.NavLink)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  padding: ${({theme:t})=>`${t.spaces[2]} ${t.spaces[4]}`};
  border-radius: ${({theme:t})=>t.spaces[1]};

  &:hover {
    background: ${({theme:t,logout:o})=>o?t.colors.danger100:t.colors.primary100};
    text-decoration: none;
  }

  svg {
    path {
      fill: ${({theme:t})=>t.colors.danger600};
    }
  }
`,ne=({generalSectionLinks:t,pluginsSectionLinks:o})=>{const a=(0,e.useRef)(),[r,u]=(0,e.useState)(!1),{logos:{menu:c}}=(0,Ge.Z)(),[f,y]=(0,i.usePersistentState)("navbar-condensed",!1),{userDisplayName:h}=(0,i.useAppInfos)(),{formatMessage:g}=(0,T.useIntl)(),L=h.split(" ").map(m=>m.substring(0,1)).join("").substring(0,2),D=()=>u(m=>!m),j=()=>{i.auth.clearAppStorage(),D()},$=m=>{var A,I;!m.currentTarget.contains(m.relatedTarget)&&((I=(A=m.relatedTarget)==null?void 0:A.parentElement)==null?void 0:I.id)!=="main-nav-user-button"&&u(!1)},F=g({id:"app.components.LeftMenu.navbrand.title",defaultMessage:"Strapi Dashboard"});return e.createElement(v.MainNav,{condensed:f},e.createElement(v.NavBrand,{as:p.NavLink,workplace:g({id:"app.components.LeftMenu.navbrand.workplace",defaultMessage:"Workplace"}),title:F,icon:e.createElement("img",{src:c.custom||c.default,alt:g({id:"app.components.LeftMenu.logo.alt",defaultMessage:"Application logo"})})}),e.createElement(N.Divider,null),e.createElement(v.NavSections,null,e.createElement(v.NavLink,{as:p.NavLink,to:"/content-manager",icon:e.createElement(Be(),null)},g({id:"global.content-manager",defaultMessage:"Content manager"})),o.length>0?e.createElement(v.NavSection,{label:"Plugins"},o.map(m=>{const A=m.icon;return e.createElement(v.NavLink,{as:p.NavLink,to:m.to,key:m.to,icon:e.createElement(A,null)},g(m.intlLabel))})):null,t.length>0?e.createElement(v.NavSection,{label:"General"},t.map(m=>{const A=m.icon;return e.createElement(v.NavLink,{as:p.NavLink,badgeContent:m.notificationsCount>0&&m.notificationsCount.toString()||void 0,to:m.to,key:m.to,icon:e.createElement(A,null)},g(m.intlLabel))})):null),e.createElement(v.NavUser,{id:"main-nav-user-button",ref:a,onClick:D,initials:L},h),r&&e.createElement(Ue,{onBlur:$,padding:1,shadow:"tableShadow",background:"neutral0",hasRadius:!0},e.createElement(b.FocusTrap,{onEscape:D},e.createElement(E.Stack,{spacing:0},e.createElement(te,{tabIndex:0,onClick:D,to:"/me"},e.createElement(d.Typography,null,g({id:"global.profile",defaultMessage:"Profile"}))),e.createElement(te,{tabIndex:0,onClick:j,logout:"logout",to:"/auth/login"},e.createElement(d.Typography,{textColor:"danger600"},g({id:"app.components.LeftMenu.logout",defaultMessage:"Logout"})),e.createElement(Ne(),null))))),e.createElement(v.NavCondense,{onClick:()=>y(m=>!m)},g(f?{id:"app.components.LeftMenu.expand",defaultMessage:"Expand the navbar"}:{id:"app.components.LeftMenu.collapse",defaultMessage:"Collapse the navbar"})))};ne.propTypes={generalSectionLinks:s().array.isRequired,pluginsSectionLinks:s().array.isRequired};const Fe=ne;var O=n(67826),We=n(62031);const je=(0,C.default)(l.Box)`
  flex: 1;
`,oe=({children:t,sideNav:o})=>{const{formatMessage:a}=(0,T.useIntl)();return e.createElement(l.Box,{background:"neutral100"},e.createElement(We.SkipToContent,null,a({id:"skipToContent",defaultMessage:"Skip to content"})),e.createElement(O.Flex,{alignItems:"flex-start"},o,e.createElement(je,null,t)))};oe.propTypes={children:s().node.isRequired,sideNav:s().node.isRequired};const $e=oe;var Y=n(67814),ae=n(1200);const Ke=(0,C.default)(l.Box)`
  position: fixed;
  bottom: ${({theme:t})=>t.spaces[2]};
  right: ${({theme:t})=>t.spaces[2]};
`,Ve=C.default.button`
  width: ${({theme:t})=>t.spaces[8]};
  height: ${({theme:t})=>t.spaces[8]};
  background: ${({theme:t})=>t.colors.primary600};
  box-shadow: ${({theme:t})=>t.shadows.tableShadow};
  border-radius: 50%;
  svg {
    color: ${({theme:t})=>t.colors.buttonNeutral0};
  }
`,ze=(0,C.default)(l.Box)`
  position: absolute;
  bottom: ${({theme:t})=>`${t.spaces[9]}`};
  right: 0;
  width: ${200/16}rem;
`,ke=C.default.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: ${({theme:t})=>t.spaces[2]};
  padding-left: ${({theme:t})=>t.spaces[5]};

  svg {
    color: ${({theme:t})=>t.colors.neutral600};
    margin-right: ${({theme:t})=>t.spaces[2]};
  }

  &:hover {
    background: ${({theme:t})=>t.colors.neutral100};
    color: ${({theme:t})=>t.colors.neutral500};

    svg {
      color: ${({theme:t})=>t.colors.neutral700};
    }

    ${[d.Typography]} {
      color: ${({theme:t})=>t.colors.neutral700};
    }
  }

  ${[d.Typography]} {
    color: ${({theme:t})=>t.colors.neutral600};
  }
`,He=()=>{const[t,o]=(0,e.useState)(!1),{formatMessage:a}=(0,T.useIntl)(),{showTutorials:r}=(0,W.um)();if(!r)return null;const u=[{icon:"book",label:a({id:"global.documentation",defaultMessage:"Documentation"}),destination:"https://docs.strapi.io"},{icon:"file",label:a({id:"app.static.links.cheatsheet",defaultMessage:"CheatSheet"}),destination:"https://strapi-showcase.s3-us-west-2.amazonaws.com/CheatSheet.pdf"}],c=()=>{o(f=>!f)};return e.createElement(Ke,{as:"aside"},e.createElement(Ve,{id:"onboarding","aria-label":a({id:"app.components.Onboarding.help.button",defaultMessage:"Help button"}),onClick:c},!t&&e.createElement(Y.G,{icon:ae.faQuestion}),t&&e.createElement(Y.G,{icon:ae.faTimes})),t&&e.createElement(b.FocusTrap,{onEscape:c},e.createElement(ze,{background:"neutral0",hasRadius:!0,shadow:"tableShadow",paddingBottom:2,paddingTop:2},u.map(f=>e.createElement(ke,{key:f.label,rel:"nofollow noreferrer noopener",target:"_blank",href:f.destination},e.createElement(Y.G,{icon:f.icon}),e.createElement(d.Typography,null,f.label))))))};var se=n(58836),Ze=n(38914),re=n.n(Ze),Qe=n(76910),Ye=n(59471),Xe=n(30741),ie=n(19408),we=n(84040),Je=n.n(we);const qe=(0,C.default)(O.Flex)`
  position: fixed;
  z-index: 4;
  inset: 0;
  /* this is theme.colors.neutral800 with opacity */
  background: ${({theme:t})=>`${t.colors.neutral800}1F`};
`,le=({onClose:t,onSkip:o,children:a,hideSkip:r})=>{const{formatMessage:u}=(0,T.useIntl)();return e.createElement(Ye.Portal,null,e.createElement(qe,{onClick:t,padding:8,justifyContent:"center"},e.createElement(b.FocusTrap,{onEscape:t},e.createElement(E.Stack,{background:"neutral0",width:(0,i.pxToRem)(660),shadow:"popupShadow",hasRadius:!0,padding:4,spacing:8,role:"dialog","aria-modal":!0,onClick:c=>c.stopPropagation()},e.createElement(O.Flex,{justifyContent:"flex-end"},e.createElement(Xe.IconButton,{onClick:t,"aria-label":u({id:"app.utils.close-label",defaultMessage:"Close"}),icon:e.createElement(Je(),null)})),e.createElement(l.Box,{paddingLeft:7,paddingRight:7,paddingBottom:r?8:0},a),!r&&e.createElement(O.Flex,{justifyContent:"flex-end"},e.createElement(ie.Button,{variant:"tertiary",onClick:o},u({id:"app.components.GuidedTour.skip",defaultMessage:"Skip the tour"})))))))};le.propTypes={children:s().node.isRequired,onClose:s().func.isRequired,onSkip:s().func.isRequired,hideSkip:s().bool.isRequired};const _e=le;var de=n(8041);const ce={stepContent:null,sectionIndex:null,stepIndex:null,hasSectionAfter:!1,hasStepAfter:!1},et=(t=ce,o)=>(0,de.default)(t,a=>{switch(o.type){case"UPDATE_MODAL":{a.stepContent=o.content,a.sectionIndex=o.newSectionIndex,a.stepIndex=o.newStepIndex,a.hasSectionAfter=o.newHasSectionAfter,a.hasStepAfter=o.newHasStepAfter;break}default:return a}});var tt=n(77602),pe=n.n(tt);const nt=C.default.li`
  list-style: disc;
`,ue=({id:t,defaultMessage:o})=>{const{formatMessage:a}=(0,T.useIntl)();return e.createElement(E.Stack,{spacing:4,paddingBottom:6},a({id:t,defaultMessage:o},{documentationLink:r=>e.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/rest-api.html#api-parameters"},r),b:r=>e.createElement(d.Typography,{fontWeight:"semiBold"},r),p:r=>e.createElement(d.Typography,null,r),light:r=>e.createElement(d.Typography,{textColor:"neutral600"},r),ul:r=>e.createElement(l.Box,{paddingLeft:6},e.createElement("ul",null,r)),li:r=>e.createElement(nt,null,r)}))};ue.propTypes={id:s().string.isRequired,defaultMessage:s().string.isRequired};const ot=ue;var X=n(66952),at=n(71289);const w=({number:t,last:o,type:a})=>e.createElement(l.Box,{paddingTop:3,paddingBottom:o?0:3},e.createElement(at.Z,{number:t,type:a}));w.defaultProps={number:void 0,last:!1,type:""},w.propTypes={number:s().number,last:s().bool,type:s().string};const me=w;var U=n(16289),st=Object.defineProperty,ge=Object.getOwnPropertySymbols,rt=Object.prototype.hasOwnProperty,it=Object.prototype.propertyIsEnumerable,fe=(t,o,a)=>o in t?st(t,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[o]=a,lt=(t,o)=>{for(var a in o||(o={}))rt.call(o,a)&&fe(t,a,o[a]);if(ge)for(var a of ge(o))it.call(o,a)&&fe(t,a,o[a]);return t};const J=({title:t,content:o,cta:a,onCtaClick:r,sectionIndex:u,stepIndex:c,hasSectionAfter:f})=>{const{formatMessage:y}=(0,T.useIntl)(),h=u>0,g=c>0,L=u+1;return e.createElement(e.Fragment,null,e.createElement(O.Flex,{alignItems:"stretch"},e.createElement(O.Flex,{marginRight:8,justifyContent:"center",minWidth:(0,i.pxToRem)(30)},h&&e.createElement(X.Z,{type:U.hx,minHeight:(0,i.pxToRem)(24)})),e.createElement(d.Typography,{variant:"sigma",textColor:"primary600"},y({id:"app.components.GuidedTour.title",defaultMessage:"3 steps to get started"}))),e.createElement(O.Flex,null,e.createElement(O.Flex,{marginRight:8,minWidth:(0,i.pxToRem)(30)},e.createElement(me,{number:u+1,type:g?U.hx:U.lW})),e.createElement(d.Typography,{variant:"alpha",fontWeight:"bold",textColor:"neutral800",as:"h3",id:"title"},y(t))),e.createElement(O.Flex,{alignItems:"stretch"},e.createElement(O.Flex,{marginRight:8,direction:"column",justifyContent:"center",minWidth:(0,i.pxToRem)(30)},f&&e.createElement(e.Fragment,null,e.createElement(X.Z,{type:U.hx}),g&&e.createElement(me,{number:L+1,type:U.lW,last:!0}))),e.createElement(l.Box,null,e.createElement(ot,lt({},o)),a&&(a.target?e.createElement(i.LinkButton,{endIcon:e.createElement(pe(),null),onClick:r,to:a.target},y(a.title)):e.createElement(ie.Button,{endIcon:e.createElement(pe(),null),onClick:r},y(a.title))))),g&&f&&e.createElement(l.Box,{paddingTop:3},e.createElement(O.Flex,{marginRight:8,justifyContent:"center",width:(0,i.pxToRem)(30)},e.createElement(X.Z,{type:U.hx,minHeight:(0,i.pxToRem)(24)}))))};J.defaultProps={currentStep:null,cta:void 0},J.propTypes={sectionIndex:s().number.isRequired,stepIndex:s().number.isRequired,hasSectionAfter:s().bool.isRequired,content:s().shape({id:s().string.isRequired,defaultMessage:s().string.isRequired}).isRequired,cta:s().shape({target:s().string,title:s().shape({id:s().string.isRequired,defaultMessage:s().string.isRequired})}),currentStep:s().string,onCtaClick:s().func.isRequired,title:s().shape({id:s().string.isRequired,defaultMessage:s().string.isRequired}).isRequired};const dt=J;var ct=Object.defineProperty,pt=Object.defineProperties,ut=Object.getOwnPropertyDescriptors,he=Object.getOwnPropertySymbols,mt=Object.prototype.hasOwnProperty,gt=Object.prototype.propertyIsEnumerable,Ee=(t,o,a)=>o in t?ct(t,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[o]=a,ft=(t,o)=>{for(var a in o||(o={}))mt.call(o,a)&&Ee(t,a,o[a]);if(he)for(var a of he(o))gt.call(o,a)&&Ee(t,a,o[a]);return t},ht=(t,o)=>pt(t,ut(o));const Et=()=>{const{currentStep:t,guidedTourState:o,setCurrentStep:a,setStepState:r,isGuidedTourVisible:u,setSkipped:c}=(0,i.useGuidedTour)(),[f,y]=(0,e.useState)(t),[{stepContent:h,sectionIndex:g,stepIndex:L,hasSectionAfter:D,hasStepAfter:j},$]=(0,e.useReducer)(et,ce),{trackUsage:F}=(0,i.useTracking)();(0,e.useEffect)(()=>{if(!t){y(!1);return}const[I]=re()(o,t);y(!I&&u)},[t,o,u]),(0,e.useEffect)(()=>{if(t){const[I]=re()(Qe.Z,t),k=Object.keys(o),[H,De]=t.split("."),ee=k.indexOf(H),Z=Object.keys(o[H]).indexOf(De),en=ee<k.length-1,tn=Z<Object.keys(o[H]).length-1;$({type:"UPDATE_MODAL",content:I,newSectionIndex:ee,newStepIndex:Z,newHasSectionAfter:en,newHasStepAfter:tn})}},[t,o]);const m=()=>{r(t,!0),F(h.trackingEvent),a(null)},A=()=>{c(!0),a(null),F("didSkipGuidedtour")};return f&&h?e.createElement(_e,{hideSkip:!j&&!D,onSkip:A,onClose:m},e.createElement(dt,ht(ft({},h),{onCtaClick:m,currentStep:t,sectionIndex:g,stepIndex:L,hasSectionAfter:D}))):null},yt=(0,e.lazy)(()=>Promise.all([n.e(3852),n.e(7909),n.e(596),n.e(3224),n.e(9102),n.e(994)]).then(n.bind(n,50706))),vt=(0,e.lazy)(()=>Promise.all([n.e(791),n.e(3981)]).then(n.bind(n,87512))),Tt=(0,e.lazy)(()=>n.e(3677).then(n.bind(n,51397))),Pt=(0,e.lazy)(()=>Promise.all([n.e(3852),n.e(5516)]).then(n.bind(n,57837))),ye=(0,e.lazy)(()=>Promise.resolve().then(n.bind(n,92776))),Ct=(0,e.lazy)(()=>n.e(5629).then(n.bind(n,40953))),Mt=(0,e.lazy)(()=>n.e(9497).then(n.bind(n,60762))),ve=(0,e.lazy)(()=>Promise.all([n.e(3852),n.e(7909),n.e(596),n.e(2066),n.e(5895)]).then(n.bind(n,857))),Ot=()=>{const{trackUsage:t}=(0,i.useTracking)();(0,e.useEffect)(()=>{t("didAccessAuthenticatedAdministration")},[])},Rt=()=>{Ot();const{isLoading:t,generalSectionLinks:o,pluginsSectionLinks:a}=(0,W.H9)(),{menu:r}=(0,i.useStrapiApp)(),u=(0,e.useMemo)(()=>r.filter(c=>c.Component).map(({to:c,Component:f,exact:y})=>(0,se.ot)(f,c,y)),[r]);return t?e.createElement(i.LoadingIndicatorPage,null):e.createElement(V.DndProvider,{backend:x.PD},e.createElement($e,{sideNav:e.createElement(Fe,{generalSectionLinks:o,pluginsSectionLinks:a})},e.createElement(e.Suspense,{fallback:e.createElement(i.LoadingIndicatorPage,null)},e.createElement(p.Switch,null,e.createElement(p.Route,{path:"/",component:vt,exact:!0}),e.createElement(p.Route,{path:"/me",component:Mt,exact:!0}),e.createElement(p.Route,{path:"/content-manager",component:yt}),u,e.createElement(p.Route,{path:"/settings/:settingId",component:ve}),e.createElement(p.Route,{path:"/settings",component:ve,exact:!0}),e.createElement(p.Route,{path:"/marketplace"},e.createElement(Pt,null)),e.createElement(p.Route,{path:"/list-plugins",exact:!0},e.createElement(Tt,null)),e.createElement(p.Route,{path:"/404",component:ye}),e.createElement(p.Route,{path:"/500",component:Ct}),e.createElement(p.Route,{path:"",component:ye}))),e.createElement(Et,null),e.createElement(He,null)))};var St=Object.defineProperty,Te=Object.getOwnPropertySymbols,At=Object.prototype.hasOwnProperty,It=Object.prototype.propertyIsEnumerable,Pe=(t,o,a)=>o in t?St(t,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[o]=a,xt=(t,o)=>{for(var a in o||(o={}))At.call(o,a)&&Pe(t,a,o[a]);if(Te)for(var a of Te(o))It.call(o,a)&&Pe(t,a,o[a]);return t};const Lt=t=>({plugins:Object.keys(t).reduce((o,a)=>(o[a]=xt({},t[a]),o),{})});var Dt=n(36968),Bt=n.n(Dt);const Ce={plugins:null},bt=(t=Ce,o)=>(0,de.default)(t,a=>{switch(o.type){case"SET_PLUGIN_READY":{Bt()(a,["plugins",o.pluginId,"isReady"],!0);break}default:return a}}),Nt=()=>{const{plugins:t}=(0,i.useStrapiApp)(),[{plugins:o},a]=(0,e.useReducer)(bt,Ce,()=>Lt(t)),r=(0,e.useRef)(c=>{a({type:"SET_PLUGIN_READY",pluginId:c})});if(Object.keys(o).some(c=>o[c].isReady===!1)){const c=Object.keys(o).reduce((f,y)=>{const h=o[y].initializer;if(h){const g=o[y].pluginId;f.push(e.createElement(h,{key:g,setPlugin:r.current}))}return f},[]);return e.createElement(e.Fragment,null,c,e.createElement(i.LoadingIndicatorPage,null))}return e.createElement(Rt,null)};var Me=n(37424),Oe=n(68493);const Gt=()=>({type:Oe.l}),Ut=t=>({type:Oe.m,permissions:t}),Re=({children:t,permissions:o,refetchPermissions:a})=>{const{allPermissions:r}=(0,Me.v9)(c=>c.rbacProvider),u=(0,Me.I0)();return(0,e.useEffect)(()=>(u(Ut(o)),()=>{u(Gt())}),[o,u]),r?e.createElement(i.RBACProviderContext.Provider,{value:{allPermissions:r,refetchPermissions:a}},t):e.createElement(i.LoadingIndicatorPage,null)};Re.propTypes={children:s().element.isRequired,permissions:s().array.isRequired,refetchPermissions:s().func.isRequired};const Ft=Re;var Wt=n(9669),jt=n.n(Wt),$t=n(36625),q=n.n($t);const Se=(t,o)=>!q().valid(t)||!q().valid(o)?!1:q().lt(t,o);var _=n(63955),z=(t,o,a)=>new Promise((r,u)=>{var c=h=>{try{y(a.next(h))}catch(g){u(g)}},f=h=>{try{y(a.throw(h))}catch(g){u(g)}},y=h=>h.done?r(h.value):Promise.resolve(h.value).then(c,f);y((a=a.apply(t,o)).next())});const Ae=S.i8,Kt=!JSON.parse(localStorage.getItem("STRAPI_UPDATE_NOTIF")),Vt=t=>z(void 0,null,function*(){try{const{data:{tag_name:o}}=yield jt().get("https://api.github.com/repos/strapi/strapi/releases/latest");return Se(Ae,o)&&Kt&&t({type:"info",message:{id:"notification.version.update.message"},link:{url:`https://github.com/strapi/strapi/releases/tag/${o}`,label:{id:"global.see-more"}},blockTransition:!0,onClose:()=>localStorage.setItem("STRAPI_UPDATE_NOTIF",!0)}),o}catch(o){return Ae}}),zt=()=>z(void 0,null,function*(){try{const{data:t,headers:o}=yield _.be.get("/admin/information");if(!o["content-type"].includes("application/json"))throw new Error("Not found");return t.data}catch(t){throw new Error(t)}}),kt=()=>z(void 0,null,function*(){try{const{data:t,headers:o}=yield _.be.get("/admin/users/me/permissions");if(!o["content-type"].includes("application/json"))throw new Error("Not found");return t.data}catch(t){throw new Error(t)}}),Ht=()=>z(void 0,null,function*(){try{const{data:{data:{roles:t}}}=yield _.be.get("/admin/users/me");return t}catch(t){throw new Error(t)}});var Zt=Object.defineProperty,Qt=Object.defineProperties,Yt=Object.getOwnPropertyDescriptors,Ie=Object.getOwnPropertySymbols,Xt=Object.prototype.hasOwnProperty,wt=Object.prototype.propertyIsEnumerable,xe=(t,o,a)=>o in t?Zt(t,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[o]=a,Jt=(t,o)=>{for(var a in o||(o={}))Xt.call(o,a)&&xe(t,a,o[a]);if(Ie)for(var a of Ie(o))wt.call(o,a)&&xe(t,a,o[a]);return t},qt=(t,o)=>Qt(t,Yt(o));const Le=S.i8,_t=()=>{const{setGuidedTourVisibility:t}=(0,i.useGuidedTour)(),o=(0,i.useNotification)(),a=(0,e.useRef)(t),r=i.auth.getUserInfo(),u=Q()(r,"username")||(0,se.Pp)(r.firstname,r.lastname),[c,f]=(0,e.useState)(u),{showReleaseNotification:y}=(0,W.um)(),[{data:h,status:g},{data:L,isLoading:D},{data:j,status:$,refetch:F,isFetched:m,isFetching:A},{data:I}]=(0,B.useQueries)([{queryKey:"app-infos",queryFn:zt},{queryKey:"strapi-release",queryFn:()=>Vt(o),enabled:y,initialData:Le},{queryKey:"admin-users-permission",queryFn:kt,initialData:[]},{queryKey:"user-roles",queryFn:Ht}]),k=(0,e.useMemo)(()=>Se(Le,L),[L]);return(0,e.useEffect)(()=>{I&&I.find(({code:Z})=>Z==="strapi-super-admin")&&a.current(!0)},[I]),D||(A&&m||g==="loading"||$==="loading")?e.createElement(i.LoadingIndicatorPage,null):g==="error"?e.createElement("div",null,"error..."):e.createElement(i.AppInfosContext.Provider,{value:qt(Jt({},h),{latestStrapiReleaseTag:L,setUserDisplayName:f,shouldUpdateStrapi:k,userDisplayName:c})},e.createElement(Ft,{permissions:j,refetchPermissions:F},e.createElement(Nt,null)))}},66952:(K,R,n)=>{n.d(R,{Z:()=>b});var e=n(67294),i=n(45697),B=n.n(i),P=n(68547),Q=n.n(P),S=n(5493),W=n.n(S),p=n(16289),V=Object.defineProperty,x=Object.getOwnPropertySymbols,C=Object.prototype.hasOwnProperty,G=Object.prototype.propertyIsEnumerable,s=(l,d,E)=>d in l?V(l,d,{enumerable:!0,configurable:!0,writable:!0,value:E}):l[d]=E,T=(l,d)=>{for(var E in d||(d={}))C.call(d,E)&&s(l,E,d[E]);if(x)for(var E of x(d))G.call(d,E)&&s(l,E,d[E]);return l},N=(l,d)=>{var E={};for(var M in l)C.call(l,M)&&d.indexOf(M)<0&&(E[M]=l[M]);if(l!=null&&x)for(var M of x(l))d.indexOf(M)<0&&G.call(l,M)&&(E[M]=l[M]);return E};const v=l=>{var d=l,{type:E}=d,M=N(d,["type"]);return e.createElement(S.Box,T({width:(0,P.pxToRem)(2),height:"100%",background:E===p.VM?"neutral300":"primary500",hasRadius:!0},M))};v.defaultProps={type:p.VM},v.propTypes={type:B().oneOf([p.lW,p.hx,p.VM])};const b=v},71289:(K,R,n)=>{n.d(R,{Z:()=>v});var e=n(67294),i=n(45697),B=n.n(i),P=n(68547),Q=n.n(P),S=n(67826),W=n.n(S),p=n(49425),V=n.n(p),x=n(15804),C=n.n(x),G=n(84734),s=n.n(G),T=n(16289);const N=({type:b,number:l})=>b===T.hx?e.createElement(S.Flex,{background:"primary600",padding:2,borderRadius:"50%",width:(0,P.pxToRem)(30),height:(0,P.pxToRem)(30),justifyContent:"center"},e.createElement(x.Icon,{as:s(),"aria-hidden":!0,width:(0,P.pxToRem)(16),color:"neutral0"})):b===T.lW?e.createElement(S.Flex,{background:"primary600",padding:2,borderRadius:"50%",width:(0,P.pxToRem)(30),height:(0,P.pxToRem)(30),justifyContent:"center"},e.createElement(p.Typography,{fontWeight:"semiBold",textColor:"neutral0"},l)):e.createElement(S.Flex,{borderColor:"neutral500",borderWidth:"1px",borderStyle:"solid",padding:2,borderRadius:"50%",width:(0,P.pxToRem)(30),height:(0,P.pxToRem)(30),justifyContent:"center"},e.createElement(p.Typography,{fontWeight:"semiBold",textColor:"neutral600"},l));N.defaultProps={number:void 0,type:T.VM},N.propTypes={number:B().number,type:B().oneOf([T.lW,T.hx,T.VM])};const v=N},16289:(K,R,n)=>{n.d(R,{lW:()=>e,hx:()=>i,VM:()=>B});const e="isActive",i="isDone",B="isNotDone"},76910:(K,R,n)=>{n.d(R,{Z:()=>i});const i={contentTypeBuilder:{home:{title:{id:"app.components.GuidedTour.home.CTB.title",defaultMessage:"\u{1F9E0} Build the content structure"},cta:{title:{id:"app.components.GuidedTour.home.CTB.cta.title",defaultMessage:"Go to the Content type Builder"},type:"REDIRECT",target:"/plugins/content-type-builder"},trackingEvent:"didClickGuidedTourHomepageContentTypeBuilder"},create:{title:{id:"app.components.GuidedTour.CTB.create.title",defaultMessage:"\u{1F9E0} Create a first Collection type"},content:{id:"app.components.GuidedTour.CTB.create.content",defaultMessage:"<p>Collection types help you manage several entries, Single types are suitable to manage only one entry.</p> <p>Ex: For a Blog website, Articles would be a Collection type whereas a Homepage would be a Single type.</p>"},cta:{title:{id:"app.components.GuidedTour.CTB.create.cta.title",defaultMessage:"Build a Collection type"},type:"CLOSE"},trackingEvent:"didClickGuidedTourStep1CollectionType"},success:{title:{id:"app.components.GuidedTour.CTB.success.title",defaultMessage:"Step 1: Completed \u2705"},content:{id:"app.components.GuidedTour.CTB.success.content",defaultMessage:"<p>Good going!</p><b>\u26A1\uFE0F What would you like to share with the world?</b>"},cta:{title:{id:"app.components.GuidedTour.create-content",defaultMessage:"Create content"},type:"REDIRECT",target:"/content-manager"},trackingEvent:"didCreateGuidedTourCollectionType"}},contentManager:{home:{title:{id:"app.components.GuidedTour.home.CM.title",defaultMessage:"\u26A1\uFE0F What would you like to share with the world?"},cta:{title:{id:"app.components.GuidedTour.create-content",defaultMessage:"Create content"},type:"REDIRECT",target:"/content-manager"},trackingEvent:"didClickGuidedTourHomepageContentManager"},create:{title:{id:"app.components.GuidedTour.CM.create.title",defaultMessage:"\u26A1\uFE0F Create content"},content:{id:"app.components.GuidedTour.CM.create.content",defaultMessage:"<p>Create and manage all the content here in the Content Manager.</p><p>Ex: Taking the Blog website example further, one can write an Article, save and publish it as they like.</p><p>\u{1F4A1} Quick tip - Don't forget to hit publish on the content you create.</p>"},cta:{title:{id:"app.components.GuidedTour.create-content",defaultMessage:"Create content"},type:"CLOSE"},trackingEvent:"didClickGuidedTourStep2ContentManager"},success:{title:{id:"app.components.GuidedTour.CM.success.title",defaultMessage:"Step 2: Completed \u2705"},content:{id:"app.components.GuidedTour.CM.success.content",defaultMessage:"<p>Awesome, one last step to go!</p><b>\u{1F680}  See content in action</b>"},cta:{title:{id:"app.components.GuidedTour.CM.success.cta.title",defaultMessage:"Test the API"},type:"REDIRECT",target:"/settings/api-tokens"},trackingEvent:"didCreateGuidedTourEntry"}},apiTokens:{home:{title:{id:"app.components.GuidedTour.apiTokens.create.title",defaultMessage:"\u{1F680} See content in action"},cta:{title:{id:"app.components.GuidedTour.home.apiTokens.cta.title",defaultMessage:"Test the API"},type:"REDIRECT",target:"/settings/api-tokens"},trackingEvent:"didClickGuidedTourHomepageApiTokens"},create:{title:{id:"app.components.GuidedTour.apiTokens.create.title",defaultMessage:"\u{1F680} See content in action"},content:{id:"app.components.GuidedTour.apiTokens.create.content",defaultMessage:"<p>Generate an authentication token here and retrieve the content you just created.</p>"},cta:{title:{id:"app.components.GuidedTour.apiTokens.create.cta.title",defaultMessage:"Generate an API Token"},type:"CLOSE"},trackingEvent:"didClickGuidedTourStep3ApiTokens"},success:{title:{id:"app.components.GuidedTour.apiTokens.success.title",defaultMessage:"Step 3: Completed \u2705"},content:{id:"app.components.GuidedTour.apiTokens.success.content",defaultMessage:"<p>See content in action by making an HTTP request:</p><ul><li><p>To this URL: <light>https://'<'YOUR_DOMAIN'>'/api/'<'YOUR_CT'>'</light></p></li><li><p>With the header: <light>Authorization: bearer '<'YOUR_API_TOKEN'>'</light></p></li></ul><p>For more ways to interact with content, see the <documentationLink>documentation</documentationLink>.</p>"},trackingEvent:"didGenerateGuidedTourApiTokens"}}}}}]);
