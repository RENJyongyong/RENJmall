import{k as z,l as b,m as N,u as M,P as _,ae as $e,af as ie,ag as we,ah as ue,U as de,ai as Ee,ac as ee,o as y,c as E,n as m,p as e,f as B,t as A,q as R,x as H,s as $,e as U,b as F,Z as Se,h as q,v as W,y as ce,aj as x,ak as pe,D as Q,al as C,K as Ce,am as V,M as fe,F as Pe,a1 as _e,w as ve,T as I,a as O,an as Re,Y as Fe,ao as Le,ap as Ue,aq as Te,ar as De,O as Y,as as Oe,at as Be,au as Ne,Q as te,av as je,aw as Ae,ax as qe,ay as Me,az as Ie,aA as se,aa as ae}from"./index-9741e164.js";import{c as ze}from"./cloneDeep-5e0000c2.js";const Ke=z({type:{type:String,default:"line",values:["line","circle","dashboard"]},percentage:{type:Number,default:0,validator:n=>n>=0&&n<=100},status:{type:String,default:"",values:["","success","exception","warning"]},indeterminate:{type:Boolean,default:!1},duration:{type:Number,default:3},strokeWidth:{type:Number,default:6},strokeLinecap:{type:b(String),default:"round"},textInside:{type:Boolean,default:!1},width:{type:Number,default:126},showText:{type:Boolean,default:!0},color:{type:b([String,Array,Function]),default:""},striped:Boolean,stripedFlow:Boolean,format:{type:b(Function),default:n=>`${n}%`}}),We=["aria-valuenow"],He={viewBox:"0 0 100 100"},Ve=["d","stroke","stroke-width"],Xe=["d","stroke","opacity","stroke-linecap","stroke-width"],Ge={key:0},Je=N({name:"ElProgress"}),Qe=N({...Je,props:Ke,setup(n){const s=n,o={success:"#13ce66",exception:"#ff4949",warning:"#e6a23c",default:"#20a0ff"},a=M("progress"),f=_(()=>({width:`${s.percentage}%`,animationDuration:`${s.duration}s`,backgroundColor:T(s.percentage)})),p=_(()=>(s.strokeWidth/s.width*100).toFixed(1)),v=_(()=>["circle","dashboard"].includes(s.type)?Number.parseInt(`${50-Number.parseFloat(p.value)/2}`,10):0),S=_(()=>{const l=v.value,L=s.type==="dashboard";return`
          M 50 50
          m 0 ${L?"":"-"}${l}
          a ${l} ${l} 0 1 1 0 ${L?"-":""}${l*2}
          a ${l} ${l} 0 1 1 0 ${L?"":"-"}${l*2}
          `}),k=_(()=>2*Math.PI*v.value),d=_(()=>s.type==="dashboard"?.75:1),w=_(()=>`${-1*k.value*(1-d.value)/2}px`),g=_(()=>({strokeDasharray:`${k.value*d.value}px, ${k.value}px`,strokeDashoffset:w.value})),r=_(()=>({strokeDasharray:`${k.value*d.value*(s.percentage/100)}px, ${k.value}px`,strokeDashoffset:w.value,transition:"stroke-dasharray 0.6s ease 0s, stroke 0.6s ease, opacity ease 0.6s"})),u=_(()=>{let l;return s.color?l=T(s.percentage):l=o[s.status]||o.default,l}),t=_(()=>s.status==="warning"?$e:s.type==="line"?s.status==="success"?ie:we:s.status==="success"?ue:de),c=_(()=>s.type==="line"?12+s.strokeWidth*.4:s.width*.111111+2),h=_(()=>s.format(s.percentage));function i(l){const L=100/l.length;return l.map((P,j)=>ee(P)?{color:P,percentage:(j+1)*L}:P).sort((P,j)=>P.percentage-j.percentage)}const T=l=>{var L;const{color:D}=s;if(Ee(D))return D(l);if(ee(D))return D;{const P=i(D);for(const j of P)if(j.percentage>l)return j.color;return(L=P[P.length-1])==null?void 0:L.color}};return(l,L)=>(y(),E("div",{class:m([e(a).b(),e(a).m(l.type),e(a).is(l.status),{[e(a).m("without-text")]:!l.showText,[e(a).m("text-inside")]:l.textInside}]),role:"progressbar","aria-valuenow":l.percentage,"aria-valuemin":"0","aria-valuemax":"100"},[l.type==="line"?(y(),E("div",{key:0,class:m(e(a).b("bar"))},[B("div",{class:m(e(a).be("bar","outer")),style:A({height:`${l.strokeWidth}px`})},[B("div",{class:m([e(a).be("bar","inner"),{[e(a).bem("bar","inner","indeterminate")]:l.indeterminate},{[e(a).bem("bar","inner","striped")]:l.striped},{[e(a).bem("bar","inner","striped-flow")]:l.stripedFlow}]),style:A(e(f))},[(l.showText||l.$slots.default)&&l.textInside?(y(),E("div",{key:0,class:m(e(a).be("bar","innerText"))},[R(l.$slots,"default",{percentage:l.percentage},()=>[B("span",null,H(e(h)),1)])],2)):$("v-if",!0)],6)],6)],2)):(y(),E("div",{key:1,class:m(e(a).b("circle")),style:A({height:`${l.width}px`,width:`${l.width}px`})},[(y(),E("svg",He,[B("path",{class:m(e(a).be("circle","track")),d:e(S),stroke:`var(${e(a).cssVarName("fill-color-light")}, #e5e9f2)`,"stroke-width":e(p),fill:"none",style:A(e(g))},null,14,Ve),B("path",{class:m(e(a).be("circle","path")),d:e(S),stroke:e(u),fill:"none",opacity:l.percentage?1:0,"stroke-linecap":l.strokeLinecap,"stroke-width":e(p),style:A(e(r))},null,14,Xe)]))],6)),(l.showText||l.$slots.default)&&!l.textInside?(y(),E("div",{key:2,class:m(e(a).e("text")),style:A({fontSize:`${e(c)}px`})},[R(l.$slots,"default",{percentage:l.percentage},()=>[l.status?(y(),U(e(q),{key:1},{default:F(()=>[(y(),U(Se(e(t))))]),_:1})):(y(),E("span",Ge,H(e(h)),1))])],6)):$("v-if",!0)],10,We))}});var Ye=W(Qe,[["__file","/home/runner/work/element-plus/element-plus/packages/components/progress/src/progress.vue"]]);const Ze=ce(Ye),me=Symbol("uploadContextKey"),xe="ElUpload";class et extends Error{constructor(s,o,a,f){super(s),this.name="UploadAjaxError",this.status=o,this.method=a,this.url=f}}function oe(n,s,o){let a;return o.response?a=`${o.response.error||o.response}`:o.responseText?a=`${o.responseText}`:a=`fail to ${s.method} ${n} ${o.status}`,new et(a,o.status,s.method,n)}function tt(n){const s=n.responseText||n.response;if(!s)return s;try{return JSON.parse(s)}catch{return s}}const st=n=>{typeof XMLHttpRequest>"u"&&x(xe,"XMLHttpRequest is undefined");const s=new XMLHttpRequest,o=n.action;s.upload&&s.upload.addEventListener("progress",p=>{const v=p;v.percent=p.total>0?p.loaded/p.total*100:0,n.onProgress(v)});const a=new FormData;if(n.data)for(const[p,v]of Object.entries(n.data))Array.isArray(v)?a.append(p,...v):a.append(p,v);a.append(n.filename,n.file,n.file.name),s.addEventListener("error",()=>{n.onError(oe(o,n,s))}),s.addEventListener("load",()=>{if(s.status<200||s.status>=300)return n.onError(oe(o,n,s));n.onSuccess(tt(s))}),s.open(n.method,o,!0),n.withCredentials&&"withCredentials"in s&&(s.withCredentials=!0);const f=n.headers||{};if(f instanceof Headers)f.forEach((p,v)=>s.setRequestHeader(v,p));else for(const[p,v]of Object.entries(f))pe(v)||s.setRequestHeader(p,String(v));return s.send(a),s},ye=["text","picture","picture-card"];let at=1;const Z=()=>Date.now()+at++,ge=z({action:{type:String,default:"#"},headers:{type:b(Object)},method:{type:String,default:"post"},data:{type:Object,default:()=>Q({})},multiple:{type:Boolean,default:!1},name:{type:String,default:"file"},drag:{type:Boolean,default:!1},withCredentials:Boolean,showFileList:{type:Boolean,default:!0},accept:{type:String,default:""},type:{type:String,default:"select"},fileList:{type:b(Array),default:()=>Q([])},autoUpload:{type:Boolean,default:!0},listType:{type:String,values:ye,default:"text"},httpRequest:{type:b(Function),default:st},disabled:Boolean,limit:Number}),ot=z({...ge,beforeUpload:{type:b(Function),default:C},beforeRemove:{type:b(Function)},onRemove:{type:b(Function),default:C},onChange:{type:b(Function),default:C},onPreview:{type:b(Function),default:C},onSuccess:{type:b(Function),default:C},onProgress:{type:b(Function),default:C},onError:{type:b(Function),default:C},onExceed:{type:b(Function),default:C}}),nt=z({files:{type:b(Array),default:()=>Q([])},disabled:{type:Boolean,default:!1},handlePreview:{type:b(Function),default:C},listType:{type:String,values:ye,default:"text"}}),rt={remove:n=>!!n},lt=["onKeydown"],it=["src"],ut=["onClick"],dt=["onClick"],ct=["onClick"],pt=N({name:"ElUploadList"}),ft=N({...pt,props:nt,emits:rt,setup(n,{emit:s}){const{t:o}=Ce(),a=M("upload"),f=M("icon"),p=M("list"),v=V(),S=fe(!1),k=d=>{s("remove",d)};return(d,w)=>(y(),U(Ue,{tag:"ul",class:m([e(a).b("list"),e(a).bm("list",d.listType),e(a).is("disabled",e(v))]),name:e(p).b()},{default:F(()=>[(y(!0),E(Pe,null,_e(d.files,g=>(y(),E("li",{key:g.uid||g.name,class:m([e(a).be("list","item"),e(a).is(g.status),{focusing:S.value}]),tabindex:"0",onKeydown:ve(r=>!e(v)&&k(g),["delete"]),onFocus:w[0]||(w[0]=r=>S.value=!0),onBlur:w[1]||(w[1]=r=>S.value=!1),onClick:w[2]||(w[2]=r=>S.value=!1)},[R(d.$slots,"default",{file:g},()=>[d.listType==="picture"||g.status!=="uploading"&&d.listType==="picture-card"?(y(),E("img",{key:0,class:m(e(a).be("list","item-thumbnail")),src:g.url,alt:""},null,10,it)):$("v-if",!0),g.status==="uploading"||d.listType!=="picture-card"?(y(),E("div",{key:1,class:m(e(a).be("list","item-info"))},[B("a",{class:m(e(a).be("list","item-name")),onClick:I(r=>d.handlePreview(g),["prevent"])},[O(e(q),{class:m(e(f).m("document"))},{default:F(()=>[O(e(Re))]),_:1},8,["class"]),B("span",{class:m(e(a).be("list","item-file-name"))},H(g.name),3)],10,ut),g.status==="uploading"?(y(),U(e(Ze),{key:0,type:d.listType==="picture-card"?"circle":"line","stroke-width":d.listType==="picture-card"?6:2,percentage:Number(g.percentage),style:A(d.listType==="picture-card"?"":"margin-top: 0.5rem")},null,8,["type","stroke-width","percentage","style"])):$("v-if",!0)],2)):$("v-if",!0),B("label",{class:m(e(a).be("list","item-status-label"))},[d.listType==="text"?(y(),U(e(q),{key:0,class:m([e(f).m("upload-success"),e(f).m("circle-check")])},{default:F(()=>[O(e(ie))]),_:1},8,["class"])):["picture-card","picture"].includes(d.listType)?(y(),U(e(q),{key:1,class:m([e(f).m("upload-success"),e(f).m("check")])},{default:F(()=>[O(e(ue))]),_:1},8,["class"])):$("v-if",!0)],2),e(v)?$("v-if",!0):(y(),U(e(q),{key:2,class:m(e(f).m("close")),onClick:r=>k(g)},{default:F(()=>[O(e(de))]),_:2},1032,["class","onClick"])),$(" Due to close btn only appears when li gets focused disappears after li gets blurred, thus keyboard navigation can never reach close btn"),$(" This is a bug which needs to be fixed "),$(" TODO: Fix the incorrect navigation interaction "),e(v)?$("v-if",!0):(y(),E("i",{key:3,class:m(e(f).m("close-tip"))},H(e(o)("el.upload.deleteTip")),3)),d.listType==="picture-card"?(y(),E("span",{key:4,class:m(e(a).be("list","item-actions"))},[B("span",{class:m(e(a).be("list","item-preview")),onClick:r=>d.handlePreview(g)},[O(e(q),{class:m(e(f).m("zoom-in"))},{default:F(()=>[O(e(Fe))]),_:1},8,["class"])],10,dt),e(v)?$("v-if",!0):(y(),E("span",{key:0,class:m(e(a).be("list","item-delete")),onClick:r=>k(g)},[O(e(q),{class:m(e(f).m("delete"))},{default:F(()=>[O(e(Le))]),_:1},8,["class"])],10,ct))],2)):$("v-if",!0)])],42,lt))),128)),R(d.$slots,"append")]),_:3},8,["class","name"]))}});var ne=W(ft,[["__file","/home/runner/work/element-plus/element-plus/packages/components/upload/src/upload-list.vue"]]);const vt=z({disabled:{type:Boolean,default:!1}}),mt={file:n=>Te(n)},yt=["onDrop","onDragover"],he="ElUploadDrag",gt=N({name:he}),ht=N({...gt,props:vt,emits:mt,setup(n,{emit:s}){const o=De(me);o||x(he,"usage: <el-upload><el-upload-dragger /></el-upload>");const a=M("upload"),f=fe(!1),p=V(),v=k=>{if(p.value)return;f.value=!1,k.stopPropagation();const d=Array.from(k.dataTransfer.files),w=o.accept.value;if(!w){s("file",d);return}const g=d.filter(r=>{const{type:u,name:t}=r,c=t.includes(".")?`.${t.split(".").pop()}`:"",h=u.replace(/\/.*$/,"");return w.split(",").map(i=>i.trim()).filter(i=>i).some(i=>i.startsWith(".")?c===i:/\/\*$/.test(i)?h===i.replace(/\/\*$/,""):/^[^/]+\/[^/]+$/.test(i)?u===i:!1)});s("file",g)},S=()=>{p.value||(f.value=!0)};return(k,d)=>(y(),E("div",{class:m([e(a).b("dragger"),e(a).is("dragover",f.value)]),onDrop:I(v,["prevent"]),onDragover:I(S,["prevent"]),onDragleave:d[0]||(d[0]=I(w=>f.value=!1,["prevent"]))},[R(k.$slots,"default")],42,yt))}});var bt=W(ht,[["__file","/home/runner/work/element-plus/element-plus/packages/components/upload/src/upload-dragger.vue"]]);const kt=z({...ge,beforeUpload:{type:b(Function),default:C},onRemove:{type:b(Function),default:C},onStart:{type:b(Function),default:C},onSuccess:{type:b(Function),default:C},onProgress:{type:b(Function),default:C},onError:{type:b(Function),default:C},onExceed:{type:b(Function),default:C}}),$t=["onKeydown"],wt=["name","multiple","accept"],Et=N({name:"ElUploadContent",inheritAttrs:!1}),St=N({...Et,props:kt,setup(n,{expose:s}){const o=n,a=M("upload"),f=V(),p=Y({}),v=Y(),S=t=>{if(t.length===0)return;const{autoUpload:c,limit:h,fileList:i,multiple:T,onStart:l,onExceed:L}=o;if(h&&i.length+t.length>h){L(t,i);return}T||(t=t.slice(0,1));for(const D of t){const P=D;P.uid=Z(),l(P),c&&k(P)}},k=async t=>{if(v.value.value="",!o.beforeUpload)return d(t);let c,h={};try{const T=o.beforeUpload(t);h=Oe(o.data)?ze(o.data):o.data,c=await T}catch{c=!1}if(c===!1){o.onRemove(t);return}let i=t;c instanceof Blob&&(c instanceof File?i=c:i=new File([c],t.name,{type:t.type})),d(Object.assign(i,{uid:t.uid}),h)},d=(t,c)=>{const{headers:h,data:i,method:T,withCredentials:l,name:L,action:D,onProgress:P,onSuccess:j,onError:be,httpRequest:ke}=o,{uid:X}=t,G={headers:h||{},withCredentials:l,file:t,data:c??i,method:T,filename:L,action:D,onProgress:K=>{P(K,t)},onSuccess:K=>{j(K,t),delete p.value[X]},onError:K=>{be(K,t),delete p.value[X]}},J=ke(G);p.value[X]=J,J instanceof Promise&&J.then(G.onSuccess,G.onError)},w=t=>{const c=t.target.files;c&&S(Array.from(c))},g=()=>{f.value||(v.value.value="",v.value.click())},r=()=>{g()};return s({abort:t=>{Be(p.value).filter(t?([h])=>String(t.uid)===h:()=>!0).forEach(([h,i])=>{i instanceof XMLHttpRequest&&i.abort(),delete p.value[h]})},upload:k}),(t,c)=>(y(),E("div",{class:m([e(a).b(),e(a).m(t.listType),e(a).is("drag",t.drag)]),tabindex:"0",onClick:g,onKeydown:ve(I(r,["self"]),["enter","space"])},[t.drag?(y(),U(bt,{key:0,disabled:e(f),onFile:S},{default:F(()=>[R(t.$slots,"default")]),_:3},8,["disabled"])):R(t.$slots,"default",{key:1}),B("input",{ref_key:"inputRef",ref:v,class:m(e(a).e("input")),name:t.name,multiple:t.multiple,accept:t.accept,type:"file",onChange:w,onClick:c[0]||(c[0]=I(()=>{},["stop"]))},null,42,wt)],42,$t))}});var re=W(St,[["__file","/home/runner/work/element-plus/element-plus/packages/components/upload/src/upload-content.vue"]]);const le="ElUpload",Ct=n=>{var s;(s=n.url)!=null&&s.startsWith("blob:")&&URL.revokeObjectURL(n.url)},Pt=(n,s)=>{const o=Ne(n,"fileList",void 0,{passive:!0}),a=r=>o.value.find(u=>u.uid===r.uid);function f(r){var u;(u=s.value)==null||u.abort(r)}function p(r=["ready","uploading","success","fail"]){o.value=o.value.filter(u=>!r.includes(u.status))}const v=(r,u)=>{const t=a(u);t&&(console.error(r),t.status="fail",o.value.splice(o.value.indexOf(t),1),n.onError(r,t,o.value),n.onChange(t,o.value))},S=(r,u)=>{const t=a(u);t&&(n.onProgress(r,t,o.value),t.status="uploading",t.percentage=Math.round(r.percent))},k=(r,u)=>{const t=a(u);t&&(t.status="success",t.response=r,n.onSuccess(r,t,o.value),n.onChange(t,o.value))},d=r=>{pe(r.uid)&&(r.uid=Z());const u={name:r.name,percentage:0,status:"ready",size:r.size,raw:r,uid:r.uid};if(n.listType==="picture-card"||n.listType==="picture")try{u.url=URL.createObjectURL(r)}catch(t){je(le,t.message),n.onError(t,u,o.value)}o.value=[...o.value,u],n.onChange(u,o.value)},w=async r=>{const u=r instanceof File?a(r):r;u||x(le,"file to be removed not found");const t=c=>{f(c);const h=o.value;h.splice(h.indexOf(c),1),n.onRemove(c,h),Ct(c)};n.beforeRemove?await n.beforeRemove(u,o.value)!==!1&&t(u):t(u)};function g(){o.value.filter(({status:r})=>r==="ready").forEach(({raw:r})=>{var u;return r&&((u=s.value)==null?void 0:u.upload(r))})}return te(()=>n.listType,r=>{r!=="picture-card"&&r!=="picture"||(o.value=o.value.map(u=>{const{raw:t,url:c}=u;if(!c&&t)try{u.url=URL.createObjectURL(t)}catch(h){n.onError(h,u,o.value)}return u}))}),te(o,r=>{for(const u of r)u.uid||(u.uid=Z()),u.status||(u.status="success")},{immediate:!0,deep:!0}),{uploadFiles:o,abort:f,clearFiles:p,handleError:v,handleProgress:S,handleStart:d,handleSuccess:k,handleRemove:w,submit:g}},_t=N({name:"ElUpload"}),Rt=N({..._t,props:ot,setup(n,{expose:s}){const o=n,a=Ae(),f=V(),p=Y(),{abort:v,submit:S,clearFiles:k,uploadFiles:d,handleStart:w,handleError:g,handleRemove:r,handleSuccess:u,handleProgress:t}=Pt(o,p),c=_(()=>o.listType==="picture-card"),h=_(()=>({...o,fileList:d.value,onStart:w,onProgress:t,onSuccess:u,onError:g,onRemove:r}));return qe(()=>{d.value.forEach(({url:i})=>{i!=null&&i.startsWith("blob:")&&URL.revokeObjectURL(i)})}),Me(me,{accept:Ie(o,"accept")}),s({abort:v,submit:S,clearFiles:k,handleStart:w,handleRemove:r}),(i,T)=>(y(),E("div",null,[e(c)&&i.showFileList?(y(),U(ne,{key:0,disabled:e(f),"list-type":i.listType,files:e(d),"handle-preview":i.onPreview,onRemove:e(r)},se({append:F(()=>[O(re,ae({ref_key:"uploadRef",ref:p},e(h)),{default:F(()=>[e(a).trigger?R(i.$slots,"trigger",{key:0}):$("v-if",!0),!e(a).trigger&&e(a).default?R(i.$slots,"default",{key:1}):$("v-if",!0)]),_:3},16)]),_:2},[i.$slots.file?{name:"default",fn:F(({file:l})=>[R(i.$slots,"file",{file:l})])}:void 0]),1032,["disabled","list-type","files","handle-preview","onRemove"])):$("v-if",!0),!e(c)||e(c)&&!i.showFileList?(y(),U(re,ae({key:1,ref_key:"uploadRef",ref:p},e(h)),{default:F(()=>[e(a).trigger?R(i.$slots,"trigger",{key:0}):$("v-if",!0),!e(a).trigger&&e(a).default?R(i.$slots,"default",{key:1}):$("v-if",!0)]),_:3},16)):$("v-if",!0),i.$slots.trigger?R(i.$slots,"default",{key:2}):$("v-if",!0),R(i.$slots,"tip"),!e(c)&&i.showFileList?(y(),U(ne,{key:3,disabled:e(f),"list-type":i.listType,files:e(d),"handle-preview":i.onPreview,onRemove:e(r)},se({_:2},[i.$slots.file?{name:"default",fn:F(({file:l})=>[R(i.$slots,"file",{file:l})])}:void 0]),1032,["disabled","list-type","files","handle-preview","onRemove"])):$("v-if",!0)]))}});var Ft=W(Rt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/upload/src/upload.vue"]]);const Tt=ce(Ft);export{Tt as E};
