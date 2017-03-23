# GeekEvening: React

Let's build a WebApps UI using React, No Slides / Just Code

## step 01

- start the create-react-app devserver:

```
npm run start (o yarn run start)
```

- a browser is suddenly opened on http://localhost:3000
- what secrets are hidden inside "src/App.js"
  - what is this weird import syntax?
  - are css and svg file imported as javascript modules?
  - open the devtools and inspect the page for clues
  - why are HTML and JS syntax mixed in this JavaScript file?
    - className? why not class?
    - what are the expressions inside the curly brackets
- what happens if we make a change into the App.js file
- what happens with errors? well, it depends... which kind of errors?
  - build errors vs. runtime errors
- React Component
  - the render method
  - short component syntax (stateless react components)
  - the component props
- React DevTools

## step 02

- what about index.js?
  - ReactDOM.render
  - the virtual DOM and the component life cycle
  - componentDidMount and ReactDOM.findDOMNode
  - refs and event handlers

## step 03

- state vs. props
  - props.children
  - setState
  - key

## step 04: redux

- Flux pattern and unidirectional state management
- redux-store.js
  - actions, reducers and store
- Provider, components vs containers, connect, mapStateToProps, dispatch
- Redux DevTools
- Redux DevTools extension

## step 05: mobx

- MobX vs. Redux
- MobX observable (and the extendObservable helper)
- MobX React observer
- MobX DevTools

## bonus step

- testing React with Jest
- smoke tests, shallow rendering tests with enzyme, Jest snapshot tests
