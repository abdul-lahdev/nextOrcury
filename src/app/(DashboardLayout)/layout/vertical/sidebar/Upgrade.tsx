import { Button } from "flowbite-react";
import Link from "next/link";
import React from "react";
import UpgradePlan from "/public/images/backgrounds/upgrade.png";
import Image from "next/image";
const Upgrade = () => {
  return (
    <>
      <div className="px-4 mt-8 relative">
        <div className="headerBtmCard py-4 px-5 rounded-xl ">
          <div className="grid grid-cols-12">
            <div className="col-span-12">
              <h6 className="headingText text-center">Free Live Streaming</h6>
              <p className='text-center paraText'>
                Go Live – Share Your Expertise in Real-Time!
              </p>
              <Button color={"primary"} className="mt-3 rounded-xl setGoliveBtn" as={Link} href="#">
                Go Live
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Upgrade;
