import Link from 'next/link';

export const NavLinks = () => {
    const LINK_STYLE = 'text-slate-200 underline';

    return (
        <div className='flex flex-row gap-3 pr-10'>
            <Link className={LINK_STYLE} href={'/'}>Home</Link>
            <Link className={LINK_STYLE} href={'/blogs'}>Blogs</Link>
            <Link className={LINK_STYLE} href={'/tools'}>Tools</Link>
            <Link className={LINK_STYLE} href={'/about'}>About</Link>
        </div>
    )
}