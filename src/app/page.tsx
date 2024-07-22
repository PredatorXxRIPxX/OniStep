import Mainpage from "./_components/@mainpage/mainpage";
import InfoPages from "./_components/@infoPage/page";
import { Suspense } from "react";


export default function Home() {


  return (
    <>
      <Mainpage />
      <Suspense fallback={<div>Loading...</div>}>
        <InfoPages />
      </Suspense>
    </>
  );
}