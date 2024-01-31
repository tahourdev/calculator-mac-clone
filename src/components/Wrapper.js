import React from "react";

const Wrapper = ({ children }) => {
  return (
    <div className="w-full flex h-screen justify-center items-center bg-[url('https://4kwallpapers.com/images/walls/thumbs_3t/8133.jpg')] bg-cover bg-no-repeat bg-center">
      <div className=" w-full relative max-w-[20rem] mx-auto">
        <div className="text-white relative backdrop-blur-3xl bg-[#2e2725]/30 rounded-2xl overflow-hidden border-white/50 border-[1px]">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Wrapper;
