import {Carousel} from "@material-tailwind/react";

interface IImageSliderProps {
    images: string[]
}

const ImageSlider = ({images}: IImageSliderProps) => {
    return (
        <Carousel className="rounded-xl">
            {images.map((imageUrl, index) => {
                return (<img key={index} className="h-full w-full object-cover" alt={"lslsls"} src={imageUrl}/>)
            })}
        </Carousel>
    );
}

export default ImageSlider
