import"./assets/modulepreload-polyfill-3cfb730f.js";const e={email:"",message:""},a=document.querySelector(".feedback-form"),n=a.elements.email,r=a.elements.message,s="feedback-form-state";document.addEventListener("DOMContentLoaded",()=>{const t=localStorage.getItem(s);if(t){const o=JSON.parse(t);n.value=o.email,r.value=o.message,e.email=o.email,e.message=o.message}});a.addEventListener("input",t=>{e[t.target.name]=t.target.value,localStorage.setItem(s,JSON.stringify(e))});a.addEventListener("submit",t=>{if(t.preventDefault(),!e.email.trim()||!e.message.trim()){alert("All fields should be filled");return}console.log("Form Data",e),localStorage.removeItem(s),e.email="",e.message="",a.reset()});const l=document.createElement("style");l.textContent=`
            .feedback-form {
                display: flex;
                flex-direction: column;
                gap: 8px;
                padding: 24px;
                width: 408px;
            }
            label {
                font-family: "Montserrat", sans-serif;
                font-weight: 400;
                font-size: 16px;
                line-height: 1.5;
                letter-spacing: 0.04em;
                color: #2e2f42;
                display: flex;
                flex-direction: column;
            }

            button {
                color: #FFF;
                background-color: #4e75ff;
                border: none;
                border-radius: 8px;
                padding: 8px 16px;
                width: 95px;
                height: 40px;
                }
        `;document.head.appendChild(l);
//# sourceMappingURL=commonHelpers2.js.map
