import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "product",
    initialState: {
        isLoading: false,
        products: [], // ✅ Осигурување дека products не е undefined
        info: "",
        singleMessage: {},
        messageMarqueLeft: {},
        messageForAboutUs:{},

    },
    reducers: {
        handleAllProductAction: (state, action) => {
            console.log("Received products:", action.payload);
            state.info = action.payload; // ✅ Исправено: Сега ги зачувува продуктите во `products`
        },

        handleSingleProductAction: (state, action) => {
            console.log("Received single message:", action.payload);
            state.singleMessage = action.payload;
        },
        handleMarqueeMessageLeft: (state,action)=>{
            console.log("Reseived message marque left",action.payload);
            let data = action.payload;
            state.messageMarqueLeft = data;            
        },
        handleMessageAboutUs:(state,action)=>{
            console.log("Reseived message for About Us",action.payload);
            let data = action.payload;
            state.messageForAboutUs = data;
            
        }
       
    }
});

// EXPORT на акциите
export const { handleAllProductAction,
               handleSingleProductAction,
               handleMarqueeMessageLeft,
               handleMessageAboutUs } = productSlice.actions;

// EXPORT на reducer-от
export default productSlice.reducer;
