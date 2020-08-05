---
layout: post
title: 'So I Finally Finished A Side Project'
date: 2020-07-05 2:25pm
---

I’ve often seen a joke going around dev circles talking about how developers have tons of half-finished side projects lying around. And as much as it pains me to say, I’m one of them. But now I can say that that pile has decreased by one.

_Edit: Due to hosting costs on Azure, I'm currently looking for a less expensive option and will update this post if/when I find an alternative_

## Where Do You Want to Eat?

Ever have a back-and-forth with friends or your better half about where you want to go to eat? Well, I built a little web app so you can use that to make your decision. Now, you can let a web app tell you where to go so no one can be unhappy with each other for the decision! (Be angry at...wait a minute...please don’t be mad at me).

<!-- [Where Do You Want to Eat?](https://www.wheredoyouwanttoeat.xyz) -->

<div class="centered-image"><img src="/assets/images/posts/2020-07-05-so-i-finally-finished-a-side-project/wheredoyouwanttoeat2.jpg" alt="Screen shot of the new Where Do You Want to Eat" class="shadowed" /></div>

## Where This Started

I had built this a while back to be a little Javascript app tying into Google’s Geolocation API. I called it “Where Do You Want to Eat” It was simple. You typed in a zip code (the site did try to get your zip code using Google’s API), specified a range with optional keywords, and it randomly chose a restaurant. I ended up sunsetting it down after Google ended up changing how they charge for use of their API. I wasn’t mad of course, they let me use it for free for a while. It didn’t hurt that my little toy was hardly used. It also didn’t always provide the best results. The range was a radius, and you’d be surprised how close some places are that seem farther away. The final nail so to speak was that the results were hard to fine-tune. All too often restaurants were returned that didn’t seem to match the keywords as much as you’d want.

<div class="centered-image"><img src="/assets/images/projects/where-do-you-want-to-eat.jpg" alt="Screen shot of the original Where Do You Want to Eat" class="shadowed" /></div>

In the end, it was a cool little project. It might not have turned into anything, but I learned a bit and that’s what matters.

## From the Scrap Heap

I’ve been developing in .NET since I graduated from Drexel in 2007, but I realized earlier this year that I haven’t really explored everything going on in .NET Core. Over the course of the year, especially during this pandemic, I’ve been catching up on what’s been introduced in .NET Core.

I decided to use this time to bring back _Where Do You Want to Eat_ but with a slightly different premise. Instead of relying on a geolocation API, I decided that I would build it to support user accounts where the users would enter in all the restaurants themselves. I figured it would improve the results if users put in their own restaurants. Restaurant discovery would take a hit as it could never return a restaurant not in your list, but I felt like that was a reasonable tradeoff. I’d also let the user assign tags to each restaurant so that during the random selection, they could narrow down the results a little (like if they knew they weren’t in the mood for say Sushi).

## The Technology

I decided to use ASP.NET Core MVC as the base technology. I had used ASP.NET MVC in previous jobs and projects, and it seemed the best foundation to start for this project. For the data modeling side of things, I used Microsoft’s Entity Framework which made setting up the data layer a breeze. The template that comes with .NET Core 3.1 also included Bootstrap for the UI framework so I decided to stick with that. It did make building the UI easy by having the CSS formatting all set up, which I suppose is the point.

The final thing I did was get myself familiar with the .NET Unit Testing tools. Despite all my experience in the .NET Framework, I’ve never done any unit testing. My first foray into unit testing was with [Jest and the React Testing Library for another side project](https://kpwags.com/2020/05/06/delving-into-unit-testing.html). I ended up using [xUnit](https://xunit.net/) and [Moq](https://github.com/moq/moq4) to do the heavy lifting. I had to get my head around how they handled the mock data, but once I got that down, setting up the tests were pretty easy. The experience I had in the Node.js and React world definitely came in handy to know what I wanted to test and how to go about laying the tests themselves out.

## Hosting

From the start, I knew I wanted to use Microsoft Azure for hosting. I used Amazon Web Services for most of my projects, but decided I’d give Azure at try to see how easy it is to use. Since I built the site in .NET Core, it only made sense. I managed to get it up and running relatively easily thanks to several tutorials I found online. I’m a little concerned on the cost factor, so I’m going to have to see after a month or two what it costs me and if I’m going to have to find a different hosting platform. I’m not really sure how to monetize it outside of ads, and depending on the cost, I’m not sure they’d generate enough to compensate. I don’t mind paying to host it of course, and I’m hoping it won’t end up costing too much since it’s probably not going to get a lot of usage and won’t need a lot of data processing. If the costs are too high, I’ll have to look into some alternatives.

I found that it was a fun little project to build, and a good learning experience. I do find it kind of odd to release it during a pandemic where we probably shouldn’t be going out to eat, but for now it can still be used for takeout. So please feel free to check it out, test it out, and let me know what you think!

<!-- [Where Do You Want to Eat?](https://www.wheredoyouwanttoeat.xyz) -->
