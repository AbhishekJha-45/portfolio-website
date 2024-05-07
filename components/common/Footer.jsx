import dynamic from "next/dynamic";
import Link from "next/link";
const InstagramIcon = dynamic(() => import("@mui/icons-material/Instagram"));
const LinkedInIcon = dynamic(() => import("@mui/icons-material/LinkedIn"));
const GitHubIcon = dynamic(() => import("@mui/icons-material/GitHub"));
const Footer = () => {
  return (
    <footer className="footer  border z-10 bg-[#121212]  border-t-[#33353F] border-l-transparent border-r-transparent border-b-transparent text-white">
      <div className=" py-8 flex lg:flex-row flex-col justify-between items-center px-5 lg:px-10">
        <span className="text-2xl font-semibold ">Abhishek</span>
        <ul className="flex gap-x-3 flex-wrap justify-center items-center lg:gap-x-3 mt-2 lg:mt-0">
          <li className="text-3xl">
            <Link
              href={
                "https://www.instagram.com/ig_abhishek.45?igsh=MWgydmJxM3RwNjAzYg%3D%3D&utm_source=qr"
              }
              target="__blank"
            >
              <InstagramIcon fontSize="inherit" />
            </Link>
          </li>
          <li className="text-3xl">
            <Link
              target="__blank"
              href={"https://www.linkedin.com/in/abhishek-kr-jha-2552ba243"}
            >
              <LinkedInIcon fontSize="inherit" />
            </Link>
          </li>
          <li className="text-3xl">
            <Link href={"https://github.com/AbhishekJha-45"} target="__blank">
              <GitHubIcon fontSize="inherit" />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
