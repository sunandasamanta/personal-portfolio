import React from "react";

export default function Contact() {
    return (
        <div className="">
            <div className="flex flex-col items-center justify-center bg-gray-100 text-gray-900">
                <h1 className="text-4xl font-bold mb-4">Contact</h1>
                <p className="text-lg mb-2">Contact me at:</p>
                <p className="text-sm text-gray-600">
                    Email:{" "}
                    <i>
                        {" "}
                        <a href="mailto:samantasunanda724@gmail.com">
                            samantasunanda724@gmail.com
                        </a>
                    </i>
                </p>
                <p className="text-sm text-gray-600">
                    Phone:{" "}
                    <i>
                        {" "}
                        <a href="tel:+919609628891">+91 9609628891</a>
                    </i>
                </p>
                <p className="text-sm text-gray-600">
                    Address:{" "}
                    <i>
                        {" "}
                        <a href="https://goo.gl/maps/7L8GvZ5JQ6s8mQ7e8">
                            Bhubaneswar, Odisha, India
                        </a>
                    </i>
                </p>
            </div>
        </div>
    );
}
