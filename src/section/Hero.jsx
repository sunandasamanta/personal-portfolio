//importing assets
import profile from "../assets/profile.png";

export default function Hero() {
    return (
        <div className="grid grid-cols-5 py-16 px-36 text-[#21243D]">
            <div className="col-span-3 self-center">
                <h1 className="md:text-7xl sm:text-4xl font-bold my-16">
                    Hi, I am John, <br /> Creative Technologist
                </h1>
                <p className="text-3xl sm:text-xl">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cupiditate atque sint repellendus dignissimos perferendis
                    commodi aut. Libero eum perferendis impedit, tempore quia
                    dolorem minus. Vitae.
                </p>
                <button className="my-10 px-6 py-5 text-white text-3xl sm:text-xl bg-primary rounded">
                    Download Resume
                </button>
            </div>
            <div className="col-span-2">
                <img className="" src={profile} alt="profile" />
            </div>
        </div>
    );
}
