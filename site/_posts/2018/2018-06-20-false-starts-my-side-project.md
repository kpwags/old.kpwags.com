---
layout: post
title: 'False Starts & My Side Project'
date: 2018-06-20 10:00 am
---

I think I mentioned it before, but I’ve been working on a new side project. I figured it was a good way to teach myself React and Node.js, much like OpenVoter taught me PHP. I’ve been wanting to familiarize myself with some more modern frameworks, and I feel like Node and React are good places to start.

The project I’ve been working on is called Digital Family Cookbook. It’s basically a cookbook web application meant for families. I know my wife and I have plenty of recipes, and it can often be a challenge to figure out where they’re saved. I’ve saved a bunch within Google Drive, but I also have them in Evernote, and several other places. I figure a good project would be to make a website that I can centralize them in so if one of us needs to make dinner, we don’t have to remember where the recipe is or ask where it is.

I’ve gotten plenty of false starts on this one. I originally wrote it in PHP 3+ years ago. I re-wrote it using Ruby on Rails shortly after and had it sort of up and running. That ended when I started having issues with my Rackspace server and realized that it was cheaper to host the sites I cared about on Amazon Web Services.

Shortly after that, my wife and I bought a house, so a lot of my time and resources went into housework (it never ends). But now that I have some time to breathe, I figured I’d jump back in and rebuild this as a learning project.

## The First Start

I originally started the project to be a full fledged web application allowing for people to sign up for accounts and host it all for everyone. I decided to create 2 separate projects. One for the front end, and then one for the API on the back end. I figure I’d try to be ambitious and sort of plan ahead for potential mobile apps and writing the backend once for an API would probably make things easier down the road.

I was making a fair amount of progress on it. Learning some of the ins and outs of how React worked, as well as some of the intricacies of Node.js and the newer functionalities of JavaScript/ES6. I even had a rudimentary admin console all set up for administrators.

In the end though, I decided that I didn’t really have the time or desire to run a website publicly. I figured it’d be too time-consuming to make sure that spammers, scammers, and other bad actors weren’t abusing the application. My ambition for this project might’ve been a little high, but I realized that to handle something like this was a little too much for my tastes at the moment.

## Starting Over

I still liked the idea of the app, but figured I’d go with a scaled down version. I’d basically make it more along the lines of a downloadable CMS rather than a centrally run site. I’d open source it much like OpenVoter, and just let others download it and run it on their own server if they want. I have no idea if anyone will, but figure why not? It solves a problem for me, maybe it could solve a problem for someone else.

Fortunately, I was able to use what I already wrote as a guide for the new version of the project. I’m still going with 2 projects, the web portion, and then the API. My ambitions might be scaled back, but they aren’t so scaled back as to not think I won’t want to write a mobile application for the cookbook.

My initial version of the new app used Bootstrap for the UI, but after listening to several software development podcasts talking about the virtues of CSS Grid and other more modern CSS tools, I decided that I might as well go with my own custom CSS code. I figure it can’t hurt, the few tutorials I did on CSS Grid showed me how powerful it can be and I already have a few ideas on how I want to integrate it.

That’s basically where I am now. I have the skeleton of the app laid out and now I’m writing more code and making progress. For the first time in a while, I actually feel good with where I’m at with it. There’s still plenty to do, but now I don’t necessarily feel like I’m flailing around trying to find solid ground to start off on.

I’ll try to write more updates on the journey I’m taking writing this app as it progresses towards completion.
