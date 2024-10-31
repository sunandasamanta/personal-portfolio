import React from "react";

export default function RecentPosts() {
    return (
        <div className="bg-light px-36 py-10 ">
            <div className="flex w-full justify-between">
                <span className="text-2xl text-secondary">Recent posts</span>
                <span className="text-lg">View all</span>
            </div>
            <div className="flex flex-wrap gap-10 my-10">
                <div className="bg-white flex-1 rounded-lg p-16">
                    <h1 className="text-3xl font-semibold">
                        Making a design system from scratch
                    </h1>
                    <div className="flex gap-8 mt-6 text-xl">
                        <span>12th Oct, 2024</span>
                        <span className="h-6 w-[2px] rounded bg-black"></span>
                        <span>Design, Pattern</span>
                    </div>
                    <p className="text-xl mt-6">
                        Amet minim mollit non deserunt ullamco est sit aliqua
                        dolor do amet sint. Velit officia consequat duis enim
                        velit mollit. Exercitation veniam consequat sunt nostrud
                        amet.
                    </p>
                </div>
                <div className="bg-white flex-1 rounded-lg p-16">
                    <h1 className="text-3xl font-semibold">
                        Creating pixel perfect icons in Figma
                    </h1>
                    <div className="flex gap-8 mt-6 text-xl">
                        <span>12th Oct, 2024</span>
                        <span className="h-6 w-[2px] rounded bg-black"></span>
                        <span>Figma, Icon Design</span>
                    </div>
                    <p className="text-xl mt-6">
                        Amet minim mollit non deserunt ullamco est sit aliqua
                        dolor do amet sint. Velit officia consequat duis enim
                        velit mollit. Exercitation veniam consequat sunt nostrud
                        amet.
                    </p>
                </div>
            </div>
        </div>
    );
}
