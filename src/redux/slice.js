import {createSlice} from '@reduxjs/toolkit'

const FormSlice = createSlice ({
    name : 'user',
    initialState: [],
    reducers : {
        addUser(state, action) {
            state.push(action.payload)
            localStorage.setItem('UserData', JSON.stringify(state))
        },
        removeUser (state, action) {
            const remove = state.filter((users) => users.id !== action.payload)
            return remove;
        }
    }
})

export const {addUser, removeUser} = FormSlice.actions

export default FormSlice.reducer