import{r as w,W as _,a,j as e,b as k,d as b,F as S}from"./app-bc4c702b.js";import{M as T}from"./MainLayout-64deb286.js";import{H as M}from"./Heading-110a5195.js";import{f as o}from"./FormatCurrency-0ed217c7.js";import{I as d}from"./InputLabel-b5f08409.js";import{I as p,T as n}from"./TextInput-17d17adc.js";import{M as C}from"./Modal-c2b6f042.js";import"./LinkButton-8c9f5024.js";function P({auth:i,movie:t,seats:g,showtimes:f}){const[u,h]=w.useState(!1),{data:l,setData:c,post:x,errors:m}=_({showtime:null,seat_numbers:[],movie_id:t.id,ticket_price:t.ticket_price}),v=r=>{let s=r.target.value;r.target.checked?c("seat_numbers",[...l.seat_numbers,s]):c("seat_numbers",l.seat_numbers.filter(y=>y!==s))},N=r=>{r.preventDefault(),x(route("order-ticket.store")),h(!1)};return a(T,{children:[e(k,{title:"Order Movie Ticket"}),a("div",{className:"min-h-screen",children:[e(M,{title:"Order Your Ticket Here"}),a("article",{className:"max-w-md md:max-w-full md:w-full flex flex-col md:flex-row mx-auto mt-4 shadow-lg shadow-gray-700 rounded-md",children:[e("img",{src:t.poster_url,loading:"lazy",alt:t.title,className:"w-full md:w-96 rounded-t-md mx-auto md:mx-0 md:rounded-l-md"}),e("div",{className:"pt-3 ml-4 mr-2 pb-3 flex flex-col md:flex-row gap-6",children:e("div",{className:"flex justify-between",children:a("form",{className:"mx-auto",onSubmit:N,children:[a("div",{className:"flex flex-col md:flex-row gap-10 md:gap-14",children:[a("div",{children:[a("div",{className:"mb-3",children:[e(d,{value:"Select Movie Showtime",className:"mb-1"}),a("select",{name:"showtime",autoFocus:!0,onChange:r=>c("showtime",r.target.value),className:"w-full border-gray-700 bg-neutral-900 text-gray-100 focus:border-red-600 focus:ring-red-500 rounded-md shadow-sm",children:[e("option",{disabled:!0,value:"",selected:!0,children:"-- SELECT SHOWTIME --"}),f.map((r,s)=>e("option",{value:r.id,children:r.play_time},s))]}),e(p,{message:m.showtime})]}),a("div",{className:"mb-3",children:[e(d,{value:"Movie",className:"mb-1"}),e(n,{className:"w-full bg-neutral-600",disabled:!0,type:"text",value:t.title})]}),a("div",{className:"mb-3",children:[e(d,{value:"Your Name",className:"mb-1"}),e(n,{className:"w-full bg-neutral-600",disabled:!0,type:"text",value:i.user.name,name:"name"})]}),a("div",{className:"mb-3",children:[e(d,{value:"Your Age",className:"mb-1"}),e(n,{disabled:!0,className:"w-full bg-neutral-600",type:"text",value:i.user.age,name:"age"})]}),a("div",{className:"mb-3",children:[e(d,{value:"Ticket Price",className:"mb-1"}),e(n,{disabled:!0,className:"w-full bg-neutral-600",type:"text",value:o.format(t.ticket_price),name:"ticket_price"})]})]}),a("div",{children:[e("h3",{className:"text-xl text-center md:text-left font-semibold mb-4",children:"Choose Your Seat Here"}),e("p",{className:"text-gray-100 p-3 border border-gray-100 rounded font-semibold text-center mb-10",children:"Screen"}),m.seat_numbers&&e(p,{message:m.seat_numbers}),e("div",{className:"mb-3 grid grid-cols-12 gap-3",children:g.map((r,s)=>a("div",{className:"flex flex-col md:gap-1 mx-auto",children:[e("input",{name:"seat_numbers[]",disabled:l.showtime==null,onChange:v,className:"w-6 h-6 disabled:bg-gray-400 checked:bg-red-600 hover-transition",type:"checkbox",value:r.id},s),e(d,{className:"text-center",value:r.seat_number})]}))})]})]}),a("div",{className:"mt-6 gap-6 md:gap-0 flex justify-between",children:[e(b,{className:"py-3 px-4 text-center text-white border hover-transition 600 rounded-lg shadow md:inline hover:bg-gray-100 border-gray-100 hover:text-red-600",href:route("movies.show",t),children:"Cancel"}),i.user.age>=t.age_rating?i.user.balance.balance>=t.ticket_price?a(S,{children:[e("button",{type:"button",onClick:r=>h(!u),className:"block py-3 px-4 text-center text-gray-100 bg-red-600 border hover-transition border-red-600 hover:bg-red-700 hover:text-gray-200 active:shadow-none rounded-lg shadow md:inline",children:"Order Ticket"}),u?a(C,{children:[a("div",{className:"grid grid-cols-2",children:[a("div",{children:[e("p",{children:"Name"}),e("p",{children:"Movie Title"}),e("p",{children:"Total Reserved Seats"}),e("p",{children:"Total Ticket Price"})]}),a("div",{className:"font-semibold",children:[e("p",{children:i.user.name}),e("p",{children:t.title}),e("p",{children:l.seat_numbers.length??"Please select your seat first!"}),e("p",{children:o.format(t.ticket_price*l.seat_numbers.length)})]})]}),a("p",{children:["After this transaction, your balance will be deducted by:",a("span",{className:"font-semibold",children:[" ",o.format(t.ticket_price*l.seat_numbers.length)]})]})]}):""]}):a("p",{className:"md:flex items-center",children:["Sorry, your balance isn't enough to buy this ticket.",e(b,{href:route("balance.index"),className:"text-gray-100 hover-transition hover:text-red-600",children:"Topup Here"})]}):e("p",{className:"flex items-center",children:"Sorry, your age doesn't met the minimum movie's age rating"})]})]})})})]})]})]})}export{P as default};
