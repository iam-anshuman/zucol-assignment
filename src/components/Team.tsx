import TeamMember from "./TeamMember";

const teamMembers = [
  {
    name: 'Ankit Arora',
    role: 'Co-Founder',
    imageSrc: '/Images/AnimeImage1.png', // Ensure you have an image in your public folder
    gradient: 'bg-gradient-to-r from-cyan-500 to-blue-500'
  },
  {
    name: 'Ankit Arora',
    role: 'Co-Founder',
    imageSrc: '/Images/AnimeImage1.png', // Ensure you have an image in your public folder
    gradient: 'bg-gradient-to-r from-cyan-500 to-blue-500'
  },
  {
    name: 'Ankit Arora',
    role: 'Co-Founder',
    imageSrc: '/Images/AnimeImage1.png', // Ensure you have an image in your public folder
    gradient: 'bg-gradient-to-r from-cyan-500 to-blue-500'
  },
  {
    name: 'Ankit Arora',
    role: 'Co-Founder',
    imageSrc: '/Images/AnimeImage1.png', // Ensure you have an image in your public folder
    gradient: 'bg-gradient-to-r from-cyan-500 to-blue-500'
  },
  {
    name: 'Ankit Arora',
    role: 'Co-Founder',
    imageSrc: '/Images/AnimeImage1.png', // Ensure you have an image in your public folder
    gradient: 'bg-gradient-to-r from-cyan-500 to-blue-500'
  },
  {
    name: 'Ankit Arora',
    role: 'Co-Founder',
    imageSrc: '/Images/AnimeImage1.png', // Ensure you have an image in your public folder
    gradient: 'bg-gradient-to-r from-cyan-500 to-blue-500'
  }
]
function Team() {
  return (
    <div className='bg-[#222020] px-20 h-screen'>
        <div className="flex justify-between pt-20">
            <h2 className='text-[#FFD318] text-3xl font-bold'>The Masky Team</h2>
            <div className='flex'>
                <div className='text-7xl font-thin'><LeftArrowIcon/></div>
                <div className='text-[#FFD318] text-7xl font-black mx-4'><RightArrowIcon/></div>
            </div>
        </div>
        <div className="border-2 border-black/80 rounded-lg h-[60vh] relative my-10">
          <div className="bg-[url('/Images/GridBackground.svg')] bg-cover bg-no-repeat h-[60vh] rounded-lg">
              {
                <div className="flex overflow-x-auto whitespace-nowrap scroll-smooth scrollbar-hide p-4 space-x-4">
                        {teamMembers.map((member, index) => (
                              <div key={`${member.name}-${index}`} className="inline-block">
                                  <TeamMember {...member} index={index} />
                              </div>
                        ))}
                </div>
              }
          </div>
        </div>
    </div>
  )
}

export default Team;

function RightArrowIcon(){
  return(
    <svg width="35" height="35" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
  )
}

function LeftArrowIcon(){
  return(
    <svg width="35" height="35" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.85355 3.14645C7.04882 3.34171 7.04882 3.65829 6.85355 3.85355L3.70711 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H3.70711L6.85355 11.1464C7.04882 11.3417 7.04882 11.6583 6.85355 11.8536C6.65829 12.0488 6.34171 12.0488 6.14645 11.8536L2.14645 7.85355C1.95118 7.65829 1.95118 7.34171 2.14645 7.14645L6.14645 3.14645C6.34171 2.95118 6.65829 2.95118 6.85355 3.14645Z" fill="#fff" fillRule="evenodd" clipRule="evenodd"></path></svg>
  )
}