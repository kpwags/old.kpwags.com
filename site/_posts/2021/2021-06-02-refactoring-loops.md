---
layout: post
title: 'Refactoring Loops'
date: 2021-06-02 5:43pm
---

Ever feel like you can never completely get started with a project? That's sometimes how it feels with the fitness tracking app I'm building.

But despite all this, I feel like I'm farther along than I was a month or two ago even without any new functionality added. How is that possible you ask? Well it really comes down to refactoring my code.

<div class="centered-image">
    <img src="/assets/images/posts/code.jpg" alt="Computer Code" />
</div>

## First, a Little Background

I haven't been seriously building apps in React for all that long. The first real app I built was Digital Family Cookbook. I was able to build it thanks to a course from Wes Bos on React & GraphQL. My issue was that I didn't have a firm enough grasp with React and Node.js to really build what I wanted to. While definitely functional, Digital Family Cookbook is a little rough around the edges. Everything works, but it doesn't have the "smooth feel" one would come to expect from an app of its kind. At this point, I have the project on an indefinite hold as I try to decide what to do with it.

## Taking Steps Forward

I wanted this new fitness app to be better. I wanted to make sure I had a better grasp of how everything pieces together to make an app that is much more smooth in action. This is one of the reasons I chose a .NET Core backend. I've been a .NET developer almost exclusively in all my jobs. And with how powerful and versatile .NET Core has become, it felt like a great option. No disrespect to Node, but I just feel more comfortable in the .NET ecosystem.

I've also read a lot more into React as well to give me a better foundation. The only wildcard that I've really thrown in is introducing myself to TypeScript. I think I've gotten a good grasp on it now though. I feel like my knowledge of Javascript has put me in a good place.

## Developing the App

From the beginning, I've felt much better about the architecture of the app. The backend isn't much of an issue as I have good understanding of C# and .NET. I've picked up on the new features of .NET Core pretty easily as well.

I also started a new job at Webstaurant Store back in December. At Webstaurant Store, we have been using .NET Core, React, & TypeScript. I have some great teammates and have been learning a great deal about these frameworks as well as some new tips and tricks with how to improve my code. In 5 short months I've already felt like I've improved with all of these tools tremendously. I've also been trying to read more blogs and other articles from fellow developers to try to get a better idea of how others do things.

This has had its benefits, but it is also a double-edged sword. Looking at my experiences at Webstaurant Store and what I've been reading, I've ended up looking at the code I've written, only to realize that I can make it better. Needless to say, this has put me in a place where I end up in a constant refactoring loop.

> Don't Let Perfect Be the Enemy of Good

I've heard this expression several times, "Don't let perfect be the enemy of good". And it makes sense. Apps will never be perfect. Code will never be perfect. Don't wait to achieve perfection because you'll never end up reaching it. At some point, you have to have to recognize that it's good enough. So far with this project, I haven't exactly followed this advice so far. I've been focusing on trying to make sure that I have as good a foundation to build the app as possible. It's led to two major refactors that have basically caused me to have introduced no new functionality.

### Entity Framework to Dapper

The first thing I ended up re-writing was moving the code away from Entity Framework over to [Dapper](https://github.com/DapperLib/Dapper). This required me adjusting not only the backend C# code, but also writing Stored Procedures to interact with the database. I could've done a lot of it with inline SQL, but I generally feel like stored procedures are the way to go for most calls to the database. I made this switch because I felt like I could get slightly better performance through Dapper and hand-written SQL, and to get myself more familiar with the libraries I would be using at my new job. It might not have been the best reasoning, but I'm happy where things are. I have a database folder with all the creation scripts that should help me build the database quickly if and when it's needed. I do kind of miss the Entity Framework migrations though.

I might be jumping ahead of myself, but I'm toying with using EF6 if I opt to rewrite Digital Family Cookbook in .NET.

### Custom Components to Formik & Material-UI

While switching to Dapper took a chunk of time, it was by no means the biggest. I had been unhappy with how some of the forms were working. I was seeing some of the roughness I experienced with Digital Family Cookbook. Not to the same level, but enough that I decided it would be worth it to look into some form libraries rather than my custom built forms. I settled on [Formik](https://formik.org/). The conversion was going so well, I decided I'd also look into a full UI framework rather than rolling my own. "In for a penny, in for a pound" the expression goes. I decided to switch to using the [Material-UI Framework](https://material-ui.com/). I ended up spending several weeks converting all the pages I had built to use Material-UI rather than the homecooked components. Thankfully I had only build out the settings pages so there wasn't a ton I had to redo, but you can see where this refactoring loop comes into play.

## Onward

While it has certainly been less-than-ideal to be sort of running in place in terms of functionality, the changes that I made turned out well. I feel more confident in this app's foundation and the ability to add the new functionality on top of it.

Are there still things I need to improve? Of course there are...there always are. I just have to keep reminding myself that I can always come back to it later if it's working well. Just because it's "good enough", doesn't mean I shouldn't try to continue to make it better. It just means that I can move onto what's next.
