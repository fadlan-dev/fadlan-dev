import React from 'react';

type Props = {};

const logo = (props: Props) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='38'
      height='38'
      viewBox='0 0 38 38'
    >
      <g transform='translate(-5 -5)' fill='currentColor'>
        <g transform='translate(5 5)'>
          <path
            d='M43,24.844A18.114,18.114,0,0,0,36.8,11.2,18.144,18.144,0,1,0,11.2,36.8,18.113,18.113,0,0,0,24.844,43l.106,0,.106,0A17.944,17.944,0,0,0,43,25.056c0-.035,0-.07,0-.106S43,24.88,43,24.844ZM12.105,33.868a15.532,15.532,0,0,1-2.88-8.918A15.831,15.831,0,0,1,24.95,9.225a15.531,15.531,0,0,1,8.918,2.88A15.391,15.391,0,1,1,12.105,33.868ZM5.422,23.156A17.719,17.719,0,0,1,34.176,9.277a18.147,18.147,0,0,0-24.9,24.9A17.64,17.64,0,0,1,5.422,23.156ZM24.844,40.467a15.565,15.565,0,0,1-10.938-4.482A15.81,15.81,0,0,0,35.985,13.907a15.612,15.612,0,0,1-11.14,26.56Z'
            transform='translate(-5 -5)'
          />
        </g>
      </g>
      <text
        transform='translate(13.003 27)'
        fontSize='20'
        fontWeight='700'
        fill='currentColor'
      >
        <tspan x='0' y='0'>
          F
        </tspan>
      </text>
    </svg>
  );
};

export default logo;
