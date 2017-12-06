---
title: Lesson 11
lesson: React Gallery
author: Dan Hahn
date: 12/04/2017 15:00
template: article.jade

downloads:
  Download Stater File:
    file: week11.zip
    btn: primary

nav:
  React Gallery: index.html
  Example: example/index.html
---

This week we will use ReactJs to build a photo gallery.

<span class="more"></span>

## Getting Started

We need to create a new react app by running `create-react-app gallery` the cd in to the new `gallery` directory.

## Getting data for our Gallery

We are going to pull our data from an API.  An API is a way to get data in to one application from an other.  In our case we are going to use a static API that will return the same data every time.  Sometimes it will take data from a user and return a different response.

We can use this API to get back a list of photos.  

https://jsonplaceholder.typicode.com/photos

```javascript
[
  {
    albumId: 1,
    id: 1,
    title: "accusamus beatae ad facilis cum similique qui sunt",
    url: "http://placehold.it/600/92c952",
    thumbnailUrl: "http://placehold.it/150/92c952"
  },
  {
    albumId: 1,
    id: 2,
    title: "reprehenderit est deserunt velit ipsam",
    url: "http://placehold.it/600/771796",
    thumbnailUrl: "http://placehold.it/150/771796"
  },
  {
    albumId: 1,
    id: 3,
    title: "officia porro iure quia iusto qui ipsa ut modi",
    url: "http://placehold.it/600/24f355",
    thumbnailUrl: "http://placehold.it/150/24f355"
  },
  ...
]
```

We can see this is an array of objects that have  `albumId` `id` `title` `url` `thumbnailUrl`.  We can loop over the array and display the contents in our application.  

Notice that we just have a path to the image not the image.

## Using the API in ReactJs

We need to get the value of API in to our application we will do this with a [React Lifecycle Method](https://reactjs.org/docs/react-component.html).   

We are going to use `componentWillMount()`.  From the Docs.

> `componentWillMount()` is invoked immediately before mounting occurs. It is called before render(), therefore calling `setState()` synchronously in this method will not trigger an extra rendering. Generally, we recommend using the `constructor()` instead.

In `App.js` we need to add this to the `class App`.

Before we can call the API we need to create a place in the state to hold the value of the API.

This will create a state and have an empty array of photos.

```javascript
constructor(props) {
  super(props);
  this.width = 1000;
  this.state= {
    photos: [],
  };
}
```
After that we need to add this code.  This will call the API and when we get a value back it will add it the state.

```javascript
componentWillMount() {
  fetch('https://jsonplaceholder.typicode.com/photos')
    .then(raw => raw.json())
    .then(photos => {
      const adjustedPhotos = photos.slice(100, 110).map(({albumId, id, title, url, thumbnailUrl}) => {
        return {
          albumId,
          id,
          title,
          url: url.replace(/\/([0-9]{3})\//g, `/${this.width}x600/`),
          thumbnailUrl
        }
      });
      this.setState({ photos: adjustedPhotos });
    })
}
```

There is a little bit of magic happening here.  The first thing we are doing is using `fetch()` this takes the API you want.  Since we are getting back `JSON` we need to convert it with this line `.then(raw => raw.json())`.

Since we get back 5000 images we only want to work with 10 of them so we are cutting down the number from 5000 to 10 we do that with this `.slice(100, 110)`.

Next we need to `map()` over the new array of 10 items.  A `map()` will return a new array so we can change something in our response.  In our case we want to change the size of the image from `600x600` to `1000x600` with this line of code `url.replace(/\/([0-9]{3})\//g, `/${this.width}x600/`)`.

last we add the array to the state with `this.setState({ photos: adjustedPhotos });`

`this.state.photo` is this

```javascript
[
   {
      "albumId":3,
      "id":101,
      "title":"incidunt alias vel enim",
      "url":"http://placehold.it/1000x600/e743b",
      "thumbnailUrl":"http://placehold.it/150/e743b"
   },
   {
      "albumId":3,
      "id":102,
      "title":"eaque iste corporis tempora vero distinctio consequuntur nisi nesciunt",
      "url":"http://placehold.it/1000x600/a393af",
      "thumbnailUrl":"http://placehold.it/150/a393af"
   },
   {
      "albumId":3,
      "id":103,
      "title":"et eius nisi in ut reprehenderit labore eum",
      "url":"http://placehold.it/1000x600/35cedf",
      "thumbnailUrl":"http://placehold.it/150/35cedf"
   },
   ...
]
```

## New Gallery component

At this point we need to create a new component that will display our gallery.  

We can create a new component `src/components/Gallery/Gallery.jsx`.

```javascript
import React, { Component } from 'react';

class Gallery extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>Gallery to come</h2>
      </div>
    );
  }
}

export default Gallery;

```

We will loop over the photos and build a gallery that we slide through.

## add Gallery to App

Now that we have our new component we need to add it to our `App` component

```javascript
import Gallery from './component/Gallery/Gallery';

...
<Gallery />
...
```

## Getting the data to the gallery

Now that we have the component in the `App.js` we now need to get the data in to the Gallery component

`App.js`

```javascript
<Gallery photos={this.state.photos}/>
```

`Gallery.jsx`

```javascript
<div>
  {this.props.photos.map(photo => (
    <div key={photo.id}>{photo.id}</div>
  ))}
</div>
```

This loops over the items in the photos array and displays a `<div>` for each item in the array;

## Display images

Now lets format the photos to allow for the gallery to work.

```javascript
return (
  <div>
    <div className="photos">
      <div className="photos__items">
        {this.props.photos.map((photo, i) => (
          <div key={photo.id} className="photos__item">
            <img src={photo.url} alt="" className="photos__image" />
            <p className="photos__captions">{photo.title}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);
```

## Adding Styles

We need to add a new stylesheet for our Gallery component.

`import './gallery.css';`

```css
.Gallery {
  margin: 0 auto;
}

.Gallery__photos {
  display: flex;
}

.Gallery__photo {
  position: relative;
}

.Gallery__image {
  display: block;
}

.Gallery__caption {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  padding: 1em;
  color: white;
  margin: 0;
}
```

## Keeping Track of location

Now that we have our basic styles we need to offset the image based on the item we are viewing.  

We need to add two buttons.  One to move left and one to move right.  

```js
<button onClick={() => this.slidePhoto('right')}>pre</button>
<button onClick={() => this.slidePhoto('left')}>next</button>
```

We also need to know the current item we are on so we can add this to state.

```js
constructor(props) {
  super(props);
  this.state= {
    currentItem: 0
  };
}
```

now we need a script to change the current item.

```js
slidePhoto(dir) {
  const { currentItem } = this.state;
  console.log(dir);
  const nextItem = currentItem + 1;
  this.setState({ currentItem: nextItem });
}
```

This will update the currentItem but does not change the display of the UI.  If we change the CSS of `.Gallery__photos` with a negative `margin-left` the whole block will shift to the left and expose the next image in the gallery.

```js
updatePhotoDisplay(offSet) {
  const width = 1000;
  this.photoBox.style.marginLeft = `-${width * offSet}px`;
}
```

Now we need to call this from the `slidePhoto` like this `this.updatePhotoDisplay(nextItem)`.

But we are going to get an error since when we try to update `this.photoBox` it is not defined.  We need to add a "ref" to the HTML element.

```js
<div className="Gallery__photos" ref={(div) => this.photoBox = div}>
```

`.style.marginLeft = `-${width * offSet}px`;` is just javascript to change the `margin-left` of that element.

Lets add a css transition to make the change "slide".  Update this selector.

```CSS
.Gallery__photos {
  display: flex;
  transition: all .2s;
}
```

## Limit the currentItem

Right now we click next or prev it will move to the left and even when we run out of items it keeps moving to the left.  We want to limit it so when the max number of items is reached it returns to the 0 state.

```js
slideLeft(currentItem, photos) {
  return  currentItem < photos.length -1 ? currentItem + 1 : 0;
}
slideRight(currentItem, photos) {
  return currentItem > 0 ? currentItem - 1 : photos.length -1;
}
```

Since photos is an array we can get the `length` of it and use that to get the next position.

We have two cases. `slideLeft()` will look if we are over the currentItem is greater than the `photos.length -1` if we are than set back to zero other wise add one to the currentItem.  `slideRight()` will go the other way if the value is less than 0 set to the `photos.length -1` otherwise take one away.

Now we need to change the `slidePhoto()` to call the right slide function based on the direction.

```js
const { photos } = this.props;
const nextItem = dir === 'left'
  ? this.slideLeft(currentItem, photos)
  : this.slideRight(currentItem, photos);
```
Here we use an if statement if the direction is left call `slideLeft()` otherwise call `slideRight()`

## Finish the styles

Now that we have it working we need to finish a few styles.  We need to limit the width of the `.Gallery`

update to

```css
.Gallery {
  margin: 0 auto;
  width: 1000px;
  overflow: hidden;
}
```
