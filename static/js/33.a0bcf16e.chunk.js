"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[33],{4656:function(e,n,t){t.d(n,{N4:function(){return l},cI:function(){return v},kh:function(){return x},ts:function(){return d}});var r=t(5861),i=t(4687),a=t.n(i),s=t(1044),c=t(2007),u=t.n(c);function o(){return(o=(0,r.Z)(a().mark((function e(){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.ZP.get("https://api.themoviedb.org/3/trending/movie/day?api_key=7e0fc0f40a1f522dce260b9a97593bef");case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var p={fetchTrending:function(){return o.apply(this,arguments)}};function d(e){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(a().mark((function e(n){var t,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.movieId,e.next=3,s.ZP.get("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=7e0fc0f40a1f522dce260b9a97593bef&language=en-US"));case 3:return r=e.sent,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(a().mark((function e(n){var t,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.filmName,e.next=3,s.ZP.get("https://api.themoviedb.org/3/search/movie?api_key=7e0fc0f40a1f522dce260b9a97593bef&language=en-US&query=".concat(t));case 3:return r=e.sent,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(a().mark((function e(n){var t,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.movieId,e.next=3,s.ZP.get("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=7e0fc0f40a1f522dce260b9a97593bef&language=en-US"));case 3:return r=e.sent,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(a().mark((function e(n){var t,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.movieId,e.next=3,s.ZP.get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=7e0fc0f40a1f522dce260b9a97593bef&language=en-US"));case 3:return r=e.sent,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}n.ZP=p,d.propTypes={movieId:u().number.isRequired},l.propTypes={filmName:u().string.isRequired},v.propTypes={movieId:u().number.isRequired},x.propTypes={movieId:u().number.isRequired}},5033:function(e,n,t){t.r(n),t.d(n,{default:function(){return _}});var r,i,a,s,c,u,o=t(5861),p=t(885),d=t(4687),f=t.n(d),l=t(2791),h=t(7689),v=t(3459),m=t(168),x=t(4313),g=x.ZP.section(r||(r=(0,m.Z)(["\n  padding: 15px;\n"]))),b=x.ZP.div(i||(i=(0,m.Z)(["\n  display: flex;\n  margin-bottom: 30px;\n  margin-top: 15px;\n"]))),j=x.ZP.div(a||(a=(0,m.Z)(["\n  padding: 20px;\n"]))),y=x.ZP.h2(s||(s=(0,m.Z)(["\n  text-align: center;\n  margin-bottom: 10px;\n"]))),Z=x.ZP.ul(c||(c=(0,m.Z)(["\n  display: flex;\n  justify-content: space-evenly;\n  margin: 0;\n  text-decoration: underline;\n"]))),w=x.ZP.h3(u||(u=(0,m.Z)(["\n  text-align: center;\n  margin-bottom: 15px;\n"]))),k=t(4656),P=t(184),_=function(){var e,n,t=(0,h.UO)().movieId,r=(0,l.useState)(null),i=(0,p.Z)(r,2),a=i[0],s=i[1],c=(0,l.useRef)(!0),u=null!==(e=null===(n=(0,h.TH)().state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/movies";if((0,l.useEffect)((function(){(0,o.Z)(f().mark((function e(){var n;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!c.current){e.next=4;break}return c.current=!1,e.abrupt("return");case 4:return e.next=6,(0,k.ts)({movieId:t});case 6:n=e.sent,s(n.data),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))()}),[t]),a){var d=a.poster_path,m=a.release_date,x=a.title,_=a.vote_average,I=a.overview,R=a.genres;return(0,P.jsx)("main",{children:(0,P.jsxs)(g,{children:[(0,P.jsx)(v.Fg,{to:u,children:"Go back"}),(0,P.jsxs)(b,{children:[(0,P.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(d),width:"200",height:"300",alt:x}),(0,P.jsxs)(j,{children:[(0,P.jsxs)(y,{children:[x," (",Number.parseInt(m),")"]}),(0,P.jsxs)("p",{children:[(0,P.jsx)("b",{children:"Rating:"})," ",_]}),(0,P.jsxs)("p",{children:[(0,P.jsx)("b",{children:"Overview:"})," ",I]}),(0,P.jsxs)("p",{children:[(0,P.jsx)("b",{children:"Genres:"}),R.map((function(e){return e.name})).join(", ")]})]})]}),(0,P.jsxs)("div",{children:[(0,P.jsx)(w,{children:"Aditional information"}),(0,P.jsxs)(Z,{children:[(0,P.jsx)("li",{children:(0,P.jsx)(v.Fg,{to:"cast",children:"Cast"})}),(0,P.jsx)("li",{children:(0,P.jsx)(v.Fg,{to:"reviews",children:"Reviews"})})]})]}),(0,P.jsx)(l.Suspense,{fallback:(0,P.jsx)("div",{children:"Loading subpage..."}),children:(0,P.jsx)(h.j3,{})})]})})}}}}]);
//# sourceMappingURL=33.a0bcf16e.chunk.js.map