---
title:  "Self-Signed Certificates"
date:   2018-11-07 12:21:44 +1000
description: "A rant on Corporate Proxies causing an oxymoron of security practices."
categories: security
---

# {{$page.title}}

God damn corporate proxies.... The oxymoron of security practices. 

Don't get me wrong. I love and appreciate their value in providing a gated community. When you work for any company with a large enough
target on their back you want layers of protection, to make sure you haven't been hacked overnight and still have a job to go to in the morning.

# The problem

They break security protocols to add new security protocols. In particular they perform a 
"trusted" [Man in the middle attack](https://en.wikipedia.org/wiki/Man-in-the-middle_attack) (MitM) but lucky for us make no attempt to cover it up.

Just like a vandal intercepting your mail, rifling through it, resealing it and _signing their work_ you know which vandal claims
to have rummaged through your wine club delivery.

# What is trust?

For the sake of this article you are going to trust that I actually am Josh, but if I'm signing off on this dirty work as Doug, then that is 
a _claim_.

Normally you would ask me to produce a driver's license or passport to verify my claim. Now these official documents are created by a 
trusted third party like the Passport Office. Not just you, but society, has agreed that the Passport Office does a good enough job issuing 
these passports to only the person identified on that document and I can't get a passport printed off calling me Doug.

In this scenario the Passport Office is what is called a Certificate Authority store.

[cURL CA Extract](https://curl.haxx.se/docs/caextract.html)

The kind people at `cURL` have extracted the list of corporate entities that do a pretty good job of verifying identities before putting their
digital co-signature on my passport claiming I am Doug.

Now, as you may have gathered... trust is a very fickle beast. As I was once told by a chief security expert:

> Security is the tradeoff between *paranoia* and *peace of mind*.

# Paranoia

There are many reasons to not trust the Passport Office and become your own trust authority. 

First and foremost, getting these certificates signed and updated annually is expensive.

DigiCert is selling [Extended Validation Certificates for US$299/year](https://www.digicert.com/compare-and-buy-ssl-certificates/).

But then there is this gem from the [AWS certificate manager FAQs](https://aws.amazon.com/certificate-manager/faqs/#ACM_Private_Certificate_Authority)

> **Q: What are self-signed certificates and why should organizations use certificates from a private CA instead?**
> 
> Self-signed certificates are those which are issued without a CA. Unlike certificates issued from a secure root maintained by a CA, self-signed certificates act as their own root, and as a result they have significant limitations: they can be used to provide on the wire encryption but not to verify identity, and they cannot be revoked. **They are unacceptable from a security perspective, but organizations use them nonetheless because they are easy to generate, require no expertise or infrastructure, and many applications accept them**. There are no controls in place for issuing self-signed certificates. Organizations that use them incur greater risk of outages caused by certificate expirations because they have no way to track expiration dates. ACM Private CA solves these problems.

Yet if they don't want the organisation validation (OV) or extended validation (EV)
and domain validation is sufficient then there is the [Lets Encrypt](https://letsencrypt.org/) initiative. 

> _Free, automated and open_.

The next problem is: _why should people trust you?_

I can print out an ID claiming I'm from Corporate Mail Inspectors and I am called Doug but why should you trust that?

Well if it is well known that your company has a division called Corporate Mail Inspectors then you won't bat an eye that Doug is 
rummaging through and resealing your parcels.

We have established trust again.

So if your corporate proxy is claiming it is doing this, you have to update _everyone's_ trust stores. This is a lot of work.

Every new computer, every rebuild, every tool.... This is a growing cost of lost time.

# Paradox

How this presents is that there is an untrusted certificate and the default actions are to walk away or ignore the exception.

So employees get into the habit of letting anyone rummage through your mail.

This has openned up an attack vector for a legitimately malicious MitM attack.

When really, the option to whitelist this one and only certificate, should have been an option. 
Every subsequent untrusted certificate should be treated with the same amount of skepticism the first one gathered.

Rather than fostering a culture of security, we have a culture of complacency.

So how secure is your security protocol after all?

The funny part, is paying to get a legitimate certificate (passport), whilst expensive, could be a lot cheaper than getting compromised.

# Resources

You'll find in the resources below two of my answers to solving these issues inside corporates for tooling git and python.

 - [cURL CA Extract](https://curl.haxx.se/docs/caextract.html)
 - [Certificates and how to convert them](https://support.ssl.com/Knowledgebase/Article/View/19/0/der-vs-crt-vs-cer-vs-pem-certificates-and-how-to-convert-them)
 - [How can I make git accept a self signed certificate?](https://stackoverflow.com/questions/11621768/how-can-i-make-git-accept-a-self-signed-certificate/41253757#41253757)
 - [How to add a custom CA Root certificate to the CA Store used by Python in Windows?](https://stackoverflow.com/a/52961564/622276)
