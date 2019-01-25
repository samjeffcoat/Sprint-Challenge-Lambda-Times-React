 [ ] What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.
PropTypes are used for typechecking your code in javascript. As developers we can make plent of mistakes when writing code and when we use prop types it helps us to check that our props are the correct type and being passed around correctly.   


- [ ] Describe a life-cycle event in React?
A life cycle event is when your app loads into the screen. There are 3 phases of a react lifecycle.
1.  Mounting phase- when the component is being built, and the render method is getting invoked. Render is putting data onto the page.
2.Updating phase- we use set State to change the data and force it to re render to the page.    
3. Unmounting- basically when our component gets removed from the screen.



- [ ] Explain the details of a Higher Order Component?
A higher order function is basically a function that takes in another function as an argument. It can take in some logic and add some functionality to a component and return it. We can use these HOC to share information between each other. 



- [ ] What are three different ways to style components in React? Explain some of the benefits of each.
CSS- you dont have to install a new library, and you can style as you go in another page and it can help seperate your JS and CSS
ReactStrap- Is a library used to style components. You can quickly build an app this way with using the methods that are already built.
Styled components- this works with higher order functions and allows us to make dynamic changes to our page. It also keeps everything on one page.