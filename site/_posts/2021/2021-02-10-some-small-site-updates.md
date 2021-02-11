---
layout: post_with_code
title: 'Some Small Site Updates'
date: 2021-02-10 6:49pm
---

Over the course of the last couple weeks, I've made some small improvements to my site. None of them are particularly huge, but I like the end result.

## Adjusted the Header

I decided to change up the header a little bit. The header isn't horribly different from before, but now I decided to make it span the full width of the browser window. I also added a link to the RSS feed since I feel that's an important feature in today's web. It might have fallen out of favor in some circles, but I still love it. I also moved the light/dark mode switcher from the footer to the header and made it a little more descriptive with a sun and moon icon.

## Adjusted the Footer

I also decided to adjust the footer, re-laying out the links and allowing it to fill the full browser window.

## Removed SASS

SASS came pre-bundled with Jekyll so when I built the original version of my blog, it made sense to just go with it. Since then, CSS has gotten official variable support as well as a whole bunch of other nice features, so I decided to swap it out with plain old CSS. The conversion wasn't too bad and I feel like I was able to clean up the CSS some in the process, particularly with the light and dark mode.

CSS variables just make applying a light/dark theme so simple

```css
:root {
    --font-family: 'Maven Pro', 'Segoe UI', Helvetica, Arial, sans-serif;
    --background: #ededed;
    --background-image: url('/assets/images/background.png');
    --font-color: #444444;
    --blue-medium: rgb(6, 44, 156);
    --blue: hsl(215.9, 100%, 40%);
    --box-shadow: 0 12px 24px 0 hsla(0, 0%, 0%, 0.2);
    --dark-grey: hsl(0, 0%, 40%);
    --review-border-color: var(--blue);
    --svg-display-lightmode: inline;
    --svg-display-darkmode: none;
}

@media (prefers-color-scheme: dark) {
    :root {
        --background: hsl(0, 0%, 13.3%);
        --background-image: none;
        --font-color: hsl(0, 0%, 93.7%);
        --blue-medium: hsl(209.1, 78.5%, 43.7%);
        --blue: hsl(199, 98.3%, 45.9%);
        --review-border-color: rgb(239, 239, 239);
        --svg-display-lightmode: none;
        --svg-display-darkmode: inline;
    }
}
```

## Changed the Light/Dark Mode Toggle

Besides the switch itself, I also changed how I handle overriding the system's theme. The CSS variables definitely helped with this, although I have an item on my to-do list to see if I can't improve this a little more. If you're a user who overrides your system theme, there might be a momentary flash of the system theme before your override takes effect. It's still an option though so I feel like that's a plus.

## Started Working with SVGs

SVGs were something that I only recently started looking at. I decided to go with SVGs for both the theme switch and the RSS icon at the top. Learning [Inkscape](https://inkscape.org/) as well as how to integrate it into the page was a fun challenge.

## My 'Likes' Page

I used to run weekly posts with links I've liked. I've decided to take a page from [Dave Rupert](https://daverupert.com/) and simply add a page that lists recent articles, podcasts, or anything else that catches my eye. I liked his idea of using his Feedbin starred feed, but felt like I might as well make it manually as I find things elsewhere that I'd want to include. You can veiw this on my [Likes page](https://kpwags.com/likes).

## Updated Bookshelf & Movies

My [reading list & bookshelf](https://kpwags.com/bookshelf), as well as my [movies](https://kpwags.com/movies) used very similar code to render. I opted to condense the JS that handles them as well as the CSS to make the pages easier to manage. I also ended up shrinking the images and expanding the width some to allow more content to be viewed at once.

---

I generally like how my blog looks so I didn't go hog-wild, but it was nice to "freshen" it up a bit. I have a few more things I'm thinking of doing, but let me know what you think so far.
