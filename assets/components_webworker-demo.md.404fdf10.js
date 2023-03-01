import{V as k,_ as N,c as P,a as x,w as b,d as s,b as I,r as W,o as U,e as l}from"./app.d994eacf.js";const{defineComponent:$}=k,R=$({name:"component-doc",components:{"render-demo-0":function(){const{resolveComponent:i,createVNode:a,createElementVNode:c,withCtx:r,createTextVNode:m,toDisplayString:A,Fragment:f,openBlock:d,createElementBlock:j}=k,M=c("span",{class:"ml-4"},"\u9700\u8981\u5FAA\u73AF\u591A\u5C11\u6B21",-1),S=c("span",{class:"ml-4"},"\u6590\u6CE2\u90A3\u5951\u6570\u5217\u5C3E\u9012\u5F52\u8017\u65F6",-1),V=c("span",{class:"ml-4"},"\u6590\u6CE2\u90A3\u5951\u6570\u5217\u666E\u901A\u9012\u5F52\u8017\u65F6",-1);function O(o,n){const D=i("el-input-number"),e=i("el-row"),C=i("el-button");return d(),j(f,null,[a(e,{class:"mb-4 flex"},{default:r(()=>[a(D,{modelValue:o.number,"onUpdate:modelValue":n[0]||(n[0]=p=>o.number=p),min:1},null,8,["modelValue"]),M]),_:1}),a(e,{class:"mb-4 flex"},{default:r(()=>[a(C,{onClick:n[1]||(n[1]=p=>o.handleClick("fb")),type:"primary",loading:o.fbLoading},{default:r(()=>[m("\u5F00\u59CB\u8BA1\u7B97")]),_:1},8,["loading"]),S,c("span",null,A(o.time)+"ms",1)]),_:1}),a(e,{class:"mb-4 flex"},{default:r(()=>[a(C,{onClick:n[2]||(n[2]=p=>o.handleClick("fb1")),type:"primary",loading:o.fb1Loading},{default:r(()=>[m("\u5F00\u59CB\u8BA1\u7B97")]),_:1},8,["loading"]),V,c("span",null,A(o.time1)+"ms",1)]),_:1})],64)}const{ref:y}=k;return{render:O,...{setup(o,{expose:n}){n();const D=y("0"),e=y("0"),C=y(1),p=y(!1),B=y(!1),g={time:D,time1:e,number:C,fbLoading:p,fb1Loading:B,handleClick:w=>{const v=Array(100).fill(0).map(t=>Math.random()*43),_=[],h=performance.now();console.log("%c \u5F00\u59CB\u591A\u7EBF\u7A0B\u6D4B\u8BD5 ","color:#fff; background:#00897b ");for(let t=0;t<C.value;t++){const u=new Promise((L,X)=>{const F=new Worker(new URL("/vitepress/assets/worker.4774cfef.js",self.location));w=="fb"?(p.value=!0,D.value=0,F.postMessage({function:"fb",data:v[t]})):(B.value=!0,e.value=0,F.postMessage({function:"fb1",data:v[t]})),F.onerror=E=>{console.log(E),L(E.data),F.terminate()},F.onmessage=E=>{L(E.data),F.terminate()}});_.push(u)}console.time("worker\u591A\u7EBF\u7A0B\u6267\u884C\u65F6\u95F4"),Promise.all(_).then(t=>{console.log(t);const u=performance.now();w=="fb"?(p.value=!1,D.value=u-h):(B.value=!1,e.value=u-h),console.timeEnd("worker\u591A\u7EBF\u7A0B\u6267\u884C\u65F6\u95F4")})},ref:y};return Object.defineProperty(g,"__isScriptSetup",{enumerable:!1,value:!0}),g}}}}()}}),Z=JSON.parse('{"title":"worker","description":"","frontmatter":{},"headers":[],"relativePath":"components/webworker-demo.md","lastUpdated":null}');const T=s("h1",{id:"worker",tabindex:"-1"},"worker",-1),J=s("h2",{id:"\u6590\u6CE2\u90A3\u5951\u6570\u5217",tabindex:"-1"},"\u6590\u6CE2\u90A3\u5951\u6570\u5217",-1),q=s("div",null,"\u4F7F\u7528\u6590\u6CE2\u90A3\u5951\u6570\u5217\u5BF9\u6BD4\u5C3E\u9012\u5F52\u548C\u666E\u901A\u9012\u5F52\u7684\u8017\u65F6",-1),z=s("div",{class:"language-vue"},[s("pre",{"v-pre":"",class:"shiki vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"script"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"setup"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF7B72"}},"import"),s("span",{style:{color:"#C9D1D9"}}," { ref } "),s("span",{style:{color:"#FF7B72"}},"from"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#A5D6FF"}},"'vue'")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"time"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"ref"),s("span",{style:{color:"#C9D1D9"}},"("),s("span",{style:{color:"#A5D6FF"}},"'0'"),s("span",{style:{color:"#C9D1D9"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"time1"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"ref"),s("span",{style:{color:"#C9D1D9"}},"("),s("span",{style:{color:"#A5D6FF"}},"'0'"),s("span",{style:{color:"#C9D1D9"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"number"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"ref"),s("span",{style:{color:"#C9D1D9"}},"("),s("span",{style:{color:"#79C0FF"}},"1"),s("span",{style:{color:"#C9D1D9"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"fbLoading"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"ref"),s("span",{style:{color:"#C9D1D9"}},"("),s("span",{style:{color:"#79C0FF"}},"false"),s("span",{style:{color:"#C9D1D9"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"fb1Loading"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"ref"),s("span",{style:{color:"#C9D1D9"}},"("),s("span",{style:{color:"#79C0FF"}},"false"),s("span",{style:{color:"#C9D1D9"}},")")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"handleClick"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," ("),s("span",{style:{color:"#FFA657"}},"fn"),s("span",{style:{color:"#C9D1D9"}},") "),s("span",{style:{color:"#FF7B72"}},"=>"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  "),s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"testData"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"Array"),s("span",{style:{color:"#C9D1D9"}},"("),s("span",{style:{color:"#79C0FF"}},"100"),s("span",{style:{color:"#C9D1D9"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    ."),s("span",{style:{color:"#D2A8FF"}},"fill"),s("span",{style:{color:"#C9D1D9"}},"("),s("span",{style:{color:"#79C0FF"}},"0"),s("span",{style:{color:"#C9D1D9"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    ."),s("span",{style:{color:"#D2A8FF"}},"map"),s("span",{style:{color:"#C9D1D9"}},"(("),s("span",{style:{color:"#FFA657"}},"el"),s("span",{style:{color:"#C9D1D9"}},") "),s("span",{style:{color:"#FF7B72"}},"=>"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"return"),s("span",{style:{color:"#C9D1D9"}}," Math."),s("span",{style:{color:"#D2A8FF"}},"random"),s("span",{style:{color:"#C9D1D9"}},"() "),s("span",{style:{color:"#FF7B72"}},"*"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"43")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    })")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  "),s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"workerList"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," []")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  "),s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"timeStart"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," performance."),s("span",{style:{color:"#D2A8FF"}},"now"),s("span",{style:{color:"#C9D1D9"}},"()")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  console."),s("span",{style:{color:"#D2A8FF"}},"log"),s("span",{style:{color:"#C9D1D9"}},"("),s("span",{style:{color:"#A5D6FF"}},"'%c \u5F00\u59CB\u591A\u7EBF\u7A0B\u6D4B\u8BD5 '"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#A5D6FF"}},"'color:#fff; background:#00897b '"),s("span",{style:{color:"#C9D1D9"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  "),s("span",{style:{color:"#FF7B72"}},"for"),s("span",{style:{color:"#C9D1D9"}}," ("),s("span",{style:{color:"#FF7B72"}},"let"),s("span",{style:{color:"#C9D1D9"}}," i "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"0"),s("span",{style:{color:"#C9D1D9"}},"; i "),s("span",{style:{color:"#FF7B72"}},"<"),s("span",{style:{color:"#C9D1D9"}}," number.value; i"),s("span",{style:{color:"#FF7B72"}},"++"),s("span",{style:{color:"#C9D1D9"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    "),s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"workerItem"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"new"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"Promise"),s("span",{style:{color:"#C9D1D9"}},"(("),s("span",{style:{color:"#FFA657"}},"resolve"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#FFA657"}},"reject"),s("span",{style:{color:"#C9D1D9"}},") "),s("span",{style:{color:"#FF7B72"}},"=>"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"myWorker"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"new"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"Worker"),s("span",{style:{color:"#C9D1D9"}},"("),s("span",{style:{color:"#FF7B72"}},"new"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"URL"),s("span",{style:{color:"#C9D1D9"}},"("),s("span",{style:{color:"#A5D6FF"}},"'/worker.js'"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#FF7B72"}},"import"),s("span",{style:{color:"#C9D1D9"}},"."),s("span",{style:{color:"#79C0FF"}},"meta"),s("span",{style:{color:"#C9D1D9"}},".url))")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"if"),s("span",{style:{color:"#C9D1D9"}}," (fn "),s("span",{style:{color:"#FF7B72"}},"=="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#A5D6FF"}},"'fb'"),s("span",{style:{color:"#C9D1D9"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        fbLoading.value "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"true")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        time.value "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"0")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        myWorker."),s("span",{style:{color:"#D2A8FF"}},"postMessage"),s("span",{style:{color:"#C9D1D9"}},"({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          function: "),s("span",{style:{color:"#A5D6FF"}},"'fb'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          data: testData[i],")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        })")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      } "),s("span",{style:{color:"#FF7B72"}},"else"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        fb1Loading.value "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"true")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        time1.value "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"0")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        myWorker."),s("span",{style:{color:"#D2A8FF"}},"postMessage"),s("span",{style:{color:"#C9D1D9"}},"({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          function: "),s("span",{style:{color:"#A5D6FF"}},"'fb1'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          data: testData[i],")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        })")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      myWorker."),s("span",{style:{color:"#D2A8FF"}},"onerror"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," ("),s("span",{style:{color:"#FFA657"}},"e"),s("span",{style:{color:"#C9D1D9"}},") "),s("span",{style:{color:"#FF7B72"}},"=>"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        console."),s("span",{style:{color:"#D2A8FF"}},"log"),s("span",{style:{color:"#C9D1D9"}},"(e)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        "),s("span",{style:{color:"#D2A8FF"}},"resolve"),s("span",{style:{color:"#C9D1D9"}},"(e.data) "),s("span",{style:{color:"#8B949E"}},"// \u5173\u95EDworker\u7EBF\u7A0B")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        myWorker."),s("span",{style:{color:"#D2A8FF"}},"terminate"),s("span",{style:{color:"#C9D1D9"}},"()")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      myWorker."),s("span",{style:{color:"#D2A8FF"}},"onmessage"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," ("),s("span",{style:{color:"#FFA657"}},"e"),s("span",{style:{color:"#C9D1D9"}},") "),s("span",{style:{color:"#FF7B72"}},"=>"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        "),s("span",{style:{color:"#D2A8FF"}},"resolve"),s("span",{style:{color:"#C9D1D9"}},"(e.data) "),s("span",{style:{color:"#8B949E"}},"// \u5173\u95EDworker\u7EBF\u7A0B")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        myWorker."),s("span",{style:{color:"#D2A8FF"}},"terminate"),s("span",{style:{color:"#C9D1D9"}},"()")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    })")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    workerList."),s("span",{style:{color:"#D2A8FF"}},"push"),s("span",{style:{color:"#C9D1D9"}},"(workerItem)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  console."),s("span",{style:{color:"#D2A8FF"}},"time"),s("span",{style:{color:"#C9D1D9"}},"("),s("span",{style:{color:"#A5D6FF"}},"'worker\u591A\u7EBF\u7A0B\u6267\u884C\u65F6\u95F4'"),s("span",{style:{color:"#C9D1D9"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  "),s("span",{style:{color:"#79C0FF"}},"Promise"),s("span",{style:{color:"#C9D1D9"}},"."),s("span",{style:{color:"#D2A8FF"}},"all"),s("span",{style:{color:"#C9D1D9"}},"(workerList)."),s("span",{style:{color:"#D2A8FF"}},"then"),s("span",{style:{color:"#C9D1D9"}},"(("),s("span",{style:{color:"#FFA657"}},"res"),s("span",{style:{color:"#C9D1D9"}},") "),s("span",{style:{color:"#FF7B72"}},"=>"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    console."),s("span",{style:{color:"#D2A8FF"}},"log"),s("span",{style:{color:"#C9D1D9"}},"(res)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    "),s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"timeEnd"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," performance."),s("span",{style:{color:"#D2A8FF"}},"now"),s("span",{style:{color:"#C9D1D9"}},"()")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    "),s("span",{style:{color:"#FF7B72"}},"if"),s("span",{style:{color:"#C9D1D9"}}," (fn "),s("span",{style:{color:"#FF7B72"}},"=="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#A5D6FF"}},"'fb'"),s("span",{style:{color:"#C9D1D9"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      fbLoading.value "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"false")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      time.value "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," timeEnd "),s("span",{style:{color:"#FF7B72"}},"-"),s("span",{style:{color:"#C9D1D9"}}," timeStart")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    } "),s("span",{style:{color:"#FF7B72"}},"else"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      fb1Loading.value "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"false")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      time1.value "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," timeEnd "),s("span",{style:{color:"#FF7B72"}},"-"),s("span",{style:{color:"#C9D1D9"}}," timeStart")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    console."),s("span",{style:{color:"#D2A8FF"}},"timeEnd"),s("span",{style:{color:"#C9D1D9"}},"("),s("span",{style:{color:"#A5D6FF"}},"'worker\u591A\u7EBF\u7A0B\u6267\u884C\u65F6\u95F4'"),s("span",{style:{color:"#C9D1D9"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  })")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"</"),s("span",{style:{color:"#7EE787"}},"script"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"style"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"lang"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"less"'),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#79C0FF"}},".flex"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  "),s("span",{style:{color:"#79C0FF"}},"display"),s("span",{style:{color:"#C9D1D9"}},": "),s("span",{style:{color:"#79C0FF"}},"flex"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  "),s("span",{style:{color:"#79C0FF"}},"align-items"),s("span",{style:{color:"#C9D1D9"}},": "),s("span",{style:{color:"#79C0FF"}},"center"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#79C0FF"}},".mb-4"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  "),s("span",{style:{color:"#79C0FF"}},"margin-bottom"),s("span",{style:{color:"#C9D1D9"}},": "),s("span",{style:{color:"#79C0FF"}},"10"),s("span",{style:{color:"#FF7B72"}},"px"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#79C0FF"}},".ml-4"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  "),s("span",{style:{color:"#79C0FF"}},"margin-left"),s("span",{style:{color:"#C9D1D9"}},": "),s("span",{style:{color:"#79C0FF"}},"10"),s("span",{style:{color:"#FF7B72"}},"px"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"</"),s("span",{style:{color:"#7EE787"}},"style"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  <"),s("span",{style:{color:"#7EE787"}},"el-row"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"class"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"mb-4 flex"'),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    <"),s("span",{style:{color:"#7EE787"}},"el-input-number"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"v-model"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"number"),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}}," :"),s("span",{style:{color:"#79C0FF"}},"min"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#79C0FF"}},"1"),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    <"),s("span",{style:{color:"#7EE787"}},"span"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"class"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"ml-4"'),s("span",{style:{color:"#C9D1D9"}},">\u9700\u8981\u5FAA\u73AF\u591A\u5C11\u6B21</"),s("span",{style:{color:"#7EE787"}},"span"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  </"),s("span",{style:{color:"#7EE787"}},"el-row"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  <"),s("span",{style:{color:"#7EE787"}},"el-row"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"class"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"mb-4 flex"'),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    <"),s("span",{style:{color:"#7EE787"}},"el-button"),s("span",{style:{color:"#C9D1D9"}}," @"),s("span",{style:{color:"#79C0FF"}},"click"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#D2A8FF"}},"handleClick"),s("span",{style:{color:"#C9D1D9"}},"("),s("span",{style:{color:"#A5D6FF"}},"'fb'"),s("span",{style:{color:"#C9D1D9"}},")"),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"type"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"primary"'),s("span",{style:{color:"#C9D1D9"}}," :"),s("span",{style:{color:"#79C0FF"}},"loading"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"fbLoading"),s("span",{style:{color:"#C9D1D9"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      >\u5F00\u59CB\u8BA1\u7B97</"),s("span",{style:{color:"#7EE787"}},"el-button")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    >")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    <"),s("span",{style:{color:"#7EE787"}},"span"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"class"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"ml-4"'),s("span",{style:{color:"#C9D1D9"}},">\u6590\u6CE2\u90A3\u5951\u6570\u5217\u5C3E\u9012\u5F52\u8017\u65F6</"),s("span",{style:{color:"#7EE787"}},"span"),s("span",{style:{color:"#C9D1D9"}},"><"),s("span",{style:{color:"#7EE787"}},"span"),s("span",{style:{color:"#C9D1D9"}},">{{ time }}ms</"),s("span",{style:{color:"#7EE787"}},"span"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  </"),s("span",{style:{color:"#7EE787"}},"el-row"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  <"),s("span",{style:{color:"#7EE787"}},"el-row"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"class"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"mb-4 flex"'),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    <"),s("span",{style:{color:"#7EE787"}},"el-button"),s("span",{style:{color:"#C9D1D9"}}," @"),s("span",{style:{color:"#79C0FF"}},"click"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#D2A8FF"}},"handleClick"),s("span",{style:{color:"#C9D1D9"}},"("),s("span",{style:{color:"#A5D6FF"}},"'fb1'"),s("span",{style:{color:"#C9D1D9"}},")"),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"type"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"primary"'),s("span",{style:{color:"#C9D1D9"}}," :"),s("span",{style:{color:"#79C0FF"}},"loading"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"fb1Loading"),s("span",{style:{color:"#C9D1D9"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      >\u5F00\u59CB\u8BA1\u7B97</"),s("span",{style:{color:"#7EE787"}},"el-button")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    >")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    <"),s("span",{style:{color:"#7EE787"}},"span"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"class"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"ml-4"'),s("span",{style:{color:"#C9D1D9"}},">\u6590\u6CE2\u90A3\u5951\u6570\u5217\u666E\u901A\u9012\u5F52\u8017\u65F6</"),s("span",{style:{color:"#7EE787"}},"span"),s("span",{style:{color:"#C9D1D9"}},"><"),s("span",{style:{color:"#7EE787"}},"span"),s("span",{style:{color:"#C9D1D9"}},">{{ time1 }}ms</"),s("span",{style:{color:"#7EE787"}},"span"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  </"),s("span",{style:{color:"#7EE787"}},"el-row"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"</"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"})])]),s("pre",{"v-pre":"",class:"shiki vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"script"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"setup"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CF222E"}},"import"),s("span",{style:{color:"#24292F"}}," { ref } "),s("span",{style:{color:"#CF222E"}},"from"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0A3069"}},"'vue'")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"time"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"ref"),s("span",{style:{color:"#24292F"}},"("),s("span",{style:{color:"#0A3069"}},"'0'"),s("span",{style:{color:"#24292F"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"time1"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"ref"),s("span",{style:{color:"#24292F"}},"("),s("span",{style:{color:"#0A3069"}},"'0'"),s("span",{style:{color:"#24292F"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"number"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"ref"),s("span",{style:{color:"#24292F"}},"("),s("span",{style:{color:"#0550AE"}},"1"),s("span",{style:{color:"#24292F"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"fbLoading"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"ref"),s("span",{style:{color:"#24292F"}},"("),s("span",{style:{color:"#0550AE"}},"false"),s("span",{style:{color:"#24292F"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"fb1Loading"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"ref"),s("span",{style:{color:"#24292F"}},"("),s("span",{style:{color:"#0550AE"}},"false"),s("span",{style:{color:"#24292F"}},")")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"handleClick"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," ("),s("span",{style:{color:"#953800"}},"fn"),s("span",{style:{color:"#24292F"}},") "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"testData"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"Array"),s("span",{style:{color:"#24292F"}},"("),s("span",{style:{color:"#0550AE"}},"100"),s("span",{style:{color:"#24292F"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    ."),s("span",{style:{color:"#8250DF"}},"fill"),s("span",{style:{color:"#24292F"}},"("),s("span",{style:{color:"#0550AE"}},"0"),s("span",{style:{color:"#24292F"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    ."),s("span",{style:{color:"#8250DF"}},"map"),s("span",{style:{color:"#24292F"}},"(("),s("span",{style:{color:"#953800"}},"el"),s("span",{style:{color:"#24292F"}},") "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"return"),s("span",{style:{color:"#24292F"}}," Math."),s("span",{style:{color:"#8250DF"}},"random"),s("span",{style:{color:"#24292F"}},"() "),s("span",{style:{color:"#CF222E"}},"*"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"43")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    })")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"workerList"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," []")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"timeStart"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," performance."),s("span",{style:{color:"#8250DF"}},"now"),s("span",{style:{color:"#24292F"}},"()")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  console."),s("span",{style:{color:"#8250DF"}},"log"),s("span",{style:{color:"#24292F"}},"("),s("span",{style:{color:"#0A3069"}},"'%c \u5F00\u59CB\u591A\u7EBF\u7A0B\u6D4B\u8BD5 '"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#0A3069"}},"'color:#fff; background:#00897b '"),s("span",{style:{color:"#24292F"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#CF222E"}},"for"),s("span",{style:{color:"#24292F"}}," ("),s("span",{style:{color:"#CF222E"}},"let"),s("span",{style:{color:"#24292F"}}," i "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"0"),s("span",{style:{color:"#24292F"}},"; i "),s("span",{style:{color:"#CF222E"}},"<"),s("span",{style:{color:"#24292F"}}," number.value; i"),s("span",{style:{color:"#CF222E"}},"++"),s("span",{style:{color:"#24292F"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    "),s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"workerItem"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"new"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"Promise"),s("span",{style:{color:"#24292F"}},"(("),s("span",{style:{color:"#953800"}},"resolve"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#953800"}},"reject"),s("span",{style:{color:"#24292F"}},") "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"myWorker"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"new"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"Worker"),s("span",{style:{color:"#24292F"}},"("),s("span",{style:{color:"#CF222E"}},"new"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"URL"),s("span",{style:{color:"#24292F"}},"("),s("span",{style:{color:"#0A3069"}},"'/worker.js'"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#CF222E"}},"import"),s("span",{style:{color:"#24292F"}},"."),s("span",{style:{color:"#0550AE"}},"meta"),s("span",{style:{color:"#24292F"}},".url))")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"if"),s("span",{style:{color:"#24292F"}}," (fn "),s("span",{style:{color:"#CF222E"}},"=="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0A3069"}},"'fb'"),s("span",{style:{color:"#24292F"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        fbLoading.value "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"true")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        time.value "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"0")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        myWorker."),s("span",{style:{color:"#8250DF"}},"postMessage"),s("span",{style:{color:"#24292F"}},"({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          function: "),s("span",{style:{color:"#0A3069"}},"'fb'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          data: testData[i],")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        })")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      } "),s("span",{style:{color:"#CF222E"}},"else"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        fb1Loading.value "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"true")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        time1.value "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"0")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        myWorker."),s("span",{style:{color:"#8250DF"}},"postMessage"),s("span",{style:{color:"#24292F"}},"({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          function: "),s("span",{style:{color:"#0A3069"}},"'fb1'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          data: testData[i],")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        })")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      myWorker."),s("span",{style:{color:"#8250DF"}},"onerror"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," ("),s("span",{style:{color:"#953800"}},"e"),s("span",{style:{color:"#24292F"}},") "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        console."),s("span",{style:{color:"#8250DF"}},"log"),s("span",{style:{color:"#24292F"}},"(e)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        "),s("span",{style:{color:"#8250DF"}},"resolve"),s("span",{style:{color:"#24292F"}},"(e.data) "),s("span",{style:{color:"#6E7781"}},"// \u5173\u95EDworker\u7EBF\u7A0B")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        myWorker."),s("span",{style:{color:"#8250DF"}},"terminate"),s("span",{style:{color:"#24292F"}},"()")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      myWorker."),s("span",{style:{color:"#8250DF"}},"onmessage"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," ("),s("span",{style:{color:"#953800"}},"e"),s("span",{style:{color:"#24292F"}},") "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        "),s("span",{style:{color:"#8250DF"}},"resolve"),s("span",{style:{color:"#24292F"}},"(e.data) "),s("span",{style:{color:"#6E7781"}},"// \u5173\u95EDworker\u7EBF\u7A0B")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        myWorker."),s("span",{style:{color:"#8250DF"}},"terminate"),s("span",{style:{color:"#24292F"}},"()")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    })")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    workerList."),s("span",{style:{color:"#8250DF"}},"push"),s("span",{style:{color:"#24292F"}},"(workerItem)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  console."),s("span",{style:{color:"#8250DF"}},"time"),s("span",{style:{color:"#24292F"}},"("),s("span",{style:{color:"#0A3069"}},"'worker\u591A\u7EBF\u7A0B\u6267\u884C\u65F6\u95F4'"),s("span",{style:{color:"#24292F"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#0550AE"}},"Promise"),s("span",{style:{color:"#24292F"}},"."),s("span",{style:{color:"#8250DF"}},"all"),s("span",{style:{color:"#24292F"}},"(workerList)."),s("span",{style:{color:"#8250DF"}},"then"),s("span",{style:{color:"#24292F"}},"(("),s("span",{style:{color:"#953800"}},"res"),s("span",{style:{color:"#24292F"}},") "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    console."),s("span",{style:{color:"#8250DF"}},"log"),s("span",{style:{color:"#24292F"}},"(res)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    "),s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"timeEnd"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," performance."),s("span",{style:{color:"#8250DF"}},"now"),s("span",{style:{color:"#24292F"}},"()")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    "),s("span",{style:{color:"#CF222E"}},"if"),s("span",{style:{color:"#24292F"}}," (fn "),s("span",{style:{color:"#CF222E"}},"=="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0A3069"}},"'fb'"),s("span",{style:{color:"#24292F"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      fbLoading.value "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"false")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      time.value "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," timeEnd "),s("span",{style:{color:"#CF222E"}},"-"),s("span",{style:{color:"#24292F"}}," timeStart")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    } "),s("span",{style:{color:"#CF222E"}},"else"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      fb1Loading.value "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"false")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      time1.value "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," timeEnd "),s("span",{style:{color:"#CF222E"}},"-"),s("span",{style:{color:"#24292F"}}," timeStart")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    console."),s("span",{style:{color:"#8250DF"}},"timeEnd"),s("span",{style:{color:"#24292F"}},"("),s("span",{style:{color:"#0A3069"}},"'worker\u591A\u7EBF\u7A0B\u6267\u884C\u65F6\u95F4'"),s("span",{style:{color:"#24292F"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  })")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"script"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"style"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"lang"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"less"'),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#0550AE"}},".flex"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#0550AE"}},"display"),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#0550AE"}},"flex"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#0550AE"}},"align-items"),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#0550AE"}},"center"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#0550AE"}},".mb-4"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#0550AE"}},"margin-bottom"),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#0550AE"}},"10"),s("span",{style:{color:"#CF222E"}},"px"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#0550AE"}},".ml-4"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#0550AE"}},"margin-left"),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#0550AE"}},"10"),s("span",{style:{color:"#CF222E"}},"px"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"style"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  <"),s("span",{style:{color:"#116329"}},"el-row"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"class"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"mb-4 flex"'),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    <"),s("span",{style:{color:"#116329"}},"el-input-number"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"v-model"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"number"),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}}," :"),s("span",{style:{color:"#0550AE"}},"min"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#0550AE"}},"1"),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    <"),s("span",{style:{color:"#116329"}},"span"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"class"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"ml-4"'),s("span",{style:{color:"#24292F"}},">\u9700\u8981\u5FAA\u73AF\u591A\u5C11\u6B21</"),s("span",{style:{color:"#116329"}},"span"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  </"),s("span",{style:{color:"#116329"}},"el-row"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  <"),s("span",{style:{color:"#116329"}},"el-row"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"class"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"mb-4 flex"'),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    <"),s("span",{style:{color:"#116329"}},"el-button"),s("span",{style:{color:"#24292F"}}," @"),s("span",{style:{color:"#0550AE"}},"click"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#8250DF"}},"handleClick"),s("span",{style:{color:"#24292F"}},"("),s("span",{style:{color:"#0A3069"}},"'fb'"),s("span",{style:{color:"#24292F"}},")"),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"type"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"primary"'),s("span",{style:{color:"#24292F"}}," :"),s("span",{style:{color:"#0550AE"}},"loading"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"fbLoading"),s("span",{style:{color:"#24292F"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      >\u5F00\u59CB\u8BA1\u7B97</"),s("span",{style:{color:"#116329"}},"el-button")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    >")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    <"),s("span",{style:{color:"#116329"}},"span"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"class"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"ml-4"'),s("span",{style:{color:"#24292F"}},">\u6590\u6CE2\u90A3\u5951\u6570\u5217\u5C3E\u9012\u5F52\u8017\u65F6</"),s("span",{style:{color:"#116329"}},"span"),s("span",{style:{color:"#24292F"}},"><"),s("span",{style:{color:"#116329"}},"span"),s("span",{style:{color:"#24292F"}},">{{ time }}ms</"),s("span",{style:{color:"#116329"}},"span"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  </"),s("span",{style:{color:"#116329"}},"el-row"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  <"),s("span",{style:{color:"#116329"}},"el-row"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"class"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"mb-4 flex"'),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    <"),s("span",{style:{color:"#116329"}},"el-button"),s("span",{style:{color:"#24292F"}}," @"),s("span",{style:{color:"#0550AE"}},"click"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#8250DF"}},"handleClick"),s("span",{style:{color:"#24292F"}},"("),s("span",{style:{color:"#0A3069"}},"'fb1'"),s("span",{style:{color:"#24292F"}},")"),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"type"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"primary"'),s("span",{style:{color:"#24292F"}}," :"),s("span",{style:{color:"#0550AE"}},"loading"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"fb1Loading"),s("span",{style:{color:"#24292F"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      >\u5F00\u59CB\u8BA1\u7B97</"),s("span",{style:{color:"#116329"}},"el-button")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    >")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    <"),s("span",{style:{color:"#116329"}},"span"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"class"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"ml-4"'),s("span",{style:{color:"#24292F"}},">\u6590\u6CE2\u90A3\u5951\u6570\u5217\u666E\u901A\u9012\u5F52\u8017\u65F6</"),s("span",{style:{color:"#116329"}},"span"),s("span",{style:{color:"#24292F"}},"><"),s("span",{style:{color:"#116329"}},"span"),s("span",{style:{color:"#24292F"}},">{{ time1 }}ms</"),s("span",{style:{color:"#116329"}},"span"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  </"),s("span",{style:{color:"#116329"}},"el-row"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"})])])],-1),G=I(`<h2 id="worker-js-\u4EE3\u7801" tabindex="-1">worker.js \u4EE3\u7801</h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#FF7B72;">const</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">funcObj</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> {</span></span>
<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#D2A8FF;">fb</span><span style="color:#C9D1D9;">: (</span><span style="color:#FFA657;">n</span><span style="color:#C9D1D9;">, </span><span style="color:#FFA657;">prev</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">1</span><span style="color:#C9D1D9;">, </span><span style="color:#FFA657;">next</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">1</span><span style="color:#C9D1D9;">) </span><span style="color:#FF7B72;">=&gt;</span><span style="color:#C9D1D9;"> {</span></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#8B949E;">// \u5C3E\u9012\u5F52</span></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#FF7B72;">if</span><span style="color:#C9D1D9;"> (n </span><span style="color:#FF7B72;">&lt;=</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">2</span><span style="color:#C9D1D9;">) {</span></span>
<span class="line"><span style="color:#C9D1D9;">      </span><span style="color:#FF7B72;">return</span><span style="color:#C9D1D9;"> next</span></span>
<span class="line"><span style="color:#C9D1D9;">    }</span></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#FF7B72;">return</span><span style="color:#C9D1D9;"> funcObj.</span><span style="color:#D2A8FF;">fb</span><span style="color:#C9D1D9;">(n </span><span style="color:#FF7B72;">-</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">1</span><span style="color:#C9D1D9;">, next, prev </span><span style="color:#FF7B72;">+</span><span style="color:#C9D1D9;"> next)</span></span>
<span class="line"><span style="color:#C9D1D9;">  },</span></span>
<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#D2A8FF;">fb1</span><span style="color:#C9D1D9;">: (</span><span style="color:#FFA657;">n</span><span style="color:#C9D1D9;">) </span><span style="color:#FF7B72;">=&gt;</span><span style="color:#C9D1D9;"> {</span></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#FF7B72;">if</span><span style="color:#C9D1D9;"> (n </span><span style="color:#FF7B72;">&lt;=</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">2</span><span style="color:#C9D1D9;">) {</span></span>
<span class="line"><span style="color:#C9D1D9;">      </span><span style="color:#FF7B72;">return</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">1</span></span>
<span class="line"><span style="color:#C9D1D9;">    }</span></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#FF7B72;">return</span><span style="color:#C9D1D9;"> funcObj.</span><span style="color:#D2A8FF;">fb1</span><span style="color:#C9D1D9;">(n </span><span style="color:#FF7B72;">-</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">2</span><span style="color:#C9D1D9;">) </span><span style="color:#FF7B72;">+</span><span style="color:#C9D1D9;"> funcObj.</span><span style="color:#D2A8FF;">fb1</span><span style="color:#C9D1D9;">(n </span><span style="color:#FF7B72;">-</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">1</span><span style="color:#C9D1D9;">)</span></span>
<span class="line"><span style="color:#C9D1D9;">  },</span></span>
<span class="line"><span style="color:#C9D1D9;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;">// onmessage\u4E8B\u4EF6</span></span>
<span class="line"><span style="color:#D2A8FF;">onmessage</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">function</span><span style="color:#C9D1D9;"> (</span><span style="color:#FFA657;">e</span><span style="color:#C9D1D9;">) {</span></span>
<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#FF7B72;">const</span><span style="color:#C9D1D9;"> { </span><span style="color:#79C0FF;">data</span><span style="color:#C9D1D9;"> } </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> e</span></span>
<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#FF7B72;">const</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">res</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> funcObj[data.function](data.data)</span></span>
<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#8B949E;">// \u5C06\u83B7\u53D6\u7684\u6570\u636E\u901A\u8FC7postMessage\u53D1\u9001\u5230\u4E3B\u7EBF\u7A0B</span></span>
<span class="line"><span style="color:#C9D1D9;">  self.</span><span style="color:#D2A8FF;">postMessage</span><span style="color:#C9D1D9;">({</span></span>
<span class="line"><span style="color:#C9D1D9;">    data: res,</span></span>
<span class="line"><span style="color:#C9D1D9;">    name: </span><span style="color:#A5D6FF;">&#39;worker test&#39;</span><span style="color:#C9D1D9;">,</span></span>
<span class="line"><span style="color:#C9D1D9;">  })</span></span>
<span class="line"><span style="color:#C9D1D9;">  self.</span><span style="color:#D2A8FF;">close</span><span style="color:#C9D1D9;">()</span></span>
<span class="line"><span style="color:#C9D1D9;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#CF222E;">const</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">funcObj</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> {</span></span>
<span class="line"><span style="color:#24292F;">  </span><span style="color:#8250DF;">fb</span><span style="color:#24292F;">: (</span><span style="color:#953800;">n</span><span style="color:#24292F;">, </span><span style="color:#953800;">prev</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">1</span><span style="color:#24292F;">, </span><span style="color:#953800;">next</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">1</span><span style="color:#24292F;">) </span><span style="color:#CF222E;">=&gt;</span><span style="color:#24292F;"> {</span></span>
<span class="line"><span style="color:#24292F;">    </span><span style="color:#6E7781;">// \u5C3E\u9012\u5F52</span></span>
<span class="line"><span style="color:#24292F;">    </span><span style="color:#CF222E;">if</span><span style="color:#24292F;"> (n </span><span style="color:#CF222E;">&lt;=</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">2</span><span style="color:#24292F;">) {</span></span>
<span class="line"><span style="color:#24292F;">      </span><span style="color:#CF222E;">return</span><span style="color:#24292F;"> next</span></span>
<span class="line"><span style="color:#24292F;">    }</span></span>
<span class="line"><span style="color:#24292F;">    </span><span style="color:#CF222E;">return</span><span style="color:#24292F;"> funcObj.</span><span style="color:#8250DF;">fb</span><span style="color:#24292F;">(n </span><span style="color:#CF222E;">-</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">1</span><span style="color:#24292F;">, next, prev </span><span style="color:#CF222E;">+</span><span style="color:#24292F;"> next)</span></span>
<span class="line"><span style="color:#24292F;">  },</span></span>
<span class="line"><span style="color:#24292F;">  </span><span style="color:#8250DF;">fb1</span><span style="color:#24292F;">: (</span><span style="color:#953800;">n</span><span style="color:#24292F;">) </span><span style="color:#CF222E;">=&gt;</span><span style="color:#24292F;"> {</span></span>
<span class="line"><span style="color:#24292F;">    </span><span style="color:#CF222E;">if</span><span style="color:#24292F;"> (n </span><span style="color:#CF222E;">&lt;=</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">2</span><span style="color:#24292F;">) {</span></span>
<span class="line"><span style="color:#24292F;">      </span><span style="color:#CF222E;">return</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">1</span></span>
<span class="line"><span style="color:#24292F;">    }</span></span>
<span class="line"><span style="color:#24292F;">    </span><span style="color:#CF222E;">return</span><span style="color:#24292F;"> funcObj.</span><span style="color:#8250DF;">fb1</span><span style="color:#24292F;">(n </span><span style="color:#CF222E;">-</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">2</span><span style="color:#24292F;">) </span><span style="color:#CF222E;">+</span><span style="color:#24292F;"> funcObj.</span><span style="color:#8250DF;">fb1</span><span style="color:#24292F;">(n </span><span style="color:#CF222E;">-</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">1</span><span style="color:#24292F;">)</span></span>
<span class="line"><span style="color:#24292F;">  },</span></span>
<span class="line"><span style="color:#24292F;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6E7781;">// onmessage\u4E8B\u4EF6</span></span>
<span class="line"><span style="color:#8250DF;">onmessage</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">function</span><span style="color:#24292F;"> (</span><span style="color:#953800;">e</span><span style="color:#24292F;">) {</span></span>
<span class="line"><span style="color:#24292F;">  </span><span style="color:#CF222E;">const</span><span style="color:#24292F;"> { </span><span style="color:#0550AE;">data</span><span style="color:#24292F;"> } </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> e</span></span>
<span class="line"><span style="color:#24292F;">  </span><span style="color:#CF222E;">const</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">res</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> funcObj[data.function](data.data)</span></span>
<span class="line"><span style="color:#24292F;">  </span><span style="color:#6E7781;">// \u5C06\u83B7\u53D6\u7684\u6570\u636E\u901A\u8FC7postMessage\u53D1\u9001\u5230\u4E3B\u7EBF\u7A0B</span></span>
<span class="line"><span style="color:#24292F;">  self.</span><span style="color:#8250DF;">postMessage</span><span style="color:#24292F;">({</span></span>
<span class="line"><span style="color:#24292F;">    data: res,</span></span>
<span class="line"><span style="color:#24292F;">    name: </span><span style="color:#0A3069;">&#39;worker test&#39;</span><span style="color:#24292F;">,</span></span>
<span class="line"><span style="color:#24292F;">  })</span></span>
<span class="line"><span style="color:#24292F;">  self.</span><span style="color:#8250DF;">close</span><span style="color:#24292F;">()</span></span>
<span class="line"><span style="color:#24292F;">}</span></span>
<span class="line"></span></code></pre></div>`,2);function H(i,a,c,r,m,A){const f=W("render-demo-0"),d=W("demo");return U(),P("div",null,[T,J,x(d,{customClass:"undefined",sourceCode:`<script setup>
import { ref } from 'vue'

const time = ref('0')
const time1 = ref('0')
const number = ref(1)
const fbLoading = ref(false)
const fb1Loading = ref(false)

const handleClick = (fn) => {
  const testData = Array(100)
    .fill(0)
    .map((el) => {
      return Math.random() * 43
    })
  const workerList = []
  const timeStart = performance.now()
  console.log('%c \u5F00\u59CB\u591A\u7EBF\u7A0B\u6D4B\u8BD5 ', 'color:#fff; background:#00897b ')
  for (let i = 0; i < number.value; i++) {
    const workerItem = new Promise((resolve, reject) => {
      const myWorker = new Worker(new URL('/worker.js', i<wbr>mport.meta.url))
      if (fn == 'fb') {
        fbLoading.value = true
        time.value = 0
        myWorker.postMessage({
          function: 'fb',
          data: testData[i],
        })
      } else {
        fb1Loading.value = true
        time1.value = 0
        myWorker.postMessage({
          function: 'fb1',
          data: testData[i],
        })
      }
      myWorker.onerror = (e) => {
        console.log(e)
        resolve(e.data) // \u5173\u95EDworker\u7EBF\u7A0B
        myWorker.terminate()
      }
      myWorker.onmessage = (e) => {
        resolve(e.data) // \u5173\u95EDworker\u7EBF\u7A0B
        myWorker.terminate()
      }
    })
    workerList.push(workerItem)
  }
  console.time('worker\u591A\u7EBF\u7A0B\u6267\u884C\u65F6\u95F4')
  Promise.all(workerList).then((res) => {
    console.log(res)
    const timeEnd = performance.now()
    if (fn == 'fb') {
      fbLoading.value = false
      time.value = timeEnd - timeStart
    } else {
      fb1Loading.value = false
      time1.value = timeEnd - timeStart
    }
    console.timeEnd('worker\u591A\u7EBF\u7A0B\u6267\u884C\u65F6\u95F4')
  })
}
<\/script>

<style lang="less">
.flex {
  display: flex;
  align-items: center;
}

.mb-4 {
  margin-bottom: 10px;
}

.ml-4 {
  margin-left: 10px;
}
</style>

<template>
  <el-row class="mb-4 flex">
    <el-input-number v-model="number" :min="1" />
    <span class="ml-4">\u9700\u8981\u5FAA\u73AF\u591A\u5C11\u6B21</span>
  </el-row>

  <el-row class="mb-4 flex">
    <el-button @click="handleClick('fb')" type="primary" :loading="fbLoading"
      >\u5F00\u59CB\u8BA1\u7B97</el-button
    >
    <span class="ml-4">\u6590\u6CE2\u90A3\u5951\u6570\u5217\u5C3E\u9012\u5F52\u8017\u65F6</span><span>{{ time }}ms</span>
  </el-row>

  <el-row class="mb-4 flex">
    <el-button @click="handleClick('fb1')" type="primary" :loading="fb1Loading"
      >\u5F00\u59CB\u8BA1\u7B97</el-button
    >
    <span class="ml-4">\u6590\u6CE2\u90A3\u5951\u6570\u5217\u666E\u901A\u9012\u5F52\u8017\u65F6</span><span>{{ time1 }}ms</span>
  </el-row>
</template>
`},{description:b(()=>[q]),highlight:b(()=>[z]),default:b(()=>[x(f)]),_:1}),G])}const ss=N(R,[["render",H]]);export{Z as __pageData,ss as default};
