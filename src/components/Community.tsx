import Image from "next/image"
export function Community(){
    return(
        <div className="bg-white relative">
            <div className="w-[30rem] ml-20 mt-52">
                <h2 className=" text-5xl font-bold">Communities are the lifeblood of society.</h2>
                <p className="my-4">Decentralised communities are going to be the lifeblood of the metaverse.</p>
                <p className="my-2">Metasky aims to empower influencers, creators and brands to build happy, motivated Web3 communities with a strong sense of belongingness.</p>
            </div>
            <Image src={"/Images/PatternDesign.svg"} width={100} height={100} alt="Pattern Design"  className="absolute -top-52 z-10  my-4 w-full rotate-5"/>
            <h1 className="absolute -bottom-[28rem] right-10 bg-gradient-to-r from-[#AC4FDB] to-[#2D2DB7] inline-block text-transparent bg-clip-text font-georama font-thin text-9xl">WEB3</h1>
        </div>
    )
}