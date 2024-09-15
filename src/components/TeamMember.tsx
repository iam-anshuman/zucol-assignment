// components/TeamMember.tsx
import React from 'react';

type TeamMemberProps = {
    index: number;
    name: string;
    role: string;
    imageSrc: string;
    gradient: string;
};

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, imageSrc, gradient,index }) => {
    return (
        <div className={`w-60 h-80 rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:-translate-y-2 ${gradient}`}>
            <img src={imageSrc} alt={`${name}`} className={`w-full h-2/3 object-cover ${index % 2 === 0 ? 'bg-yellow-300' : ''}`}/>
            <div className="text-white text-center p-4">
                <h3 className="text-lg font-bold">{name}</h3>
                <p className="text-sm">{role}</p>
            </div>
        </div>
    );
};

export default TeamMember;
