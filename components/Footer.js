/* eslint-disable @next/next/no-html-link-for-pages */

import NowPlaying from "./NowPlaying";

export default function Footer() {
  return (
    <footer className="bg-black">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          {/* NowPlaying Section */}
          <div className="mb-6 md:mb-0 md:ml-28"> {/* Added ml-8 for left spacing */}
            <a href="/" className="flex items-center">
              <div className=" font-mono font-bold text-orange-700 dark:text-orange-600">
                  <NowPlaying />
              </div>
            </a>
          </div>

          {/* Navbar Sections */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 sm:gap-6"> {/* Adjusted grid-cols */}
            {/* Favorite Games */}
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                Favorite Game
              </h2>
              <ul className="font-medium text-gray-400">
                <li className="mb-4">
                  <a
                    href="https://m.mobilelegends.com/"
                    className="hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Mobile Legends
                  </a>
                </li>
                <li>
                  <a
                    href="https://genshin.hoyoverse.com/id/"
                    className="hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Genshin Impact
                  </a>
                </li>
              </ul>
            </div>

            {/* Follow Us */}
            <div className="ml-12"> {/* Added ml-12 to shift it to the right */}
              <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                Follow Us
              </h2>
              <ul className="font-medium text-gray-400">
                <li className="mb-4">
                  <a
                    href="https://www.instagram.com/zyi.rifqi/"
                    className="hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="/nanti" className="hover:underline">
                    Discord
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-700 sm:mx-auto lg:my-8" />

        {/* Footer Bottom */}
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-400 sm:text-center">
            © {new Date().getFullYear()}{' '}
            <a href="/" className="hover:underline">
              Founz
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
