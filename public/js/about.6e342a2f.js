(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{a21f:function(t,e,a){var n=a("584a"),o=n.JSON||(n.JSON={stringify:JSON.stringify});t.exports=function(t){return o.stringify.apply(o,arguments)}},da65:function(t,e,a){},e069:function(t,e,a){"use strict";var n=a("da65"),o=a.n(n);o.a},e658:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"Job"},[a("JobPage")],1)},o=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.job?a("div",{staticClass:"jumbotron"},[a("h1",{staticClass:"card-header"},[t._v("Job ID "+t._s(t.job.DAG))]),a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title"},[t._v(t._s(this.$data.job.Total)+" Total Jobs")]),a("h6",{staticClass:"card-subtitle text-muted"},[t._v("Started at "+t._s(t.job.Time)+" on "+t._s(t.job.Date))])]),a("div",{staticClass:"card-footer text-muted"},[a("div",{staticClass:"progress"},[a("div",{staticClass:"progress-bar",style:t.job.percent,attrs:{role:"progressbar","aria-valuenow":"5","aria-valuemin":"0","aria-valuemax":"100"}})]),a("h1",[t._v(t._s(t.job.percent)+"% Completed")])]),a("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-1",modifiers:{"modal-1":!0}}],staticClass:"btn btn-primary space-button btn-lg",on:{click:function(e){t.confirm=!0}}},[t._v("Cancel DAG")]),t.confirm?a("b-modal",{attrs:{id:"modal-1",title:"Cancelling DAG "+t.job.DAG}},[a("form",[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"dagID"}},[t._v("Type the DAG ID to confirm")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.dagID,expression:"dagID"}],staticClass:"form-control",attrs:{id:"dagID",placeholder:"DAG ID"},domProps:{value:t.dagID},on:{input:function(e){e.target.composing||(t.dagID=e.target.value)}}})])]),a("div",{staticClass:"w-100",attrs:{slot:"modal-footer"},slot:"modal-footer"},[a("b-button",{staticClass:"float-right",attrs:{variant:"primary",size:"md"},on:{click:function(e){t.confirm=!1}}},[t._v("Cancel")]),a("b-button",{staticClass:"float-right",staticStyle:{"margin-right":"2%"},attrs:{variant:"primary",size:"md"},on:{click:t.confirmDelete}},[t._v("Submit")])],1)]):t._e()],1):t._e()])},r=[],i=a("f499"),c=a.n(i),l=a("cebc"),u=(a("a481"),a("96cf"),a("3b8d")),d="http://localhost:8000/api",m={name:"JobPage",data:function(){return{job:{},confirm:!1,dagID:null}},mounted:function(){this.load()},methods:{load:function(){var t=Object(u["a"])(regeneratorRuntime.mark(function t(){var e,a,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch(d);case 2:if(e=t.sent,200!==e.status){t.next=8;break}return t.next=6,e.json();case 6:for(a=t.sent,n=0;n<a.jobs.length;n++)a.jobs[n].DAG.replace("DAG+","")===this.$route.params.id&&(this.job=Object(l["a"])({},a.jobs[n],{DAG:a.jobs[n].DAG.replace("dag+",""),percent:"width: "+100*a.jobs[n].Done/a.jobs[n].Total+"%;"}));case 8:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),sendDelete:function(){var t=Object(u["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch(d,{method:"POST",body:c()({id:this.dagID})});case 2:e=t.sent,200===e.status&&this.$router.push("/");case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),toggle:function(){this.confirm=!this.confirm},confirmDelete:function(){this.dagID===this.job.DAG?(console.log("yes"),this.sendDelete()):console.log("no")}}},f=m,b=(a("e069"),a("2877")),p=Object(b["a"])(f,s,r,!1,null,null,null),h=p.exports,v={name:"job",components:{JobPage:h}},g=v,D=Object(b["a"])(g,n,o,!1,null,null,null);e["default"]=D.exports},f499:function(t,e,a){t.exports=a("a21f")}}]);
//# sourceMappingURL=about.6e342a2f.js.map