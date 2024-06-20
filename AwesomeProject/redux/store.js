import { configureStore } from "@reduxjs/toolkit";
import todoReduer from './slice/todoSlice'

const store = configureStore({
    reducer : {
        todo: todoReduer 
    }
})

export default store