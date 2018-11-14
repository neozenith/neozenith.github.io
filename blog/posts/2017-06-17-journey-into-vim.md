---
title:  "Journey Into Vim"
date:   2017-06-16 12:21:44 +1000
description: "Detailing and recapping to myself why I got into vim and continue to practice the vim way."
categories: dev
---

<img style="float:right; align: right;" :src="$withBase('/images/vim-bonsai.svg')" alt="Animated Bonsai Image" />

# Introduction

The Vim bonsai logo I have made here is a symbol of my vim journey and my dotfiles.
It all starts with a seed and then you nurture it and also prune it for your 
own environment and changing conditions. 

Each person's Vim journey is different for this reason.

And yes, I created the Vim Bonsai in Vim.


# My Configuration

<img :src="$withBase('/images/example1.png')" alt="Screenshot of Vim"/>

Before we get too deep into the rabbit hole that is Vim have a look at my [my Vim configuration](https://github.com/neozenith/dotfiles) and the screenshot above too see where I am heading.

I am quite proud of where I have got my vim configuration to because it 
satisfies a list of motivations that have built up over my career and has started 
making me think about software development in new and different ways.

**I need to develop on remote servers**, and its funny how you can't just install
XCode or Visual Studio with all their bloat and setup cost on a remote machine 
with no GUI. 
When you get down to it what you really need is a text editor and a compiler. 

This started me questioning in a minimalist way *what do I really need in my dev setup?*

**My computer died... a few times**, which meant I lost my development setup...
 a few times. So this got me thinking that surely I can reduce the setup cost of
 moving to another system whether by choice or that gets forced upon me.
 This vim configuration is text based and the community that use it tend to 
 version control their setup. I started thinking of my development environment 
 as a software product I need to be able to deploy anywhere. I got very 
 aggressive about the risk of losing my setup to the point where **weekly** 
 I will intentionally delete my setup and run my `install.sh`. 
 
 I even had an interview once where on their machines I quickly grabbed my `.vimrc` from github
 and went to town doing the coding task as though it was my machine.
 
 So each week I ask *how can I reduce the time it takes get setup?*

**I like knowing how things work**, I really detest black boxes and iterating 
on vim as a development tool allows me to go down the rabbit hole of building
a custom IDE experience. I see a feature in another IDE and take it as a personal
challenge to find a Vim plugin or write the functionality myself.
When you think about it, an IDE is a *glorified text editor*. Well so is vim.

I will admit that at times just using an IDE would be quicker but I am stubborn 
and love solving these problems to scratch a curiosity itch.

Ultimately I ask myself *what is the underlying tool my text editor needs to trigger?* 
and I connect it. Most of the time vim already has the functionality or there is
a plugin. I also understand compilers, linkers and text transformation tools
a lot better for it.

**Programming is a lot of typing**. I have heard a few inspiring quotes about
personal productivity which were game changers in how I think:

 - *You should figure out to do what you do with the least amount of physical effort*.

I like to run a lot for recreation and fitness and this rings true with the idea
of your *running economy*. Least amount of effort to achieve the same distance and time.
Suddenly this is an optimisation problem I need to tune, to squeeze efficiency in 
being a faster, better, stronger developer.

 - *You should figure out how to do what you do in a 38 hour week in 37 hours of work, every week.*

This means that if I figure out some hack that saves me an hour, I can be ~39
hours of productive in 38 hours the following week. In theory (38/37)^52 means
you should be 4x more productive at the end of the year than you were at the start.
This philosophy compounds like a long term investment into yourself.

So combined both strive to reduce physical effort and time. 

**Conclusion**

Like I said, it has become a bit of a introspective journey and the progress I 
make with my vim configuration is an accumulation of my personal and professional 
development.


----

## Resources and Training

Below I have left a list of resources and notes to myself that act as a gateway
training guide for my colleagues that want to get more out of vim as they run 
into it.

These blogs have been hugely influential and informative in making the switch.

 - [VimCasts][vimcasts] - Video Tutorials
 - [Vim Adventures][vim-adventures] - Online game of Vim Tutor
 - [Thorsten Ball's Vim Resources][thorsten-ball-vim-resources]
 - [Vim Revisted][vim-revisited] - Good for explaining core navigation shortcuts
 - [Coming Home to Vim - Steve Losh][coming-home]
 - [Vim Text Objects: The Definitive Guide][text-objects]

[vimcasts]: http://vimcasts.org/
[vim-adventures]: https://vim-adventures.com/
[thorsten-ball-vim-resources]: https://thorstenball.com/blog/2012/07/09/vim-learning-resources/
[vim-revisited]: http://mislav.net/2011/12/vim-revisited/
[coming-home]: http://stevelosh.com/blog/2010/09/coming-home-to-vim/
[text-objects]: http://blog.carbonfive.com/2011/10/17/vim-text-objects-the-definitive-guide/

