"use client"

const TriangleShape = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <path d="M50 10 L90 90 L10 90 Z" fill="none" stroke="currentColor" strokeWidth="0.5" />
    <path d="M50 30 L80 80 L20 80 Z" fill="none" stroke="currentColor" strokeWidth="0.5" />
    <path d="M50 50 L70 70 L30 70 Z" fill="none" stroke="currentColor" strokeWidth="0.5" />
    <line x1="50" y1="10" x2="50" y2="90" stroke="currentColor" strokeWidth="0.5" />
  </svg>
)

interface PillShapeProps {
  children: React.ReactNode;
  bgColor: string;
  textColor: string;
}

const PillShape = ({ children, bgColor, textColor }: PillShapeProps) => (
  <div className={`relative w-full h-full rounded-full overflow-hidden ${bgColor}`}>
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-3/4 h-3/4">
        <TriangleShape />
      </div>
    </div>
    <div className={`absolute bottom-0 left-0 right-0 h-1/2 ${bgColor} flex items-center justify-center ${textColor} text-4xl font-bold`}>
      {children}
    </div>
  </div>
)

export default function OrganizationStructure() {
  return (
    <div className="bg-yellow-400 p-8 min-h-screen mt-[35rem]">
      <h1 className="text-4xl font-bold mb-8 text-center">Organization Structure</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-60">
        <div className="space-y-2">
          <div className="h-64">
            <PillShape bgColor="bg-purple-500" textColor="text-white">60%</PillShape>
          </div>
          <div className="text-center font-semibold">COMMUNITY</div>
          <div className="text-center text-sm">YOU - YOU - YOU</div>
        </div>
        <div className="space-y-2">
          <div className="h-64">
            <PillShape bgColor="bg-white" textColor="text-blue-600">20%</PillShape>
          </div>
          <div className="text-center font-semibold">INVESTORS</div>
          <div className="text-center text-sm">SEQUOIA + WOODSTOCK + FUTURE PRIVATE SALES</div>
        </div>
        <div className="space-y-2">
          <div className="h-64">
            <PillShape bgColor="bg-white" textColor="text-blue-600">20%</PillShape>
          </div>
          <div className="text-center font-semibold">CORE TEAM</div>
          <div className="text-center text-sm">TEAM CONTRIBUTORS</div>
        </div>
      </div>
    </div>
  )
}