(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{71:function(e,t,n){},82:function(e,t,n){},84:function(e,t,n){"use strict";n.r(t);var r=n(5),c=n(2),s=n.n(c),i=n(61),a=n.n(i),o=n(24),l=(n(71),n(44)),u=n(86),j=n(33),h=n(43),x=n(87),d=n(88),b={margin:"12px"},m=function(e){var t=e.exerciseTypes,n=e.exerciseState,c=e.setExerciseState,s=e.submitRequest,i=e.areResultsShown,a=function(e){c(Object(h.a)(Object(h.a)({},n),{},Object(j.a)({},e.target.id,e.target.checked)))};return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h4",{children:"What body parts would you like to exercise?"}),Object(r.jsxs)(x.a,{children:[Object(r.jsx)("div",{className:"options-container",style:{margin:"20px 0"},children:t.map((function(e){return Object(r.jsx)(x.a.Check,{inline:!0,type:"checkbox",checked:n[e],id:e,label:e,onChange:a},e)}))}),i?Object(r.jsx)(d.a,{style:b,variant:"primary",onClick:function(){return s(!1)},children:"Clear Results"}):Object(r.jsx)(d.a,{style:b,variant:"primary",onClick:function(){return s(!0)},children:"Get Workout!"})]})]})},p=n(85),O=n(62),y=function(e){var t=e.children;return Object(r.jsxs)(p.a,{style:{margin:"24px 0"},children:[Object(r.jsx)(O.a,{}),Object(r.jsx)(O.a,{xs:6,children:t}),Object(r.jsx)(O.a,{})]})},f=n(63),v=n(47),g=function(e){var t=e.exercise,n=e.data;return Object(r.jsxs)("div",{className:"result-row",style:{margin:"24px 0"},children:[Object(r.jsx)("h5",{children:t}),Object(r.jsxs)("div",{children:["Name: ",n.name]}),Object(r.jsxs)("div",{children:["Type: ",v.startCase(n.type)]}),Object(r.jsxs)("div",{children:["Movement: ",v.startCase(n.movement)]}),Object(r.jsxs)("div",{children:["Sets: ",n.sets]}),Object(r.jsxs)("div",{children:["Reps: ",n.reps]})]})},k={Chest:"chestExercise {\n      name,\n      type,\n      movement,\n      sets,\n      reps\n    }",Legs:"legExercise {\n      name,\n      type,\n      movement,\n      sets,\n      reps\n    }",Back:"backExercise {\n      name,\n      type,\n      movement,\n      sets,\n      reps\n    }",Arms:"armExercise {\n      name,\n      type,\n      movement,\n      sets,\n      reps\n    }",Shoulders:"shoulderExercise {\n      name,\n      type,\n      movement,\n      sets,\n      reps\n    }"},C={chestExercise:"Chest",legExercise:"Legs",backExercise:"Back",armExercise:"Arms",shoulderExercise:"Shoulders"},E=["Chest","Legs","Back","Arms","Shoulders"];function S(){var e=Object(f.a)(["\n  query Query {\n    ","\n  }\n  "]);return S=function(){return e},e}var w=n(47),T=function(e){var t=e.exercisesToQuery.map((function(e){return k[e]})).join("\n"),n=Object(o.gql)(S(),t),c=Object(o.useQuery)(n).data;return Object(r.jsx)("div",{className:"results-container",style:{margin:"36px 0"},children:w.map(c,(function(e,t){return Object(r.jsx)(g,{exercise:C[t],data:e},t)}))})},q=(n(82),function(){var e=Object(c.useState)(!1),t=Object(l.a)(e,2),n=t[0],s=t[1],i=Object(c.useState)((function(){var e={};return E.forEach((function(t){return e[t]=!0})),e})),a=Object(l.a)(i,2),o=a[0],j=a[1];return Object(r.jsx)(u.a,{children:Object(r.jsxs)("div",{className:"App",style:{marginTop:"16px"},children:[Object(r.jsx)("h1",{style:{display:"block",margin:"auto"},children:"Blubber Buster"}),Object(r.jsx)(y,{children:Object(r.jsx)(m,{exerciseTypes:E,exerciseState:o,setExerciseState:j,submitRequest:s,areResultsShown:n})}),n&&Object(r.jsxs)(y,{children:[Object(r.jsx)("h4",{children:"Here is your custom exercise!"}),Object(r.jsx)("p",{children:"Toggle the checkboxes to request different exercises."}),Object(r.jsx)(T,{exercisesToQuery:E.filter((function(e){return o[e]}))})]})]})})}),B=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,89)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),s(e),i(e)}))},P=new o.ApolloClient({cache:new o.InMemoryCache,uri:"/graphql",defaultOptions:{watchQuery:{fetchPolicy:"no-cache",errorPolicy:"ignore"},query:{fetchPolicy:"no-cache",errorPolicy:"all"}}});a.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(o.ApolloProvider,{client:P,children:Object(r.jsx)(q,{})})}),document.getElementById("root")),B()}},[[84,1,2]]]);
//# sourceMappingURL=main.83abe090.chunk.js.map