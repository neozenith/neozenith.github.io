(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{195:function(e,t,n){"use strict";n.r(t);var o=n(0),i=Object(o.a)({},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("img",{staticStyle:{float:"right",align:"right"},attrs:{src:e.$withBase("/images/vim-bonsai.svg"),alt:"Animated Bonsai Image"}}),e._v(" "),n("h1",{attrs:{id:"page-title"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#page-title","aria-hidden":"true"}},[e._v("#")]),e._v(" "+e._s(e.$page.title))]),e._v(" "),n("p",[n("span",{staticStyle:{color:"#999"}},[e._v(e._s(e.$page.readingTime.text)+"...")])]),e._v(" "),n("p",[e._v("The Vim bonsai logo I have made here is a symbol of my vim journey and my dotfiles.\nIt all starts with a seed and then you nurture it and also prune it for your\nown environment and changing conditions.")]),e._v(" "),n("p",[e._v("Each person's Vim journey is different for this reason.")]),e._v(" "),n("p",[e._v("And yes, I created the Vim Bonsai in Vim.")]),e._v(" "),n("h1",{attrs:{id:"my-configuration"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#my-configuration","aria-hidden":"true"}},[e._v("#")]),e._v(" My Configuration")]),e._v(" "),n("img",{attrs:{src:e.$withBase("/images/example1.png"),alt:"Screenshot of Vim"}}),e._v(" "),n("p",[e._v("Before we get too deep into the rabbit hole that is Vim have a look at my "),n("a",{attrs:{href:"https://github.com/neozenith/dotfiles",target:"_blank",rel:"noopener noreferrer"}},[e._v("my Vim configuration"),n("OutboundLink")],1),e._v(" and the screenshot above too see where I am heading.")]),e._v(" "),n("p",[e._v("I am quite proud of where I have got my vim configuration to because it\nsatisfies a list of motivations that have built up over my career and has started\nmaking me think about software development in new and different ways.")]),e._v(" "),n("p",[n("strong",[e._v("I need to develop on remote servers")]),e._v(", and its funny how you can't just install\nXCode or Visual Studio with all their bloat and setup cost on a remote machine\nwith no GUI.\nWhen you get down to it what you really need is a text editor and a compiler.")]),e._v(" "),n("p",[e._v("This started me questioning in a minimalist way "),n("em",[e._v("what do I really need in my dev setup?")])]),e._v(" "),n("p",[n("strong",[e._v("My computer died... a few times")]),e._v(", which meant I lost my development setup...\na few times. So this got me thinking that surely I can reduce the setup cost of\nmoving to another system whether by choice or that gets forced upon me.\nThis vim configuration is text based and the community that use it tend to\nversion control their setup. I started thinking of my development environment\nas a software product I need to be able to deploy anywhere. I got very\naggressive about the risk of losing my setup to the point where "),n("strong",[e._v("weekly")]),e._v("\nI will intentionally delete my setup and run my "),n("code",[e._v("install.sh")]),e._v(".")]),e._v(" "),n("p",[e._v("I even had an interview once where on their machines I quickly grabbed my "),n("code",[e._v(".vimrc")]),e._v(" from github\nand went to town doing the coding task as though it was my machine.")]),e._v(" "),n("p",[e._v("So each week I ask "),n("em",[e._v("how can I reduce the time it takes get setup?")])]),e._v(" "),n("p",[n("strong",[e._v("I like knowing how things work")]),e._v(", I really detest black boxes and iterating\non vim as a development tool allows me to go down the rabbit hole of building\na custom IDE experience. I see a feature in another IDE and take it as a personal\nchallenge to find a Vim plugin or write the functionality myself.\nWhen you think about it, an IDE is a "),n("em",[e._v("glorified text editor")]),e._v(". Well so is vim.")]),e._v(" "),n("p",[e._v("I will admit that at times just using an IDE would be quicker but I am stubborn\nand love solving these problems to scratch a curiosity itch.")]),e._v(" "),n("p",[e._v("Ultimately I ask myself "),n("em",[e._v("what is the underlying tool my text editor needs to trigger?")]),e._v("\nand I connect it. Most of the time vim already has the functionality or there is\na plugin. I also understand compilers, linkers and text transformation tools\na lot better for it.")]),e._v(" "),n("p",[n("strong",[e._v("Programming is a lot of typing")]),e._v(". I have heard a few inspiring quotes about\npersonal productivity which were game changers in how I think:")]),e._v(" "),n("ul",[n("li",[n("em",[e._v("You should figure out to do what you do with the least amount of physical effort")]),e._v(".")])]),e._v(" "),n("p",[e._v("I like to run a lot for recreation and fitness and this rings true with the idea\nof your "),n("em",[e._v("running economy")]),e._v(". Least amount of effort to achieve the same distance and time.\nSuddenly this is an optimisation problem I need to tune, to squeeze efficiency in\nbeing a faster, better, stronger developer.")]),e._v(" "),n("ul",[n("li",[n("em",[e._v("You should figure out how to do what you do in a 38 hour week in 37 hours of work, every week.")])])]),e._v(" "),n("p",[e._v("This means that if I figure out some hack that saves me an hour, I can be ~39\nhours of productive in 38 hours the following week. In theory (38/37)^52 means\nyou should be 4x more productive at the end of the year than you were at the start.\nThis philosophy compounds like a long term investment into yourself.")]),e._v(" "),n("p",[e._v("So combined both strive to reduce physical effort and time.")]),e._v(" "),n("p",[n("strong",[e._v("Conclusion")])]),e._v(" "),n("p",[e._v("Like I said, it has become a bit of a introspective journey and the progress I\nmake with my vim configuration is an accumulation of my personal and professional\ndevelopment.")]),e._v(" "),n("hr"),e._v(" "),n("h2",{attrs:{id:"resources-and-training"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#resources-and-training","aria-hidden":"true"}},[e._v("#")]),e._v(" Resources and Training")]),e._v(" "),n("p",[e._v("Below I have left a list of resources and notes to myself that act as a gateway\ntraining guide for my colleagues that want to get more out of vim as they run\ninto it.")]),e._v(" "),n("p",[e._v("These blogs have been hugely influential and informative in making the switch.")]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"http://vimcasts.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("VimCasts"),n("OutboundLink")],1),e._v(" - Video Tutorials")]),e._v(" "),n("li",[n("a",{attrs:{href:"https://vim-adventures.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vim Adventures"),n("OutboundLink")],1),e._v(" - Online game of Vim Tutor")]),e._v(" "),n("li",[n("a",{attrs:{href:"https://thorstenball.com/blog/2012/07/09/vim-learning-resources/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Thorsten Ball's Vim Resources"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"http://mislav.net/2011/12/vim-revisited/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vim Revisted"),n("OutboundLink")],1),e._v(" - Good for explaining core navigation shortcuts")]),e._v(" "),n("li",[n("a",{attrs:{href:"http://stevelosh.com/blog/2010/09/coming-home-to-vim/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Coming Home to Vim - Steve Losh"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"http://blog.carbonfive.com/2011/10/17/vim-text-objects-the-definitive-guide/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vim Text Objects: The Definitive Guide"),n("OutboundLink")],1)])])])},[],!1,null,null,null);t.default=i.exports}}]);