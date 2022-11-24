# Let's Do To-do!

A simple to-do application, built using React, vanilla CSS and rollup.js.

![Asset 4](https://user-images.githubusercontent.com/98707204/203621664-7cc4c14d-94b3-4b6e-b46f-2fed972bb2db.png)

## Motivation
As we all know, React is an extremely powerful UI library for JavaScript. Actually, it's more that *just* a library — it's a *new era* of building web applications. At the same time, getting used to the programming style of React takes a little bit of time, even if one's a highly proficient JavaScript developer. It puts forward a completely new, and arguably much better, way of thinking about apps that requires the clock to do its work. ⏰

So, continuing on my journey of building a handful of applications/programs in React, for the second one, I decided to build a simple to-do application. But I didn't just want to create another monotonous, boring to-do application, as do exist out there. Absolutely not. Rather, I wanted an application with transitions, icons, a friendly font, and some fresh colors.

## Technologies used

### 1. React
Obviously, since this is a React application, **React** was used in its development.

### 2. Vanilla CSS
For the styling, I used **vanilla CSS**.

Yeah I know, it might seem very boring to be using vanilla CSS these days, but my end goal wasn't to *just use vanilla CSS*, but to instead *comprehend its shortcomings* when it comes to building applications in React.

The thing is that I've recently got to know of the superb potential of CSS-in-JS and so, before diving into it, I really want to convice myself of the problems of vanilla CSS when used in relation to React so that I can truly appreciate the power of CSS-in-JS. As it turns out, there are quite a handful of problems associated with writing CSS separately (even if that means writing preprocessed CSS, for e.g. Sass). I'll talk about them later on, in detail, in an article on [CodeGuage's Medium blog](https://medium.com/@codeguage).

### 3. rollup.js
For the bundling, I used **rollup.js**.

Webpack is everywhere. We all know of it. It's great. But for me, I always want to explore new stuff in this ever-changing ecosystem of JavaScript and see where it shines and where it doesn't. rollup.js is an example of such new stuff. To me, so far, it seems like a superb tool to get going with bundling React applications. Its setup is simple, intuitive, and free of unnecessary bloat. *What else could we want?*


## A little about the application

Let's now talk a little about this to-do application...

Regarding the naming of files in the `src` directory, I took a very simple approach. All files that export React components (which themselves are in PascalCase) are in PascalCase as well. The rest of them (such as `index.js`, `utils.js`) don't export back a React component and thus I name them in lower-kebab-case, to be able to easily distinguish between the nature of different files. 

Since the application didn't have a very complex component nesting, I went with the most basic way of managing state in React applications, i.e. keeping the state in the root of the application and then passing it down via props.

For storing the data of the app, which I refer to as ***tasks***, what else could've I thought of apart from... you guessed it — `localStorage` 😊.

Moving on, now since there were a lot of operations to be done on this `localStorage` data, I decided to create a separate JS class `TaskManager` to cater to all of them. As you can explore the `task-manager.js` file in the `src` folder, `TaskManager` defines a handful of methods so that I can easily query the app's data in `localStorage`. *Abstraction, remember?*

When I was done with the very first stage of this app, there were absolutely no transitions in there. But I wanted to give them. They give a really nice and professional feel to the app. And so, I put some more thought process into the code and finally added a little bit more to it (more state data, more props, some `setTimeout()` calls, etc.). And voila, the app got some really nice transition effects.

Overall, I'd like to say that I thoroughly enjoyed coding this to-do app. React is an amazing engineering product that, with its declarative approach, extremely simplifies the process of building web applications. In fact, it makes it joyous to create applications in it. 🙂

In the upcoming personal projects, I'll be exploring CSS-in-JS and see where I end up with it... 

