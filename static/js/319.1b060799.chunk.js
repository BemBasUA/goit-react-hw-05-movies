"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[319],{229:function(t,e,n){n.d(e,{$:function(){return r}});var r="d7682ca325a3faf9378f6270ac4d001d"},319:function(t,e,n){n.r(e),n.d(e,{default:function(){return l}});var r=n(982),a=n(885),c=n(791),u=n(689),i=n(861),s=n(757),o=n.n(s),p=n(44),f=n(229);function h(){return(h=(0,i.Z)(o().mark((function t(e){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.ZP.get(p.ZP.defaults.baseURL+"movie/".concat(e,"/credits"),{params:{api_key:f.$}}).then((function(t){return t.data.cast}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}p.ZP.defaults.baseURL="https://api.themoviedb.org/3/";var d="Cast_image__mOsuM",m=n(184),l=function(){var t=(0,c.useState)([]),e=(0,a.Z)(t,2),n=e[0],i=e[1],s=(0,u.UO)().movieId;return(0,c.useEffect)((function(){(function(t){return h.apply(this,arguments)})(s).then((function(t){t.map((function(t){return i((function(e){return[].concat((0,r.Z)(e),[{name:t.name,id:t.id,character:t.character,photo:"https://image.tmdb.org/t/p/w500"+t.profile_path}])}))}))}))}),[s]),(0,m.jsx)("div",{children:(0,m.jsx)("ul",{children:n.map((function(t){return(0,m.jsxs)("li",{children:[(0,m.jsx)("img",{className:d,src:t.photo,alt:"actor_photo"}),(0,m.jsx)("p",{children:t.name}),(0,m.jsxs)("p",{children:["Character: ",t.character]})]},t.id)}))})})}}}]);
//# sourceMappingURL=319.1b060799.chunk.js.map