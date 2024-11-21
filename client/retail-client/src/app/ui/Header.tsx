import Link from 'next/link';
import { metadata } from '@/app/layout'
import { SearchBar } from './Header/SearchBar';

const Header = () => {
    return (
        <header className='h-40 bg-blue-700 flex-auto flex flex-row items-center'>
            <div className='w-1/5'></div>
            <div className='flex w-3/5 flex-grow gap-3'>
                <h1 className='text-zinc-100 text-2xl font-bold w-1/6 flex flex-row items-center'>{"" + metadata.title}</h1>
                <SearchBar placeholder='Tìm vật phẩm...' />
            </div>
            <div className='w-1/5'></div>
        </header>
    )
}

export default Header;