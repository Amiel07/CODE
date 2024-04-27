import{r as f,k as C,y as n,o as d,z as P,v as i,f as r,q as t,u as s,e as c,g as _,j as v,t as g,C as B}from"./@vue-BNcvJdUh.js";import"//unpkg.com/mathlive";import{b as N}from"./@ckeditor-DYCdx3Av.js";import{P as A}from"./PrimaryButton-CtzltoZ6.js";import{_ as u}from"./TextInput-B0165BvM.js";import{T as E}from"./@inertiajs-Ctqp54vJ.js";import{u as I}from"./vue-toastification-DAbHj7YC.js";import{A as Q}from"./AbleProLayout-C8pKILly.js";import{_ as T}from"./InputError-fKYr1iyr.js";import"./vue-BQIRGYU1.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./axios-9PTFF6AP.js";import"./deepmerge-D5vjR_z7.js";import"./qs-B3KJO7My.js";import"./side-channel-Bgx6Pom5.js";import"./get-intrinsic-BKEvijrG.js";import"./es-errors-DzOT6E3C.js";import"./has-symbols-eVqrYdw7.js";import"./has-proto-JnoBQRdH.js";import"./function-bind-BbkWVFrm.js";import"./hasown-DYqjtFKE.js";import"./call-bind-Bt3bzbWQ.js";import"./set-function-length-B5OANX0j.js";import"./define-data-property-DO9o5wXF.js";import"./es-define-property-tzmkNPou.js";import"./gopd-CEkvUycD.js";import"./has-property-descriptors-DphFXkuo.js";import"./object-inspect-CKiJXyHS.js";import"./nprogress-DN-MxXYu.js";import"./lodash.clonedeep-mosj99cq.js";import"./lodash.isequal-D_danmex.js";import"./ApplicationLogo-BDL_RRZn.js";const L={class:"p-4 sm:p-8 bg-white shadow sm:rounded-lg"},M=r("header",null,[r("h2",{class:"text-lg font-medium text-gray-900"}," Update Question "),r("p",{class:"mt-1 text-sm text-gray-600"}," Update Question Information ")],-1),j=r("label",null,"Question",-1),D={key:0},F=r("label",null,"Question",-1),O={key:1},R={class:"mt-4"},$={class:"mt-4"},z={class:"mt-3"},H=r("label",null,"Formula",-1),G={class:"flex items-center"},J=["value"],K={class:"flex items-center gap-4"},Ce={__name:"Edit",props:{questions:Object},setup(w){const b=I();f("");const V=f(null),y=new URLSearchParams(window.location.search);V.value=y.get("assessment_id");const a=w,e=E({assessment_id:a.questions.assessment_id,question:a.questions.question,formula:a.questions.formula,input_variable:a.questions.input_variable,output_variable:a.questions.output_variable,syntax:a.questions.syntax,answer:a.questions.answer,a:null,b:null,c:null,d:null,upper_value:a.questions.upper_value,lower_value:a.questions.lower_value}),q=()=>{e.patch(route("question.update",a.questions.id),{preserveScroll:!0,preserveState:!1,onProgress:()=>{console.log("form submitting")},onSuccess:p=>{b("Record successfully saved",{autoClose:3500,type:"success",transition:"slide",theme:"colored"})},onError:()=>{b("There was an error with your action",{autoClose:3500,type:"error",transition:"slide",theme:"colored"})},onFinish:()=>{}})},x=p=>{e.formula=p.target.value};return C(()=>{console.log(a.questions.assessment)}),(p,o)=>{const k=n("ckeditor"),m=n("v-col"),h=n("v-row"),U=n("math-field"),S=n("v-form");return d(),P(Q,null,{default:i(()=>[r("section",null,[r("div",L,[M,t(S,{onSubmit:B(q,["prevent"]),class:"mt-6 space-y-3"},{default:i(()=>[r("div",null,[j,t(k,{id:"question",class:"block w-full",editor:s(N),style:{height:"420px"},modelValue:s(e).question,"onUpdate:modelValue":o[0]||(o[0]=l=>s(e).question=l)},null,8,["editor","modelValue"]),t(T,{message:s(e).errors.question},null,8,["message"])]),a.questions.assessment.type==="Multiple Choice"?(d(),c("div",D,[F,t(h,{class:"mt-2"},{default:i(()=>[t(m,{cols:"3"},{default:i(()=>[t(u,{id:"a",type:"text",class:"block w-full",modelValue:s(e).a,"onUpdate:modelValue":o[1]||(o[1]=l=>s(e).a=l),required:!0,label:"A","error-message":s(e).errors.a},null,8,["modelValue","error-message"])]),_:1}),t(m,{cols:"3"},{default:i(()=>[t(u,{id:"b",type:"text",class:"block w-full",modelValue:s(e).b,"onUpdate:modelValue":o[2]||(o[2]=l=>s(e).b=l),required:!0,label:"B","error-message":s(e).errors.b},null,8,["modelValue","error-message"])]),_:1}),t(m,{cols:"3"},{default:i(()=>[t(u,{id:"c",type:"text",class:"block w-full",modelValue:s(e).c,"onUpdate:modelValue":o[3]||(o[3]=l=>s(e).c=l),required:!0,label:"C","error-message":s(e).errors.c},null,8,["modelValue","error-message"])]),_:1}),t(m,{cols:"3"},{default:i(()=>[t(u,{id:"d",type:"text",class:"block w-full",modelValue:s(e).d,"onUpdate:modelValue":o[4]||(o[4]=l=>s(e).d=l),required:!0,label:"D","error-message":s(e).errors.d},null,8,["modelValue","error-message"])]),_:1})]),_:1})])):_("",!0),r("div",null,[t(u,{id:"answer",type:"text",class:"block w-full",modelValue:s(e).answer,"onUpdate:modelValue":o[5]||(o[5]=l=>s(e).answer=l),required:!0,label:"Answer","error-message":s(e).errors.answer},null,8,["modelValue","error-message"])]),a.questions.assessment.type==="Problem Solving"?(d(),c("div",O,[r("div",R,[t(u,{id:"input_variable",type:"text",class:"block w-full",modelValue:s(e).input_variable,"onUpdate:modelValue":o[6]||(o[6]=l=>s(e).input_variable=l),required:!0,label:"Input Variable","error-message":s(e).errors.input_variable},null,8,["modelValue","error-message"])]),r("div",null,[t(u,{id:"output_variable",type:"text",class:"block w-full",modelValue:s(e).output_variable,"onUpdate:modelValue":o[7]||(o[7]=l=>s(e).output_variable=l),required:!0,label:"Output Variable","error-message":s(e).errors.output_variable},null,8,["modelValue","error-message"])]),r("div",$,[t(u,{id:"upper_value",type:"text",class:"block w-full",modelValue:s(e).upper_value,"onUpdate:modelValue":o[8]||(o[8]=l=>s(e).upper_value=l),required:!0,label:"Highest Number","error-message":s(e).errors.upper_value},null,8,["modelValue","error-message"])]),r("div",null,[t(u,{id:"lower_value",type:"text",class:"block w-full",modelValue:s(e).lower_value,"onUpdate:modelValue":o[9]||(o[9]=l=>s(e).lower_value=l),required:!0,label:"Lowest Number","error-message":s(e).errors.lower_value},null,8,["modelValue","error-message"])]),r("div",z,[t(u,{id:"syntax",type:"text",class:"block w-full",modelValue:s(e).syntax,"onUpdate:modelValue":o[10]||(o[10]=l=>s(e).syntax=l),required:!0,label:"Syntax","error-message":s(e).errors.syntax},null,8,["modelValue","error-message"])]),r("div",null,[H,t(U,{class:"block w-full h-25",style:{height:"50px !important"},onInput:x},{default:i(()=>[v(g(a.questions.formula),1)]),_:1})])])):_("",!0),r("div",G,[s(e).progress?(d(),c("progress",{key:0,value:s(e).progress.percentage,max:"100",class:"w-full"},g(s(e).progress.percentage)+"% ",9,J)):_("",!0)]),r("div",K,[t(A,{disabled:s(e).processing,class:"w-full"},{default:i(()=>[v("Save")]),_:1},8,["disabled"])])]),_:1})])])]),_:1})}}};export{Ce as default};