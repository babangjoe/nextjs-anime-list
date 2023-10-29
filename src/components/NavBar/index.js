import Link from 'next/link'
import InputSearch from './InputSearch'


const NavBar = () => {
  return (
    <header className='bg-green-200'>
        <div className='flex flex-col justify-between p-4 align-middle md:flex-row'>
            <Link href={'/'} className='text-3xl font-bold'>THE <span className='text-green-700'>ANIME</span> LIST</Link>
            <InputSearch />
        </div>
    </header>
    
  )
}

export default NavBar