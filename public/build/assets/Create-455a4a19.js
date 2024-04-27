import{r as f,y as n,o as m,z as P,v as u,f as t,q as s,u as l,e as p,g as c,j as g,t as V,C as B}from"./@vue-7516ecd3.js";import"//unpkg.com/mathlive";import{b as N}from"./@ckeditor-7eab192b.js";import{P as A}from"./PrimaryButton-b9dd52aa.js";import{_ as a}from"./TextInput-f13f440a.js";import{T as I}from"./@inertiajs-21fbd498.js";import{u as T}from"./vue-toastification-507e47a9.js";import{A as E}from"./AbleProLayout-d06b40f6.js";import{_ as L}from"./InputError-f81f8124.js";import"./vue-6cd98a9a.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./axios-4d564c32.js";import"./deepmerge-73d550e5.js";import"./qs-e1b0650f.js";import"./side-channel-afb193f6.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-4cdc4b9e.js";import"./nprogress-97b5e360.js";import"./lodash.clonedeep-9c7c19eb.js";import"./lodash.isequal-9e40f450.js";import"./ApplicationLogo-4fddd580.js";const Q={class:"p-4 sm:p-8 bg-white shadow sm:rounded-lg"},j=t("header",null,[t("h2",{class:"text-lg font-medium text-gray-900"}," Create Question "),t("p",{class:"mt-1 text-sm text-gray-600"}," Input your questions here ")],-1),D=t("label",null,"Question",-1),F={key:0},M=t("label",null,"Question",-1),O={key:1},R={class:"mt-4"},$={class:"mt-4"},z={class:"mt-3"},H=t("label",null,"Formula",-1),G={class:"flex items-center"},J=["value"],K={class:"flex items-center gap-4"},Se={__name:"Create",props:{assessment:Object},setup(w){const _=T(),y=f(""),b=f(null),x=new URLSearchParams(window.location.search);b.value=x.get("assessment_id");const v=w,e=I({assessment_id:null,question:null,formula:null,input_variable:null,output_variable:null,syntax:null,answer:null,a:null,b:null,c:null,d:null,upper_value:0,lower_value:100}),k=()=>{e.assessment_id=b.value,e.post(route("question.store"),{preserveScroll:!0,preserveState:!1,onProgress:()=>{console.log("form submitting")},onSuccess:d=>{_("Record successfully saved",{autoClose:3500,type:"success",transition:"slide",theme:"colored"})},onError:()=>{_("There was an error with your action",{autoClose:3500,type:"error",transition:"slide",theme:"colored"})},onFinish:()=>{}})},q=d=>{e.formula=d.target.value};return(d,o)=>{const h=n("ckeditor"),i=n("v-col"),U=n("v-row"),C=n("math-field"),S=n("v-form");return m(),P(E,null,{default:u(()=>[t("section",null,[t("div",Q,[j,s(S,{onSubmit:B(k,["prevent"]),class:"mt-6 space-y-3"},{default:u(()=>[t("div",null,[D,s(h,{id:"question",class:"block w-full",editor:l(N),style:{height:"420px"},modelValue:l(e).question,"onUpdate:modelValue":o[0]||(o[0]=r=>l(e).question=r)},null,8,["editor","modelValue"]),s(L,{message:l(e).errors.question},null,8,["message"])]),v.assessment.type==="Multiple Choice"?(m(),p("div",F,[M,s(U,{class:"mt-2"},{default:u(()=>[s(i,{cols:"3"},{default:u(()=>[s(a,{id:"a",type:"text",class:"block w-full",modelValue:l(e).a,"onUpdate:modelValue":o[1]||(o[1]=r=>l(e).a=r),required:!0,label:"A","error-message":l(e).errors.a},null,8,["modelValue","error-message"])]),_:1}),s(i,{cols:"3"},{default:u(()=>[s(a,{id:"b",type:"text",class:"block w-full",modelValue:l(e).b,"onUpdate:modelValue":o[2]||(o[2]=r=>l(e).b=r),required:!0,label:"B","error-message":l(e).errors.b},null,8,["modelValue","error-message"])]),_:1}),s(i,{cols:"3"},{default:u(()=>[s(a,{id:"c",type:"text",class:"block w-full",modelValue:l(e).c,"onUpdate:modelValue":o[3]||(o[3]=r=>l(e).c=r),required:!0,label:"C","error-message":l(e).errors.c},null,8,["modelValue","error-message"])]),_:1}),s(i,{cols:"3"},{default:u(()=>[s(a,{id:"d",type:"text",class:"block w-full",modelValue:l(e).d,"onUpdate:modelValue":o[4]||(o[4]=r=>l(e).d=r),required:!0,label:"D","error-message":l(e).errors.d},null,8,["modelValue","error-message"])]),_:1})]),_:1})])):c("",!0),t("div",null,[s(a,{id:"answer",type:"text",class:"block w-full",modelValue:l(e).answer,"onUpdate:modelValue":o[5]||(o[5]=r=>l(e).answer=r),required:!0,label:"Answer","error-message":l(e).errors.answer},null,8,["modelValue","error-message"])]),v.assessment.type==="Problem Solving"?(m(),p("div",O,[t("div",R,[s(a,{id:"input_variable",type:"text",class:"block w-full",modelValue:l(e).input_variable,"onUpdate:modelValue":o[6]||(o[6]=r=>l(e).input_variable=r),required:!0,label:"Input Variable","error-message":l(e).errors.input_variable},null,8,["modelValue","error-message"])]),t("div",null,[s(a,{id:"output_variable",type:"text",class:"block w-full",modelValue:l(e).output_variable,"onUpdate:modelValue":o[7]||(o[7]=r=>l(e).output_variable=r),required:!0,label:"Output Variable","error-message":l(e).errors.output_variable},null,8,["modelValue","error-message"])]),t("div",$,[s(a,{id:"upper_value",type:"text",class:"block w-full",modelValue:l(e).upper_value,"onUpdate:modelValue":o[8]||(o[8]=r=>l(e).upper_value=r),required:!0,label:"Highest Number","error-message":l(e).errors.upper_value},null,8,["modelValue","error-message"])]),t("div",null,[s(a,{id:"lower_value",type:"text",class:"block w-full",modelValue:l(e).lower_value,"onUpdate:modelValue":o[9]||(o[9]=r=>l(e).lower_value=r),required:!0,label:"Lowest Number","error-message":l(e).errors.lower_value},null,8,["modelValue","error-message"])]),t("div",z,[s(a,{id:"syntax",type:"text",class:"block w-full",modelValue:l(e).syntax,"onUpdate:modelValue":o[10]||(o[10]=r=>l(e).syntax=r),required:!0,label:"Syntax","error-message":l(e).errors.syntax},null,8,["modelValue","error-message"])]),t("div",null,[H,s(C,{class:"block w-full h-25",style:{height:"50px !important"},onInput:q},{default:u(()=>[g(V(y.value),1)]),_:1})])])):c("",!0),t("div",G,[l(e).progress?(m(),p("progress",{key:0,value:l(e).progress.percentage,max:"100",class:"w-full"},V(l(e).progress.percentage)+"% ",9,J)):c("",!0)]),t("div",K,[s(A,{disabled:l(e).processing,class:"w-full"},{default:u(()=>[g("Save")]),_:1},8,["disabled"])])]),_:1})])])]),_:1})}}};export{Se as default};