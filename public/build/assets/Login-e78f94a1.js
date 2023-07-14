import{j as e,W as f,r as g,a as s,b as p,d as h}from"./app-bc4c702b.js";import{G as x}from"./GuestLayout-87afab7d.js";import{T as d,I as l}from"./TextInput-17d17adc.js";import{I as c}from"./InputLabel-b5f08409.js";import{P as b}from"./PrimaryButton-fc75486e.js";function v({className:t="",...a}){return e("input",{...a,type:"checkbox",className:"rounded bg-neutral-900 border-gray-700 text-red-600 shadow-sm focus:ring-red-600 focus:ring-offset-red-800 "+t})}function j({status:t}){const{data:a,setData:o,post:i,processing:u,errors:m,reset:n}=f({username:"",password:"",remember:!1});return g.useEffect(()=>()=>{n("password")},[]),s(x,{children:[e(p,{title:"Log in"}),t&&e("div",{className:"mb-4 font-medium text-sm text-green-600",children:t}),s("form",{onSubmit:r=>{r.preventDefault(),i(route("login")),n("password")},children:[s("div",{children:[e(c,{htmlFor:"username",value:"Username"}),e(d,{id:"username",type:"text",name:"username",value:a.username,className:"mt-1 block w-full",isFocused:!0,onChange:r=>o("username",r.target.value)}),e(l,{message:m.username,className:"mt-2"})]}),s("div",{className:"mt-4",children:[e(c,{htmlFor:"password",value:"Password"}),e(d,{id:"password",type:"password",name:"password",value:a.password,className:"mt-1 block w-full",autoComplete:"current-password",onChange:r=>o("password",r.target.value)}),e(l,{message:m.password,className:"mt-2"})]}),e("div",{className:"block mt-4",children:s("label",{className:"flex items-center",children:[e(v,{name:"remember",checked:a.remember,onChange:r=>o("remember",r.target.checked)}),e("span",{className:"ml-2 text-sm text-gray-600 dark:text-gray-400",children:"Remember me"})]})}),s("div",{className:"flex items-center justify-end mt-4",children:[e(h,{href:route("register"),className:"underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800",children:"Don't have an account?"}),e(b,{className:"ml-4",disabled:u,children:"Log in"})]})]})]})}export{j as default};