import Container from "../_components/@container/container";
import PricingCard from "../_components/@pricingCard/pricingcard";

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
        <div className="mt-10">
            <h1 className='text-4xl font-bold text-white text-center font-FjallaOne mt-4 mb-6'>A little Price for a greate value</h1>
            <p className='text-xl font-bold text-white text-center font-varela mb-10'>onistep is your guidens</p>
            <div className="w-full grid grid-cols-3 grid-rows-1 gap-10 p-10">
                <PricingCard title="Starter" subtitle="For infividuals" price="Free" features={['Screen recording & cam bubble','Screen recording & cam bubble','Screen recording & cam bubble','Screen recording & cam bubble','Screen recording & cam bubble']} buttonText="take it now!"/>
                <PricingCard title="Business" subtitle="For teams" price="12.99$" features={['Screen recording & cam bubble','Screen recording & cam bubble','Screen recording & cam bubble','Screen recording & cam bubble','Screen recording & cam bubble']} buttonText="take it now!"/>
                <PricingCard title="For scaling teams" subtitle="For Big Project" price="39.99$" features={['Screen recording & cam bubble','Screen recording & cam bubble','Screen recording & cam bubble','Screen recording & cam bubble','Screen recording & cam bubble']} buttonText="take it now!"/>
            </div>
            <div className="p-10">
                <Container props={{videoUrl:"/videos/Unity_Final.mp4", header:"Twice more accurate than GPT-4o", description:descriptionMajor ,imageRight:true }} />
            </div>
        </div>
    )
}