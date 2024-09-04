import LeftSection from "./leftSection/leftSection"
import RightSection from "./rightSection/RightSection"

const HomeComponent = () => {
  return (
    <div className="bg-gradient-to-b from-[#282c31] to-[#191b1f] w-screen h-screen flex justify-center ">
     <LeftSection/>
     <RightSection/>
    </div>
  )
}

export default HomeComponent