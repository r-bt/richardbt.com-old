import{S as vt,i as yt,s as gt,k as c,l as h,m as w,h as s,M as ne,H as Xe,n as Se,b as l,F as $,A as de,I as Ye,v as y,w as g,x as I,J as kt,K as dt,f as k,t as E,y as F,L as ct,q as _,a as m,r as v,c as p}from"../../../chunks/index-3de37d12.js";import{W as Et}from"../../../chunks/week_layout-f7784e77.js";import{I as C}from"../../../chunks/Image-90aace8f.js";import{D as ht}from"../../../chunks/Details-ccde7feb.js";import{b as wt}from"../../../chunks/paths-6cd3a76e.js";import{S as He}from"../../../chunks/SideBySide-02aeca15.js";function Ft(P){let r,o,n;return{c(){r=c("div"),o=c("model-viewer"),this.h()},l(f){r=h(f,"DIV",{id:!0,class:!0});var t=w(r);o=h(t,"MODEL-VIEWER",{alt:!0,src:!0,ar:!0,"shadow-intensity":!0,"camera-controls":!0,"touch-action":!0,class:!0}),w(o).forEach(s),t.forEach(s),this.h()},h(){ne(o,"alt","Mesh of Appa"),Xe(o.src,n=wt+"/"+P[0])||ne(o,"src",n),ne(o,"ar",""),ne(o,"shadow-intensity","1"),ne(o,"camera-controls",""),ne(o,"touch-action","pan-y"),ne(o,"class","svelte-m8erov"),Se(r,"id","model"),Se(r,"class","svelte-m8erov")},m(f,t){l(f,r,t),$(r,o)},p(f,[t]){t&1&&!Xe(o.src,n=wt+"/"+f[0])&&ne(o,"src",n)},i:de,o:de,d(f){f&&s(r)}}}function St(P,r,o){let{src:n}=r;return P.$$set=f=>{"src"in f&&o(0,n=f.src)},[n]}class It extends vt{constructor(r){super(),yt(this,r,St,Ft,gt,{src:0})}}const Tt="./_app/immutable/assets/queen-sketch-8bceeae7.png",Pt="./_app/immutable/assets/revolved-queen-3601d954.png",xt="./_app/immutable/assets/filleted-revolved-queen-2304d45c.png",Rt="./_app/immutable/assets/finished-queen-57f604fb.png",Nt="./_app/immutable/assets/3d-propeller-sketch-8a0dde0c.png",Qt="./_app/immutable/assets/3d-propeller-extruded-524c1b93.png",Ct="./_app/immutable/assets/rendered_submarine-10e82620.png",Ot="./_app/immutable/assets/cuttingOutSectionsFromEnd-c7d9400f.png",bt="./_app/immutable/assets/cylinderSubmarineBody-1be7fbc1.png",qt="./_app/immutable/assets/loftingCut-9cd10d74.png",At="./_app/immutable/assets/pistonRubber-552a6b77.png",jt="./_app/immutable/assets/pistonRubberInsert-4aec0ddd.png",Mt="./_app/immutable/assets/screwAndShaft-41255183.png",Dt="./_app/immutable/assets/sketchOfAngledSection-54a38f0e.png",Lt="./_app/immutable/assets/sketchOfTwoCircles-86e429ee.png",Ut="./_app/immutable/assets/submarineMirrored-64cbca8b.png",Wt="./_app/immutable/assets/syringe-1567c549.png",Ht=""+new URL("../../../assets/submarine-joints-rotating-08e06025.mp4",import.meta.url).href;function zt(P){let r,o,n,f,t,d,S,j,A,M,D,O,x,N,J,L,R,H,q,Q;return o=new C({props:{src:Tt,alt:"Fusion360 Sketch of Queen to revolve"}}),S=new C({props:{src:Pt,alt:"Fusion360 Revovled Sketch of Queen"}}),O=new C({props:{src:xt,alt:"Fusion360 Filleted Revovled Sketch of Queen"}}),R=new C({props:{src:Rt,alt:"Finished Queen piece"}}),q=new It({props:{src:"queen.glb"}}),{c(){r=_(`To begin I wanted to experiment with some Fusion360 features I hadn't tried out before. Revolve seemed useful so I designed a Queen Chess piece. Unfortunally, I didn't make it parametric and need to consider better how to minimize the number of parameters a design needs.
    `),y(o.$$.fragment),n=m(),f=c("p"),t=_("Once sketched, I revolved it around it\u2019s center"),d=m(),y(S.$$.fragment),j=m(),A=c("p"),M=_("Next up was filleting all the edges and the top of the Queen to give the piece it\u2019s distintice curves"),D=m(),y(O.$$.fragment),x=m(),N=c("p"),J=_("Finally, I wanted my Queen piece to have ridges along it\u2019s head. To do this I first made an offset plane and extruded a cylinder that cut through the Queen\u2019s rim. Then I circular patterned this cut out feature and filleted the resulting sharp tops."),L=m(),y(R.$$.fragment),H=m(),y(q.$$.fragment)},l(i){r=v(i,`To begin I wanted to experiment with some Fusion360 features I hadn't tried out before. Revolve seemed useful so I designed a Queen Chess piece. Unfortunally, I didn't make it parametric and need to consider better how to minimize the number of parameters a design needs.
    `),g(o.$$.fragment,i),n=p(i),f=h(i,"P",{});var b=w(f);t=v(b,"Once sketched, I revolved it around it\u2019s center"),b.forEach(s),d=p(i),g(S.$$.fragment,i),j=p(i),A=h(i,"P",{});var z=w(A);M=v(z,"Next up was filleting all the edges and the top of the Queen to give the piece it\u2019s distintice curves"),z.forEach(s),D=p(i),g(O.$$.fragment,i),x=p(i),N=h(i,"P",{});var K=w(N);J=v(K,"Finally, I wanted my Queen piece to have ridges along it\u2019s head. To do this I first made an offset plane and extruded a cylinder that cut through the Queen\u2019s rim. Then I circular patterned this cut out feature and filleted the resulting sharp tops."),K.forEach(s),L=p(i),g(R.$$.fragment,i),H=p(i),g(q.$$.fragment,i)},m(i,b){l(i,r,b),I(o,i,b),l(i,n,b),l(i,f,b),$(f,t),l(i,d,b),I(S,i,b),l(i,j,b),l(i,A,b),$(A,M),l(i,D,b),I(O,i,b),l(i,x,b),l(i,N,b),$(N,J),l(i,L,b),I(R,i,b),l(i,H,b),I(q,i,b),Q=!0},p:de,i(i){Q||(k(o.$$.fragment,i),k(S.$$.fragment,i),k(O.$$.fragment,i),k(R.$$.fragment,i),k(q.$$.fragment,i),Q=!0)},o(i){E(o.$$.fragment,i),E(S.$$.fragment,i),E(O.$$.fragment,i),E(R.$$.fragment,i),E(q.$$.fragment,i),Q=!1},d(i){i&&s(r),F(o,i),i&&s(n),i&&s(f),i&&s(d),F(S,i),i&&s(j),i&&s(A),i&&s(D),F(O,i),i&&s(x),i&&s(N),i&&s(L),F(R,i),i&&s(H),F(q,i)}}}function Vt(P){let r,o,n,f;return r=new C({props:{src:Lt,alt:"Sketch of two circles"}}),n=new C({props:{src:qt,alt:"Cutting out inside of end of submarine"}}),{c(){y(r.$$.fragment),o=m(),y(n.$$.fragment)},l(t){g(r.$$.fragment,t),o=p(t),g(n.$$.fragment,t)},m(t,d){I(r,t,d),l(t,o,d),I(n,t,d),f=!0},p:de,i(t){f||(k(r.$$.fragment,t),k(n.$$.fragment,t),f=!0)},o(t){E(r.$$.fragment,t),E(n.$$.fragment,t),f=!1},d(t){F(r,t),t&&s(o),F(n,t)}}}function Bt(P){let r,o,n,f;return r=new C({props:{src:Dt,alt:"Section of angled section on cylinder"}}),n=new C({props:{src:Ot,alt:"Cutting out area from end of submarine"}}),{c(){y(r.$$.fragment),o=m(),y(n.$$.fragment)},l(t){g(r.$$.fragment,t),o=p(t),g(n.$$.fragment,t)},m(t,d){I(r,t,d),l(t,o,d),I(n,t,d),f=!0},p:de,i(t){f||(k(r.$$.fragment,t),k(n.$$.fragment,t),f=!0)},o(t){E(r.$$.fragment,t),E(n.$$.fragment,t),f=!1},d(t){F(r,t),t&&s(o),F(n,t)}}}function Gt(P){let r,o,n,f;return r=new C({props:{src:Wt,alt:"Syrine"}}),n=new C({props:{src:At,alt:"Rubber for syrine"}}),{c(){y(r.$$.fragment),o=m(),y(n.$$.fragment)},l(t){g(r.$$.fragment,t),o=p(t),g(n.$$.fragment,t)},m(t,d){I(r,t,d),l(t,o,d),I(n,t,d),f=!0},p:de,i(t){f||(k(r.$$.fragment,t),k(n.$$.fragment,t),f=!0)},o(t){E(r.$$.fragment,t),E(n.$$.fragment,t),f=!1},d(t){F(r,t),t&&s(o),F(n,t)}}}function Jt(P){let r,o,n,f;return r=new C({props:{src:jt,alt:"Rubber insert for syrine"}}),n=new C({props:{src:Mt,alt:"Screw and shaft for syrine"}}),{c(){y(r.$$.fragment),o=m(),y(n.$$.fragment)},l(t){g(r.$$.fragment,t),o=p(t),g(n.$$.fragment,t)},m(t,d){I(r,t,d),l(t,o,d),I(n,t,d),f=!0},p:de,i(t){f||(k(r.$$.fragment,t),k(n.$$.fragment,t),f=!0)},o(t){E(r.$$.fragment,t),E(n.$$.fragment,t),f=!1},d(t){F(r,t),t&&s(o),F(n,t)}}}function Kt(P){let r,o,n,f,t,d,S,j,A,M,D,O,x,N,J,L,R,H,q,Q,i,b,z,K,V,U,X,B,ee,u,T,Y,G,ce,W,Z,oe,te,he,Te,se,Pe,we,ze,xe,re,Re,be,Ve,Ne,fe,Qe,_e,Be,Ce,ue,Oe,ve,Ge,qe,ie,Ae,le,je,ye,Je,Me,me,De,pe,Le,ge,Ke,Ue,ae,Ie,Ze,We;return Q=new C({props:{src:Nt,alt:"3D sketch of propeller"}}),V=new C({props:{src:Qt,alt:"Finished propeller"}}),Z=new C({props:{src:bt,alt:"Simple cylinder for submarine body"}}),se=new He({props:{$$slots:{default:[Vt]},$$scope:{ctx:P}}}),re=new He({props:{$$slots:{default:[Bt]},$$scope:{ctx:P}}}),fe=new C({props:{src:bt,alt:"Propeller positoned on submarine"}}),ue=new C({props:{src:Ut,alt:"Mirrored end of submarine"}}),ie=new He({props:{$$slots:{default:[Gt]},$$scope:{ctx:P}}}),le=new He({props:{$$slots:{default:[Jt]},$$scope:{ctx:P}}}),me=new C({props:{src:Ct,alt:"Rendered image of the submarine"}}),pe=new It({props:{src:"submarine.glb"}}),{c(){r=c("p"),o=_("Of cousrse what good is a chess piece if it doesn\u2019t have some aquatic vechicle to ferry it around. Next up was designing the submarine the piece would sit on."),n=m(),f=c("p"),t=_("Why a submarine?"),d=m(),S=c("ul"),j=c("li"),A=_("Submarines are cool"),M=m(),D=c("li"),O=_("They can go underwater which is the effect I want for when a piece dies"),x=m(),N=c("h3"),J=_("Propeller"),L=m(),R=c("p"),H=_("First up for the submarine was a propeller. After defining the bottom and top of the propeller, I used Fusion\u2019s 3D sketch feature to sketch the rails."),q=m(),y(Q.$$.fragment),i=m(),b=c("p"),z=_("Then I made a cylinder for the shaft and circular patterned the blades around it. Finally I chamfered it\u2019s end to give it a point."),K=m(),y(V.$$.fragment),U=m(),X=c("h3"),B=_("Rest of the body"),ee=m(),u=c("p"),T=_("To get the submarine to alter it\u2019s density I thought I could use a motorized syringe. The idea is that the submarine would pull back the syrine, taking in water and hence sinking."),Y=m(),G=c("p"),ce=_("First up was the body this began as a simple cylinder"),W=m(),y(Z.$$.fragment),oe=m(),te=c("p"),he=_("Then I offset a plane from one of the ends, created a new sketch, and drew two smaller circles. Unfortunally, Fusion would not let me loft between the wall of my hallow cylinder and the area between my two sketched circles so I had to do two lofts one to create a new body and another to cut out the inside."),Te=m(),y(se.$$.fragment),Pe=m(),we=c("p"),ze=_("Now, at this point I realised I had no idea how propellers actually worked and started googling. Apparantly there\u2019s a whole sub internet culture dedicated to taking pictures and figuring out how US submarines work since the internals are all classified information. Anyway, the point is that I discovered the ends of my submarines would need sections cut out of them to allow water to get through while still protecting the propeller from large objects. I sketched an angled area, cut it out of the end of the submarine and circular patterend the feature all around."),xe=m(),y(re.$$.fragment),Re=m(),be=c("p"),Ve=_("Next up I wanted to position the propeller. I extruded a section out of one of the ends and positioned the propeller inside"),Ne=m(),y(fe.$$.fragment),Qe=m(),_e=c("p"),Be=_("For visuals I wanted the other side of the submarine to look the same so I mirrored about a central plane."),Ce=m(),y(ue.$$.fragment),Oe=m(),ve=c("p"),Ge=_("Next I thought this submarine could be a cool way to test out Fusion 360\u2019s joint system. I created the different syringe components (rubber end, rubber inset, shaft, threaded screw, screw inset)."),qe=m(),y(ie.$$.fragment),Ae=m(),y(le.$$.fragment),je=m(),ye=c("p"),Je=_("Finally I used joints to join them all together."),Me=m(),y(me.$$.fragment),De=m(),y(pe.$$.fragment),Le=m(),ge=c("p"),Ke=_("The end result animated nicely really nicely"),Ue=m(),ae=c("video"),Ie=c("source"),this.h()},l(e){r=h(e,"P",{});var a=w(r);o=v(a,"Of cousrse what good is a chess piece if it doesn\u2019t have some aquatic vechicle to ferry it around. Next up was designing the submarine the piece would sit on."),a.forEach(s),n=p(e),f=h(e,"P",{});var ke=w(f);t=v(ke,"Why a submarine?"),ke.forEach(s),d=p(e),S=h(e,"UL",{});var $e=w(S);j=h($e,"LI",{});var Ee=w(j);A=v(Ee,"Submarines are cool"),Ee.forEach(s),M=p($e),D=h($e,"LI",{});var Fe=w(D);O=v(Fe,"They can go underwater which is the effect I want for when a piece dies"),Fe.forEach(s),$e.forEach(s),x=p(e),N=h(e,"H3",{});var et=w(N);J=v(et,"Propeller"),et.forEach(s),L=p(e),R=h(e,"P",{});var tt=w(R);H=v(tt,"First up for the submarine was a propeller. After defining the bottom and top of the propeller, I used Fusion\u2019s 3D sketch feature to sketch the rails."),tt.forEach(s),q=p(e),g(Q.$$.fragment,e),i=p(e),b=h(e,"P",{});var st=w(b);z=v(st,"Then I made a cylinder for the shaft and circular patterned the blades around it. Finally I chamfered it\u2019s end to give it a point."),st.forEach(s),K=p(e),g(V.$$.fragment,e),U=p(e),X=h(e,"H3",{});var rt=w(X);B=v(rt,"Rest of the body"),rt.forEach(s),ee=p(e),u=h(e,"P",{});var it=w(u);T=v(it,"To get the submarine to alter it\u2019s density I thought I could use a motorized syringe. The idea is that the submarine would pull back the syrine, taking in water and hence sinking."),it.forEach(s),Y=p(e),G=h(e,"P",{});var lt=w(G);ce=v(lt,"First up was the body this began as a simple cylinder"),lt.forEach(s),W=p(e),g(Z.$$.fragment,e),oe=p(e),te=h(e,"P",{});var at=w(te);he=v(at,"Then I offset a plane from one of the ends, created a new sketch, and drew two smaller circles. Unfortunally, Fusion would not let me loft between the wall of my hallow cylinder and the area between my two sketched circles so I had to do two lofts one to create a new body and another to cut out the inside."),at.forEach(s),Te=p(e),g(se.$$.fragment,e),Pe=p(e),we=h(e,"P",{});var nt=w(we);ze=v(nt,"Now, at this point I realised I had no idea how propellers actually worked and started googling. Apparantly there\u2019s a whole sub internet culture dedicated to taking pictures and figuring out how US submarines work since the internals are all classified information. Anyway, the point is that I discovered the ends of my submarines would need sections cut out of them to allow water to get through while still protecting the propeller from large objects. I sketched an angled area, cut it out of the end of the submarine and circular patterend the feature all around."),nt.forEach(s),xe=p(e),g(re.$$.fragment,e),Re=p(e),be=h(e,"P",{});var ot=w(be);Ve=v(ot,"Next up I wanted to position the propeller. I extruded a section out of one of the ends and positioned the propeller inside"),ot.forEach(s),Ne=p(e),g(fe.$$.fragment,e),Qe=p(e),_e=h(e,"P",{});var ft=w(_e);Be=v(ft,"For visuals I wanted the other side of the submarine to look the same so I mirrored about a central plane."),ft.forEach(s),Ce=p(e),g(ue.$$.fragment,e),Oe=p(e),ve=h(e,"P",{});var ut=w(ve);Ge=v(ut,"Next I thought this submarine could be a cool way to test out Fusion 360\u2019s joint system. I created the different syringe components (rubber end, rubber inset, shaft, threaded screw, screw inset)."),ut.forEach(s),qe=p(e),g(ie.$$.fragment,e),Ae=p(e),g(le.$$.fragment,e),je=p(e),ye=h(e,"P",{});var mt=w(ye);Je=v(mt,"Finally I used joints to join them all together."),mt.forEach(s),Me=p(e),g(me.$$.fragment,e),De=p(e),g(pe.$$.fragment,e),Le=p(e),ge=h(e,"P",{});var pt=w(ge);Ke=v(pt,"The end result animated nicely really nicely"),pt.forEach(s),Ue=p(e),ae=h(e,"VIDEO",{width:!0});var $t=w(ae);Ie=h($t,"SOURCE",{src:!0,type:!0}),$t.forEach(s),this.h()},h(){Xe(Ie.src,Ze=Ht)||Se(Ie,"src",Ze),Se(Ie,"type","video/mp4"),Se(ae,"width","400"),ae.controls=!0},m(e,a){l(e,r,a),$(r,o),l(e,n,a),l(e,f,a),$(f,t),l(e,d,a),l(e,S,a),$(S,j),$(j,A),$(S,M),$(S,D),$(D,O),l(e,x,a),l(e,N,a),$(N,J),l(e,L,a),l(e,R,a),$(R,H),l(e,q,a),I(Q,e,a),l(e,i,a),l(e,b,a),$(b,z),l(e,K,a),I(V,e,a),l(e,U,a),l(e,X,a),$(X,B),l(e,ee,a),l(e,u,a),$(u,T),l(e,Y,a),l(e,G,a),$(G,ce),l(e,W,a),I(Z,e,a),l(e,oe,a),l(e,te,a),$(te,he),l(e,Te,a),I(se,e,a),l(e,Pe,a),l(e,we,a),$(we,ze),l(e,xe,a),I(re,e,a),l(e,Re,a),l(e,be,a),$(be,Ve),l(e,Ne,a),I(fe,e,a),l(e,Qe,a),l(e,_e,a),$(_e,Be),l(e,Ce,a),I(ue,e,a),l(e,Oe,a),l(e,ve,a),$(ve,Ge),l(e,qe,a),I(ie,e,a),l(e,Ae,a),I(le,e,a),l(e,je,a),l(e,ye,a),$(ye,Je),l(e,Me,a),I(me,e,a),l(e,De,a),I(pe,e,a),l(e,Le,a),l(e,ge,a),$(ge,Ke),l(e,Ue,a),l(e,ae,a),$(ae,Ie),We=!0},p(e,a){const ke={};a&2&&(ke.$$scope={dirty:a,ctx:e}),se.$set(ke);const $e={};a&2&&($e.$$scope={dirty:a,ctx:e}),re.$set($e);const Ee={};a&2&&(Ee.$$scope={dirty:a,ctx:e}),ie.$set(Ee);const Fe={};a&2&&(Fe.$$scope={dirty:a,ctx:e}),le.$set(Fe)},i(e){We||(k(Q.$$.fragment,e),k(V.$$.fragment,e),k(Z.$$.fragment,e),k(se.$$.fragment,e),k(re.$$.fragment,e),k(fe.$$.fragment,e),k(ue.$$.fragment,e),k(ie.$$.fragment,e),k(le.$$.fragment,e),k(me.$$.fragment,e),k(pe.$$.fragment,e),We=!0)},o(e){E(Q.$$.fragment,e),E(V.$$.fragment,e),E(Z.$$.fragment,e),E(se.$$.fragment,e),E(re.$$.fragment,e),E(fe.$$.fragment,e),E(ue.$$.fragment,e),E(ie.$$.fragment,e),E(le.$$.fragment,e),E(me.$$.fragment,e),E(pe.$$.fragment,e),We=!1},d(e){e&&s(r),e&&s(n),e&&s(f),e&&s(d),e&&s(S),e&&s(x),e&&s(N),e&&s(L),e&&s(R),e&&s(q),F(Q,e),e&&s(i),e&&s(b),e&&s(K),F(V,e),e&&s(U),e&&s(X),e&&s(ee),e&&s(u),e&&s(Y),e&&s(G),e&&s(W),F(Z,e),e&&s(oe),e&&s(te),e&&s(Te),F(se,e),e&&s(Pe),e&&s(we),e&&s(xe),F(re,e),e&&s(Re),e&&s(be),e&&s(Ne),F(fe,e),e&&s(Qe),e&&s(_e),e&&s(Ce),F(ue,e),e&&s(Oe),e&&s(ve),e&&s(qe),F(ie,e),e&&s(Ae),F(le,e),e&&s(je),e&&s(ye),e&&s(Me),F(me,e),e&&s(De),F(pe,e),e&&s(Le),e&&s(ge),e&&s(Ue),e&&s(ae)}}}function Xt(P){let r,o,n,f,t,d,S,j,A,M,D,O,x,N,J,L,R,H,q,Q,i,b,z,K,V,U,X,B,ee;return U=new ht({props:{title:"Modelling the Queen",$$slots:{default:[zt]},$$scope:{ctx:P}}}),B=new ht({props:{title:"Modelling the Submarine",$$slots:{default:[Kt]},$$scope:{ctx:P}}}),{c(){r=c("p"),o=_(`For the first week our assignment was to 3D model in a variety of software a potential final project idea. I\u2019m not settled yet but I\u2019ve always wanted to build a submarine so ran with that.
The first question is what would I do with a submarine, so now I\u2019m introducing `),n=c("strong"),f=_("Naval Chess"),t=_("."),d=m(),S=c("h3"),j=_("What is Naval Chess?"),A=m(),M=c("p"),D=_("My idea with Naval chess is to be able to play a chess game but entirely on water. Ideally I\u2019d like to:"),O=m(),x=c("ol"),N=c("li"),J=_("Have portable chess pieces"),L=m(),R=c("li"),H=_("They can move around the water"),q=m(),Q=c("li"),i=_("They sink when they\u2019re killed"),b=m(),z=c("li"),K=_("They somehow understand their relative posititons."),V=m(),y(U.$$.fragment),X=m(),y(B.$$.fragment)},l(u){r=h(u,"P",{});var T=w(r);o=v(T,`For the first week our assignment was to 3D model in a variety of software a potential final project idea. I\u2019m not settled yet but I\u2019ve always wanted to build a submarine so ran with that.
The first question is what would I do with a submarine, so now I\u2019m introducing `),n=h(T,"STRONG",{});var Y=w(n);f=v(Y,"Naval Chess"),Y.forEach(s),t=v(T,"."),T.forEach(s),d=p(u),S=h(u,"H3",{});var G=w(S);j=v(G,"What is Naval Chess?"),G.forEach(s),A=p(u),M=h(u,"P",{});var ce=w(M);D=v(ce,"My idea with Naval chess is to be able to play a chess game but entirely on water. Ideally I\u2019d like to:"),ce.forEach(s),O=p(u),x=h(u,"OL",{});var W=w(x);N=h(W,"LI",{});var Z=w(N);J=v(Z,"Have portable chess pieces"),Z.forEach(s),L=p(W),R=h(W,"LI",{});var oe=w(R);H=v(oe,"They can move around the water"),oe.forEach(s),q=p(W),Q=h(W,"LI",{});var te=w(Q);i=v(te,"They sink when they\u2019re killed"),te.forEach(s),b=p(W),z=h(W,"LI",{});var he=w(z);K=v(he,"They somehow understand their relative posititons."),he.forEach(s),W.forEach(s),V=p(u),g(U.$$.fragment,u),X=p(u),g(B.$$.fragment,u)},m(u,T){l(u,r,T),$(r,o),$(r,n),$(n,f),$(r,t),l(u,d,T),l(u,S,T),$(S,j),l(u,A,T),l(u,M,T),$(M,D),l(u,O,T),l(u,x,T),$(x,N),$(N,J),$(x,L),$(x,R),$(R,H),$(x,q),$(x,Q),$(Q,i),$(x,b),$(x,z),$(z,K),l(u,V,T),I(U,u,T),l(u,X,T),I(B,u,T),ee=!0},p(u,T){const Y={};T&2&&(Y.$$scope={dirty:T,ctx:u}),U.$set(Y);const G={};T&2&&(G.$$scope={dirty:T,ctx:u}),B.$set(G)},i(u){ee||(k(U.$$.fragment,u),k(B.$$.fragment,u),ee=!0)},o(u){E(U.$$.fragment,u),E(B.$$.fragment,u),ee=!1},d(u){u&&s(r),u&&s(d),u&&s(S),u&&s(A),u&&s(M),u&&s(O),u&&s(x),u&&s(V),F(U,u),u&&s(X),F(B,u)}}}function Yt(P){let r,o;const n=[P[0],_t];let f={$$slots:{default:[Xt]},$$scope:{ctx:P}};for(let t=0;t<n.length;t+=1)f=Ye(f,n[t]);return r=new Et({props:f}),{c(){y(r.$$.fragment)},l(t){g(r.$$.fragment,t)},m(t,d){I(r,t,d),o=!0},p(t,[d]){const S=d&1?kt(n,[d&1&&dt(t[0]),d&0&&dt(_t)]):{};d&2&&(S.$$scope={dirty:d,ctx:t}),r.$set(S)},i(t){o||(k(r.$$.fragment,t),o=!0)},o(t){E(r.$$.fragment,t),o=!1},d(t){F(r,t)}}}const _t={title:"01 | Computer Aided Design"};function Zt(P,r,o){return P.$$set=n=>{o(0,r=Ye(Ye({},r),ct(n)))},r=ct(r),[r]}class as extends vt{constructor(r){super(),yt(this,r,Zt,Yt,gt,{})}}export{as as default,_t as metadata};
