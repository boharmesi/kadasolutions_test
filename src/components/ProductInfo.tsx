import {useEffect, useState} from "react";
import {Product} from "../types";
import axios from "axios";
import {useLocation} from "react-router-dom";
import Rating from "./Rating";
import ImageSlider from "./ImageSlider";

const ProductInfo = () => {
    const [product, setProduct] = useState<Product>()

    const location = useLocation()
    const productId = location.pathname.substring(9)

    const PRODUCT_URL = "https://dummyjson.com/products/" + productId;

    useEffect(() => {
        axios.get<Product>(PRODUCT_URL, {responseType: "json"}).then(response => setProduct(response.data));
    }, [])


    return (
        <div className="grid grid-cols-2 place-items-center h-screen gap-x-16 ml-auto mr-auto">
            <div className="h-[481px] w-[620px]">
                {product?.images &&
                    <ImageSlider images={product.images}/>
                }
            </div>
            <div className="grid grid-cols-2 self-center items-center mt-[100px] gap-y-3">
                <div className="font-semibold text-4xl font-sans text-darkGrey">{product?.title}</div>
                <div><Rating rating={product?.rating ? product.rating : 0}/></div>
                <div className=" font-sans font-medium text-2xl break-before-column">{product?.description}</div>
                <div className="col-span-2 font-sans font-normal text-2xl text-gray-600">Stock: {product?.stock}</div>
                <div className="col-span-2 font-sans font-normal text-2xl text-gray-600">Brand: {product?.brand}</div>
                <div
                    className="col-span-2 font-sans font-normal text-2xl text-gray-600">Category: {product?.category}</div>
                <button
                    className="col-span-2 bg-purple text-white rounded-full w-[121px] h-[44px] font-semibold text-lg"
                    disabled>- {product?.discountPercentage} %
                </button>
                <div className="font-semibold text-5xl font-sans text-darkGrey">{product?.price} $</div>
                <button
                    className="bg-black text-white font-semibold font-sans text-2xl rounded-full w-[267px] h-[65px]">
                    Add to cart
                </button>
            </div>
        </div>
    )
}

export default ProductInfo