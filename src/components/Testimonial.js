import {React, useState} from 'react'
import Card from './Card.js'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'



export default function Testimonial(props) {

    let reviews = props.reviews;

    const [index, setIndex] = useState([]);

    function leftHandler(){
        if(index - 1 < 0 ){
            setIndex(reviews.length - 1)
        }

        else{
            setIndex(index - 1);
        }
    }

    function rightHandler(){
        if(index + 1 >= reviews.length){
            setIndex(0);
        }

        else{
            setIndex(index + 1);
        }
    }

    function surpriseHandler(){
        let randomIndex = Math.floor(Math.random() * reviews.length)
        setIndex(randomIndex);
    }

  return (
    <div>
       <Card reviews = {reviews[index]}></Card>



       <div className='flex text-3xl mt-5 gap-3 text-violet-400  font-bold '>
            <button className='cursor-pointer hover:text-violet-500' onClick={leftHandler}> <FiChevronLeft/> </button>
            <button className='cursor-pointer hover:text-violet-500' onClick={rightHandler}> <FiChevronRight/> </button>
        </div>

        <div className=''>
            <button onClick={surpriseHandler} className='mt-5 bg-violet-400 hover:bg-violet-500 shadow-md hover:shadow transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg'>
                Surprise Me
            </button>
        </div>
    </div>
  )
}

