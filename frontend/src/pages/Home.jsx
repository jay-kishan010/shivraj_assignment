
import Main from '../components/Main'
import FeaturesGrid from '../components/FeaturesGrid'
import FeaturesCauses from '../components/FeaturesCauses'
import ImpactSection from '../components/ImpactSection'
import Intro from '../components/Home/Intro'
import Testimonial from '../components/Home/Testimonial'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Main/>
      <FeaturesGrid/>
      <FeaturesCauses/>
      <ImpactSection/>
      <Intro/>
      {/* <Testimonial/> */}
      <Footer/>
    </div>
  )
}

export default Home
