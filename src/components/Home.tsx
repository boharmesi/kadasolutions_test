import {useEffect, useState} from "react";
import {ProductDetails} from "../types";
import axios from "axios";
import ProductCard from "./ProductCard";

const Home = () => {
    const PRODUCT_URL = "https://dummyjson.com/products?limit=6&skip=0";
    const [products, setProducts] = useState<ProductDetails>()

    useEffect(() => {
        axios.get<ProductDetails>(PRODUCT_URL, {responseType: "json"}).then(response => setProducts(response.data));
    }, [])

    return (
          <div className="grid gap-y-24 justify-items-center mt-12">
            <div className="grid font-sans text-5xl font-semibold text-darkGrey h-1">
                See Products
            </div>
            <div className="container grid grid-cols-4 gap-y-2">
                <>
                    {products?.products && products.products.map((item =>
                            <ProductCard
                                id={item.id}
                                title={item.title}
                                price={item.price}
                                description={item.description}
                                discount={item.discountPercentage}
                                image={item.thumbnail}/>

                    ))}
                </>
            </div>
        </div>
    )
}

export default Home