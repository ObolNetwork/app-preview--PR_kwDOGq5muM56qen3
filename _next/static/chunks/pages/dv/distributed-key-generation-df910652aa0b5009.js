(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5932],{29801:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dv/distributed-key-generation",function(){return n(88087)}])},88087:function(e,t,n){"use strict";n.r(t);var o=n(85893),a=n(48900),i=n(67294),s=n(30874),r=n(85281),u=n(42298),c=n(11163),l=n(86105);let DKG=()=>{let e=(0,c.useRouter)(),t=(0,r.o)((0,i.useCallback)(e=>e.completeOperatorStep,[])),onSubmit=()=>{t("dv-dkg"),e.push("/deposit/advisories#groupFlow")},n=(0,r.o)(e=>e.clusterDefinitionData),p=(null==n?void 0:n.config_hash)||(0,u.xs)(e,"configHash"),[d,m]=(0,i.useState)(l.uq.map((e,t)=>{let{contentTitle:n,contentSection:a,enableNextStep:i,rank:r,term:c,value:l,title:d}=e;return{content:(e,t,i,r)=>(0,o.jsx)(s.ns,{contentTitle:n,title:d,contentSection:a,commandsToReplace:[p],rank:e,onAccept:i,onBack:r,enableNextStep:t,term:c,onSubmit:onSubmit}),enableNextStep:i,rank:r,state:(0,u.d$)(t),value:l,title:d,term:c}})),[k,_]=(0,i.useState)(d[0]);return(0,o.jsxs)(a.kC,{direction:"column",css:{gap:"$2xl"},children:[(0,o.jsx)(a.xv,{variant:"h3",children:"Distributed Key Generation"}),(0,o.jsx)(a.I,{itemSelected:k,items:d,onItemChange:e=>{_(e)},onComplete:()=>{},onUpdateState:e=>{m(d.map(t=>t.rank===e+1?(_(t),{...t,state:"enabled"}):t))},onBack:e=>{m(d.map(t=>t.rank===e?{...t,state:"upcoming"}:t));let t=d.find(t=>t.rank===e-1);t&&_(t)}})]})};t.default=DKG,DKG.cssLayout={px:"15%"},DKG.layout="OperatorProgressTrackerLayout"}},function(e){e.O(0,[9774,2888,179],function(){return e(e.s=29801)}),_N_E=e.O()}]);