import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSharedWorkerMiddleware from '@flameddd/redux-sharedworker';
import counterReducer from '../features/counter/counterSlice';

const shareWorkerMiddleware = createSharedWorkerMiddleware({
  targetActions: ['counter/increment']
})

// "configureStore" is @reduxjs/toolkit API
// ref: https://redux-toolkit.js.org/usage/usage-with-typescript#using-configurestore-with-typescript
export default configureStore(
  {
    reducer: {
     counter: counterReducer,
    },
    middleware: getDefaultMiddleware().concat(shareWorkerMiddleware)
  },
);
