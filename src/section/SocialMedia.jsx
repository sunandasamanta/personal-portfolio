import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

export default function SocialMedia() {
    return (
        <div className="mx-auto w-max py-12">
            <div className="flex gap-6">
                <FaFacebook className="text-4xl" />
                <FaInstagram className="text-4xl" />
                <FaTwitter className="text-4xl" />
                <FaGithub className="text-4xl" />
            </div>
            <footer className="mt-8">
                <p className="text-grey text-center">
                    &copy; 2024 by <span className="text-dark">Bakshi Devs/Creative Studio</span>
                </p>
            </footer>
        </div>
    );
}
