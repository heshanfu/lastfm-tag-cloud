(function(t){function e(e){for(var a,o,i=e[0],u=e[1],l=e[2],d=0,h=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&h.push(n[o][0]),n[o]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(t[a]=u[a]);c&&c(e);while(h.length)h.shift()();return s.push.apply(s,l||[]),r()}function r(){for(var t,e=0;e<s.length;e++){for(var r=s[e],a=!0,i=1;i<r.length;i++){var u=r[i];0!==n[u]&&(a=!1)}a&&(s.splice(e--,1),t=o(o.s=r[0]))}return t}var a={},n={app:0},s=[];function o(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=a,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(r,a,function(e){return t[e]}.bind(null,a));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/lastfm-tag-cloud/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var c=u;s.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"007d":function(t,e,r){},"04f5":function(t,e,r){"use strict";var a=r("07d8"),n=r.n(a);n.a},"07d8":function(t,e,r){},"11c9":function(t,e,r){"use strict";var a=r("c564"),n=r.n(a);n.a},2026:function(t,e,r){"use strict";var a=r("7982"),n=r.n(a);n.a},"34a5":function(t,e,r){},"3f75":function(t,e,r){"use strict";var a=r("a73f"),n=r.n(a);n.a},"407a":function(t,e,r){"use strict";var a=r("8383"),n=r.n(a);n.a},"4bec":function(t,e,r){"use strict";var a=r("c028"),n=r.n(a);n.a},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app",theme:t.theme}},[r("header",[r("h1",{attrs:{id:"page-title"}},[t._v("tag cloud generator")]),r("button",{attrs:{id:"theme-button"},on:{click:t.toggleTheme}},[t._v(" "+t._s("dark"==t.theme?"Light Mode":"Dark Mode")+" ")])]),r("control-panel",{attrs:{id:"control-panel",username:t.username,period:t.period,max_artists:t.max_artists,state:t.generator.state},on:{"update:username":function(e){t.username=e},"update:period":function(e){t.period.selected=e},"update:max_artists":function(e){t.max_artists.selected=e},generate:t.generate}}),r("results",{ref:"results",attrs:{state:t.generator.state,result:t.result,error:t.error}}),r("Footer",{attrs:{id:"footer"}})],1)},s=[],o=(r("a4d3"),r("e01a"),r("d28b"),r("45fc"),r("6b93"),r("d3b7"),r("3ca3"),r("ddb0"),r("96cf"),r("1da1")),i=function(){var t=this,e=this,r=e.$createElement,a=e._self._c||r;return a("div",{staticClass:"section-container"},[a("div",{staticClass:"option"},[a("span",[e._v("Last.fm Username:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],ref:"username-input",domProps:{value:e.username},on:{keyup:function(e){return"Enter"==e.key?t.$emit("generate"):t.$emit("update:username",e.target.value)},input:function(t){t.target.composing||(e.username=t.target.value)}}})]),a("control-panel-option",{staticClass:"option",attrs:{name:"Period",options:e.period.options,selected:e.period.selected},on:{update:function(t){return e.$emit("update:period",t)}}}),a("control-panel-option",{staticClass:"option",attrs:{name:"Max Artists",options:e.max_artists.options,selected:e.max_artists.selected},on:{update:function(t){return e.$emit("update:max_artists",t)}}}),a("div",{staticClass:"option",attrs:{id:"generate-button-container"}},[a("button",{attrs:{id:"generate-button",disabled:void 0!=e.state},on:{click:function(t){return e.$emit("generate")}}},[e._v(" Load Data ")])])],1)},u=[],l=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("span",[t._v(t._s(t.name)+":")]),r("select",{directives:[{name:"model",rawName:"v-model",value:t.selected,expression:"selected"}],on:{change:[function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.selected=e.target.multiple?r:r[0]},function(e){return t.$emit("update",e.target.value)}]}},t._l(t.options,(function(e){return r("option",{key:e.value,domProps:{value:e.value}},[t._v(" "+t._s(e.text)+" ")])})),0)])},c=[],d={props:["name","options","selected"]},h=d,p=r("2877"),f=Object(p["a"])(h,l,c,!1,null,null,null),g=f.exports,v={components:{ControlPanelOption:g},props:["username","period","max_artists","state"]},m=v,_=(r("3f75"),Object(p["a"])(m,i,u,!1,null,"46e4bced",null)),b=_.exports,y=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"section-container"},[void 0!=t.result&&void 0==t.state&&t.result.artists.length>0?r("h2",[r("a",{attrs:{href:"https://www.last.fm/user/"+t.result.username}},[t._v(" "+t._s(t.result.username))]),t._v(t._s("s"==t.result.username[t.result.username.length-1].toLowerCase()?"'":"'s")+" tag cloud based upon their top "+t._s(t.result.artists.length)+" artists "+t._s({"7day":"over the last 7 days","1month":"over the last month","3month":"over the last 3 months","6month":"over the last 6 months","12month":"over the last year",overall:"overall"}[t.result.period])+": ")]):void 0!=t.result&&void 0==t.state&&void 0==t.error&&0==t.result.artists.length?r("h2",[t._v(" "+t._s(t.result.username)+" hasn't listened to anything "+t._s({"7day":"in the past week","1month":"in the past month","3month":"in the past 3 months","6month":"in the past 6 months","12month":"in the past year",overall:"at all"}[t.result.period])+"! ")]):void 0!=t.result&&void 0==t.state&&void 0!=t.error?r("h2",[t._v(" An error occured :'( "),r("br"),r("br"),t._v(" "+t._s(t.error)+" ")]):void 0!=t.state?r("h2",[r("spinner"),t._v(" "+t._s(t.state)+" ")],1):r("h2",[t._v(' Click "Load Data"! ')]),r("div",{directives:[{name:"show",rawName:"v-show",value:void 0!=t.cloudState,expression:"cloudState != undefined"}],attrs:{id:"cloud-container"}},[r("div",{attrs:{id:"canvas-container"}},[r("canvas",{ref:"tag-cloud-canvas",attrs:{id:"tag-cloud-canvas",width:"1920",height:"1200"}})]),r("div",{attrs:{id:"cloud-buttons"}},[r("button",{staticClass:"cloud-button",attrs:{id:"share-link"},on:{click:t.copyShareLink}},[r("span",{attrs:{id:"copy-share-link-title"}},[t._v("Copy Link:")]),r("input",{ref:"share-link",attrs:{readonly:"readonly"},domProps:{value:t.share_link}})]),r("button",{staticClass:"cloud-button",attrs:{disabled:"generated"!=t.cloudState},on:{click:t.reshuffleTagCloud}},[t._v("Reshuffle")]),r("a",{ref:"download-link",staticClass:"cloud-button",attrs:{download:"tag-cloud.png"}},[r("button",{attrs:{disabled:"generated"!=t.cloudState},on:{click:t.downloadTagCloud}},[t._v(" Download Image ")])])])]),void 0!=t.result&&t.result.artists.length>0?r("artists-list",{attrs:{id:"artists-list",artists:t.result.artists,listens:t.result.listens}}):t._e(),void 0!=t.result&&t.result.artists.length>0?r("tags-list",{attrs:{id:"tags-list",tags:t.result.tags,taggings:t.result.taggings,tag_meta:t.result.tag_meta}}):t._e()],1)},w=[],x=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("collapse-button",{attrs:{collapsed:t.collapsed},on:{collapse:t.collapse}}),r("h2",[t._v("Artists:")]),t.collapsed?t._e():r("ol",{attrs:{id:"artist-list"}},t._l(t.artists,(function(e){return r("li",{key:e,attrs:{artist:e}},[r("span",{staticClass:"artist"},[r("a",{attrs:{href:"https://www.last.fm/music/"+e.replace(/ /g,"+")}},[t._v(" "+t._s(e)+" ")])]),t._v(" ("+t._s(t.listens[e])+" "),t.listens[e]>1?r("span",[t._v("listens")]):r("span",[t._v("listen")]),t._v(") ")])})),0)],1)},k=[],C=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("button",{staticClass:"collapse-button",on:{click:function(e){return t.$emit("collapse")}}},[t._v(t._s(t.collapsed?"+":"-"))])},$=[],O={props:["collapsed"]},j=O,S=(r("d233"),Object(p["a"])(j,C,$,!1,null,"b28f6c60",null)),T=S.exports,R={components:{CollapseButton:T},props:["artists","listens"],data:function(){return{collapsed:!0}},methods:{collapse:function(){this.collapsed=!this.collapsed}}},P=R,L=(r("04f5"),Object(p["a"])(P,x,k,!1,null,"00fcfc24",null)),M=L.exports,E=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("collapse-button",{attrs:{collapsed:t.collapsed},on:{collapse:t.collapse}}),r("h2",[t._v("Tags:")]),t.collapsed?t._e():r("ol",{attrs:{id:"tag-list"}},t._l(t.tags,(function(e){return r("li",{key:e,attrs:{tag:e}},[r("span",{staticClass:"tag"},[r("a",{attrs:{href:t.tag_meta[e].url}},[t._v(" "+t._s(e))])]),t._v(": "),r("taggings-list",{staticClass:"artist-list",attrs:{taggings:t.taggings[e]}})],1)})),0)],1)},F=[],q=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ol",[t._l(t.collapsed?t.taggings.slice(0,3):t.taggings,(function(e){return r("li",{key:e.artist},[t._v(t._s(e.artist))])})),t._v(t._s(t.collapsed&&t.taggings.length>3?", ":". ")+" "),t.taggings.length>3?r("li",{attrs:{id:"collapser"},on:{click:t.toggle}},[r("a",[t._v(t._s(t.collapsed?"show more...":"show less"))])]):t._e()],2)},A=[],D={props:["taggings"],data:function(){return{collapsed:!0}},methods:{toggle:function(){this.collapsed=!this.collapsed}}},W=D,G=(r("2026"),Object(p["a"])(W,q,A,!1,null,"6e980b19",null)),N=G.exports,B={components:{CollapseButton:T,TaggingsList:N},props:["tags","taggings","tag_meta"],data:function(){return{collapsed:!0}},methods:{collapse:function(){this.collapsed=!this.collapsed}}},J=B,U=(r("e51c"),Object(p["a"])(J,E,F,!1,null,"61cfdab4",null)),H=U.exports,I=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div")},Y=[],z=(r("4bec"),{}),K=Object(p["a"])(z,I,Y,!1,null,"1ded3966",null),Q=K.exports,V=r("175f"),X=r.n(V),Z={components:{ArtistsList:M,TagsList:H,Spinner:Q},props:["state","result","error"],data:function(){return{cloudState:void 0,words:void 0}},methods:{clear:function(){this.cloudState=void 0},createTagCloud:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(e){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.words=e,this.cloudState="generating",this.$refs["tag-cloud-canvas"].addEventListener("wordcloudstop",function(){this.cloudState="generated"}.bind(this)),r=getComputedStyle(this.$refs["tag-cloud-canvas"]),X()(this.$refs["tag-cloud-canvas"],{list:e,fontFamily:"Courier",shrinkToFit:!0,color:r["color"],backgroundColor:r["background-color"]});case 5:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),reshuffleTagCloud:function(){this.cloudState="generating";var t=getComputedStyle(this.$refs["tag-cloud-canvas"]);X()(this.$refs["tag-cloud-canvas"],{list:this.words,fontFamily:"Courier",shrinkToFit:!0,color:t["color"],backgroundColor:t["background-color"],shuffle:!0})},downloadTagCloud:function(){this.$refs["download-link"].href=this.$refs["tag-cloud-canvas"].toDataURL()},copyShareLink:function(){this.$refs["share-link"].select(),this.$refs["share-link"].setSelectionRange(0,99999),document.execCommand("Copy")}},computed:{share_link:function(){return void 0!=this.result?window.location.origin+window.location.pathname+"?username="+this.result.username+"&period="+this.result.period+"&max_artists="+this.result.max_artists:""}}},tt=Z,et=(r("11c9"),Object(p["a"])(tt,y,w,!1,null,"745a6f5e",null)),rt=et.exports,at=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},nt=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("footer",{staticClass:"section-container"},[r("ul",[r("li",[r("a",{attrs:{href:"https://www.last.fm/user/theteacat"}},[t._v("My Last.Fml")])]),r("li",[r("a",{attrs:{href:"https://github.com/PedantiCat/tag-cloud"}},[t._v("Github")]),t._v(" - Star This!")]),r("li",[r("a",{attrs:{href:"https://github.com/TheTeaCat/lastfm-tag-cloud#how-are-the-tags-chosen--scaled"}},[t._v("How Are The Tags Chosen?")])])])])}],st={props:["collapsed"]},ot=st,it=(r("d82b"),Object(p["a"])(ot,at,nt,!1,null,"e27c415e",null)),ut=it.exports,lt=(r("caad"),r("fb6a"),r("a434"),r("b0c0"),r("ac1f"),r("2532"),r("5319"),r("d4ec")),ct=r("bee2"),dt=r("bc3a"),ht=r.n(dt),pt="97773975bd1d3fdf89b362a27d2b6313",ft=function(){function t(){Object(lt["a"])(this,t),this.state=void 0}return Object(ct["a"])(t,[{key:"generate",value:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(e,r,a){var n,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n={username:e,period:r,max_artists:a,artists:[],listens:{},tags:[],taggings:{},tag_meta:{},scores:{}},s=void 0,this.state="Getting artists' data...",t.next=5,this.get_artist_data(n).then((function(t){return s=t}));case 5:if(void 0!=s){t.next=18;break}return this.state="Pruning tags...",t.next=9,this.prune_tags(n);case 9:return this.state="Getting tags' data...",t.next=12,this.get_tag_data(n);case 12:return this.state="Scoring tags...",t.next=15,this.score_tags(n);case 15:return this.state="Sorting tags...",t.next=18,this.sort_data(n);case 18:return this.state=void 0,t.abrupt("return",{result:n,error:s});case 20:case"end":return t.stop()}}),t,this)})));function e(e,r,a){return t.apply(this,arguments)}return e}()},{key:"get_artist_data",value:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,ht.a.get("https://ws.audioscrobbler.com/2.0/?method=user.gettopartists&api_key="+pt+"&user="+e.username+"&period="+e.period+"&limit="+e.max_artists+"&format=json").then(function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(r){var a,n,s,i,u,l,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:for(a=[],n=!0,s=!1,i=void 0,t.prev=4,u=r.data.topartists.artist[Symbol.iterator]();!(n=(l=u.next()).done);n=!0)c=l.value,a.push(new Promise(function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(r){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=c.name.toLowerCase(),e.artists.push(a),e.listens[a]=c.playcount,t.next=5,ht.a.get("https://ws.audioscrobbler.com/2.0/?method=artist.getTopTags&api_key="+pt+"&artist="+a.replace("&","%26")+"&format=json").then(function(t){if(void 0!=t.data.toptags){var r=!0,n=!1,s=void 0;try{for(var o,i=t.data.toptags.tag[Symbol.iterator]();!(r=(o=i.next()).done);r=!0){var u=o.value;u.name.includes("&")||(u.name=u.name.toLowerCase(),void 0==e.taggings[u.name]?(e.tags.push(u.name),e.taggings[u.name]=[{artist:a,count:u.count}],e.tag_meta[u.name]={library_total:u.count/100,url:u.url}):(e.taggings[u.name].push({artist:a,count:u.count}),e.tag_meta[u.name].library_total+=u.count/100))}}catch(l){n=!0,s=l}finally{try{r||null==i.return||i.return()}finally{if(n)throw s}}}}.bind(this));case 5:r(!0);case 6:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}().bind(this)));t.next=12;break;case 8:t.prev=8,t.t0=t["catch"](4),s=!0,i=t.t0;case 12:t.prev=12,t.prev=13,n||null==u.return||u.return();case 15:if(t.prev=15,!s){t.next=18;break}throw i;case 18:return t.finish(15);case 19:return t.finish(12);case 20:return t.next=22,Promise.all(a);case 22:case"end":return t.stop()}}),t,this,[[4,8,12,20],[13,,15,19]])})));return function(e){return t.apply(this,arguments)}}().bind(this)).catch(function(t){return t}.bind(this));case 2:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"prune_tags",value:function(t){for(var e in t.tags)for(var r in t.tags)if(e!=r){var a=t.tags[e],n=t.tags[r];("s"==n[n.length-1]&&n.slice(0,n.length-1)==a||n.replace(" ","").replace("-","")==a.replace(" ","").replace("-",""))&&(t.tag_meta[a].library_total>=t.tag_meta[n].library_total?t.tags.splice(r,1):t.tags.splice(e,1))}t.tags.sort(function(e,r){return t.tag_meta[r].library_total-t.tag_meta[e].library_total}.bind(this)),t.tags=t.tags.slice(0,100)}},{key:"get_tag_data",value:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(e){var r,a,n,s,i,u,l;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:for(r=[],a=!0,n=!1,s=void 0,t.prev=4,i=e.tags[Symbol.iterator]();!(a=(u=i.next()).done);a=!0)l=u.value,r.push(new Promise(function(t){return function(){var r=Object(o["a"])(regeneratorRuntime.mark((function r(a){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,ht.a.get("https://ws.audioscrobbler.com/2.0/?method=tag.getinfo&api_key="+pt+"&tag="+t+"&format=json").then(function(){var r=Object(o["a"])(regeneratorRuntime.mark((function r(a){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(void 0!=a.data.tag){r.next=2;break}return r.abrupt("return");case 2:e.tag_meta[t].reach=a.data.tag.reach,e.tag_meta[t].total=a.data.tag.total;case 4:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}().bind(this));case 2:a(!0);case 3:case"end":return r.stop()}}),r,this)})));return function(t){return r.apply(this,arguments)}}().bind(this)}.bind(this)(l)));t.next=12;break;case 8:t.prev=8,t.t0=t["catch"](4),n=!0,s=t.t0;case 12:t.prev=12,t.prev=13,a||null==i.return||i.return();case 15:if(t.prev=15,!n){t.next=18;break}throw s;case 18:return t.finish(15);case 19:return t.finish(12);case 20:return t.next=22,Promise.all(r);case 22:case"end":return t.stop()}}),t,this,[[4,8,12,20],[13,,15,19]])})));function e(e){return t.apply(this,arguments)}return e}()},{key:"score_tags",value:function(t){var e=!0,r=!1,a=void 0;try{for(var n,s=t.tags[Symbol.iterator]();!(e=(n=s.next()).done);e=!0){var o=n.value;t.scores[o]=0;var i=!0,u=!1,l=void 0;try{for(var c,d=t.taggings[o][Symbol.iterator]();!(i=(c=d.next()).done);i=!0){var h=c.value;t.scores[o]+=h.count/100*t.listens[h.artist]}}catch(p){u=!0,l=p}finally{try{i||null==d.return||d.return()}finally{if(u)throw l}}t.scores[o]=t.scores[o]*(t.tag_meta[o].library_total/t.tag_meta[o].total)*t.taggings[o].length*t.taggings[o].length*Math.log10(t.tag_meta[o].reach)}}catch(p){r=!0,a=p}finally{try{e||null==s.return||s.return()}finally{if(r)throw a}}}},{key:"sort_data",value:function(t){var e=!0,r=!1,a=void 0;try{for(var n,s=t.tags[Symbol.iterator]();!(e=(n=s.next()).done);e=!0){var o=n.value;t.taggings[o].sort((function(t,e){return e.count-t.count}))}}catch(i){r=!0,a=i}finally{try{e||null==s.return||s.return()}finally{if(r)throw a}}t.tags.sort(function(e,r){return t.scores[r]-t.scores[e]}.bind(this))}}]),t}(),gt=ft,vt={components:{Results:rt,ControlPanel:b,Footer:ut},data:function(){return{theme:"light",username:"TheTeaCat",period:{selected:"3month",options:[{text:"7 Days",value:"7day"},{text:"Month",value:"1month"},{text:"3 Months",value:"3month"},{text:"6 Months",value:"6month"},{text:"Year",value:"12month"},{text:"Overall",value:"overall"}]},max_artists:{selected:25,options:[{text:"10",value:10},{text:"25",value:25},{text:"50",value:50},{text:"100",value:100}]},generator:new gt,result:void 0,error:void 0,cloudWords:void 0}},mounted:function(){window.matchMedia("(prefers-color-scheme: dark)").matches&&(this.theme="dark"),this.period.options.some(function(t){return t.value==this.$route.query.period}.bind(this))&&(this.period.selected=this.$route.query.period),this.max_artists.options.some(function(t){return t.value==this.$route.query.max_artists}.bind(this))&&(this.max_artists.selected=this.$route.query.max_artists),void 0!=this.$route.query.username&&(this.username=this.$route.query.username,this.generate())},methods:{toggleTheme:function(){this.theme="dark"==this.theme?"light":"dark"},generate:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e,r,a,n,s,o,i,u,l,c,d,h,p,f;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.$refs["results"].clear(),this.result=void 0,this.error=void 0,t.next=5,this.generator.generate(this.username,this.period.selected,this.max_artists.selected);case 5:if(e=t.sent,this.result=e.result,this.error=e.error,!(this.result.artists.length>0)){t.next=51;break}for(r=1/0,a=-1/0,n=!0,s=!1,o=void 0,t.prev=14,i=this.result.tags[Symbol.iterator]();!(n=(u=i.next()).done);n=!0)l=u.value,this.result.scores[l]<r&&(r=this.result.scores[l]),this.result.scores[l]>a&&(a=this.result.scores[l]);t.next=22;break;case 18:t.prev=18,t.t0=t["catch"](14),s=!0,o=t.t0;case 22:t.prev=22,t.prev=23,n||null==i.return||i.return();case 25:if(t.prev=25,!s){t.next=28;break}throw o;case 28:return t.finish(25);case 29:return t.finish(22);case 30:for(this.cloudWords=[],c=!0,d=!1,h=void 0,t.prev=34,p=this.result.tags[Symbol.iterator]();!(c=(f=p.next()).done);c=!0)l=f.value,this.cloudWords.push([l,Math.log10(99*(this.result.scores[l]-r)/a+1)/2*175+25]);t.next=42;break;case 38:t.prev=38,t.t1=t["catch"](34),d=!0,h=t.t1;case 42:t.prev=42,t.prev=43,c||null==p.return||p.return();case 45:if(t.prev=45,!d){t.next=48;break}throw h;case 48:return t.finish(45);case 49:return t.finish(42);case 50:this.$refs["results"].createTagCloud(this.cloudWords);case 51:case"end":return t.stop()}}),t,this,[[14,18,22,30],[23,,25,29],[34,38,42,50],[43,,45,49]])})));function e(){return t.apply(this,arguments)}return e}()}},mt=vt,_t=(r("407a"),Object(p["a"])(mt,n,s,!1,null,"d1d6c1fc",null)),bt=_t.exports,yt=r("8c4f");a["a"].use(yt["a"]);var wt=new yt["a"]({mode:"history",routes:[]});a["a"].config.productionTip=!1,new a["a"]({router:wt,render:function(t){return t(bt)}}).$mount("#app")},7982:function(t,e,r){},8383:function(t,e,r){},8520:function(t,e,r){},a73f:function(t,e,r){},c028:function(t,e,r){},c564:function(t,e,r){},d233:function(t,e,r){"use strict";var a=r("34a5"),n=r.n(a);n.a},d82b:function(t,e,r){"use strict";var a=r("007d"),n=r.n(a);n.a},e51c:function(t,e,r){"use strict";var a=r("8520"),n=r.n(a);n.a}});
//# sourceMappingURL=app.1b08dfae.js.map