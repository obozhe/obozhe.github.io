(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){e.exports=a(44)},43:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n,r,l=a(0),i=a.n(l),s=a(14),o=a.n(s),c=a(1),u=a(2),m=a(4),f=a(3),p=a(5),d="99778a26e9ad6fefbb08a48e1bef2785",v=[{id:28,name:"\u044d\u043a\u0448\u043d"},{id:12,name:"\u043f\u0440\u0438\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f"},{id:16,name:"\u0430\u043d\u0438\u043c\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439"},{id:35,name:"\u043a\u043e\u043c\u0435\u0434\u0438\u044f"},{id:80,name:"\u043a\u0440\u0438\u043c\u0438\u043d\u0430\u043b"},{id:99,name:"\u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u043b\u044c\u043d\u044b\u0439"},{id:18,name:"\u0434\u0440\u0430\u043c\u0430"},{id:10751,name:"\u0441\u0435\u043c\u0435\u0439\u043d\u044b\u0439"},{id:14,name:"\u0444\u044d\u043d\u0442\u0435\u0437\u0438"},{id:36,name:"\u0438\u0441\u0442\u043e\u0440\u0438\u044f"},{id:27,name:"\u0443\u0436\u0430\u0441\u044b"},{id:10402,name:"\u043c\u0443\u0437\u044b\u043a\u0430\u043b\u044c\u043d\u044b\u0439"},{id:9648,name:"\u043c\u0438\u0441\u0442\u0438\u043a\u0430"},{id:10749,name:"\u0440\u043e\u043c\u0430\u043d\u0441"},{id:878,name:"\u0444\u0430\u043d\u0442\u0430\u0441\u0442\u0438\u043a\u0430"},{id:10770,name:"\u0442\u0435\u043b\u0435\u0444\u0438\u043b\u044c\u043c"},{id:53,name:"\u0442\u0440\u0438\u043b\u043b\u0435\u0440"},{id:10752,name:"\u0432\u043e\u0435\u043d\u043d\u044b\u0439"},{id:37,name:"\u0432\u0435\u0441\u0442\u0435\u0440\u043d"}],h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return fetch("https://api.themoviedb.org/3/discover/movie?api_key=".concat(d,"&").concat(e,"&page=").concat(t,"&language=ru&vote_count.gte=50")).then(function(e){return e.json()}).catch(function(){return alert("Something went wrong")})},g=function(){return fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=".concat(d,"&language=ru")).then(function(e){return e.json()}).catch(function(){return alert("Something went wrong")})},E=a(6),b=(a(22),a(9));function y(){return i.a.createElement("div",{className:"lds-heart"},i.a.createElement("div",null))}function O(e){var t=e.movie,a=e.openMovie,n=Object(l.useState)(!0),r=Object(b.a)(n,2),s=r[0],o=r[1],c="https://image.tmdb.org/t/p/w500/"+t.poster_path||!1;return i.a.createElement("div",{className:"movie"},i.a.createElement("div",{style:{display:s?"block":"none"}},i.a.createElement(y,null)),i.a.createElement("button",{style:{display:s?"none":"flex"},onClick:a},i.a.createElement("div",{className:"hover"},t.title,i.a.createElement("small",null,t.original_title)),i.a.createElement("img",{src:c,alt:t.title,onLoad:function(){o(!1)}})))}function w(){return(w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function j(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var S,k,N=function(e){var t=e.svgRef,a=j(e,["svgRef"]);return i.a.createElement("svg",w({width:24,height:24,viewBox:"0 0 24 24",ref:t},a),n||(n=i.a.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"})),r||(r=i.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})))},M=i.a.forwardRef(function(e,t){return i.a.createElement(N,w({svgRef:t},e))});a.p;function x(e){var t=e.movie,a=e.close,n=Object(l.useState)(!0),r=Object(b.a)(n,2),s=r[0],o=r[1],c="https://image.tmdb.org/t/p/w500/"+t.poster_path||!1;return i.a.createElement("div",{className:"filmpage-wrapper"},i.a.createElement("button",{className:"fullpage-btn",onClick:a}),i.a.createElement("div",{style:{display:s?"block":"none"}},i.a.createElement(y,null)),i.a.createElement("div",{style:{display:s?"none":"flex"},className:"filmpage"},i.a.createElement("div",{className:"poster"},i.a.createElement("img",{src:c,alt:t.title,onLoad:function(){o(!1)}})),i.a.createElement("div",{className:"film-body"},i.a.createElement("div",{className:"title"},t.title," ",i.a.createElement("small",null,t.original_title),i.a.createElement("br",null),i.a.createElement("small",null,t.genre_ids.map(function(e){return v.filter(function(t){return t.id===e}).map(function(e){return e.name+" "})}))),i.a.createElement("div",{className:"description"},t.overview),i.a.createElement("div",{className:"extra-info"},i.a.createElement("span",null,i.a.createElement("span",{role:"img","aria-label":"release_date"},"\ud83d\udcc5"),"\xa0",t.release_date.split("-").reverse().join(".")),i.a.createElement("span",null,t.vote_average,"\xa0",i.a.createElement("span",{role:"img","aria-label":"vote_average"},"\u2b50")))),i.a.createElement("button",{className:"close-but",onClick:a},i.a.createElement(M,null))))}function R(){return(R=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function _(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var C,F,P=function(e){var t=e.svgRef,a=_(e,["svgRef"]);return i.a.createElement("svg",R({width:24,height:24,viewBox:"0 0 24 24",ref:t},a),S||(S=i.a.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"})),k||(k=i.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})))},z=i.a.forwardRef(function(e,t){return i.a.createElement(P,R({svgRef:t},e))});a.p;function L(){return(L=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function H(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var I,B,W=function(e){var t=e.svgRef,a=H(e,["svgRef"]);return i.a.createElement("svg",L({width:24,height:24,viewBox:"0 0 24 24",ref:t},a),C||(C=i.a.createElement("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"})),F||(F=i.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})))},V=i.a.forwardRef(function(e,t){return i.a.createElement(W,L({svgRef:t},e))});a.p;function D(){return(D=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function U(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var Y,G,J=function(e){var t=e.svgRef,a=U(e,["svgRef"]);return i.a.createElement("svg",D({width:24,height:24,viewBox:"0 0 24 24",ref:t},a),I||(I=i.a.createElement("path",{d:"M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"})),B||(B=i.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})))},A=i.a.forwardRef(function(e,t){return i.a.createElement(J,D({svgRef:t},e))});a.p;function q(){return(q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function K(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var Q=function(e){var t=e.svgRef,a=K(e,["svgRef"]);return i.a.createElement("svg",q({width:24,height:24,viewBox:"0 0 24 24",ref:t},a),Y||(Y=i.a.createElement("path",{d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"})),G||(G=i.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})))},T=i.a.forwardRef(function(e,t){return i.a.createElement(Q,q({svgRef:t},e))}),X=(a.p,a(23)),Z=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(m.a)(this,Object(f.a)(t).call(this))).setSlidesCount=X(function(){return e.setState({slidesCount:Math.floor(window.innerWidth/170)})},200),e.state={loaded:!1,movie:null,opened:!0,slidesCount:Math.floor(window.innerWidth/170)},e.movies=[],g().then(function(t){e.movies=t,e.setState({loaded:!0})}),e}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.setSlidesCount)}},{key:"componentDidUpdate",value:function(){var e=window.innerHeight-document.getElementById("weeks-hot").offsetHeight-38;document.getElementById("main").style.height=e+"px"}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.setSlidesCount)}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{id:"weeks-hot",className:"weeksHot-wrapper"},this.state.movie&&i.a.createElement(x,{movie:this.state.movie,close:function(){return e.setState({movie:null})}}),i.a.createElement("div",{className:"week-title"},i.a.createElement("button",{onClick:function(){return e.setState({opened:!e.state.opened})}},i.a.createElement("h2",null,"\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u043e\u0435"),this.state.opened?i.a.createElement(A,null):i.a.createElement(T,null))),this.state.loaded&&this.state.opened&&i.a.createElement(E.c,{naturalSlideWidth:1,naturalSlideHeight:1,totalSlides:this.movies.results.length,visibleSlides:this.state.slidesCount,step:this.state.slidesCount,infinite:!0},i.a.createElement("div",{className:"carousel-buttons"},i.a.createElement(E.a,null,i.a.createElement(V,null)),i.a.createElement(E.b,null,i.a.createElement(z,null))),i.a.createElement(E.e,null,this.movies.results.map(function(t,a){return i.a.createElement(E.d,{key:a,index:a},i.a.createElement(O,{movie:t,openMovie:function(){return e.setState({movie:t})}}))}))))}}]),t}(i.a.Component),$=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(f.a)(t).call(this,e))).state={loadedMovie:null,openFilmPage:!1,noMovie:!1},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"getRandomMovie",value:function(){var e=this,t=function(e,t){return Math.round(e-.5+Math.random()*(t-e+1))},a=this.props.filters?function(e){var t=e.rating,a=e.dates,n=e.genres,r=e.certification,l=["primary_release_date.gte=".concat(a.min,"-01-01&primary_release_date.lte=").concat(a.max,"-12-31")];return l.push("vote_average.gte=".concat(t.min,"&vote_average.lte=").concat(t.max)),n.length&&l.push("with_genres="+n.join(",")),r&&l.push("certification_country=US&certification.gte=R"),l.join("&")}(this.props.filters):"";this.setState({loadedMovie:null,noMovie:!1});var n=document.getElementById("flip").classList;n.add("flipping"),h(a).then(function(r){if(!r.total_results)return e.setState({noMovie:!0});var l=t(1,r.total_pages);h(a,l).then(function(a){var r=t(0,a.results.length-1);e.setState({loadedMovie:a.results[r]},function(){n.remove("flipping")})})})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"random-wrapper"},this.state.openFilmPage&&i.a.createElement(x,{movie:this.state.loadedMovie,close:function(){return e.setState({openFilmPage:!1})}}),i.a.createElement("button",{onClick:function(){return e.getRandomMovie()}},i.a.createElement("div",{className:"flip-card"},i.a.createElement("div",{id:"flip",className:"flip-card-inner"},i.a.createElement("div",{className:"flip-card-front"},i.a.createElement("span",{role:"img","aria-label":"cube"},"\ud83c\udfb2")),i.a.createElement("div",{className:"flip-card-back"},i.a.createElement("span",{role:"img","aria-label":"cube"},"\ud83c\udfb2"))))),i.a.createElement("div",{className:"movie-preview"},this.state.loadedMovie&&i.a.createElement(O,{movie:this.state.loadedMovie,openMovie:function(){return e.setState({openFilmPage:!0})}}),this.state.noMovie&&i.a.createElement("div",{className:"error"},"\u0423\u043f\u0441, \u043a\u0430\u0436\u0435\u0442\u0441\u044f \u0443 \u043d\u0430\u0441 \u043d\u0435\u0442 \u0442\u0430\u043a\u0438\u0445 \u0444\u0438\u043b\u044c\u043c\u043e\u0432...\xa0",i.a.createElement("span",{role:"img","aria-label":"sad"},"\ud83e\udd15"),i.a.createElement("br",null),i.a.createElement("small",null,"\u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0444\u0438\u043b\u044c\u0442\u0440\u044b"),"\xa0",i.a.createElement("span",{role:"img","aria-label":"hug"},"\ud83e\udd17"))))}}]),t}(i.a.Component),ee=a(15),te=a.n(ee);function ae(){return i.a.createElement("div",{id:"particles-js"},i.a.createElement(te.a,{params:{fps_limit:40,particles:{number:{value:100},size:{value:3}}}}))}var ne=a(16),re=a(11),le=a.n(re),ie=(a(42),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(f.a)(t).call(this,e))).toogleGenre=function(e,t){if(e)a.setState({genres:[t].concat(Object(ne.a)(a.state.genres))});else{var n=a.state.genres;n=n.splice(n.indexOf(t),1),a.setState({genres:n})}},a.toogleOpen=function(){a.setState({openFilters:!a.state.openFilters,useFilters:!0})},a.year=(new Date).getYear()+1900,a.state={rating:{min:6.5,max:9},dates:{min:2010,max:a.year},genres:[],certification:!1,openFilters:!1,useFilters:!1},a.props.setFilters(null),a.filters=i.a.createRef(),a.filtersWrapper=i.a.createRef(),a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidUpdate",value:function(e,t){if(t!==this.state&&(this.state.useFilters?this.props.setFilters({rating:this.state.rating,dates:this.state.dates,genres:this.state.genres,certification:this.state.certification}):this.props.setFilters(null)),this.state.openFilters)this.filtersWrapper.current.style.transform="translateY(0)";else{var a=this.filters.current.offsetHeight;this.filtersWrapper.current.style.transform="translateY(".concat(a,"px)"),this.filtersWrapper.current.style.transition="0.3s"}}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{ref:this.filtersWrapper,className:"filters-wrapper"},i.a.createElement("div",{className:"open"},i.a.createElement("button",{onClick:this.toogleOpen},this.state.useFilters?this.state.openFilters?"\u0441\u043a\u0440\u044b\u0442\u044c \u0444\u0438\u043b\u044c\u0442\u0440\u044b":"\u043f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0444\u0438\u043b\u044c\u0442\u0440\u044b":"\u043f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u044c \u0444\u0438\u043b\u044c\u0442\u0440\u044b"),this.state.useFilters&&i.a.createElement("button",{onClick:function(){return e.setState({useFilters:!1,openFilters:!1})}},"\u0441\u0431\u0440\u043e\u0441\u0438\u0442\u044c \u0444\u0438\u043b\u044c\u0442\u0440\u044b")),i.a.createElement("div",{ref:this.filters,className:"filters"},i.a.createElement("div",{className:"left"},i.a.createElement("div",{className:"rating"},i.a.createElement(le.a,{maxValue:9,minValue:0,step:.5,value:this.state.rating,onChange:function(t){return e.setState({rating:t})},allowSameValues:!0})),i.a.createElement("div",{className:"dates"},i.a.createElement(le.a,{maxValue:this.year,minValue:1950,value:this.state.dates,onChange:function(t){return e.setState({dates:t})},allowSameValues:!0})),i.a.createElement("label",{className:"certification"},i.a.createElement("input",{className:"cb cb1",type:"checkbox",name:"social",onClick:function(t){return e.setState({certification:t.target.checked})}}),i.a.createElement("i",null),i.a.createElement("span",null,"\u0412\u043e\u0437\u0440\u0430\u0441\u0442\u043d\u043e\u0439 \u0440\u0435\u0439\u0442\u0438\u043d\u0433 18+"))),i.a.createElement("div",{className:"right"},i.a.createElement("div",{className:"genres-wrapper"},i.a.createElement("ul",{className:"genres"},v.map(function(t,a){return i.a.createElement("li",{key:a},i.a.createElement("input",{type:"checkbox",id:t.id,value:t.id,onClick:function(t){e.toogleGenre(t.target.checked,parseInt(t.target.value))}}),i.a.createElement("label",{htmlFor:t.id},t.name))}))))))}}]),t}(l.Component)),se=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(m.a)(this,Object(f.a)(t).call(this))).state={loadedMovie:null,filters:null},e}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"App"},i.a.createElement(ae,null),i.a.createElement(Z,{id:"weeksHot"}),i.a.createElement("div",{id:"main",className:"main"},i.a.createElement($,{filters:this.state.filters,openMovie:function(t){return e.setState({openFilmPage:t})}}),i.a.createElement(ie,{setFilters:function(t){return e.setState({filters:t})}})))}}]),t}(i.a.Component);a(43);o.a.render(i.a.createElement(se,null),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.79e4a759.chunk.js.map