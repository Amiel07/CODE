import{A as y}from"./AbleProLayout-C8pKILly.js";import{Q as B,i as c}from"./@inertiajs-Ctqp54vJ.js";import{r as D,k as N,y as k,o as l,e as m,u as i,z as C,v as o,j as r,f as e,q as s,F as p,B as j,t as a,g as x}from"./@vue-BNcvJdUh.js";import"./ApplicationLogo-BDL_RRZn.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./axios-9PTFF6AP.js";import"./deepmerge-D5vjR_z7.js";import"./@ckeditor-DYCdx3Av.js";import"./vue-BQIRGYU1.js";import"./qs-B3KJO7My.js";import"./side-channel-Bgx6Pom5.js";import"./get-intrinsic-BKEvijrG.js";import"./es-errors-DzOT6E3C.js";import"./has-symbols-eVqrYdw7.js";import"./has-proto-JnoBQRdH.js";import"./function-bind-BbkWVFrm.js";import"./hasown-DYqjtFKE.js";import"./call-bind-Bt3bzbWQ.js";import"./set-function-length-B5OANX0j.js";import"./define-data-property-DO9o5wXF.js";import"./es-define-property-tzmkNPou.js";import"./gopd-CEkvUycD.js";import"./has-property-descriptors-DphFXkuo.js";import"./object-inspect-CKiJXyHS.js";import"./nprogress-DN-MxXYu.js";import"./lodash.clonedeep-mosj99cq.js";import"./lodash.isequal-D_danmex.js";const z={class:"text-end"},A={class:"row"},T={class:"col-md-4"},F={class:"p-4 sm:p-8 bg-white shadow sm:rounded-lg mt-3"},L={class:"text-lg font-medium text-gray-900"},O=e("br",null,null,-1),q=e("strong",null,"Code: ",-1),E={class:"text-end"},J={class:"row"},M={class:"col-md-4"},P={class:"p-4 sm:p-8 bg-white shadow sm:rounded-lg mt-3"},Q={class:"text-lg font-medium text-gray-900"},S=e("br",null,null,-1),G=e("strong",null,"Code: ",-1),be={__name:"Dashboard",props:{classroom:Object,classroomUser:Object},setup(U){const u=U,_=B().props.auth.user,V=D([]);return console.log(u.classroomUser),N(()=>{V.value=u.classroomUser}),(n,H)=>{const d=k("v-btn"),h=k("v-divider");return l(),m(p,null,[i(_).type==="instructor"?(l(),C(y,{key:0},{pageTitle:o(()=>[r(" Dashboard ")]),default:o(()=>[e("div",z,[s(i(c),{href:n.route("classroom.create")},{default:o(()=>[s(d,{size:"large","prepend-icon":"mdi-school",color:"blue",class:"w-25"},{default:o(()=>[r("Add Class")]),_:1})]),_:1},8,["href"])]),e("section",null,[e("div",A,[(l(!0),m(p,null,j(u.classroom,t=>(l(),m("div",T,[e("div",F,[e("header",null,[e("h2",L,a(t.name),1)]),e("div",null,[r(a(t.description)+" ",1),O,q,r(" "+a(t.class_code)+" ",1),s(h),s(i(c),{href:n.route("classroom.show",t.id)},{default:o(()=>[s(d,{color:"primary",stacked:""},{default:o(()=>[r("View "+a(t.name),1)]),_:2},1024)]),_:2},1032,["href"])])])]))),256))])])]),_:1})):x("",!0),i(_).type==="student"?(l(),C(y,{key:1},{pageTitle:o(()=>[r(" Dashboard ")]),default:o(()=>[e("div",E,[s(i(c),{href:n.route("classroom.join")},{default:o(()=>[s(d,{size:"large","prepend-icon":"mdi-school",color:"blue",class:"w-25"},{default:o(()=>[r("Join Class")]),_:1})]),_:1},8,["href"])]),e("section",null,[e("div",J,[(l(!0),m(p,null,j(u.classroomUser,t=>{var f,g,v,b;return l(),m("div",M,[e("div",P,[e("header",null,[e("h2",Q,a((f=t.classroom)==null?void 0:f.name),1)]),e("div",null,[r(a((g=t.classroom)==null?void 0:g.description)+" ",1),S,G,r(" "+a((v=t.classroom)==null?void 0:v.class_code)+" ",1),s(h),s(i(c),{href:n.route("classroom.show",(b=t.classroom)==null?void 0:b.id)},{default:o(()=>[s(d,{color:"primary",stacked:""},{default:o(()=>{var w;return[r("View "+a((w=t.classroom)==null?void 0:w.name),1)]}),_:2},1024)]),_:2},1032,["href"]),s(i(c),{href:n.route("classroom.unjoin",{id:t.id}),method:"patch"},{default:o(()=>[s(d,{color:"danger",class:"ml-3 text-white",stacked:""},{default:o(()=>[r("Un-join "+a(t.name),1)]),_:2},1024)]),_:2},1032,["href"])])])])}),256))])])]),_:1})):x("",!0)],64)}}};export{be as default};
