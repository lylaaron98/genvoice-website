import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="flex justify-between p-4 bg-gray-200">
            <Link href="/">Home</Link>
            <Link href="/login">Login</Link>
            <Link href="/settings">Settings</Link>
        </nav>
    );
};

export default Navbar;
