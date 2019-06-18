---
title:  "Advanced Python Testing"
date:   2019-06-18 10:21:44 +1000
description: "Documenting the rabbit hole of testing tools and options in Python"
categories: dev
---
# Contents

The article is laid out in a few main sections:

 - [Overview](#overview): If you only have a few minutes
 - [Background About Me](#background-about-me): Feel free to skip, but it gives context about my motivation.
 - [Training Montage](#training-montage): Narrative around some very helpful learning resources
 - [Basic Code Quality](#basic-code-quality): If you are new to software engineering and testing, please read.
 - [Advanced Testing](#advanced-testing): Leveraging Mocks, Stubs, Spies, Monkey Patches and Fixtures.
 - [Conclusion](#conclusion): My key take aways if you only have 5 minutes.
 - [References](#references): Links to all resources mentioned.


# Overview

This article is mostly for me to process my thoughts but also to pave a path for anyone that wants to follow a similar journey on some more advanced python testing topics.

I recently had the opportunity to _garbage collect_  a bunch of common libraries at my company into a new python library and git repository. Marking all the critical path libraries and copying them over, and sweeping away the unused cruft.

This meant instituting some open source practices of [code quality](#basci-code-quality) around our core library like testing.

One of the main hurdles I hit was that our API wrapper code was flaky. It would randomly fail and it meant no-one trusted the tests. 

The problem was that the existing tests were designed to test the underlying database/API instead of the wrapper code itself. Thanks to [some help on twitter](https://twitter.com/brianokken/status/1140499269905870848) I landed on [`pytest-vcr`][pytestvcr].

I guess I'm adhereing to [Twitter Driven Development](https://twitter.com/kvlly/status/1139912868307066880?s=21)

<div align=center>
<img
  :src="$withBase('/images/tdd.jpg')"
  alt="In response to 'what is your worst programming advice: Twitter Driven Development"
  width=50%
/>
</div>


It creates `.yml` files to record the http requests per test on the first run, then replays them on subsequent runs of the test. Any request that doesn't match what was previously recorded is a failure as it is malformed from the expectation. It's easy to re-record a new expectation of requests per test too! Since it replays the request, it also allows the existing test assertions about the validity of the reponse to suffice too.

That's the **tl;dr** but feel free to read through the rest of the narrative or just check out the [list of references](#references) at the end.



# Background About Me

A little about me though, I'm a Software Engineer and recently qualified Data Scientist working for Komatsu mining.

> DISCLAIMER: All views expressed hear are my own and do not reflect that of my current employer or any former companies or organisations I have been affiliated with.

**2010-2016**

With that out of the way, I was a data engineer for a startup (2010-2016) using Python for our ETL heavily. So much so I gave a talk about [Unit Testing Data](/posts/2016-11-12-unit-test-data.html).

I also tried to contribute to the AWS python SDK and that is when I learnt the value of automating open source projects. My code had to automatically pass a litany of testing and the test coverage wasn't allowed to regress lower then where it started. 

**If and only if** I passed all these requirements would a real human start checking my PR! This is a much better use human effort. 

Even if it wasn't AWS, but a volunteer open source project, this sort of automation is like having robot colleagues to help your project stay on track! Volunteer time is often time away from family. So the 2-3 hours you do have on a project each week are precious so you want them to be of the most value. 

This is something that stuck with me and I will touch on further below in [Basic Code Quality](#basic-code-quality). Why don't corporations take on these practices? I often ask:

> Would you volunteer on this code base?

**2016-2018**

Between 2016-2018 I worked as a Software engineer at [CloudSense](https://www.cloudsense.com/) which has by far the most impressive code base I have ever worked on.

```bash
git clone <private git repo host>

# Login into private container registry and npm registry
docker login
npm login

npm install
npm test
```

In under 15 minutes of my first day, they had pulled down the source code, built the API server container and MongoDB, Redis and PostgreSQL fixture containers. They're test suite async-awaited the services to start up as fixtures then ran and cleaned up. 

All with code coverage above 80%. Since they integrate with Salesforce, Salesforce enforces 75% code coverage for all Apex code that gets deployed, so CloudSense set the bar higher to allow a buffer.

**2019**

Fast forward to 2019 and I've been with Komatsu for almost a year and have studied a Graduate Diploma of Data Science. The importance of designing statistical experiment,is by far the most important lesson I learned with the lens of a Software Engineer. When ever I'm modifying code or debugging I'm 10x faster by being deliberate about what I'm about to test. A failure or a new error message is information to learn from. So automating tests significantly reduces to cost and cycle time to getting answers.

That said, 2016-2018 I was away from the Python ecosystem and I needed to catch up for this new role at Komatsu. So below I'm going to list the resources that were critical in my [Training Montage](#training-montage)

# Training Montage

Having to catch up on 2 years of Python is no mean feat. Also Software Engineering is like music theory. You don't have to relearn everything, for each new instrument. Python, Node.JS, C++, etc... these are the instruments.

The three main areas that were helpful were Podcasts, Tutorials and books.


## Podcasts

<div align=center>
<img 
  :src="$withBase('/images/pycon2019-podcasts.jpg')" 
  alt="PyCon2019: Me with the podcast hosts Brian Okken and Michael Kennedy"
  height=200
/>
</div>

So the first step to catching up on 2 years is downloading the 2 year back catalog of the folowing podcasts:

 - [Talk Python to Me][talkpythontome]
 - [Test and Code][testandcode]
 - [Python Bytes][pythonbytes]
 
In around 8 weeks of commuting to work, mowing the lawn and ironing shirts I caught up. Also listening at 1.5x speed is your friend. I was lucky enough to attend PyCon2019 and meet the hosts Brian Okken and Michael Kennedy and thank them.

## Real Python articles
 
<div align=center>
<img 
  :src="$withBase('/images/pycon2019-realpython.jpg')" 
  alt="PyCon2019: Me with the Real Python team, Dan Bader and Geir Arne Hjelle"
  height=200
/>
</div>

The team at [Real Python][realpython] are absolutely killing it with Python educational materials. I love how they have standardised on an article format and are pushing new articles every week.

I would get into work an hour before everyone else, sit down with a coffee and read through an article everyday until I felt the gaps had been filled.

 - [Real Python: Packaging a Python Library](https://realpython.com/pypi-publish-python-package/)
 - [Real Python: A guide to Pipenv](https://realpython.com/pipenv-guide/)
 - [Real Python: Automated Testing - Multiple Environments](https://realpython.com/python-testing/#testing-in-multiple-environments)
 - [Real Python: Python Mock Library](https://realpython.com/python-mock-library/)



## Python Testing with PyTest book

<div align=center>
<img 
  :src="$withBase('/images/bopytest.jpg')" 
  alt="Book Cover: Python Testing with pytest - Brian Okken" 
  height=200
/>
</div>

Whilst I was at PyCon I thought I'd grab a physical copy of the [Python Testing with pytest](https://pragprog.com/book/bopytest/python-testing-with-pytest) book for the office thinking I wouldn't need it since I'd already gone pretty deep into python and pytest already.

> NARRATOR: He was wrong.

So I decided if I was going to inflict this upon my colleagues I should read it myself. The first 3 chapters are a minimum for everyday use. The last 4 chapters were the crucial knowledge of fixtures and plugins that really blew my mind on what pytest could do and how extensible the platform is.

Ok, montage complete! Now to test some things.

# Basic Code Quality

Have you ever worked on a code base that looks like a patchwork of conflicting code styles and nothing is consistent?

Ever worked on a code base that is just beautiful and consistent?

[Cognitive Load](https://en.wikipedia.org/wiki/Cognitive_load) is how fat the pipe is for our mental bandwidth to download new information. Just like reading XML versus JSON as a human, the extra symbols take more space over the wire, they take more cognitive load to process.

Inconsistent styles are breaks in our understanding of the grammmar of information presented which adds unnecessary cognitive load and less attention span to detect the actual gnarly bugs.

It's funny how to motivate people about code quality though. 

Person to person nag them and they'll ignore you. 

However a bot that flat out blocks their PR until it they perform some basic code hygiene, whilst a boss is breathing down their neck to hit timelines.... and then it gets done.

I like to call this _getting someone stuck between a boss and a not so hard place_.

## A basic test

Just so we are clear, here is a basic example of a pytest test:

```python
import pytest
from koala.io.config import Config
from koala.io.datawarehouse import DataWarehouse

class TestDataWarehouse:
    
    @pytest.fixture
    def dwh_config(self):
        return Config()


    @pytest.mark.parametrize("names", [True, False], ids=["NamesOnly", "All"])
    def test_get_all_metrics(self, dwh_config, names):
        # Given
        dwh = DataWarehouse(envir=dwh_config)

        # When
        results = dwh.get_all_metrics(name_only=names)

        # Then
        assert results is not None
        assert isinstance(results, list)

```

Here the test is `test_get_all_metrics`. 

It pulls in the `dwh_config` [fixture](#fixtures) which I'll cover later.

It also uses [`pytest`'s parametrizing decorator](https://docs.pytest.org/en/latest/parametrize.html) to run the same test multiple times with different data configurations.

The key practice that makes testing really really easy is the _Given/When/Then_ framework which makes the process of writing tests calmingly methodic and digestable. 

### Given

Everything I need to setup a test. This can consist of test data but also of setting up a database connection using [fixtures](#fixtures) which I promise I'll cover later. The distinction I like is that fixtures return `ERROR`s where as tests throw `FAIL`s.

### When

The part of the code under test. I try to make this section one line of code so it is really clear what is being tested and how a user would write the same line of code. It forces me to think about the Developer Experience (DX) of the API design.

### Then

This is the part where you confirm your expectations. Aim for proprty based aspects instead of fixed values. This might mean you have to sharpen your knowledge of metaprogramming methods like `isinstance`.

## Autoformatting

One of the best inventions in the last few years are autoformatters. I think it started with [`gofmt`](https://golang.org/cmd/gofmt/) but then that idea ported to javascript with [`prettier`](https://prettier.io/).

What it does is actually genius. It will compile your code down to the [AST](https://en.wikipedia.org/wiki/Abstract_syntax_tree) which is valid program devoid of whitespace, indents and other cruft. It then uses that to create your source code again in a consistent style that it produces the same AST!

So to anyone that says "I don't like things that change my code." Well, to a computer it hasn't changed.

Łukasz Langa, worked in the same office as the author of `prettier` and created the equivalent program for python called `black`.

Here is his PyCon2019 talk about how it works if you are interested.

**Łukasz Langa, Life Is Better Painted Black, or: How to Stop Worrying and Embrace Auto-Formatting**

<iframe width="560" height="315" src="https://www.youtube.com/embed/esZLCuWs_2Y" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

To get up and running though it's simple:

```bash
pip install pytest-black
pytest --black
```

Or in your `pytest.ini` or `tox.ini` add the following:

```ini
[pytest]
addopts=
  --black
```

## Linting and Static Analysis


Since Python is an interpretted language there is no formal compile step and a lot of errors don't appear until they are in production. Lucky for us static analysis is a very well understood field at this point and there are tools that will parse your code and look for patterns that exhibit a _code smell_ whilst it is not running.

Simple things like unused variables or import statements can be cleaned out.

But more sophisticated issues like the [Cyclomatic Complexity](https://en.wikipedia.org/wiki/Cyclomatic_complexity) of a function.

We are using [`flake8`][flake8]. However [`pylint`][pylint] is a much more thorough tool but it also takes a full minute at minimum on even a small code base. 

There are a few articles that discuss why `pylint` is valuable but also the cost is speed.

 - [Why Pylint is both useful and unusable, and how you can actually use it](https://pythonspeed.com/articles/pylint/)
 - [Stackoverflow: Why Pylint is too slow while pep8 just takes a second to check the same code?](https://stackoverflow.com/questions/51488322/why-pylint-is-too-slow-while-pep8-just-takes-a-second-to-check-the-same-code)


In the process of trying to get it to run faster I uncovered another issue when trying to roll out code quality to an existing code base. 

> Q: How do you eat an elephant?
> A: One mouthful at a time.

```bash
git diff master..HEAD --name-only
```

This will list all files that were changed in this branch (`HEAD`) relative to `master`. 

Whilst I would not recommend `pylint` on a day-to-day basis, I would recommend getting it's additional checks passing before opening a Pull Request.

So we added a stage to our CI pipeline that only lints modified files:

```bash
pylint $(git diff master..HEAD --name-only | grep '\.py$')
```

Having come from a background of [Typescript](https://www.typescriptlang.org/) and seeing the benefits of working on an incrementally typed code base, I intend to roll out the use of [`mypy`][mypy]. Most likely using _only modified on this branch_ trick to incrementally enforce it until we can use the [`pytest-mypy`][pytestmypy] plugin.

And this is the truly wonderful aspect of `pytest`, the use of plugins to tailor it to be the tool you need it to be and it's not bloated trying to be the tool you don't need.

Lucky for us, `flake8` took the same approach and I have one more plugin [`flake8-docstrings`][flake8docstrings]. Just so you are following along:

```
pytest --> pytest-flake8 --> flake8 --> flake8-docstrings
```

It's plugins all the way down! Since docstrings are a language feature of Python they can be extracted and linted too! This plugin enforces the [PEP-257 Docstring Conventions](https://www.python.org/dev/peps/pep-0257/).

So this is the extra code:

```bash
pip install pytest-flake8 flake8-docstrings
pytest --flake8
```

`tox.ini`
```ini
[pytest]
addopts = 
 --black
 --flake8

[flake8]
# Default of 10 was too low for existing code base.
# Ratcheted this up until existing code passes (20!)
# Then each month dropped by 1 and have refactored back down to 15.
max-complexity=15
```

Easy!


## Code Coverage

Last section on automating code quality before we get into the meatier part of this article.

For the longest time I did not appreciate the value of testing and code coverage until a series of 3am [PagerDuty](https://www.pagerduty.com/) events triggered and woke up me _and my wife_. 

Back to _being stuck between **the boss** and a not so hard place_.

In my bleary eyed state I was manually running scripts to assert part of the system was or was not working as expected..... I was manually running tests. This could be automated, and so we did. We ran it early and ran it often. My wife and I have slept well since.

> Q: So how much code coverage should I aim for?
>
> A: 0% isn't really cutting it at the moment.
>
> 100% isn't practical or pragmatic.
>
> Less than 50% doesn't inspire much confidence either.
>
> So somewhere between 50-100% is our answer.

Back in [background about me](#background-about-me) I mentioned that SalesForce enforces 75%. That means for every 4 lines of code, it is totally ok if one of them doesn't have test coverage. This is a calculated risk and thus the percentage should change depending on your situation.

You can get a lot of code coverage from 3-4 tests. Think of how when taking an MRI scan of the brain they'll inject an die so they can see which paths light up. You can get pretty good coverage from one test and when you layer a few together you get a better idea of what is happening.

I can usually hit 60-70% just by testing _The Happy Path_ of code execution and a few of _The Sad Paths_ of execution. If a bug crops up, well that is another sad path that you can add to your list of tests to cover.

We are using the [`pytest-cov`][pytestcov] plugin that leverages the [`coverage.py`][coveragepy] tool.

```bash
pip install pytest-cov
```

The configuration gets a bit hairy but just read my comments:
`tox.ini`
```ini
[pytest]
addopts = 
# Some other flags ommitted....

# Test Report
  --junitxml=junit/test-results.xml

# Code Coverage
  --cov=.
  --cov-branch
  # --no-cov-on-fail
  --cov-report xml:cov.xml
  --cov-report html:htmlcov
  --cov-report term
  # This value should be ratcheted up overtime as we get better coverage
  # Set at it's lowest point to prevent regressions
  --cov-fail-under=68

  # Target:
  # --cov-fail-under=75

[coverage:run]
omit = 
  **/test_*.py
  **/__init__.py
```

And here is some sample output:

```bash
│- generated xml file: C:\Users\jpeak\projects\kmap-python-lib\junit\test-results.xml -
│
│----------- coverage: platform win32, python 3.7.3-final-0 -----------
│Name                         Stmts   Miss Branch BrPart  Cover
│--------------------------------------------------------------
│koala\io\api.py                  0      0      0      0   100%
│koala\io\cache.py                0      0      0      0   100%
│koala\io\config.py              32      1     18      0    98%
│koala\io\datawarehouse.py      101     21     22      3    77%
│koala\io\shorttermstore.py     230    106     70     11    48%
│--------------------------------------------------------------
│TOTAL                          363    128    110     14    61%
│Coverage HTML written to dir htmlcov
│Coverage XML written to file cov.xml
│
```

I'm currently working through the `shorttermstore` wrapper but when I worked through the `datawarehouse` code I realised something. 

> Increase code coverage by testing more code OR deleting code.

So I refactored a lot of repetitive code and reduced the total number of lines of code as well as branch paths (`Branch` and `BrPart`). I turned on `--cov-branch` to make getting that percentage harder and more realistic as lines of code can be gamed.

[Refactoring 2e - Martin Fowler](https://martinfowler.com/books/refactoring.html) is a recommended read, even if it is only the first 5 chapters as they are the most critical.

Ok, deep breath. We made it this far and this is what I call the basics. 

It's ok. 

All of this, you setup at the start of a project or on an existing code base after you hire me. 

I also call it the basics because you can add these stages to any software project in any language, it's a matter of doing what I did and google each of the headings plus your language's name.

Then it's automated and prompts you what to do when you haven't done it.

But I'm glad you have read this far.

# Advanced Testing

<div align=center>
<img 
  :src="$withBase('/images/yo-dawg.jpg')" 
  alt="Yo Dawg Meme: Yo Dawg, We heard you like mocks; So we put some mocks in your mocks, and now you can mock mocks while you mocking."
  height=200
/>
</div>

I've intentionally added a meme and some humour as a mental ad break as you may want to grab a coffee before the next section. 

I sure did.

## Fixtures

The [`pytest` Fixtures](https://docs.pytest.org/en/latest/fixture.html) documentation is actually really top quality. 

But I really appreciated walking through Ch 3, 4, 5, 7 of [Python testing with pytest - Brian Okken](https://pragprog.com/book/bopytest/python-testing-with-pytest) that covers Fixtures, Builtin Fixtures, Plugins and other tools.

Lucky for you Prag Prog have a free excerpt from the [Fixtures chapter](http://media.pragprog.com/titles/bopytest/fixtures.pdf)

Remember this example from the [start](#a-basic-test)?

```python
import pytest
from koala.io.config import Config
from koala.io.datawarehouse import DataWarehouse

class TestDataWarehouse:
    
    @pytest.fixture
    def dwh_config(self):
        return Config()


    @pytest.mark.parametrize("names", [True, False], ids=["NamesOnly", "All"])
    def test_get_all_metrics(self, dwh_config, names):
        # Given
        dwh = DataWarehouse(envir=dwh_config)

        # When
        results = dwh.get_all_metrics(name_only=names)

        # Then
        assert results is not None
        assert isinstance(results, list)
```

The fixture decorator marks this method for special use within the pytest eco-system. Once it is marked and available, you reference it in a pytest method signature like a function argument. 

You can run the following to discover what fixtures are available:

```bash
pytest --fixtures
```

In our test suite at Komatsu, most of our tests need to be configured to connect to databases. So it makes sense to create a single spot where it is setup (and torn down) but leverage using it multiple times. Should the database not be available, the fixture will throw an `ERROR` to distinguish from your test `FAIL`ing.

In the example above I use a `return` statement, but most fixtures will use a `yield` statement.

```python
@pytest.fixture
def db_connection():
    #Setup
    conn = Database()
    
    yield conn

    # Tear Down
    conn.close()
```

`yield` statements allow code to execute **after** the function initially returns. So when your test starts, it gets up to the `yield` line in your fixture, before your test method starts. Once your test method completes the remainder of the code executes.

This is actually a really good segue to another useful plugin [`pytest-mock`][pytestmock] in the next section.

## Mocks, Spies, Stubs and Monkey Patches


### Monkey Patches

```python
import pytest
from koala.io.config import Config

class TestConfig:
    def test_bracket_accessors(self, monkeypatch):
        # given
        monkeypatch.setenv("KOALA_ENV", "pytest")
        c = Config(require_only=["KOALA_ENV"])

        # when
        results = [c["KOALA_ENV"], c["koala_env"], c["Koala_Env"]]

        # then
        assert results == ["pytest", "pytest", "pytest"]

```

Our configuration class abides by the tenets of [Twelve Factor Apps: Config](https://12factor.net/config) and expects configuration to be defined as environment variables.

I was using `os.environ` directly but then that was modifying my global state and subesquent tests were not reliable, (and neither was my computer!). 

The thing is when I ran `pytest koala/io/tests/test_config.py` for quick iterations it worked but when I ran `pytest` for the whole suite it broke. My tests only worked because of the order they ran and I would have found this earlier if I'd used [`pytest-randomly`][pytestrandomly] which randomises the ordering of test execution.

```bash
pip install pytest-randomly
```

So I would have found this sooner, but how do I fix it? Well pytest has a builtin fixture for [monkeypatching](https://docs.pytest.org/en/latest/monkeypatch.html#monkeypatching-environment-variables) even with an example monkey patching environment variables.

> Hold on! What is this Monkey business?

A monkey patch is a way to temporarily modify system behaviour.

```python
monkeypatch.setenv("KOALA_ENV", "pytest")
```

This line ensures that for the duration of this test **AND ONLY THIS TEST** `os.environ["KOALA_ENV"]` will return `"pytest"`.

### Mocks

I mentioned [`pytest-mock`][pytestmock], this uses the same principle of adding a fixture (`mocker` in this case) that will automatically clean up your testing state. It includes monkey patching and some convenience methods for creating mocks, stubs and spies.

A [`Mock`](https://docs.python.org/3/library/unittest.mock.html) is a very special Python object that you can swap it in for any other class, function or method and it will accept any method calls.

In it's default state it will do absolutely nothing at this point but let you capture _how_ a method was called and _how many times_ it was called. This gives us the option to design tests around these properties.

### Stubs

Stubs are like using a mock but you are usually returning a hard coded value instead of using the real method. Think of using a payment portal, you don't want to test sending money all the time but you want to test how your code behaves after it returns a value.

You can compose tests using the [parametrizing](http://doc.pytest.org/en/latest/parametrize.html) we mentioned earlier that can iterate through a hard coded list of scenarios that could return and put your response handlers through their motions.

### Spies

I personally think Spies are genius when you see how [`pytest-mock`][pytestmock] implement them in [`mocker.spy()`](https://github.com/pytest-dev/pytest-mock/blob/master/pytest_mock.py#L107).

It is a Mock with a `side_effect` of running the actual code.

So you can inject a spy into the flow of your normal code and access these extra execution properties about how often it was called and the history of arguments used to call it.

## Be Kind and Rewind

Now that I have laid out all of that foundational knowledge, and to be honest it was a truck load that took me months to ramp up to we add these lines:

```bash
pip install pytest-vcr
```

`tox.ini`
```ini
[pytest]
addopts = 
# PyVCR: HTTP Requests Fixture
  --vcr-record=none
# ... other flags ...
```

```python
import pytest
from koala.io.config import Config
from koala.io.datawarehouse import DataWarehouse

VCR_ARGS = dict(
    filter_headers=["Authorization"], 
    match_on=["method", "scheme", "host", "port", "path", "query", "headers", "body"]
)

class TestDataWarehouse:
    
    @pytest.fixture
    def dwh_config(self):
        return Config()


    @pytest.mark.vcr(**VCR_ARGS)
    @pytest.mark.parametrize("names", [True, False], ids=["NamesOnly", "All"])
    def test_get_all_metrics(self, dwh_config, names):
        # Given
        dwh = DataWarehouse(envir=dwh_config)

        # When
        results = dwh.get_all_metrics(name_only=names)

        # Then
        assert results is not None
        assert isinstance(results, list)

```

Thanks to some _Twitter Driven Development_ I ran into [`pytest-vcr`][pytestvcr] which achieved what I needed to test our API wrappers in 4 lines of code (depending how you count it).

The decorator `@pytest.mark.vcr` is all we need really. It creates a fixture that intercepts all HTTP traffic to our APIs only for the duration of a test. That is all requests and responses and I found out that some methods were making 3 API requests in a single test!

In our `tox.ini` I set the default flag to `--vcr-record=none` but initially I need to use `--vcr-record=once` so it will save YAML files next to my test so it can be replayed.

The fact that I now have a cache makes these tests 10x faster not being blocked on network IO.

Now lets look at the `VCR_ARGS` constant. VCR saves _all_ headers unless you `filter_headers` and in particular the `Authorization` header. Since I'm committing these YAML files to version control I do not want to store sensitive data. You should also filter out headers that are not test invariants, eg features that should reliably be properties of this request everytime like `nonce`s.

In our CI system the default behaviour uses the `--vcr-record=none`, which means VCR tries to match with existing YAML files and record no new requests. 

The default matcher when looking up locally does not include matching the `headers` and `body`, so I have enabled these in the `match_on` initialisation.

Now, I can get `pytest-vcr` to throw errors if there is a regression in how I compose a request! If it is a valid change to that test behaviour, I'll delete the YML file and record a new one.

This is the same idea behind [Jest](https://jestjs.io/) where it takes snapshots of rendered Web Components as a snapshot reference for testing.

The part that VCR snapshot go beyond is that we essentially recorded stub data too so I can test the response handlers. I can copy a YML file and edit it to manually introduce response errors to test other pathways.

Now I'm only 24 hours into using `pytest-vcr` and have a lot more to discover but what I'd like to see is the same sort of [improved reporting of call assertions](https://github.com/pytest-dev/pytest-mock/#improved-reporting-of-mock-call-assertion-errors) from `pytest-mock` when a request doesn't match locally but reports the diff of the nearest match.

Who knows, it might be a setting I'm missing, or it might mean I open a Pull Request.

Before I wrap up this section though I'd like to mention some plugins that were mentioned on twitter in this space:

 - [Snapshot test][snapshotest]
 - [pytest-responses][pytestresponses]

# Conclusion

Code quality plugins like [`pytest-black`][pytestblack] and [`pytest-flake8`][pytestflake8] automatically add source files as a linting test that will fail CI but also skip the test if that file hasn't been modified between runs. This caching drops the first test run from 71 seconds to 44 seconds.

With the help of [`pytest-xdist`][pytestxdist] I was able to spread our tests across multiple processes and reduced our total test suite time from 44 seconds to 14 seconds.

With the help of the [`pytest-vcr`][pytestvcr] plugin I was able to mock out our HTTP traffic in our API test wrappers. This cached response reduced the tests from 14 seconds to 1.4 seconds.



# References

## Tools

 - [Pytest][pytest]
 - [Tox][tox]
 - [Black][black]
 - [Flake8][flake8]
 - [Coverage.py][coveragepy]
 - [pipenv][pipenv]
 - [mypy][mypy]

## Pytest Plugins

 - [`pytest-black`][pytestblack]: Enforce formatting style [`black`][black] as a test
 - [`pytest-flake8`][pytestflake8]: Enforce linting standard [`flake8`][flake8] as a test
 - [`pytest-cov`][pytestcov]: Measure and enforce code coverage (> 75%) [`coverage.py`][coveragepy]
 - [`pytest-mock`][pytestmock]: Test fixture to assist mocking and monkey patching
 - [`pytest-vcr`][pytestvcr]: Record and replay HTTP requests as a test fixture ([`VCR.py`][vcrpy])
 - [`pytest-randomly`][pytestrandomly]: Run tests in random order to detect leaking global state
 - [`pytest-xdist`][pytestxdist]: Distribute tests across multiple CPU cores (or compute nodes)

Others but untested:

 - [Snapshot test][snapshottest]: Inspired by [Jest](https://jestjs.io/)
 - [`pytest-responses`][pytestresponses]: pytest fixture for mocking out the requests library

## Podcasts

 - [Talk Python To Me][talkpythontome]
 - [Test and Code][testandcode]
 - [Python Bytes][pythonbytes]

## Books

 - [Python Testing with pytest - Brian Okken (Pragmatic Programmer Publishing)](https://pragprog.com/book/bopytest/python-testing-with-pytest)

## Articles

 - [Real Python][realpython] 
     - [Real Python: Packaging a Python Library](https://realpython.com/pypi-publish-python-package/)
     - [Real Python: A guide to Pipenv](https://realpython.com/pipenv-guide/)
     - [Real Python: Automated Testing - Multiple Environments](https://realpython.com/python-testing/#testing-in-multiple-environments)
     - [Real Python: Python Mock Library](https://realpython.com/python-mock-library/)

[pytest]: https://doc.pytest.org/
[tox]: https://tox.readthedocs.io/en/latest/
[pytest]: https://pytest.org/
[pipenv]: https://docs.pipenv.org/
[pylint]: https://www.pylint.org/ 
[pytestcov]: https://pytest-cov.readthedocs.io/en/latest/
[coveragepy]: https://coverage.readthedocs.io/en/v4.5.x/
[mypy]: http://mypy-lang.org/
[pytestmypy]: https://pypi.org/project/pytest-mypy/
[pytestblack]: https://github.com/shopkeep/pytest-black
[black]: https://black.readthedocs.io/en/stable/
[pytestflake8]: https://pypi.org/project/pytest-flake8/
[flake8]: http://flake8.pycqa.org/en/latest/index.html
[pytestcov]: https://pytest-cov.readthedocs.io/en/latest/
[coveragepy]: https://coverage.readthedocs.io/en/v4.5.x/
[pytestmock]: https://pypi.org/project/pytest-mock/
[pytestvcr]: https://pypi.org/project/pytest-vcr/
[vcrpy]: https://vcrpy.readthedocs.io/en/latest/index.html
[pytestrandomly]: https://pypi.org/project/pytest-randomly/
[pytestxdist]: https://pypi.org/project/pytest-xdist/

[snapshottest]: https://github.com/syrusakbary/snapshottest
[pytestresponses]: https://github.com/getsentry/pytest-responses

[realpython]: https://realpython.com/
[talkpythontome]: https://talkpython.fm/
[testandcode]: https://testandcode.com/
[pythonbytes]: https://pythonbytes.fm/
