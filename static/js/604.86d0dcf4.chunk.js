"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[604],{2390:function(e,n,t){t.d(n,{N4:function(){return d},Tg:function(){return o},cI:function(){return m},kh:function(){return b},ts:function(){return f}});var r=t(5861),a=t(4687),i=t.n(a),u=t(1044),c=t(2007),s=t.n(c);function o(e){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(i().mark((function e(n){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.ZP.get("https://api.themoviedb.org/3/trending/movie/day?api_key=7e0fc0f40a1f522dce260b9a97593bef",{signal:n});case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e,n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(i().mark((function e(n,t){var r,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.movieId,e.next=3,u.ZP.get("https://api.themoviedb.org/3/movie/".concat(r,"?api_key=7e0fc0f40a1f522dce260b9a97593bef&language=en-US"),{signal:t});case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e,n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(i().mark((function e(n,t){var r,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.filmName,e.next=3,u.ZP.get("https://api.themoviedb.org/3/search/movie?api_key=7e0fc0f40a1f522dce260b9a97593bef&language=en-US&query=".concat(r),{signal:t});case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e,n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(i().mark((function e(n,t){var r,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.movieId,e.next=3,u.ZP.get("https://api.themoviedb.org/3/movie/".concat(r,"/credits?api_key=7e0fc0f40a1f522dce260b9a97593bef&language=en-US"),{signal:t});case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(e,n){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(i().mark((function e(n,t){var r,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.movieId,e.next=3,u.ZP.get("https://api.themoviedb.org/3/movie/".concat(r,"/reviews?api_key=7e0fc0f40a1f522dce260b9a97593bef&language=en-US"),{signal:t});case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}f.propTypes={movieId:s().number.isRequired,signal:s().object.isRequired},d.propTypes={filmName:s().string.isRequired,signal:s().object.isRequired},m.propTypes={movieId:s().number.isRequired,signal:s().object.isRequired},b.propTypes={movieId:s().number.isRequired,signal:s().object.isRequired}},2604:function(e,n,t){t.r(n),t.d(n,{default:function(){return h}});var r=t(2982),a=t(5861),i=t(885),u=t(4687),c=t.n(u),s=t(2791),o=t(3459),p=t(7689),f=t(184),l=function(e){var n=e.films,t=(0,p.TH)();return(0,f.jsx)("ul",{children:n.map((function(e){var n=e.id,r=e.title;return(0,f.jsx)("li",{children:(0,f.jsx)(o.Fg,{to:"movies/".concat(n),state:{from:t},children:r})},n)}))})},d=t(2390),h=function(){var e=(0,s.useState)([]),n=(0,i.Z)(e,2),t=n[0],u=n[1];return(0,s.useEffect)((function(){var e=new AbortController,n=e.signal;return(0,a.Z)(c().mark((function e(){var t,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,d.Tg)(n);case 3:if(t=e.sent){e.next=6;break}return e.abrupt("return");case 6:a=t.data.results,u((function(e){return[].concat((0,r.Z)(e),(0,r.Z)(a))})),e.next=12;break;case 10:e.prev=10,e.t0=e.catch(0);case 12:case"end":return e.stop()}}),e,null,[[0,10]])})))(),function(){e.abort()}}),[]),(0,f.jsxs)("main",{children:[(0,f.jsx)("h1",{children:"Trending today"}),(0,f.jsx)(l,{films:t})]})}}}]);
//# sourceMappingURL=604.86d0dcf4.chunk.js.map