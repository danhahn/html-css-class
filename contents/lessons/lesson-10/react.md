---
title: Lesson 10
lesson: Create React App
author: Dan Hahn
date: 11/27/2017 15:00
template: article.jade

nav:
  Static Site Generators: index.html
  Create React App: react.html
---

## What is React? 

React is a declarative, efficient, and flexible JavaScript library for building user interfaces. Your components tell React what you want to render – then React will efficiently update and render just the right components when your data changes.

[React Tutorial](https://reactjs.org/tutorial/tutorial.html)

## Install Create React App CLI

```bash
$ sudo npm install -g create-react-app
```

### Create new React Project

```bash
create-react-app my-app
```
This step will take a few minutes.  We need to pull down all the npm packages you needed for the project.  (there are a lot)


```bash
cd my-app/
npm start
```
This gives us this

```bash
├── README.md
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
├── src
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   ├── logo.svg
│   └── registerServiceWorker.js
```

The first file that we need to look at is `index.js`.  This is where the application starts

```js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
```

Things are very different in react that JS.  Rather than having on large file with all the info in it we have lots of smaller file that get `imported` in to one another. 

here we pull the `App` by `import App from './App';`  then we can use it `ReactDOM.render(<App />, document.getElementById('root'));` 

## Components 

In react we create components with are small bits of javascript lets take a look at one.

`App.js`

```js
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
```

* `import React, { Component } from 'react';` will import the things we need to build a react component.  
* `import logo from './logo.svg';` pulls in the image and stores it in a variable of logo that can be used later in the file.
* `class App extends Component {` creates a javascript class of the name of `App`
* `render() {` a function that builds the JSX
* `return (` what get rendered
* `export default App;` allow to be imported by an other file. 

## React use JSX

JSX is a template that allow you to write HTML like code.  While it looks like HTML it is not.  There are few things are different. 

1. All tags must be closed. `<img src={logo} className="App-logo" alt="logo" />`
2. css `class` are defined as `className="App-intro"`

If you need to put a value from JavaScript in to it like the value of the path to the logo you need to use the `{}` like `src={logo}`

## Build the App

When you are all done and you want to put on your website you need to run 

```bash
$ npm run build
```

This will build all the javascript files and html file needed to run this application.  

You will then upload the build folder.
