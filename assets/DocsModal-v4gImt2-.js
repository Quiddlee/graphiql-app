import{j as n,D as y,S as B,u as w,I as C,a as E,b as M,r as g,c as Q}from"./index-saEiOEM_.js";const U=({text:a})=>n.jsx(y,{children:n.jsxs("div",{className:"flex h-full w-full flex-col items-center justify-center",children:[n.jsx(B,{indeterminate:!0}),n.jsx("p",{className:"mt-10 text-on-surface",children:a})]})}),Z=({types:a,explorer:e,translation:i})=>{const{title:o,subtitle:t,rootTypes:m,allTypesTitle:f}=i;function h(l,r){l.preventDefault(),e.next(r)}const d=a.filter(l=>l.name[0]!=="_"&&l.name[1]!=="_").map((l,r)=>r>0?n.jsx("li",{children:n.jsx("a",{className:"text-docs-link-text-color hover:underline",href:l.name,onClick:x=>h(x,l.name),children:l.name})},l.name):null),p=w();return n.jsxs("div",{ref:p,className:"h-full animate-fade-in-section",children:[n.jsxs("div",{className:"animate-fade-in-section rounded-[24px] bg-surface-container px-8 py-10 text-left text-on-surface ease-emphasized-decelerate sm:p-[56px]",children:[n.jsx("h3",{className:"text-[36px] font-[500] sm:text-[57px]",children:o}),n.jsx("p",{className:"sm:text-md mt-10 text-left text-sm",children:t})]}),n.jsxs("div",{className:"mt-0 pl-10 pr-4 pt-10 text-left font-[500] ease-emphasized-decelerate sm:mt-[56px] sm:p-10 sm:px-[56px]",children:[n.jsx("h4",{className:"animation-delay-200 animate-fade-in-section text-2xl ease-emphasized-decelerate sm:text-[28px]",children:m}),n.jsxs("p",{className:"animation-delay-200 mt-4 animate-fade-in-section ease-emphasized-decelerate",children:["query: ",n.jsx("a",{className:"text-docs-link-text-color hover:underline",href:a[0].name,onClick:l=>h(l,a[0].name),children:a[0].name})]}),n.jsx("h4",{className:"animation-delay-300 mt-8 animate-fade-in-section text-2xl ease-emphasized-decelerate sm:mt-[56px] sm:text-[28px]",children:f}),n.jsx("ul",{className:"animation-delay-300 mt-4 animate-fade-in-section ease-emphasized-decelerate",children:d})]})]})},$=({onClick:a,title:e})=>n.jsxs("button",{type:"button",onClick:a,className:"flex w-fit animate-fade-in-section items-center gap-1 rounded-full px-4 py-2 ease-emphasized-decelerate hover:bg-slate-500/30 ",children:[n.jsx(C,{className:"animation-delay-200 animate-fade-in-screen ease-standard-decelerate",children:"arrow_back_ios"}),n.jsx("span",{className:"animate-fade-in-section truncate text-2xl ease-emphasized-decelerate",children:e},e)]});function I(a){if(a!=null&&a.name)return a==null?void 0:a.name;const e=[];(a==null?void 0:a.kind)==="NON_NULL"&&e.push("!"),(a==null?void 0:a.kind)==="LIST"&&e.push("[]");function i(t){return t!=null&&t.name?e.push(t.name):((t==null?void 0:t.kind)==="NON_NULL"&&e.push("!"),(t==null?void 0:t.kind)==="LIST"&&e.push("[]"),i(t==null?void 0:t.ofType))}return i(a==null?void 0:a.ofType),e.reduceRight((t,m)=>m==="!"?`${t}!`:m==="[]"?`[${t}]`:t+m)}function _(a){const e=/([^a-zA-Z]*)([a-zA-Z]+)([^a-zA-Z]*$)/,i=a.match(e);if(i){const[,o,t,m]=i;return[o,t,m]}return["",a,""]}const H=({explorer:a,currType:e})=>{var l,r,x,z,L;function i(s,c){s.preventDefault(),a.next(c)}const o=(l=e==null?void 0:e.fields)==null?void 0:l.map(s=>{const c=s.args.map((b,T)=>{const S=I(b.type),[F,v,R]=_(S),D=s.args.length>1,V=n.jsx("br",{}),q=T>=s.args.length-1?n.jsx("br",{}):null;return n.jsxs("p",{className:"inline",children:[D&&V,n.jsxs("span",{className:D?"pl-3":"",children:[n.jsx("span",{className:"text-tertiary",children:b.name}),": ",F,n.jsx("a",{className:"text-docs-link-text-color hover:underline",href:v,onClick:A=>i(A,v),children:v}),R]}),D&&q]},S.concat(T.toString()))}),k=I(s.type),[j,u,N]=_(k);return n.jsxs("li",{children:[n.jsx("span",{className:"text-docs-field-text-color",children:s.name}),c.length>0&&"(",c,c.length>0&&")",": ",j,n.jsx("a",{className:"text-docs-link-text-color hover:underline",href:u,onClick:b=>i(b,u),children:u}),N,n.jsx("br",{}),s.description]},s.name)}),t=(r=e==null?void 0:e.inputFields)==null?void 0:r.map(s=>{var c,k,j;return n.jsxs("li",{children:[s.name,": ",n.jsx("a",{className:"text-docs-link-text-color hover:underline",href:((c=s==null?void 0:s.type)==null?void 0:c.name)||"#",onClick:u=>{var N;return i(u,(N=s==null?void 0:s.type)==null?void 0:N.name)},children:(k=s==null?void 0:s.type)==null?void 0:k.name})]},(j=s==null?void 0:s.type)==null?void 0:j.name)}),m=o||t,f=(x=e==null?void 0:e.enumValues)==null?void 0:x.map(s=>n.jsx("li",{children:s.name},s.name)),h=(z=e==null?void 0:e.possibleTypes)==null?void 0:z.map(s=>n.jsx("li",{children:n.jsx("a",{className:"text-docs-link-text-color hover:underline",href:s.name,onClick:c=>i(c,s.name),children:s.name})},s.name)),d=(L=e==null?void 0:e.interfaces)==null?void 0:L.map(s=>n.jsx("li",{children:n.jsx("a",{className:"text-docs-link-text-color hover:underline",href:s.name,onClick:c=>i(c,s.name),children:s.name})},s.name)),p=w();return n.jsx("div",{ref:p,className:"h-full overflow-x-hidden",children:n.jsxs("div",{className:"p-10 text-left text-on-surface sm:px-[56px] sm:py-[56px]",children:[n.jsx($,{onClick:()=>a.back(),title:a.prev()}),n.jsxs("article",{className:"origin-top animate-fade-in-section ease-emphasized-decelerate",children:[n.jsx("h2",{className:"mt-4 w-full truncate text-2xl sm:mt-8 sm:text-3xl",children:e.name}),n.jsx("p",{className:"mt-8",children:e==null?void 0:e.description}),d&&(d==null?void 0:d.length)>0&&n.jsx("h3",{className:"text-xl",children:"Implements:"}),n.jsx("ul",{className:"mt-8 flex flex-col gap-5",children:d}),m&&n.jsx("h3",{className:"text-xl",children:"Fields:"}),n.jsx("ul",{className:"mt-8 flex flex-col gap-5",children:o}),n.jsx("ul",{className:"mt-8 flex flex-col gap-5",children:t}),f&&n.jsx("h3",{className:"text-xl",children:"Enum values:"}),n.jsx("ul",{className:"mt-8 flex flex-col gap-5",children:f}),h&&n.jsx("h3",{className:"text-xl",children:"Implementations"}),n.jsx("ul",{className:"mt-8 flex flex-col gap-5",children:h})]},e.name)]})})},J=({closeModal:a,text:e})=>n.jsxs(y,{children:[n.jsx(E,{onClick:()=>{a(i=>!i)},className:"absolute right-[20px] top-[20px] z-20","data-testid":"closeDocs",children:n.jsx(C,{children:"close"})}),n.jsx("div",{className:"flex h-full w-full items-center p-6",children:n.jsx("p",{className:"w-full text-center text-on-surface",children:e})})]}),P={query:`query IntrospectionQuery {
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
}`,operationName:"IntrospectionQuery"};async function G(a,e,i){try{i(!0);const o=await fetch(a,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(P)});if(o.ok&&o.status===200){const t=await o.json();return i(!1),e(t.data.__schema)}return i(!1),e(null)}catch{return i(!1),e(null)}}const W=({setIsDocsShown:a,explorer:e})=>{const{currEndpoint:i,setEndpointSchema:o,endpointSchema:t}=M(),[m,f]=g.useState(!1),{translation:h}=Q(),{loader:d,schemaFallback:p,rootDocsComp:l}=h.docsSection;if(g.useEffect(()=>{G(i,o,f)},[i,o]),m)return n.jsx(U,{text:d});if(!t)return n.jsx(J,{closeModal:a,text:p});const r=e.isDocs()?n.jsx(Z,{types:t.types,explorer:e,translation:l}):n.jsx(H,{explorer:e,currType:t.types.find(x=>x.name===e.current())});return n.jsxs(y,{children:[n.jsx(E,{onClick:()=>{a(x=>!x),e.setInitState()},className:"animation-delay-200 absolute right-[20px] top-[20px] z-20 animate-fade-in-screen ease-standard-decelerate","data-testid":"closeDocs",children:n.jsx(C,{children:"close"})}),r]})};export{W as default};
