import Filter from "../Filter/Filter"
import ContentContainer from "../Reusables/ContentContainer"
import HeroSection from "./HeroSection"
import Recents from "./Recents"
import AdCard from "./adCard"

const Home = () => {
  return (
    <ContentContainer>
      <HeroSection />
      <Filter />
      <Recents/>
      <AdCard/>
      <Recents/>
    </ContentContainer>
  )
}
export default Home
