// importing assets
import dashboard from "../assets/dashboard.png";
import portrait from "../assets/portrait.png";
import malayalam from "../assets/malayalam.png";

export default function FeaturedWorks() {
    const works = [
        {
            id: 1,
            img: dashboard,
            title: "Designing Dashboards",
            year: 2022,
            category: "Dashboard",
            description:
                "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia a duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        },
        {
            id: 2,
            img: portrait,
            title: "Vibrant Portraits of 2020",
            year: 2020,
            category: "Illustration",
            description:
                "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        },
        {
            id: 3,
            img: malayalam,
            title: "36 Days of Malayalam type",
            year: 2018,
            category: "Typography",
            description:
                "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        },
    ];

    return (
        <div className="px-36 py-12 text-dark">
            <h2 className="text-3xl font-medium mb-12">Featured Works</h2>
            {works.map((work) => {
                return (
                    <div key={work.id}>
                        <div key={work.id} className="flex">
                            <div className="flex-1">
                                <img src={work.img} alt="" />
                            </div>
                            <div className="flex-[3] px-12">
                                <h1 className="text-4xl font-medium">
                                    {work.title}
                                </h1>
                                <div className="flex gap-6 my-4">
                                    <button className="px-3 text-2xl bg-[#142850] text-white font-medium rounded-xl">
                                        {work.year}
                                    </button>
                                    <span className="text-grey text-2xl">
                                        {work.category}
                                    </span>
                                </div>
                                <p className="text-2xl">{work.description}</p>
                            </div>
                        </div>
                        <hr className="text-grey my-8" />
                    </div>
                );
            })}
        </div>
    );
}
