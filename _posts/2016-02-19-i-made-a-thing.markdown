---
layout: post
title:  "I Made A Thing!"
date:   2016-02-19 21:07:00
---

So I was in a "I want to develop something mood" recently, but didn't feel like digging into a big project, so I came up with an idea for a new project.  

My wife and I, more often than I would care to admit, fail to come to a consensus on where we would like to go to eat should it not be a night we're cooking.  I decided I would put a stop to this, or at least create a tool that would help put a stop to this.  I created a tool that randomly chose where we went to eat.  I broke local restaurants into 3 categories: Order Out, Fast Food & Dine In.  I then broke them out by type of food such as Mexican, Italian, etc.  I put all of the recipes into a JSON file and with a tool to choose the filters and then a click of a button, it would tell us where we're going to get food.  It worked great!

Thinking about it a little more, I decided that I'd try my hand at something a little more universal that other people can use.  A JSON file is all nice for what Lauren and I need, but the list of restaurants probably isn't all that useful for someone living in New York or California.  In the end, I decided to use Google's Places API to randomly choose a restaurant for anyone.  

<div class="image"><img src="/assets/images/projects/where-do-you-want-to-eat.jpg" alt="Where Do You Want To Eat" /></div>

All the person would need to do would be to enter their zip code and boom, a restaurant would be chosen.  It worked out pretty well.  But then I realized that it didn't really give much flexibility to the result.  I then decided to give the user the option to enter in a custom query to randomly choose from.  In the first version of it, I defaulted the query to "restaurant" which works well enough, but it's not the most specific.  So I added a new textbox for users to enter their custom query to replace the default.  So now, it's even possible for users to randomly decide which shoe store to go to.  Not quite the intention of the tool, but hey, it still works.

The next improvement I made was to add the ability for users to choose the distance for which to look.  Again, this is more to make it a little bit more granular so people can choose how far away they're willing to go.

I even decided to take it one step further and use Google's API to help geolocate where the person using the site is.  The site now asks the user to share his/her location and then extrapolates the zip code.  I figured this is one less step the user has to do and could be useful if the person is out of their normal area and doesn't know what zip code they're in.  I don't know about the rest of you, but I don't know many zip codes other than the ones I use on a regular basis.

In the end, it was a pretty fun project to work on.  Simple, yet satisfying.  You can check it out at <a href="http://wheredoyouwanttoeat.xyz" target="_blank" rel="noopener">wheredoyouwanttoeat.xyz</a> and view the source on <a href="https://github.com/kpwags/Where-Do-You-Want-To-Eat" target="_blank" rel="noopener">GitHub</a>