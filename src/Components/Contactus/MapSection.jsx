import React from 'react';
import { IconButton } from "@material-tailwind/react";
import Phone from '../../assests/Phone.png';
import Mail from '../../assests/Letter.png';

const MapSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center">
      <div className="bg-blue-600 md:w-full md:max-w-md lg:max-w-lg xl:max-w-xl h-auto md:h-[450px] p-4 md:p-8">
        <div className="text-white text-left mb-4">
          {/* <IconButton className="rounded hover:shadow-[#ea4335]/20 focus:shadow-[#ea4335]/20 active:shadow-[#ea4335]/10">
            <i className="fab fa-google text-lg" />
            support@riofinassets.com
          </IconButton> */}
        </div>

        <div className="text-white text-left flex mb-4">
          <img src={Phone} alt="" className="w-4 h-4 mr-1" />+91 636761717171
        </div>
        <div className="text-white flex text-left mb-4">
          <img src={Mail} alt="" className="w-4 h-4 mr-1" />support@riofinassets.com
        </div>
        <div className="text-white flex text-1xl text-left mb-4">
          <img alt="" src={Mail} className="w-4 h-4 mr-3" />
          #15A, 4th Floor, City Vista, Kharadi, Pune,<br />
          Maharashtra - 411014
        </div>
      </div>
      <div className="bg-blue-500 md:w-full lg:w-2/3 xl:w-2/3 h-auto md:h-[450px]">
        <iframe
          title="hello"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2990.274257380938!2d-70.56068388481569!3d41.45496659976631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e52963ac45bbcb%3A0xf05e8d125e82af10!2sDos%20Mas!5e0!3m2!1sen!2sus!4v1671220374408!5m2!1sen!2sus"
          className="w-full h-auto md:h-[450px]"
          style={{ marginRight: '1em' }}
        ></iframe>
      </div>
    </div>
  );
}

export default MapSection;
