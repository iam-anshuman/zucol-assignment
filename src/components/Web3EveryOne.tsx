import Image from "next/image";
export default function Web3EveryOne() {
  return (
    <div className="relative">
      <Image
        src={"https://res.cloudinary.com/dewj7yvp3/image/upload/v1726386988/Zucol/vye4lqvanzepldfecx5t.svg"}
        width={300}
        height={300}
        alt="kite"
        className="w-[80vw]"
      />
      <Image
        src={"https://res.cloudinary.com/dewj7yvp3/image/upload/v1726386986/Zucol/thhfddiqxspqrfmdzwak.svg"}
        width={300}
        height={300}
        alt="kite"
        className=" w-20 absolute top-36 rotate-12 right-64"
      />

      <svg
        viewBox="0 0 1000 300"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        className="absolute top-3 left-1/4"
      >
        <defs>
          <path id="CurvedPath" d="M 0 150 Q 325 50 650 150 " />
        </defs>
        <text
          fontSize="54"
          x="325"
          y="50"
          textAnchor="middle"
          fill="black"
          fontFamily="Arial,Helvetica"
        >
          <textPath id="MyMessage" xlinkHref="#CurvedPath">
            WEB3 FOR EVERYONE
          </textPath>
        </text>
      </svg>

      <div className="absolute top-1/2 left-1/2 -translate-x-3/4 -translate-y-1/2 flex">
        <div className="bg-[#FFD318] px-10 py-3 rounded-3xl mx-4 cursor-pointer">
          JOIN THE TEAM
        </div>
        <div className="border-2 border-black px-10 py-3 rounded-3xl mx-4 cursor-pointer">
          BUSINESS INQUIRIES
        </div>
      </div>

      <div className="relative">
        <Image
          src={"https://res.cloudinary.com/dewj7yvp3/image/upload/v1726386988/Zucol/xkwhdgbx2ieqaq9osa4j.png"}
          width={300}
          height={300}
          alt="kite"
          className="w-1/2 absolute left-1/4"
        />
        <div className="relative flex overflow-x-auto scrollbar-hide">
            <div className="whitespace-nowrap animate-marquee my-52">
              <span className="mx-4">COMING SOON</span> <span className="mx-4">COMING SOON</span>{" "}
              <span className="mx-4">COMING SOON</span> <span className="mx-4">COMING SOON</span>{" "}
              <span className="mx-4">COMING SOON</span> <span className="mx-4">COMING SOON</span>
            </div>
            <div className="absolute animate-marquee2 whitespace-nowrap  my-52">
              <span className="mx-4">COMING SOON</span> <span className="mx-4">COMING SOON</span>{" "}
              <span className="mx-4">COMING SOON</span> <span className="mx-4">COMING SOON</span>{" "}
              <span className="mx-4">COMING SOON</span> <span className="mx-4">COMING SOON</span>
            </div>
        </div>
      </div>
    </div>
  );
}
