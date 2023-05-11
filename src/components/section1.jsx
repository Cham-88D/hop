import Image from "next/image";
import Container from "./container";
import sectionImg from "../../public/h2.png";

const Section = () => {
    return (
        <>
            <Container className="flex flex-wrap mb-24">
                <div className="flex items-startr justify-start w-full lg:w-1/2">
                    <div className="">
                        <Image
                            src={sectionImg}
                            width="616"
                            height="617"
                            className={"object-cover"}
                            alt="Home Image 2"
                            loading="eager"
                        />
                    </div>
                </div>
                <div className="flex items-end w-full lg:w-1/2">
                    <div className="max-w-2xl mb-8">
                        <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
                            Breast Cancer
                        </h1>
                        <h3 className="py-5 font-semibold text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
                            About Breast Cancer
                        </h3>
                        <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
                            Breast cancer occurs when a mutation allows breast cells to grow without order or control and form a tumor.
                        </p>
                        <h3 className="py-5 font-semibold text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
                            What is breast cancer
                        </h3>
                        <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
                            Breast cancer starts in the breast tissue when mutated cells grow out of control, eventually creating a mass, or tumor.
                        </p>

                        <div className="flex flex-col items-end space-y-3 sm:space-x-4 sm:space-y-0 sm:items-end sm:flex-row">
                            <a
                                href="/about"
                                target="_self"
                                rel="noopener"
                                className="px-8 py-2 text-lg font-medium text-center text-white bg-pink-400 rounded-full ">
                                Learn More
                            </a>

                        </div>
                    </div>
                </div>
            </Container>

        </>
    );
}

export default Section;