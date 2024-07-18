import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
} from '@chakra-ui/react';
import {cardData,courseData} from '../../_data/data';
import Image from 'next/image';



export default function Details({params}:{params:{CourseId:string}}){
    function getChapters({details}:{details:{chapterTitle:string,chapterDescription:string}}){
        return (
            <Accordion allowMultiple>
                <AccordionItem className='bg-white'>
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
        <>
            <div className='grid grid-cols-2 gap-5 items-center p-20 text-white bg-[#222]'>
               <div>
                    <h1 className='font-FjallaOne text-5xl mb-5'>{data?.title}</h1>
                    <p className='font-varela text-xl'>{course?.description}</p>
                    <p className='font-varela text-xl'>{data?.level}</p>
               </div>
               <div className='flex items-center justify-center'>
                    <div className='rounded-xl border-4 border-solid border-[#ABAFDF] w-full h-full'>
                        <Image src={`${data?.imgUrl}`} alt={`${data?.id}`} layout="responsive" width={100} height={100} className='rounded-xl'/>
                    </div>
               </div>
            </div>
            <div className='p-8 w-3/4'>
                <h1 className='font-FjallaOne text-4xl text-white'>Course Content</h1>
                <div className='p-4 rounded-md'>
                    {course?.details.map((details)=>getChapters({details}))}
                </div>
            </div>

        </>
    )
}