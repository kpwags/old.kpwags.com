---
layout: post
title: 'Switching Platforms'
date: 2021-04-27 6:28pm
---

I've been using Jekyll to run this blog for the better part of the last six years. But recently, I've been giving serious consideration to switching to Gatsby or Next.js.

I have several reasons for making the move away from Jekyll. Some is pure personal preference, some involves the technology used, and part of it is to learn something new.

## Missing Features & Personal Preference

There are several features I've been wanting to add to my blog. The biggest one is probably search. I've been looking into adding search, and while possible, doesn't seem as easy as I would hope it to be. Part of this also comes down to the fact the Jekyll is built on Ruby, which is not a language I know all that well. I've been able to keep this going, but it's still a hill to climb. This is the personal preference part of things. I'm a .NET & Javascript developer primarily, and that's where my comfort zone is. It's not a knock on Ruby, just not something I want to spend a lot of time delving into.

## The Tech Stack

I also wanted to move to a stack I better understood. I've been working with React for a couple years on the side, and now I'm using it professionally as well. I thought it would be beneficial and easier to work with if I had a better understanding of the tools & language used.

Another thing I was looking into improving was my build/deployment process. I host my blog on AWS using their S3 storage. The upside is that hosting is dirt cheap for me (granted there's very little processing power for my site, nor do I have many visitors). The downside is that there's a lot of caching involved so any changes can take a day or so to be reflected. There are ways around this of course, but I'm a little cost-conscious and am worried about racking up too large a bill. This can also cause any embarassing bugs or typos (or anything else really) to be visible for much longer than I'd like.

## Making the Switch

<div class="centered-image">
    <img src="/assets/images/posts/nextjs.svg" alt="Next.js Logo" />
</div>

I've given it a fair amount of thought and right now I believe I will be starting the design and implementation of my blog using Next.js. I used Next.js with [Wes Bos' Advanced React & GraphQL Course](https://advancedreact.com/) & [Digital Family Cookbook](https://github.com/kpwags/digitalfamilycookbook) so I have some familiarity with it over Gatsby. But while I have some familiarity with it, it wasn't heavily used in either project so I figure this will also be a learning project.

## The Process

I plan on building this out in the open and will be starting with a [brand new public repository on GitHub](https://github.com/kpwags/new.kpwags.com). I'm going to build it using feature branches (like I've been doing with my fitness tracker) with issues created for most work. Unlike my current blog where I mostly just work off of the main branch, I'll be doing this one the "proper" way. I'm even planning on keeping at it with future posts.

I'm also hoping to write about how things are going and the progress I'm making as well as why I've chosen doing things the way I do. I've also been toying with streaming some of the development on [Twitch](https://www.twitch.tv/kpwags).

There's no rush to build this, so while I'm going to try to devote some time on it regularly, I also want to continue to work on my fitness tracker. So keep checking back as I'm sure there will be more posts between now and when I officially make the switch.
