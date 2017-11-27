---
title: Lesson 10
lesson: Static Site Generators
author: Dan Hahn
date: 11/27/2017 15:00
template: article.jade

downloads:
  Download Stater File:
    file: week10.zip
    btn: primary

nav:
  Static Site Generators: index.html
  Create React App: react.html
---
This week we are talking about Static Site Generators and Create React App

<span class="more"></span>

## What is a Static Site Generator?
An SSG is a compromise between using a hand-coded static site and a full CMS, while retaining the benefits of both. In essence, you generate a static HTML-only website using CMS-like concepts such as templates. The content can be extracted from a database but, more typically, Markdown files are used.

The site generation can occur on your development machine or staging server. The resulting HTML files are then deployed to a live web server. Users will never know the difference.

A related concept is a “Headless” or “Decoupled” CMS. These use an interface such as WordPress to handle content administration but allow other systems to access the data via a REST API. Therefore, an SSG could build a static website using WordPress page content extracted from an internal server. The resulting HTML files can be uploaded to a web server — but the WordPress installation need never be accessible from outside the organization.

Popular static site generators include Jekyll, Pelican, Hugo and Metalsmith — see StaticGen for many more. 

In class we are going to use a node based generator called [https://github.com/jnordberg/wintersmith](Wintersmith)

While this is not the most popular SSG out there I like it because it is simple and use node/javascript.

## Things we need to understand to use this SSG.

1. CLI (command line interface) 
2. Pug/Jade - template 
3. Markdown - content creation.

### Install

We need to install it like we did for Gulp.  It needs to be able to be run for the command line.  To install you need to run this command form your terminal. 

```bash
$ npm install wintersmith -g
```

### Make 

Now we need to create our project.  Change to the directly were you want to create the project.  In our case we are will be in our week10 folder

```bash
$wintersmith new <path>
```

Replace `<path>` with the folder you want use.  In our case we will use `blog`

### Open the project

```bash
$ cd blog
$ wintersmith preview
```

this will start the server and allow us to do develop the site

```bash
$ wintersmith preview
  starting preview server
  using config file: /Users/dev/blog/config.json
  server running on: http://localhost:8080/
```

Now load `http://localhost:8080/` in your browser.

### Build final site

Once you are are all done we need to run the raw files in in to flat HTML files.  We do this running this command 

```bash
$ wintersmith build
```

This creates a folder `build` in your project.  There are the files that you will put on your remove web server. 

## Pug/Jade

Pug/Jade is template that will build the HTML files.  In our project it is still know as `jade` but never versions are know as `pug` it needed to be change for some legal reason.  

[Pug Docs](https://pugjs.org/api/getting-started.html)

In our project our jade files will be in a template folder

```bash
templates
  ├── archive.jade
  ├── article.jade
  ├── author.jade
  ├── feed.jade
  ├── index.jade
  └── layout.jade
```

Our base template is `layout.jade` 

```javascript
doctype html
block vars
  - var bodyclass = null;
html(lang='en')
  head
    block head
      meta(charset='utf-8')
      meta(http-equiv='X-UA-Compatible', content='IE=edge,chrome=1')
      meta(name='viewport', content='width=device-width')
      title
        block title
          = locals.name
      link(rel='alternate', href=locals.url+'/feed.xml', type='application/rss+xml', title=locals.description)
      link(rel='stylesheet', href='//fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic|Anonymous+Pro:400,700,400italic,700italic|Merriweather:400,700,300')
      link(rel='stylesheet', href=contents.css['main.css'].url)
  body(class=bodyclass)
    header.header
      div.content-wrap
        block header
          div.logo
            h1
              a(href=locals.url)= locals.name
            p.description= locals.description
    div#content
      div.content-wrap
        block content
          h2 Welcome to zombocom!
    footer
      div.content-wrap
        block footer
          section.about
            !=contents['about.md'].html
          section.copy
            p &copy; #{ new Date().getFullYear() } #{ locals.owner } &mdash; powered by&nbsp;
              a(href='https://github.com/jnordberg/wintersmith') Wintersmith
              //- please leave the "powered by" if you use the design
```

Jade creates html files but it tries to make it easy to work with.  All HTML tags are just there name with out the `<>`.  So `header` will be come `<header>`.  Since we can wrap elements like with HTML Jade uses an indent to define that an element is a child. 

so 
```js
header.global-header
  h1 Jade is Cood
```

becomes
```html
<header class="global-header">
  <h1>Jade is Cool</h1>
</header>
```
The thing I like is that you can add javascript right in your template. 

### blocks

When you see the key word `block` this mean the content can be swapped out by an other template.

```js
block header
  div.logo
    h1
      a(href=locals.url)= locals.name
    p.description= locals.description
```

An other template can over write this "block" of code with content that is relative to that page. 

### Extending a template

One jade file and extend an other like this one that `index.jade`

```js
extends layout

block content
  include author
  each article in articles
    article.article.intro
      header
        p.date
          span= moment.utc(article.date).format('DD. MMMM YYYY')
        h2
          a(href=article.url)= article.title
      section.content
        if article.intro.length > 0
          != typogr(article.intro).typogrify()
        if article.hasMore
          p.more
            a(href=article.url) more

```

Here were we add `extends layout` tell it bring all the parts of `layout.jade` this this template but replace the `content` block with this data.  

Since you can use Javascript you do things like this

```js
if article.intro.length > 0
  != typogr(article.intro).typogrify()
if article.hasMore
  p.more
    a(href=article.url) more
```

We are checking if `article.intro.length` an array has a more than one item.  If it does than it runs this command `!= typogr(article.intro).typogrify()` that convert the content from the Markdown file to HTML and puts in this spot. 

## Markdown

The last part of is the content.  It is created by using Markdown.  Markdown is HTML with out the Tags.

In our project the Markdown files are in the `contents` folder.  And the articles are in an `articles` folder.

```bash
├── contents
│   ├── about.md
│   ├── articles
│   │   ├── another-test
│   │   │   └── index.md
│   │   ├── bamboo-cutter
│   │   │   ├── index.md
│   │   │   └── taketori_monogatari.jpg
│   │   ├── hello-world
│   │   │   └── index.md
│   │   ├── markdown-syntax
│   │   │   └── index.md
│   │   └── red-herring
│   │       ├── banana.png
│   │       └── index.md
```

Notice the files are `.md` this is markdown. 

* [CheatSheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
* [Video How to](https://www.youtube.com/watch?v=Je5w18nn-e8&list=PLu8EoSxDXHP7v7K5nZSMo9XWidbJ_Bns3)

The basic idea behind this is you just write your content and don't have to worry about the html.

```markdown
---
title: Hear me blog
author: johndoe
date: 2012-12-12 12:12
---

This will be shown as the article excerpt.

## A h2, hr or <span class="more"> marks where the intro cuts off

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

* list
* item 

[Google](http://www.google.com)

## Headline 2

### Headline 3

```

## Meta Data 

the first few lines of of this file are is not Markdown but [YAML](http://yaml.org/) that is used to define the data about this file.

```javascript
---
title: Hear me blog
author: johndoe
date: 2012-12-12 12:12
---
```

This tells us the title, author and date.  We can add any other 