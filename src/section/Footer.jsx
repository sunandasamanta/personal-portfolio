import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
    return (
        <div className=" w-full py-12">
            <div className="flex justify-center gap-6 text-4xl">
                <FaFacebook className="hover:cursor-pointer hover:text-grey" />
                <a href="https://instagram.com/bakshi_devs" target="_blank">
                    <FaInstagram className="hover:cursor-pointer hover:text-grey" />
                </a>
                <a href="https://x.com/bakshi_devs/" target="_blank">
                    <FaTwitter className="hover:cursor-pointer hover:text-grey" />
                </a>
                <a href="https://github.com/sunandasamanta" target="_blank">
                    <FaGithub className="hover:cursor-pointer hover:text-grey" />
                </a>
            </div>
            <footer className="mt-8">
                <p className="text-grey text-center">
                    &copy; 2024 by{" "}
                    <span className="text-dark">
                        Bakshi Devs/Creative Studio
                    </span>
                </p>
            </footer>
        </div>
    );
}
