import Link from "next/link";

export default function NavLink({ links }) {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => (
        <li key={index}>
          <Link
            href={link.path}
            className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
          >
            {link.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
