---
layout: post
title:  "Journey Into Vim"
date:   2017-06-16 12:21:44 +1000
categories: dev
---

# My Configuration

![screenshot]({{ site.baseurl }}{% link images/example1.png %})

Before we get too deep into the rabbit hole that is Vim have a look at my [my Vim configuration](https://github.com/neozenith/vim-dotfiles) and the screenshot above too see where I am heading.

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
Suddenly this is an optimisation problem I need to tune to squeeze efficiency in 
being a faster, better, stronger developer.

 - *You should figure out how to do what you do in a 38 hour week in 37 hours of work, every week.*

This means that if I figure out some hack that saves me an hour, I can be 39
hours of productive in 38 hours the following week. In theory (38/37)^52 means
you should be 4x more productive at the end of the year than you were at the start.
This philosophy compounds like a long term investment into yourself.

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

### Vim in 10 Seconds

 - Press `i` to enter *Insert Mode*
    - This is now like a regular text editor
 - Press `ESC` to finish editing
 - Type `:wq` to save & exit
 - Type `:q` to exit
 - Type `:q!` to force exit without saving

### Vim in 5 minute

 - [Modal Text editing](#modal-text-editing)
 - [Copy and Pasting](#copy-and-pasting)
 - [Clipboards](#clipboards)
 - [Search and Replace](#search-and-replace)
 - [Movement](#movement)

#### Modal Text editing

Vim has 3 modes which logically scope the types of tasks you perfom text 
editing. This scoping allows shortcuts to have a context and forces you to
really think about the nature and types of tasks you perform editing text.

**Normal Mode**
 - If you hit `ESC` enough times you'll return to this mode
 - This is your main navigation and command input mode

**Insert Mode**
 - You enter this mode from *Normal Mode* by:
    - `i`nsert
    - `I`nsert at start of line
    - `A`ppend to end of line 
 - `ESC` to return to *Normal Mode*

**Visual Mode**
 - This mode selects text to perform operations. You enter by:
   - `v` - select character by character
   - `V` - select line by line

#### Copy and Pasting

 - `y`ank (copy) text selected
 - `Y`ank (copy) entire line selected
 - `p`aste after cursor
 - `P`aste before cursor
 - `x` (cut) text selected
 - `X` (cut) lines selected

#### Clipboards

Vim has it's own clipboard which is not connected to the system clipboard by
default. It has the concept of named buffers and the system clipboard is a 
specially named buffer to which you apply the above actions.

 - `"aY` - Yank current line to clipboard `"a`
 - `"ap` - Paste the contents of clipboard `"a` after the cursor
 - `"*Y` - Yank the current line into the system clipboard `"*`
 - `"*p` - Paste the contents of the system clipboard `"*` after the cursor

#### Search and Replace

From *Normal Mode*

 - `/search-phrase` will search forward for `search-phrase`
 - `n` will tab to the next search result
 - `?search-phrase` will search backwards
 - `N` will tab backwards for next search match
 - `:%s/old/new/g` - will replace `old` with `new` everywhere in document
   - `:%s/old/new/gc` - make each change require confirmation
   - `old` could be a Regex
   - The `s/old/new/g` syntax is the same as the `sed` unix tool.
 - From *Visual mode* make a selection then type `:` and it will have `:'<,'>`
 - Complete this to look like: `:'<,'>s/old/new/g` to search and replace all
   `old` for `new` in the selected region.

#### Movement

This is where Vim diverges from your normal text editors. You may be aware of
`Home` and `End` keys that take you to the start and end of a line. Or how on a 
Mac holding Alt + -> will jump word by word.

Vim can jump forward an backward:
 - Character by character (Arrow keys)
 - Word by word (`w` word forward, `b` word backward)
 - Sentence by sentence ( `)` sentence forward, `(` sentence backward)
 - Paragraph by paragraph ( `}` paragraph forward, `{` paragraph backward)
 - Heading or brackets ( `]]` section forward, `[[` section backward)
 - Matching parenthesis, bracket or brace (`%`)

Vim has an understanding of the text structures. See *knowing where you want 
to go* in [Vim Revisited][vim-revisited] for more details.

 

### Vim in 30 minutes

There is a common misconception that Vim has a huge learning curve and takes
years to understand.

**WRONG**

Type `vimtutor` at the command line and work through the lessons. That's it!

What takes years is, shaping and crafting your editor to suit you as you 
personally evolve over the years. The reason Vim has lasted for so many years
is because it is so extensible it has evolved capabilities through plugins.
