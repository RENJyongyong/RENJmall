import{_ as C,m as E,z as _,c as k,f as p,a as l,b as i,F,d as y,o as c,g,A as z,e as P,E as L,i as $,j as D}from"./index-9741e164.js";import{E as U,a as W,b as B}from"./el-table-column-ec3606f8.js";import{E as n,a as q}from"./el-select-be570fba.js";import{a as u}from"./index-420bff95.js";/* empty css                   */import{c as A}from"./cloneDeep-5e0000c2.js";const I=e=>u.request({url:"/mall/oms-order-setting/page",method:"post",data:e}),N=e=>u.request({url:"/mall/oms-order-setting/add",method:"post",data:e}),T=e=>u.request({url:"/mall/oms-order-setting/edit",method:"post",data:e}),j=e=>u.request({url:"/mall/oms-order-setting/del/{id}",params:e}),M=E({directives:{confirm:{bind:function(e,t){e.addEventListener("click",function(){confirm(t.value)&&t.arg()})}}},data(){return{settings:[],page:{total:0,current:1,size:10},dialogFormVisible:!1,setting:{id:"",flashOrderOvertime:"",normalOrderOvertime:"",confirmOvertime:"",finishOvertime:"",commentOvertime:""},formLabelWidth:80}},mounted(){this.getsettingsPage(1)},methods:{toEdit(e){console.log(e),this.dialogFormVisible=!0,this.setting=A(e)},getsettingsPage(e){I({current:e,size:10}).then(a=>{console.log(a);const f=a.data.data.page;this.settings=f.records,this.page=f}).catch(a=>{console.log(a)})},currentchange(e){this.getsettingsPage(e),this.page.current=e},del(e){confirm("您确认要删除吗")==!0&&console.log(e),console.log(e),j({id:e}).then(a=>{if(a.success)this.getsettingsPage(this.page.current);else return console.log(a.msg),!1}).catch(a=>{})},toAdd(){this.dialogFormVisible=!0,this.setting={id:"",flashOrderOvertime:"",normalOrderOvertime:"",confirmOvertime:"",finishOvertime:"",commentOvertime:""}},save(){const e=this.setting;e.id==0?N(e).then(t=>{if(t.success)this.dialogFormVisible=!1,this.getsettingsPage(this.page.current),n(t.msg);else return n(t.msg),!1}).catch(t=>{n("网络错误联系管理员")}):T(e).then(t=>{if(t.success)this.dialogFormVisible=!1,this.getsettingsPage(this.page.current),n(t.msg);else return n(t.msg),!1}).catch(t=>{n("网络错误联系管理员")})}}}),G={class:"settings"},H={class:"settingpage-tools"},J={class:"dialog-footer"};function K(e,t,a,f,Q,R){const r=y,s=B,h=U,b=q,m=L,d=$,v=D,O=W,V=_("confirm");return c(),k(F,null,[p("div",G,[p("div",H,[l(r,{type:"warning",onClick:e.toAdd},{default:i(()=>[g("添加")]),_:1},8,["onClick"])]),l(h,{data:e.settings,style:{width:"100%"}},{default:i(()=>[l(s,{fixed:"",prop:"id",width:"150"}),l(s,{prop:"flashOrderOvertime",label:"秒杀订单超时关闭时间（分）",width:"120"}),l(s,{prop:"normalOrderOvertime",label:"正常订单超时关闭时间（分）",width:"120"}),l(s,{prop:"confirmOvertime",label:"发货后自动确认收货时间（天）",width:"120"}),l(s,{prop:"finishOvertime",label:"自动完成交易时间，不能申请售后（天）",width:"120"}),l(s,{prop:"commentOvertime",label:"订单完成后自动好评时间（天）",width:"120"}),l(s,{fixed:"right",label:"功能管理",width:"120"},{default:i(o=>[l(r,{link:"",type:"primary",size:"smpage",onClick:w=>e.toEdit(o.row)},{default:i(()=>[g("更新")]),_:2},1032,["onClick"]),z((c(),P(r,{onClick:[e.handleDelete,w=>e.del(o.row.id)],link:"",type:"primary",size:"smpage"},{default:i(()=>[g("删除")]),_:2},1032,["onClick"])),[[V,e.您确定要删除吗]])]),_:1})]),_:1},8,["data"]),l(b,{layout:"prev, pager, next","page-size":e.page.size,total:e.page.total,onCurrentChange:e.currentchange},null,8,["page-size","total","onCurrentChange"])]),l(O,{modelValue:e.dialogFormVisible,"onUpdate:modelValue":t[6]||(t[6]=o=>e.dialogFormVisible=o),title:"setting编辑"},{footer:i(()=>[p("span",J,[l(r,{onClick:t[5]||(t[5]=o=>e.dialogFormVisible=!1)},{default:i(()=>[g("Cancel")]),_:1}),l(r,{type:"primary",onClick:e.save},{default:i(()=>[g("保存 ")]),_:1},8,["onClick"])])]),default:i(()=>[l(v,{model:e.setting},{default:i(()=>[l(d,{label:"秒杀订单超时关闭时间（分）","label-width":e.formLabelWidth},{default:i(()=>[l(m,{modelValue:e.setting.flashOrderOvertime,"onUpdate:modelValue":t[0]||(t[0]=o=>e.setting.flashOrderOvertime=o),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(d,{label:"正常订单超时关闭时间（分）","label-width":e.formLabelWidth},{default:i(()=>[l(m,{modelValue:e.setting.normalOrderOvertime,"onUpdate:modelValue":t[1]||(t[1]=o=>e.setting.normalOrderOvertime=o),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(d,{label:"发货后自动确认收货时间（天）","label-width":e.formLabelWidth},{default:i(()=>[l(m,{modelValue:e.setting.confirmOvertime,"onUpdate:modelValue":t[2]||(t[2]=o=>e.setting.confirmOvertime=o),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(d,{label:"自动完成交易时间，不能申请售后（天）","label-width":e.formLabelWidth},{default:i(()=>[l(m,{modelValue:e.setting.finishOvertime,"onUpdate:modelValue":t[3]||(t[3]=o=>e.setting.finishOvertime=o),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(d,{label:"订单完成后自动好评时间（天）","label-width":e.formLabelWidth},{default:i(()=>[l(m,{modelValue:e.setting.commentOvertime,"onUpdate:modelValue":t[4]||(t[4]=o=>e.setting.commentOvertime=o),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"])]),_:1},8,["model"])]),_:1},8,["modelValue"])],64)}const te=C(M,[["render",K]]);export{te as default};
