import{A as k}from"./ApplicationLogo-BDL_RRZn.js";import{i as p,Q as y}from"./@inertiajs-Ctqp54vJ.js";import{b as A,o as n,z as E,v as r,i as v,n as N,u as i,e as d,f as e,q as o,r as B,k as j,y as C,t as u,g as q,F as M,B as T,j as L,aj as z,a$ as V,aZ as H}from"./@vue-BNcvJdUh.js";import{a as I}from"./axios-9PTFF6AP.js";import{_ as P}from"./_plugin-vue_export-helper-DlAUqK2U.js";const $={__name:"ResponsiveNavLink",props:{href:{type:String,required:!0},active:{type:Boolean}},setup(a){const c=a,l=A(()=>c.active?"block w-full ps-3 pe-4 py-2 border-l-4 border-indigo-400 text-start text-base font-medium text-indigo-700 bg-indigo-50 focus:outline-none focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700 transition duration-150 ease-in-out":"block w-full ps-3 pe-4 py-2 border-l-4 border-transparent text-start text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out");return(m,s)=>(n(),E(i(p),{href:a.href,class:N(l.value)},{default:r(()=>[v(m.$slots,"default")]),_:3},8,["href","class"]))}},D={class:"pc-navbar"},F=e("li",{class:"pc-item pc-caption"},[e("label",null,"Analytics")],-1),Q={class:"pc-item"},R=e("span",{class:"pc-micon"},[e("svg",{class:"pc-icon"},[e("use",{"xlink:href":"#custom-home"})])],-1),W=e("span",{class:"pc-mtext"},"Dashboard",-1),Z=e("span",{class:"pc-micon"},[e("svg",{class:"pc-icon"},[e("use",{"xlink:href":"#custom-calendar-1"})])],-1),G=e("span",{class:"pc-mtext"},"Calendar",-1),J={__name:"AbleProNav",setup(a){return y().props.auth.user,(c,l)=>(n(),d("ul",D,[F,e("li",Q,[o($,{href:c.route("dashboard.index"),active:c.route().current("dashboard.index")},{default:r(()=>[R,W]),_:1},8,["href","active"]),o($,{href:c.route("calendar.index"),active:c.route().current("calendar.index")},{default:r(()=>[Z,G]),_:1},8,["href","active"])])]))}},t=a=>(V("data-v-4cc6062a"),a=a(),H(),a),K={id:"main"},O={key:0,class:"pc-sidebar"},U={class:"navbar-wrapper"},X={class:"m-header"},Y={href:"#",class:"b-brand text-primary"},ee={class:"navbar-content"},se={class:"card pc-user-card"},te={class:"card-body"},oe={class:"d-flex align-items-center"},ae={class:"flex-grow-1 ms-3 me-2"},ce={class:"mb-0"},re={class:"pc-header"},ie={class:"header-wrapper"},ne=z('<div class="me-auto" data-v-4cc6062a><ul class="list-unstyled" data-v-4cc6062a><li class="pc-h-item pc-sidebar-collapse" data-v-4cc6062a><a href="#" class="pc-head-link ms-0" id="sidebar-hide" data-v-4cc6062a><i class="ti ti-menu-2" data-v-4cc6062a></i></a></li><li class="pc-h-item pc-sidebar-popup" data-v-4cc6062a><a href="#" class="pc-head-link ms-0" id="mobile-collapse" data-v-4cc6062a><i class="ti ti-menu-2" data-v-4cc6062a></i></a></li></ul></div>',1),de={class:"ms-auto"},le={class:"list-unstyled"},ue={class:"dropdown pc-h-item"},pe={class:"pc-head-link dropdown-toggle arrow-none me-0","data-bs-toggle":"dropdown",href:"#",role:"button","aria-haspopup":"false","aria-expanded":"false"},me=t(()=>e("svg",{class:"pc-icon"},[e("use",{"xlink:href":"#custom-notification"})],-1)),he={class:"badge bg-success pc-h-badge"},_e={class:"dropdown-menu dropdown-notification dropdown-menu-end pc-h-dropdown"},fe=t(()=>e("h5",{class:"m-0"},"Notifications",-1)),ve={class:"dropdown-body text-wrap header-notification-scroll position-relative",style:{"max-height":"calc(100vh - 215px)"}},be={class:"card mb-2"},ye={class:"card-body"},ge={class:"d-flex"},Se=t(()=>e("div",{class:"flex-shrink-0"},[e("svg",{class:"pc-icon text-primary"},[e("use",{"xlink:href":"#custom-layer"})])],-1)),we={class:"flex-grow-1 ms-3"},xe=t(()=>e("span",{class:"float-end text-sm text-muted"},null,-1)),ke={class:"mb-0"},qe={class:"dropdown pc-h-item header-user-profile"},Le={class:"pc-head-link dropdown-toggle arrow-none me-0","data-bs-toggle":"dropdown",href:"#",role:"button","aria-haspopup":"false","data-bs-auto-close":"outside","aria-expanded":"false"},$e={class:"dropdown-menu dropdown-user-profile dropdown-menu-end pc-h-dropdown"},Ae=t(()=>e("div",{class:"dropdown-header d-flex align-items-center justify-content-between"},[e("h5",{class:"m-0"},"Profile")],-1)),Ee={class:"dropdown-body"},Ne={class:"profile-notification-scroll position-relative",style:{"max-height":"calc(100vh - 225px)"}},Be={class:"d-flex mb-1"},je=t(()=>e("div",{class:"flex-shrink-0"},null,-1)),Ce={class:"flex-grow-1 ms-3"},Me={class:"mb-1"},Te=t(()=>e("hr",{class:"border-secondary border-opacity-50"},null,-1)),ze=t(()=>e("p",{class:"text-span"},"Manage",-1)),Ve=t(()=>e("span",null,[e("svg",{class:"pc-icon text-muted me-2"},[e("use",{"xlink:href":"#custom-user"})]),e("span",null,"My Account")],-1)),He=t(()=>e("hr",{class:"border-secondary border-opacity-50"},null,-1)),Ie={class:"d-grid mb-3"},Pe=t(()=>e("svg",{class:"pc-icon me-2"},[e("use",{"xlink:href":"#custom-logout-1-outline"})],-1)),De={class:"pc-container"},Fe={class:"pc-content"},Qe={class:"page-header"},Re={class:"page-block"},We={class:"row align-items-center"},Ze={class:"col-md-12"},Ge={class:"breadcrumb"},Je={class:"breadcrumb-item"},Ke=t(()=>e("li",{class:"breadcrumb-item"},[e("a",{href:"javascript: void(0)"})],-1)),Oe=t(()=>e("li",{class:"breadcrumb-item","aria-current":"page"},null,-1)),Ue={key:0,class:"col-md-12"},Xe={class:"page-header-title"},Ye={class:"mb-0"},es={__name:"AbleProLayout",setup(a){const c=B(!0);j(()=>{if(document.querySelector("body").hasAttribute("data-pc-layout")){if(document.querySelector("body").getAttribute("data-pc-layout")=="horizontal"){var s=window.innerWidth;s<=1024&&add_scroller()}}else add_scroller();var b=document.querySelector(".hamburger:not(.is-active)");b&&b.addEventListener("click",function(){document.querySelector(".hamburger").classList.contains("is-active")?document.querySelector(".hamburger").classList.remove("is-active"):document.querySelector(".hamburger").classList.add("is-active")});var h=document.querySelector("#overlay-menu");h&&h.addEventListener("click",function(){menu_click(),document.querySelector(".pc-sidebar").classList.contains("pc-over-menu-active")?remove_overlay_menu():(document.querySelector(".pc-sidebar").classList.add("pc-over-menu-active"),document.querySelector(".pc-sidebar").insertAdjacentHTML("beforeend",'<div class="pc-menu-overlay"></div>'),document.querySelector(".pc-menu-overlay").addEventListener("click",function(){remove_overlay_menu(),document.querySelector(".hamburger").classList.remove("is-active")}))});var _=document.querySelector("#mobile-collapse");_&&_.addEventListener("click",function(){var f=document.querySelector(".pc-sidebar");f&&(document.querySelector(".pc-sidebar").classList.contains("mob-sidebar-active")?rm_menu():(document.querySelector(".pc-sidebar").classList.add("mob-sidebar-active"),document.querySelector(".pc-sidebar").insertAdjacentHTML("beforeend",'<div class="pc-menu-overlay"></div>'),document.querySelector(".pc-menu-overlay").addEventListener("click",function(){rm_menu()})))});var g=document.querySelector(".pc-horizontal #mobile-collapse");g&&g.addEventListener("click",function(){document.querySelector(".topbar").classList.contains("mob-sidebar-active")?rm_menu():(document.querySelector(".topbar").classList.add("mob-sidebar-active"),document.querySelector(".topbar").insertAdjacentHTML("beforeend",'<div class="pc-menu-overlay"></div>'),document.querySelector(".pc-menu-overlay").addEventListener("click",function(){rm_menu()}))});var S=document.querySelector(".pc-horizontal .topbar .pc-navbar>li>a");S&&S.addEventListener("click",function(f){var x=f.target;setTimeout(function(){x.parentNodes.children[1].removeAttribute("style")},1e3)}),document.querySelector(".header-notification-scroll")&&new SimpleBar(document.querySelector(".header-notification-scroll")),document.querySelector(".profile-notification-scroll")&&new SimpleBar(document.querySelector(".profile-notification-scroll")),document.querySelector(".component-list-card .card-body")&&new SimpleBar(document.querySelector(".component-list-card .card-body"));var w=document.querySelector("#sidebar-hide");w&&w.addEventListener("click",function(){document.querySelector(".pc-sidebar").classList.contains("pc-sidebar-hide")?document.querySelector(".pc-sidebar").classList.remove("pc-sidebar-hide"):document.querySelector(".pc-sidebar").classList.add("pc-sidebar-hide")}),document.querySelector(".trig-drp-search")&&document.querySelector(".trig-drp-search").addEventListener("shown.bs.dropdown",x=>{document.querySelector(".drp-search input").focus()})}),y().props.auth.user;const l=y().props.notifications,m=()=>{I.get("/clearNotification").then(s=>{console.log(s.data),location.reload()}).catch(s=>{console.log(s)})};return(s,b)=>{const h=C("center");return n(),d("div",K,[c.value?(n(),d("nav",O,[e("div",U,[e("div",X,[e("a",Y,[o(h,null,{default:r(()=>[o(i(p),{href:s.route("dashboard.index")},{default:r(()=>[o(k,{class:"block h-9 w-auto fill-current text-gray-800"})]),_:1},8,["href"])]),_:1})])]),e("div",ee,[e("div",se,[e("div",te,[e("div",oe,[e("div",ae,[e("h6",ce,u(s.$page.props.auth.user.name),1)])])])]),o(J)])])])):q("",!0),e("header",re,[e("div",ie,[ne,e("div",de,[e("ul",le,[e("li",ue,[e("a",pe,[me,e("span",he,u(i(l).length),1)]),e("div",_e,[e("div",{class:"dropdown-header d-flex align-items-center justify-content-between"},[fe,e("a",{href:"#!",onClick:m,class:"btn btn-link btn-sm"},"Mark all read")]),e("div",ve,[(n(!0),d(M,null,T(i(l),_=>(n(),d("div",be,[e("div",ye,[e("div",ge,[Se,e("div",we,[xe,e("p",ke,u(_.data.content),1)])])])]))),256))]),e("div",{class:"text-center py-2"},[e("a",{href:"#",onClick:m,class:"link-danger"},"Clear all Notifications")])])]),e("li",qe,[e("a",Le,[o(k)]),e("div",$e,[Ae,e("div",Ee,[e("div",Ne,[e("div",Be,[je,e("div",Ce,[e("h6",Me,u(s.$page.props.auth.user.name)+" 🖖",1),e("span",null,u(s.$page.props.auth.user.email),1)])]),Te,ze,o(i(p),{href:s.route("profile.edit"),class:"dropdown-item"},{default:r(()=>[Ve]),_:1},8,["href"]),He,e("div",Ie,[o(i(p),{href:s.route("logout"),method:"post",class:"btn btn-iconic"},{default:r(()=>[Pe,L("Logout ")]),_:1},8,["href"])])])])])])])])])]),e("div",De,[e("div",Fe,[e("div",Qe,[e("div",Re,[e("div",We,[e("div",Ze,[e("ul",Ge,[e("li",Je,[o(i(p),{href:s.route("dashboard.index")},{default:r(()=>[v(s.$slots,"home",{},()=>[L("Home")],!0)]),_:3},8,["href"])]),Ke,Oe])]),s.$slots.pageTitle?(n(),d("div",Ue,[e("div",Xe,[e("h2",Ye,[v(s.$slots,"pageTitle",{},void 0,!0)])])])):q("",!0)])])]),v(s.$slots,"default",{},void 0,!0)])])])}}},rs=P(es,[["__scopeId","data-v-4cc6062a"]]);export{rs as A};