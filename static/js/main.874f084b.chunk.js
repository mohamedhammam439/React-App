(this.webpackJsonpreactapp=this.webpackJsonpreactapp||[]).push([[0],{25:function(e,t,a){e.exports=a(42)},30:function(e,t,a){},31:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(20),c=a.n(s),i=(a(30),a(3)),o=a(4),u=a(6),l=a(5),m=a(7),p=a(11),d=a(10),h=(a(31),function(){return r.a.createElement("div",{className:"navbar"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"navlogo"},r.a.createElement("div",{className:"rlogo"},r.a.createElement("a",{href:"#",className:"logo"},"LOGO"))),r.a.createElement("div",{className:"navlink"},r.a.createElement("ul",null,r.a.createElement(p.b,{to:"/HOME",className:"navlist"},"HOME"),r.a.createElement(p.b,{to:"/CRUD",className:"navlist"},"CRUD"),r.a.createElement(p.b,{to:"/TODOLIST",className:"navlist"},"TODOLIST"),r.a.createElement(p.b,{to:"/WEATHER",className:"navlist"},"WEATHER")))))}),E=(a(37),function(){return r.a.createElement("section",{className:"home"},r.a.createElement("div",{className:"homecontainer"},r.a.createElement("h1",{className:"h1home"},"MOHAMED AHMED ALI HAMMAM"),r.a.createElement("h2",{className:"h2home"},"WELCOM TO MY 3 APPLICATIONS")))}),f=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(s)))).state={isEdit:!1},a.toggleCourse=function(){var e=a.state.isEdit;a.setState({isEdit:!e})},a.renderCourse=function(){return r.a.createElement("li",{className:"licrud"},r.a.createElement("span",{className:"spancrud"},a.props.details.name),r.a.createElement("button",{className:"buttoncrudedit",onClick:function(){a.toggleCourse()}},"Edit"),r.a.createElement("button",{className:"buttoncruddele",onClick:function(){a.props.DeleteCourse(a.props.index)}},"Delete"))},a.updatecourse=function(e){e.preventDefault(),a.props.editCourseItem(a.props.index,a.input.value),a.toggleCourse()},a.editeCourse=function(){return r.a.createElement("form",{onSubmit:a.updatecourse},r.a.createElement("input",{className:"forminputcrud",type:"text",defaultValue:a.props.details.name,ref:function(e){a.input=e}}),r.a.createElement("button",{className:"buttoncrud"},"Update"))},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state.isEdit;return r.a.createElement(n.Fragment,null,e?this.editeCourse():this.renderCourse())}}]),t}(n.Component),v=function(e){return r.a.createElement("form",{className:"formlistcrud",onSubmit:e.AddCourse},r.a.createElement("input",{className:"forminputcrud",type:"text",value:e.current,onChange:e.updateCourse,id:"namee"}),r.a.createElement("button",{className:"buttoncrud"},"Add Course"))},b=(a(38),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={courses:[{name:"English"},{name:"Arabic"},{name:"French"}],current:""},a.updateCourse=function(e){a.setState({current:e.target.value})},a.AddCourse=function(e){e.preventDefault();var t=a.state.current,n=a.state.courses;if(""===e.target.namee.value)return!1;n.push({name:t}),a.setState({courses:n,current:""})},a.DeleteCourse=function(e){var t=a.state.courses;t.splice(e,1),a.setState({courses:t})},a.editCourseItem=function(e,t){var n=a.state.courses;n[e].name=t,a.setState({courses:n})},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.state.courses,a=t.length?t.map((function(t,a){return r.a.createElement(f,{details:t,key:a,DeleteCourse:e.DeleteCourse,index:a,editCourseItem:e.editCourseItem})})):r.a.createElement("p",{className:"pcrud"},"There Is No Courses To Show");return r.a.createElement("section",{className:"crud"},r.a.createElement("div",{className:"crudcontainer"},r.a.createElement("h1",{className:"h1crud"},"What Do You Want To Learn?"),r.a.createElement(v,{updateCourse:this.updateCourse,AddCourse:this.AddCourse,current:this.state.current}),r.a.createElement("ul",{className:"ulcrud"},a)))}}]),t}(n.Component)),y=function(e){var t=e.items,a=e.deletitem,n=t.length?t.map((function(e){return r.a.createElement("div",{key:10*Math.random(),className:"Dolist"},r.a.createElement("span",{className:"num"}," ",e.id," "),r.a.createElement("span",{className:"name"}," ",e.name," "),r.a.createElement("span",{className:"hours"}," ",e.hours," "),r.a.createElement("span",{className:"action icon",onClick:function(){return a(e.id)}}," \xd7 "))})):r.a.createElement("p",{className:"ptodolist"},"There is no action");return r.a.createElement("div",{className:"todo"},r.a.createElement("div",{className:"bar"},r.a.createElement("span",{className:"num blue "},"Id"),r.a.createElement("span",{className:"name blue"},"Action"),r.a.createElement("span",{className:"hours blue"},"Hours"),r.a.createElement("span",{className:"action "},"Dele")),n)},N=a(23),C=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={id:"",name:"",hours:""},a.handelchange=function(e){a.setState(Object(N.a)({},e.target.id,e.target.value))},a.handelsubmit=function(e){if(e.preventDefault(),""===e.target.id.value||""===e.target.name.value||""===e.target.hours.value)return!1;a.props.addlist(a.state),a.setState({id:"",name:"",hours:""})},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"add"},r.a.createElement("form",{onSubmit:this.handelsubmit},r.a.createElement("input",{type:"number",placeholder:"num...",onChange:this.handelchange,id:"id",value:this.state.id}),r.a.createElement("input",{type:"text",placeholder:"Add Action...",onChange:this.handelchange,id:"name",value:this.state.name}),r.a.createElement("input",{type:"number",placeholder:"Hours...",onChange:this.handelchange,id:"hours",value:this.state.hours}),r.a.createElement("input",{type:"submit",value:"Add",id:"act"})))}}]),t}(n.Component),O=(a(39),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={items:[{id:1,name:"Breakfast",hours:"1"},{id:2,name:"Resting",hours:"1"},{id:3,name:"Studing",hours:"3"}]},a.deletitem=function(e){var t=a.state.items,n=t.findIndex((function(t){return t.id===e}));t.splice(n,1),a.setState({items:t})},a.addlist=function(e){var t=a.state.items;t.push(e),a.setState({items:t})},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"TODOLIST"},r.a.createElement("div",{className:"todocontainer"},r.a.createElement("h1",{className:"h1todolist"},"ToDoList App"),r.a.createElement(y,{items:this.state.items,deletitem:this.deletitem}),r.a.createElement(C,{addlist:this.addlist})))}}]),t}(n.Component)),g=a(17),w=a.n(g),j=a(24),A=function(e){return r.a.createElement("form",{onSubmit:e.getweather,className:"formlist"},r.a.createElement("input",{className:"inputweather",type:"text",placeholder:"city",name:"city"}),r.a.createElement("input",{className:"inputweather",type:"text",placeholder:"country",name:"country"}),r.a.createElement("button",{className:"buttonweather"},"Get Weather"))},T=function(e){return r.a.createElement("div",null,e.City&&r.a.createElement("p",{className:"pweather"},"City : ",e.City),e.Country&&r.a.createElement("p",{className:"pweather"},"Country :  ",e.Country),e.Tempreature&&r.a.createElement("p",{className:"pweather"},"Tempreature :  ",e.Tempreature),e.pressure&&r.a.createElement("p",{className:"pweather"},"Pressure  ",e.pressure),e.humidity&&r.a.createElement("p",{className:"pweather"},"Humidity : ",e.humidity),e.description&&r.a.createElement("p",{className:"pweather"},"Description : ",e.description),e.error&&r.a.createElement("p",{className:"pweather"},"Error : ",e.error))},D=(a(41),"487862f576f796db554187c8715d2b90"),S=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={City:"",Country:"",Tempreature:"",pressure:"",humidity:"",description:"",error:""},a.getweather=function(){var e=Object(j.a)(w.a.mark((function e(t){var n,r,s,c;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=t.target.elements.city.value,r=t.target.elements.country.value,e.next=5,fetch("http://api.openweathermap.org/data/2.5/weather?q=".concat(n,",").concat(r,"&Weatherid=").concat(D));case 5:return s=e.sent,e.next=8,s.json();case 8:c=e.sent,n&&r?a.setState({City:c.name,Country:c.sys.country,Tempreature:c.main.temp,pressure:c.main.pressure,humidity:c.main.humidity,description:c.weather[0].description,error:""}):a.setState({City:"",Country:"",Tempreature:"",pressure:"",humidity:"",description:"",error:"Please Insert Data"});case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"Weather"},r.a.createElement("div",{className:"weathercontainer"},r.a.createElement(A,{getweather:this.getweather}),r.a.createElement(T,{City:this.state.City,Country:this.state.Country,Tempreature:this.state.Tempreature,pressure:this.state.pressure,humidity:this.state.humidity,description:this.state.description,error:this.state.error})))}}]),t}(n.Component),k=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(p.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(h,null),r.a.createElement(d.a,{path:"/HOME",component:E}),r.a.createElement(d.a,{path:"/CRUD",component:b}),r.a.createElement(d.a,{path:"/TODOLIST",component:O}),r.a.createElement(d.a,{path:"/Weather",component:S})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[25,1,2]]]);
//# sourceMappingURL=main.874f084b.chunk.js.map