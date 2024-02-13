import React from 'react'
import Header from './Header'
import SignInForm from './SignInForm'

const Login = () => {
    return (
        <div className='relative'>
            <Header />

            <div className='absolute text-[white] z-10 mt-24 w-full flex justify-center'>
                <div className='w-[35%]  bg-[#000000af] px-10 py-10 shadow-lg'>
                    <SignInForm/>
                </div>

            </div>


            <div className='border border-white '>
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/5e16108c-fd30-46de-9bb8-0b4e1bbbc509/29d8d7d7-83cc-4b5f-aa9b-6fd4f68bfaa6/IN-en-20240205-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="" className='scale-1'/>

                <div className="absolute top-0 left-0 w-full h-full bg-[#00000068] pointer-events-none "></div>
            </div>




        </div>
        // <div className='relative border border-black'>


        //     <div className='border border-white '>
        //         <img src="https://assets.nflxext.com/ffe/siteui/vlv3/5e16108c-fd30-46de-9bb8-0b4e1bbbc509/29d8d7d7-83cc-4b5f-aa9b-6fd4f68bfaa6/IN-en-20240205-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="" />

        //         <div className="absolute top-0 left-0 w-full h-full bg-[#00000068] pointer-events-none "></div>
        //         {/* <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black to-transparent pointer-events-none"></div> */}
        //         {/* <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-black to-transparent pointer-events-none"></div> */}
        //     </div>

        //     <div className='absolute'>
        //         <Header />
        //     </div>


        // </div>
    )
}

export default Login
