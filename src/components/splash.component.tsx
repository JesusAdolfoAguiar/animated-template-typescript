import React from "react";

const Splash = () => {
    return (
        <>
        {/* <!-- Splash Page --> */}
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center" style={{'minHeight': '75vh'}}>
        {/* <!-- Background Image --> */}
        <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style=
            {{'backgroundImage': 'url("https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80")'}}
        >
            {/* <!-- Overlay --> */}
            <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-black"></span>
        </div>
        {/* <!-- Text Over Main Background --> */}
        <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12">
                <h1 className="text-white font-semibold text-5xl" data-aos="fade-up">
                    Welcome your epiphany.
                </h1>
                <p className="mt-4 text-lg text-gray-300" data-aos="fade-right" data-aos-delay="1000">
                    Lorem ipsum dolor sit. Eum totam aspernatur aliquam praesentium aperiam magni, dignissimos, atque incidunt fuga nulla distinctio eligendi enim placeat nesciunt, soluta maxime nihil ipsa minus!
                </p>
                </div>
            </div>
            </div>
        </div>
        {/* <!-- Making Polygon Shape in Background --> */}
        <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
            style={{height: "70px", transform: "translateZ(0)"}}
        >
            <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
            >
            <polygon
                className="text-gray-300 fill-current"
                points="2560 0 2560 100 0 100"
            ></polygon>
            </svg>
        </div>
        </div>
        {/* <!-- End of Splash Page --> */}
        </>
    )
}

export default Splash;