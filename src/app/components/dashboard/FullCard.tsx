import Image from 'next/image'
import Link from 'next/link'
import DropdownUse from "@/app/components/dashboard/DropdownUse";

interface NetworkCardProps {
    cardUserName: any;
    cardUserRole: any;
    cardUserImg: any;
    cardTopic: any;
    cardViews:any;
    cardStreamingTime:any;
    cardStatus:any;
    cardBackgroundImage:any;
}

export default function FullCard ({cardUserName,cardUserRole,cardUserImg,cardTopic,cardViews,cardStreamingTime,cardStatus,cardBackgroundImage}: NetworkCardProps){
    return(
        <>


            <div
                className="fCardSetting max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.9)), url(${cardBackgroundImage})`,
                    margin: '1rem',
                    height: '227px',
                    borderRadius: '12px',
                    padding: '12px',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover'
                }}>
                    <div className='flex flex-col justify-between h-full'>
                        <span
                            className="flex items-center gap-1 fCardlivBadge w-max inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10"> {cardStatus ?
                            <span style={{
                                width: '8px',
                                height: '8px',
                                borderRadius: '50%',
                                border: '1px solid white',
                                backgroundColor: '#E92215'
                            }}></span>:''} {cardStatus ? 'Live' : 'Offline'} </span>
                        <div className='flex items-center gap-2'>
                        <Image
                                src={cardUserImg}
                                width={20}
                                height={20}
                                alt="Picture of the author"
                                style={{borderRadius:'50%',height:'40px',width:'40px'}}
                            />
                            <div className='w-full flex items-center justify-between'>
                                <div>
                                    <h1 className='fCardHeading'>{cardUserName}</h1>
                                    <p className='fCardrole'>{cardUserRole}</p>
                                </div>
                                <div>
                                    <DropdownUse/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-5 pt-0">
                    <Link href="">
                        <h5
                            className="fCardmainHeading mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
                            title="Intro to Neuroanatomy | Neurophysiology | Neuroscience | Central Nervous System"
                        >
                            {cardTopic}
                        </h5>
                    </Link>

                    <div className='flex items-center gap-2'>
                        <span className='fCardViewers'>{cardViews} viewers</span>
                        <span style={{width:'10px',height:'10px',borderRadius:'50%',backgroundColor:'#D7DFE9',display:'block'}}></span>
                        <span className='fCardtime'>Streaming {cardStreamingTime} PM</span>
                    </div>
                </div>
            </div>

        </>
    )
}