import Image from "next/image";

export default function HeroSection() {
    return (
        <div className="relative h-screen flex flex-col items-center justify-center">
            <div className="w-full md:w-[80vw] flex flex-col">
                <h1 className="w-4/5 absolute top-60 z-10 text-4xl font-bold text-black/[0.85] leading-tight uppercase md:w-3/5 md:text-[5.6rem] md:font-georama md:leading-tight">
                    The Web3 Platform Built for You
                </h1>
                <div className="relative w-full flex justify-center items-center mt-10">
                    <Image
                        src={"/yellow-circle.svg"}
                        width={100}
                        height={100}
                        className="w-3/5 md:w-2/5"
                        alt="yellow-circle"
                    />
                    <Image
                        src={"/star-pattern.svg"}
                        width={100}
                        height={100}
                        className="absolute -z-10 top-0 right-0 md:top-[20%] md:right-[28%]"
                        alt="star-pattern"
                    />
                    <Image
                        src={"/kite.svg"}
                        width={100}
                        height={100}
                        className="absolute top-1/2 -right-10 md:top-[60%] md:right-36"
                        alt="Kite"
                    />
                    <Image
                        src={"/kite-string.svg"}
                        width={100}
                        height={100}
                        className="absolute -z-10 -bottom-40 right-0 w-full md:-bottom-[32.5rem] md:right-[15.4%]"
                        alt="Kite String"
                    />
                    <Image
                        src={"/Person.svg"}
                        width={100}
                        height={100}
                        className="absolute bottom-0 w-1/4 md:-bottom-72 md:right-96 md:w-1/6"
                        alt="Person"
                    />
                </div>
            </div>
            <div className="absolute top-0 right-0 md:top-[15%] md:w-[10vw] flex md:flex-col items-center">
                <div className="rotate-0 md:rotate-90 my-14 mx-5 cursor-pointer">Skyclub</div>
                <div className="rotate-0 md:rotate-90 my-14 mx-5 cursor-pointer">Sky Wallet</div>
                <div className="rotate-0 md:rotate-90 my-14 mx-5 cursor-pointer">Contact Now</div>
            </div>
            <div className="absolute -z-10 md:h-[30rem] md:w-[30rem] rounded-full bg-gradient-to-br from-[#7182EA]/60 to-[#B259E1]/60 blur-3xl md:-bottom-60 md:-right-10"></div>
        </div>
    );
}
