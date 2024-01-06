import{j as n,D as N,S as Q,u as w,I as v,a as R,b as B,r as S}from"./index-CUSxD1jz.js";const M=()=>n.jsx(N,{children:n.jsxs("div",{className:"flex h-full w-full flex-col items-center justify-center",children:[n.jsx(Q,{indeterminate:!0}),n.jsx("p",{className:"mt-10 text-on-surface",children:"We are loading your docs..."})]})}),U=({types:s,explorer:e})=>{function o(l,d){l.preventDefault(),e.next(d)}const i=s.filter(l=>l.name[0]!=="_"&&l.name[1]!=="_").map((l,d)=>d>0?n.jsx("li",{children:n.jsx("a",{className:"text-docs-link-text-color hover:underline",href:l.name,onClick:r=>o(r,l.name),children:l.name})},l.name):null),a=w();return n.jsxs("div",{ref:a,className:"h-full",children:[n.jsxs("div",{className:"rounded-[24px] bg-surface-container px-8 py-10 text-left text-on-surface sm:p-[56px]",children:[n.jsx("h3",{className:"text-[36px] font-[500] sm:text-[57px]",children:"Docs"}),n.jsx("p",{className:"sm:text-md mt-10 text-left text-sm",children:"A GraphQL schema provides a root type for each kind of operation."})]}),n.jsxs("div",{className:"mt-0 pl-10 pr-4 pt-10 text-left font-[500] sm:mt-[56px] sm:p-10 sm:px-[56px]",children:[n.jsx("h4",{className:"text-2xl sm:text-[28px]",children:"Root types:"}),n.jsxs("p",{className:"mt-4",children:["query: ",n.jsx("a",{className:"text-docs-link-text-color hover:underline",href:s[0].name,onClick:l=>o(l,s[0].name),children:s[0].name})]}),n.jsx("h4",{className:"mt-8 text-2xl sm:mt-[56px] sm:text-[28px]",children:"All schema types:"}),n.jsx("ul",{className:"mt-4",children:i})]})]})},Z=({onClick:s,title:e})=>n.jsxs("button",{type:"button",onClick:s,className:"flex w-full items-center gap-1 rounded-full p-2 hover:bg-slate-500/30 ",children:[n.jsx(v,{children:"arrow_back_ios"}),n.jsx("span",{className:"truncate text-2xl",children:e})]});function _(s){if(s!=null&&s.name)return s==null?void 0:s.name;const e=[];(s==null?void 0:s.kind)==="NON_NULL"&&e.push("!"),(s==null?void 0:s.kind)==="LIST"&&e.push("[]");function o(a){return a!=null&&a.name?e.push(a.name):((a==null?void 0:a.kind)==="NON_NULL"&&e.push("!"),(a==null?void 0:a.kind)==="LIST"&&e.push("[]"),o(a==null?void 0:a.ofType))}return o(s==null?void 0:s.ofType),e.reduceRight((a,l)=>l==="!"?`${a}!`:l==="[]"?`[${a}]`:a+l)}function g(s){const e=/([^a-zA-Z]*)([a-zA-Z]+)([^a-zA-Z]*$)/,o=s.match(e);if(o){const[,i,a,l]=o;return[i,a,l]}return["",s,""]}const $=({explorer:s,currType:e})=>{var b,D,C,L,T;function o(t,c){t.preventDefault(),s.next(c)}const i=(b=e==null?void 0:e.fields)==null?void 0:b.map(t=>{const c=t.args.map((f,y)=>{const I=_(f.type),[A,k,F]=g(I),j=t.args.length>1,V=n.jsx("br",{}),z=y>=t.args.length-1?n.jsx("br",{}):null;return n.jsxs("p",{className:"inline",children:[j&&V,n.jsxs("span",{className:j?"pl-3":"",children:[n.jsx("span",{className:"text-tertiary",children:f.name}),": ",A,n.jsx("a",{className:"text-docs-link-text-color hover:underline",href:k,onClick:q=>o(q,k),children:k}),F]}),j&&z]},I.concat(y.toString()))}),h=_(t.type),[p,x,u]=g(h);return n.jsxs("li",{children:[n.jsx("span",{className:"text-docs-field-text-color",children:t.name}),c.length>0&&"(",c,c.length>0&&")",": ",p,n.jsx("a",{className:"text-docs-link-text-color hover:underline",href:x,onClick:f=>o(f,x),children:x}),u,n.jsx("br",{}),t.description]},t.name)}),a=(D=e==null?void 0:e.inputFields)==null?void 0:D.map(t=>{var c,h,p;return n.jsxs("li",{children:[t.name,": ",n.jsx("a",{className:"text-docs-link-text-color hover:underline",href:((c=t==null?void 0:t.type)==null?void 0:c.name)||"#",onClick:x=>{var u;return o(x,(u=t==null?void 0:t.type)==null?void 0:u.name)},children:(h=t==null?void 0:t.type)==null?void 0:h.name})]},(p=t==null?void 0:t.type)==null?void 0:p.name)}),l=i||a,d=(C=e==null?void 0:e.enumValues)==null?void 0:C.map(t=>n.jsx("li",{children:t.name},t.name)),r=(L=e==null?void 0:e.possibleTypes)==null?void 0:L.map(t=>n.jsx("li",{children:n.jsx("a",{className:"text-docs-link-text-color hover:underline",href:t.name,onClick:c=>o(c,t.name),children:t.name})},t.name)),m=(T=e==null?void 0:e.interfaces)==null?void 0:T.map(t=>n.jsx("li",{children:n.jsx("a",{className:"text-docs-link-text-color hover:underline",href:t.name,onClick:c=>o(c,t.name),children:t.name})},t.name)),E=w();return n.jsx("div",{ref:E,className:"h-full overflow-x-hidden",children:n.jsxs("div",{className:"p-10 text-left text-on-surface sm:px-[56px] sm:py-[56px]",children:[n.jsx(Z,{onClick:()=>s.back(),title:s.prev()}),n.jsx("h2",{className:"mt-4 w-full truncate text-2xl sm:mt-8 sm:text-3xl",children:e.name}),n.jsx("p",{className:"mt-8",children:e==null?void 0:e.description}),m&&(m==null?void 0:m.length)>0&&n.jsx("h3",{className:"text-xl",children:"Implements:"}),n.jsx("ul",{className:"mt-8 flex flex-col gap-5",children:m}),l&&n.jsx("h3",{className:"text-xl",children:"Fields:"}),n.jsx("ul",{className:"mt-8 flex flex-col gap-5",children:i}),n.jsx("ul",{className:"mt-8 flex flex-col gap-5",children:a}),d&&n.jsx("h3",{className:"text-xl",children:"Enum values:"}),n.jsx("ul",{className:"mt-8 flex flex-col gap-5",children:d}),r&&n.jsx("h3",{className:"text-xl",children:"Implementations"}),n.jsx("ul",{className:"mt-8 flex flex-col gap-5",children:r})]})})},H=({closeModal:s})=>n.jsxs(N,{children:[n.jsx(R,{onClick:()=>{s(e=>!e)},className:"absolute right-[20px] top-[20px] z-20","data-testid":"closeDocs",children:n.jsx(v,{children:"close"})}),n.jsx("div",{className:"flex h-full w-full items-center p-6",children:n.jsx("p",{className:"w-full text-center text-on-surface",children:"There is no schema at provided endpoint :("})})]}),G={query:`query IntrospectionQuery {
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
}`,operationName:"IntrospectionQuery"};async function J(s,e,o){try{o(!0);const i=await fetch(s,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(G)});if(i.ok&&i.status===200){const a=await i.json();return o(!1),e(a.data.__schema)}return o(!1),e(null)}catch{return o(!1),e(null)}}const W=({setIsDocsShown:s,explorer:e})=>{const{currEndpoint:o,setEndpointSchema:i,endpointSchema:a}=B(),[l,d]=S.useState(!1);if(S.useEffect(()=>{J(o,i,d)},[o,i]),l)return n.jsx(M,{});if(!a)return n.jsx(H,{closeModal:s});const r=e.isDocs()?n.jsx(U,{types:a.types,explorer:e}):n.jsx($,{explorer:e,currType:a.types.find(m=>m.name===e.current())});return n.jsxs(N,{children:[n.jsx(R,{onClick:()=>{s(m=>!m),e.setInitState()},className:"absolute right-[20px] top-[20px] z-20","data-testid":"closeDocs",children:n.jsx(v,{children:"close"})}),r]})};export{W as default};
