import Link from "next/link";

interface NavMenuProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

function NavMenu({ isOpen, setIsOpen }: NavMenuProps) {
  return (
    <nav>
      <ul
        className={`
        ${isOpen ? "flex" : "hidden"}
        flex-col gap-5 capitalize font-heading font-[550] tracking-[1px]
        fixed top-[52px] left-0 right-0 w-full bg-surface text-primary p-6 z-40
        lg:flex lg:flex-row lg:relative lg:top-0 lg:w-auto lg:p-0 lg:bg-transparent lg:text-white lg:gap-8
      `}>
        <li>
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="lg:hover:text-primary transition-colors">
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/stores"
            onClick={() => setIsOpen(false)}
            className="lg:hover:text-primary transition-colors">
            Stores
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavMenu;
