(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{103:function(e,t){},106:function(e,t,n){},107:function(e,t,n){},108:function(e,t,n){e.exports=n.p+"static/media/forward.85197b81.svg"},109:function(e,t,n){e.exports=n.p+"static/media/disconnected.6a4cc088.png"},110:function(e,t,n){},111:function(e,t,n){},112:function(e,t,n){},113:function(e,t,n){},114:function(e,t,n){},115:function(e,t,n){},116:function(e,t,n){},117:function(e,t,n){},118:function(e,t,n){},119:function(e,t,n){},120:function(e,t,n){},121:function(e,t,n){},122:function(e,t,n){},123:function(e,t,n){},124:function(e,t,n){"use strict";n.r(t);var a,o,i=n(0),s=n.n(i),r=n(53),c=n(11),l=n(10),u=n(13),h=n(7),p=n(29),m={room:null,name:"",id:null,loading:!1,answers:[],likes:!1},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PLAYER_SET_SELF":return Object(p.a)({},e,{name:t.payload.playerData.name,id:t.payload.playerData.id,room:t.payload.room});case"PLAYER_SET_LOADING":return Object(p.a)({},e,{loading:t.payload});case"PLAYER_SET_LIKES":return Object(p.a)({},e,{likes:t.payload});default:return e}},y=function(){return!1},f=n(57),b=Object(u.a)(),g=[f.a,Object(l.routerMiddleware)(b)],w=h.d.apply(void 0,[h.a.apply(void 0,g)].concat([])),v=Object(h.e)((a=b,Object(h.c)({router:Object(l.connectRouter)(a),player:d,dev:y})),{},w),k=n(26),j=n(2),O=n(3),E=n(5),C=n(4),S=n(6),x=n(58),N=n(28),L=n.n(N),T=n(19);function q(e){o=e.props.dev?L()("http://localhost:9000"):L()("https://whatpeoplesearch.herokuapp.com"),T.a.initialize("UA-144165883-1"),T.a.pageview("player"),o.on("host-send-player-leave-room",I.bind(this,e)),o.on("player-joined-room-successfully",function(e,t){var n={name:t.playerData.name,id:t.playerData.id,room:t.room.short};switch(window.localStorage.quiz=JSON.stringify(n),e.props.playerSetSelf(t),e.props.setLoading(!1),t.gameState){case"welcome":return e.props.push("/waiting-start");case"question-entry":return e.props.push("/question-input");case"answer-entry":return e.props.push("/answer-input");case"waiting":return e.props.push("/waiting");case"end":return e.props.push("/end");default:return}}.bind(this,e)),o.on("error-joining-room-no-host",I.bind(this,e)),o.on("error-joining-room",I.bind(this,e)),o.on("waiting",function(e){e.props.push("/waiting")}.bind(this,e)),o.on("question-input",function(e){e.props.setLoading(!1),e.props.push("/question-input")}.bind(this,e)),o.on("answer-input",function(e){e.props.setLoading(!1),e.props.push("/answer-input")}.bind(this,e)),o.on("end-game",function(e){e.props.setLoading(!1),e.props.push("/end")}.bind(this,e)),o.on("player-error-not-enough-suggestions",function(e){console.log("error"),e.props.setLoading(!1),e.props.push("/question-input-error")}.bind(this,e)),o.on("host-sending-likes",function(e,t){e.props.push("/likes"),e.props.setLikes(t.player)}.bind(this,e)),o.on("host-disconnected",function(e){e.props.push("/host-disconnected")}.bind(this,e))}function P(e,t){o.emit("player-submit-question",t),e.props.push("/waiting")}function I(e,t){console.log("error joining room"),t&&t.long?(console.log("socket leaving room"),e.props.setLoading(!1),e.props.push("/"),o.emit("leave-room",t.long)):(e.props.setLoading(!1),e.props.push("/"))}var z=function(e){return function(t){t({type:"PLAYER_SET_SELF",payload:e})}},_=function(e){return function(t){t({type:"PLAYER_SET_LOADING",payload:e})}},A=function(e){return console.log("setting liokes"),function(t){t({type:"PLAYER_SET_LIKES",payload:e})}},R=function(e){function t(e){return Object(j.a)(this,t),Object(E.a)(this,Object(C.a)(t).call(this,e))}return Object(S.a)(t,e),Object(O.a)(t,[{key:"componentDidMount",value:function(){q(this)}},{key:"render",value:function(){return s.a.createElement("div",null)}}]),t}(i.Component),M=Object(c.connect)(function(e){return{playerRoom:e.player.room,dev:e.dev}},function(e){return Object(h.b)({push:function(e){return Object(x.push)(e)},setLikes:A,playerSetSelf:z,setLoading:_},e)})(R),D=(n(106),function(e){function t(){return Object(j.a)(this,t),Object(E.a)(this,Object(C.a)(t).apply(this,arguments))}return Object(S.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){var e=this.props,t=e.text,n=e.onClick,a=e.containerStyle,o=e.textStyle,i=e.danger,r=e.help;return s.a.createElement("div",{className:"buttonContainer ".concat(i&&"danger"," ").concat(r&&"help"),onClick:n.bind(this),style:a||{}},s.a.createElement("p",{style:o||{}},t))}}]),t}(i.Component)),U=(n(107),function(e){function t(){return Object(j.a)(this,t),Object(E.a)(this,Object(C.a)(t).apply(this,arguments))}return Object(S.a)(t,e),Object(O.a)(t,[{key:"onContinue",value:function(){this.props.onContinue(this.refs.input.value)}},{key:"render",value:function(){var e=this.props,t=e.onContinue,a=e.value,o=e.placeholder,i=e.onChange;return s.a.createElement("div",{className:"textInputContainer"},s.a.createElement("input",{autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",spellCheck:"false",placeholder:o,type:"text",ref:"input",value:a,onChange:i}),t&&s.a.createElement("div",{className:"continue",onClick:this.onContinue.bind(this)},s.a.createElement("img",{src:n(108)})))}}]),t}(i.Component)),W=(n(35),function(e){function t(){return Object(j.a)(this,t),Object(E.a)(this,Object(C.a)(t).apply(this,arguments))}return Object(S.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){var e=this.props.large;return s.a.createElement("div",{className:"pointsContainer ".concat(e&&"large")},s.a.createElement("p",{className:"coin1 coin"},"\ud83d\udcb0"),s.a.createElement("p",{className:"coin2 coin"},"\ud83d\udcb0"),"\\",s.a.createElement("p",{className:"coin3 coin"},"\ud83d\udcb0"))}}]),t}(i.Component)),Y=function(e){function t(e){var n;return Object(j.a)(this,t),(n=Object(E.a)(this,Object(C.a)(t).call(this,e))).state={show:[]},n}return Object(S.a)(t,e),Object(O.a)(t,[{key:"componentWillReceiveProps",value:function(e){if(e.likes>this.props.likes){console.log("getting a like",(new Date).getMilliseconds());var t=Object.assign([],this.state.show);t.push(!0),this.setState({show:t})}}},{key:"render",value:function(){var e=this.state.show;return s.a.createElement("div",{className:"hostLikesContainer"},e&&e.map(function(e,t){return s.a.createElement("div",{key:t,className:"hostLikeContainer",style:{position:"absolute",top:180,left:Math.floor(170*Math.random())}},s.a.createElement("p",{className:"thumbsup"},"\ud83d\udc4d"))}))}}]),t}(i.Component),J=function(e){function t(e){var n;return Object(j.a)(this,t),(n=Object(E.a)(this,Object(C.a)(t).call(this,e))).state={showPoints:!1},n}return Object(S.a)(t,e),Object(O.a)(t,[{key:"showPoints",value:function(){var e=this;clearTimeout(this.timeout),this.setState({showPoints:!0},function(){e.timeout=setTimeout(function(){e.setState({showPoints:!1})},800)})}},{key:"componentWillReceiveProps",value:function(e){this.props.showPoints&&e.score&&(this.props.score||0===this.props.score)&&e.score>this.props.score&&(this.props.pointsSound&&this.props.pointsSound.play(),this.showPoints())}},{key:"render",value:function(){var e=this.props,t=e.name,a=e.image,o=(e.planet,e.disconnected),i=e.index,r=e.score,c=(e.hasSubmitted,e.isScores),l=e.color,u=e.large,h=e.showScores,p=e.showLikeAnimation,m=e.likes,d=(e.showLikes,e.answer,e.hideName),y=(e.mostLiked,o?n(109):a),f=r||0;return s.a.createElement("div",{className:"hostPlayerOuterContainer ".concat(u&&"large","  ").concat(t&&"isVisible"," ").concat(c&&"isScores")},s.a.createElement("div",{className:"hostPlayerContainer  ".concat(u&&"large"," ").concat(d&&"hideName")},s.a.createElement("div",{className:"playerCircle ".concat(u&&"large"," ").concat(o&&"disconnected"),style:a?{backgroundImage:"url("+y+")"}:{background:l}}),!d&&s.a.createElement("p",{style:{color:l},className:"name"},t||"Player ".concat(i+1)),h&&s.a.createElement("p",{className:"score"},"Score: ".concat(f)),p&&s.a.createElement(Y,{likes:m})),this.state.showPoints&&s.a.createElement(W,{large:u}))}}]),t}(i.Component),G=(n(110),["blue","red","yellow","blue","green","red"]),F=function(e){function t(e){var n;return Object(j.a)(this,t),(n=Object(E.a)(this,Object(C.a)(t).call(this,e))).text=n.createTitle(),n.timeoutTime=100,n.timeout=!1,n.state={visible:-1},n}return Object(S.a)(t,e),Object(O.a)(t,[{key:"componentDidMount",value:function(){this.displayTitle(0)}},{key:"displayTitle",value:function(e){var t=this;this.timeout=setTimeout(function(){t.state.visible<t.text.length-1?t.setState({visible:e},function(){t.displayTitle(e+1)}):(t.setState({visible:20}),t.props.loadComplete&&t.props.loadComplete())},this.timeoutTime)}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeout)}},{key:"createTitle",value:function(){for(var e=this.props.text,t=[],n=0;n<e.length;n++)t.push(e[n]);return t}},{key:"componentWillReceiveProps",value:function(e){e.text!==this.props.text&&(this.text=this.createTitle())}},{key:"render",value:function(){var e=this.props,t=e.letterStyle,n=e.containerStyle,a=this.state.visible;return s.a.createElement("div",{className:"colorTextContainer",style:n||{}},this.text.map(function(e,n){var o="letterTitle ".concat(G[n%G.length]," ").concat(" "===e&&"space"," ");return a>=n&&(o+="visible"),s.a.createElement("h4",{className:o,key:n,style:t||{}},e)}))}}]),t}(i.Component),V=(n(111),function(e){function t(e){return Object(j.a)(this,t),Object(E.a)(this,Object(C.a)(t).call(this,e))}return Object(S.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){var e=this.props,t=e.secondaryText,n=e.primaryText,a=(e.containerStyle,e.isVisible),o=e.correct,i=e.incorrect,r=e.isLike,c=e.onClick;return s.a.createElement("div",{onClick:c?c.bind(this):function(){},className:"inputStyleTextContainer ".concat(a&&"inputContainerExpanded"," ").concat(o&&"correct"," ").concat(i&&"incorrect")},s.a.createElement("p",{className:"inputText"},s.a.createElement("span",{className:"secondary"},t," "),n),!o&&!i&&!r&&s.a.createElement("img",{className:"image",src:"http://www.gstatic.com/images/branding/googlemic/2x/googlemic_color_24dp.png"}),r&&s.a.createElement("p",{className:"image"},"\ud83d\udc4d"),o&&!r&&s.a.createElement("p",{className:"image"},"\ud83d\udc4c"),i&&s.a.createElement("p",{className:"image"},"\ud83d\ude14"))}}]),t}(i.Component)),H=(n(112),n(15)),K=(n(113),function(e){function t(e){var n;Object(j.a)(this,t),n=Object(E.a)(this,Object(C.a)(t).call(this,e));var a=!!window.localStorage.quiz&&JSON.parse(window.localStorage.quiz);return console.log(a),n.state={name:a&&a.name?a.name:"",roomcode:a&&a.room?a.room:""},n}return Object(S.a)(t,e),Object(O.a)(t,[{key:"onContinue",value:function(){var e=this.state;!function(e,t){var n=!!window.localStorage.quiz&&JSON.parse(window.localStorage.quiz).id;t.prevId=n,o.emit("player-connected",t),e.props.push("/waiting")}(this,{room:e.roomcode,name:e.name})}},{key:"onChange",value:function(e,t){var n;n="roomcode"===e?t.target.value.toUpperCase():t.target.value.slice(0,12),this.setState(Object(H.a)({},e,n))}},{key:"onHost",value:function(){window.location.replace("http://host.trending.guru")}},{key:"render",value:function(){var e=this.state,t=e.name,n=e.roomcode;return s.a.createElement("div",{className:"loginContainer"},s.a.createElement(F,{text:"Let's go",letterStyle:{fontSize:"50px"}}),s.a.createElement(U,{placeholder:"Roomcode",value:n,onChange:this.onChange.bind(this,"roomcode")}),s.a.createElement(U,{placeholder:"Name",value:t,onContinue:this.onContinue.bind(this),onChange:this.onChange.bind(this,"name")}),s.a.createElement(D,{onClick:this.onHost.bind(this),text:"I'm the host",help:!0}),s.a.createElement("div",null))}}]),t}(i.Component)),Q=Object(c.connect)(function(e){return{users:e.player.users,room:e.player.room,usersSelected:e.player.usersSelected}},function(e){return Object(h.b)({setLoading:_,push:function(e){return Object(l.push)(e)}},e)})(K);n.p,n(114);var B=function(e){function t(){return Object(j.a)(this,t),Object(E.a)(this,Object(C.a)(t).apply(this,arguments))}return Object(S.a)(t,e),Object(O.a)(t,[{key:"onClick",value:function(){var e;e=this.props.room,T.a.pageview("start game"),o.emit("player-start-game",e)}},{key:"render",value:function(){return s.a.createElement("div",{className:"playerWaitingStartContainer"},s.a.createElement(F,{text:"Sit tight",letterStyle:{fontSize:"50px"}}),s.a.createElement("h4",{className:"title"},"Let us know when everyone is in."),s.a.createElement(D,{text:"Everybody's in",onClick:this.onClick.bind(this)}))}}]),t}(i.Component),X=Object(c.connect)(function(e){return{room:e.player.room}},function(e){return Object(h.b)({},e)})(B),Z=(n(115),function(e){function t(){return Object(j.a)(this,t),Object(E.a)(this,Object(C.a)(t).apply(this,arguments))}return Object(S.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"waitingContainer"},s.a.createElement(F,{text:"waiting",letterStyle:{fontSize:"50px"}}))}}]),t}(i.Component)),$=(n(116),function(e){function t(){return Object(j.a)(this,t),Object(E.a)(this,Object(C.a)(t).apply(this,arguments))}return Object(S.a)(t,e),Object(O.a)(t,[{key:"onClick",value:function(){var e;e=this.props.room,T.a.pageview("restart game"),o.emit("player-restart-game",e),this.props.push("/p/waiting")}},{key:"render",value:function(){return s.a.createElement("div",{className:"endContainer"},s.a.createElement(F,{text:"That's it",letterStyle:{fontSize:"50px"}}),s.a.createElement("div",{className:"spacer"}),s.a.createElement(D,{text:"Play again!",onClick:this.onClick.bind(this)}))}}]),t}(i.Component)),ee=(n(117),["My bum","am i addicted to","do cows","did jesus ever","do birds","why can't i keep","is it unlucky to","how often should you","are boogers","did the chinese","my face looks","my brain keeps","can i shoot","do the inuit","do the french","how dangerous is","conspiracies about the ","my friend keeps","my neighbour keeps","why does harry potter","should I lie about","do texans","who was the first person to","do giant pandas","what's so bad about","my mouth keeps","what is the punishment for killing","should parents","my boss is a","has a person ever been","does kissing","what did they use before","is the queen a","why do americans","is it possible to die of","why do pirates","how old do you have to be to","can i name my child","is it legal to","do all animals","could a human fight a","is michael jackson","why do bad things happen","are ant and dec","is it possible for humans to get","why does pizza","is rap music","does the tooth fairy","can twins","can you get a tan from","how to dress up as a","why do sports people","how do I know if I have","can i make myself","are pot noodles","how do you kill","is it possible to","does santa claus","is it lucky to","i keep hearing","can loud noises","why does my hair","is it wrong to","is it embarrasing to","can kim jong un","is ham","why does donald trump","is the daily mail","whats at the bottom","did star wars","why does winnie the pooh","is bingo","does smoking make you","my feet look","did the titanic","do you have to be over 18 to","can a chicken","my life is","how do I ask someone for","what is the coldest","what is the hottest","why do i have so much","has a monkey ever","do spiders really","why do old people","why do young people","did dinosaurs","can you marry","can you kiss","can a potato","can a cucumber","how does a potato","why do hipsters","why do bankers","can a fart","can a burp","can a hiccup","do sumo wrestlers","do tennis players","when did people start","when did people stop","does swallowing gum","does swallowing mouthwash","how do I shave my","how do i wax my","how do i apply","is it illegal to","is it legal to","how to make someone","how do people make me","my colleagues are","my family are","my friends are","how to give a","how to take a","can maggots","can flies","can rats","my house is","my garden is","are aliens","are solar systems","donald trump looks like","beyonce looks like","cheese makes me","beans make me","how can I learn to","how do i get rid of","I am turning into","can testicles","can the brain","is it cool to","is it uncool to","help my baby is","help my mother is","help my teacher is","what is the sexiest","what is the least sexy","are skeletons","how can I break my","what is the world record for the most","will video games","will computers","will robots","how long does it take to","how quick is it to","how long should it take","I always dream of","I have nightmares about","how do i know its time to","why are men so","why are women so","why are people so","my child smells like","my child looks like","is bolt faster than","hot drinks make me","cold food makes me","is god a","is there a dating site for","is tinder","my budgie","my dog","can fish","what would happen if the world","should my husband","should i let my husband","in the future will","in the past did","i like eating","i like drinking","why do my shoes","why do my shirts","why does my boyfriend never","why does my boyfriend wear","why does my girlfriend want","why does my girlfriend look","why does my wife","do i have a big","do i have a small","will it hurt if i","what will happen if i","will i go to hell for","will i go to heaven if","can the elderly","can babies","is the earth","is the galaxy","how do i know if im","can breasts","do people eat","is it strange to","what is a good amount of","what is a healthy amount of","should i stop","should i start","should i try","why do the irish love","why do the french love","how do i stop","how do i start","is it too early to","is mars","are moustaches","are beards","are ears","are noses","why is the pope","why is the dali lama","can trees","can plants","should i be worried about","should i be happy about","why does my girlfriend always","exercise makes me","why are babies so","why are dogs so","I have never seen","i always see","is it obvious when","should i notice when","where do they keep"]),te=function(e){function t(e){var n;return Object(j.a)(this,t),(n=Object(E.a)(this,Object(C.a)(t).call(this,e))).state={question:""},n}return Object(S.a)(t,e),Object(O.a)(t,[{key:"onContinue",value:function(){P(this,{question:this.state.question,room:this.props.room})}},{key:"onChange",value:function(e,t){this.setState(Object(H.a)({},e,t.target.value))}},{key:"suggestion",value:function(){var e=Math.floor(Math.random()*ee.length);this.setState({question:ee[e]})}},{key:"render",value:function(){var e=this.state.question;return s.a.createElement("div",{className:"questionInputContainer"},s.a.createElement(F,{text:"Question",letterStyle:{fontSize:"50px"}}),s.a.createElement(U,{placeholder:"Search",value:e,onContinue:this.onContinue.bind(this),onChange:this.onChange.bind(this,"question")}),s.a.createElement(D,{help:!0,text:"Give me ideas",onClick:this.suggestion.bind(this)}),s.a.createElement("div",null))}}]),t}(i.Component),ne=Object(c.connect)(function(e){return{users:e.player.users,room:e.player.room,usersSelected:e.player.usersSelected}},function(e){return Object(h.b)({setLoading:_,push:function(e){return Object(l.push)(e)}},e)})(te),ae=(n(118),function(e){function t(e){var n;return Object(j.a)(this,t),(n=Object(E.a)(this,Object(C.a)(t).call(this,e))).state={answer:""},n}return Object(S.a)(t,e),Object(O.a)(t,[{key:"onContinue",value:function(){var e=this,t=this.state.answer,n=this.props,a=n.room,i=n.id;if(t.length){var s={answer:"PASS"===t?t:t.toLowerCase(),room:a,id:i};this.setState({answer:""},function(){!function(e,t){console.log("sending answer",t),o.emit("player-send-answer",t),e.props.push("/waiting")}(e,s)})}}},{key:"giveUp",value:function(){var e=this;this.setState({answer:"PASS"},function(){e.onContinue()})}},{key:"onChange",value:function(e,t){this.setState(Object(H.a)({},e,t.target.value))}},{key:"render",value:function(){var e=this.state.answer;return s.a.createElement("div",{className:"answerInputContainer"},s.a.createElement(F,{text:"Answer",letterStyle:{fontSize:"50px"}}),s.a.createElement(U,{placeholder:"Guess?",value:e,onContinue:this.onContinue.bind(this),onChange:this.onChange.bind(this,"answer")}),s.a.createElement(D,{danger:!0,text:"Pass",onClick:this.giveUp.bind(this)}),s.a.createElement("div",null))}}]),t}(i.Component)),oe=Object(c.connect)(function(e){return{id:e.player.id,room:e.player.room}},function(e){return Object(h.b)({setLoading:_,push:function(e){return Object(l.push)(e)}},e)})(ae),ie=(n(119),function(e){function t(){return Object(j.a)(this,t),Object(E.a)(this,Object(C.a)(t).apply(this,arguments))}return Object(S.a)(t,e),Object(O.a)(t,[{key:"onClick",value:function(){this.props.push("/")}},{key:"render",value:function(){return s.a.createElement("div",{className:"hostDisconnectedContainer"},s.a.createElement(F,{text:"oh no!"}),s.a.createElement("p",{className:"explainer"},"The host seems to have left."),s.a.createElement(D,{text:"New game",onClick:this.onClick.bind(this)}))}}]),t}(i.Component)),se=(n(120),function(e){function t(){return Object(j.a)(this,t),Object(E.a)(this,Object(C.a)(t).apply(this,arguments))}return Object(S.a)(t,e),Object(O.a)(t,[{key:"like",value:function(e){var t=this.props,n=t.likes,a=t.room;if(!n.isSelected){console.log("liking"),function(e){o.emit("player-send-like",e)}({like:n,room:a});var i=Object.assign({},n);i.isSelected=!0,this.props.setLikes(i)}}},{key:"render",value:function(){var e=this.props.likes;return console.log("likes",e),e.answer&&"pass"!==e.answer?s.a.createElement("div",{className:"likeContainer ".concat(e.isSelected&&"isSelected")},s.a.createElement(J,Object.assign({},e,{large:!0})),s.a.createElement(V,{isLike:!0,onClick:this.like.bind(this),correct:e.isSelected,isVisible:!0,primaryText:e.answer||"\u274c",containerStlye:{margin:"0px",marginTop:"-30px",height:"60px"}})):s.a.createElement(Z,null)}}]),t}(i.Component)),re=(n(121),i.Component,n(122),function(e){function t(e){var n;return Object(j.a)(this,t),(n=Object(E.a)(this,Object(C.a)(t).call(this,e))).state={question:""},n}return Object(S.a)(t,e),Object(O.a)(t,[{key:"onContinue",value:function(){P(this,{question:this.state.question,room:this.props.room})}},{key:"onChange",value:function(e,t){this.setState(Object(H.a)({},e,t.target.value))}},{key:"suggestion",value:function(){var e=Math.floor(Math.random()*ee.length);this.setState({question:ee[e]})}},{key:"render",value:function(){var e=this.state.question;return s.a.createElement("div",{className:"questionInputContainer"},s.a.createElement(F,{text:"Question",letterStyle:{fontSize:"50px"}}),s.a.createElement("p",{className:"error"},"That didn't work. Try another"),s.a.createElement(U,{placeholder:"Search",value:e,onContinue:this.onContinue.bind(this),onChange:this.onChange.bind(this,"question")}),s.a.createElement(D,{help:!0,text:"Suggest something",onClick:this.suggestion.bind(this)}),s.a.createElement("div",null))}}]),t}(i.Component)),ce=Object(c.connect)(function(e){return{users:e.player.users,room:e.player.room,usersSelected:e.player.usersSelected}},function(e){return Object(h.b)({setLoading:_,push:function(e){return Object(l.push)(e)}},e)})(re),le=function(e){function t(){return Object(j.a)(this,t),Object(E.a)(this,Object(C.a)(t).apply(this,arguments))}return Object(S.a)(t,e),Object(O.a)(t,[{key:"onClickUser",value:function(e){this.props.toggleUserSelect(e)}},{key:"changeScene",value:function(e){this.props.push(e)}},{key:"componentWillMount",value:function(){this.props.push("/")}},{key:"render",value:function(){var e=this,t=this.props,n=(t.loading,t.room),a=t.likes;return s.a.createElement("div",{className:"playerContainer"},s.a.createElement(M,null),s.a.createElement("div",{className:"routeContentContainer"},s.a.createElement(k.a,{exact:!0,path:"/",render:function(){return s.a.createElement(Q,{push:e.changeScene.bind(e)})}}),s.a.createElement(k.a,{exact:!0,path:"/waiting-start",render:function(){return s.a.createElement(X,{push:e.changeScene.bind(e)})}}),s.a.createElement(k.a,{exact:!0,path:"/waiting",render:function(){return s.a.createElement(Z,null)}}),s.a.createElement(k.a,{exact:!0,path:"/question-input",render:function(){return s.a.createElement(ne,null)}}),s.a.createElement(k.a,{exact:!0,path:"/question-input-error",render:function(){return s.a.createElement(ce,null)}}),s.a.createElement(k.a,{exact:!0,path:"/answer-input",render:function(){return s.a.createElement(oe,null)}}),s.a.createElement(k.a,{exact:!0,path:"/end",render:function(){return s.a.createElement($,{push:e.props.push.bind(e),room:n})}}),s.a.createElement(k.a,{exact:!0,path:"/likes",render:function(){return s.a.createElement(se,{setLikes:e.props.setLikes,likes:a,room:n})}}),s.a.createElement(k.a,{exact:!0,path:"/host-disconnected",render:function(){return s.a.createElement(ie,{push:e.props.push.bind(e)})}})))}}]),t}(i.Component),ue=Object(c.connect)(function(e){return{loading:e.player.loading,room:e.player.room,likes:e.player.likes}},function(e){return Object(h.b)({push:function(e){return Object(l.push)(e)},setLikes:A},e)})(le),he=function(){return s.a.createElement("div",{className:"appContainers"},s.a.createElement("main",null,s.a.createElement(k.a,{path:"/",component:ue})))};n(123);Object(r.render)(s.a.createElement(c.Provider,{store:v},s.a.createElement(l.ConnectedRouter,{history:b},s.a.createElement(s.a.Fragment,null,s.a.createElement(he,null)))),document.getElementById("root"))},35:function(e,t,n){},59:function(e,t,n){e.exports=n(124)}},[[59,1,2]]]);
//# sourceMappingURL=main.6e826926.chunk.js.map