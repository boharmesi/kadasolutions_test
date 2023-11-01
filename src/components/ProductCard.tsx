import React from "react";
import {Link} from "react-router-dom";

interface IProductCardProps {
    id: number,
    title: string,
    price: number,
    description: string,
    discount: number,
    image: string
}

const ProductCard = ({id, title, price, description, discount, image}: IProductCardProps) => {

    return (
        <div className="container grid grid-cols-1 grid-rows-4 border-2 rounded-md h-[305px] w-[320px]">
            <div>
                <img src={image}
                     className="w-[280px] h-[150px] object-cover rounded-md m-auto"/>
            </div>

            <div className="grid grid-cols-3 mt-[80px]">
                <div className='col-span-2 font-sans font-semibold text-xl truncate ml-[16px]'>
                    {title}
                </div>
                <div className="font-sans font-semibold text-2xl justify-self-end mr-[16px]">{price} $</div>
            </div>
            <div className="grid grid-cols-3 mt-[50px]">
                <div className="col-span-2 font-sans text-sm font-medium truncate ml-[16px]">
                    {description}
                </div>
                <div></div>
            </div>
            <div className='grid col-span-full'>
                <Link to={`/product/${id}`}>
                    <button
                        type="button"
                        className="m-auto bg-black text-white font-semibold font-sans text-base rounded-3xl w-[281.86px] h-[41px]">
                        See details
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default ProductCard
