import { metadata } from '@/app/layout'
import { SearchBar } from './Header/SearchBar';
import { NavLinks } from './Header/NavLinks';

const Header = () => {
    return (
        <header className='h-20 bg-gradient-to-b from-blue-700 to-indigo-700 flex-auto flex flex-row items-center pt-14 pb-10'>
            <div className='w-1/5' />
            <div className='flex w-3/5 flex-grow gap-3'>
                <h1 className='text-zinc-100 text-2xl font-bold w-1/6 flex flex-row items-center'>{"" + metadata.title}</h1>
                <SearchBar placeholder='Searching...' />
            </div>
            <NavLinks />
        </header>
    )
}

export default Header;