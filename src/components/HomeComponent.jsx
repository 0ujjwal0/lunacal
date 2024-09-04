import LeftSection from "./leftSection/leftSection"
import RightSection from "./rightSection/RightSection"

const HomeComponent = () => {
  return (
    <div className="bg-gradient-to-b from-gray-700 to-gray-800 w-screen h-screen flex justify-center ">
     <LeftSection/>
     <RightSection/>
    </div>
  )
}

export default HomeComponent