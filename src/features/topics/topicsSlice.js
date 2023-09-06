import {  createSlice } from '@reduxjs/toolkit';

export const topicsSlice = createSlice({
    name: 'Topics',
    initialState: {
        topics: {}
    },
    reducers: {
        addTopic: (state, action) => {
            state.topics = {...state.topics, [action.payload.id]: action.payload};
        }
    }
});

export const selectTopics = (state) => state.topics.topics;
export default topicsSlice.reducer;