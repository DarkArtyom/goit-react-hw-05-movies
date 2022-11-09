"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[387],{3387:function(e,n,t){t.r(n),t.d(n,{default:function(){return j}});var r,a,i,c,s,u=t(2982),o=t(5861),p=t(885),f=t(4687),d=t.n(f),l=t(2791),m=t(7689),h=t(168),g=t(4313),b=g.ZP.section(r||(r=(0,h.Z)(["\n  padding: 10px;\n"]))),x=g.ZP.ul(a||(a=(0,h.Z)(["\n  display: grid;\n  max-width: calc(100vw - 20px);\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  grid-gap: 16px;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n"]))),v=g.ZP.li(i||(i=(0,h.Z)(["\n  border-radius: 2px;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n"]))),y=g.ZP.div(c||(c=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]))),Z=g.ZP.img(s||(s=(0,h.Z)(["\n  display: block;\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  &:hover {\n    transform: scale(1.03);\n    cursor: zoom-in;\n  }\n"]))),w=t(4656),k=t(184),j=function(){var e=(0,m.UO)().movieId,n=(0,l.useState)([]),t=(0,p.Z)(n,2),r=t[0],a=t[1];if((0,l.useEffect)((function(){var n=new AbortController,t=n.signal;return(0,o.Z)(d().mark((function n(){var r;return d().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,w.cI)({movieId:e},t);case 3:r=n.sent,a((function(e){return[].concat((0,u.Z)(e),(0,u.Z)(r.data.cast))})),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))(),function(){n.abort()}}),[e]),e)return(0,k.jsx)(b,{children:(0,k.jsx)(x,{children:r.map((function(e){return(0,k.jsx)(v,{children:(0,k.jsxs)(y,{children:[(0,k.jsx)(Z,{src:"https://image.tmdb.org/t/p/w500".concat(e.profile_path),alt:"",width:"100",height:"150"}),(0,k.jsxs)("p",{children:[(0,k.jsx)("b",{children:"Name:"})," ",e.name]}),(0,k.jsxs)("p",{children:[(0,k.jsx)("b",{children:"Character:"})," ",e.character]})]})},e.id)}))})})}},4656:function(e,n,t){t.d(n,{N4:function(){return l},Tg:function(){return o},cI:function(){return h},kh:function(){return b},ts:function(){return f}});var r=t(5861),a=t(4687),i=t.n(a),c=t(1044),s=t(2007),u=t.n(s);function o(e){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(i().mark((function e(n){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.ZP.get("https://api.themoviedb.org/3/trending/movie/day?api_key=7e0fc0f40a1f522dce260b9a97593bef",{signal:n});case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e,n){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(i().mark((function e(n,t){var r,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.movieId,e.next=3,c.ZP.get("https://api.themoviedb.org/3/movie/".concat(r,"?api_key=7e0fc0f40a1f522dce260b9a97593bef&language=en-US"),{signal:t});case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e,n){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(i().mark((function e(n,t){var r,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.filmName,e.next=3,c.ZP.get("https://api.themoviedb.org/3/search/movie?api_key=7e0fc0f40a1f522dce260b9a97593bef&language=en-US&query=".concat(r),{signal:t});case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e,n){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(i().mark((function e(n,t){var r,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.movieId,e.next=3,c.ZP.get("https://api.themoviedb.org/3/movie/".concat(r,"/credits?api_key=7e0fc0f40a1f522dce260b9a97593bef&language=en-US"),{signal:t});case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(e,n){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(i().mark((function e(n,t){var r,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.movieId,e.next=3,c.ZP.get("https://api.themoviedb.org/3/movie/".concat(r,"/reviews?api_key=7e0fc0f40a1f522dce260b9a97593bef&language=en-US"),{signal:t});case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}f.propTypes={movieId:u().number.isRequired,signal:u().object.isRequired},l.propTypes={filmName:u().string.isRequired,signal:u().object.isRequired},h.propTypes={movieId:u().number.isRequired,signal:u().object.isRequired},b.propTypes={movieId:u().number.isRequired,signal:u().object.isRequired}}}]);
//# sourceMappingURL=387.5f858f72.chunk.js.map