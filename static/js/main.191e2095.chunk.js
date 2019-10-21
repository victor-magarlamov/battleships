(window.webpackJsonpconvoy=window.webpackJsonpconvoy||[]).push([[0],{20:function(e,t,n){e.exports=n(32)},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),r=n(11),s=n.n(r),o=n(7),l=n(8),c=n(18),u="update_disposition_success",h="reset_disposition_success",p=[],y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return t.positions;case h:return p;default:return e}},d=Object(l.c)({disposition:y}),f=[c.a],v=Object(l.e)(d,{},Object(l.d)(l.a.apply(void 0,f))),m=(n(30),n(9)),g=n(19),O=n(1),b=n(2),w=n(4),k=n(3),S=n(5);var x,E,j,C,D,I,P=function(){function e(t,n){Object(O.a)(this,e),this.x=0,this.y=0,this.prevPosition={x:0,y:0},this.move(t,n)}return Object(b.a)(e,[{key:"move",value:function(e,t){this.prevPosition={x:e,y:t},this.x=e,this.y=t}},{key:"reset",value:function(){this.x=this.prevPosition.x,this.y=this.prevPosition.y}},{key:"isOnBoard",value:function(){return this.x>0&&this.y>0}},{key:"position",get:function(){return{x:this.x,y:this.y}}},{key:"key",get:function(){return"".concat(this.x,":").concat(this.y)}}]),e}();!function(e){e.Settings="settings",e.Game="game"}(x||(x={})),function(e){e.Horizontal="horizontal",e.Vertical="vertical"}(E||(E={})),function(e){e[e.Submarine=1]="Submarine",e[e.Destroyer=2]="Destroyer",e[e.Cruiser=3]="Cruiser",e[e.Battleship=4]="Battleship"}(j||(j={})),function(e){e[e.Empty=0]="Empty",e[e.Filled=1]="Filled",e[e.Injured=2]="Injured",e[e.Destroyed=3]="Destroyed",e[e.Inactive=4]="Inactive",e[e.Open=5]="Open"}(C||(C={})),function(e){e[e.One=1]="One",e[e.Two=2]="Two"}(D||(D={})),function(e){e[e.Over=0]="Over",e[e.Play=1]="Play"}(I||(I={}));var M,T=function(e){function t(e){var n,i=e.id,a=e.x,r=e.y,s=e.length;return Object(O.a)(this,t),(n=Object(w.a)(this,Object(k.a)(t).call(this,a,r))).id=-1,n.length=0,n.life=0,n.orientation=E.Horizontal,n.id=i,n.length=s,n.life=s,n}return Object(S.a)(t,e),Object(b.a)(t,[{key:"rotate",value:function(){this.orientation=this.orientation===E.Horizontal?E.Vertical:E.Horizontal}},{key:"addDamage",value:function(){this.life-=1}},{key:"isDestroyed",value:function(){return 0===this.life}},{key:"positions",value:function(){var e=[],t=0,n=0;this.orientation===E.Horizontal?t=1:n=1;for(var i=0;i<this.length;++i){var a=this.position.x+i*t,r=this.position.y+i*n;e.push({x:a,y:r})}return e}},{key:"borders",value:function(){var e=[];if(!this.isOnBoard())return e;if(this.orientation===E.Horizontal){for(var t=0;t<this.length;++t)e.push(new P(this.position.x+t,this.position.y-1),new P(this.position.x+t,this.position.y+1));e.push(new P(this.position.x-1,this.position.y),new P(this.position.x-1,this.position.y-1),new P(this.position.x-1,this.position.y+1),new P(this.position.x+this.length,this.position.y),new P(this.position.x+this.length,this.position.y-1),new P(this.position.x+this.length,this.position.y+1))}else{for(var n=0;n<this.length;++n)e.push(new P(this.position.x-1,this.position.y+n),new P(this.position.x+1,this.position.y+n));e.push(new P(this.position.x+1,this.position.y-1),new P(this.position.x,this.position.y-1),new P(this.position.x-1,this.position.y-1),new P(this.position.x+1,this.position.y+this.length),new P(this.position.x,this.position.y+this.length),new P(this.position.x-1,this.position.y+this.length))}return e}},{key:"simplify",value:function(){return{id:this.id,orientation:this.orientation,x:this.position.x,y:this.position.y}}},{key:"orient",get:function(){return this.orientation}}],[{key:"generate",value:function(){return[new t({id:0,x:0,y:0,length:j.Submarine}),new t({id:1,x:0,y:0,length:j.Submarine}),new t({id:2,x:0,y:0,length:j.Submarine}),new t({id:3,x:0,y:0,length:j.Submarine}),new t({id:4,x:0,y:0,length:j.Destroyer}),new t({id:5,x:0,y:0,length:j.Destroyer}),new t({id:6,x:0,y:0,length:j.Destroyer}),new t({id:7,x:0,y:0,length:j.Cruiser}),new t({id:8,x:0,y:0,length:j.Cruiser}),new t({id:9,x:0,y:0,length:j.Battleship})]}},{key:"setPositionRandomly",value:function(e,n){for(var i=Array.from(n.values()).filter(function(e){return!e.isFilled()&&!e.isInactive()});;){var a=Math.floor(Math.random()*i.length);if(e.move(i[a].position.x,i[a].position.y),t.isPositionValid(e,n))break;e.rotate()}}},{key:"isPositionValid",value:function(e,t){for(var n=e.positions(),i=0;i<n.length;++i){var a=n[i],r=t.get("".concat(a.x,":").concat(a.y));if(!r||r.isFilled()||r.isInactive())return!1}return!0}}]),t}(P),N=10,_=(M={},Object(m.a)(M,j.Submarine,"submarine"),Object(m.a)(M,j.Destroyer,"destroyer"),Object(m.a)(M,j.Cruiser,"cruiser"),Object(m.a)(M,j.Battleship,"battleship"),M),B=function(e){function t(){var e,n;Object(O.a)(this,t);for(var i=arguments.length,a=new Array(i),r=0;r<i;r++)a[r]=arguments[r];return(n=Object(w.a)(this,(e=Object(k.a)(t)).call.apply(e,[this].concat(a)))).currentShipId=-1,n.currentState=C.Empty,n}return Object(S.a)(t,e),Object(b.a)(t,[{key:"isFilled",value:function(){return-1!==this.shipId}},{key:"isInactive",value:function(){return this.state===C.Inactive}},{key:"isOpen",value:function(){return this.state===C.Open}},{key:"isDamaged",value:function(){return this.state===C.Injured||this.state===C.Destroyed}},{key:"state",get:function(){return this.currentState},set:function(e){this.currentState=e}},{key:"shipId",get:function(){return this.currentShipId},set:function(e){this.currentShipId=e}}]),t}(P);B.generate=function(){for(var e=new Map,t=1;t<11;++t)for(var n=1;n<11;++n)e.set("".concat(n,":").concat(t),new B(n,t));return e},B.resetCells=function(e){e.forEach(function(e){e.shipId=-1,e.state=C.Empty})},B.updateCells=function(e,t){for(var n=0;n<t.length;++n){var i=!0,a=!1,r=void 0;try{for(var s,o=t[n].positions()[Symbol.iterator]();!(i=(s=o.next()).done);i=!0){var l=s.value,c=e.get("".concat(l.x,":").concat(l.y));c&&(c.shipId=t[n].id)}}catch(m){a=!0,r=m}finally{try{i||null==o.return||o.return()}finally{if(a)throw r}}var u=!0,h=!1,p=void 0;try{for(var y,d=t[n].borders()[Symbol.iterator]();!(u=(y=d.next()).done);u=!0){var f=y.value,v=e.get(f.key);v&&(v.state=C.Inactive)}}catch(m){h=!0,p=m}finally{try{u||null==d.return||d.return()}finally{if(h)throw p}}}};var A=B,R=n(34);var z=function(e){var t=e.className,n=e.hidden,i=e.x,r=e.y,s=e.shipId,o=e.onClick,l=e.isDamaged,c=e.isInactive,u=e.isOpen,h="cell";t&&(h="".concat(h," ").concat(t)),s>-1&&!n&&(h="".concat(h," cell--ship")),l&&(h="".concat(h," cell--damaged")),!n&&c&&(h="".concat(h," cell--inactive")),u&&(h="".concat(h," cell--open"));return a.a.createElement("div",{className:h,"data-x":i,"data-y":r,"data-shipid":s,onClick:function(){o&&o(i,r)}})},H=function(e){var t=e.ship,n=e.isSelected;if(!t)return null;var i="ship ship--".concat(t.orient);return n&&(i+=" ship--current"),a.a.createElement("div",{className:i,"data-id":t.id},t.positions().map(function(e,n){return a.a.createElement(z,{key:"".concat(t.id,"-").concat(n),shipId:t.id,isInactive:t.isOnBoard()})}))},U=function(e){function t(){var e,n;Object(O.a)(this,t);for(var i=arguments.length,a=new Array(i),r=0;r<i;r++)a[r]=arguments[r];return(n=Object(w.a)(this,(e=Object(k.a)(t)).call.apply(e,[this].concat(a)))).cursor=null,n.handleDragAndDrop=function(){Object(R.a)(document.getElementsByClassName("cell"),"mousedown").subscribe(n.handleMouseDown),Object(R.a)(document,"mousemove").subscribe(n.handleMouseMove),Object(R.a)(document.getElementsByClassName("field"),"mouseup").subscribe(n.handleMouseUp),Object(R.a)(document,"keydown").subscribe(function(e){32===e.keyCode&&n.props.currentShip&&n.props.onRotateShip(n.props.currentShip)})},n.handleMouseDown=function(e){var t=!e.target.parentElement.classList.contains("inactive"),i=-1!==+e.target.dataset.shipid;t&&i&&!n.props.currentShip&&n.props.onMouseDown(e.target.dataset.shipid)},n.handleMouseMove=function(e){n.cursor&&n.cursor.move(e.clientX,e.clientY)},n.handleMouseUp=function(e){if(n.props.currentShip&&n.cursor){var t=+e.target.dataset.x,i=+e.target.dataset.y,a=+n.cursor.shipId();n.props.onMouseUp(a,t,i)}},n}return Object(S.a)(t,e),Object(b.a)(t,[{key:"componentDidMount",value:function(){this.handleDragAndDrop()}},{key:"componentDidUpdate",value:function(e){e.currentShip&&this.props.currentShip&&!this.cursor&&(this.cursor=function(){var e=document.getElementsByClassName("ship--current")[0];return e&&(e.style.left="-1000px",e.style.top="-1000px"),Object.freeze({move:function(t,n){e&&(e.style.left="".concat(t,"px"),e.style.top="".concat(n,"px"))},shipId:function(){return e?e.dataset.id:-1}})}()),null===this.props.currentShip&&(this.cursor=null)}},{key:"render",value:function(){var e=this.props.currentShip;return e?a.a.createElement(H,{ship:e,isSelected:!0}):null}}]),t}(i.Component),F=function(e){var t=e.cells,n=e.hidden,i=e.onCellClick;return a.a.createElement("div",{className:"board"},Array.from(t.values()).map(function(e){return a.a.createElement(z,{key:e.key,className:"field",hidden:n,x:e.position.x,y:e.position.y,shipId:e.shipId,onClick:i,isDamaged:e.isDamaged(),isInactive:e.isInactive(),isOpen:e.isOpen()})}))},V=function(e){var t=e.as,n=e.content,i=e.color,r=void 0===i?"white":i;return a.a.createElement("div",{style:{color:r},dangerouslySetInnerHTML:{__html:"<".concat(t,">").concat(n,"</").concat(t,">")}})},G=function(e){var t=e.ships.reduce(function(e,t){return e[t.length]||(e[t.length]={type:_[t.length],ships:[]}),e[t.length].ships.push(t),e},{});return a.a.createElement("div",{className:"ship-list"},Object.values(t).map(function(e){return a.a.createElement("div",{key:"ship-row-".concat(e.type),className:"ship-list__row"},a.a.createElement("div",{className:"ship-list__row__label"},e.type),e.ships.map(function(e){return a.a.createElement(H,{key:"ship-".concat(e.id),ship:e})}))}))},Y=function(e){function t(){var e,n;Object(O.a)(this,t);for(var i=arguments.length,a=new Array(i),r=0;r<i;r++)a[r]=arguments[r];return(n=Object(w.a)(this,(e=Object(k.a)(t)).call.apply(e,[this].concat(a)))).state={currentShip:null,ships:T.generate(),cells:A.generate()},n.handleMouseDown=function(e){!function(){for(var t=n.state.ships,i=0;i<t.length;++i)if(t[i].id===+e){t[i].move(0,0),n.setState({ships:t,currentShip:t[i]});break}}()},n.handleMouseUp=function(e,t,i){for(var a=n.state,r=a.ships,s=a.cells,o=0;o<r.length;++o)if(r[o].id===e){r[o].move(t,i),T.isPositionValid(r[o],s)?n.setState({ships:r,currentShip:null}):r[o].reset();break}},n.handleRotateShip=function(e){e.rotate(),n.setState({currentShip:e})},n.handlePlayClick=function(){var e=n.state.ships.map(function(e){return e.simplify()});n.props.updateDisposition(e)},n}return Object(S.a)(t,e),Object(b.a)(t,[{key:"componentDidMount",value:function(){this.updateCells()}},{key:"componentDidUpdate",value:function(e,t){null!==t.currentShip&&null===this.state.currentShip?this.updateCells():t.currentShip!==this.state.currentShip&&this.updateCells()}},{key:"updateCells",value:function(){var e=this.state,t=e.cells,n=e.ships;A.resetCells(t),A.updateCells(t,n),this.setState({cells:t})}},{key:"render",value:function(){var e=this.state,t=e.ships,n=e.cells,i=e.currentShip;return a.a.createElement("div",{className:"page v-container"},a.a.createElement(V,{as:"h3",content:"Hi, admiral! Set up your flotilla!"}),a.a.createElement("div",{className:"h-container"},a.a.createElement("div",{className:"h-container__col"},a.a.createElement(F,{cells:n})),a.a.createElement("div",{className:"h-container__col"},a.a.createElement(G,{ships:t}),a.a.createElement("ul",{className:"brief"},a.a.createElement("li",null,a.a.createElement("b",null,"move")," - drag and drop"),a.a.createElement("li",null,a.a.createElement("b",null,"rotate")," - select and press space")))),a.a.createElement("div",null,this.isReadyToPlay&&a.a.createElement("button",{onClick:this.handlePlayClick},"Battle!")),a.a.createElement(U,{currentShip:i,onMouseDown:this.handleMouseDown,onMouseUp:this.handleMouseUp,onRotateShip:this.handleRotateShip}))}},{key:"isReadyToPlay",get:function(){return 10===this.state.ships.filter(function(e){return e.isOnBoard()}).length}}]),t}(i.Component),J={updateDisposition:function(e){return{type:u,positions:e}}},K=Object(o.b)(null,J)(Y),L=n(15);function W(){var e=A.generate(),t=[],n=[];return Object.freeze({getTargetKey:function(){if(t.length>0)return t.shift().key;var n,i=function(e){return Array.from(e.values()).filter(function(e){return!e.isOpen()&&!e.isDamaged()})}(e);return i[(n=i.length,Math.floor(Math.random()*n))].key},setResult:function(i,a){e.get("".concat(i.x,":").concat(i.y)).state=a,a===C.Injured?(n.push(new P(i.x,i.y)),function(i){var a=new Map;if(n.length>1){t=[];var r=n.map(function(e){return e.x}).sort(function(e,t){return+e-+t}),s=n.map(function(e){return e.y}).sort(function(e,t){return+e-+t});if(1===new Set(r).size){var o=s.shift()||i.y,l=s.pop()||i.y;a.set(0,new P(i.x,o-1)),a.set(1,new P(i.x,l+1))}else{var c=r.shift()||i.x,u=r.pop()||i.x;a.set(0,new P(c-1,i.y)),a.set(1,new P(u+1,i.y))}}else a.set(0,new P(i.x+1,i.y)),a.set(1,new P(i.x-1,i.y)),a.set(2,new P(i.x,i.y+1)),a.set(3,new P(i.x,i.y-1));a.forEach(function(t,n){(!e.get(t.key)||e.get(t.key).isOpen()||e.get(t.key).isDamaged())&&a.delete(n)}),t=[].concat(Object(L.a)(t),Object(L.a)(Array.from(a.values())))}(i)):a===C.Destroyed&&(t=[],n=[])},openCells:function(t){var n=!0,i=!1,a=void 0;try{for(var r,s=t[Symbol.iterator]();!(n=(r=s.next()).done);n=!0){var o=r.value,l=e.get(o.key);l&&(l.state=C.Open)}}catch(c){i=!0,a=c}finally{try{n||null==s.return||s.return()}finally{if(i)throw a}}}})}var X=function(e){var t=e.isCurrent,n=e.content,i="board-title";return t&&(i+=" board-title--current"),a.a.createElement("div",{className:i},n)},q=function(e){var t=e.onClick,n=e.winner===D.One?"Salute! You win!":"Sorry admiral! Your flotilla was destroyed";return a.a.createElement("div",{className:"game-result"},a.a.createElement(V,{as:"h3",color:"blue",content:n}),a.a.createElement("button",{onClick:t},"Replay"))},Q=function(e){function t(){var e,n;Object(O.a)(this,t);for(var i=arguments.length,a=new Array(i),r=0;r<i;r++)a[r]=arguments[r];return(n=Object(w.a)(this,(e=Object(k.a)(t)).call.apply(e,[this].concat(a)))).nahimov=W(),n.playerOneShips=T.generate(),n.playerTwoShips=T.generate(),n.state={currentPlayer:D.One,playerOneCells:A.generate(),playerTwoCells:A.generate(),gameState:I.Play,winner:null},n.handleOnClick=function(e,t){var i=n.state,a=i.playerTwoCells,r=i.currentPlayer,s=i.gameState;if(r!==D.Two&&s!==I.Over){var o=D.Two,l=a.get("".concat(e,":").concat(t));l.isDamaged()||l.isOpen()||(n.strike(l,n.playerTwoShips,a),l.isDamaged()?o=D.One:n.counterAttack(),n.setState({playerTwoCells:a,currentPlayer:o}))}},n.strike=function(e,t,i){var a=C.Open;if(e.isFilled()){var r=t.find(function(t){return t.id===e.shipId});if(r.addDamage(),e.state=C.Injured,r.isDestroyed()){a=C.Destroyed,n.state.currentPlayer===D.Two&&n.nahimov.openCells(r.borders());var s=!0,o=!1,l=void 0;try{for(var c,u=r.borders()[Symbol.iterator]();!(s=(c=u.next()).done);s=!0){var h=c.value,p=i.get(h.key);p&&(p.state=C.Open)}}catch(y){o=!0,l=y}finally{try{s||null==u.return||u.return()}finally{if(o)throw l}}t.filter(function(e){return e.isDestroyed()}).length===N&&n.setState({gameState:I.Over})}else a=C.Injured}else e.isOpen()&&!e.isInactive()||(e.state=C.Open);return a},n.handleReplayClick=function(){n.props.resetDisposition()},n}return Object(S.a)(t,e),Object(b.a)(t,[{key:"componentDidMount",value:function(){this.initPlayerOne(),this.initPlayerTwo()}},{key:"initPlayerOne",value:function(){for(var e=this,t=this.props.disposition,n=this.state.playerOneCells,i=function(n){var i=e.playerOneShips.find(function(e){return e.id===t[n].id});i&&(i.move(t[n].x,t[n].y),t[n].orientation===E.Vertical&&i.rotate())},a=0;a<t.length;++a)i(a);A.updateCells(n,this.playerOneShips),this.setState({playerOneCells:n})}},{key:"initPlayerTwo",value:function(){for(var e=this.state.playerTwoCells,t=0;t<this.playerTwoShips.length;++t)T.setPositionRandomly(this.playerTwoShips[t],e),A.updateCells(e,this.playerTwoShips);this.setState({playerTwoCells:e})}},{key:"counterAttack",value:function(){var e=this;setTimeout(function(){var t=e.state,n=t.playerOneCells;if(t.gameState!==I.Over){var i=D.One,a=e.nahimov.getTargetKey(),r=n.get(a),s=e.strike(r,e.playerOneShips,n);e.nahimov.setResult(r.position,s),r.isDamaged()&&(i=D.Two,e.counterAttack()),e.setState({playerOneCells:n,currentPlayer:i})}},1e3)}},{key:"render",value:function(){var e=this.state,t=e.playerOneCells,n=e.playerTwoCells,i=e.currentPlayer;return a.a.createElement("div",{className:"page v-container"},a.a.createElement(V,{as:"h3",content:"Whist all up!"}),a.a.createElement("div",{className:"h-container"},a.a.createElement("div",{className:"h-container__col"},a.a.createElement(X,{isCurrent:i===D.Two,content:"Player1"}),a.a.createElement(F,{cells:t})),a.a.createElement("div",{className:"h-container__col"},a.a.createElement(X,{isCurrent:i===D.One,content:"Player2"}),a.a.createElement(F,{hidden:!0,cells:n,onCellClick:this.handleOnClick}))),this.isGameOver&&a.a.createElement(q,{onClick:this.handleReplayClick,winner:i}))}},{key:"isGameOver",get:function(){return this.state.gameState===I.Over}}]),t}(i.Component),Z={resetDisposition:function(){return{type:h}}},$=Object(o.b)(function(e){return{disposition:e.disposition}},Z)(Q),ee=(n(31),function(){var e,t=Object(i.useState)(x.Settings),n=Object(g.a)(t,2),r=n[0],s=n[1],l=Object(o.c)(function(e){return e.disposition}),c=(e={},Object(m.a)(e,x.Settings,a.a.createElement(K,null)),Object(m.a)(e,x.Game,a.a.createElement($,null)),e);return Object(i.useEffect)(function(){l.length>1?s(x.Game):s(x.Settings)},[l]),a.a.createElement(i.Fragment,null,a.a.createElement(V,{as:"h1",content:"Battleships"}),c[r])});s.a.render(a.a.createElement(o.a,{store:v},a.a.createElement(ee,null)),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.191e2095.chunk.js.map