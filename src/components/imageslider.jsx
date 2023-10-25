import React, { useEffect, useRef, useState } from 'react'


const Imageslider = (props) => {
  const [currIndex, setcurrIndex] = useState(0)
  let newindex
  const timerRef = useRef(null)

  const gotoPrev = () => {
    const isFirst = (currIndex === 0)
    if (isFirst) {
      newindex = props.slides.length - 1
    } else {
      newindex = currIndex - 1
    }
    setcurrIndex(newindex)
  }
  const gotoNext = () => {
    const isLast = (currIndex === props.slides.length - 1)
    if (isLast) {
      newindex = 0
    } else {
      newindex = currIndex + 1
    }
    setcurrIndex(newindex)
  }

  const gotoSlide = slideIndex =>{
    setcurrIndex(slideIndex)
  }

  useEffect(()=>{
    if(timerRef.current){
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(()=>{
      gotoNext();
    },2000)
    return ()=>{
      clearTimeout(timerRef.current);
    }
  }, [gotoNext])


  return (
    <div className='imageSlider' style={{ backgroundImage: `url(${props.slides[currIndex].url})` }}>
      <div className="leftarrow" onClick={gotoPrev}>
        ❮
      </div>
      <div className="rightarrow" onClick={gotoNext}>
        ❯
      </div>
      <div className="goto-image">
        {
          props.slides.map((slide, slideIndex) => (
            <span key={slideIndex} onClick={()=>gotoSlide(slideIndex)}>
              o
            </span>
          ))
        }
      </div>

    </div>
  )
}

export default Imageslider

// ieee aim, ieee recruitment, ieee members, ieee events, ieee gallery