(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7549],{71441:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/advisories",function(){return s(89769)}])},10912:function(e,t,s){"use strict";var n=s(85893),a=s(48900),r=s(67294),i=s(42830),o=s(42298);t.Z=e=>{let{advisoriesData:t,onSubmit:s}=e,[u,c]=(0,r.useState)(t.map((e,t)=>{let{contentTitle:a,texts:r,links:u,terms:c,enableNextStep:l,rank:d,title:p,value:k}=e;return{content:(e,t,o,l)=>(0,n.jsx)(i.B,{onSubmit:s,title:a,texts:r,links:u,terms:c,rank:e,enableNextStep:t,onAccept:o,onBack:l}),enableNextStep:l,rank:d,state:(0,o.d$)(t),title:p,value:k}})),[l,d]=(0,r.useState)(u[0]);return(0,n.jsxs)(a.kC,{direction:"column",css:{gap:"$2xl"},children:[(0,n.jsx)(a.xv,{variant:"h3",children:"Advisories"}),(0,n.jsx)(a.I,{itemSelected:l,items:u,onItemChange:e=>{d(e)},onComplete:()=>{},onUpdateState:e=>{c(u.map(t=>t.rank===e+1?(d(t),{...t,state:"enabled"}):t))},onBack:e=>{c(u.map(t=>t.rank===e?{...t,state:"upcoming"}:t));let t=u.find(t=>t.rank===e-1);t&&d(t)}})]})}},89769:function(e,t,s){"use strict";s.r(t);var n=s(85893),a=s(85281),r=s(67294),i=s(11163),o=s(10912),u=s(86105);let Advisories=()=>{let e=(0,i.useRouter)(),t=(0,a.o)((0,r.useCallback)(e=>e.completeLeaderStep,[])),s=(0,a.o)(e=>e.enableLeaderStep);return(0,n.jsx)(o.Z,{advisoriesData:u.QV,onSubmit:()=>{t("advisories");let n=s("config-cluster");e.push(n.href)}})};t.default=Advisories,Advisories.cssLayout={px:"15%"},Advisories.layout="ProgressTrackerLayout"}},function(e){e.O(0,[9774,2888,179],function(){return e(e.s=71441)}),_N_E=e.O()}]);