'use client';
import Navbar from '../components/Navbar/Navbar';
import './globals.css';
import { Inter } from 'next/font/google';
import AuthProvider from '../components/AuthProvider/AuthProvider';
import { usePathname } from 'next/navigation';
import Footer from '../components/Footer/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
    const pathname = usePathname();
    return (
        <html lang="en">
            <body className={inter.className} suppressHydrationWarning={true}>
                <AuthProvider>
                    {/* <div className="w-screen h-screen overflow-x-hidden bg-gray-800 text-white"> */}
                    {pathname.includes('/seller') ? (
                        <div className="w-screen h-screen overflow-x-hidden">
                            <ToastContainer />
                            {children}
                        </div>
                    ) : (
                        <div className="w-screen h-screen overflow-x-hidden">
                            <ToastContainer />
                            <Navbar />
                            {children}
                            <Footer />
                        </div>
                    )}
                </AuthProvider>
            </body>
        </html>
    );
}
