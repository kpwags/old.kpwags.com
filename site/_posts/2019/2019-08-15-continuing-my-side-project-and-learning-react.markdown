---
layout: post
title: 'Continuing My Side Project & Learning React'
date: 2019-08-15 10:00 am
---

Lately, I’ve been making steady progress on my side project, which I’m currently calling _Digital Family Cookbook_. I’m making it as a content management system for cooking recipes. As I’ve mentioned previously, I’m writing it using Node.js, React, & GraphQL. It’s been quite a learning curve, but I’m definitely glad I’ve been working on it. The tools are pretty cool and easy-ish to use once you get used to the syntax and some of the idiosyncrasies of React and JSX.

## It’s different from what I’m used to

Most of what I’ve written in the past has been Javascript interacting with a server running PHP or .NET, so I’m generally used to the way they work and run. I think the biggest thing that I’ve had to remember is that Node is just javascript and it runs synchronously so I have to be cognizant of that. I’m generally used to my server code running asynchronously and not having to worry as much about race conditions. Getting data from a SQL server in let’s say .NET will run the query and not move on until the query is complete. With Node, I have to make sure I don’t move on before the data fetch is complete. In ES5, this generally meant callback hell. Thankfully with promises, combined with async/await in ES6, this has become a little easier to manage, but it did have me confused for a little bit not thinking.

### The “Gotcha” Moment

The perfect example of having to remember this difference was with what I’m currently working on. The feature I’m currently working on is the form to create recipes. I managed to get the form working, I got the data sent to the server, the recipe was created, but none of the directions or ingredients were attached to the recipe. I looked in the database and the directions were there, as were the ingredients, but the recipe had no idea they existed. I thought maybe the server wasn’t getting the data, but a console.log quickly showed me it was. What I failed to take into account was that the forEach function on the directions and ingredients array was not being awaited like I thought it was.

I wrote the code to go through each ingredient and direction, add it to the database, and add its ID to an array. Then in the create recipe mutation, add the connections. Because it wasn’t being awaited, the arrays didn’t get populated by the time it was running the create recipe mutation so no link was ever created…oops!

A quick change corrected that problem and all of a sudden, the form worked as expected.

<!-- prettier-ignore-start -->
{% highlight javascript %}
const directionCreations = formValues.directions.map(async (d) => {
    const direction = await ctx.db.mutation.createDirection(
        {
            data: {
                direction: d.direction,
                sortOrder: d.sortOrder,
            },
        },
        ‘{ id }’,
    );

    return direction;
});

const directions = await Promise.all(directionCreations);

{% endhighlight %}
<!-- prettier-ignore-end -->

In the end, it was a pretty easy mistake to make, but it’s one I’m going to remember and learn from.

## Moving Forward

I still have quite a bit of work to do on the project, but it’s nice to see some real progress on what I’m working on. I’m definitely enjoying the learning process and am excited to see some of my ideas come to life. I could have built this in a language like PHP, .NET or something I’m more familiar with and be done more quickly, but seeing the power of modern Javascript, GraphQL and Node.js, I’m quite happy with my technology decision. There’s so much to learn, and so much more room to grow.
