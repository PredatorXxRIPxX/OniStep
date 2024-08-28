import Container from "../_components/@container/container";
import PricingCard from "../_components/@pricingCard/pricingcard";
import Btn from "../_components/btn/btn";

const descriptionMajor = (
    <>
      Onistep brings all the guidance you need right to your screen.<br />
      No more endless searches.<br />
      Get the answers you need instantly.<br />
      Onistep brings all the guidance you need right to your screen.<br />
      No more endless searches.<br />
      Get the answers you need instantly.<br />
      Onistep brings all the guidance you need right to your screen.<br />
      No more endless searches.<br />
      Get the answers you need instantly.<br />
      Onistep brings all the guidance you need right to your screen.<br />
      No more endless searches.
    </>
  );

export default function Price(){
    return (
        <div className="mt-20">
            <h1 className='text-7xl font-normal text-white text-center font-FjallaOne mt-8 mb-6'> Get the perfect software assistant </h1>
            <p className='text-2xl font-bold text-white text-center font-varela mb-10 mt-10'> Find the perfect fit for your Needs</p>
            <div className="w-full grid lg:grid-cols-3 lg:grid-rows-1 grid-cols-1 gap-10 p-10">
                <PricingCard title="Lite" subtitle="Perfect for getting started with basic guidance." price="Free" features={['Software guidance - 10 tutorial per day','Onistep library','Course creation','Team management']} buttonText="Enroll now"/>
                <PricingCard title="Starter" subtitle="Your go-to for personalized software help and learning. " price="12.99$" features={['Software guidance - 200 tutorial per day','Onistep library','Course creation','Team management']} buttonText="Enroll now"/>
                <PricingCard title="Business" subtitle="Unlock full functionality for teams and creators. " price="39.99$" features={['Software guidance - Unlimited','Onistep library','Course creation','Team management']} buttonText="Enroll now"/>
            </div>
            <h1 className='text-7xl font-normal text-white text-center font-FjallaOne mt-8 mb-6'>A small Price for a great value</h1>
            <p className='text-2xl font-bold text-white text-center font-varela  mt-10'>These Prices wont ever change</p>
            <div className="p-10">
                <Container props={{videoUrl:"./assets/bonnetaille.png", header:"Twice more accurate than GPT-4o", description:descriptionMajor ,imageRight:true }} />
            </div>
            <div className="text-center text-white">
                <p className="font-medium text-2xl font-varela">What are you waiting for?</p>
                <div className="h-10"></div>
                    <p className="font-normal text-5xl font-FjallaOne mb-8">Try it yourself!</p>
                <div className="mt-15 bg-gradient-to-r from-[#6A30B2] to-[#170D44] relative p-6 rounded-t-full">
                    <Btn text="Download now" />
                </div>
            </div>
        </div>
    )
}
