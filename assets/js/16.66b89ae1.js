(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{186:function(t,e,a){"use strict";a.r(e);var s=a(0),r=Object(s.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[t._v("Thanks to "),a("a",{attrs:{href:"https://pragprog.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("The Pragmatic Bookshelf"),a("OutboundLink")],1),t._v(" having a 40% off sale for April Fools 2019 I snagged\na few books as bargains. In particular I grabbed the following book:")]),t._v(" "),t._m(1),t._v(" "),a("p",[a("a",{attrs:{href:"https://pragprog.com/book/khrust/programming-webassembly-with-rust",target:"_blank",rel:"noopener noreferrer"}},[t._v("Programming WebAssembly with Rust"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("So the intent is to walk through the book and exercises, documenting my journey. With the end goal to\npresent at my local javascript meetup in half an hour a summary and demo of the experience. I've also put\nmy hand up for a specific month, so this is now an arbitrary deadline to finish.")]),t._v(" "),t._m(2),t._v(" "),a("p",[t._v("You will want to download and build the WebAssembly Binary Toolkit aka WABT\npronounced Wabbit.")]),t._v(" "),t._m(3),t._m(4),t._v(" "),a("p",[t._v("At "),a("a",{attrs:{href:"https://github.com/neozenith/rust-wasm/commit/914d1739ddfb0d38ec5d6c076ad8bba714f4896d",target:"_blank",rel:"noopener noreferrer"}},[t._v("this commit"),a("OutboundLink")],1),t._v("\nI'm working through writing raw WebAssembly which is called "),a("code",[t._v(".wat")]),t._v(" files for "),a("em",[t._v("WebAssembly Text")]),t._v(".\nThe compiled binary files are "),a("code",[t._v(".wasm")]),t._v(".")]),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"context"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#context","aria-hidden":"true"}},[this._v("#")]),this._v(" Context")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://imagery.pragprog.com/products/574/khrust_xlargecover.jpg?1538765162",alt:"Book cover"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"setup"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#setup","aria-hidden":"true"}},[this._v("#")]),this._v(" Setup")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" clone --recursive https://github.com/WebAssembly/wabt\n"),a("span",{attrs:{class:"token function"}},[t._v("cd")]),t._v(" wabt/\ncmake -Bbuild -H. -DCMAKE_BUILD_TYPE"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("DEBUG -DCMAKE_INSTALL_PREFIX"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("~/.wasm\ncmake --build build --target "),a("span",{attrs:{class:"token function"}},[t._v("install")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"part-1-fundamentals"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#part-1-fundamentals","aria-hidden":"true"}},[this._v("#")]),this._v(" Part 1 - Fundamentals")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The above linked "),e("code",[this._v("wabt")]),this._v(" toolkit can compile and decompile in both directions.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("wasm")]),this._v(" is most like Java bytecode as it is a stage in the middle of:")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("human readable")]),this._v(" "),e("li",[this._v("machine readable")]),this._v(" "),e("li",[this._v("platform optimised")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Later we'll use Rust to compile to "),e("code",[this._v("wasm")]),this._v(" as a target machine readable output.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("For now we'll write raw "),e("code",[this._v("wat")]),this._v(" to get a feel for the "),e("code",[this._v("wasm")]),this._v(" virtual machine and its limitations as well as\nthe mechanism for interacting with javascript.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[this._v("python3 -m http.server\n"),e("span",{attrs:{class:"token comment"}},[this._v("# open http://localhost:8000/index.html")]),this._v("\n"),e("span",{attrs:{class:"token comment"}},[this._v("# Open console logs")]),this._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"part-2-checkers"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#part-2-checkers","aria-hidden":"true"}},[this._v("#")]),this._v(" Part 2 - Checkers")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"part-3-raspberry-pi"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#part-3-raspberry-pi","aria-hidden":"true"}},[this._v("#")]),this._v(" Part 3 - Raspberry Pi")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"conclusion"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#conclusion","aria-hidden":"true"}},[this._v("#")]),this._v(" Conclusion")])}],!1,null,null,null);r.options.__file="rust-wasm.md";e.default=r.exports}}]);