import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    filter: {
        category: [],
        color: [],
        size: []
    }
}

export const product = createSlice({
    name: 'product',
    initialState,
    reducers: {
        clearFilterRedux:(state,action) => {
            const temp = action.payload
            alert('what')
            console.log(temp)
            state = initialState
            state.filter.size=[]
            state.filter.category=[]
            state.filter.color = []
            // console.log(state.filter)
        },
        filterSelectRedux: (state, action) => {
            const { type, checked, item } = action.payload
            var filter = state.filter
            var category = filter.category
            var color = state.filter.color
            var size = filter.size
            if (checked) {
                // if(type == "COLOR"){
                //     filter.category = [...filter.category,item.categorySlug]
                // }
                switch (type) {
                    case "INDEX":
                        state.filter.category = item
                        break
                    case "CATEGORY":
                        state.filter.category = [...category,item.categorySlug]
                        break
                    case "COLOR":
                        
                        state.filter.color = [...color,item.color]
                        break
                    case "SIZE":
                        state.filter.size = [...size,item.size]
                        // filter = { ...filter, size: [...filter.size, item.size] }
                        break
                    default:
                }

            } else {
                switch (type) {
                    case "CATEGORY":
                        const newCategory = filter.category.filter(e => e !== item.categorySlug)
                        filter.category = newCategory
                        break
                    case "COLOR":
                        const newColor = filter.color.filter(e => e !== item.color)
                        filter.color = newColor
                        break
                    case "SIZE":
                        const newSize = filter.size.filter(e => e !== item.size)
                        filter.size = newSize
                        break
                    default:
                }
            }
            // console.log(filter)
        },

        
    },
})

// Action creators are generated for each case reducer function
export const { filterSelectRedux,clearFilterRedux } = product.actions

export default product.reducer