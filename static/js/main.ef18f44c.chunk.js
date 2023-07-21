(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,function(e,t,a){e.exports=a.p+"static/media/headshot.4dc015b3.JPG"},function(e,t,a){e.exports=a.p+"static/media/code-markus-spiske-iar-afB0QQw-unsplash.1e773c76.jpg"},function(e,t,a){e.exports=a.p+"static/media/desktop-joshua-aragon-BMnhuwFYr7w-unsplash.f8e0b18a.jpg"},function(e,t,a){e.exports=a.p+"static/media/project_1.3fb3a162.JPG"},function(e,t,a){e.exports=a.p+"static/media/project_2.8f72e62d.JPG"},function(e,t,a){e.exports=a.p+"static/media/resume.3b75d1b0.pdf"},function(e,t,a){e.exports=a(16)},,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(3),o=a.n(i),r=a(1),c={navBarStyle:{},navTabStyle:{padding:"10px",display:"inline",fontSize:"20px"},navAttributeStyle:{textDecoration:"none",color:"black"}};function s(e){var t=e.currentPage,a=e.handlePageChange;return l.a.createElement("ul",{style:c.navBarStyle,className:"nav nav-tabs"},l.a.createElement("li",{style:c.navTabStyle,className:"nav-item"},l.a.createElement("a",{style:c.navAttributeStyle,href:"#about",onClick:function(){return a("About")},className:"About"===t?"nav-link active":"nav-link"},"About")),l.a.createElement("li",{style:c.navTabStyle,className:"nav-item"},l.a.createElement("a",{style:c.navAttributeStyle,href:"#portfolio",onClick:function(){return a("Portfolio")},className:"Portfolio"===t?"nav-link active":"nav-link"},"Portfolio")),l.a.createElement("li",{style:c.navTabStyle,className:"nav-item"},l.a.createElement("a",{style:c.navAttributeStyle,href:"#resume",onClick:function(){return a("Resume")},className:"Resume"===t?"nav-link active":"nav-link"},"Resume")),l.a.createElement("li",{style:c.navTabStyle,className:"nav-item"},l.a.createElement("a",{style:c.navAttributeStyle,href:"#contact",onClick:function(){return a("Contact")},className:"Contact"===t?"nav-link active":"nav-link"},"Contact")))}var m=a(4),u=a.n(m),p={profilePicStyle:{position:"relative",padding:"3px",marginLeft:"auto",marginRight:"auto",height:"fit-content",width:"fit-content"},profilePicImgStyle:{display:"block",objectFit:"cover",height:"300px",width:"auto"}};function d(){return l.a.createElement("div",null,l.a.createElement("h2",null,"About Me"),l.a.createElement("div",{style:p.profilePicStyle},l.a.createElement("img",{src:u.a,style:p.profilePicImgStyle})),l.a.createElement("p",null,"My passion has always been science. From a young age, I spent all my time outside exploring the natural world. As I grew older, I began developing an interest in video games and learning about computers. It was not until I took a college course in the MATLAB coding language that I realized coding is my thing. I am a recent graduate from the University of Houston with a BS in Biology. In August of 2023, I completed a Full Stack Web Development course from Rice University's Glassock School of Continuing Education. Currently, I am looking for a role in an entry level front end or back end web development position."))}function h(){var e=Object(n.useState)(""),t=Object(r.a)(e,2),a=t[0],i=t[1],o=Object(n.useState)(""),c=Object(r.a)(o,2),s=c[0],m=c[1],u=Object(n.useState)(""),p=Object(r.a)(u,2),d=p[0],h=p[1],y=function(e){var t=e.target,a=t.name,n=t.value;"email"===a?h(n):"firstName"===a?i(n):m(n)};return l.a.createElement("div",null,l.a.createElement("h2",null,"Contact Me"),l.a.createElement("h4",null,"clairetalverson@gmail.com"),l.a.createElement("h4",null,"979-900-5446"),l.a.createElement("form",{className:"form"},l.a.createElement("input",{value:a,name:"firstName",onChange:y,type:"text",placeholder:"First Name"}),l.a.createElement("input",{value:s,name:"lastName",onChange:y,type:"text",placeholder:"Last Name"}),l.a.createElement("input",{value:d,name:"email",onChange:y,type:"email",placeholder:"Email"}),l.a.createElement("button",{type:"button",onClick:function(e){e.preventDefault(),alert("\n  Hello ".concat(a," ").concat(s,"! This form currently has no back end functionality. \n  If you would like to contact me, please user the email or phone \n  number provided. \n  Thank you!\n  ")),h(""),i(""),m("")}},"Submit")))}var y=a(5),f=a.n(y),g=a(6),v=a.n(g),b=a(7),E=a.n(b),S=a(8),k=a.n(S),x=[{title:"Movie Match Maker",link:"https://adamhood15.github.io/movie-match-maker/",image:E.a,alt:"Screenshot of Movie Match Maker homepage"},{title:"The Yum Yum Blog",link:"https://yumyum-blog.herokuapp.com/",image:k.a,alt:"Screenshot of The Yum Yum Blog homepage"},{title:"GitHub",link:"https://github.com/ctalv",image:v.a,alt:"Matrix movie still; Credit: Markus Spiske via Unsplash"},{title:"Portfolio Repository",link:"https://github.com/ctalv/react-portfolio",image:f.a,alt:"Laptop with monitors displaying code; Credit: Joshua Aragon via Unsplash"}],w={portfolioStyle:{display:"grid",gridTemplateColumns:"1fr",gridTemplateRows:"min-content"},projectStyle:{position:"relative",padding:"3px",margin:"7px"},projectImageStyle:{display:"block",objectFit:"cover",width:"100%",height:"300px"},projectHeadingStyle:{position:"absolute",background:"rgba(0, 0, 0, 0.5)",color:"#f6f7e5",width:"75%",fontSize:"20px",textAlign:"center"}};function j(){return l.a.createElement("div",null,l.a.createElement("h2",null,"Portfolio"),l.a.createElement("section",{style:w.portfolioStyle},x.map(function(e){return l.a.createElement("div",{style:w.projectStyle},l.a.createElement("h3",{style:w.projectHeadingStyle},"".concat(e.title)),l.a.createElement("a",{href:e.link},l.a.createElement("img",{src:e.image,alt:e.alt,style:w.projectImageStyle})))})))}var C=a(9),A=a.n(C);function P(){return l.a.createElement("div",null,l.a.createElement("h2",null,"Resume"),l.a.createElement("a",{href:A.a},"Click to download resume!"))}var I={headerStyle:{display:"flex",alignItems:"top",justifyContent:"space-between",marginRight:"20px",marginLeft:"20px",flexBasis:"auto"},navTabStyle:{padding:"10px",display:"inline",fontSize:"20px"},pageStyle:{}};function N(){var e=Object(n.useState)("About"),t=Object(r.a)(e,2),a=t[0],i=t[1];return l.a.createElement("div",null,l.a.createElement("header",{style:I.headerStyle},l.a.createElement("h1",null,"Claire Alverson"),l.a.createElement(s,{currentPage:a,handlePageChange:function(e){return i(e)}})),l.a.createElement("div",{style:I.pageStyle},"About"===a?l.a.createElement(d,null):"Portfolio"===a?l.a.createElement(j,null):"Resume"===a?l.a.createElement(P,null):l.a.createElement(h,null)))}function M(){return l.a.createElement("h3",null,"Powered by React")}a(15);var T={everythingStyle:{fontFamily:"Open sans, sans-serif"}};function B(){return l.a.createElement("div",{style:T.everythingStyle},l.a.createElement(N,null),l.a.createElement(M,null))}o.a.render(l.a.createElement(B,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.ef18f44c.chunk.js.map