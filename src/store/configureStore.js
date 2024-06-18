import { createStore, combineReducers, applyMiddleware } from 'redux'
import { thunk } from 'redux-thunk'
import categoriesReducer from '../reducers/categories-reducer'
import expensesReducer from '../reducers/expenses-reduces'


const configureStore = () => {
    const store = createStore(combineReducers({
        categories: categoriesReducer,
        expenses: expensesReducer
    }), applyMiddleware(thunk))

    return store
}

export default configureStore