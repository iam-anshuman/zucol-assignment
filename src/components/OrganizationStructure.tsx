import Image from "next/image"
export function OrganizationStructure(){
    return(
        <div className="bg-[#FFD318] h-screen mt-[45rem] text-center font-georama">
            <h1 className="text-black text-4xl font-bold py-20">Organization Structure</h1>

            <div className="flex gap-4 w-full">
                <div className="w-full h-2/3 flex justify-center gap-x-28 my-20">
                <div className="h-80">
                    <div>You-You-You-You</div>
                    <div className="relative h-52 w-28 bg-white rounded-full overflow-hidden">
                        <Image src="/Tower.svg" width={100} height={100} alt="Tower Image" className="absolute top-5 left-1 z-10"/>
                        <div className="absolute bottom-0 h-[60%] w-full bg-[#BC53DF] text-white font-semibold text-xl">60%</div>
                    </div>
                    <div>Community</div>
                </div>
                <div className="h-80">
                    <div>Investors</div>
                    <div className="relative h-52 w-28 bg-white rounded-full overflow-hidden">
                        <Image src="/Tower.svg" width={100} height={100} alt="Tower Image" className="absolute top-5 left-1"/>
                        <div className="absolute bottom-0 h-[20%] w-full bg-[#252BB5] text-white font-semibold text-xl">20%</div>
                    </div>
                    <div>SEQUOIA + WOODSTOCK + FUTURE PRIVATE SALES</div>
                </div>
                <div className="h-80">
                    <div>Team Contributors</div>
                    <div className="relative h-52 w-28 bg-white rounded-full overflow-hidden">
                        <Image src="/Tower.svg" width={100} height={100} alt="Tower Image" className="absolute top-5 left-1"/>
                        <div className="absolute bottom-0 h-[20%] w-full bg-[#252BB5] text-white font-semibold text-xl">20%</div>
                    </div>
                    <div>Core Team</div>
                </div>
                </div>
            </div>
        </div>
    )
}
