# [RNLH](https://rnlh.netlify.app)

## Schema

```
    const product = new Schema(
  {
    imgURL: { type: String, required: true },
    name: { type: String, required: true },
    condition: { type: String, required: true },
    location: { type: String, required: true },
    price: { type: String, required: true },
    description: { type: String, required: true }
    
  },
  { timestamps: true }
)

export default mongoose.model('products', Product)

User
const User = new Schema(
  {
    username: { type: String, required: true},
    email: { type: String, required: true },
    password_digest: { type: String, required: true, select: false },
  },
  { timestamps: true }
)
```

## [Flow Chart](https://whimsical.com/rnlh-AqtbXRC9ZBKuUYcfDGoRoq)

![alt text][Flowchart image]

[Flowchart image]: https://i.gyazo.com/a43326bcc136bb1e3d7d77c99cfd0384.jpg "Flowchart image"

## [Expectations](https://docs.google.com/document/d/1Mv-UWDzA7RXC039iJdf23xF7vfmzU3Gsi4LBd5q8tyI/edit)

![alt text][Expectations image]

[Expectations image]: https://i.gyazo.com/bc264dc6227698a9dd13749780f9e2f5.jpg  "Team Expectations"


## Overview 
We are a luxurious second hand store. We strive to make it easy to shop for high end brand items at affordable prices. Once on the page a user is able to sign up for an account, and unlock personalized features such as adding, deleting, and editing their own products.


## MVP
[Github Project Board](https://github.com/rodennis/RNLH/projects/1)

The above link contains a kanban board, containing all of the steps needed to achieve MVP.

## Code Cites

[Carousel](https://medium.com/tinyso/how-to-create-the-responsive-and-swipeable-carousel-slider-component-in-react-99f433364aa0)
