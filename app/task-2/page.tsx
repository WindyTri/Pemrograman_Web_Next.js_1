export default function tugasDua () {
    return(
        <div className="bg-white h-screen flex flex-col text-blue-950 gap-4 p-8">
            {/* Bagian 1 */}
            <div className="flex flex-row gap-4 flex justify-center">
                <div className="bg-blue-50 h-60 w-1/3 p-4 flex flex-col justify-between rounded-4xl">
                    <div className=' flex gap-4 m-3'>
                        <img src={'/palette.svg'} alt='Icon Palette'/>
                        <p>Design</p>
                    </div>
                    <div className="flex flex-row justify-between">
                        <div className="m-3">
                        <h1 className="text-3xl font-bold text-blue-900">Adobe Photoshop</h1>
                        <p className="text-blue-900">in 3 days</p>
                        </div>

                        <div className="flex flex-row -space-x-3 mt-13 mx-3">
                            <img src={'/1.jpeg'} className="h-6 w-6 rounded-full border-2 border-white" alt="Current"/>
                            <img src={'/2.jpeg'} className="h-6 w-6 rounded-full border-2 border-white" alt="Current"/>
                            <img src={'/3.jpeg'} className="h-6 w-6 rounded-full border-2 border-white" alt="Current"/>
                            <div className="bg-white text-blue-900 rounded-full border-2 border-white h-6 w-6 flex justify-center items-center">
                                <p className="text-[10px] text-blue-900">9+</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-lime-100 h-60 w-1/3 p-4 flex flex-col justify-between rounded-4xl">
                    <div className=' flex gap-4 m-3 justify-between'>
                        <div className="flex flex-row gap-4">
                            <img src={'/terminal-2.svg'} alt='Icon Terminal'/>
                            <p>AI</p>
                        </div>
                        <div className="">
                            <img src={"/carambola.svg"}/>
                        </div>
                    </div>
                    <div className="m-3 justify-between flex flex-row items-end">
                        <div className="">
                            <h1 className="text-2xl font-bold text-green-900">DALL󠁯‧E 2, Midjourney, Stable Diffusion</h1>
                            <p>in 5 days</p>
                        </div>
                        <div className="flex -space-x-3 translate-y-1 mx-5 ">
                                <img src={'/1_2.jpeg'} className="h-6 w-6 rounded-full border-2 border-white" alt="Current"/>
                                <img src={'/2_2.jpeg'} className="h-6 w-6 rounded-full border-2 border-white" alt="Current"/>

                                <img src={'/3_2.jpeg'} className="h-6 w-6 rounded-full border-2 border-white" alt="Current"/>
                                <div className="bg-white rounded-full border-2 border-white h-6 w-6 flex justify-center items-center shrink-0">
                                    <p className="text-[10px] text-green-900">3+</p>
                                </div>
                        </div>
                        
                    </div>
                </div>
            </div> 
            {/* Akhir Bagian 1 */}

            {/* Bagian 2 */}
            <div className="flex gap-4 justify-center">

                <div className="bg-purple-200 h-60 w-66 p-4 flex flex-col justify-between rounded-4xl">
                    <div className=' flex gap-4 m-3'>
                        <img src={'/palette.svg'} alt='Icon Palette'/>
                        <p>Design</p>
                    </div>
                    <div className="m-3">
                        <h1 className="text-3xl font-bold text-purple-900">Figma</h1>
                        <p className="text-purple-900">8 hour ago</p>
                    </div>
                </div>

                <div className="bg-orange-200 h-60 w-66 p-4 flex flex-col justify-between rounded-4xl">
                    <div className=' flex gap-4 m-3'>
                        <img src={'/code.svg'} alt='Coding Palette'/>
                        <p>Coding</p>
                    </div>
                    <div className="m-3">
                        <h1 className="text-3xl font-bold text-orange-900">Python</h1>
                        <p className="text-orange-900">2 days ago</p>
                    </div>
                </div>

                <div className="bg-red-200 h-60 w-66 p-4 flex flex-col justify-between rounded-4xl">
                    <div className=' flex gap-4 m-3'>
                        <img src={'/palette.svg'} alt='Icon Palette'/>
                        <p>Design</p>
                    </div>
                    <div className="m-3">
                        <h1 className="text-3xl font-bold text-red-900">Sketch</h1>
                        <p className="text-red-900">4 days ago</p>
                    </div>
                </div>

            </div>
            {/* Akhir Bagian 2 */}
        </div>
    );
}