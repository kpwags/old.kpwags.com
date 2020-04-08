---
layout: post
title: "I'm Now a React Hooks Convert"
date: 2020-04-08 9:55am
---

I’ve often joked that the recipe project I’ve been working on is my “white whale”. I have in the past thrown everything out only to start over. I first built it in Ruby on Rails, but it was buggy and my limited knowledge of Rails made it a little hard to debug and figure out exactly what was wrong. I opted to rebuild it in PHP since I was quite familiar with PHP after building OpenVoter. I decided then that I wanted to start over to teach myself Node.js...well you get the idea.

My latest go at it has been React with Node.js and GraphQL. This time, things are going better. I’m currently pretty far along with it and have some things to clean up, some bugs to fix, and unit tests to write.

I mention the whole restarting the project because I’ve spent the last week or two going through the code and converting everything from React class components to functional components and introducing React Hooks to the code. This has at times felt like I’ve started over, though with a little less work.

I use the [Apollo](https://www.apollographql.com/docs/graphql-tools/) library in my project to handle the GraphQL queries for data. When I originally built the app, Hooks weren’t yet a thing and I ended up building everything using class components. Hooks were introduced, but I didn’t pay all that much attention to it as I wanted to finish the app and figured I could loop back later.

That changed when I was trying to solve a GraphQL Mutation bug I was having and looking over the Apollo documentation. They changed their docs to focus on hooks and I was immediately drawn to how much cleaner the code looked. I decided to upgrade the version of React (and just about every other library) I was using and started to convert a few small components over to hooks to see how they worked. Well, let’s just say I was hooked (ok, that was a bad pun, sorry!). I didn’t end up converting everything over to hooks, but I stopped using class components for all new functionality.

To give you an idea how much cleaner things looked, compare

```jsx
<Query query={ALL_CATEGORIES_QUERY}>
    {({ data, error, loading }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error: {error.message}</p>;
        return (
            <ul className="child-list">
                {data.categories.length > 0 ? (
                    data.categories.map((category) => (
                        <li key={category.id}>
                            <Link href={`/category?id=${category.id}`}>
                                <a>{category.name}</a>
                            </Link>
                        </li>
                    ))
                ) : (
                    <li>
                        <em>No Categories Defined</em>
                    </li>
                )}
            </ul>
        );
    }}
</Query>
```

to

```jsx
const { data, loading, error } = useQuery(ALL_CATEGORIES_QUERY);

if (loading) return <li />;
if (error) return <></>;

return (
    <ul className="child-list">
        {data.categories.length > 0 ? (
            data.categories.map((category) => (
                <li key={category.id}>
                    <Link href={`/category?id=${category.id}`}>
                        <a>{category.name}</a>
                    </Link>
                </li>
            ))
        ) : (
            <li>
                <em>No Categories Defined</em>
            </li>
        )}
    </ul>
);
```

To me, the new code looks so much better, and easier to understand than the old. After working with unit tests and other clean-up tasks, I decided to spend some time to convert all of my components over to the hooks and am really glad I did. The time spent was worth it, and now I feel like I’m in better shape to finally finish up this project. Stay tuned!
