import{_ as S,c as v,a as t,b as a,d as D,o as k,g as h,f as m,E as U,i as x,j as E}from"./index-9741e164.js";import{E as L,a as W,b as I}from"./el-table-column-ec3606f8.js";import{E as y,a as z}from"./el-select-be570fba.js";import{E as T}from"./el-switch-c6622e49.js";import{c as A,E as V,a as _,b as P,d as B,g as N,A as F,D as M}from"./cms_help-ef8e48e3.js";import{E as j}from"./index-ff6c3d72.js";import"./index-420bff95.js";import"./index-88838146.js";const q={data(){return{categories:[],currentPage:1,pageSize:10,total:0,editCategoryDialogVisible:!1,addCategoryDialogVisible:!1,viewCategoryDialogVisible:!1,addhelpDialogVisible:!1,edithelpDialogVisible:!1,categoryHelps:[],categoriesHelps:[],formLabelWidth:"120px",editedCategory:{helpCount:0,icon:"",id:0,name:"",showStatus:0,sort:0},newCategory:{helpCount:0,icon:"",id:0,name:"",showStatus:0,sort:0},selectedHelp:{categoryId:0,content:"",createTime:"",icon:"",id:0,readCount:0,showStatus:0,title:""},helpDialogVisible:!1,newhelp:{}}},mounted(){this.fetchCategories()},methods:{fetchCategories(){const i={current:this.currentPage,size:this.pageSize};A(i).then(e=>{const{data:r}=e;console.log(r),this.categories=r.data.page.records.map(u=>({...u,showStatus:u.showStatus===0})),console.log(this.categories),this.total=r.data.page.total}).catch(e=>{console.error(e)})},updatehelp(i){const e={...i},r=e.showStatus?0:1;console.log(r),e.showStatus=r,console.log(e),V(e).then(()=>{console.log("更新成功");const u=this.categoryHelps.findIndex(l=>l.id===e.id);u!==-1&&(this.categoryHelps[u].showStatus=e.showStatus,this.$nextTick(()=>{this.categoryHelps[u].showStatus=!e.showStatus}))}).catch(u=>{console.error(u);const l=this.categoryHelps.findIndex(d=>d.id===e.id);l!==-1&&(this.categoryHelps[l].showStatus=!e.showStatus)})},updateCategory(i){const e={...i},r=e.showStatus?0:1;console.log(r),e.showStatus=r,console.log(e),_(e).then(()=>{console.log("更新成功");const u=this.categories.findIndex(l=>l.id===e.id);u!==-1&&(this.categories[u].showStatus=e.showStatus,this.$nextTick(()=>{this.categories[u].showStatus=!e.showStatus}))}).catch(u=>{console.error(u);const l=this.categories.findIndex(d=>d.id===e.id);l!==-1&&(this.categories[l].showStatus=!e.showStatus)})},editCategory(i){console.log(i),console.log("彼时南面隔春风"),this.editedCategory={...i},console.log(this.editedCategory),this.editCategoryDialogVisible=!0},saveEditedCategory(){const i={...this.editedCategory};i.showStatus=i.showStatus?0:1,console.log(i),_(i).then(()=>{this.fetchCategories(),this.editCategoryDialogVisible=!1}).catch(e=>{console.error(e)})},cancelEditCategory(){this.editCategoryDialogVisible=!1},addCategory(){console.log("彼时南面隔春风"),this.newCategory={helpCount:0,icon:"",id:0,name:"",showStatus:0,sort:0},this.addCategoryDialogVisible=!0,console.log("123"),console.log(this.newCategory)},saveNewCategory(){console.log(this.newCategory),P(this.newCategory).then(i=>{const{data:e}=i;this.categories.push(e),this.addCategoryDialogVisible=!1,this.newCategory={helpCount:0,icon:"",id:0,name:"",showStatus:0,sort:0},this.fetchCategories()}).catch(i=>{console.error(i)})},cancelAddCategory(){this.addCategoryDialogVisible=!1},deleteCategory(i){console.log("删除分类:",i),B(i.id).then(()=>{console.log("删除成功");const e=this.categories.findIndex(r=>r.id===i.id);e!==-1&&this.categories.splice(e,1)}).catch(e=>{console.error(e)})},cancelViewCategory(){this.viewCategoryDialogVisible=!1,this.categoryHelps=[]},handleCurrentPageChange(i){this.currentPage=i,this.fetchCategories()},handlePageSizeChange(i){this.pageSize=i,this.fetchCategories()},viewCategory(i){console.log(i.id),N(i.id).then(e=>{const{data:r}=e;console.log(r),r&&r.data&&r.data.cmsHelps?(this.categoryHelps=r.data.cmsHelps,this.viewCategoryDialogVisible=!0):(y.success("该分类下没有帮助信息"),this.viewCategoryDialogVisible=!0)}).catch(e=>{this.categoryHelps={},console.error(e)}),this.categoriesHelps={id:i.id}},addHelp(){console.log(this.categoriesHelps),this.newhelp={categoryId:this.categoriesHelps.id,content:"",createTime:"",icon:"",id:0,readCount:0,showStatus:0,title:""},this.addhelpDialogVisible=!0},cancelAddhelp(){this.addhelpDialogVisible=!1},saveNewhelp(){console.log(this.newhelp),console.log(this.categoriesHelps.id),F(this.newhelp).then(i=>{const{data:e}=i;this.categoryHelps.push(e),this.addhelpDialogVisible=!1,this.newhelp={categoryId:this.categoriesHelps.id,content:"",createTime:"",icon:"",id:0,readCount:0,showStatus:0,title:""},this.viewCategory(this.categoriesHelps)}).catch(i=>{console.error(i)})},editHelp(i){this.selectedHelp={...i},this.edithelpDialogVisible=!0},canceledithelp(){this.edithelpDialogVisible=!1},saveedithelp(){const i=this.selectedHelp.showStatus?0:1;this.selectedHelp.showStatus=i,console.log(this.selectedHelp),V(this.selectedHelp).then(()=>{this.viewCategory(this.categoriesHelps),this.edithelpDialogVisible=!1}).catch(e=>{console.error(e)})},deleteHelp(i){j.confirm("确定要删除此帮助信息吗？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{M(i.id).then(()=>{this.viewCategory(this.categoriesHelps),y.success("删除成功")}).catch(e=>{console.error(e)})}).catch(()=>{})}}},G={slot:"footer",class:"dialog-footer"},J={class:"dialog-footer__right"},K={slot:"footer",class:"dialog-footer"},O={class:"dialog-footer__right"},Q={slot:"footer",class:"dialog-footer"},R={class:"dialog-footer__right"},X={slot:"footer",class:"dialog-footer"},Y={class:"dialog-footer__right"};function Z(i,e,r,u,l,d){const g=D,c=I,b=T,w=L,H=z,s=U,n=x,C=E,f=W;return k(),v("div",null,[t(g,{type:"primary",onClick:d.addCategory},{default:a(()=>[h("添加分类")]),_:1},8,["onClick"]),t(w,{data:l.categories,border:""},{default:a(()=>[t(c,{prop:"sort",label:"序号",width:"80px"}),t(c,{prop:"id",label:"ID",width:"150px"}),t(c,{prop:"name",label:"分类名称"}),t(c,{label:"显示状态"},{default:a(o=>[t(b,{modelValue:o.row.showStatus,"onUpdate:modelValue":p=>o.row.showStatus=p,onChange:p=>d.updateCategory(o.row)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),_:1}),t(c,{label:"操作"},{default:a(o=>[t(g,{type:"primary",size:"small",onClick:p=>d.editCategory(o.row)},{default:a(()=>[h("编辑")]),_:2},1032,["onClick"]),t(g,{type:"danger",size:"small",onClick:p=>d.deleteCategory(o.row)},{default:a(()=>[h("删除")]),_:2},1032,["onClick"]),t(g,{size:"small",onClick:p=>d.viewCategory(o.row)},{default:a(()=>[h("查看")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"]),t(H,{onSizeChange:d.handlePageSizeChange,onCurrentChange:d.handleCurrentPageChange,"current-page":l.currentPage,"page-sizes":[10,20,30],"page-size":l.pageSize,total:l.total,layout:"prev, pager, next"},null,8,["onSizeChange","onCurrentChange","current-page","page-size","total"]),t(f,{title:"编辑分类",modelValue:l.editCategoryDialogVisible,"onUpdate:modelValue":e[5]||(e[5]=o=>l.editCategoryDialogVisible=o),onClose:d.cancelEditCategory},{default:a(()=>[t(C,{model:l.editedCategory,"label-width":"80px"},{default:a(()=>[t(n,{label:"分类名称","label-width":l.formLabelWidth},{default:a(()=>[t(s,{modelValue:l.editedCategory.name,"onUpdate:modelValue":e[0]||(e[0]=o=>l.editedCategory.name=o),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),t(n,{label:"id","label-width":l.formLabelWidth},{default:a(()=>[t(s,{modelValue:l.editedCategory.id,"onUpdate:modelValue":e[1]||(e[1]=o=>l.editedCategory.id=o),autocomplete:"off",disabled:!0},null,8,["modelValue"])]),_:1},8,["label-width"]),t(n,{label:"分类图标","label-width":l.formLabelWidth},{default:a(()=>[t(s,{modelValue:l.editedCategory.icon,"onUpdate:modelValue":e[2]||(e[2]=o=>l.editedCategory.icon=o),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),t(n,{label:"专题数量表","label-width":l.formLabelWidth},{default:a(()=>[t(s,{modelValue:l.editedCategory.helpCount,"onUpdate:modelValue":e[3]||(e[3]=o=>l.editedCategory.helpCount=o),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),t(n,{label:"排序","label-width":l.formLabelWidth},{default:a(()=>[t(s,{modelValue:l.editedCategory.sort,"onUpdate:modelValue":e[4]||(e[4]=o=>l.editedCategory.sort=o),autocomplete:"off",disabled:!0},null,8,["modelValue"])]),_:1},8,["label-width"])]),_:1},8,["model"]),m("div",G,[m("div",J,[t(g,{onClick:d.cancelEditCategory},{default:a(()=>[h("取消")]),_:1},8,["onClick"]),t(g,{type:"primary",onClick:d.saveEditedCategory},{default:a(()=>[h("保存")]),_:1},8,["onClick"])])])]),_:1},8,["modelValue","onClose"]),t(f,{title:"添加分类",modelValue:l.addCategoryDialogVisible,"onUpdate:modelValue":e[11]||(e[11]=o=>l.addCategoryDialogVisible=o),onClose:d.cancelAddCategory},{default:a(()=>[t(C,{model:l.newCategory},{default:a(()=>[t(n,{label:"分类名称","label-width":l.formLabelWidth},{default:a(()=>[t(s,{modelValue:l.newCategory.name,"onUpdate:modelValue":e[6]||(e[6]=o=>l.newCategory.name=o),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),t(n,{label:"id","label-width":l.formLabelWidth},{default:a(()=>[t(s,{modelValue:l.newCategory.id,"onUpdate:modelValue":e[7]||(e[7]=o=>l.newCategory.id=o),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),t(n,{label:"分类图标","label-width":l.formLabelWidth},{default:a(()=>[t(s,{modelValue:l.newCategory.icon,"onUpdate:modelValue":e[8]||(e[8]=o=>l.newCategory.icon=o),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),t(n,{label:"专题数量表","label-width":l.formLabelWidth},{default:a(()=>[t(s,{modelValue:l.newCategory.helpCount,"onUpdate:modelValue":e[9]||(e[9]=o=>l.newCategory.helpCount=o),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),t(n,{label:"排序","label-width":l.formLabelWidth},{default:a(()=>[t(s,{modelValue:l.editedCategory.sort,"onUpdate:modelValue":e[10]||(e[10]=o=>l.editedCategory.sort=o),autocomplete:"off",disabled:!0},null,8,["modelValue"])]),_:1},8,["label-width"])]),_:1},8,["model"]),m("div",K,[m("div",O,[t(g,{onClick:d.cancelAddCategory},{default:a(()=>[h("取消")]),_:1},8,["onClick"]),t(g,{type:"primary",onClick:d.saveNewCategory},{default:a(()=>[h("保存")]),_:1},8,["onClick"])])])]),_:1},8,["modelValue","onClose"]),t(f,{title:"该分类下的帮助内容：",modelValue:l.viewCategoryDialogVisible,"onUpdate:modelValue":e[13]||(e[13]=o=>l.viewCategoryDialogVisible=o),onClose:d.cancelViewCategory,width:1200,height:600},{default:a(()=>[t(g,{class:"addhelpbtn",type:"primary",size:"small",onClick:e[12]||(e[12]=o=>d.addHelp())},{default:a(()=>[h("添加")]),_:1}),t(w,{data:l.categoryHelps,border:""},{default:a(()=>[t(c,{prop:"id",label:"ID"}),t(c,{label:"显示状态"},{default:a(o=>[t(b,{modelValue:o.row.showStatus,"onUpdate:modelValue":p=>o.row.showStatus=p,onChange:p=>d.updatehelp(o.row)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),_:1}),t(c,{prop:"title",label:"标题"}),t(c,{prop:"content",label:"内容"}),t(c,{prop:"icon",label:"帮助图标"}),t(c,{prop:"createTime",label:"创建时间"}),t(c,{label:"操作"},{default:a(o=>[t(g,{type:"primary",size:"small",onClick:p=>d.editHelp(o.row)},{default:a(()=>[h("编辑")]),_:2},1032,["onClick"]),t(g,{type:"danger",size:"small",onClick:p=>d.deleteHelp(o.row)},{default:a(()=>[h("删除")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])]),_:1},8,["modelValue","onClose"]),t(f,{title:"添加帮助信息",modelValue:l.addhelpDialogVisible,"onUpdate:modelValue":e[19]||(e[19]=o=>l.addhelpDialogVisible=o),onClose:d.cancelAddCategory},{default:a(()=>[t(C,{model:l.newhelp},{default:a(()=>[t(n,{label:"categoryId","label-width":l.formLabelWidth},{default:a(()=>[t(s,{modelValue:l.newhelp.categoryId,"onUpdate:modelValue":e[14]||(e[14]=o=>l.newhelp.categoryId=o),autocomplete:"off",disabled:!0},null,8,["modelValue"])]),_:1},8,["label-width"]),t(n,{label:"帮助标题","label-width":l.formLabelWidth},{default:a(()=>[t(s,{modelValue:l.newhelp.title,"onUpdate:modelValue":e[15]||(e[15]=o=>l.newhelp.title=o),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),t(n,{label:"id","label-width":l.formLabelWidth},{default:a(()=>[t(s,{modelValue:l.newhelp.id,"onUpdate:modelValue":e[16]||(e[16]=o=>l.newhelp.id=o),autocomplete:"off",disabled:!0},null,8,["modelValue"])]),_:1},8,["label-width"]),t(n,{label:"帮助图标","label-width":l.formLabelWidth},{default:a(()=>[t(s,{modelValue:l.newhelp.icon,"onUpdate:modelValue":e[17]||(e[17]=o=>l.newhelp.icon=o),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),t(n,{label:"帮助内容","label-width":l.formLabelWidth},{default:a(()=>[t(s,{modelValue:l.newhelp.content,"onUpdate:modelValue":e[18]||(e[18]=o=>l.newhelp.content=o),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"])]),_:1},8,["model"]),m("div",Q,[m("div",R,[t(g,{onClick:d.cancelAddhelp},{default:a(()=>[h("取消")]),_:1},8,["onClick"]),t(g,{type:"primary",onClick:d.saveNewhelp},{default:a(()=>[h("保存")]),_:1},8,["onClick"])])])]),_:1},8,["modelValue","onClose"]),t(f,{title:"编辑帮助信息",modelValue:l.edithelpDialogVisible,"onUpdate:modelValue":e[25]||(e[25]=o=>l.edithelpDialogVisible=o),onClose:d.cancelAddCategory},{default:a(()=>[t(C,{model:l.selectedHelp},{default:a(()=>[t(n,{label:"categoryId","label-width":l.formLabelWidth},{default:a(()=>[t(s,{modelValue:l.selectedHelp.categoryId,"onUpdate:modelValue":e[20]||(e[20]=o=>l.selectedHelp.categoryId=o),autocomplete:"off",disabled:!0},null,8,["modelValue"])]),_:1},8,["label-width"]),t(n,{label:"帮助标题","label-width":l.formLabelWidth},{default:a(()=>[t(s,{modelValue:l.selectedHelp.title,"onUpdate:modelValue":e[21]||(e[21]=o=>l.selectedHelp.title=o),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),t(n,{label:"id","label-width":l.formLabelWidth},{default:a(()=>[t(s,{modelValue:l.selectedHelp.id,"onUpdate:modelValue":e[22]||(e[22]=o=>l.selectedHelp.id=o),autocomplete:"off",disabled:!0},null,8,["modelValue"])]),_:1},8,["label-width"]),t(n,{label:"帮助图标","label-width":l.formLabelWidth},{default:a(()=>[t(s,{modelValue:l.selectedHelp.icon,"onUpdate:modelValue":e[23]||(e[23]=o=>l.selectedHelp.icon=o),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),t(n,{label:"帮助内容","label-width":l.formLabelWidth},{default:a(()=>[t(s,{modelValue:l.selectedHelp.content,"onUpdate:modelValue":e[24]||(e[24]=o=>l.selectedHelp.content=o),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"])]),_:1},8,["model"]),m("div",X,[m("div",Y,[t(g,{onClick:d.canceledithelp},{default:a(()=>[h("取消")]),_:1},8,["onClick"]),t(g,{type:"primary",onClick:d.saveedithelp},{default:a(()=>[h("保存")]),_:1},8,["onClick"])])])]),_:1},8,["modelValue","onClose"])])}const se=S(q,[["render",Z],["__scopeId","data-v-ea666253"]]);export{se as default};
