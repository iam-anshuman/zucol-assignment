import Image from "next/image"
export default function Offer(){
    return(
        <div className="bg-[#1C1B1B] h-[60vh]">
            <div className="text-[#FFD318] text-7xl text-center font-bold font-georama pt-28">Tanukibles</div>
            <div className="text-5xl text-white font-georama font-bold text-center my-4">Play 2 Earn Game</div>
            <div className="text-[#FFD318] text-3xl text-center font-bold font-georama my-4">9999 Tanuki NFTs up for grabs</div>
            <div className="bg-white text-black text-center w-28 h-7 mx-auto rounded-3xl my-4 cursor-pointer">learn more</div>
            {/* <Image src={"/Robot.svg"} width={100} height={100} alt="Robot"  className="my-4"/> */}
        </div>
    )
}