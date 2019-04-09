---
title:  "Programming WebAssembly with Rust"
date:   2019-04-09 
description: "Journalling my journey learning WebAssembly whilst also learning Rust"
categories: programming
---

# Context

Thanks to [The Pragmatic Bookshelf](https://pragprog.com) having a 40% off sale for April Fools 2019 I snagged
a few books as bargains. In particular I grabbed the following book:

![Book cover](https://imagery.pragprog.com/products/574/khrust_xlargecover.jpg?1538765162)

[Programming WebAssembly with Rust](https://pragprog.com/book/khrust/programming-webassembly-with-rust)

So the intent is to walk through the book and exercises, documenting my journey. With the end goal to 
present at my local javascript meetup in half an hour a summary and demo of the experience. I've also put
my hand up for a specific month, so this is now an arbitrary deadline to finish.

# Setup

You will want to download and build the WebAssembly Binary Toolkit aka WABT
pronounced Wabbit.

```bash
git clone --recursive https://github.com/WebAssembly/wabt
cd wabt/
cmake -Bbuild -H. -DCMAKE_BUILD_TYPE=DEBUG -DCMAKE_INSTALL_PREFIX=~/.wasm
cmake --build build --target install
```

# Part 1 - Fundamentals

At [this commit](https://github.com/neozenith/rust-wasm/commit/914d1739ddfb0d38ec5d6c076ad8bba714f4896d)
I'm working through writing raw WebAssembly which is called `.wat` files for _WebAssembly Text_.
The compiled binary files are `.wasm`.

The above linked `wabt` toolkit can compile and decompile in both directions.

`wasm` is most like Java bytecode as it is a stage in the middle of:

 - human readable 
 - machine readable 
 - platform optimised

Later we'll use Rust to compile to `wasm` as a target machine readable output.

For now we'll write raw `wat` to get a feel for the `wasm` virtual machine and its limitations as well as 
the mechanism for interacting with javascript.

```bash
python3 -m http.server
# open http://localhost:8000/index.html
# Open console logs
```


# Part 2 - Checkers

# Part 3 - Raspberry Pi

# Conclusion




