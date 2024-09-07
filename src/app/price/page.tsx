import Container from "../_components/@container/container";
import PricingCard from "../_components/@pricingCard/pricingcard";
import Btn from "../_components/btn/btn";

const descriptionMajor = (
    <>
      Tried GPT-4 and felt lost when it came to software help? We’ve all been there. Onistep is built different. Unlike general AI, our assistant is laser-focused on your tools. With a massive internal database tailored to your software, Onistep doesn’t hallucinate buttons or paths—it knows your version, your setup, and stays updated with the latest features. 
    </>
);

const checkDecoration = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-7 text-[#6A30B2] font-semibold mr-2"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 12.75l6 6 9-13.5"
        />
    </svg>
);

const withCheckDecoration = (text:any, isLineThrough = false) => {
    return (
        <p className={isLineThrough ? "line-through" : ""}>
            {isLineThrough ? <p>{text}</p> : <p className="flex" >{checkDecoration}{text}</p>}
        </p>
    );
};

export default function Price() {
    return (
        <div className="mt-20">
            <h1 className="text-7xl font-normal text-white text-center font-FjallaOne mt-8 mb-6">
                Get the perfect software assistant
            </h1>
            <p className="text-2xl font-bold text-white text-center font-varela mb-10 mt-10">
                Find the perfect plan for your Need
            </p>
            <div className="w-full grid lg:grid-cols-3 lg:grid-rows-1 grid-cols-1 gap-10 p-10">
                <PricingCard
                    title="Lite"
                    subtitle="Perfect for getting started with basic guidance."
                    price="Free"
                    includes={[
                        <p key={0} >Software guidance - 10 tutorials per day</p>,
                        <p key={1} className="line-through" >OniStep library</p>,
                        <p key={2} className="line-through" >Course creation</p>,
                        <p key={3} className="line-through" >Team management</p>
                    ]}
                    features={[
                        withCheckDecoration("Guided navigation through Software"),
                        withCheckDecoration("Access to dozens of courses", true),
                        withCheckDecoration("Advanced course creation tools", true),
                        withCheckDecoration("Course management for groups", true)
                    ]}
                    buttonText="Enroll now"
                />
                <PricingCard
                    title="Starter"
                    subtitle="Your go-to for personalized software help."
                    price="$12.99"
                    includes={[
                        <p key={4} >Software guidance - 200 tutorials per day</p>,
                        <p key={5} >Onistep library</p>,
                        <p key={6} className="line-through" >Course creation</p>,
                        <p key={7} className="line-through" >Team management</p>
                    ]}
                    features={[
                        withCheckDecoration("Guided navigation through Software"),
                        withCheckDecoration("Access to dozens of courses"),
                        withCheckDecoration("Advanced course creation tools", true),
                        withCheckDecoration("Course management for groups", true)
                    ]}
                    buttonText="Enroll now"
                />
                <PricingCard
                    title="Business"
                    subtitle="Unlock full functionality for teams and creators."
                    price="$39.99"
                    includes={[
                        <p key={9}>Software guidance - Unlimited tutorials per day</p>,
                        <p key={10} >Onistep library</p>,
                        <p key={11}>Course creation</p>,
                        <p key={12}>Team management</p>
                    ]}
                    features={[
                        withCheckDecoration("Guided navigation through Software"),
                        withCheckDecoration("Access to dozens of courses"),
                        withCheckDecoration("Advanced course creation tools"),
                        withCheckDecoration("Course management for groups")
                    ]}
                    buttonText="Enroll now"
                />
            </div>
            <h1 className="text-7xl font-normal text-white text-center font-FjallaOne mt-8 mb-6">
                Small Price, Great Value
            </h1>
            <p className="text-2xl font-bold text-white text-center font-varela mt-10">
                These Prices won&apos;t ever change
            </p>
            <div className="p-10">
            <Container props={{videoUrl:"./assets/bonnetaille.png", header:"Onistep is Twice as Accurate as GPT-4 on Software-Related Questions!", description:descriptionMajor ,imageRight:true }} />
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
    );
}
