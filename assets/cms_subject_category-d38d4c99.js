import{_ as G,r as m,c as p,f as C,a as l,w as H,b as a,F as j,E as J,d as Q,o as i,e as f,a1 as W,g as E,h as X,i as Y,j as Z}from"./index-9741e164.js";import{E as $,a as ee,b as te}from"./el-table-column-ec3606f8.js";import{E as le,a as ae}from"./el-radio-5832fe68.js";import{E as oe}from"./el-input-number-9855c8cc.js";import{E as ne}from"./el-progress-9915e75b.js";import{E as s,a as se,b as re,c as ie}from"./el-select-be570fba.js";import{a as g}from"./index-420bff95.js";import{E as ce}from"./index-88838146.js";import{_ as ue}from"./1-361bf820.js";import{E as v}from"./index-ff6c3d72.js";import"./cloneDeep-5e0000c2.js";let V;const b=()=>{V=ce.service({lock:!0,text:"OnLoading...",spinner:"spinner"})},y=()=>{V&&V.close()},de=async t=>{b();try{return await g.request({url:"/mall/cms-subject-category/one/"+t,method:"get"})}catch(e){throw e}finally{y()}},me=async t=>{b();try{return await g.request({url:"/mall/cms-subject-category/del/"+t,method:"get"})}catch(e){throw e}finally{y()}},pe=async t=>{b();try{return await g.request({url:"/mall/cms-subject-category/edit",method:"post",data:t})}catch(e){throw e}finally{y()}},_e=async t=>{b();try{return await g.request({url:"/mall/cms-subject-category/add",method:"post",data:t})}catch(e){throw e}finally{y()}},he=async t=>{b();try{return await g.request({url:"/mall/cms-subject-category/page",method:"post",data:t})}catch(e){throw e}finally{y()}},I={One:de,Del:me,Edit:pe,Add:_e,Page:he};const fe={data(){return{nameOptions:[{label:"家具",value:"家具"},{label:"保健品",value:"保健品"},{label:"饮料",value:"饮料"},{label:"电子产品",value:"电子产品"},{label:"服装",value:"服装"},{label:"美妆",value:"美妆"},{label:"食品",value:"食品"},{label:"汽车",value:"汽车"},{label:"旅游",value:"旅游"},{label:"体育用品",value:"体育用品"}],json:{current:1,size:999},ping:!1,searchText:"",currentPage:1,pageSize:6,total:0,tableData:[],editDialogVisible:!1,editItem:{},selectedRow:null}},computed:{paginatedData(){const t=(this.currentPage-1)*this.pageSize,e=t+this.pageSize;return this.filteredtableData.slice(t,e)},filteredtableData(){return this.searchText?this.tableData.filter(t=>String(t.name).includes(String(this.searchText))):this.tableData}},methods:{openEditDialog(t){this.editItem={...t},this.editDialogVisible=!0},handlePageChange(t){this.currentPage=t},saveEdit(){console.log(this.editItem),v.confirm("确定修改吗？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{const t=this.tableData.findIndex(e=>e.id===this.editItem.id);t!==-1?this.tableData.splice(t,1,this.editItem):this.tableData.push(this.editItem),this.editDialogVisible=!1,s.success("修改成功！"),this.editItem={}}).catch(()=>{s.info("修改取消！")})},fetchData(){I.Page(this.json).then(t=>{this.tableData=t.data.data.page.records||t.data.records,console.log(t),s.success("刷新成功！"),this.tableData}).catch(t=>{s.error("刷新失败，请检查网络！"),console.error("Error fetching data:",t)})},Insert(t){I.Add(t).then(e=>{delete t.isNew,s.success("插入数据成功！")}).catch(e=>{s.error("插入数据失败！"),console.error("保存修改失败:",e)})},Alter(t){I.Edit(t).then(e=>{console.log("修改保存成功:",e.data),s.success("修改数据成功！")}).catch(e=>{s.error("修改数据失败！"),console.error("保存修改失败:",e)})},Del(t){v.confirm("确定要删除吗？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{I.Del(t.id).then(e=>{const _=this.tableData.findIndex(k=>k.id===t.id);_!==-1&&this.tableData.splice(_,1),console.log("删除成功:",e.data),s.success("删除成功！")}).catch(e=>{s.error(response.msg),console.error("删除失败:",e)})}).catch(()=>{})},delND(t){v.confirm("确定要删除吗？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{const e=this.tableData.findIndex(_=>_.id===t.id);e!==-1&&this.tableData.splice(e,1),s.success("删除成功！")}).catch(()=>{s.error("删除失败！"),console.log("取消删除 API",t)})},addAPI(){s.success("添加数据ing");const t={icon:"",id:0,name:"",showStatus:0,sort:0,subjectCount:0,isNew:!0};this.tableData.push(t);const e=Math.ceil(this.tableData.length/this.pageSize);this.handlePageChange(e)},SortUp(){this.tableData=this.tableData.sort((t,e)=>t.sort===null?1:e.sort===null?-1:t.sort-e.sort)},SortDown(){this.tableData=this.tableData.sort((t,e)=>t.sort===null?1:e.sort===null?-1:e.sort-t.sort)},Sort(){this.ping=!this.ping,this.ping?(this.SortUp(),s.success("顺序排序")):(this.SortDown(),s.success("逆序排序"))}},created(){this.fetchData()}},ge=["src"],be={key:1,src:ue,alt:"图标",width:"30",height:"30"},ye={key:0},De={key:1},Ee={slot:"footer"},Ie={class:"button"};function Ce(t,e,_,k,n,r){const T=J,d=te,x=m("Position"),u=X,c=Q,N=m("EditPen"),w=m("Delete"),B=$,U=se,A=re,z=ie,h=Y,q=m("Upload"),L=ne,S=oe,P=le,O=ae,F=Z,K=ee,M=m("DocumentAdd"),R=m("Sort");return i(),p(j,null,[C("div",null,[l(T,{modelValue:n.searchText,"onUpdate:modelValue":e[0]||(e[0]=o=>n.searchText=o),placeholder:"请输入搜索关键字",clearable:"",onClear:t.clearSearch,onKeyup:H(t.performSearch,["enter"]),style:{"margin-bottom":"20px"}},null,8,["modelValue","onClear","onKeyup"]),l(B,{data:r.paginatedData,"header-cell-style":{background:"#eef1f6",color:"#606266"},borde:""},{default:a(()=>[l(d,{prop:"id",label:"Items"}),l(d,{prop:"name",label:"名称"}),l(d,{prop:"icon",label:"图标样式"},{default:a(({row:o})=>[isNaN(Number(o.icon,10))?(i(),p("img",{key:0,src:o.icon,alt:"图标",width:"30",height:"30"},null,8,ge)):(i(),p("img",be))]),_:1}),l(d,{prop:"subjectCount",label:"主题数量"}),l(d,{prop:"showStatus",label:"显示状态"},{default:a(({row:o})=>[o.showStatus==0?(i(),p("span",ye,"隐藏")):(i(),p("span",De,"显示"))]),_:1}),l(d,{prop:"sort",label:"排序"}),l(d,{label:"操作"},{default:a(({row:o})=>[o.isNew?(i(),f(c,{key:0,class:"custom-button",type:"success",circle:"",onClick:D=>r.Insert(o)},{default:a(()=>[l(u,null,{default:a(()=>[l(x)]),_:1})]),_:2},1032,["onClick"])):(i(),f(c,{key:1,class:"custom-button",type:"warning",circle:"",onClick:D=>r.Alter(o)},{default:a(()=>[l(u,null,{default:a(()=>[l(x)]),_:1})]),_:2},1032,["onClick"])),l(c,{type:"primary",circle:"",onClick:D=>r.openEditDialog(o)},{default:a(()=>[l(u,null,{default:a(()=>[l(N)]),_:1})]),_:2},1032,["onClick"]),o.isNew?(i(),f(c,{key:2,type:"danger",circle:"",onClick:D=>r.delND(o)},{default:a(()=>[l(u,null,{default:a(()=>[l(w)]),_:1})]),_:2},1032,["onClick"])):(i(),f(c,{key:3,type:"danger",circle:"",onClick:D=>r.Del(o)},{default:a(()=>[l(u,null,{default:a(()=>[l(w)]),_:1})]),_:2},1032,["onClick"]))]),_:1})]),_:1},8,["data"]),l(U,{"current-page":n.currentPage,"page-size":n.pageSize,total:r.filteredtableData.length,onCurrentChange:r.handlePageChange},null,8,["current-page","page-size","total","onCurrentChange"]),l(K,{class:"form",modelValue:n.editDialogVisible,"onUpdate:modelValue":e[7]||(e[7]=o=>n.editDialogVisible=o),onClose:e[8]||(e[8]=o=>n.editDialogVisible=!1)},{default:a(()=>[l(F,null,{default:a(()=>[l(h,{label:"图标名称"},{default:a(()=>[l(z,{modelValue:n.editItem.name,"onUpdate:modelValue":e[1]||(e[1]=o=>n.editItem.name=o),placeholder:"请选择"},{default:a(()=>[(i(!0),p(j,null,W(n.nameOptions,o=>(i(),f(A,{key:o.value,label:o.label,value:o.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),l(h,{label:"图标路径"},{default:a(()=>[l(L,{action:"/upload",modelValue:n.editItem.icon,"onUpdate:modelValue":e[2]||(e[2]=o=>n.editItem.icon=o),"list-type":"picture","auto-upload":!1},{default:a(()=>[l(c,{slot:"trigger",size:"small",circle:"",type:"primary"},{default:a(()=>[l(u,null,{default:a(()=>[l(u,null,{default:a(()=>[l(q)]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1}),l(h,{label:"主题数量"},{default:a(()=>[l(S,{modelValue:n.editItem.subjectCount,"onUpdate:modelValue":e[3]||(e[3]=o=>n.editItem.subjectCount=o)},null,8,["modelValue"])]),_:1}),l(h,{label:"显示状态"},{default:a(()=>[l(O,{modelValue:n.editItem.showStatus,"onUpdate:modelValue":e[4]||(e[4]=o=>n.editItem.showStatus=o)},{default:a(()=>[l(P,{label:1},{default:a(()=>[E("显示")]),_:1}),l(P,{label:0},{default:a(()=>[E("隐藏")]),_:1})]),_:1},8,["modelValue"])]),_:1}),l(h,{label:"排序顺序"},{default:a(()=>[l(S,{modelValue:n.editItem.sort,"onUpdate:modelValue":e[5]||(e[5]=o=>n.editItem.sort=o)},null,8,["modelValue"])]),_:1})]),_:1}),C("div",Ee,[l(c,{onClick:e[6]||(e[6]=o=>n.editDialogVisible=!1)},{default:a(()=>[E("取消")]),_:1}),l(c,{type:"primary",onClick:r.saveEdit},{default:a(()=>[E("保存")]),_:1},8,["onClick"])])]),_:1},8,["modelValue"])]),C("div",Ie,[l(c,{type:"primary",circle:"",onClick:r.addAPI,style:{"margin-top":"10px"}},{default:a(()=>[l(u,null,{default:a(()=>[l(M)]),_:1})]),_:1},8,["onClick"]),l(c,{type:"danger",circle:"",onClick:e[9]||(e[9]=o=>r.Sort()),style:{"margin-top":"10px"}},{default:a(()=>[l(u,null,{default:a(()=>[l(R)]),_:1})]),_:1})])],64)}const Ue=G(fe,[["render",Ce]]);export{Ue as default};
