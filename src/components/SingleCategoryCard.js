import React from 'react';
import { CATEGORY_IMG_URL } from '../utils/constants';

const SingleCategoryCard = (props) => {

  // console.log(props);
  const {catData} = props;

  // console.log(catData?.action?.text)
  
  
  return (
    <div>
      <div className='single-category-wrap'>
        <img src={CATEGORY_IMG_URL + catData?.imageId}/>
        {/* <p>{catData?.action?.text}</p> */}
      </div>
    </div>
  )
}

export default SingleCategoryCard