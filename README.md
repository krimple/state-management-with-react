# State management with React 

This is a small demo repository that exercises state management via several approaches, contained in `src/demos`

* State only - `financialAssetsLocalState` - Just uses state and prop passing to handle display, update and refresh of data
* Context - `financialAssetsContext` - Uses React Context to manage shared state tree
* Context with Reducer - `financialAssetsWithReducer` - Adds a React Reducer to manage state in context
* Redux - `financialAssetsRedux` - uses <a href="https://redux-toolkit.js.org/" target="_blank">Redux Toolkit</a> to manage state (note - does not use RTK Query, this will come in a future update)
* Tanstack React Query - `reactQuery` - uses the <a href="https://tanstack.com/query/latest" target="_blank">React Query library</a> to manage state

This is a work in progress.

## Technologies applied

* `Vite` - de-facto build system replacing "Create React App"
* `TypeScript` - all code written in TypeScript
* `Tailwind.css` - utility-driven css design system, added it and used it with components and pre-defined styles in `index.css` to set sensible defaults
* `vitest` exercises code in several places using TypeScript-driven unit tests

## What we don't do

* Anything sophisticated with use cases - just a simple load in and update option
* Extensive editing with React context - context with reducer was a better choice to show editing
* Use plain Redux - since Redux is now deprecating `createStore` from the redux package and strongly urging to switch to `@reduxjs/toolkit` instead, we only use Redux Toolkit
* Form validation - not the focus of this lab so no form validation is supplied. Recommend looking into `react-form-hook` and `yup` as options for this
* Anything with server-side React - though we could do a similar repo in the future around next.js or other server-side engines and their approaches

## Creative Commons attributions

* State by Adrien Coquet from <a href="https://thenounproject.com/browse/icons/term/state/" target="_blank" title="State Icons">Noun Project</a> (CC BY 3.0)
