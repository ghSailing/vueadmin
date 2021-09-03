webpackJsonp([85],{PWqD:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("viA7"),s=a("cAgV"),i=a("0xDb"),l=a("rh80"),d=[{key:"CN",display_name:"中国"},{key:"US",display_name:"美国"},{key:"JP",display_name:"日本"},{key:"EU",display_name:"欧元区"}],r=d.reduce(function(t,e){return t[e.key]=e.display_name,t},{}),o={props:["data"],directives:{waves:s.a},components:{sl_staffAddAndUpdate:l.default},data:function(){return{table:[{idnum:1,type:"门店总管",account:"12345678",username:"张三",userphone:"13288888888",status:"正常",md:"圣煜麒麟1号店",time:"2017-12-15 17:39:00"},{idnum:2,type:"销售人员",account:"12345679",username:"李四",userphone:"13288888887",status:"冻结",md:"圣煜麒麟1号店",time:"2017-12-14 17:39:00"},{idnum:3,type:"客服人员",account:"12345670",username:"王五",userphone:"13288888886",status:"正常",md:"圣煜麒麟1号店",time:"2017-12-13 17:39:00"}],tableKey:0,list:null,total:null,listLoading:!0,listQuery:{page:1,limit:10,value6:"",importance:void 0,title:void 0,type:void 0,sort:"+id"},importanceOptions:[1,2,3],calendarTypeOptions:d,statusOptions:["published","draft","deleted"],temp:{id:void 0,importance:1,remark:"",timestamp:new Date,title:"",type:"",status:"published"},dialogFormVisible:!1,dialogStatus:"",textMap:{update:"编辑",create:"创建"},dialogPvVisible:!1,pvData:[],rules:{type:[{required:!0,message:"type is required",trigger:"change"}],timestamp:[{type:"date",required:!0,message:"timestamp is required",trigger:"change"}],title:[{required:!0,message:"title is required",trigger:"blur"}]},sl_staffAddAndUpdateState:!1,sl_staffAddAndUpdateData:""}},filters:{statusFilter:function(t){return{published:"success",draft:"info",deleted:"danger"}[t]},typeFilter:function(t){return r[t]}},created:function(){this.getList()},methods:{show_sl_staffAddAndUpdate:function(t,e){var a=e;"add"===t?a={staffStatus:"add"}:(e.staffStatus="edit",a=e),this.sl_staffAddAndUpdateState=!0,this.sl_staffAddAndUpdateData=a},hide_sl_staffAddAndUpdate:function(t){this.sl_staffAddAndUpdateState=!1},getList:function(){var t=this;this.listLoading=!0,Object(n.a)(this.listQuery).then(function(e){t.list=e.data.items,t.total=e.data.total,t.listLoading=!1})},handleFilter:function(){this.listQuery.page=1,this.getList()},handleSizeChange:function(t){this.listQuery.limit=t,this.getList()},handleCurrentChange:function(t){this.listQuery.page=t,this.getList()},handleFetchPv:function(t){var e=this;Object(n.b)(t).then(function(t){e.pvData=t.data.pvData,e.dialogPvVisible=!0})},formatJson:function(t,e){return e.map(function(e){return t.map(function(t){return"timestamp"===t?Object(i.c)(e[t]):e[t]})})},backPrevPage:function(){this.$emit("sl_stafflist",!1)},frozenAccount:function(t){var e=this,a="冻结";a="冻结"===t.status?"解冻":"冻结",this.$confirm("此操作将"+a+t.username+", 是否继续?",a,{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){"冻结"===t.status?t.status="正常":t.status="冻结",e.$message({type:"success",message:a+"成功!"})}).catch(function(){})}}},u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.sl_staffAddAndUpdateState?t.sl_staffAddAndUpdateState?a("div",[a("sl_staffAddAndUpdate",{attrs:{data:t.sl_staffAddAndUpdateData},on:{sl_staffAddAndUpdate:t.hide_sl_staffAddAndUpdate}})],1):t._e():a("div",{staticClass:"app-container calendar-list-container"},[a("div",{staticClass:"title-show-info",staticStyle:{padding:"0 0 20px 0"}},[a("el-button",{attrs:{icon:"el-icon-arrow-left"},on:{click:function(e){t.backPrevPage()}}}),t._v(" "),a("span",[t._v("员工管理")])],1),t._v(" "),a("div",{staticClass:"filter-container"},[a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{type:"primary"},on:{click:function(e){t.show_sl_staffAddAndUpdate("add","")}}},[t._v("新增")])],1),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:t.table,"element-loading-text":"给我一点时间",border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{align:"center",label:"序号",width:"50"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.idnum))])]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center","min-width":"90",label:"所属角色"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.type))])]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center","min-width":"110",label:"登录账号"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.account))])]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center","min-width":"80",label:"成员姓名"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.username))])]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center","min-width":"110",label:"联系电话"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.userphone))])]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center","min-width":"80",label:"账号状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticClass:"link-type"},[t._v(t._s(e.row.status))])]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center","min-width":"120",label:"所属门店"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.md))])]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center","min-width":"152",label:"创建时间"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.time))])]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center","min-width":"100",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){t.show_sl_staffAddAndUpdate("edit",e.row)}}},[t._v("编辑")]),t._v(" "),"正常"==e.row.status?a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){t.frozenAccount(e.row)}}},[t._v("冻结")]):t._e(),t._v(" "),"冻结"==e.row.status?a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){t.frozenAccount(e.row)}}},[t._v("解冻")]):t._e()]}}])})],1)],1)},c=[],f={render:u,staticRenderFns:c},p=f,m=a("VU/8"),_=m(o,p,!1,null,null,null);e.default=_.exports}});