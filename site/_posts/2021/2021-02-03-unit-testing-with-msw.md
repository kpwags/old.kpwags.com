---
layout: post_with_code
title: 'Unit Testing with MSW'
date: 2021-02-03 6:58pm
---

A little while back, I started a new project. I have been using [spreadsheets to track a lot of my fitness goals](https://kpwags.com/2020/01/21/tracking-my-fitness-journey.html). This approach generally works, but I thought it would be easier if I had an app for that. So I did what any self-respecting fitness enthusiast developer would do...make one myself! But with that, also come unit tests.

There are a whole bunch of options out there to track this stuff, but not all of them do everything, and they don't do what I think works for me. I also figured that I'm a developer and I could build myself something that works for what I'm looking for. I was also itching to try out Typescript & React, as well as the .NET Core Web API.

Not to get too in the weeds, but with this project, I wanted to do unit testing as I develop rather than at the end like I did with Digital Family Cookbook. The one thing I realized that I needed to do was be able to mock the API calls on the frontend. I stumbled upon a great post by Kent C. Dodds talking about how we [shouldn't be mocking window.fetch](https://kentcdodds.com/blog/stop-mocking-fetch). In it, he talks about [MSW](https://github.com/mswjs/msw), short for Mock Service Worker and how we can use that to intercept and mock our data calls.

I decided to give it a try and I have to say that I'm seriously impressed with how easy it is to setup and use. I figured I'd spend a little bit of time here going through how to quickly set it up and how to use it.

## Install

```bash
$ npm install msw --save-dev
```

or

```bash
$ yarn add msw --dev
```

## Setup

I have a folder in my **`/src`** directory called **`test`** that holds my basic testing configuration. You can put these files in a different directory if you have your project laid out differently, but the handlers and the server setup are how your fetch calls get handled for your unit tests.

### Create Your Handlers

MSW works by having a list of handlers that handle the various different fetch calls. You specify the endpoint and when window.fetch calls the endpoint, instead of interacting with your API, it interacts with the mock server.

#### `/src/test/server-handlers.ts`

```js
import { rest } from 'msw';

const handlers = [
    // retrieve a user by their ID
    rest.get('*/users/getuserbyid', (req, res, ctx) => {
        const id = req.url.searchParams.get('id');

        if (id) {
            const userId = parseInt(id, 10);

            if (userId > 0) {
                return res(
                    ctx.status(200),
                    ctx.json({
                        id: userId,
                        name: 'Keith Wagner',
                        email: 'keith@kpwags.com',
                    }),
                );
            }
        }

        return res(
            ctx.status(400),
            ctx.json({ message: 'User does not exist' })
        );
    },

    // save a user
    rest.post('*/users/saveuser', (_, res, ctx) =>
        res(
            ctx.status(200),
            ctx.json({
                successful: true,
                user: {
                    id: 1,
                    name: 'Keith Wagner',
                    email: 'keith@kpwags.com',
                },
            }),
        ),
    ),
];

export { handlers };
```

Let's take a look at this code. This is where you specify how each endpoint will respond to the API call.

Let's take a look at the first handler where I'm getting a user by their ID. My React component might need to handle a situation where the user being looked up doesn't exist. In this case, I can add some logic in the handler to return an error in this case when the ID is less than zero. That way I can test how the component handles an unknown user by passing in a negative number (or zero), while returning the user's info for other requests.

Not all handlers need to be as complex. If you look at the second item where I'm saving a user, you'll see that I don't have any logic around the request, I just send back a success message. Depending on what you're testing, you might not need to do any additional handling of requests and responses.

Just make sure to add a handler for every fetch call.

### Setup Your Server

#### `/src/test/server.ts`

```js
import { setupServer } from 'msw/node';
import { handlers } from './server-handlers';

// create the server object by passing in your handlers
const server = setupServer(...handlers);

export { server };
```

This code sets up your server by passing in the handlers you created above and passing them as an argument to the setupServer object from MSW.

### Setup Your Tests

#### `/src/setupTests.ts`

```js
import { server } from './test/server';

beforeAll(() => {
    // start up the server
    server.listen({
        onUnhandledRequest(req) {
            console.error('Found an unhandled %s request to %s', req.method, req.url.href);
        },
    });
});

afterEach(() => server.resetHandlers());

afterAll(() => server.close());
```

This code imports your mock server and tells it to start listening before running any tests, and then resets the handlers and closes the mock server when testing is complete.

When starting the server in the **`beforeAll`** function, I like to pass in the **`onUnhandledRequest`** argument. I sometimes forget about calls to the API when writing the tests, so if a window.fetch call is made that I don't handle, it will output an error message to the console letting me know what call was made so I can go back in and handle it. It's not necessary, but I've found it useful now and again.

### Telling Jest About MSW

#### `/jest.config.js`

```js
module.exports = {
    setupFilesAfterEnv: ['./src/setupTests.ts'],
};
```

Jest needs to know that MSW exists so that it can start the listener. In the setupFilesAfterEnv array, make sure to add the **`/src/setupTests.ts`** file.

## Final Thoughts

This is basically all there is to the setup. Anytime your frontend makes a fetch call, instead of going to the actual endpoint, it will instead go to your mock server. For me this makes this portion of testing easy as I can worry about unit-testing the API separately and focus primarily on the components and frontend. MSW makes configuring the handlers is simple and easy while still providing you the ability to handle edge case and error logic as needed. I would highly recommend giving it a try.

## One Last Thought

One other cool thing about MSW is that you can also use it for development as well as testing. I can't really attest to it as I don't use it for this use case, but MSW allows you to setup a service worker to handle your requests as you develop. If you don't have access to your backend locally or don't want to play around with your database for whatever reason, you can [set it up](https://mswjs.io/docs/getting-started/integrate/browser) to play the backend for your development work as well.
