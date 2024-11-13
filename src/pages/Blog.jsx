// import Navbar
// import Navbar from "../section/Navbar";
// import Layout from "../Layout";

export default function Blog() {
  const blogs = [
    {
      id: 1,
      title: "UI Interactions of the week",
      date: "12th Oct, 2024",
      category: "Design, Interaction",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
      id: 2,
      title: "Designing a dashboard in Figma",
      date: "12th Oct, 2024",
      category: "Figma, Design",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
      id: 3,
      title: "Creating pixel perfect icons",
      date: "12th Oct, 2024",
      category: "Icon Design, Figma",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
      id: 4,
      title: "Designing a dashboard in Figma",
      date: "12th Oct, 2024",
      category: "Figma, Design",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
  ];
  return (
    <div className="sm:px-10  w-2/3 md:mx-auto">
      {blogs.map((map) => {
        return (
          <div key={map.id} className="bg-white flex-1 rounded-lg p-16">
            <h1 className="text-3xl font-semibold">{map.title}</h1>
            <div className="flex items-center gap-8 mt-6 text-xl">
              <span>{map.date}</span>
              <span className="h-6 w-[2px] rounded bg-black"></span>
              <span>{map.category}</span>
            </div>
            <p className="text-xl mt-6">{map.description}</p>
          </div>
        );
      })}
    </div>
  );
}
