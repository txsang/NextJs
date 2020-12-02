import rootReducer from '@/redux/reducers/rootReducer'
import { createStore } from 'redux'
import { createWrapper } from 'next-redux-wrapper'

const initStore = () => createStore(rootReducer)

export default createWrapper(initStore)
