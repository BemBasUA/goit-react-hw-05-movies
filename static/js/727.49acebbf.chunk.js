"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[727],{229:function(t,e,n){n.d(e,{$:function(){return r}});var r="d7682ca325a3faf9378f6270ac4d001d"},126:function(t,e,n){n.d(e,{e:function(){return s}});var r=n(731),a=n(184),s=function(t){var e=t.movies,n=t.path,s=t.style,u=t.state;return e.map((function(t){return n?(0,a.jsx)(r.rU,{className:s,to:n+"".concat(t.id),style:{display:"block"},state:u,children:t.name||t.title},t.id):(0,a.jsx)(r.rU,{className:s,to:"".concat(t.id),style:{display:"block"},state:u,children:t.name||t.title},t.id)}))}},484:function(t,e,n){n.r(e),n.d(e,{default:function(){return _}});var r=n(885),a=n(791),s=n(861),u=n(757),i=n.n(u),c=n(44),o=n(229);function l(){return(l=(0,s.Z)(i().mark((function t(e){return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.ZP.get(c.ZP.defaults.baseURL+"search/movie",{params:{api_key:o.$,query:e}}).then((function(t){return t.data.results}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}c.ZP.defaults.baseURL="https://api.themoviedb.org/3/";var f=n(731),p=n(689),d=n(126),m="Movies_input__KrUqs",h="Movies_button__GcIka",v="Movies_link__MzAfU",y=n(184),_=function(){var t,e=(0,a.useState)([]),n=(0,r.Z)(e,2),s=n[0],u=n[1],i=(0,f.lr)(),c=(0,r.Z)(i,2),o=c[0],_=c[1],b=null!==(t=o.get("query"))&&void 0!==t?t:"",k=(0,p.TH)();(0,a.useEffect)((function(){b&&function(t){return l.apply(this,arguments)}(b).then((function(t){return u(t)}))}),[b]);return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)("form",{onSubmit:function(t){t.preventDefault();var e=t.target.elements.text.value;_(""!==e?{query:e}:"")},children:[(0,y.jsx)("input",{className:m,defaultValue:b,name:"text",type:"text"}),(0,y.jsx)("button",{className:h,type:"submit",children:"search"})]}),(0,y.jsx)(d.e,{movies:s,style:v,state:{from:k}})]})}}}]);
//# sourceMappingURL=727.49acebbf.chunk.js.map