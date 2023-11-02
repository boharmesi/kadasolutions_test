import {useEffect, useState} from "react";
import {Product, ProductDetails} from "../types";
import axios from "axios";
import ProductCard from "./ProductCard";
import InfiniteScroll from "react-infinite-scroll-component";

const Home = () => {
    const [items, setItems] = useState<ProductDetails>()
    const [products, setProducts] = useState<Product[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const [skip, setSkip] = useState(0)
    const [hasMore, setHasMore] = useState(true)

    const PRODUCT_URL = "https://dummyjson.com/products?limit=10&skip=" + skip;

    const getData = async () => {
        setIsLoading(true)
        setError(null)
        try {
            await axios.get<ProductDetails>(PRODUCT_URL, {responseType: "json"})
                .then(response => {
                    setItems(response.data)
                    setProducts(prevProducts => [...prevProducts, ...response.data.products])
                    setSkip(prevSkip => prevSkip + 10)
                    setHasMore((response.data.total > skip + 10))
                })
        } catch (e) {
            setError(error)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div className="grid gap-y-24 justify-items-center mt-12">
            <div className="grid font-sans text-5xl font-semibold text-darkGrey h-1">
                See Products
            </div>
            <InfiniteScroll
                dataLength={products.length}
                next={getData}
                hasMore={hasMore}
                loader={isLoading && <p>Loading...</p>}
                endMessage={<p>No more data to load.</p>}
            >
                <div className="container grid grid-cols-4 gap-y-2">
                    {products.map(((item, idx) =>
                            <ProductCard
                                key={idx}
                                id={item.id}
                                title={item.title}
                                price={item.price}
                                description={item.description}
                                discount={item.discountPercentage}
                                image={item.thumbnail}/>
                    ))}
                </div>
            </InfiniteScroll>
        </div>
    )
}

export default Home