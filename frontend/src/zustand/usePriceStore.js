import {create} from "zustand";

export const usePriceStore = create((set) => ({
    price: '',
    updatePrice: (price) => {
        const parsedPrice = parseFloat(price);

        if(price === ''){
            set(() => ({ price: 0}));
        } else {
            if(!isNaN(parsedPrice)) {
                set(() => ({ price: parsedPrice}));
            } else {
                console.warn("숫자만 가능함요")
            }
        }
        
    }
    
}))

