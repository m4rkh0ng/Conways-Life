(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,n){e.exports=n(30)},26:function(e,t,n){},28:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(13),s=n.n(i),c=n(7),o=n(8),u=n(2),l=n(3),p=n(5),h=n(4),f=n(6);var m=function(e){var t=e.alive,n=e.newBorn,a=e.running,i=e.handleClick;return r.a.createElement("td",{onClick:a>0?"":i,className:"".concat(t?"alive":"dead"," ").concat(n?"new-born":"")})},d=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"board"},r.a.createElement("table",null,r.a.createElement("tbody",null,this.props.board.map(function(t,n){return r.a.createElement("tr",{key:n},t.map(function(t,a){return r.a.createElement(m,{key:a,alive:t.status,newBorn:t.newBorn,handleClick:function(){return e.props.currentState(n,a)}})}))}))))}}]),t}(a.Component),y=Object(c.b)(function(e){return{board:e.board}},function(e){return{currentState:function(t,n){return e(function(e,t){return{type:"TOGGLE_ALIVE",x:e,y:t}}(t,n))}}})(d),v=function(e){var t=e.title,n=e.icon,a=e.handleClick;return r.a.createElement("span",{onClick:a,className:"button"},r.a.createElement("i",{className:n})," ",t)},E=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.random()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"controls"},r.a.createElement("div",{className:"buttons"},r.a.createElement(v,{handleClick:function(){return e.props.random()},title:"Randomize",icon:"fa fa-random"}),r.a.createElement(v,{handleClick:function(){return e.clear()},title:"Clear",icon:"fa fa-undo"}),r.a.createElement(v,{handleClick:function(){return e.togglePlay()},icon:this.props.playState.isRunning?"fa fa-pause":"fa fa-play",title:(this.props.playState.isRunning,"")}),r.a.createElement(v,{handleClick:function(){return e.props.tick()},icon:"fa fa-step-forward",title:"Step Forward +1"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"button-group"},r.a.createElement(v,{className:"button",handleClick:function(){return e.props.resizeSmall()},icon:"fa fa-th-large",title:"Small"}),r.a.createElement(v,{className:"button",handleClick:function(){return e.props.resizeMedium()},icon:"fa fa-th-large",title:"Medium"}),r.a.createElement(v,{className:"button",handleClick:function(){return e.props.resizeLarge()},icon:"fa fa-th-large",title:"Large"}))))}},{key:"togglePlay",value:function(){if(this.props.playState.isRunning)clearInterval(this.props.playState.timerId),this.props.stopPlaying();else{var e=setInterval(this.props.tick,100);this.props.startPlaying(e)}}},{key:"clear",value:function(){this.props.playState.isRunning&&(clearInterval(this.props.playState.timerId),this.props.stopPlaying()),this.props.clear()}},{key:"resizeSmall",value:function(){this.props.playState.isRunning&&(clearInterval(this.props.playState.timerId),this.props.stopPlaying()),this.props.resizeSmall()}},{key:"resizeMedium",value:function(){this.props.playState.isRunning&&(clearInterval(this.props.playState.timerId),this.props.stopPlaying()),this.props.resizeMedium()}},{key:"resizeLarge",value:function(){this.props.playState.isRunning&&(clearInterval(this.props.playState.timerId),this.props.stopPlaying()),this.props.resizeLarge()}}]),t}(a.Component),g=Object(c.b)(function(e){return{playState:e.playState}},function(e){return{random:function(){return e({type:"MAKE_RANDOM"})},tick:function(){return e({type:"TICK"})},startPlaying:function(t){return e(function(e){return{type:"PLAY",timerId:e}}(t))},stopPlaying:function(){return e({type:"STOP",timerId:t});var t},clear:function(){return e({type:"CLEAR"})},resizeSmall:function(){return e({type:"RESIZE_SMALL"})},resizeMedium:function(){return e({type:"RESIZE_MEDIUM"})},resizeLarge:function(){return e({type:"RESIZE_LARGE"})}}})(E),b=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"counter"},"Generations: ",this.props.generations)}}]),t}(a.Component),k=Object(c.b)(function(e){return{generations:e.counter}})(b),O=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"learn"},"Learn more about John Conway's Game of Life\xa0",r.a.createElement("a",{href:"https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life"},"here"),".")}}]),t}(a.Component),S=(n(26),function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(p.a)(this,Object(h.a)(t).call(this))).checkRunning=function(t){e.state},e.state={running:""},e}return Object(f.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("link",{rel:"stylesheet",href:"https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"}),r.a.createElement("h1",null,"Game of Life"),r.a.createElement("div",null,r.a.createElement(O,null)),r.a.createElement(y,{running:this.state.running,checkRunning:this.checkRunning}),r.a.createElement(k,null),r.a.createElement(g,{running:this.state.running,checkRunning:this.checkRunning}))}}]),t}(a.Component)),w=function(e,t){for(var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=[],r=0;r<e;r++){for(var i=[],s=0;s<t;s++){var c=void 0;n&&(c=Math.random()>.85),i.push({status:c,newBorn:c})}a.push(i)}return a},I=40,j=40,R=w(I,j),C={timerId:null,isRunning:!1},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;switch((arguments.length>1?arguments[1]:void 0).type){case"TICK":return e+1;case"CLEAR":case"MAKE_RANDOM":return 0;default:return e}},M=Object(o.c)({board:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TOGGLE_ALIVE":var n=e.slice(0),a=n[t.x][t.y];return a.status=!a.status,a.newBorn=!a.newBorn,n;case"RESIZE_SMALL":return w(I=15,j=15,!1);case"RESIZE_MEDIUM":return w(I=25,j=25,!1);case"RESIZE_LARGE":return w(I=40,j=40,!1);case"MAKE_RANDOM":return w(I,j,!0);case"CLEAR":return w(I,j);case"TICK":return function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=e.length,n=e[0].length,a=function(a,r){var i=a-1<0?t-1:a-1,s=a+1===t?0:a+1,c=r-1<0?n-1:r-1,o=r+1===n?0:r+1,u=0;return u+=e[i][c].status,u+=e[i][r].status,u+=e[i][o].status,u+=e[a][c].status,u+=e[a][o].status,u+=e[s][c].status,u+=e[s][r].status,u+=e[s][o].status},r=[],i=0;i<t;i++){for(var s=[],c=0;c<n;c++){var o=e[i][c].status,u=a(i,c);o&&(u<2?s.push({status:0}):u>3?s.push({status:0}):s.push({status:1})),o||(3===u?s.push({status:1,newBorn:!0}):s.push({status:0}))}r.push(s)}return r}(e.slice(0));default:return e}},playState:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PLAY":return{timerId:t.timerId,isRunning:!0};case"STOP":return{timerId:null,isRunning:!1};default:return e}},counter:L});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(28);var A=Object(o.a)()(o.d);s.a.render(r.a.createElement(c.a,{store:A(M)},r.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[16,2,1]]]);
//# sourceMappingURL=main.4cae4e62.chunk.js.map