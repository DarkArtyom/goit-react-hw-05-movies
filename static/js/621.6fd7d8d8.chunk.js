"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[621],{4656:function(e,n,t){t.d(n,{N4:function(){return l},Tg:function(){return s},cI:function(){return m},kh:function(){return v},ts:function(){return f}});var r=t(5861),i=t(4687),a=t.n(i),u=t(1044),o=t(2007),c=t.n(o);function s(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(a().mark((function e(){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.ZP.get("https://api.themoviedb.org/3/trending/movie/day?api_key=7e0fc0f40a1f522dce260b9a97593bef");case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(a().mark((function e(n){var t,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.movieId,e.next=3,u.ZP.get("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=7e0fc0f40a1f522dce260b9a97593bef&language=en-US"));case 3:return r=e.sent,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(a().mark((function e(n){var t,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.filmName,e.next=3,u.ZP.get("https://api.themoviedb.org/3/search/movie?api_key=7e0fc0f40a1f522dce260b9a97593bef&language=en-US&query=".concat(t));case 3:return r=e.sent,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e){return b.apply(this,arguments)}function b(){return(b=(0,r.Z)(a().mark((function e(n){var t,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.movieId,e.next=3,u.ZP.get("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=7e0fc0f40a1f522dce260b9a97593bef&language=en-US"));case 3:return r=e.sent,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(a().mark((function e(n){var t,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.movieId,e.next=3,u.ZP.get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=7e0fc0f40a1f522dce260b9a97593bef&language=en-US"));case 3:return r=e.sent,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}f.propTypes={movieId:c().number.isRequired},l.propTypes={filmName:c().string.isRequired},m.propTypes={movieId:c().number.isRequired},v.propTypes={movieId:c().number.isRequired}},3621:function(e,n,t){t.r(n),t.d(n,{default:function(){return I}});var r,i,a,u,o,c=t(5861),s=t(885),p=t(4687),f=t.n(p),d=t(2791),l=t(7689),h=t(168),m=t(4313),b=m.ZP.form(r||(r=(0,h.Z)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  background-color: #fff;\n  border-radius: 3px;\n  overflow: hidden;\n"]))),v=m.ZP.button(i||(i=(0,h.Z)(["\n  display: inline-block;\n  width: 48px;\n  height: 48px;\n  border: 0;\n  background-image: url('https://www.svgrepo.com/svg/19676/search');\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n  &:hover {\n    opacity: 1;\n  }\n"]))),g=m.ZP.span(a||(a=(0,h.Z)(["\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  overflow: hidden;\n  border: 0;\n"]))),x=m.ZP.input(u||(u=(0,h.Z)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n  &::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n"]))),y=m.ZP.div(o||(o=(0,h.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),k=t(9e3),w=t(6731),Z=t(184),j=function(e){var n,t=e.onInputSubmit,r=(0,w.lr)(),i=(0,s.Z)(r,2),a=i[0],u=i[1],o=null!==(n=a.get("query"))&&void 0!==n?n:"";return(0,Z.jsx)(y,{children:(0,Z.jsxs)(b,{onSubmit:function(e){if(e.preventDefault(),""===o.trim())return alert("Enter image for search");t(o)},children:[(0,Z.jsxs)(v,{type:"submit",children:[(0,Z.jsx)(k.Vph,{}),(0,Z.jsx)(g,{children:"Search"})]}),(0,Z.jsx)(x,{type:"text",autocomplete:"off",autoFocus:!0,placeholder:"Search films by name",value:o,onChange:function(e){u({query:e.currentTarget.value.toLowerCase()})}})]})})},S=t(3459),P=t(4656),I=function(){var e=(0,d.useState)(""),n=(0,s.Z)(e,2),t=n[0],r=n[1],i=(0,d.useState)([]),a=(0,s.Z)(i,2),u=a[0],o=a[1],p=(0,d.useRef)(!0),h=(0,l.TH)();(0,d.useEffect)((function(){(0,c.Z)(f().mark((function e(){var n;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!p.current){e.next=4;break}return p.current=!1,e.abrupt("return");case 4:if(""!==t){e.next=6;break}return e.abrupt("return");case 6:return e.next=8,(0,P.N4)({filmName:t});case 8:n=e.sent,o(n.data.results),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})))()}),[t]);return(0,Z.jsxs)("section",{children:[(0,Z.jsx)(j,{onInputSubmit:function(e){r(e),o([])}}),u.length>0&&(0,Z.jsx)("ul",{children:u.map((function(e){var n=e.id,t=e.title;return(0,Z.jsx)("li",{children:(0,Z.jsx)(S.Fg,{to:"".concat(n),state:{from:h},children:t})},n)}))})]})}}}]);
//# sourceMappingURL=621.6fd7d8d8.chunk.js.map