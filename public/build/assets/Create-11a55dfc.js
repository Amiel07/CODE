import{A as a}from"./AbleProLayout-d06b40f6.js";import{_ as l}from"./FormComponent-445d130d.js";import"./@inertiajs-21fbd498.js";import{r as t,k as i,o as m,z as p,v as r,j as n,q as u}from"./@vue-7516ecd3.js";import"./ApplicationLogo-4fddd580.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./axios-4d564c32.js";import"./TextInput-f13f440a.js";import"./PrimaryButton-b9dd52aa.js";import"./vue-toastification-507e47a9.js";import"./deepmerge-73d550e5.js";import"./@ckeditor-7eab192b.js";import"./vue-6cd98a9a.js";import"./qs-e1b0650f.js";import"./side-channel-afb193f6.js";import"./get-intrinsic-88feedc6.js";import"./es-errors-82fd953f.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-1353c55e.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-9ec8ebd8.js";import"./set-function-length-ecd19468.js";import"./define-data-property-d38573ea.js";import"./es-define-property-cfa03815.js";import"./gopd-4c4454f6.js";import"./has-property-descriptors-68e2873e.js";import"./object-inspect-4cdc4b9e.js";import"./nprogress-97b5e360.js";import"./lodash.clonedeep-9c7c19eb.js";import"./lodash.isequal-9e40f450.js";const H={__name:"Create",props:{table:Object},setup(c){t([]);let e=t(null);const o=new URLSearchParams(window.location.search);e.value=o.get("classroom_id");const s={classroom_id:{type:"text",label:"Classroom ID",isRequired:!1,rules:[],selected:e.value},name:{type:"text",label:"name",isRequired:!1,rules:[],selected:""},type:{type:"select",label:"Type",isRequired:!1,rules:[],selected:"",items:[{key:"Multiple Choice",value:"Multiple Choice"},{key:"Problem Solving",value:"Problem Solving"},{key:"Fill in the Blank",value:"Fill in the Blank"},{key:"True or False",value:"True or False"},{key:"Essay",value:"Essay"}],itemValue:"value",itemTitle:"key"}};return i(()=>{}),(f,d)=>(m(),p(a,null,{pageTitle:r(()=>[n(" Create Assessment ")]),default:r(()=>[u(l,{class:"mt-3 mb-3","form-route":"assessment.store","form-content":s,"form-type":"POST","form-title":"Create Assessment","form-body":"Enter Assessment Details"})]),_:1}))}};export{H as default};
