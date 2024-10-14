/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

export default function Home() {
  return (
    
    <div className="flex items-center justify-center h-screen"> {/* Use different margin for mobile and desktop */}


      <div className="flex flex-col items-center p-4">
        <div className="flex-shrink-0">
          <img
            src="https://id-static.z-dn.net/files/d38/ecc3220d6fa0d845b0270e27f9e52424.jpg"
            alt="Profile Photo"
            className="rounded-full w-28 h-28 md:w-40 md:h-40 object-cover mb-10" // Keep this for spacing below the image
          />
        </div>

        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 mb-2 animate-fade-in">
            Hello, My Name Muhammad Rifqi Kurniawan
          </h1>
          <p className="text-base md:text-lg font-light text-gray-300 animate-fade-in-delayed mb-2 px-2">
            I am a fullstack developer, nice to meet you. I am passionate about mobile technologies and open source.
          </p>
          <p className="text-base md:text-lg font-light text-gray-300 animate-fade-in-delayed mb-6 px-2"> {/* Increased mb-4 to mb-6 for more space */}
            I enjoy learning new things and working on interesting projects.
          </p>
          <Link href="/about" className="inline-block px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
            More
          </Link>
        </div>
      </div>
    </div>
  );
}
