(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(18)},16:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),l=a.n(c),o=a(9),u=a(1),i=a(2),m=a(4),h=a(3),s=a(5),b=function(){return r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Job"),r.a.createElement("th",null,"remove"),r.a.createElement("th",null,"\u6d4b\u8bd5\u90e8\u7f72\u53d1\u5e03")))},v=function(e){var t=e.characterData.map(function(t,a){return r.a.createElement("tr",{key:a},r.a.createElement("td",null,t.name),r.a.createElement("td",null,t.job),r.a.createElement("td",null,r.a.createElement("button",{onClick:function(){return e.removeCharacter(a)}},"Delete")))});return r.a.createElement("tbody",null,t)},E=function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.characterData,a=e.removeCharacter;return r.a.createElement("table",null,r.a.createElement(b,null),r.a.createElement(v,{characterData:t,removeCharacter:a}))}}]),t}(n.Component),j=a(8),p=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).handleChange=function(e){var t=e.target,n=t.name,r=t.value;console.log({name:n,value:r}),a.setState(Object(j.a)({},n,r))},a.submitForm=function(){a.props.handleSubmit(a.state),a.setState(a.initialState)},a.initialState={name:"",job:""},a.state=a.initialState,a}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.name,a=e.job;return r.a.createElement("form",null,r.a.createElement("label",null,"Name"),r.a.createElement("input",{type:"text",name:"name",value:t,onChange:this.handleChange}),r.a.createElement("label",null,"Job"),r.a.createElement("input",{type:"text",name:"job",value:a,onChange:this.handleChange}),r.a.createElement("input",{type:"button",value:"Submit",onClick:this.submitForm}))}}]),t}(n.Component),f=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={characters:[{name:"Charlie",job:"Janitor"},{name:"Mac",job:"Bouncer"},{name:"Dee",job:"Aspring actress"},{name:"Dennis",job:"Bartender"}]},a.removeCharacter=function(e){var t=a.state.characters;a.setState({characters:t.filter(function(t,a){return a!==e})}),console.log({characters:t})},a.handleSubmit=function(e){a.setState({characters:Object(o.a)(a.state.characters).concat([e])})},a}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state.characters;return r.a.createElement("div",{className:"container"},r.a.createElement(E,{characterData:e,removeCharacter:this.removeCharacter}),r.a.createElement(p,{handleSubmit:this.handleSubmit}))}}]),t}(n.Component);a(16);l.a.render(r.a.createElement(f,null),document.getElementById("root"))}},[[10,2,1]]]);
//# sourceMappingURL=main.b660fad9.chunk.js.map