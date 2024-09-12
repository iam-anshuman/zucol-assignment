import React from 'react';

interface ReverseArcTextProps {
  text: string;
  fontSize?: number;
  radius?: number;
}

const ReverseArcText: React.FC<ReverseArcTextProps> = ({ text, fontSize = 24, radius = 100 }) => {
  const chars = text.split('');
  const angle = 180 / (chars.length - 1);

  return (
    <svg width={radius * 2} height={radius + fontSize} viewBox={`0 0 ${radius * 2} ${radius + fontSize}`}>
      {chars.map((char, i) => {
        const a = angle * i - 90;
        const x = radius + radius * Math.cos((a * Math.PI) / 180);
        const y = radius + radius * Math.sin((a * Math.PI) / 180);
        return (
          <text
            key={i}
            x={x}
            y={y}
            fontSize={fontSize}
            textAnchor="middle"
            dominantBaseline="central"
            transform={`rotate(${180 - a}, ${x}, ${y})`}
          >
            {char}
          </text>
        );
      })}
    </svg>
  );
};

export default ReverseArcText;