import { FaTelegram } from "react-icons/fa";
import { FaRedditAlien } from "react-icons/fa6";
import { PiTwitterLogo } from "react-icons/pi";

function Footer() {
  return (
    <footer>
      <section className="w-full min-h-[30svh] flex flex-col md:flex-row gap-10 md:justify-between md:items-center">
        <div className="flex-none flex flex-col gap-3 justify-start items-start md:items-center">
          <img src="/logo.svg" className="max-h-12 w-auto" />
          <img src="/letterwork.svg" className="max-h-12 w-auto" />
        </div>

        <nav className="">
          <ul className="list-none flex flex-col md:flex-row gap-2 md:gap-14 *:text-base *:font-semibold">
            <li>
              <a href="#" className="">
                About us
              </a>
            </li>
            <li>
              <a href="#" className="">
                Roadmap
              </a>
            </li>
            <li>
              <a href="#" className="">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" className="">
                Contact Us
              </a>
            </li>
          </ul>
        </nav>

        <div className="flex-none py-2">
          <div className="w-full">
            <p className="text-base md:text-lg xl:text-xl font-bold md:text-center">
              Contact <span className="text-[var(--gold)]">Us</span>
            </p>
          </div>
          <div className="w-full mt-3 flex justify-start md:justify-between gap-5">
            <a href="#">
              <FaTelegram size={28} />
            </a>
            <a href="#">
              <FaRedditAlien size={28} />
            </a>
            <a href="#">
              <PiTwitterLogo size={28} />
            </a>
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
