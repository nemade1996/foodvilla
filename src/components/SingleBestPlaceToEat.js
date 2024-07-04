import React from 'react'

const SingleBestPlaceToEat = (props) => {
    const {bestInfoData}=props;
  return (
    <div className='single-best-place-box'>
        <p>{bestInfoData.text}</p>
    </div>
  )
}

export default SingleBestPlaceToEat