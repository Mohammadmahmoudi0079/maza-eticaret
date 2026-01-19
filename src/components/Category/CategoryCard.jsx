import React from 'react'

import Button from '../Shared/Button'

function CategoryCard({image,imageLoc,bgButton,txtColorButton,bgFrom,bgTo,txt1Color,txt2Color,txt3Color,txtOpacity,txt,colSpan}) {
  return (        
          <div className={`${colSpan} py-10 pl-5 bg-gradient-to-br ${bgFrom} ${bgTo} text-white rounded-3xl relative h-[320px] flex items-end`}>
            <div>
              
              <div className='mb-4 '>
                <p className={`${txt1Color} mb-[2px] '`}>Enjoy</p>
                <p className={`${txt2Color} text-xl font-semibold`}>With</p>
                <p className={`${txt3Color} text-3xl font-bold ${txtOpacity} mb-2`}>{txt}</p>
                
                <Button text="Brows" bgColor={bgButton} textColor={txtColorButton}></Button>
              </div>
            </div>
            <img src={image} alt="" className={`w-[320px] absolute drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)] ${imageLoc}`}></img>
          </div>
  )
}

export default CategoryCard
