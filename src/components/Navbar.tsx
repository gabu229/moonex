import { Button } from "./ui/button";

function Navbar() {
  return (
    <header className="absolute w-full max-w-[100vw] min-h-24 px-2 md:px-14 xl:px-20 py-3 md:py-8 flex justify-between items-center">
      <div className="flex-none flex gap-3">
        <img src="/logo.svg" className="max-h-12 w-auto" />
        <img src="/letterwork.svg" className="max-h-12 w-auto" />
      </div>
      <nav className="">
        <ul className="list-none flex gap-14 *:text-sm *:font-semibold">
            <li><a href="#" className="">Home</a></li>
            <li><a href="#" className="">About us</a></li>
            <li><a href="#" className="">Roadmap</a></li>
            <li><a href="#" className="">FAQs</a></li>
            <li><a href="#" className="">Contact Us</a></li>
        </ul>
      </nav>
      <div className="flex-none">
        <Button>
            Connect wallet
        </Button>
      </div>
    </header>
  );
}

export default Navbar;
