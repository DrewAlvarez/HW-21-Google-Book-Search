(this.webpackJsonpmern=this.webpackJsonpmern||[]).push([[0],{26:function(e,t,a){e.exports=a(55)},49:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(24),c=a.n(r),i=a(11),o=a(1),m=a(16),u=a(10);function s(e){return l.a.createElement("div",{className:"card mb-3"},l.a.createElement("div",{className:"row g-0"},l.a.createElement("div",{className:"col-1"},l.a.createElement("img",{src:e.imgSrc,alt:"..."})),l.a.createElement("div",{className:"col-10",style:{height:"12.5rem",overflow:"auto"}},l.a.createElement("div",{className:"card-body"},l.a.createElement("h5",{className:"card-title"},e.title),l.a.createElement("p",{className:"card-text"},e.subTitle),l.a.createElement("h6",{className:"card-text"},"By: ",e.author),l.a.createElement("p",{className:"card-text"},e.summary))),l.a.createElement("div",{className:"col-1"},l.a.createElement("button",{type:"button",className:"btn btn-dark",onClick:e.handleClick,style:{marginTop:".5rem"}},e.saveDelete," Book"),l.a.createElement("a",{href:e.view,target:"_blank"},l.a.createElement("button",{type:"button",className:"btn btn-dark",style:{marginTop:".5rem"}},"View Book")))))}var d=a(8),v=a.n(d),f=function(e){return v.a.get("https://www.googleapis.com/books/v1/volumes?q="+e)},E=function(){return v.a.get("/api/books")},h=function(e){return v.a.delete("/api/books/"+e)},b=function(e){return v.a.post("/api/books",e)};function p(e){var t=e.fluid,a=e.children;return l.a.createElement("div",{className:"container".concat(t?"-fluid":""),style:{marginTop:"2rem"}},a)}function g(e){var t=e.fluid,a=e.children;return l.a.createElement("div",{className:"row".concat(t?"-fluid":"")},a)}function k(e){var t=e.size,a=e.children;return l.a.createElement("div",{className:t.split(" ").map((function(e){return"col-"+e})).join(" ")},a)}a(49);function N(e){var t=e.children;return l.a.createElement("div",{className:"list"},l.a.createElement("ul",{className:"list-group"},t))}function y(e){return l.a.createElement("div",{className:"form-group",style:{display:"block",padding:"1rem 25% 0 25%"}},l.a.createElement("div",null,l.a.createElement("input",Object.assign({className:"form-control"},e))))}function w(e){return l.a.createElement("button",Object.assign({className:"bg-dark"},e,{style:{float:"right",display:"inline-block",marginBottom:"1rem",marginRight:"25%"},className:"btn btn-seconday"}),e.children)}var j=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)({}),i=Object(u.a)(c,2),o=i[0],d=i[1];return l.a.createElement(p,{fluid:!0},l.a.createElement("div",{className:"bg-dark text-white"},l.a.createElement("div",{style:{textAlign:"center",paddingTop:"1rem"}},l.a.createElement("h3",null,"Enter the Title You Wish to Search"),l.a.createElement("p",null,"Search Brings Up 10 Results")),l.a.createElement("form",{style:{overflow:"hidden",marginBottom:"2rem"}},l.a.createElement(y,{onChange:function(e){var t=e.target,a=t.name,n=t.value;d(Object(m.a)(Object(m.a)({},o),{},{[a]:n}))},name:"title",placeholder:"Title (required)"}),l.a.createElement(w,{disabled:!o.title,onClick:function(e){e.preventDefault(),f(o.title).then((function(e){return r(e.data.items)}))}},"Search Books"))),l.a.createElement("div",{style:{display:"inline-block"}},a.length?l.a.createElement(N,null,a.map((function(e){return l.a.createElement(s,{imgSrc:e.volumeInfo.imageLinks.smallThumbnail,title:e.volumeInfo.title,subTitle:e.volumeInfo.subtitle,author:e.volumeInfo.authors,summary:e.volumeInfo.description,saveDelete:"Save",handleClick:function(t){return function(e,t){e.preventDefault(),b({title:t.volumeInfo.title,author:t.volumeInfo.authors,imgLink:t.volumeInfo.imageLinks.smallThumbnail,synopsis:t.volumeInfo.description,link:t.volumeInfo.previewLink})}(t,e)},view:e.volumeInfo.previewLink})}))):l.a.createElement("h3",null,"No Results to Display")))};var I=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],r=t[1];function c(){E().then((function(e){return r(e.data)})).catch((function(e){return console.log(e)}))}return Object(n.useEffect)((function(){c()}),[]),l.a.createElement(p,{fluid:!0},a.length?l.a.createElement(N,null,a.map((function(e){return l.a.createElement(s,{imgSrc:e.imgLink,title:e.title,author:e.author,summary:e.synopsis,handleClick:function(){return t=e._id,void h(t).then((function(e){return c()})).catch((function(e){return console.log(e)}));var t},saveDelete:"Delete",view:e.link})}))):l.a.createElement("h3",null,"No Results to Display"))};var S=function(e){var t=e.children;return l.a.createElement("div",{style:{height:300,clear:"both",paddingTop:120,textAlign:"center"},className:"jumbotron"},t)};var x=function(){return l.a.createElement(p,{fluid:!0},l.a.createElement(g,null,l.a.createElement(k,{size:"md-12"},l.a.createElement(S,null,l.a.createElement("h1",null,"404 Page Not Found"),l.a.createElement("h1",null,l.a.createElement("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji"},"\ud83d\ude44"))))))};var O=function(){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-secondary"},l.a.createElement("a",{className:"navbar-brand",href:"/"},"Google Book Search"),l.a.createElement("a",{className:"nav-link text-dark",href:"/saved"},"Saved Books"))};var T=function(){return l.a.createElement(i.a,null,l.a.createElement("div",null,l.a.createElement(O,null),l.a.createElement(o.c,null,l.a.createElement(o.a,{exact:!0,path:["/","/search"]},l.a.createElement(j,null)),l.a.createElement(o.a,{exact:!0,path:"/saved"},l.a.createElement(I,null)),l.a.createElement(o.a,null,l.a.createElement(x,null)))))};c.a.render(l.a.createElement(T,null),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.fffbbf9d.chunk.js.map