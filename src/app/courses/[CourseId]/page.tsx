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


import {cardData,courseData} from '../../_data/data';
import Image from 'next/image';
import Btn from '../../_components/btn/btn';
import Link from 'next/link';



export default function Details({params}:{params:{CourseId:string}}){
    function getChapters({details}:{details:{chapterTitle:string,chapterDescription:string}}){
        return (
            <Accordion allowMultiple>
                <AccordionItem className='bg-white border-1 border-black border-solid'>
                    <h2>
                        <AccordionButton>
                            <Box flex="1" textAlign="left">
                                {details.chapterTitle}
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        {details.chapterDescription}
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        )
    }

    
    const course = courseData.find((course)=>course.id === params.CourseId);
    const data = cardData.find((data)=>data.id === params.CourseId);
    return (
        <div>
            
                <div className='grid grid-cols-2 gap-5 items-center p-20 text-white bg-[#222]'>
                <div>
                        <h1 className='font-FjallaOne text-5xl mb-5'>{data?.title}</h1>
                        <p className='font-varela text-xl'>{course?.description}</p>
                        <p className='font-varela font-bold  text-2xl text-[#6A30B2] pt-5'>{data?.level}</p>
                </div>
                <div className='flex items-center justify-center'>
                        <div className='rounded-xl border-4 border-solid border-[#ABAFDF] w-full h-full'>
                            <Image src={`${data?.imgUrl}`} alt={`${data?.id}`} layout="responsive" width={100} height={100} className='rounded-xl'/>
                        </div>
                </div>
                </div>
                <div className='grid grid-cols-10 items-center justify-stretch p-10'>
                    <div className='p-8 w-full col-span-7'>
                        <h1 className='font-FjallaOne text-4xl text-white pl-4 pb-4'>Course Content</h1>
                        <div className='p-4 rounded-md'>
                            {course?.details.map((details)=>getChapters({details}))}
                        </div>
                    </div>
                    <div className='w-full bg-[#f0f3ff] rounded-lg p-8 h-3/4 mt-10 col-span-3'>
                        <h1 className='font-FjallaOne text-4xl text-black text-center '>{data?.title}</h1>
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