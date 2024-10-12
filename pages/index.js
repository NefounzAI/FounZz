/* eslint-disable @next/next/no-img-element */
export default function Home() {
  return (
    <div className="flex items-center justify-center mt-auto p-3 md:p-5">
      <div className="flex flex-col-reverse md:flex-row items-center justify-center">
        <div className="mt-4 md:mt-0 md:mr-10">
          <img
            src="https://id-static.z-dn.net/files/d38/ecc3220d6fa0d845b0270e27f9e52424.jpg"
            alt="Profile Photo"
            className="rounded-full w-28 h-28 md:w-40 md:h-40 object-cover"
          />
        </div>

        <div className="text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 mb-2 animate-fade-in">
            Hello, my name is Muhammad Rifqi Kurniawan
          </h1>
          <p className="text-base md:text-lg font-light text-gray-300 animate-fade-in-delayed">
            I am a fullstack developer, nice to meet you.
          </p>
        </div>
      </div>
    </div>
  );
}
