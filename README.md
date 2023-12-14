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
* 
