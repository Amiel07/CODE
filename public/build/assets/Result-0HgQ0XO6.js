import{A as N}from"./AbleProLayout-C8pKILly.js";import{Z as B,i as C}from"./@inertiajs-Ctqp54vJ.js";import{r as p,k as M,b as R,y as S,o as a,e as c,q as d,u as _,v as r,j as i,t as o,f as e,z as b,F as y,B as V,g as q}from"./@vue-BNcvJdUh.js";import"./ApplicationLogo-BDL_RRZn.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./axios-9PTFF6AP.js";import"./deepmerge-D5vjR_z7.js";import"./@ckeditor-DYCdx3Av.js";import"./vue-BQIRGYU1.js";import"./qs-B3KJO7My.js";import"./side-channel-Bgx6Pom5.js";import"./get-intrinsic-BKEvijrG.js";import"./es-errors-DzOT6E3C.js";import"./has-symbols-eVqrYdw7.js";import"./has-proto-JnoBQRdH.js";import"./function-bind-BbkWVFrm.js";import"./hasown-DYqjtFKE.js";import"./call-bind-Bt3bzbWQ.js";import"./set-function-length-B5OANX0j.js";import"./define-data-property-DO9o5wXF.js";import"./es-define-property-tzmkNPou.js";import"./gopd-CEkvUycD.js";import"./has-property-descriptors-DphFXkuo.js";import"./object-inspect-CKiJXyHS.js";import"./nprogress-DN-MxXYu.js";import"./lodash.clonedeep-mosj99cq.js";import"./lodash.isequal-D_danmex.js";const F={class:"row"},L={class:"col-md-12"},O={class:"p-4 sm:p-8 bg-white shadow sm:rounded-lg"},Y={class:"text-lg font-medium text-gray-900"},E={class:"row d-flex justify-content-center align-items-center"},H={class:"col-md-12 text-center"},I=e("div",{class:"text-h5 font-bold text-uppercase"},"Your score",-1),z={class:"text-h2 font-bold text-uppercase mt-2"},P={class:"text-center"},Z={class:"text-h6 mt-12"},G={class:"text-h6"},J={class:"text-center mt-3"},K={key:0,class:"row"},Q={class:"col-12 mt-3 pa-4"},U={class:"p-4 sm:p-8 bg-white shadow sm:rounded-lg"},W=e("header",null,[e("h2",{class:"text-lg font-medium text-gray-900"}," Assessment Summary ")],-1),X={class:"row d-flex justify-content-center align-items-center pa-4"},$=["innerHTML"],ee=e("strong",null,"Answer: ",-1),te=e("strong",null,"Correct Answer: ",-1),Be={__name:"Result",props:{assessmentResult:Object,assessment:Object,attempts:String,questions:Object,studentAnswers:Object},setup(l){const t=l;p([]);let k=p([]),h=p([]);M(()=>{k.value=t.assessment,h.value=t.assessmentResult});const A=R(()=>{let s=new Date(t.assessment.publishing_date),n=new Date;return s=new Date(s.getFullYear(),s.getMonth(),s.getDate()),n=new Date(n.getFullYear(),n.getMonth(),n.getDate()),console.log(s<=n),console.log(Number(t.assessment.attempts)>=t.attempts),console.log(t.assessment.attempts,t.attempts,s),s<=n&&Number(t.assessment.attempts)>=t.attempts}),T=()=>{localStorage.removeItem("startTime"),localStorage.removeItem("endTime"),location.replace(route("assessment.answer",{assessment_id:t.assessment.id}))};return(s,n)=>{var g;const u=S("v-btn");return a(),c(y,null,[d(_(B),{title:(g=t.assessment)==null?void 0:g.name},null,8,["title"]),d(N,null,{pageTitle:r(()=>{var m;return[i(o((m=t.assessment)==null?void 0:m.name),1)]}),default:r(()=>{var m,v,w,f;return[e("div",F,[e("div",L,[e("div",O,[e("header",null,[e("h2",Y,o((m=t.assessment)==null?void 0:m.name),1)]),e("div",E,[e("div",H,[I,e("div",z,o(((v=_(h))==null?void 0:v.correct)??0)+" / "+o((w=l.questions)==null?void 0:w.length),1)]),e("div",P,[e("div",Z,"Time length "+o(t.assessment.time_limit)+" (minutes)",1),e("div",G,"Number of attempts: "+o(t.attempts),1)]),e("div",J,[A.value?(a(),b(u,{key:0,color:"primary",onClick:T},{default:r(()=>[i("Re-Take exam")]),_:1})):(a(),b(u,{key:1,color:"primary"},{default:r(()=>[i("The maximum number of attempts has been reached / exam is not yet published")]),_:1})),d(_(C),{href:s.route("dashboard.index")},{default:r(()=>[d(u,{color:"danger",class:"text-white ml-3"},{default:r(()=>[i("Exit")]),_:1})]),_:1},8,["href"])])])])])]),((f=t.assessment)==null?void 0:f.isAnswerViewable)===1?(a(),c("div",K,[e("div",Q,[e("div",U,[W,e("div",X,[e("ol",null,[(a(!0),c(y,null,V(l.studentAnswers.questions[0],(D,j,x)=>(a(),c("li",{key:j,class:"mt-2"},[e("div",{innerHTML:D},null,8,$),e("div",null,[ee,i(" "+o(l.studentAnswers.answers[x].answer),1)]),e("div",null,[te,i(" "+o(l.studentAnswers.answers[x].correct_answer),1)])]))),128))])])])])])):q("",!0)]}),_:1})],64)}}};export{Be as default};