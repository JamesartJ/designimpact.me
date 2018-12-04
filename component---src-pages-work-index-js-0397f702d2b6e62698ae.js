(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{136:function(e,t,a){"use strict";a.r(t);var n=a(6),r=a.n(n),o=a(67),i=a(0),c=a.n(i),s=a(141),l=(a(163),a(148),a(143)),m=a(142),d=a(157),u=a(155),p=a(145),h=a(158),b=a(308),f=a.n(b),g=a(309),E=a.n(g),w=a(310),y=a.n(w),v=a(311),x=a.n(v),I=a(312),k=a.n(I),N=a(313),j=a.n(N),A=a(314),C=a.n(A),z=a(315),D=a.n(z),L=Object(o.css)({name:"ckshzy",styles:"a{color:#000;text-decoration:none;border-bottom:2px solid #fff;&:hover{border-color:#000;}}"}),S=Object(o.css)(),M=Object(o.css)({name:"3s2cu5",styles:"margin-bottom:6rem;"}),G=Object(o.css)("color:#4a4a4a;font-size:",m.b.rhythm(.6),";font-size:",m.b.scale(.6),";"),O=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return c.a.createElement(d.a,{location:this.props.location},c.a.createElement(p.a,null,c.a.createElement("h1",null,"What I make")),c.a.createElement("div",{className:M},c.a.createElement(l.Row,null,c.a.createElement(l.Col,{sm:12},c.a.createElement(s.Link,{to:"work/karma"},c.a.createElement(u.a,{imgSrc:f.a,imgSrc2x:k.a})))),c.a.createElement(l.Row,null,c.a.createElement(l.Col,{sm:4},c.a.createElement("h1",{className:L},c.a.createElement(s.Link,{to:"work/karma"},"Karma")),c.a.createElement("div",{className:G},"Fall 2015")),c.a.createElement(l.Col,{sm:7,offset:{sm:1}},c.a.createElement("p",{className:S},"In the Fall of 2015, a Lewis & Clark student was the victim of a hate crime. In part of a campus wide reaction, I instigated and coordinated a buddy system, to help students feel safe traveling to, from and across campus. To make the buddy system more ubiquitous and lasting, I worked with our entrepreneurship department to design this app.")))),c.a.createElement("div",{className:M},c.a.createElement(l.Row,null,c.a.createElement(l.Col,{sm:12},c.a.createElement(s.Link,{to:"work/stockt"},c.a.createElement(u.a,{imgSrc:E.a,imgSrc2x:j.a})))),c.a.createElement(l.Row,null,c.a.createElement(l.Col,{sm:4},c.a.createElement("h1",{className:L},c.a.createElement(s.Link,{to:"work/stockt"},"Stockt")),c.a.createElement("div",{className:G},"Fall 2017")),c.a.createElement(l.Col,{sm:7,offset:{sm:1}},c.a.createElement("p",{className:S},"Stockt, formerly known as Pindi, is a mobile-first marketplace for restaurants, allowing restaurant owners to source from multiple vendors in one unified storefront. As the projects product designer, I performed user research and designed the information architecture, and user experience, and developed the UI on the front-end.")))),c.a.createElement("div",{className:M},c.a.createElement(l.Row,null,c.a.createElement(l.Col,{sm:12},c.a.createElement(s.Link,{to:"work/cortana"},c.a.createElement(u.a,{imgSrc:y.a,imgSrc2x:C.a})))),c.a.createElement(l.Row,null,c.a.createElement(l.Col,{sm:4},c.a.createElement("h1",{className:L},c.a.createElement(s.Link,{to:"work/cortana"},"Cortana")),c.a.createElement("div",{className:G},"March 2018")),c.a.createElement(l.Col,{sm:7,offset:{sm:1}},c.a.createElement("p",{className:S},"An in-store visual and voice experience where Microsoft’s Cortana showcases its many uses. Using research from the client, we mapped multiple user journeys into a unified information architecture. Then from that IA designed interactions on the display to coincide with a voice UI developed in tandem with content strategy.")))),c.a.createElement("div",{className:M},c.a.createElement(l.Row,null,c.a.createElement(l.Col,{sm:12},c.a.createElement(s.Link,{to:"work/fandor"},c.a.createElement(u.a,{imgSrc:x.a,imgSrc2x:D.a})))),c.a.createElement(l.Row,null,c.a.createElement(l.Col,{sm:4},c.a.createElement("h1",{className:L},c.a.createElement(s.Link,{to:"work/fandor"},"Fandor")),c.a.createElement("div",{className:G},"Sep 2018")),c.a.createElement(l.Col,{sm:7,offset:{sm:1}},c.a.createElement("p",{className:S},"As part of a cross platform redesign of Fandor’s applications, I worked as a supporting UX designer for their web experience and as the lead designer on their TV application. Using personas and competitive analysis, I designed both low and high fidelity wireframes which were handed off to visual design before being delivered to the client.")))),c.a.createElement(h.a,null,c.a.createElement("h1",null,c.a.createElement(s.Link,{to:"about"},"Who I am"))))},t}(c.a.Component);t.default=O},141:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return h}),a.d(t,"StaticQueryContext",function(){return u}),a.d(t,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),o=a(4),i=a.n(o),c=a(144),s=a.n(c);a.d(t,"Link",function(){return s.a}),a.d(t,"withPrefix",function(){return c.withPrefix}),a.d(t,"navigate",function(){return c.navigate}),a.d(t,"push",function(){return c.push}),a.d(t,"replace",function(){return c.replace}),a.d(t,"navigateTo",function(){return c.navigateTo});var l=a(147),m=a.n(l);a.d(t,"PageRenderer",function(){return m.a});var d=a(28);a.d(t,"parsePath",function(){return d.a});var u=r.a.createContext({}),p=function(e){return r.a.createElement(u.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},142:function(e,t,a){"use strict";var n={transparentDark:"rgba(0, 0, 0, 0.75)",black:"rgb(0, 0, 0)",white:"rgb(255,255,255)",grayLight:"#EDEDED"},r=a(146);a.d(t,"a",function(){return n}),a.d(t,"b",function(){return r.a})},145:function(e,t,a){"use strict";var n=a(6),r=a.n(n),o=a(67),i=a(0),c=a.n(i),s=(a(141),a(142)),l=(a(143),Object(o.css)("background:",s.a.white,";margin-bottom:5rem;position:relative;z-index:1;padding:0;h1{color:",s.a.black,";",s.b.scale(2.5),";",s.b.rhythm(5),";}")),m=Object(o.css)("border-bottom:1px solid ",s.a.grayLight,";padding:6.6rem 0 2rem;"),d=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e,t=this.props,a=(t.location,t.children),n=Object(o.cx)(((e={})[l]=!0,e));return c.a.createElement("div",{className:n},c.a.createElement("div",null,c.a.createElement("div",{sm:12,className:m},a)))},t}(c.a.Component);t.a=d},146:function(e,t,a){"use strict";var n=a(164),r=new(a.n(n).a)({baseFontSize:"16px",baseLineHeight:1.45,headerFontFamily:["Helvetica Neue","Segoe UI","Helvetica","Arial","sans-serif"],bodyFontFamily:["Helvetica Neue","serif"]});t.a=r;r.rhythm,r.scale},147:function(e,t,a){var n;e.exports=(n=a(151))&&n.default||n},149:function(e,t,a){"use strict";var n=a(6),r=a.n(n),o=a(67),i=a(0),c=a.n(i),s=(a(141),a(142)),l=a(143),m=Object(o.css)("background:rgba(255,255,255,0.9);position:fixed;width:100%;z-index:3;*{margin-bottom:0;}a{text-decoration:none;color:",s.a.black,";font-size:",s.b.scale(2),";}"),d=Object(o.css)("position:fixed;width:100%;padding:50px;z-index:3;*{margin-bottom:0;}a{text-decoration:none;color:",s.a.white,";font-size:",s.b.scale(2),";}"),u=Object(o.css)(),p=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e,t=this.props,a=(t.location,t.children),n=t.inverse,r=Object(o.cx)(((e={})[m]=!n,e[d]=n,e));return c.a.createElement("div",{className:r},c.a.createElement(l.Container,null,c.a.createElement(l.Row,{className:u},c.a.createElement(l.Col,{sm:12},a))))},t}(c.a.Component);t.a=p},151:function(e,t,a){"use strict";a.r(t);a(29);var n=a(0),r=a.n(n),o=a(4),i=a.n(o),c=a(46),s=a(2),l=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};l.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=l},153:function(e,t,a){"use strict";var n=a(6),r=a.n(n),o=a(67),i=a(0),c=a.n(i),s=(a(141),a(142)),l=a(143),m=Object(o.css)({name:"3ef6uu",styles:"margin:0 auto;padding-top:78px;"}),d=Object(o.css)("position:relative;z-index:1;&::before{content:'';width:1px;height:100%;border-right:1px solid ",s.a.grayLight,";position:absolute;width:calc(33.3333% - 30px);left:0;bottom:0;z-index:0;}"),u=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e,t=this.props.children,a=Object(o.cx)(((e={})[m]=!0,e));return c.a.createElement("div",{className:a},c.a.createElement(l.Container,{className:d},t))},t}(c.a.Component);t.a=u},154:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUxLjIgKDU3NTE5KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5BcnRib2FyZDwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJBcnRib2FyZCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBvbHlnb24gaWQ9IlNoYXBlIiBmaWxsPSIjMDAwMDAwIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEwLjAwMDAwMCwgMTAuNTAwMDAwKSByb3RhdGUoOTAuMDAwMDAwKSB0cmFuc2xhdGUoLTEwLjAwMDAwMCwgLTEwLjUwMDAwMCkgIiBwb2ludHM9IjkuOTk5OTk4MDMgMjAuNSAxNS41IDEzLjIyNzI3NDggMTAuNzg1NzEyIDEzLjIyNzI3NDggMTAuNzg1NzEyIDAuNSA5LjIxNDI4NDA0IDAuNSA5LjIxNDI4NDA0IDEzLjIyNzI3NDggNC41IDEzLjIyNzI3NDgiPjwvcG9seWdvbj4KICAgIDwvZz4KPC9zdmc+"},155:function(e,t,a){"use strict";var n=a(6),r=a.n(n),o=a(67),i=a(0),c=a.n(i),s=(a(141),a(142),a(143),a(156)),l=a.n(s),m=(a(145),Object(o.css)({name:"1851zso",styles:"height:0;overflow:hidden;padding-top:calc(591.44 / 1127.34 * 100%);background:white;position:relative;"})),d=Object(o.css)({name:"122y91a",styles:"position:absolute;top:0;left:0;width:100%;height:100%;"}),u=Object(o.css)({name:"1onw677",styles:"margin:0;box-shadow:0 14px 40px rgba(0,0,0,0.05),0 10px 20px rgba(0,0,0,0.02);border-radius:4px;"}),p=Object(o.css)({name:"1nrl065",styles:"margin-top:5px;background:rgba(255,255,255,0.25);"}),h=Object(o.css)({name:"14gvndo",styles:"height:0;overflow:hidden;padding-top:calc(1112 / 634 * 100%);background:white;position:relative;"}),b=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e,t=this.props,a=t.caption,n=t.imgSrc,r=t.imgSrc2x,i=t.imgAlt,s=t.videoSrc,b=t.videoOrientation,f=Object(o.cx)(((e={})[m]=!0,e[h]="portrait"===b,e));return c.a.createElement("figure",null,!s&&c.a.createElement("img",{className:u,src:n,srcset:n+" 1x, "+r+" 2x",alt:i}),s&&c.a.createElement("div",{className:f},c.a.createElement("div",{className:d},c.a.createElement(l.a,{width:"100%",height:"100%",url:s}))),a&&c.a.createElement("figcaption",{className:p},a))},t}(c.a.Component);t.a=b},157:function(e,t,a){"use strict";a(68);var n=a(6),r=a.n(n),o=a(67),i=a(0),c=a.n(i),s=a(141),l=a(148),m=a.n(l),d=a(153),u=a(149),p=a(154),h=a.n(p),b=a(142),f=Object(o.css)("font-weight:normal;flex-align:center;display:inline-flex;font-size:",b.b.rhythm(.8),";"),g=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e,t=this.props,a=t.location,n=t.children,r="work"===a.pathname.split("/")[1]&&a.pathname.split("/").length>=3;return e="/"===a.pathname?c.a.createElement(u.a,null,c.a.createElement("h1",null,c.a.createElement(s.Link,{to:"/"},"James Josephson"))):r?c.a.createElement(u.a,null,c.a.createElement("h3",null,c.a.createElement(s.Link,{className:f,to:"work"},c.a.createElement("img",{src:h.a,style:{marginRight:"15px"}})," Back"))):c.a.createElement(u.a,null,c.a.createElement("h3",null,c.a.createElement(s.Link,{to:"/"},"James Josephson"))),c.a.createElement("div",null,c.a.createElement(m.a,{htmlAttributes:{lang:"en"},meta:[{name:"description",content:"siteDescription"}],title:"James Josephson"}),e," ",c.a.createElement(d.a,null,n))},t}(c.a.Component);t.a=g},158:function(e,t,a){"use strict";var n=a(6),r=a.n(n),o=a(67),i=a(0),c=a.n(i),s=(a(141),a(142)),l=Object(o.css)("background:",s.a.white,";margin-top:5rem;z-index:1;position:relative;a{color:",s.a.black,";text-decoration:none;border-bottom:7px solid ",s.a.white,";&:hover{border-bottom:7px solid ",s.a.black,";}}h3{font:",s.b.rhythm(0),";}h1{line-height:",s.b.scale(2.5),";font-size:",s.b.rhythm(5),";color:",s.a.black,";}ul{line-height:",s.b.scale(2.5),";font-weight:bold;li{list-style-type:none;font-size:",s.b.rhythm(3),";line-height:",s.b.scale(2.8),";a{border-color:",s.a.white,";&:hover{border-color:",s.a.black,";}}}}"),m=Object(o.css)("border-top:1px solid ",s.a.grayLight,";padding:4rem 0;"),d=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e,t=this.props,a=(t.location,t.children),n=Object(o.cx)(((e={})[l]=!0,e));return c.a.createElement("div",{className:n},c.a.createElement("div",{className:m},a))},t}(c.a.Component);t.a=d},308:function(e,t,a){e.exports=a.p+"static/karma-index-5930534ca413e1e723fbba41561733a8.png"},309:function(e,t,a){e.exports=a.p+"static/stockt-index-21f737e6714cec676a7420b5cd29ce4c.png"},310:function(e,t,a){e.exports=a.p+"static/cortana-index-57a4628bd62ebf42d2993064f829e7d0.png"},311:function(e,t,a){e.exports=a.p+"static/fandor-index-1b54db720cf722fa2672adce8ba1badf.png"},312:function(e,t,a){e.exports=a.p+"static/karma-index@2x-dacf17db0a6b2ff7d4f8bb9214ded4d8.png"},313:function(e,t,a){e.exports=a.p+"static/stockt-index@2x-ddb27630a4725d3eed6073cef0a04cec.png"},314:function(e,t,a){e.exports=a.p+"static/cortana-index@2x-a4c28ae841aa7a46043993faac78e18e.png"},315:function(e,t,a){e.exports=a.p+"static/fandor-index@2x-e9c7ce9d0414020306161b709a3473d1.png"}}]);
//# sourceMappingURL=component---src-pages-work-index-js-0397f702d2b6e62698ae.js.map