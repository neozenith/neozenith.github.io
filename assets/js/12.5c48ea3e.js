(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{197:function(e,t,a){"use strict";a.r(t);var r=a(0),o=Object(r.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[a("em",[e._v(e._s(e.$page.readingTime.text))])]),e._v(" "),a("h1",{attrs:{id:"page-title"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#page-title","aria-hidden":"true"}},[e._v("#")]),e._v(" "+e._s(e.$page.title))]),e._v(" "),a("p",[e._v("God damn corporate proxies.... The oxymoron of security practices.")]),e._v(" "),a("p",[e._v("Don't get me wrong. I love and appreciate their value in providing a gated community. When you work for any company with a large enough\ntarget on their back you want layers of protection, to make sure you haven't been hacked overnight and still have a job to go to in the morning.")]),e._v(" "),a("h1",{attrs:{id:"the-problem"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-problem","aria-hidden":"true"}},[e._v("#")]),e._v(" The problem")]),e._v(" "),a("p",[e._v('They break security protocols to add new security protocols. In particular they perform a\n"trusted" '),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Man-in-the-middle_attack",target:"_blank",rel:"noopener noreferrer"}},[e._v("Man in the middle attack"),a("OutboundLink")],1),e._v(" (MitM) but lucky for us make no attempt to cover it up.")]),e._v(" "),a("p",[e._v("Just like a vandal intercepting your mail, rifling through it, resealing it and "),a("em",[e._v("signing their work")]),e._v(" you know which vandal claims\nto have rummaged through your wine club delivery.")]),e._v(" "),a("h1",{attrs:{id:"what-is-trust"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-is-trust","aria-hidden":"true"}},[e._v("#")]),e._v(" What is trust?")]),e._v(" "),a("p",[e._v("For the sake of this article you are going to trust that I actually am Josh, but if I'm signing off on this dirty work as Doug, then that is\na "),a("em",[e._v("claim")]),e._v(".")]),e._v(" "),a("p",[e._v("Normally you would ask me to produce a driver's license or passport to verify my claim. Now these official documents are created by a\ntrusted third party like the Passport Office. Not just you, but society, has agreed that the Passport Office does a good enough job issuing\nthese passports to only the person identified on that document and I can't get a passport printed off calling me Doug.")]),e._v(" "),a("p",[e._v("In this scenario the Passport Office is what is called a Certificate Authority store.")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://curl.haxx.se/docs/caextract.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("cURL CA Extract"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("The kind people at "),a("code",[e._v("cURL")]),e._v(" have extracted the list of corporate entities that do a pretty good job of verifying identities before putting their\ndigital co-signature on my passport claiming I am Doug.")]),e._v(" "),a("p",[e._v("Now, as you may have gathered... trust is a very fickle beast. As I was once told by a chief security expert:")]),e._v(" "),a("blockquote",[a("p",[e._v("Security is the tradeoff between "),a("em",[e._v("paranoia")]),e._v(" and "),a("em",[e._v("peace of mind")]),e._v(".")])]),e._v(" "),a("h1",{attrs:{id:"paranoia"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#paranoia","aria-hidden":"true"}},[e._v("#")]),e._v(" Paranoia")]),e._v(" "),a("p",[e._v("There are many reasons to not trust the Passport Office and become your own trust authority.")]),e._v(" "),a("p",[e._v("First and foremost, getting these certificates signed and updated annually is expensive.")]),e._v(" "),a("p",[e._v("DigiCert is selling "),a("a",{attrs:{href:"https://www.digicert.com/compare-and-buy-ssl-certificates/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Extended Validation Certificates for US$299/year"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("But then there is this gem from the "),a("a",{attrs:{href:"https://aws.amazon.com/certificate-manager/faqs/#ACM_Private_Certificate_Authority",target:"_blank",rel:"noopener noreferrer"}},[e._v("AWS certificate manager FAQs"),a("OutboundLink")],1)]),e._v(" "),a("blockquote",[a("p",[a("strong",[e._v("Q: What are self-signed certificates and why should organizations use certificates from a private CA instead?")])]),e._v(" "),a("p",[e._v("Self-signed certificates are those which are issued without a CA. Unlike certificates issued from a secure root maintained by a CA, self-signed certificates act as their own root, and as a result they have significant limitations: they can be used to provide on the wire encryption but not to verify identity, and they cannot be revoked. "),a("strong",[e._v("They are unacceptable from a security perspective, but organizations use them nonetheless because they are easy to generate, require no expertise or infrastructure, and many applications accept them")]),e._v(". There are no controls in place for issuing self-signed certificates. Organizations that use them incur greater risk of outages caused by certificate expirations because they have no way to track expiration dates. ACM Private CA solves these problems.")])]),e._v(" "),a("p",[e._v("Yet if they don't want the organisation validation (OV) or extended validation (EV)\nand domain validation is sufficient then there is the "),a("a",{attrs:{href:"https://letsencrypt.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Lets Encrypt"),a("OutboundLink")],1),e._v(" initiative.")]),e._v(" "),a("blockquote",[a("p",[a("em",[e._v("Free, automated and open")]),e._v(".")])]),e._v(" "),a("p",[e._v("The next problem is: "),a("em",[e._v("why should people trust you?")])]),e._v(" "),a("p",[e._v("I can print out an ID claiming I'm from Corporate Mail Inspectors and I am called Doug but why should you trust that?")]),e._v(" "),a("p",[e._v("Well if it is well known that your company has a division called Corporate Mail Inspectors then you won't bat an eye that Doug is\nrummaging through and resealing your parcels.")]),e._v(" "),a("p",[e._v("We have established trust again.")]),e._v(" "),a("p",[e._v("So if your corporate proxy is claiming it is doing this, you have to update "),a("em",[e._v("everyone's")]),e._v(" trust stores. This is a lot of work.")]),e._v(" "),a("p",[e._v("Every new computer, every rebuild, every tool.... This is a growing cost of lost time.")]),e._v(" "),a("h1",{attrs:{id:"paradox"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#paradox","aria-hidden":"true"}},[e._v("#")]),e._v(" Paradox")]),e._v(" "),a("p",[e._v("How this presents is that there is an untrusted certificate and the default actions are to walk away or ignore the exception.")]),e._v(" "),a("p",[e._v("So employees get into the habit of letting anyone rummage through your mail.")]),e._v(" "),a("p",[e._v("This has openned up an attack vector for a legitimately malicious MitM attack.")]),e._v(" "),a("p",[e._v("When really, the option to whitelist this one and only certificate, should have been an option.\nEvery subsequent untrusted certificate should be treated with the same amount of skepticism the first one gathered.")]),e._v(" "),a("p",[e._v("Rather than fostering a culture of security, we have a culture of complacency.")]),e._v(" "),a("p",[e._v("So how secure is your security protocol after all?")]),e._v(" "),a("p",[e._v("The funny part, is paying to get a legitimate certificate (passport), whilst expensive, could be a lot cheaper than getting compromised.")]),e._v(" "),a("h1",{attrs:{id:"resources"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#resources","aria-hidden":"true"}},[e._v("#")]),e._v(" Resources")]),e._v(" "),a("p",[e._v("You'll find in the resources below two of my answers to solving these issues inside corporates for tooling git and python.")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://curl.haxx.se/docs/caextract.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("cURL CA Extract"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://support.ssl.com/Knowledgebase/Article/View/19/0/der-vs-crt-vs-cer-vs-pem-certificates-and-how-to-convert-them",target:"_blank",rel:"noopener noreferrer"}},[e._v("Certificates and how to convert them"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://stackoverflow.com/questions/11621768/how-can-i-make-git-accept-a-self-signed-certificate/41253757#41253757",target:"_blank",rel:"noopener noreferrer"}},[e._v("How can I make git accept a self signed certificate?"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://stackoverflow.com/a/52961564/622276",target:"_blank",rel:"noopener noreferrer"}},[e._v("How to add a custom CA Root certificate to the CA Store used by Python in Windows?"),a("OutboundLink")],1)])])])},[],!1,null,null,null);t.default=o.exports}}]);