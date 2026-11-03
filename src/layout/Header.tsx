
import { useCallback, useState } from "react";
import Nav from '../component/Nav'
import Welcome from '../component/Welcome'
import Hero from './Hero'

const Header = () => {
  const [navIntroDone, setNavIntroDone] = useState(false);
  const handleNavIntroComplete = useCallback(() => {
    setNavIntroDone(true);
  }, []);

  return (
    <header className='relative min-h-screen'>
      <Nav onIntroComplete={handleNavIntroComplete} />
      <Welcome className='absolute' />
      <Hero startIntro={navIntroDone} />
    </header>
  )
}

export default Header
