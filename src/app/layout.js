import Image from 'next/image';
import '@/app/globals.css'; 

export const metadata = {
  title: 'Real Estate App',
  description: 'AI-powered real estate insights',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link
          href="https://fonts.googleapis.com/css2?family=Urbanist:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
          rel="stylesheet"
        />
      </head>
      <body className='font-urbanist'>
      
        {children}
      
      </body>
    </html>
  );
}
