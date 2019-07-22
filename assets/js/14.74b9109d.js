(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{201:function(e,t,a){"use strict";a.r(t);var r=a(0),s=Object(r.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"context"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#context","aria-hidden":"true"}},[e._v("#")]),e._v(" Context")]),e._v(" "),a("p",[e._v("Thanks to "),a("a",{attrs:{href:"https://pragprog.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("The Pragmatic Bookshelf"),a("OutboundLink")],1),e._v(" having a 40% off sale for April Fools 2019 I snagged\na few books as bargains. In particular I grabbed the following book:")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://imagery.pragprog.com/products/574/khrust_xlargecover.jpg?1538765162",alt:"Book cover"}})]),e._v(" "),a("p",[a("a",{attrs:{href:"https://pragprog.com/book/khrust/programming-webassembly-with-rust",target:"_blank",rel:"noopener noreferrer"}},[e._v("Programming WebAssembly with Rust"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("So the intent is to walk through the book and exercises, documenting my journey. With the end goal to\npresent at my local javascript meetup in half an hour a summary and demo of the experience. I've also put\nmy hand up for a specific month, so this is now an arbitrary deadline to finish.")]),e._v(" "),a("h1",{attrs:{id:"slide-deck"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#slide-deck","aria-hidden":"true"}},[e._v("#")]),e._v(" Slide Deck")]),e._v(" "),a("p",[e._v("Here is the slide deck I'm preparing for my local Javascript meetup "),a("a",{attrs:{href:"https://www.meetup.com/NewcastleJS-JavaScript-Meetup/",target:"_blank",rel:"noopener noreferrer"}},[e._v("NewcastleJS"),a("OutboundLink")],1)]),e._v(" "),a("iframe",{attrs:{src:"https://docs.google.com/presentation/d/e/2PACX-1vQu35pgbdmNI2mIjv3a_EfU7fT891VW3upk2vJErny5lNW0yqtAe53adv4IBXLds0vpIx2ymMMLF0FK/embed?start=false&loop=false&delayms=60000",frameborder:"0",width:"960",height:"569",allowfullscreen:"true",mozallowfullscreen:"true",webkitallowfullscreen:"true"}}),e._v(" "),a("p",[e._v("Or continue reading below for a full write up.")]),e._v(" "),a("h1",{attrs:{id:"getting-the-tools"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getting-the-tools","aria-hidden":"true"}},[e._v("#")]),e._v(" Getting the Tools")]),e._v(" "),a("p",[e._v("You will want to download and build the WebAssembly Binary Toolkit aka WABT\npronounced Wabbit.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone --recursive https://github.com/WebAssembly/wabt\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("cd")]),e._v(" wabt/\ncmake -Bbuild -H. -DCMAKE_BUILD_TYPE"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("DEBUG -DCMAKE_INSTALL_PREFIX"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("~/.wasm\ncmake --build build --target "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v("\n")])])]),a("h1",{attrs:{id:"part-1-fundamentals"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#part-1-fundamentals","aria-hidden":"true"}},[e._v("#")]),e._v(" Part 1 - Fundamentals")]),e._v(" "),a("p",[e._v("At "),a("a",{attrs:{href:"https://github.com/neozenith/rust-wasm/commit/914d1739ddfb0d38ec5d6c076ad8bba714f4896d",target:"_blank",rel:"noopener noreferrer"}},[e._v("this commit"),a("OutboundLink")],1),e._v("\nI'm working through writing raw WebAssembly which is called "),a("code",[e._v(".wat")]),e._v(" files for "),a("em",[e._v("WebAssembly Text")]),e._v(".\nThe compiled binary files are "),a("code",[e._v(".wasm")]),e._v(".")]),e._v(" "),a("p",[e._v("The above linked "),a("code",[e._v("wabt")]),e._v(" toolkit can compile and decompile in both directions.")]),e._v(" "),a("p",[a("code",[e._v("wasm")]),e._v(" is most like Java bytecode as it is a stage in the middle of:")]),e._v(" "),a("ul",[a("li",[e._v("human readable")]),e._v(" "),a("li",[e._v("machine readable")]),e._v(" "),a("li",[e._v("platform optimised")])]),e._v(" "),a("p",[e._v("Later we'll use Rust to compile to "),a("code",[e._v("wasm")]),e._v(" as a target machine readable output.")]),e._v(" "),a("p",[e._v("For now we'll write raw "),a("code",[e._v("wat")]),e._v(" to get a feel for the "),a("code",[e._v("wasm")]),e._v(" virtual machine and its limitations as well as\nthe mechanism for interacting with javascript.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("python3 -m http.server\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# open http://localhost:8000/index.html")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Open console logs")]),e._v("\n")])])]),a("h1",{attrs:{id:"part-2-checkers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#part-2-checkers","aria-hidden":"true"}},[e._v("#")]),e._v(" Part 2 - Checkers")]),e._v(" "),a("h1",{attrs:{id:"part-3-raspberry-pi"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#part-3-raspberry-pi","aria-hidden":"true"}},[e._v("#")]),e._v(" Part 3 - Raspberry Pi")]),e._v(" "),a("h1",{attrs:{id:"conclusion"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#conclusion","aria-hidden":"true"}},[e._v("#")]),e._v(" Conclusion")])])},[],!1,null,null,null);t.default=s.exports}}]);