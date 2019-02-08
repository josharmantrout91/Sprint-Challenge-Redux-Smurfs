1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
    The .map(), .filter(), and .concat() methods don't mutate arrays, and Object.assign() is how we do the Monster Mash with Objects.

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    The store is where our state is being handled globally for the entire application, and is thereby a 'single source of truth' because it takes in some state that's passed to it via the reducers, a description of what took place via the actions called, and returns a copy of the state.

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
    App state is global, gets held in store in Redux, and can be accessed by Components so long as they hook into it somehow. Component state is local, lives within the specific component, and can only be updated within the given component and passed down to its children via props. The major consideration for one vs the other is whether you need to be able to access some portion of state outside a given component tree. If you need ot cross trees, it's best to use App state. If it's data that only matters to a given Component tree, use Component state.

4.  What is middleware?
    Middleware is code that intercepts actions before they hit the reducer and can perform extra steps during said intercept.

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    Redux-thunk is middleware that enables us to break from the inherently synchronous nature of Redux and do things like create promises and other asynchronous activity. When an action creator is called, redux-thunk will intercept and look at what is returned. If the thing returned is an action, then the action gets sent through to the reducer. But, if the thing returned is a function, then it will invoke that function and pass in the dispatch function as an argument to it.

6.  Which `react-redux` method links up our `components` with our `redux store`?
    Connect!
