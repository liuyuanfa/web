import React,{Component} from 'react'
import {createStore} from 'redux'
import todoApp from './store/reducer'
import {addTodo,toggleTodo,setVisibilityFilter,VisibilityFilters} from './store/action'

let store = createStore(todoApp)

console.log(store.getState());

var un=store.subscribe(function () {
  console.log(store.getState())
})
store.dispatch(addTodo('Study HTML'));
store.dispatch(addTodo('Study CSS'));

store.dispatch(toggleTodo(1))
store.dispatch(toggleTodo(0))
store.dispatch(toggleTodo(0))
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_ACTIVE))
un();

export default class App extends Component{
  render(){
    return(
      <div>
        redux
      </div>
    )
  }
}