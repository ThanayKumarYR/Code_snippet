(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,a){},25:function(e,t,a){e.exports=a.p+"static/media/record-img.6990321b.png"},26:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAaVBMVEUAAAD////m5ub29vYjIyOgoKD39/fz8/Ojo6MlJSUfHx+dnZ0bGxspKSkgICB8fHzc3NwXFxe7u7tjY2Nvb29VVVWWlpbCwsI5OTm0tLQPDw+Kiopqamrs7OxMTExBQUGrq6vR0dGGhoZaLh+lAAACWklEQVR4nO3c7VLqMBSF4W5EzwFFQD2i4vf9X+QBZ2SkNvlj0uWsvM8V7DW7TZq0TdcBAAAAAAAAAAAAAAAAAAAAAAAAAACgnLvr5c0/dREVLSfx4X6mrqSOh1UcLNXF1LA4iS/O1eWUd3kUMOJGXVBp017AOFNXVNjFn+jbqmsqat7v4M5KXVRJ0+8d3FFXVdD8bChgzNV1FTMb7GDEVF1YKf1pwu4qnaUCuow03+bBA5PZYpEMaDLjpzsYj+raipgNTxN7t+raikhfoiZLi0wHPQK23MFTdW1FZDroETAzTXgETD6quQS8TKwmbAJO3QeZ4RW9UcDEit4noH8H3UdR+w4ObPx++quurYjMPOgR0L6DmUHGI6B9B9fuHZynO+ix6bROB4zVpJrN9mKkgJl7sLZxboFcB6ubjJHwSRhwlIgbacCI+9oBn8UBI14qJ7xSB6zeRO1duPdUOaE6X1R/Ya6OFyT8Mf/7UD+WXlVOqJ8PnysnlD/TbGoH7Drlg3f9u3BPurYYI6B0ffg6SkDZGv9tux4pYAP7NA3stTWwX7qLSBcN2L97aqKL9u+AG3iP30YX3b+naaKL9t+1NfBtYgOfQDfwCW0DX+o38LcFXfSQ+j3WKGLmMdxleyqzXnQ5NSL974zJP6S5fVST/4AzKw2Xf7kzw426sHJSk4bPqRGpVb/NqRFdA2ebDK/6fUaaDwPz4ru6psIW/S6eqCsqrr/qv1YXVN7xetHlyfvI1zP33G7CT4dzExfqSupxP/sSAAAAAAAAAAAAAAAAAAAAAAAAAADgt/oPPIkcVNWYeXgAAAAASUVORK5CYII="},29:function(e,t,a){e.exports=a(52)},38:function(e,t,a){},40:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(20),c=a.n(o),i=(a(38),a(4)),l=(a(40),a(21)),u=a(22),d=a(27),s=a(23),m=a(28),p=r.a.createContext(),v=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={message:"",aadio:null,path:"",dL:"",dV:""},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(p.Provider,{value:{state:this.state,setMessage:function(t){return e.setState({message:t})},setAadio:function(t){return e.setState({aadio:t})},setpath:function(t){return e.setState({path:t})},setdL:function(t){return e.setState({dL:t})},setdV:function(t){return e.setState({dV:t})}}},this.props.children))}}]),t}(n.Component),g=a(9),f=a(1),E=a(12),b=a(55);function A(e){function t(){var e=document.getElementById("selectBox"),t=e.options[e.selectedIndex].value;l(t)}var a=Object(n.useState)("sample.c"),o=Object(i.a)(a,2),c=o[0],l=o[1],u={"script.js":{name:"script.js",language:"javascript",value:"//Code your javascript here"},"style.css":{name:"style.css",language:"css",value:"/*Code your css here*/"},"index.html":{name:"index.html",language:"html",value:"\x3c!--Code your html here--\x3e"},"index.json":{name:"index.json",language:"json",value:'{"comment":"type your json here"}'},"foo-bar.ts":{name:"foo-bar.ts",language:"typescript",value:"//Code your typescript here"},"sample.c":{name:"sample.c",language:"Objective-C",value:"//Code your C programe here"},"sample.cpp":{name:"sample.cpp",language:"C++",value:"//Code your C++ programe here"},"a.java":{name:"a.java",language:"java",value:"//Code your JAVA programe here"},"a.py":{name:"a.py",language:"python",value:"#Code your Python programe here"},"a.txt":{name:"a.txt",language:"text",value:"Enter your text here"}}[c],d=Object(n.useRef)(null);return r.a.createElement(p.Consumer,null,function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",null,r.a.createElement("h2",null,"Code snippet"),r.a.createElement(g.b,{to:"/Recording"},r.a.createElement("button",{id:"btn-record",onClick:function(){e.setdV(d.current.getValue()),e.setpath(u.name),e.setdL(u.language)}},"Record"))),r.a.createElement("div",{id:"container1"},r.a.createElement("div",{id:"Monoco"},r.a.createElement("div",{id:"btn-div"},r.a.createElement("div",{id:"select-div"},r.a.createElement("label",{htmlFor:"selectBox"},"Language"),r.a.createElement("div",null,r.a.createElement(b.a,{bg:"rgb(104, 110, 101)",borderColor:"rgb(104, 110, 101)",borderRadius:5,color:"black",name:"selectBox",id:"selectBox",onChange:t,outline:"none",cursor:"pointer",_hover:{bg:"rgb(129, 129, 129)",borderColor:"rgb(129, 129, 129)"}},r.a.createElement("option",{value:"sample.c"},"C"),r.a.createElement("option",{value:"sample.cpp"},"C++"),r.a.createElement("option",{value:"style.css"},"css"),r.a.createElement("option",{value:"index.html"},"html"),r.a.createElement("option",{value:"a.java"},"java"),r.a.createElement("option",{value:"script.js"},"javascript"),r.a.createElement("option",{value:"index.json"},"json"),r.a.createElement("option",{value:"a.py"},"python"),r.a.createElement("option",{value:"a.txt"},"text"),r.a.createElement("option",{value:"foo-bar.ts"},"typescript"))))),r.a.createElement("div",{id:"editor"},r.a.createElement(E.a,{height:"78vh",theme:"hc-black",path:u.name,defaultLanguage:u.language,defaultValue:u.value,onMount:function(e){d.current=e}})))),r.a.createElement(f.a,null))})}var h=a(8),y=a.n(h),x=a(11),w=a(25),j=a.n(w),C=a(26),O=a.n(C);a(18);function S(e){var t,a,o,c,l=function(){void 0===navigator.mediaDevices?(navigator.mediaDevices={},navigator.mediaDevices.getUserMedia=function(e){var t=navigator.webkitGetUserMedia||navigator.mozGetUserMedia;return t?new Promise(function(a,n){t.call(navigator,e,a,n)}):Promise.reject(new Error("getUserMedia is not implemented in this browser"))}):navigator.mediaDevices.enumerateDevices().then(function(e){e.forEach(function(e){console.log(e.kind.toUpperCase(),e.label)})}).catch(function(e){console.log(e.name,e.message)}),navigator.mediaDevices.getUserMedia({audio:!0,video:{facingMode:{exact:"user"},width:395,height:1200}}).then(function(n){var r=document.querySelector("video");"srcObject"in r?r.srcObject=n:r.src=window.URL.createObjectURL(n),r.muted=!1,r.onloadedmetadata=function(e){r.play()};var l=function(){var n=Object(x.a)(y.a.mark(function n(){return y.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:navigator.mediaDevices.getDisplayMedia({video:{mediaSource:"screen"}}).then(function(){var n=Object(x.a)(y.a.mark(function n(r){var l,u,d,s,m,p,v,g;return y.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return g=function(e){console.log("stop called"),e.getAudioTracks()[0].stop(),e.getVideoTracks()[0].stop(),console.log("Stopped, state = "+p.state)},l=r.getVideoTracks(),u=Object(i.a)(l,1),o=u[0],n.next=6,navigator.mediaDevices.getUserMedia({audio:!0}).catch(function(e){throw e});case 6:d=n.sent,s=d.getAudioTracks(),m=Object(i.a)(s,1),a=m[0],t=new MediaStream([o,a]),c=d,p=new MediaRecorder(t),v=[],p.ondataavailable=function(e){v.push(e.data)},p.start(),document.getElementById("btnStop").addEventListener("click",function(a){g(t),setTimeout(function(){var t=new Blob(v,{type:"video/mp4;"}),a=new File([t],"demo.mp4",{type:"video/mp4;"});document.getElementById(e.vid2).src=URL.createObjectURL(a)},1e3);var n=document.getElementById("vid").srcObject.getTracks();n[0].stop(),n.forEach(function(e){return e.stop()})});case 18:case"end":return n.stop()}},n)}));return function(e){return n.apply(this,arguments)}}()).catch(console.error);case 1:case"end":return n.stop()}},n)}));return function(){return n.apply(this,arguments)}}();document.getElementById("divStop").style.zIndex="10",l()}).catch(function(e){console.log(e.name,e.message)})},u=Object(n.useRef)(null);return r.a.createElement(r.a.Fragment,null,r.a.createElement(p.Consumer,null,function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"box"},r.a.createElement(g.b,{to:"/"},r.a.createElement("img",{id:"back",src:O.a,alt:"Back"})),r.a.createElement("div",{id:"record"},r.a.createElement("div",{id:"container"},r.a.createElement("div",{id:"Monoco"},r.a.createElement(E.a,{height:"70vh",theme:"vs-dark",path:e.state.path,defaultLanguage:e.state.dL,defaultValue:e.state.dV,onMount:function(e){u.current=e}}))),r.a.createElement("video",{id:"vid"})),r.a.createElement("div",{id:"divStop"},r.a.createElement(g.b,{to:"/Download"},r.a.createElement("button",{id:"btnStop",onClick:function(){e.setAadio(c)}},"Next","->"))),r.a.createElement("button",{id:"btnStart",onClick:l},r.a.createElement("img",{src:j.a,alt:""}),r.a.createElement("span",null,"Start recording"))),r.a.createElement(f.a,null))}))}function B(e){var t=function(){var e=Object(x.a)(y.a.mark(function e(t){var a,n;return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a=[],(n=new MediaRecorder(t)).ondataavailable=function(e){a.push(e.data)},n.start(),document.getElementById("download-btn").addEventListener("click",function(e){n.stop(),setTimeout(function(){var e=new Blob(a,{type:"video/mp4;"}),t=new File([e],"demo.mp4",{type:"video/mp4"});document.getElementById("success").src=URL.createObjectURL(t)},1e3),setTimeout(function(){var e=document.getElementById("success");e.muted=!1;var t=new XMLHttpRequest;t.open("GET",e.src,!0),t.responseType="blob",t.onload=function(){var e=(window.URL||window.webkitURL).createObjectURL(this.response),t=document.createElement("a");t.href=e,t.target="_blank",t.download="sample.mp4",document.body.appendChild(t),t.click(),document.body.removeChild(t)},t.onerror=function(e){alert("Failed to download picture")},t.send()},2e3)});case 6:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();function a(){var t=document.getElementById("cropCvs").getContext("2d");!function a(){var n=document.getElementById(e.vid2);t.drawImage(n,210,145,950,500,0,0,640,360),setTimeout(a,1e3/30)}()}return r.a.createElement(p.Consumer,null,function(n){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"box"},r.a.createElement("video",{id:e.vid2,height:"360",width:"640",controls:!0,onPlay:a,onEnded:function(){var e=document.getElementById("play-button"),t=e.style;e.innerText="\u25b6",t.padding="7px",t.opacity="0.5"}}),r.a.createElement("button",{id:"play-button",onClick:function(a){var r=document.getElementById(e.vid2),o=document.getElementById("play-button");if(r.paused){var c,l;r.play(),a.target.textContent="\u23f8\ufe0e";var u=o.style;u.padding="0",u.opacity="0.1";var d=document.getElementById("cropCvs").captureStream(),s=n.state.aadio.getAudioTracks();c=Object(i.a)(s,1)[0];var m=d.getVideoTracks();l=Object(i.a)(m,1)[0];var p=new MediaStream([l,c]);t(p)}else{r.pause(),a.target.textContent="\u25b6";var v=o.style;v.padding="7px",v.opacity="0.5"}}},"\u25b6"),r.a.createElement("button",{id:"download-btn"},"Download"),r.a.createElement("canvas",{id:"cropCvs",width:"640",height:"360"}),r.a.createElement("video",{id:"success",playsInline:!0,autoPlay:"autoplay",controls:!0})))})}var L=function(){var e="download-vid",t="#Start Coding here";return r.a.createElement(v,null,r.a.createElement(g.a,null,r.a.createElement(f.d,null,r.a.createElement(f.b,{exact:!0,path:"/",element:r.a.createElement(A,{text_area:"textarea1",text_id:"textarea",text:t})}),r.a.createElement(f.b,{exact:!0,path:"Recording",element:r.a.createElement(S,{text_area:"textarea1",text_id:"textarea",source:"source-vid",vid2:e,text:t})}),r.a.createElement(f.b,{exact:!0,path:"Download",element:r.a.createElement(B,{source:"source-vid",vid2:e})}))))};var k=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,54)).then(function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,o=t.getLCP,c=t.getTTFB;a(e),n(e),r(e),o(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(L,null))),k()}},[[29,3,2]]]);
//# sourceMappingURL=main.25eb33a9.chunk.js.map