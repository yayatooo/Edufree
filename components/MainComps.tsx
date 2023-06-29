import React from 'react';

type TestProps = {
  name: string;
  age: number;
};

const MainComps = ({ name, age }: TestProps) => {
  return (
    <div>
      <h1 className="text-2xl font-semibold font-poppins">
        Hello World Nama Saya {name} dan umur saya {age}
      </h1>
    </div>
  );
};

export default MainComps;
