import Link from 'next/link'
import React from "react";
import Image from 'next/image'

interface NetworkCardProps {
    userImage: string;
    userName: string;
    userRole: string;
    liveStatus: boolean;
}
export default function NetworkCard ({ userImage, userName, userRole, liveStatus, }: NetworkCardProps){

    return(

        <>
            <Link href=''>
                <div className="liveCardSetting flex items-center justify-between">
                    <div className='flex items-center gap-3'>
                        <Image
                            src={userImage}
                            width={25}
                            height={25}
                            alt="Picture of the author"
                            className='liveCardImage'
                        />
                        <div>
                            <h5 className="liveCardHeading  text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{userName}    </h5>

                            <p className="liveCardRole  font-normal text-gray-700 dark:text-gray-400">{userRole}</p>
                        </div>
                    </div>
                    {
                        liveStatus ? <div>
                                <span
                                    className="liveCardBadge bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">Live</span>
                        </div> : ''
                    }

                </div>
            </Link>
        </>
    )
}