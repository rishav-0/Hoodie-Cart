import axios from 'axios'
const Cart_URL = "https://todoappres-default-rtdb.firebaseio.com/cart.json"

const ApiUrl = 'https://api.escuelajs.co/api/v1/products'

export const getData = async ()=>{
    const res = await axios.get(ApiUrl)
    if(res.status === 200 && res.data){
        return res.data
    }
    console.log(res.data)
}

export const addToCart = async (payload)=>{
    try{
        const res = await axios.post(Cart_URL,payload)
        console.log('added to cart')
    }catch(error){
        console.log('failed to add')
    }
}
export const updateCart = async (id,payload)=>{
    try{
        const res = await axios.patch(`https://todoappres-default-rtdb.firebaseio.com/cart/${id}.json`,payload)
        return res
        console.log('update cart')
    }catch(error){
        console.log('failed to update')
    }
}

export const cartItems = async ()=>{
    const res = await axios.get(Cart_URL)
    // const cart = Object.entries(response.data).map(([id, todo]) => ({ id, ...todo, }));
    console.log(res.data)
    return res.data
}

export const deleteItems = async (id)=>{
    const res  = await axios.delete(`https://todoappres-default-rtdb.firebaseio.com/cart/${id}.json`)

    // const cart = Object.entries(response.data).map(([id, todo]) => ({ id, ...todo, }));
    console.log(res.data)
    return res.data
}



// export const decrement = async ()=>{
//     const res = await.patch
// }