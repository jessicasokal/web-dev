import React from "react";
import {Link} from "react-router-dom";
import ReduxExamples from "./redux-examples";
import HelloReduxExampleComponent from "./redux-examples/hello-redux-example-component";
import hello from "./redux-examples/hello";
import {createStore, combineReducers} from "redux";
import todosReducer from "./redux-examples/todos-reducer";
import Todos from "./redux-examples/todos-component";
import {Provider} from "react-redux";
const reducers =
    combineReducers({hello, todosReducer})
const store = createStore(reducers);

const Labs = () => {
  return(
      <Provider store={store}>
      <div>
      <h1>Labs</h1>
        <ReduxExamples/>
        <Todos/>
        <HelloReduxExampleComponent/>

        <Link to="/hello">
          Hello
        </Link> |
        <Link to="/tuiter">
          Tuiter
        </Link>
      </div>
      </Provider>

  )
};

export default Labs;

/* a6 labs
        <TodoList/>
        <TodoItem/>
        <ConditionalOutput/>
        <Styles/>
        <Classes/>
 */