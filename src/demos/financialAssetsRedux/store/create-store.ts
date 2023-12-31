import { configureStore } from '@reduxjs/toolkit';
import { bondsReducer } from '../bonds/bonds-slice';
import { cashReducer } from '../cash/cash-slice';
import { stocksReducer } from '../stocks/stocks-slice';

const store = configureStore({
    devTools: true,
    reducer: {
        stocks: stocksReducer,
        bonds: bondsReducer,
        cash: cashReducer,
    },
});

export { store };

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
