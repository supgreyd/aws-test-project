import{_ as d,h as m,i as f,q as h,a as l,o as s,c as t,d as a,t as i,e as x,m as u,k as g,s as C,b as k}from"./index-10901994.js";import{A as y}from"./AppImage-abe52bd5.js";const I={components:{AppImage:y},setup(){const o=g(),c=C().params.id;m(()=>{o.dispatch("courses/fetchCourse",c)});const e=f(()=>o.getters["courses/GET_COURSE"]);return h(()=>o.dispatch("courses/clearCourse")),{course:e}}},b={key:0},v={key:1,class:"flex flex-col mt-10"},A={class:"text-3xl font-bold text-center"},B={key:0,class:"w-full flex justify-center"},V={class:"mt-5 text-lg text-gray-700 leading-relaxed"},E=["innerHTML"];function L(o,n,c,e,_,p){const r=l("AppImage");return e.course?(s(),t("div",v,[a("h1",A,i(e.course.name),1),e.course.thumbnail_url?(s(),t("div",B,[x(r,{srcPath:e.course.thumbnail_url},null,8,["srcPath"])])):u("",!0),a("p",V," Price: "+i(e.course.price),1),e.course.description?(s(),t("p",{key:1,class:"mt-5 text-lg text-gray-700 leading-relaxed",innerHTML:e.course.description},null,8,E)):u("",!0)])):(s(),t("div",b,"Loading..."))}const M=d(I,[["render",L]]),N={components:{CourseInfo:M}};function P(o,n,c,e,_,p){const r=l("CourseInfo");return s(),k(r)}const $=d(N,[["render",P]]);export{$ as default};