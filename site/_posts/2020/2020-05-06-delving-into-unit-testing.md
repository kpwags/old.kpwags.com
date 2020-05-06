---
layout: post
title: 'Delving into Unit Testing'
date: 2020-05-06 6:48pm
---

In all of my professional experience, I've never worked for a company that did any unit testing and because of that, I haven't really done any either. I knew what unit testing is and the general concepts behind it, but never got around to actually building or implementing any tests. I decided that for Digital Family Cookbook, that would change.

I started my testing using [Jest](https://jestjs.io/) & [Enzyme](https://enzymejs.github.io/enzyme/) since that's what Wes Bos used for his React/GraphQL tutorials that got me started. I got through a few tests, but never really gained the confidence that my tests were either useful or actually working. The biggest thing I had to wrap my head around was mocking the data and the calls to the backend. I struggled a bit trying to figure out how to best handle pulling and posting data. Needless to say, the struggle didn't exactly help my desire to keep going.

As luck would have it, I started following [Kent Dodds](https://kentcdodds.com) a while back on Twitter and stumbled into a few of his tweets talking about [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) and decided to look into it. After reading the documentation and going through some tutorials and Stack Overflow posts, I decided to ditch Enzyme and try it out to see if I would have any better luck. It turns out this was the breakthrough I was looking for. The other library I found thanks to some digging was the [Mock Apollo Client](https://github.com/mike-gibson/mock-apollo-client) which helped me understand and figure out how to handle mapping my mocked data for the tests.

There's been a lot of trial and error. I've had a lot of tests fail when I figured they should succeed. I've had some pass when I figured they would fail...and then investigated into why they succeeded. Through this, I was able to gain confidence that the tests are working, and doing what I expect them to do. I also know they're working because when I intentionally "break" components, the tests quickly let me know. That's another thing I've learned throughout all of this. Make your tests fail too so you can have the confidence that they'll fail when you break something unintentionally.

I ended up creating a list of components I wanted to test. I chose the components that made the most sense to make sure things continue to work. Components like logging in, signing up, the various CRUD calls to the database, etc. I'm now probably about halfway through adding the unit tests to Digital Family Cookbook. In retrospect, I should probably have done this as I went along. While I fully understand and appreciate the need for unit testing, compared to writing code and building new features, it's rather boring. Spending all of this time writing and building the tests occasionally makes me want to just procrastinate and do something else. Had I written the tests as I went along, then the monotony might not have seemed as bad. I definitely will do that for my next project.

In the end, I'm definitely glad I'm learning this. It will only help my development of Digital Family Cookbook and any future projects I work on. It also can't help when it comes to my professional career.

Here's a list of articles, resources and other links that have helped me, so take a look, maybe they'll help you too!

-   [Kent C. Dodds on Twitter](https://twitter.com/kentcdodds/) (Seriously, follow him, he's often insightful in many ways)
-   [Common mistakes with React Testing Library](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)
-   [Fix the "not wrapped in act(...)" warning](https://kentcdodds.com/blog/fix-the-not-wrapped-in-act-warning)
-   [Testing Apollo React Hooks](https://medium.com/javascript-in-plain-english/testing-apollo-react-hooks-a7698067b8a0)
-   [I tested a React app with Jest, Enzyme, Testing Library and Cypress. Here are the differences.](https://medium.com/javascript-in-plain-english/i-tested-a-react-app-with-jest-testing-library-and-cypress-here-are-the-differences-3192eae03850)
