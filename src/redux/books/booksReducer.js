

const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    books: []
}

export const booksSlice = createSlice({
    name: 'booksList',
    initialState,
    reducers:
    {
        getPopularBooks (state, action) {
            console.log('action', action.payload)
            console.log('state', state)
            state.books = action.payload;
   }
}
})

