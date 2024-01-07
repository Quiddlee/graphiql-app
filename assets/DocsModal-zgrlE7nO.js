import{j as n,D as N,S as Q,u as g,I as v,a as w,b as B,r as I}from"./index-W1uvvgr6.js";const M=()=>n.jsx(N,{children:n.jsxs("div",{className:"flex h-full w-full flex-col items-center justify-center",children:[n.jsx(Q,{indeterminate:!0}),n.jsx("p",{className:"mt-10 text-on-surface",children:"We are loading your docs..."})]})}),U=({types:a,explorer:e})=>{function i(o,d){o.preventDefault(),e.next(d)}const l=a.filter(o=>o.name[0]!=="_"&&o.name[1]!=="_").map((o,d)=>d>0?n.jsx("li",{children:n.jsx("a",{className:"text-docs-link-text-color hover:underline",href:o.name,onClick:r=>i(r,o.name),children:o.name})},o.name):null),t=g();return n.jsxs("div",{ref:t,className:"h-full animate-fade-in-section",children:[n.jsxs("div",{className:"animate-fade-in-section rounded-[24px] bg-surface-container px-8 py-10 text-left text-on-surface ease-emphasized-decelerate sm:p-[56px]",children:[n.jsx("h3",{className:"text-[36px] font-[500] sm:text-[57px]",children:"Docs"}),n.jsx("p",{className:"sm:text-md mt-10 text-left text-sm",children:"A GraphQL schema provides a root type for each kind of operation."})]}),n.jsxs("div",{className:"mt-0 pl-10 pr-4 pt-10 text-left font-[500] ease-emphasized-decelerate sm:mt-[56px] sm:p-10 sm:px-[56px]",children:[n.jsx("h4",{className:"animation-delay-200 animate-fade-in-section text-2xl ease-emphasized-decelerate sm:text-[28px]",children:"Root types:"}),n.jsxs("p",{className:"animation-delay-200 mt-4 animate-fade-in-section ease-emphasized-decelerate",children:["query: ",n.jsx("a",{className:"text-docs-link-text-color hover:underline",href:a[0].name,onClick:o=>i(o,a[0].name),children:a[0].name})]}),n.jsx("h4",{className:"animation-delay-300 mt-8 animate-fade-in-section text-2xl ease-emphasized-decelerate sm:mt-[56px] sm:text-[28px]",children:"All schema types:"}),n.jsx("ul",{className:"animation-delay-300 mt-4 animate-fade-in-section ease-emphasized-decelerate",children:l})]})]})},Z=({onClick:a,title:e})=>n.jsxs("button",{type:"button",onClick:a,className:"flex w-fit animate-fade-in-section items-center gap-1 rounded-full px-4 py-2 ease-emphasized-decelerate hover:bg-slate-500/30 ",children:[n.jsx(v,{className:"animation-delay-200 animate-fade-in-screen ease-standard-decelerate",children:"arrow_back_ios"}),n.jsx("span",{className:"animate-fade-in-section truncate text-2xl ease-emphasized-decelerate",children:e},e)]});function S(a){if(a!=null&&a.name)return a==null?void 0:a.name;const e=[];(a==null?void 0:a.kind)==="NON_NULL"&&e.push("!"),(a==null?void 0:a.kind)==="LIST"&&e.push("[]");function i(t){return t!=null&&t.name?e.push(t.name):((t==null?void 0:t.kind)==="NON_NULL"&&e.push("!"),(t==null?void 0:t.kind)==="LIST"&&e.push("[]"),i(t==null?void 0:t.ofType))}return i(a==null?void 0:a.ofType),e.reduceRight((t,o)=>o==="!"?`${t}!`:o==="[]"?`[${t}]`:t+o)}function _(a){const e=/([^a-zA-Z]*)([a-zA-Z]+)([^a-zA-Z]*$)/,i=a.match(e);if(i){const[,l,t,o]=i;return[l,t,o]}return["",a,""]}const $=({explorer:a,currType:e})=>{var b,y,D,z,C;function i(s,c){s.preventDefault(),a.next(c)}const l=(b=e==null?void 0:e.fields)==null?void 0:b.map(s=>{const c=s.args.map((u,L)=>{const T=S(u.type),[E,k,A]=_(T),j=s.args.length>1,F=n.jsx("br",{}),V=L>=s.args.length-1?n.jsx("br",{}):null;return n.jsxs("p",{className:"inline",children:[j&&F,n.jsxs("span",{className:j?"pl-3":"",children:[n.jsx("span",{className:"text-tertiary",children:u.name}),": ",E,n.jsx("a",{className:"text-docs-link-text-color hover:underline",href:k,onClick:q=>i(q,k),children:k}),A]}),j&&V]},T.concat(L.toString()))}),h=S(s.type),[f,x,p]=_(h);return n.jsxs("li",{children:[n.jsx("span",{className:"text-docs-field-text-color",children:s.name}),c.length>0&&"(",c,c.length>0&&")",": ",f,n.jsx("a",{className:"text-docs-link-text-color hover:underline",href:x,onClick:u=>i(u,x),children:x}),p,n.jsx("br",{}),s.description]},s.name)}),t=(y=e==null?void 0:e.inputFields)==null?void 0:y.map(s=>{var c,h,f;return n.jsxs("li",{children:[s.name,": ",n.jsx("a",{className:"text-docs-link-text-color hover:underline",href:((c=s==null?void 0:s.type)==null?void 0:c.name)||"#",onClick:x=>{var p;return i(x,(p=s==null?void 0:s.type)==null?void 0:p.name)},children:(h=s==null?void 0:s.type)==null?void 0:h.name})]},(f=s==null?void 0:s.type)==null?void 0:f.name)}),o=l||t,d=(D=e==null?void 0:e.enumValues)==null?void 0:D.map(s=>n.jsx("li",{children:s.name},s.name)),r=(z=e==null?void 0:e.possibleTypes)==null?void 0:z.map(s=>n.jsx("li",{children:n.jsx("a",{className:"text-docs-link-text-color hover:underline",href:s.name,onClick:c=>i(c,s.name),children:s.name})},s.name)),m=(C=e==null?void 0:e.interfaces)==null?void 0:C.map(s=>n.jsx("li",{children:n.jsx("a",{className:"text-docs-link-text-color hover:underline",href:s.name,onClick:c=>i(c,s.name),children:s.name})},s.name)),R=g();return n.jsx("div",{ref:R,className:"h-full overflow-x-hidden",children:n.jsxs("div",{className:"p-10 text-left text-on-surface sm:px-[56px] sm:py-[56px]",children:[n.jsx(Z,{onClick:()=>a.back(),title:a.prev()}),n.jsxs("article",{className:"origin-top animate-fade-in-section ease-emphasized-decelerate",children:[n.jsx("h2",{className:"mt-4 w-full truncate text-2xl sm:mt-8 sm:text-3xl",children:e.name}),n.jsx("p",{className:"mt-8",children:e==null?void 0:e.description}),m&&(m==null?void 0:m.length)>0&&n.jsx("h3",{className:"text-xl",children:"Implements:"}),n.jsx("ul",{className:"mt-8 flex flex-col gap-5",children:m}),o&&n.jsx("h3",{className:"text-xl",children:"Fields:"}),n.jsx("ul",{className:"mt-8 flex flex-col gap-5",children:l}),n.jsx("ul",{className:"mt-8 flex flex-col gap-5",children:t}),d&&n.jsx("h3",{className:"text-xl",children:"Enum values:"}),n.jsx("ul",{className:"mt-8 flex flex-col gap-5",children:d}),r&&n.jsx("h3",{className:"text-xl",children:"Implementations"}),n.jsx("ul",{className:"mt-8 flex flex-col gap-5",children:r})]},e.name)]})})},H=({closeModal:a})=>n.jsxs(N,{children:[n.jsx(w,{onClick:()=>{a(e=>!e)},className:"absolute right-[20px] top-[20px] z-20","data-testid":"closeDocs",children:n.jsx(v,{children:"close"})}),n.jsx("div",{className:"flex h-full w-full items-center p-6",children:n.jsx("p",{className:"w-full text-center text-on-surface",children:"There is no schema at provided endpoint :("})})]}),G={query:`query IntrospectionQuery {
  __schema {
    queryType {
      name
    }
    mutationType {
      name
    }
    types {
      kind
      name
      description
      fields(includeDeprecated: true) {
        name
        args {
          name
          description
          type {
            kind
            name
            ofType {
              kind
              name
              ofType {
                kind
                name
                ofType {
                  kind
                  name
                  ofType {
                    kind
                    name
                    ofType {
                      kind
                      name
                      ofType {
                        kind
                        name
                        ofType {
                          kind
                          name
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          defaultValue
        }
        type {
          kind
          name
          ofType {
            kind
            name
            ofType {
              kind
              name
              ofType {
                kind
                name
                ofType {
                  kind
                  name
                  ofType {
                    kind
                    name
                    ofType {
                      kind
                      name
                      ofType {
                        kind
                        name
                      }
                    }
                  }
                }
              }
            }
          }
        }
        isDeprecated
        deprecationReason
      }
      inputFields {
        name
        type {
          kind
          name
          ofType {
            kind
            name
            ofType {
              kind
              name
              ofType {
                kind
                name
                ofType {
                  kind
                  name
                  ofType {
                    kind
                    name
                    ofType {
                      kind
                      name
                      ofType {
                        kind
                        name
                      }
                    }
                  }
                }
              }
            }
          }
        }
        defaultValue
      }
      interfaces {
        kind
        name
        ofType {
          kind
          name
          ofType {
            kind
            name
            ofType {
              kind
              name
              ofType {
                kind
                name
                ofType {
                  kind
                  name
                  ofType {
                    kind
                    name
                    ofType {
                      kind
                      name
                    }
                  }
                }
              }
            }
          }
        }
      }
      enumValues(includeDeprecated: true) {
        name
        isDeprecated
        deprecationReason
      }
      possibleTypes {
        kind
        name
        ofType {
          kind
          name
          ofType {
            kind
            name
            ofType {
              kind
              name
              ofType {
                kind
                name
                ofType {
                  kind
                  name
                  ofType {
                    kind
                    name
                    ofType {
                      kind
                      name
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    directives {
      name
      locations
      args {
        name
        type {
          kind
          name
          ofType {
            kind
            name
            ofType {
              kind
              name
              ofType {
                kind
                name
                ofType {
                  kind
                  name
                  ofType {
                    kind
                    name
                    ofType {
                      kind
                      name
                      ofType {
                        kind
                        name
                      }
                    }
                  }
                }
              }
            }
          }
        }
        defaultValue
      }
    }
  }
}`,operationName:"IntrospectionQuery"};async function J(a,e,i){try{i(!0);const l=await fetch(a,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(G)});if(l.ok&&l.status===200){const t=await l.json();return i(!1),e(t.data.__schema)}return i(!1),e(null)}catch{return i(!1),e(null)}}const W=({setIsDocsShown:a,explorer:e})=>{const{currEndpoint:i,setEndpointSchema:l,endpointSchema:t}=B(),[o,d]=I.useState(!1);if(I.useEffect(()=>{J(i,l,d)},[i,l]),o)return n.jsx(M,{});if(!t)return n.jsx(H,{closeModal:a});const r=e.isDocs()?n.jsx(U,{types:t.types,explorer:e}):n.jsx($,{explorer:e,currType:t.types.find(m=>m.name===e.current())});return n.jsxs(N,{children:[n.jsx(w,{onClick:()=>{a(m=>!m),e.setInitState()},className:"animation-delay-200 absolute right-[20px] top-[20px] z-20 animate-fade-in-screen ease-standard-decelerate","data-testid":"closeDocs",children:n.jsx(v,{children:"close"})}),r]})};export{W as default};
