import React, {useState} from 'react'
import StarRatings from 'react-star-ratings'
import {getColor} from '../../functions/colors'

const Rating = ({initialRating = 0, numberOfStars = 5}) => {
  const [rating, setRating] = useState(initialRating)
  return (
    <StarRatings
      rating={rating}
      starRatedColor={getColor('bg-yellow-500')}
      starEmptyColor={getColor('bg-gray-300')}
      starHoverColor={getColor('bg-gray-400')}
      starDimension="16px"
      starSpacing="3px"
      changeRating={setRating}
      numberOfStars={numberOfStars}
      name="stars"
    />
  )
}

export default Rating
