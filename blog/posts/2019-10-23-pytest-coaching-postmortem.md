---
title:  "PyTest Coaching Post-Mortem: How to Win Friends and Influence Testing Culture"
date:   2019-10-23-22 
image: /images/blog-header.jpg
description: "A post-mortem on delivering training and coaching the team to apply testing practices."
categories: dev
---

<div align=center>
<img
  :src="$withBase('/images/blog-header.jpg')"
  alt="Artistic close-up photo of my RGB coloured mechanical keyboard"
/>
</div>


# {{$page.title}}

<span style="color: #999;">{{$page.readingTime.text}}...</span>

Have you been fighting the good fight to instill a testing culture in your workplace and team? Have you struggled to get buy-in and adoption?

Well this is the story of how it took a 3 hour workshop with 4 engineers and about 8 weeks background support work but we tripled the unique contributors to our core internal library.


<div align=center>
<img
  :src="$withBase('/images/contributors-pytest.png')"
  alt="Line graph with two series about the release history of our library. Total unique contributors and cumulative number of releases. Annotation when pytest workshop happended in September."
/>
</div>

What I had expected to be a largely technical exercise actually took me down the route of reading about psychology and the [Transtheoretical Model][ttm-wiki] about the five stages of change that people go through when forming new behaviours.

Which in hindsight makes sense. Simon Sinek in his book [Leaders Eat Last][sinek-leaders] talks about how the sum of behaviours is a culture. If I'm trying to affect a culture shift, that means changing a lot of behaviours and guiding my 4 colleagues through these five stages. 


# Context 

For a bit of background, I have written about some technical depth of our testing stack:

 - [Advanced Python Testing](/posts/2019-06-18-Advanced-python-testing.html)

As well as these four guiding principles to get your feet wet with testing practices:

 - [From Zero To Test](/posts/2019-07-22-from-zero-to-test.html)
 - [Test and Code Podcast - Episode #86: Teaching Testing Best Practices][tnc-86]

These four principles served as the basis for the workshop that was presented.

# Barriers Research

What prompted the workshop was me getting frustrated that the team wasn't learning it in their own time. Over time I've realised that frustration is a symptom that **I am the one with poor expectations**.

So I went and spoke to everyone on the team individually. In fact I sent them an instant message so no-one could overhear them, they could take their time to answer, and they all gave very honest answers. After 2 I saw a theme but I asked *everyone*.  I can't emphasise this enough, whilst there was overlap, asking everyone meant I got the full spectrum of issues and everyone had something different as much as they had something in common.

The question I asked was *“Do you feel like self directed learning has improved? If not what do you think are the barriers?”*

The business motivation is that as we become more proficient, we are able to do more with less people, since we weren’t getting more head count anytime soon.

I’ll break them into a few themes and phrase them in the first person to help you hear their voices:

**Roadmaps / Syllabus**

-	I don't know what I don't know
    -	It is hard to name or list the things you don’t know, in order to generate that list of things to study
-	I do not have a roadmap of what I should know
    -	Even if I do have a list of what to learn how do I prioritise what to learn first?
-	There are a lot opaque terms flying around
    -	I do not know *what is relevant* to me
    -	I do not know *why* we need it.

**Resources / Time Allocation**

-	I do not have starter reference materials
    -	Everyone learns differently though, so providing the same starter materials can be a wasteful activity
-	I do not have time to seek training materials
-	If I do have time to seek training materials
    -	Sometimes there are too many resources -> it is overwhelming -> I give up
-	I do not have time to train/self-study using those materials in business hours

**Prioritisation**

-	pre-emptive self-study is not seen as a priority. 
    -	Eg learning about databricks when there is not an immediate need next week.
-	Sprints focus on short term productivity and lose sight of long term development.
    -	I do not appear *short term productive* even if it has *long term benefits*.

**Stress / Fatigue / Hurdles**

-	The first hurdle is a lot of stress
    -	Approaching a new topic has an anxiety of anticipation of the unknown
    -	Every new topic, this stress is there, and it is why I need space in between topics
-	Am I already training as fast as I can?
    -	Even with infinite time it has a limit and is exhausting
    -	I may already be doing my best and there is no more juice left to squeeze
-	Expectations of pace are creating stress, which makes the process slower
    -	I liken this to a CPU overheating and throttling itself
    -	Am I creating some of this pace expectation on myself? Am I creating my own stress?

**Invisible Feedback**

-	How do we (leadership) know the training and study is working? What does that look like?
    -	Visibility of active study may be in private so if it happens it is hard to see
    - Knowing how to do something proficiently looks like the absence of the "asking questions pain points".
        -	So it is hard to see the absence.
        -	Are the pain point questions changing to different topics?
        -	Are the pain point questions getting more complex as the simple things become proficient?
-	Should we more visibly celebrate wins?



# Workshop

## Timeline 

*Set expectations*

So the "workshop" preparation started 2 sprints in advance. I sent out an email to the team explaining the steps of what we would do and when we would do it. The upcoming sprint we had already committed work so it was to be in the following sprint.

*The workshop*

We coordinated a day that would be the least disruptive to sit down for 3 hours together, which turned out to be 1-4pm on a Friday afternoon. We did 3x 50 minute blocks with 10 minute breaks. Everyone had their laptops and we wouldn't move on until everyone had their dev environment setup or managed to successfully complete each step. We have remote workers so everyone has video conferencing tools open on their laptops anyhow. So when anyone had an issue we got them to screen share on the call and I tried to get the team to guess at helping each other fix it or see what to try next.

*The homework*

The following Monday and Tuesday were the "homework" days. These were during office hours but everyone was working on the same exercises at the same time, so if they ran into issues they could help each other. So this accidentally became a team bonding activity too.

*Extra credit*

That's where it was supposed to end the toy examples and we get back to our planned sprint work. However some had finished the toy example and were onto merging real contributions to our core library so we took the extra day and got code coverage up from 75% to 84% AND reduced the running time of the test suite from 1.5 minutes to 12 seconds!

*Return on Investment*

<div align=center>
<img
  :src="$withBase('/images/contributors-pytest.png')"
  alt="Line graph with two series about the release history of our library. Total unique contributors and cumulative number of releases. Annotation when pytest workshop happended in September."
/>
</div>

The next 3 sprints I needed help fleshing out a big chunk of work in our core library which was well defined and could be done in parallel. It was lifting code from our old monolith to the new library AND adding tests.

The new CI gatekeeping wouldn't allow the contributions without appropriate test coverage.

During these 3 sprints we held Tuesday and Thursday 1 hour code review sessions. Not everyone presented but just who needed help next or was close to getting their PR merged.

We managed to triple the unique contributors to our library, which de-risked me and my US counterpart as being the only ones that understood the library. It also meant we were able to hit a tight timeline to punch out a lot of new contributions.

## The Task

The task in the workshop was simple enough and well structured.

**First hour - Dev Environment**

 - We setup the dev environment.... this took the first hour.

**Second hour - Using CI**

 - We looked at the existing tests and deleted one of the test files.
 - Created a new branch each and committed the change.
 - Everyone opened up a Pull Request (PR) which triggered the CI test system. 
 - It failed but we each looked at the test output and the code coverage report.
 - We added a *Happy Path* test, committed it and pushed the change.
 - We looked at the updated CI output and Code Coverage results.
 - This took up to the second hour.

**Third Hour - Testing locally**

 - We then ran the tests locally and looked at the code coverage report locally.
 - We added a *Sad Path* test and looked at the code coverage report and explained what branch coverage is versus line coverage. 
 - From here we looked at the various ways of driving pytest from the command line.
 - We also had open ended discussions about "what is a good test?"
 
 **The Homework**

 The homework task was to get test coverage passing again and if they got stuck they could use git and checkout the original test file from `master` to "check the back of the book".

 What was great about this task, was that this particular python class, had 98% code coverage and for the life of me I couldn't figure out how to get that last branching condition covered.

 One of my colleagues got this test file to 100% and taught me a lot about the differences between `__get__` and `__getattr__` dunder methods as she did a deep dive to figure it out. The benefit of being surrounded by perfectionists.

 From there I showed her snapshot testing with [VCRpy][vcrpy] and that is where we resolved some tests that still reached out to network resources everytime the tests ran. Which is what shaved a minute off our test times.

## Code Reviews

<iframe width="560" height="315" src="https://www.youtube.com/embed/a9_0UUUNt-Y" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

I shared this video on [Code Review Best Practices - Trisha Gee][codereview] with the team as (in my opinion) it is the canonical explanation of how code reviews can have different purposes.

 - Gate Keeping
 - Draft Proposals (early feedback)
 - Educational presentations (the reviewers are actually learners).

This was really important to set a tone and a psychologically safe space for the team to present half finished work and feel safe and not judged.

For the simpler questions I encouraged others to step up and answer even if I knew how to answer it.

For questions that stumped me, I made it clear I hadn't seen it before but let's all solve it together and proceed to awkwardly google things and ask each other to "Got to line 98, there is a typo".

No one was trying to beat their chest and be the smartest person in the room.

We checked our ego's at the door and worked as a team.


# Coaching Psychology 

Now that I have covered the key events, I want to layer on some of the Coaching Psychology theory to this narrative.

## Trans-Theoretical Model (TTM)



# Results

As I have mentioned a few times, we tripled the number of unique contributors to our core library. We smashed out a block of work and everyone has made meaningful contributions and tests on code that is now in production. Not just toy examples but meaningful contributions.

<div align=center>
<img
  :src="$withBase('/images/contributors-pytest.png')"
  alt="Line graph with two series about the release history of our library. Total unique contributors and cumulative number of releases. Annotation when pytest workshop happended in September."
/>
</div>

You also see that we had multiple releases in the same day sometimes. This sort of cadence was previously unheard of!

The team has come to embrace the sense of security the test automation provides as it goes green reinforcing that trust and red are opportunities to catch defects before they hit customer facing systems.

We have caught many bugs where *"It worked on my computer"* but not on CI because an installed dependency wasn't added to the `Pipfile` for example.

We have a process for seeding new learning across the team but also a mechanism to reinforce those learnings and keep each other accountable.

# Conclusion

Coaching and technical leadership is a really rewarding challenge that I hadn't quite expected in my career. It also requires a lot of long range thinking as the time it takes to change people's behaviours is measured in weeks and months. I have become too used to computers doing what I want in seconds and minutes. 

It's also been an interesting dive into a tangent field of study of Coaching Psychology.

As always....

Have fun testing!

# References

## Psychology

 - [Transtheoretical Model][ttm-wiki]

## Podcasts

 - [Manager Tools: Basics][managertools-basics]

## Books

 - [Leaders Eat Last - Simon Sinek][sinek-leaders]

[ttm-wiki]: https://en.wikipedia.org/wiki/Transtheoretical_model
[sinek-leaders]: https://www.amazon.com.au/Leaders-Eat-Last-Together-Others/dp/1543614620
[tnc-86]: https://testandcode.com/86
[codereviews]: https://www.youtube.com/watch?v=a9_0UUUNt-Y
[managertools-basics]: https://www.manager-tools.com/manager-tools-basics

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
