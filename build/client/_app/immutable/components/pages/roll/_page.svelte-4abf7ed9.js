import{S as xe,i as er,s as Ye,k as g,w as R,l as m,m as b,x as F,h,b as Be,y as W,f as T,t as B,z as H,a as S,q as ge,c as V,r as me,n as p,C as n,D as ce,u as Je,E as dr,R as at,T as it,g as xr,d as et,L as ft,F as ut,p as je,B as rt,G as ct,O as Me,P as Te,Q as Ae}from"../../../chunks/index-397f77fd.js";import{C as dt,a as Hr,b as ht}from"../../../chunks/CheveronLeft-2c98b883.js";import{T as ae}from"../../../chunks/T-fdec9a04.js";import{a as tt,I as gt}from"../../../chunks/InformationOutline-82066914.js";import{w as mt}from"../../../chunks/index-0845eeea.js";function bt(t){let r,e,d;return e=new tt({props:{name:"cheveron-up",size:t[0],direction:t[1],className:t[2],color:t[3],darkColor:t[4],hover:t[5],rotationSpeed:t[6],backgroundColor:t[7]}}),{c(){r=g("div"),R(e.$$.fragment)},l(o){r=m(o,"DIV",{});var a=b(r);F(e.$$.fragment,a),a.forEach(h)},m(o,a){Be(o,r,a),W(e,r,null),d=!0},p(o,[a]){const u={};a&1&&(u.size=o[0]),a&2&&(u.direction=o[1]),a&4&&(u.className=o[2]),a&8&&(u.color=o[3]),a&16&&(u.darkColor=o[4]),a&32&&(u.hover=o[5]),a&64&&(u.rotationSpeed=o[6]),a&128&&(u.backgroundColor=o[7]),e.$set(u)},i(o){d||(T(e.$$.fragment,o),d=!0)},o(o){B(e.$$.fragment,o),d=!1},d(o){o&&h(r),H(e)}}}function _t(t,r,e){let{size:d="1"}=r,{direction:o="0"}=r,{className:a=""}=r,{color:u="black"}=r,{darkColor:_="white"}=r,{hover:w=""}=r,{rotationSpeed:k="0"}=r,{backgroundColor:s="inherit"}=r;return t.$$set=i=>{"size"in i&&e(0,d=i.size),"direction"in i&&e(1,o=i.direction),"className"in i&&e(2,a=i.className),"color"in i&&e(3,u=i.color),"darkColor"in i&&e(4,_=i.darkColor),"hover"in i&&e(5,w=i.hover),"rotationSpeed"in i&&e(6,k=i.rotationSpeed),"backgroundColor"in i&&e(7,s=i.backgroundColor)},[d,o,a,u,_,w,k,s]}class Pr extends xe{constructor(r){super(),er(this,r,_t,bt,Ye,{size:0,direction:1,className:2,color:3,darkColor:4,hover:5,rotationSpeed:6,backgroundColor:7})}}function vt(t){let r,e,d;return e=new tt({props:{name:"cheveron-down",size:t[0],direction:t[1],className:t[2],color:t[3],darkColor:t[4],hover:t[5],rotationSpeed:t[6],backgroundColor:t[7]}}),{c(){r=g("div"),R(e.$$.fragment)},l(o){r=m(o,"DIV",{});var a=b(r);F(e.$$.fragment,a),a.forEach(h)},m(o,a){Be(o,r,a),W(e,r,null),d=!0},p(o,[a]){const u={};a&1&&(u.size=o[0]),a&2&&(u.direction=o[1]),a&4&&(u.className=o[2]),a&8&&(u.color=o[3]),a&16&&(u.darkColor=o[4]),a&32&&(u.hover=o[5]),a&64&&(u.rotationSpeed=o[6]),a&128&&(u.backgroundColor=o[7]),e.$set(u)},i(o){d||(T(e.$$.fragment,o),d=!0)},o(o){B(e.$$.fragment,o),d=!1},d(o){o&&h(r),H(e)}}}function pt(t,r,e){let{size:d="1"}=r,{direction:o="0"}=r,{className:a=""}=r,{color:u="black"}=r,{darkColor:_="white"}=r,{hover:w=""}=r,{rotationSpeed:k="0"}=r,{backgroundColor:s="inherit"}=r;return t.$$set=i=>{"size"in i&&e(0,d=i.size),"direction"in i&&e(1,o=i.direction),"className"in i&&e(2,a=i.className),"color"in i&&e(3,u=i.color),"darkColor"in i&&e(4,_=i.darkColor),"hover"in i&&e(5,w=i.hover),"rotationSpeed"in i&&e(6,k=i.rotationSpeed),"backgroundColor"in i&&e(7,s=i.backgroundColor)},[d,o,a,u,_,w,k,s]}class Ir extends xe{constructor(r){super(),er(this,r,pt,vt,Ye,{size:0,direction:1,className:2,color:3,darkColor:4,hover:5,rotationSpeed:6,backgroundColor:7})}}class $e{constructor(r){this.circle=r,this.indexOfCurrent=0,this.current=this.circle.data[this.indexOfCurrent]}setCurrent(r){this.circle.data[this.indexOfCurrent]=r}next(){return this.indexOfCurrent=(this.indexOfCurrent+1)%this.circle.size,this.current=this.circle.data[this.indexOfCurrent],this.current}peekNext(r){return this.circle.data[(this.indexOfCurrent+r)%this.circle.size]}setNext(r,e){this.circle.data[(this.indexOfCurrent+r)%this.circle.size]=e}previous(){return this.indexOfCurrent=(this.indexOfCurrent-1+this.circle.size)%this.circle.size,this.current=this.circle.data[this.indexOfCurrent],this.current}peekPrevious(r){return this.circle.data[(this.indexOfCurrent-r+this.circle.size)%this.circle.size]}setPrevious(r,e){this.circle.data[(this.indexOfCurrent-r+this.circle.size)%this.circle.size]=e}goToStart(){this.current=this.circle.data[0],this.indexOfCurrent=0}toArray(){return this.circle.data}}class Ne{constructor(...r){this.data=[],this.size=this.data.length,r.forEach(e=>this.add(e)),this.head=this.data[0]}add(...r){r.forEach(e=>this.data.push(e)),this.size=this.data.length}toArray(){return this.data}forEach(r){this.data.forEach(r)}iterator(){return new $e(this)}toString(){let r="";const e=d=>{let o="{";if(typeof d=="object"){for(const a in d)o+=a+": "+d[a]+", ";return o.slice(0,-2)+"}"}else return String(d)};return this.data.forEach(d=>r+=e(d)+" -> "),r.slice(0,-4)}}function wt(t){let r,e,d,o,a,u,_,w,k,s,i,f,L,D,y,Z,Q,q,C,E,G,j,ne,$,P,U,l,N,K,X,ee,A,se,ie;return o=new ae({props:{de:"Beruf",en:"Profession"}}),f=new Pr({}),y=new Ir({}),C=new ae({props:{de:"Land",en:"Country"}}),l=new Pr({}),X=new Ir({}),{c(){r=g("div"),e=g("div"),d=g("p"),R(o.$$.fragment),a=S(),u=g("div"),_=g("p"),w=ge(t[0]),k=S(),s=g("div"),i=g("button"),R(f.$$.fragment),L=S(),D=g("button"),R(y.$$.fragment),Z=S(),Q=g("div"),q=g("p"),R(C.$$.fragment),E=S(),G=g("div"),j=g("p"),ne=ge(t[1]),$=S(),P=g("div"),U=g("button"),R(l.$$.fragment),N=S(),K=g("button"),R(X.$$.fragment),this.h()},l(z){r=m(z,"DIV",{class:!0});var x=b(r);e=m(x,"DIV",{class:!0});var v=b(e);d=m(v,"P",{class:!0});var te=b(d);F(o.$$.fragment,te),te.forEach(h),a=V(v),u=m(v,"DIV",{class:!0});var le=b(u);_=m(le,"P",{class:!0});var oe=b(_);w=me(oe,t[0]),oe.forEach(h),k=V(le),s=m(le,"DIV",{class:!0});var fe=b(s);i=m(fe,"BUTTON",{});var ue=b(i);F(f.$$.fragment,ue),ue.forEach(h),L=V(fe),D=m(fe,"BUTTON",{});var I=b(D);F(y.$$.fragment,I),I.forEach(h),fe.forEach(h),le.forEach(h),v.forEach(h),Z=V(x),Q=m(x,"DIV",{class:!0});var J=b(Q);q=m(J,"P",{class:!0});var O=b(q);F(C.$$.fragment,O),O.forEach(h),E=V(J),G=m(J,"DIV",{class:!0});var M=b(G);j=m(M,"P",{class:!0});var re=b(j);ne=me(re,t[1]),re.forEach(h),$=V(M),P=m(M,"DIV",{class:!0});var de=b(P);U=m(de,"BUTTON",{});var ye=b(U);F(l.$$.fragment,ye),ye.forEach(h),N=V(de),K=m(de,"BUTTON",{});var ve=b(K);F(X.$$.fragment,ve),ve.forEach(h),de.forEach(h),M.forEach(h),J.forEach(h),x.forEach(h),this.h()},h(){p(d,"class",Yr),p(_,"class",Gr),p(s,"class",Jr),p(u,"class",qr),p(e,"class",Qr),p(q,"class",Yr),p(j,"class",Gr),p(P,"class",Jr),p(G,"class",qr),p(Q,"class",Qr),p(r,"class",ee=t[2]+" grid grid-cols-1 md:grid-cols-2 place-items-center gap-2 text-lg")},m(z,x){Be(z,r,x),n(r,e),n(e,d),W(o,d,null),n(e,a),n(e,u),n(u,_),n(_,w),n(u,k),n(u,s),n(s,i),W(f,i,null),n(s,L),n(s,D),W(y,D,null),n(r,Z),n(r,Q),n(Q,q),W(C,q,null),n(Q,E),n(Q,G),n(G,j),n(j,ne),n(G,$),n(G,P),n(P,U),W(l,U,null),n(P,N),n(P,K),W(X,K,null),A=!0,se||(ie=[ce(i,"click",t[3]),ce(D,"click",t[4]),ce(U,"click",t[5]),ce(K,"click",t[6])],se=!0)},p(z,[x]){(!A||x&1)&&Je(w,z[0]),(!A||x&2)&&Je(ne,z[1]),(!A||x&4&&ee!==(ee=z[2]+" grid grid-cols-1 md:grid-cols-2 place-items-center gap-2 text-lg"))&&p(r,"class",ee)},i(z){A||(T(o.$$.fragment,z),T(f.$$.fragment,z),T(y.$$.fragment,z),T(C.$$.fragment,z),T(l.$$.fragment,z),T(X.$$.fragment,z),A=!0)},o(z){B(o.$$.fragment,z),B(f.$$.fragment,z),B(y.$$.fragment,z),B(C.$$.fragment,z),B(l.$$.fragment,z),B(X.$$.fragment,z),A=!1},d(z){z&&h(r),H(o),H(f),H(y),H(C),H(l),H(X),se=!1,dr(ie)}}}const Qr="w-full flex place-items-center gap-2 p-2 rounded bg-firebrick-500 dark:bg-warm-gray-800",qr="grow flex place-items-center rounded px-2 bg-paper-200 dark:bg-warm-gray-900",Gr="grow",Jr="flex flex-col";let Yr="text-paper-200";function kt(t,r,e){let{className:d}=r,{professions:o=new $e(new Ne("alle"))}=r,{countries:a=new $e(new Ne("alle"))}=r,{professionLabel:u=o.current}=r,{countryLabel:_=a.current}=r;const w=()=>{e(0,u=o.previous())},k=()=>{e(0,u=o.next())},s=()=>{e(1,_=a.previous())},i=()=>{e(1,_=a.next())};return t.$$set=f=>{"className"in f&&e(2,d=f.className),"professions"in f&&e(7,o=f.professions),"countries"in f&&e(8,a=f.countries),"professionLabel"in f&&e(0,u=f.professionLabel),"countryLabel"in f&&e(1,_=f.countryLabel)},[u,_,d,w,k,s,i,o,a]}class Ct extends xe{constructor(r){super(),er(this,r,kt,wt,Ye,{className:2,professions:7,countries:8,professionLabel:0,countryLabel:1})}}const Xr=mt(1895);function Zr(t,r,e){const d=t.slice();return d[25]=r[e].left,d[26]=r[e].year,d[27]=r[e].right,d[29]=e,d}function Kr(t){let r,e,d,o,a=t[26]+"",u,_,w,k;return{c(){r=g("div"),e=g("div"),d=S(),o=g("h1"),u=ge(a),_=S(),w=g("div"),k=S(),this.h()},l(s){r=m(s,"DIV",{class:!0,style:!0});var i=b(r);e=m(i,"DIV",{class:!0,style:!0});var f=b(e);f.forEach(h),d=V(i),o=m(i,"H1",{});var L=b(o);u=me(L,a),L.forEach(h),_=V(i),w=m(i,"DIV",{class:!0,style:!0});var D=b(w);D.forEach(h),k=V(i),i.forEach(h),this.h()},h(){p(e,"class","h-full grow"),je(e,"background",`linear-gradient(
270deg, rgba(`+t[1].red+", "+t[1].green+", "+t[1].blue+", 1) "+t[13](t[25]/t[3]*100)+"%, rgba(255,255,255,0) "+t[13](t[25]/t[3]*100)+"%)"),p(w,"class","h-full grow"),je(w,"background",`linear-gradient(
90deg, rgba(`+t[2].red+", "+t[2].green+", "+t[2].blue+", 1) "+t[13](t[27]/t[3]*100)+"%, rgba(255,255,255,0) "+t[13](t[27]/t[3]*100)+"%)"),p(r,"class","preserve-3d block absolute w-full h-[50px] border-2 border-paper-200 dark:border-warm-gray-800 bg-paper-400 dark:bg-warm-gray-600 p-1 rounded-lg opacity-[0.99] f flex justify-center place-items-center gap-2 "),je(r,"transform","rotateX("+t[9]*t[29]+"deg) translateZ("+t[8]+"px)")},m(s,i){Be(s,r,i),n(r,e),n(r,d),n(r,o),n(o,u),n(r,_),n(r,w),n(r,k)},p(s,i){i&42&&je(e,"background",`linear-gradient(
270deg, rgba(`+s[1].red+", "+s[1].green+", "+s[1].blue+", 1) "+s[13](s[25]/s[3]*100)+"%, rgba(255,255,255,0) "+s[13](s[25]/s[3]*100)+"%)"),i&32&&a!==(a=s[26]+"")&&Je(u,a),i&44&&je(w,"background",`linear-gradient(
90deg, rgba(`+s[2].red+", "+s[2].green+", "+s[2].blue+", 1) "+s[13](s[27]/s[3]*100)+"%, rgba(255,255,255,0) "+s[13](s[27]/s[3]*100)+"%)")},d(s){s&&h(r)}}}function jr(t){let r,e,d,o,a,u,_,w,k;return d=new Pr({props:{size:"3"}}),u=new Ir({props:{size:"3"}}),{c(){r=g("div"),e=g("button"),R(d.$$.fragment),o=S(),a=g("button"),R(u.$$.fragment),this.h()},l(s){r=m(s,"DIV",{class:!0});var i=b(r);e=m(i,"BUTTON",{class:!0});var f=b(e);F(d.$$.fragment,f),f.forEach(h),o=V(i),a=m(i,"BUTTON",{class:!0});var L=b(a);F(u.$$.fragment,L),L.forEach(h),i.forEach(h),this.h()},h(){p(e,"class","rounded-xl border-2 border-firebrick-500 dark:border-firebrick-1000 w-full grid place-items-center"),p(a,"class","rounded-xl border-2 border-firebrick-500 dark:border-firebrick-1000 w-full grid place-items-center"),p(r,"class","grid grid-cols-2 gap-2 place-items-center text-2xl p-2 ")},m(s,i){Be(s,r,i),n(r,e),W(d,e,null),n(r,o),n(r,a),W(u,a,null),_=!0,w||(k=[ce(e,"click",t[17]),ce(a,"click",t[18])],w=!0)},p:rt,i(s){_||(T(d.$$.fragment,s),T(u.$$.fragment,s),_=!0)},o(s){B(d.$$.fragment,s),B(u.$$.fragment,s),_=!1},d(s){s&&h(r),H(d),H(u),w=!1,dr(k)}}}function Et(t){let r,e,d,o,a,u,_,w,k,s,i,f,L,D,y,Z,Q,q,C,E,G,j,ne;at(t[16]),o=new ae({props:{de:t[4].left==="male"?"Männlich":t[4].left==="female"?"Weiblich":"Divers/Unbekannt",en:t[4].left==="male"?"Male":t[4].left==="female"?"Female":"Queer/Unknown"}}),_=new ae({props:{de:t[4].right==="male"?"Männlich":t[4].right==="female"?"Weiblich":"Divers/Unbekannt",en:t[4].right==="male"?"Male":t[4].right==="female"?"Female":"Queer/Unknown"}});let $=t[5].circle.data,P=[];for(let l=0;l<$.length;l+=1)P[l]=Kr(Zr(t,$,l));let U=t[7]<768&&jr(t);return Z=new gt({props:{darkColor:"#D2CAB3"}}),C=new ae({props:{de:"100% auf der Rolle entsprechen "+t[3]+" Personen.",en:"100% on roll equals "+t[3]+" people."}}),{c(){r=g("div"),e=g("div"),d=g("p"),R(o.$$.fragment),a=S(),u=g("p"),R(_.$$.fragment),w=S(),k=g("div"),s=g("div"),i=g("div"),f=g("div");for(let l=0;l<P.length;l+=1)P[l].c();L=S(),U&&U.c(),D=S(),y=g("div"),R(Z.$$.fragment),Q=S(),q=g("p"),R(C.$$.fragment),this.h()},l(l){r=m(l,"DIV",{class:!0});var N=b(r);e=m(N,"DIV",{class:!0});var K=b(e);d=m(K,"P",{});var X=b(d);F(o.$$.fragment,X),X.forEach(h),a=V(K),u=m(K,"P",{});var ee=b(u);F(_.$$.fragment,ee),ee.forEach(h),K.forEach(h),w=V(N),k=m(N,"DIV",{class:!0});var A=b(k);s=m(A,"DIV",{class:!0});var se=b(s);i=m(se,"DIV",{class:!0});var ie=b(i);f=m(ie,"DIV",{class:!0,style:!0});var z=b(f);for(let te=0;te<P.length;te+=1)P[te].l(z);z.forEach(h),ie.forEach(h),se.forEach(h),A.forEach(h),L=V(N),U&&U.l(N),D=V(N),y=m(N,"DIV",{class:!0});var x=b(y);F(Z.$$.fragment,x),Q=V(x),q=m(x,"P",{});var v=b(q);F(C.$$.fragment,v),v.forEach(h),x.forEach(h),N.forEach(h),this.h()},h(){p(e,"class","grid grid-cols-2 place-items-center gap-2 p-2 text-xl font-semibold"),p(f,"class","h-full w-full absolute preserve-3d duration-500"),p(f,"style",t[6]),p(i,"class","relative h-[50px] w-2/3 max-w-2xl translate-y-40 perspective-1000"),p(s,"class","absolute lg:relative h-64 w-full flex justify-center"),p(k,"class","relative p-2 grid grid-cols-1 min-h-[24rem]"),p(y,"class","flex items-center gap-2 text-sm pl-2"),p(r,"class",E=t[0]+" flex flex-col w-full")},m(l,N){Be(l,r,N),n(r,e),n(e,d),W(o,d,null),n(e,a),n(e,u),W(_,u,null),n(r,w),n(r,k),n(k,s),n(s,i),n(i,f);for(let K=0;K<P.length;K+=1)P[K].m(f,null);n(r,L),U&&U.m(r,null),n(r,D),n(r,y),W(Z,y,null),n(y,Q),n(y,q),W(C,q,null),G=!0,j||(ne=[ce(window,"keydown",t[11]),ce(window,"resize",t[16]),ce(s,"wheel",it(t[12]))],j=!0)},p(l,[N]){const K={};N&16&&(K.de=l[4].left==="male"?"Männlich":l[4].left==="female"?"Weiblich":"Divers/Unbekannt"),N&16&&(K.en=l[4].left==="male"?"Male":l[4].left==="female"?"Female":"Queer/Unknown"),o.$set(K);const X={};if(N&16&&(X.de=l[4].right==="male"?"Männlich":l[4].right==="female"?"Weiblich":"Divers/Unbekannt"),N&16&&(X.en=l[4].right==="male"?"Male":l[4].right==="female"?"Female":"Queer/Unknown"),_.$set(X),N&9006){$=l[5].circle.data;let A;for(A=0;A<$.length;A+=1){const se=Zr(l,$,A);P[A]?P[A].p(se,N):(P[A]=Kr(se),P[A].c(),P[A].m(f,null))}for(;A<P.length;A+=1)P[A].d(1);P.length=$.length}(!G||N&64)&&p(f,"style",l[6]),l[7]<768?U?(U.p(l,N),N&128&&T(U,1)):(U=jr(l),U.c(),T(U,1),U.m(r,D)):U&&(xr(),B(U,1,1,()=>{U=null}),et());const ee={};N&8&&(ee.de="100% auf der Rolle entsprechen "+l[3]+" Personen."),N&8&&(ee.en="100% on roll equals "+l[3]+" people."),C.$set(ee),(!G||N&1&&E!==(E=l[0]+" flex flex-col w-full"))&&p(r,"class",E)},i(l){G||(T(o.$$.fragment,l),T(_.$$.fragment,l),T(U),T(Z.$$.fragment,l),T(C.$$.fragment,l),G=!0)},o(l){B(o.$$.fragment,l),B(_.$$.fragment,l),B(U),B(Z.$$.fragment,l),B(C.$$.fragment,l),G=!1},d(l){l&&h(r),H(o),H(_),ft(P,l),U&&U.d(),H(Z),H(C),j=!1,dr(ne)}}}const Lt=20,cr=!0,Nr=!1;function Dt(t,r,e){let d;ut(t,Xr,l=>e(21,d=l));let{className:o}=r,{leftColour:a={red:255,green:0,blue:0}}=r,{rightColour:u={red:0,green:0,blue:255}}=r,{max:_=100}=r,{barNames:w={left:"left",right:"right"}}=r,{frontLabel:k}=r,s=new Ne,i=new Ne;for(let l=0;l<30;l++)s.add({left:50,year:l,right:50}),l<20&&i.add({left:100,year:-1,right:100});let{labels:f=new $e(s)}=r,L=new $e(i);const D=50/2*(1/Math.tan(Math.PI/L.circle.size)),y=360/Lt;let Z=0,Q="",q;const C=()=>{const l=N=>{for(;N.current.year!=d;)N.next()};l(f);for(let N=0;N<5;N++)L.setCurrent(f.current),L.next(),f.next();l(L),L.previous(),l(f),f.previous();for(let N=0;N<5;N++)L.setCurrent(f.current),L.previous(),f.previous();l(L),l(f)},E=l=>{l==cr?(Z=Z-y,L.setNext(5,f.peekNext(5)),L.next(),f.next()):(Z=Z+y,L.setPrevious(5,f.peekPrevious(5)),L.previous(),f.previous()),e(6,Q="transform: rotateX("+Z+"deg)"),e(14,k=L.current),ct(Xr,d=L.current.year,d),e(5,L)},G=l=>{l.key=="ArrowUp"?(E(Nr),l.preventDefault()):l.key=="ArrowDown"&&(E(cr),l.preventDefault())},j=l=>{l.deltaY>0?E(cr):E(Nr)},ne=l=>l==0?0:Math.max(l,.4);f.current,C(),k=L.current;function $(){e(7,q=window.innerWidth)}const P=()=>E(cr),U=()=>E(Nr);return t.$$set=l=>{"className"in l&&e(0,o=l.className),"leftColour"in l&&e(1,a=l.leftColour),"rightColour"in l&&e(2,u=l.rightColour),"max"in l&&e(3,_=l.max),"barNames"in l&&e(4,w=l.barNames),"frontLabel"in l&&e(14,k=l.frontLabel),"labels"in l&&e(15,f=l.labels)},[o,a,u,_,w,L,Q,q,D,y,E,G,j,ne,k,f,$,P,U]}class Nt extends xe{constructor(r){super(),er(this,r,Dt,Et,Ye,{className:0,leftColour:1,rightColour:2,max:3,barNames:4,frontLabel:14,labels:15})}}function $r(t){let r,e,d,o,a,u;function _(f){t[17](f)}function w(f){t[18](f)}function k(f){t[19](f)}function s(f){t[20](f)}let i={className:"pb-2",labels:t[8],barNames:t[13][t[5]]};return t[4]!==void 0&&(i.max=t[4]),t[9]!==void 0&&(i.frontLabel=t[9]),t[7][0].rgb!==void 0&&(i.leftColour=t[7][0].rgb),t[7][1].rgb!==void 0&&(i.rightColour=t[7][1].rgb),r=new Nt({props:i}),Me.push(()=>Te(r,"max",_)),Me.push(()=>Te(r,"frontLabel",w)),Me.push(()=>Te(r,"leftColour",k)),Me.push(()=>Te(r,"rightColour",s)),{c(){R(r.$$.fragment)},l(f){F(r.$$.fragment,f)},m(f,L){W(r,f,L),u=!0},p(f,L){const D={};L[0]&256&&(D.labels=f[8]),L[0]&32&&(D.barNames=f[13][f[5]]),!e&&L[0]&16&&(e=!0,D.max=f[4],Ae(()=>e=!1)),!d&&L[0]&512&&(d=!0,D.frontLabel=f[9],Ae(()=>d=!1)),!o&&L[0]&128&&(o=!0,D.leftColour=f[7][0].rgb,Ae(()=>o=!1)),!a&&L[0]&128&&(a=!0,D.rightColour=f[7][1].rgb,Ae(()=>a=!1)),r.$set(D)},i(f){u||(T(r.$$.fragment,f),u=!0)},o(f){B(r.$$.fragment,f),u=!1},d(f){H(r,f)}}}function Pt(t){let r,e,d=t[8],o,a,u,_,w,k,s,i,f,L,D,y,Z,Q,q,C,E,G,j,ne,$,P,U,l,N,K,X,ee,A,se,ie,z,x,v,te,le,oe,fe,ue,I,J,O,M,re,de,ye,ve=t[9].year+"",rr,hr,_e,Re,Pe,gr,Ie,pe,mr,Xe=t[9].left+"",tr,br,Oe,we,_r,Ze=t[9].right+"",nr,vr,ze,Fe,Se,pr,Or="TODO: Hier ausgeübte Berufe einfügen",wr,kr,Ve,We,Ue,Cr,zr="TODO: Hier Filme einfügen",Er,ke,Lr,Sr,he=$r(t);w=new ae({props:{de:"Anpassung der Daten auf der Rolle",en:"Customization of data on the roll"}});function nt(c){t[21](c)}function lt(c){t[22](c)}let Dr={className:"w-full py-2",professions:t[10],countries:t[11]};t[2]!==void 0&&(Dr.professionLabel=t[2]),t[3]!==void 0&&(Dr.countryLabel=t[3]),s=new Ct({props:Dr}),Me.push(()=>Te(s,"professionLabel",nt)),Me.push(()=>Te(s,"countryLabel",lt)),y=new ae({props:{de:`Hinweis: Werden alle Berufe und Länder ausgewählt, so werden hier die alle Personen gezählt, die\r
                        laut Datenbank in diesem Zeitraum tätig waren. Hier tritt eine Abweichung von den Daten zu\r
                        speziellen Berufen bei den Filmen auf (Data Bias): In manchen Jahren sind Personen tätig gewesen,\r
                        obwohl sie in diesem Jahr laut Datenbank an keinem Film beteiligt waren.`,en:`Notice: If all professions and countries are selected, all persons are counted, which were -\r
                        according to the database - working in this year. Here we see a deviation from the data for\r
                        single professions and countries (so called data bias): According to the database, in some years\r
                        people were working in the film industry without being associated to a film.`}}),j=new dt({props:{size:"2",darkColor:"#D2CAB3"}}),P=new ae({props:{de:t[0]==="male"?"Männlich":t[0]==="female"?"Weiblich":"Divers/Unbekannt",en:t[0]==="male"?"Male":t[0]==="female"?"Female":"Queer/Unknown"}}),A=new ae({props:{de:t[1]==="male"?"Männlich":t[1]==="female"?"Weiblich":"Divers/Unbekannt",en:t[1]==="male"?"Male":t[1]==="female"?"Female":"Queer/Unknown"}}),z=new Hr({props:{size:"2",darkColor:"#D2CAB3"}});function ot(c){t[25](c)}let Vr={className:""};return t[7]!==void 0&&(Vr.colors=t[7]),v=new ht({props:Vr}),Me.push(()=>Te(v,"colors",ot)),I=new Hr({props:{color:"#D2CAB3"}}),de=new ae({props:{de:"Die Filmindustrie im Jahr",en:"The film industry in the year"}}),Pe=new ae({props:{de:"Geschlechterverteilung",en:"Gender distribution"}}),pe=new ae({props:{de:t[12][t[0]].de,en:t[12][t[0]].en}}),we=new ae({props:{de:t[12][t[1]].de,en:t[12][t[1]].en}}),Se=new ae({props:{de:"Berufe",en:"Professions"}}),Ue=new ae({props:{de:"Filme des Jahres",en:"Professions"}}),{c(){r=g("div"),e=g("div"),he.c(),o=S(),a=g("div"),u=g("div"),_=g("h1"),R(w.$$.fragment),k=S(),R(s.$$.fragment),L=S(),D=g("p"),R(y.$$.fragment),Z=S(),Q=g("div"),q=g("div"),C=g("div"),E=g("button"),G=g("span"),R(j.$$.fragment),ne=S(),$=g("span"),R(P.$$.fragment),U=S(),l=g("p"),N=ge("|"),K=S(),X=g("button"),ee=g("span"),R(A.$$.fragment),se=S(),ie=g("span"),R(z.$$.fragment),x=S(),R(v.$$.fragment),le=S(),oe=g("div"),fe=S(),ue=g("button"),R(I.$$.fragment),O=S(),M=g("div"),re=g("h1"),R(de.$$.fragment),ye=S(),rr=ge(ve),hr=S(),_e=g("div"),Re=g("h2"),R(Pe.$$.fragment),gr=S(),Ie=g("p"),R(pe.$$.fragment),mr=ge(": "),tr=ge(Xe),br=S(),Oe=g("p"),R(we.$$.fragment),_r=ge(": "),nr=ge(Ze),vr=S(),ze=g("div"),Fe=g("h2"),R(Se.$$.fragment),pr=S(),wr=ge(Or),kr=S(),Ve=g("div"),We=g("h2"),R(Ue.$$.fragment),Cr=S(),Er=ge(zr),this.h()},l(c){r=m(c,"DIV",{class:!0});var Y=b(r);e=m(Y,"DIV",{class:!0});var be=b(e);he.l(be),o=V(be),a=m(be,"DIV",{class:!0});var Ce=b(a);u=m(Ce,"DIV",{});var Ee=b(u);_=m(Ee,"H1",{class:!0});var Ke=b(_);F(w.$$.fragment,Ke),Ke.forEach(h),k=V(Ee),F(s.$$.fragment,Ee),Ee.forEach(h),L=V(Ce),D=m(Ce,"P",{class:!0});var He=b(D);F(y.$$.fragment,He),He.forEach(h),Ce.forEach(h),be.forEach(h),Z=V(Y),Q=m(Y,"DIV",{class:!0});var Le=b(Q);q=m(Le,"DIV",{class:!0});var Qe=b(q);C=m(Qe,"DIV",{class:!0});var qe=b(C);E=m(qe,"BUTTON",{class:!0});var lr=b(E);G=m(lr,"SPAN",{class:!0});var Ur=b(G);F(j.$$.fragment,Ur),Ur.forEach(h),ne=V(lr),$=m(lr,"SPAN",{class:!0});var Mr=b($);F(P.$$.fragment,Mr),Mr.forEach(h),lr.forEach(h),U=V(qe),l=m(qe,"P",{class:!0});var Tr=b(l);N=me(Tr,"|"),Tr.forEach(h),K=V(qe),X=m(qe,"BUTTON",{class:!0});var or=b(X);ee=m(or,"SPAN",{class:!0});var Ar=b(ee);F(A.$$.fragment,Ar),Ar.forEach(h),se=V(or),ie=m(or,"SPAN",{class:!0});var Br=b(ie);F(z.$$.fragment,Br),Br.forEach(h),or.forEach(h),qe.forEach(h),x=V(Qe),F(v.$$.fragment,Qe),le=V(Qe),oe=m(Qe,"DIV",{class:!0});var st=b(oe);st.forEach(h),Qe.forEach(h),fe=V(Le),ue=m(Le,"BUTTON",{class:!0});var yr=b(ue);F(I.$$.fragment,yr),yr.forEach(h),Le.forEach(h),O=V(Y),M=m(Y,"DIV",{class:!0});var De=b(M);re=m(De,"H1",{class:!0});var sr=b(re);F(de.$$.fragment,sr),ye=V(sr),rr=me(sr,ve),sr.forEach(h),hr=V(De),_e=m(De,"DIV",{});var Ge=b(_e);Re=m(Ge,"H2",{class:!0});var Rr=b(Re);F(Pe.$$.fragment,Rr),Rr.forEach(h),gr=V(Ge),Ie=m(Ge,"P",{});var ar=b(Ie);F(pe.$$.fragment,ar),mr=me(ar,": "),tr=me(ar,Xe),ar.forEach(h),br=V(Ge),Oe=m(Ge,"P",{});var ir=b(Oe);F(we.$$.fragment,ir),_r=me(ir,": "),nr=me(ir,Ze),ir.forEach(h),Ge.forEach(h),vr=V(De),ze=m(De,"DIV",{});var fr=b(ze);Fe=m(fr,"H2",{class:!0});var Fr=b(Fe);F(Se.$$.fragment,Fr),Fr.forEach(h),pr=V(fr),wr=me(fr,Or),fr.forEach(h),kr=V(De),Ve=m(De,"DIV",{});var ur=b(Ve);We=m(ur,"H2",{class:!0});var Wr=b(We);F(Ue.$$.fragment,Wr),Wr.forEach(h),Cr=V(ur),Er=me(ur,zr),ur.forEach(h),De.forEach(h),Y.forEach(h),this.h()},h(){p(_,"class","text-center text-xl font-semibold"),p(D,"class","text-sm italic"),p(a,"class","flex flex-col justify-between grow p-2 border-t border-firebrick-500 dark:border-firebrick-1000"),p(e,"class","flex flex-col lg:w-2/3"),p(G,"class","absolute left-2 "),p($,"class","font-semibold w-full text-end"),p(E,"class","flex grow w-1/2"),p(l,"class","font-semibold text-xl mx-2"),p(ee,"class","font-semibold w-full text-start"),p(ie,"class","absolute right-2"),p(X,"class","flex grow w-1/2"),p(C,"class","relative flex justify-between px-2"),p(oe,"class","p-2"),p(q,"class","bg-paper-100 dark:bg-warm-gray-900 opactity-90 rounded-br-xl dark:border dark:border-warm-gray-700 shadow-lg dark:shadow-none w-[95%] "),p(ue,"class","duration-500 w-[5%] h-10 bg-firebrick-500 dark:bg-firebrick-1000 grid place-items-center "+t[14]+" rounded-r-xl"),p(Q,"class",J="absolute w-full max-w-[30rem] mt-2 flex duration-500 "+t[6]),p(re,"class","text-3xl font-semibold text-center"),p(Re,"class","text-lg font-semibold"),p(Fe,"class","text-lg font-semibold"),p(We,"class","text-lg font-semibold"),p(M,"class","grow lg:w-1/3 border-t lg:border-t-0 lg:border-l border-firebrick-500 dark:border-firebrick-1000 p-2 flex flex-col gap-2 "),p(r,"class","relative flex flex-col lg:flex-row grow ")},m(c,Y){Be(c,r,Y),n(r,e),he.m(e,null),n(e,o),n(e,a),n(a,u),n(u,_),W(w,_,null),n(u,k),W(s,u,null),n(a,L),n(a,D),W(y,D,null),n(r,Z),n(r,Q),n(Q,q),n(q,C),n(C,E),n(E,G),W(j,G,null),n(E,ne),n(E,$),W(P,$,null),n(C,U),n(C,l),n(l,N),n(C,K),n(C,X),n(X,ee),W(A,ee,null),n(X,se),n(X,ie),W(z,ie,null),n(q,x),W(v,q,null),n(q,le),n(q,oe),n(Q,fe),n(Q,ue),W(I,ue,null),n(r,O),n(r,M),n(M,re),W(de,re,null),n(re,ye),n(re,rr),n(M,hr),n(M,_e),n(_e,Re),W(Pe,Re,null),n(_e,gr),n(_e,Ie),W(pe,Ie,null),n(Ie,mr),n(Ie,tr),n(_e,br),n(_e,Oe),W(we,Oe,null),n(Oe,_r),n(Oe,nr),n(M,vr),n(M,ze),n(ze,Fe),W(Se,Fe,null),n(ze,pr),n(ze,wr),n(M,kr),n(M,Ve),n(Ve,We),W(Ue,We,null),n(Ve,Cr),n(Ve,Er),ke=!0,Lr||(Sr=[ce(E,"click",t[23]),ce(X,"click",t[24]),ce(ue,"mouseenter",t[26]),ce(Q,"mouseleave",t[27])],Lr=!0)},p(c,Y){Y[0]&256&&Ye(d,d=c[8])?(xr(),B(he,1,1,rt),et(),he=$r(c),he.c(),T(he,1),he.m(e,o)):he.p(c,Y);const be={};Y[0]&1024&&(be.professions=c[10]),Y[0]&2048&&(be.countries=c[11]),!i&&Y[0]&4&&(i=!0,be.professionLabel=c[2],Ae(()=>i=!1)),!f&&Y[0]&8&&(f=!0,be.countryLabel=c[3],Ae(()=>f=!1)),s.$set(be);const Ce={};Y[0]&1&&(Ce.de=c[0]==="male"?"Männlich":c[0]==="female"?"Weiblich":"Divers/Unbekannt"),Y[0]&1&&(Ce.en=c[0]==="male"?"Male":c[0]==="female"?"Female":"Queer/Unknown"),P.$set(Ce);const Ee={};Y[0]&2&&(Ee.de=c[1]==="male"?"Männlich":c[1]==="female"?"Weiblich":"Divers/Unbekannt"),Y[0]&2&&(Ee.en=c[1]==="male"?"Male":c[1]==="female"?"Female":"Queer/Unknown"),A.$set(Ee);const Ke={};!te&&Y[0]&128&&(te=!0,Ke.colors=c[7],Ae(()=>te=!1)),v.$set(Ke),(!ke||Y[0]&64&&J!==(J="absolute w-full max-w-[30rem] mt-2 flex duration-500 "+c[6]))&&p(Q,"class",J),(!ke||Y[0]&512)&&ve!==(ve=c[9].year+"")&&Je(rr,ve);const He={};Y[0]&1&&(He.de=c[12][c[0]].de),Y[0]&1&&(He.en=c[12][c[0]].en),pe.$set(He),(!ke||Y[0]&512)&&Xe!==(Xe=c[9].left+"")&&Je(tr,Xe);const Le={};Y[0]&2&&(Le.de=c[12][c[1]].de),Y[0]&2&&(Le.en=c[12][c[1]].en),we.$set(Le),(!ke||Y[0]&512)&&Ze!==(Ze=c[9].right+"")&&Je(nr,Ze)},i(c){ke||(T(he),T(w.$$.fragment,c),T(s.$$.fragment,c),T(y.$$.fragment,c),T(j.$$.fragment,c),T(P.$$.fragment,c),T(A.$$.fragment,c),T(z.$$.fragment,c),T(v.$$.fragment,c),T(I.$$.fragment,c),T(de.$$.fragment,c),T(Pe.$$.fragment,c),T(pe.$$.fragment,c),T(we.$$.fragment,c),T(Se.$$.fragment,c),T(Ue.$$.fragment,c),ke=!0)},o(c){B(he),B(w.$$.fragment,c),B(s.$$.fragment,c),B(y.$$.fragment,c),B(j.$$.fragment,c),B(P.$$.fragment,c),B(A.$$.fragment,c),B(z.$$.fragment,c),B(v.$$.fragment,c),B(I.$$.fragment,c),B(de.$$.fragment,c),B(Pe.$$.fragment,c),B(pe.$$.fragment,c),B(we.$$.fragment,c),B(Se.$$.fragment,c),B(Ue.$$.fragment,c),ke=!1},d(c){c&&h(r),he.d(c),H(w),H(s),H(y),H(j),H(P),H(A),H(z),H(v),H(I),H(de),H(Pe),H(pe),H(we),H(Se),H(Ue),Lr=!1,dr(Sr)}}}function It(t,r,e){const o={first:1895,last:1950};let{data:a}=r;const u={male:{de:"Männlich",en:"Male"},female:{de:"Weiblich",en:"Female"},unknown:{de:"Divers/Unbekannt",en:"Queer/Unknown"}};let _=0;const w=[{left:"male",right:"female"},{left:"male",right:"unknown"},{left:"female",right:"unknown"},{left:"female",right:"male"},{left:"unknown",right:"male"},{left:"unknown",right:"female"}];let k=w[0].left,s=w[0].right,i=0,f="-translate-x-[95%]",L,D,y,Z={left:0,year:1890,right:0},Q,q,C="alle",E="alle";const G=()=>{const v=()=>Math.round(Math.random()*255);return{red:v(),green:v(),blue:v()}},j=v=>{e(5,i=(i+(v==="left"?-1:1)+w.length)%w.length),e(0,k=w[i].left),e(1,s=w[i].right),e(7,D[0].rgb=G(),D),e(7,D[1].rgb=G(),D)};function ne(){e(4,_=0);let v=new Ne;for(let te=o.first;te<=o.last;te++)v.add({left:0,year:Number(te),right:0});e(8,y=v.iterator())}const $=()=>{const v=(I,J)=>{for(const O in I){let M={left:0,right:0};for(const re in I[O])J(I,O,re,M);Number(O)>=o.first&&Number(O)<=o.last&&ue.add({left:M.left,year:Number(O),right:M.right}),e(4,_=Math.max(_,M.left,M.right))}e(8,y=ue.iterator())},te=(I,J,O,M)=>{for(const re in I[J][O])O==k&&(M.left+=I[J][O][re]??0),O==s&&(M.right+=I[J][O][re]??0)},le=(I,J,O,M)=>{O==k&&(M.left+=I[J][O][E]??0),O==s&&(M.right+=I[J][O][E]??0)},oe=(I,J,O,M)=>{for(const re in I[J][O])O==k&&(M.left+=I[J][O][re][C]??0),O==s&&(M.right+=I[J][O][re][C]??0)},fe=(I,J,O,M)=>{console.log(J+", "+O+", "+E+", "+C),O==k&&I[J][O][E]!=null&&(M.left+=I[J][O][E][C]??0),O==s&&I[J][O][E]!=null&&(M.right+=I[J][O][E][C]??0)};ne();let ue=new Ne;C=="alle"&&E=="alle"?a.getProfessionLocation(void 0,void 0,I=>v(I,te)):C=="alle"&&E!="alle"?a.getProfessionLocation(void 0,E,I=>v(I,le)):C!="alle"&&E=="alle"?a.getProfessionLocation(C,void 0,I=>v(I,oe)):a.getProfessionLocation(C,E,I=>v(I,fe))},P=()=>{const v=le=>{let oe=new Ne("alle");for(const fe in le)oe.add(le[fe]);e(10,Q=oe.iterator())},te=le=>{let oe=new Ne("alle");for(const fe in le)oe.add(le[fe]);e(11,q=oe.iterator())};a.getProfessionList(v),a.getLocationList(te)};ne(),P(),D=[{title:"",rgb:G()},{title:"",rgb:G()}];function U(v){_=v,e(4,_)}function l(v){Z=v,e(9,Z)}function N(v){t.$$.not_equal(D[0].rgb,v)&&(D[0].rgb=v,e(7,D))}function K(v){t.$$.not_equal(D[1].rgb,v)&&(D[1].rgb=v,e(7,D))}function X(v){C=v,e(2,C),e(0,k),e(1,s),e(3,E)}function ee(v){E=v,e(3,E),e(0,k),e(1,s),e(2,C)}const A=()=>j("left"),se=()=>j("right");function ie(v){D=v,e(7,D)}const z=()=>e(6,f="translate-x-0"),x=()=>e(6,f="-translate-x-[95%]");return t.$$set=v=>{"data"in v&&e(16,a=v.data)},t.$$.update=()=>{t.$$.dirty[0]&15&&(e(0,k),e(1,s),e(2,C),e(3,E),e(1,s),e(0,k),e(2,C),e(3,E),e(2,C),e(0,k),e(1,s),e(3,E),e(3,E),e(0,k),e(1,s),e(2,C),$())},[k,s,C,E,_,i,f,D,y,Z,Q,q,u,w,L,j,a,U,l,N,K,X,ee,A,se,ie,z,x]}class Mt extends xe{constructor(r){super(),er(this,r,It,Pt,Ye,{data:16},null,[-1,-1])}}export{Mt as default};
