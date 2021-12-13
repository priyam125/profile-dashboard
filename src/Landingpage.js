import React, {useRef, useState} from 'react'
import { AiFillRightCircle } from "react-icons/ai";
import { AiFillLeftCircle } from "react-icons/ai";


function Landingpage() {


    const [scrollData, setScrollData] = useState([
        {
            "name": "Frana James",
            "role": "User",
            "description": "Love using the app. There's a learning curve. But totally worth it.",
            "photo": "profile-photo-5.png"
        },
        {
            "name": "Ronald Hubbard",
            "role": "User",
            "description": "I use the service to meet friends. Satisfied with the work of the program. Recomend for everybody!",
            "photo": "profile-photo-1.png"
        },
        {
            "name": "Megan Perez",
            "role": "Product analyst",
            "description": "A great app that changed my day planning for the better! Now meetings are only in Slated.",
            "photo": "profile-photo-3.png"
        },
        {
            "name": "Michelle Hubbard",
            "role": "Creative director",
            "description": "Awesome! I really like this service because there is nothing superfluous in it.",
            "photo": "profile-photo-6.png"
        },
        {
            "name": "Jishnu Choyi",
            "role": "Programmer",
            "description": "Greatly improved my productivity. Recommended to all my friends.",
            "photo": "profile-photo-4.png"
        }
    ])

    const scrollDiv = useRef()
    let lengthData = scrollData.length

    const handleButton = (direction) => {
        // console.log(scrollDiv.current);
        // scrollDiv.current.scrollLeft-=200

        var container = document.getElementById('container');
        let scrollCompleted = 0;
        var slideVar = setInterval(function(){
            if(direction == 'left'){
                container.scrollLeft -= 50;
            } else {
                container.scrollLeft += 50;
            }
            scrollCompleted += 10;
            if(scrollCompleted >= 100){
                window.clearInterval(slideVar);
        }
    }, 50);

    }



    return (
        <div className='main flex flex-col items-center justify-center '>
            <div className='xl:ml-12 lg:ml-2 px-8 py-20 z-20 '>
                <div className='font-bold text-5xl pb-10 '>Reviews & testimonials</div>
                <div id='container' className='flex lg:flex-row flex-col items-center justify-center space-y-8 space-x-12 flex-main-container overflow-x-hidden pb-10  xl:px-10 lg:px-2 h-96' ref={scrollDiv}>
                    {scrollData.map((data, index) => {
                        
                        return (
                                <div key={index} className='flex flex-col items-center justify-center flex-container px-8'>
                                    <div className='image-conatiner pb-6'>
                                        <img src={`/images/${data.photo}`} alt='' className='rounded-full object-contain image-container'/>
                                    </div>
                                    <div className='pb-2 font-medium'>{data.description}</div>
                                    <div className='space-y-1'>
                                        <div className='font-bold text-lg'>{data.name}</div>
                                        <div className='text-sm text-gray-400'>{data.role}</div>
                                    </div>
                                </div>
                        )
                    })}
                    
                </div>
                <div className='space-x-6 lg:block hidden'>
                    <button onClick={() => handleButton('left')}><AiFillLeftCircle size={45} color='turquoise'/></button>
                    <button onClick={() => handleButton('right')}><AiFillRightCircle size={45}  color='turquoise'/></button>
                </div>
            </div>
            <div>
                    <img src='/images/tick.png' alt='' className='background-images absolute top-2/3 left-1/4'/>
                    <img src='/images/round.png' alt='' className='background-images absolute top-1/4 right-1/3'/>
                    <img src='/images/wiggle.png' alt='' className='background-images absolute top-2/3 left-3/4'/>
            </div>
        </div>
    )
}

export default Landingpage






// {/*<div className='flex flex-col items-center justify-center w-1/3 relative flex-container z-20'>
//                         <div>One</div>
//                         <div>One</div>
//                     </div>
//                     <div className='flex flex-col items-center justify-center w-1/3 relative flex-container'>
//                         <div>TWO</div>
//                         <div>Two</div>
//                     </div>
//                     <div className='flex flex-col items-center justify-center w-1/3 relative flex-container'>
//                         <div>There</div>
//                         <div>Three</div>
//                     </div>
//                     <div className='flex flex-col items-center justify-center w-1/3 relative flex-container'>
//                         <div>Four</div>
//                         <div>Four</div>
//                 </div>*/}