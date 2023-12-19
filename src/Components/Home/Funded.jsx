import React from 'react';
import Vector from '../../assests/Vector 714.png';
import Rectangle3 from '../../assests/Rectangle 3.png';
import Rectangle4 from '../../assests/Rectangle 4.png';
import Rectangle8 from '../../assests/Rectangle8.png';
import unique from '../../assests/system-uicons_scale.png';
import User from '../../assests/user 1 (1).png';

const FundingCard = ({ title, location, image, amount }) => (
  <div className="w-full md:w-1/3 h-64 md:mx-5 relative overflow-hidden mt-4 md:mt-0">
    <img src={image} alt={title} className="w-full h-full object-cover" />
    <button className="absolute bottom-0 left-0 text-1xl font-bold text-black bg-mygreen p-2">
      Fully Funded
    </button>
  </div>
);

const ContentCard = ({ title, location, image, amount }) => (
  <div className="flex flex-col w-full h-full object-cover p-7 bg-white text-black">
    <h1 className="text-xl font-bold p-2">{title}</h1>
    <p>{location}</p>
    <hr className="h-0.5 my-5 md:mr-14 bg-black" />
    <div className="flex">
      <img src={unique} alt="Icon" />
      <button>{amount}</button>
    </div>
  </div>
);

const Funded = () => {
  return (
    <>
      {/* Desktop Section */}
      <div className="md:flex md:items-center md:justify-between gap-8 md:px-10 lg:px-20 xl:px-32 hidden">
        <h1 className="text-5xl font-bold md:ml-96 md:mr-auto md:text-left">
          Successfully Funded
        </h1>
        <div className="md:flex md:items-center gap-3">
          <p className="hidden text-2xl md:block">Explore all</p>
          <img
            src={Vector}
            alt="Explore All"
            className="w-6 h-6 md:w-auto md:h-auto"
          />
        </div>
      </div>

      <hr className="md:ml-96 md:mr-auto mt-3 h-0.5 bg-mygreen hidden md:block" />

      {/* Mobile Section */}
      <div className="md:hidden px-8 lg:px-20 xl:px-32">
        <h1 className="text-5xl font-bold text-center mt-6">Successfully Funded</h1>
        <div className="flex items-center justify-center mt-3">
          <p className="text-2xl">Explore all</p>
          <img src={Vector} alt="Explore All" className="w-6 h-6 ml-2" />
        </div>
        <hr className="mt-3 h-0.5 bg-mygreen" />
      </div>

      {/* Funding Sections */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 px-4 md:px-8 lg:px-20 xl:px-32">
        {/* Section 1 */}
        <FundingCard
          title="Rio Global V LLP"
          location="Nearby To Green Airport"
          image={Rectangle3}
          amount="4.5 Crores"
        />

        {/* Section 2 */}
        <FundingCard
          title="Rio Global V LLP"
          location="Nearby To Green Airport"
          image={Rectangle8}
          amount="2 Crores"
        />

        {/* Section 3 */}
        <FundingCard
          title="Rio Global V LLP"
          location="Nearby To Green Airport"
          image={Rectangle4}
          amount="3 Crores"
        />
      </div>

      {/* Additional div with "Rio Global v LLp" content */}
      <div className="bg-black mt-8 md:mt-0">
        <div className="md:flex md:items-center md:justify-between gap-8 md:px-8 lg:px-20 xl:px-32">
          {/* Content 1 */}
          <ContentCard
            title="Rio Global V LLP"
            location="Nearby To Green Airport"
            image={unique}
            amount="4.5 Crores"
          />
          {/* Content 2 */}
          <ContentCard
            title="Rio Global V LLP"
            location="Nearby To Green Airport"
            image={unique}
            amount="2 Crores"
          />
          {/* Content 3 */}
          <ContentCard
            title="Rio Global V LLP"
            location="Nearby To Green Airport"
            image={unique}
            amount="3 Crores"
          />
        </div>
        <div className="flex flex-col md:flex-row bg-black text-white ml-0 md:ml-36 items-center">
  <img src={User} alt="User" className="mb-3" />
  <div className="ml-4">
    <h4 className="text-md mb-1">Kalpesh Chauhan</h4>
    <h6 className="text-sm mb-2">Riofin Assets Customer</h6>
  </div>
  <div className="ml-auto md:max-w-[50%] lg:max-w-[50%] xl:max-w-[50%]">
    <p>
      I have invested more than 35 lakhs with Riofin Assets in all their
      assets. They provide on-time returns. I have been with them for over a
      year now.
    </p>
  </div>
</div>
</div>

    </>
  );
};

export default Funded;
