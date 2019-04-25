(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{a21f:function(t,e,a){var o=a("584a"),n=o.JSON||(o.JSON={stringify:JSON.stringify});t.exports=function(t){return n.stringify.apply(n,arguments)}},da65:function(t,e,a){},e069:function(t,e,a){"use strict";var o=a("da65"),n=a.n(o);n.a},e658:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"Job"},[a("JobPage")],1)},n=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.job?a("div",{staticClass:"jumbotron"},[a("h1",{staticClass:"card-header"},[t._v("Job ID "+t._s(t.job.DAG))]),a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title"},[t._v(t._s(this.$data.job.Total)+" Total Jobs")]),a("h6",{staticClass:"card-subtitle text-muted"},[t._v("Started at "+t._s(t.job.Time)+" on "+t._s(t.job.Date))])]),a("div",{staticClass:"card-footer text-muted bg-light"},[a("div",{staticClass:"progress",staticStyle:{height:"120%"}},[a("div",{staticClass:"progress-bar",style:"width: "+t.job.percent+"%; font-size: 150%;",attrs:{role:"progressbar","aria-valuenow":"5","aria-valuemin":"0","aria-valuemax":"100"}},[t._v(t._s(t.job.percent)+"% Completed")])])]),a("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-1",modifiers:{"modal-1":!0}}],staticClass:"btn btn-primary space-button btn-lg",on:{click:function(e){t.confirm=!0}}},[t._v("Cancel DAG")]),t.confirm?a("b-modal",{attrs:{id:"modal-1",title:"Cancelling DAG "+t.job.DAG}},[a("form",[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"dagID"}},[t._v("Type the DAG ID to confirm")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.dagID,expression:"dagID"}],staticClass:"form-control",attrs:{id:"dagID",placeholder:"DAG ID"},domProps:{value:t.dagID},on:{input:function(e){e.target.composing||(t.dagID=e.target.value)}}})])]),a("div",{staticClass:"w-100",attrs:{slot:"modal-footer"},slot:"modal-footer"},[a("b-button",{staticClass:"float-right",attrs:{variant:"primary",size:"md"},on:{click:function(e){t.confirm=!1}}},[t._v("Cancel")]),a("b-button",{staticClass:"float-right",staticStyle:{"margin-right":"2%"},attrs:{variant:"primary",size:"md"},on:{click:t.confirmDelete}},[t._v("Submit")])],1)]):t._e()],1):t._e()])},r=[],i=a("f499"),c=a.n(i),l=a("cebc"),u=(a("a481"),a("96cf"),a("3b8d")),d="http://localhost:8000/api",f={name:"JobPage",data:function(){return{job:{},confirm:!1,dagID:null}},mounted:function(){this.load()},methods:{load:function(){var t=Object(u["a"])(regeneratorRuntime.mark(function t(){var e,a,o;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch(d);case 2:if(e=t.sent,200!==e.status){t.next=8;break}return t.next=6,e.json();case 6:for(a=t.sent,o=0;o<a.jobs.length;o++)a.jobs[o].DAG.replace("DAG+","")===this.$route.params.id&&(this.job=Object(l["a"])({},a.jobs[o],{DAG:a.jobs[o].DAG.replace("dag+",""),percent:Math.floor(100*a.jobs[o].Done/a.jobs[o].Total)}),console.log(this.job));case 8:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),sendDelete:function(){var t=Object(u["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch(d,{method:"POST",body:c()({id:this.dagID})});case 2:e=t.sent,200===e.status&&this.$router.push("/");case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),toggle:function(){this.confirm=!this.confirm},confirmDelete:function(){this.dagID===this.job.DAG?(console.log("yes"),this.sendDelete()):console.log("no")}}},b=f,m=(a("e069"),a("2877")),p=Object(m["a"])(b,s,r,!1,null,null,null),h=p.exports,g={name:"job",components:{JobPage:h}},v=g,D=Object(m["a"])(v,o,n,!1,null,null,null);e["default"]=D.exports},f499:function(t,e,a){t.exports=a("a21f")}}]);
//# sourceMappingURL=about.f4c8bfd9.js.map