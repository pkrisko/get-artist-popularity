(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a.p+"static/media/green-logo.11dc437a.png"},function(e,t,a){e.exports=a.p+"static/media/lhm-document-logo.05c02bd4.png"},function(e,t,a){e.exports=a(16)},,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(5),l=a.n(c),o=(a(13),a(1)),s=a.n(o),i=a(2),m=a(3),u=function(){var e=Object(i.a)(s.a.mark((function e(t){var a,n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a="".concat("https://vksp58ed22.execute-api.us-east-1.amazonaws.com/prod/artist","?artist_id=").concat(t),e.next=4,fetch(a,{method:"GET",headers:{"X-Api-Key":"w0z9e0oNM22IvFXxYR8ez2cZohSAZ4389HgqxM5q"}});case 4:return n=e.sent,e.next=7,n.json();case 7:return r=e.sent,e.abrupt("return",r);case 11:e.prev=11,e.t0=e.catch(0),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}(),p=function(e){var t=e.popularity,a=e.imgSrc,n=e.genres,c=e.name,l=e.followers;return r.a.createElement("div",{className:"card"},r.a.createElement("img",{src:a,alt:"profile",className:"profile"}),r.a.createElement("h4",null,c),r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"card-item"},r.a.createElement("span",null,"Popularity: "),r.a.createElement("span",null,t)),r.a.createElement("div",{className:"card-item"},r.a.createElement("span",null,"Followers: "),r.a.createElement("span",null,l)),r.a.createElement("div",{className:"card-item"},r.a.createElement("span",null,"Genres:")),r.a.createElement("div",{className:"card-item"},r.a.createElement("ul",null,n.map((function(e){return r.a.createElement("li",{key:e},e)}))))))},d=function(e){var t;if(e&&"string"===typeof e&&3===(t=e.split(":")).length)return t[2]},f=function(){var e=Object(n.useState)("5TBdr1d9ZJ5YMhsxiF1Jo7"),t=Object(m.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(null),o=Object(m.a)(l,2),f=o[0],h=o[1],E=function(){var e=Object(i.a)(s.a.mark((function e(t){var n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=a.includes(":")?d(a):a,e.next=4,u(n);case 4:(r=e.sent)&&h(r);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:E},r.a.createElement("label",{htmlFor:"artistId"},r.a.createElement("p",null,"Enter Artist Id or URI"),r.a.createElement("input",{type:"text",id:"artist-id",name:"artistId",value:a,onChange:function(e){return c(e.target.value)}})),r.a.createElement("input",{type:"submit",id:"submit",value:"Go"})),f&&r.a.createElement(p,{popularity:f.popularity,imgSrc:f.images[0].url,genres:f.genres,name:f.name,followers:f.followers.total}))},h=a(6),E=a.n(h),g=a(7),v=a.n(g),w=(a(15),[{href:"https://www.lostharbormusic.com/",text:"Home"},{href:"https://www.lostharbormusic.com/fieldnotes",text:"Field Notes"},{href:"https://pkrisko.github.io/get-artist-popularity/",text:"Utilities"}]),b=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("div",{id:"logo-wrapper"},r.a.createElement("a",{href:"https://www.lostharbormusic.com/"},r.a.createElement("img",{src:v.a,alt:"Lost Harbor Music Logo",id:"lhm-logo"}))),w.map((function(e){return r.a.createElement("a",{href:e.href,key:e.text,className:"nav-link"},e.text)}))),r.a.createElement("div",{className:"main"},r.a.createElement(f,null),r.a.createElement("img",{src:E.a,alt:"Spotify Logo",id:"spotify-logo"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.49bd7f22.chunk.js.map