import { createSlice } from '@reduxjs/toolkit'
import productServices from '../../services/productServices'
const initialState = {
    filter: {
        category: [],
        color: [],
        size: [],
        name:'',
    },
    links:[],
    products:[]
}

export const product = createSlice({
    name: 'product',
    initialState,
    reducers: {
        getProducts:(state,action) =>{
            state.products = action.payload
        },
        clearFilterRedux:(state,action) => {
            const temp = action.payload
            // alert('what')
            console.log(temp)
            state.filter= initialState.filter

        },
        filterSelectRedux: (state, action) => {
            // alert(action.payload)
            const { type, checked, item } = action.payload
            var filter = state.filter
            var category = filter.category
            var color = state.filter.color
            var size = filter.size
            // alert(checked)
            if (checked==true) {
                // if(type == "COLOR"){
                //     filter.category = [...filter.category,item.categorySlug]
                // }
                switch (type) {
                    case "NAME":
                        state.filter.name = item
                        break
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
                console.log(checked)
                switch (type) {
                    case "NAME":
                        state.filter.name = ""
                        break
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
        addLinks :(state,action) =>{
            state.links = [...state.links,action.payload]
            console.log(state.links)
        },
        updateLinks: (state,action)=>{
            state.links.pop()
            state.links = [...state.links,action.payload]
        },
        setLinks:(state,action) =>{
            state.links = action.payload
        }

        
    },
})

// Action creators are generated for each case reducer function
export const { filterSelectRedux,
    clearFilterRedux,
    addLinks,
    updateLinks,
    setLinks,
    getProducts
} = product.actions

export default product.reducer