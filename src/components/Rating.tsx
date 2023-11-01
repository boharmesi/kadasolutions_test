import {Star} from "@mui/icons-material";

interface IRatingProps {
    rating: number
}

const Rating = ({rating}: IRatingProps) => {
    const getRatings = () => {
        let ratingStars = []
        for (let i = 0; i < Math.floor(rating); i++) {
            ratingStars.push(true)
        }
        for (let j = 0; j < (5 - Math.floor(rating)); j++) {
            ratingStars.push(false)
        }
        return ratingStars
    }

    const stars = getRatings()

    return (
        <div className="flex items-center space-x-1">
            {stars.map((star) =>
                <Star color={star ? "secondary" : "disabled"}/>
            )} {rating}
        </div>

    )
}

export default Rating