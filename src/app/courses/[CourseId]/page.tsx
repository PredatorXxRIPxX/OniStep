import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Input,
    Button,
} from '@chakra-ui/react';


import {cardData,apps} from '../../_data/data';
import Image from 'next/image';
import Btn from '../../_components/btn/btn';
import Link from 'next/link';
import { Chapter,ChapterDescription,AppInfo } from '../../_data/data';



export default function Details({params}:{params:{CourseId:string}}){
    function getChapters({details}:{details:Chapter}){
        return (
            <div className='w-full'>
            <Accordion allowMultiple>
                <AccordionItem className='bg-white border-1 border-black border-solid w-full'>
                    <h2>
                        <AccordionButton>
                            <Box flex="1" textAlign="left">
                                <h1 className='text-lg font-semibold'>
                                    {details.chapterTitle}
                                </h1>  
                            </Box>
                            <Box flex="1" textAlign="right">
                                <p>{details.chapterDescription.length} Tutorials</p>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        {
                            details.chapterDescription.map((description:ChapterDescription)=>{
                                return(
                                    <div className='lg:p-4 mb-4 mt-4 flex items-center justify-between w-full'>
                                        <h1 className='font-varela text-lg pl-8 flex items-center w-fit'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mr-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
                                            </svg>
                                            <p className='text-md'>
                                                {description.title}
                                            </p>
                                        </h1>
                                        <p className='font-varela text-lg pr-8'>{description.timeline}</p>
                                    </div>
                                )
                            })
                        }
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
            </div>
        )
    }
    const course = apps.find((course)=>course.id === params.CourseId);
    const data = cardData.find((data)=>data.id === params.CourseId);

    return (
        <div>
                <div className=' flex-col-reverse   lg:grid lg:grid-cols-2 gap-5 items-center p-20 text-white bg-[#222]'>
                <div>
                        <h1 className=' font-FjallaOne text-5xl mb-5 w-fit'>{course?.title}</h1>
                        <p className='font-varela text-xl'>{course?.description}</p>
                        <p className='font-varela font-bold  text-2xl text-[#6A30B2] pt-5'>{data?.level}</p>
                </div>
                <div className='lg:flex lg:items-center lg:justify-center mt-10'>
                        <div className='rounded-xl border-4 border-solid border-[#ABAFDF] w-full h-full'>
                            <Image src={`${data?.imgUrl}`} alt={`${data?.id}`} layout="responsive" width={100} height={100} className='rounded-xl'/>
                        </div>
                </div>
                </div>
                <div className='grid lg:grid-cols-10 grid-cols-1 items-center justify-stretch lg:p-10 '>
                    <div className='p-8 w-full lg:col-span-7 '>
                        <h1 className='font-FjallaOne text-4xl text-white pl-4 pb-4'>Course Content</h1>
                        <div className='p-6 bg-white rounded-xl'>
                            {course?.details.map((details)=>getChapters({details}))}
                        </div>
                    </div>
                    <div className='hidden lg:w-full lg:bg-[#f0f3ff] lg:rounded-lg lg:p-8 lg:mt-10 lg:col-span-3 lg:h-fit'>
                        <h1 className='font-FjallaOne text-4xl text-black text-center '>{course?.title}</h1>
                        <div className='p-4'>
                            <div className=" rounded-lg">
                                <Image src={'/assets/bonnetaille.png'} alt='bonnet' layout="responsive" width={100} height={100} className='rounded-xl'/>
                            </div>
                            <p className='font-varela text-lg text-black text-center mt-2 mb-2'>Get this course and much more with the Lite plan of Onistep - <span className='text-violet-800 underline-offset-1'><Link href={'/price'}>Learn more</Link></span> </p>
                            <center>
                                <Btn text="Start This Course" />
                            </center>
                        </div>
                    </div>
                </div>
        </div>
    )
}