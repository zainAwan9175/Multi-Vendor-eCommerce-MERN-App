import axios from "axios";

// create the product

export const createProduct=(newForm)=>async(dispatch)=>{
    try{
        dispatch({
            type:"productCreateRequest",
        })
        const config={headers:{"Content-Type":"multipart/form-data"}}
        const {data}=await axios.post(
            `${process.env.REACT_APP_BACKEND_URL}/product/create-product`,
            newForm,
            config
        )
        console.log("data",data)
        dispatch({
            type:"productCreateSuccess",
            payload:data.product
        })
    }
    catch(err)
    {
        dispatch({
            type:"productCreateFail",
            payload:err.response.data.message
        })

    }
}