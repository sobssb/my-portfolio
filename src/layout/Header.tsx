
import Nav from '../component/Nav'
import Welcome from '../component/Welcome'
import Hero from './Hero'

const Header = () => {
  return (
    <header className='relative min-h-screen'>
      <Nav />
      <Welcome className='absolute' />
      <Hero />
    </header>
  )
}

export default Header
