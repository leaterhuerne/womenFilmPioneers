import{d as s}from"./domain-8b9bc7ce.js";function p({fetch:t}){function a(n,o,i,r,g){let e=s+"/api/genders-by-year-profession-location?";o!=null&&(e+="year="+o+"&"),i!=null&&(e+="gender="+i+"&"),r!=null&&(e+="profession="+r+"&"),g!=null&&(e+="location="+r),t(e).then(u=>u.json()).then(n)}function d(n,o){a(n,void 0,void 0,o.length>0?o:void 0)}function f(n,o,i){a(n,o,void 0,i)}function l(n){t(s+"/api/genders-by-year-profession-location?profession-list=true").then(o=>o.json()).then(n)}function c(n){t(s+"/api/genders-by-year-profession-location?location-list=true").then(o=>o.json()).then(n)}return{getPersonData:a,getDataProfession:d,getDataSpecificYearAndProfession:f,getProfessionList:l,getLocationList:c}}const y=Object.freeze(Object.defineProperty({__proto__:null,load:p},Symbol.toStringTag,{value:"Module"}));export{y as _,p as l};
