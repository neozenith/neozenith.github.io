---
title:  "From Zero to Test: Turning hurdles into steps."
date:   2019-07-22 
description: "A few basic principles on testing to overcome that initial 'wall of daunting' and have a framework for successes."
categories: dev
---

<div align=center>
<img
  :src="$withBase('/images/books.jpg')"
  alt="Reference books on my desk"
/>
</div>


# Overview

I strongly believe you can do a lot with very little when developing software and you don't have to know 100% to have learnt enough to be effective. 

The same is true when automating tests.

This article will layout a few maxims, that if you follow only these, you will go from zero testing to ~80% effective at testing. The [Pareto Principle][pareto] is also called the 80/20 rule. You get 80% of the effect from 20% of the effort, whilst the last 20% of effect requires _the other 80% effort_. This is of course annecdotal but you get the point. Throughout this article I will try to link to resources if you want to read further about _the other 80%_ after you have whet your appetite.

Ok, here are the maxims:

1. [**Given-When-Then**](#given-when-then): Every test has three easy to remember steps (and they rhyme!).
1. [**Happy Paths and Sad Paths**](#happy-paths-and-sad-paths): When should it work? How should it break?
1. [**Inner Loop vs Outer Loop**](#inner-loop-vs-outer-loop): Fast Focused testing (milliseconds) and Coffee Break Comprehensive (minutes).
1. [**Refactoring: Less is More**](#refactoring-less-is-more): You could write more tests or you could DRY out the code.


# Given-When-Then


Here is a simple sample test I covered in my other article [Advanced Python Testing](/posts/2019-06-18-Advanced-python-testing.html) but you don't have to understand what it does, just the anatomy.

```python
import pytest
from koala.io.config import Config
from koala.io.datawarehouse import DataWarehouse

class TestDataWarehouse:
    
    @pytest.fixture
    def dwh_config(self):
        return Config()


    def test_get_all_metrics(self, dwh_config):
        # Given
        dwh = DataWarehouse(envir=dwh_config)

        # When
        results = dwh.get_all_metrics()

        # Then
        assert results is not None
        assert isinstance(results, list)
        assert len(results) > 0

```

Here the test is `test_get_all_metrics`. 

It pulls in the `dwh_config` [fixture](/posts/2019-06-18-Advanced-python-testing.html#fixtures) which I covered in my other post but you can ignore for now. 

The key practice that makes testing really really easy is the _Given/When/Then_ framework which makes the process of writing tests calmingly methodic and digestable. 

### Given

Everything I need to setup the variables, states, conditions and databases etc to successfully _reproduce_ a test _in isolation_. 

This can consist of test data but also of setting up a database connection using fixtures. The distinction I like is that fixtures return `ERROR`s where as tests throw `FAIL`s.

This is handy, when I run my test suite, `FAIL`s mean my code is broken and this is important. `ERROR`s are bad but a different kind of bad. Which means production code doesn't have a fault, just our test suite design which is less critical and time sensitive. I don't know about you but this distinction actually reduces my stress levels a little.

It also make the rest of the test clean and easy to see.

To extend yourself on _the other 80%_ read the following topics:
 - [Pytest Fixtures: Explicit, modular, scalable](https://docs.pytest.org/en/latest/fixture.html)
 - [Martin Fowler: Test Doubles](https://martinfowler.com/bliki/TestDouble.html)
 - [Martin Fowler: Mocks Aren't Stubs](https://martinfowler.com/articles/mocksArentStubs.html)


### When

The part of the code under test. I try to make this section one line of code so it is really clear what is being tested and how a user would write the same line of code. 

It forces me to think about the Developer Experience (DX) of the API design.

### Then

This is the part where you confirm your expectations. Aim for property based aspects instead of fixed values. This might mean you have to sharpen your knowledge of metaprogramming methods like `isinstance`. 

Diving deeper into what metaprogramming properties you can leverage is _the other 80% of effort_ that gets you the last 20%.

Extend yourself further with topics like the following:
 - Statistical testing - "The website loads under 1s 99% of the time." allows confidence with measurable uncertainty
    - [hypothesis](hypothesis)
 - Snapshot testing - Record a result as a truth to detect regressions.
    - [VCRpy][vcrpy]
    - [Snapshot test][snapshottest]
    - [`pytest-responses`][pytestresponses]
 - Mutation testing
 - Many more... I'm still learning these myself.

# Happy Paths and Sad Paths

## Happy Paths

This is pretty easy and likely the minimal amount of testing you'll want to write. 

When everything is going well, what can we assert about the system that we would know it is working?

Before automated testing, what would you run manually and check to know it worked? Could you encode that in a script? Yes. The answer is usually yes.

Now the next developer can leverage your test automation. More often that not, the _next developer_ is you. Do your future self a favour.

## Sad Paths

> A QA engineer walks into a bar. 
>
> Orders a beer. 
>
> Orders 0 beers. 
>
> Orders 99999999999 beers. 
>
> Orders a lizard. 
>
> Orders -1 beers. 
>
> Orders a ueicbksjdhd. 
>
> First real customer walks in and asks where the bathroom is. The bar bursts into flames, killing everyone.
>

[Brenan Keller - Twitter](https://twitter.com/brenankeller/status/1068615953989087232?lang=en)

Ok the first test case is a happy path ordering a beer. The next 5 are _Sad Paths_ where we try to safely handle failures of the system.

The key is to check for:
 - uninitialised, null values or 0s
 - large values
 - invalid data types 
 - negative values
 - random unexpected inputs

If you want to read further on this topic there are tools called [Faker][faker] and [Hypothesis][hypothesis] if you want to generate fake data for testing. The idea is that if you throw random subsamples of data at your tests, over time you will have covered a robust distribution of corner cases you never would have thought of manually. 

I'd like to add in here InfoSec/SecOps tests. You put locks on your house? You don't leave your keys on the front porch? Some basic tests around your authentication can prevent some embarrassing regressions.

The last line about the bathroom is also an _Untested Sad Path_.

## Untested Sad Paths

When you have a bug report come in, this is a sad path we didn't catch. That's ok. 

We have a framework for writing a reproducible test to replicate the bug and ensure our fix stays fixed.

I have seen bugs re-introduced, when simply adding to the catalog of sad paths would have caught it.

Setting up the testing framework, is the 20% that allows adding the last 80% to be so much easier and grow over time.

# Inner Loop vs Outer Loop

```python
for i in range(10):
    print("Outer Loop")

    for j in range(1000):
      print("Inner Loop")
```

The idea is that your _Inner Loop_ should take milliseconds and cost the least amount of time because quickly iterating is the most important task and you'll likely do this 1000x for every time you run your outer loop.

The _Outer loop_ test is more comprehensive and the reason why many people claim "tests take too long to run". 
Wait... are you running your outer loop as your inner loop? 

## Inner Loop

Most of the time I'm working on a single test so I should run only that test.

**Single Test**
```bash
pytest koala/io/tests/test_datawarehouse.py::TestDataWarehouse::test_get_all_metrics

========================== 1 passed in 0.57 seconds ===========================
```

Which is different to the following which takes longer even if it is under 1 second:

**Test Suite**
```bash
pytest koala/io/tests/test_datawarehouse.py
==================== 15 passed, 2 skipped in 0.94 seconds =====================
```

I have snapshot testing on ([VCRpy][vcrpy]) which doesn't hit the real test datawarehouse. So the `--disable-vcr` is a non-standard pytest flag. You will need [`pytest-vcr`][pytestvcr]

**Integration tests**
```bash
pytest koala/io/tests/test_datawarehouse.py --disable-vcr
==================== 15 passed, 2 skipped in 48.91 seconds ====================
```

You see how network intensive these tests are? That is 50x slower and adds up.

This is where we delegate full integration testing to the _Outer Loop_ but we can make use of _Snapshot Testing_ as a proxy for fast _Inner Loop_ testing workflows. And thats important... its a workflow, not a rule.

But I'm writing this up because not many people know its an option.

**Markers as Filters**
```bash
pytest koala/io/tests/test_datawarehouse.py --disable-vcr -m "not vcr"

koala/io/tests/test_datawarehouse.py::FLAKE8 SKIPPED                     [ 25%]
koala/io/tests/test_datawarehouse.py::TestDataWarehouse::test_default_initialisation PASSED [ 50%]
koala/io/tests/test_datawarehouse.py::BLACK SKIPPED                      [ 75%]
koala/io/tests/test_datawarehouse.py::TestDataWarehouse::test_legacy_initialisation_error PASSED [100%]

============= 2 passed, 2 skipped, 13 deselected in 0.61 seconds ==============
```

Here is a way I can find tests I haven't used [VCRpy][vcrpy] on for snapshot testing. Looks like these tests aren't reaching out to the network anyhow. Black and Flake8 automatically skip since the file has not been modified since it last passed so that saves precious milliseconds when we are doing this 1000x times a day.

**Keyword Filters**
```bash
pytest koala/io/tests/test_datawarehouse.py -k metrics

koala/io/tests/test_datawarehouse.py::TestDataWarehouse::test_get_all_metrics[All] PASSED [ 33%]
koala/io/tests/test_datawarehouse.py::TestDataWarehouse::test_create_metrics PASSED [ 66%]
koala/io/tests/test_datawarehouse.py::TestDataWarehouse::test_get_all_metrics[NamesOnly] PASSED [100%]

=================== 3 passed, 14 deselected in 0.67 seconds ===================
```

This matches on substrings in the test node ID to help filter to a subset of all tests keeping us focused and getting answers in under 1 second. It also means I can gather and combine related tests to customise my Inner Loop on the fly.

**Last Failed / First Failure**

Next I'm going to introduce a failure which impacts a lot of tests and turn off traceback info.

I can't show you the failure I introduced but it is systemic because it was a URL which still a valid URL but does not match our snapshot. So it is still a valid fixture which is why it isn't throwing an `ERROR`.

```bash
pytest koala/io/tests/test_datawarehouse.py --tb=no
===================== 13 failed, 4 passed in 2.62 seconds =====================
```

Since there are so many lets just work through them one at a time and stop on the **First Failed**.

```bash
pytest koala/io/tests/test_datawarehouse.py --tb=no -x

========================== 1 failed in 0.68 seconds ===========================
```

This is a pretty good filter, to help chip away at a list of failures but stay focused. If there are no previous failures it just runs all tests within our filter. This is handy to use with `--pdb` to drop into the debugger too.

For completeness I like using the `--last-failed` or `--lf` flag to focus on the most recently introduced failures.

```bash
pytest koala/io/tests/test_datawarehouse.py --tb=no --lf

=================== 13 failed, 4 deselected in 1.97 seconds ===================
```

There you have it. These are the ways that [PyTest][pytest] allows you to filter and focus on tests but I'd guarantee any other testing framework would have an equivalent set of features for inner loop test runs just begging to be discovered in their docs.


## Outer Loop

This is the longest but also the most comprehensive part of the test loop which is why we do it less frequently. We are balancing time costs. 

Knowing you have vastly cheaper options with your inner loop tests, means you can leave these more time expensive tests to run at  lower frequency like coffee breaks, morning tea, lunch time, or overnight on CI.

Part of the reason they are time intensive are:
 - The base volume of tests
 - Combinatorial explosion of testing across versions of python / OS (_See [Tox][tox]_)
 - Slow io: Network / Disk interactions 
 - Unnecessarily rerunning tests
 - Running all tests serially 

The first two are hard to avoid other than cutting support for old platforms. 

The last three can be improved. For example:

```bash
pytest --cache-clear --disable-vcr
============== 3 failed, 167 passed, 5 skipped in 237.10 seconds ==============
# Versus
=================== 104 passed, 71 skipped in 33.75 seconds ===================
```

First off, this shows why snapshot testing is only a proxy as it hid three failures when testing against the real system. This is a **Type II error or a False Negative**. These are dangerous as they lull you into a false sense of security that everything is ok when it isn't.

In this case that service was down and is known to be flaky. Which is why I put the snapshot testing in place.
The fact that service is flaky creates a **Type I error or a False Positive**. Which in a lot of ways are as bad as Type II errors when people do not trust the tests and then stop writing tests.

The goal is to reduce both. The other ~170 tests give me confidence about the rest of the system and I can isolate my mistrust. 

## Outer Loop Speed Tuning

**Parallelisation**: To get our outer loop running faster we can run all tests in parallel rather than sequentially using [`pytest-xdist`][pytestxdist]. This means your tests need to be able to run isolated from each other. Which means all tests are not blocked by a single test and we are limited to available cores. But it means tests that take 30 seconds each are running at the same time and not after each other.

```bash
pytest --cache-clear --disable-vcr -n auto
============== 2 failed, 168 passed, 5 skipped in 56.79 seconds ===============
```

See, I told you some of the tests are flaky. One of them started passing again.

**Caching**

Then simply allowing black and flake8 checks to skip if the source file is unmodified.

```bash
pytest --disable-vcr -n auto
============== 3 failed, 97 passed, 75 skipped in 56.98 seconds ===============
```

Huh... that didn't make much difference. Now the data scientist in me wants to run these 30x each and perform a t-test to actually be thorough... another time.

**Snapshot tests / Test Doubles**

```bash
pytest -n auto
=================== 100 passed, 75 skipped in 34.34 seconds ===================
```

By using Test Doubles we can mock IO bound operations that spend most of the test waiting for the speed of light to travel around the planet to a cloud.

As fast as this may be it is still 100x slower than our Inner Loop/


# Refactoring: Less is More

I was migrating some legacy code and trying to hit a minimum amount of code coverage when I realised:

> I could increase code coverage by testing more code 
>
> OR 
>
> deleting code....

I had already written all of the _Happy Path_ tests and most of the _Sad Paths_ but the number of branches and code paths was pretty complex and seemed like it was going to take weeks until I realised a lot of code was copy pasted.

There was 30x places we copy-pasted very similar code to check how we made requests to an API. So I made it a function and deleted the other 29x instances for the function 1-liner. Neater code! Easier to reason with.

[Refactoring 2e - Martin Fowler](https://martinfowler.com/books/refactoring.html) is a recommended read, even if it is only the first 5 chapters as they are the most critical.

Martin Fowler maintains a [catalog][refactoring] of refactoring patterns and has kindly given them names to make conveying these concepts easier.

If nothing else I'd like you to understand [Extract Function][extract-function] which is what I used above.

This can be applied to:
 - the inside of a loop
 - the inside of an if block
 - inside the `try` block of a `try-except`
 - inside the `except` clause of a `try-except`
 - repeated blocks of code

That block of code can be reused. 

And often I only see what others have copy pasted when I get to this stage of testing and take a step back and look at the module holistically.

Another good reason to get everyone on your team writing tests right?


# Conclusion

1. [**Given-When-Then**](#given-when-then): Every test has three easy to remember steps (and they rhyme!).
1. [**Happy Paths and Sad Paths**](#happy-paths-and-sad-paths): When should it work? How should it break?
1. [**Inner Loop vs Outer Loop**](#inner-loop-vs-outer-loop): Fast Focused testing (milliseconds) and Coffee Break Comprehensive (minutes).
1. [**Refactoring: Less is More**](#refactoring-less-is-more): You could write more tests or you could DRY out the code.

Have fun testing!

# Extensions

1. [Test Doubles](https://en.wikipedia.org/wiki/Test_double)
1. [Effective Snapshot Testing](https://kentcdodds.com/blog/effective-snapshot-testing)
1. [Property Based Testing](https://hypothesis.works/articles/what-is-property-based-testing/)
1. [Fuzzing](https://en.wikipedia.org/wiki/Fuzzing)
1. [Refactoring][refactoring]

# References

## Podcasts

 - [Talk Python To Me][talkpythontome]
 - [Test and Code][testandcode]
 - [Python Bytes][pythonbytes]

## Books

 - [Python Testing with pytest - Brian Okken (Pragmatic Programmer Publishing)](https://pragprog.com/book/bopytest/python-testing-with-pytest)
 - [Refactoring 2e - Marting Fowler][refactoring-book]
 - [Test-Driven Development: By Example - Kent Beck][tdd-kent-beck] 

## Articles

 - [Real Python][realpython] 
     - [Real Python: Packaging a Python Library](https://realpython.com/pypi-publish-python-package/)
     - [Real Python: A guide to Pipenv](https://realpython.com/pipenv-guide/)
     - [Real Python: Automated Testing - Multiple Environments](https://realpython.com/python-testing/#testing-in-multiple-environments)
     - [Real Python: Python Mock Library](https://realpython.com/python-mock-library/)


[pareto]: https://en.wikipedia.org/wiki/Pareto_principle
[refactoring-book]: https://martinfowler.com/books/refactoring.html
[refactoring]: https://refactoring.com/catalog/?filter=tags-basic
[extract-function]: https://refactoring.com/catalog/extractFunction.html
[tdd-kent-beck]: http://www.informit.com/store/test-driven-development-by-example-9780321146533

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
[flake8docstrings]: https://pypi.org/project/flake8-docstrings/
[pytestcov]: https://pytest-cov.readthedocs.io/en/latest/
[coveragepy]: https://coverage.readthedocs.io/en/v4.5.x/
[pytestmock]: https://pypi.org/project/pytest-mock/
[pytestvcr]: https://pypi.org/project/pytest-vcr/
[vcrpy]: https://vcrpy.readthedocs.io/en/latest/index.html
[pytestrandomly]: https://pypi.org/project/pytest-randomly/
[pytestxdist]: https://pypi.org/project/pytest-xdist/

[snapshottest]: https://github.com/syrusakbary/snapshottest
[pytestresponses]: https://github.com/getsentry/pytest-responses
[hypothesis]: https://hypothesis.readthedocs.io/en/latest/
[faker]: https://faker.readthedocs.io/en/latest/index.html

[realpython]: https://realpython.com/
[talkpythontome]: https://talkpython.fm/
[testandcode]: https://testandcode.com/
[pythonbytes]: https://pythonbytes.fm/
