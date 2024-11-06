import Layout from './layout';
import './globals.css';
import Heroection from './components/Heroection';
import FeatureSection from './components/FeatureSection';
import PlatformWorking from './components/PlatformWorking';
import SuccessStories from './components/SuccessStories';
import Advosors from './components/Advosors';
import Footer from './components/Footer';



export default function Home() {
  return (
    <Layout>
      <div className="min-h-screen ml-0 flex flex-col">
        <main className="flex-grow">
          <Heroection/>
          <FeatureSection/>
          <PlatformWorking/>
          <SuccessStories/>
          <Advosors/>
      
        </main>
        <Footer/>
      </div>
    </Layout>
  );
}
