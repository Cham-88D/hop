import Image from "next/image";
import Container from "./container";
import heroImg from "../../public/h1.png";

const Hero = () => {
    return (
        <>
            <Container className="flex flex-wrap mb-24">
                <div className="flex items-center w-full lg:w-1/2">
                    <div className="max-w-2xl mb-8">
                        <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
                            We are ready to help take care your breast cancer health
                        </h1>
                        <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
                            Our mission is to help people make sense of the complex medical and personal information about breast health and breast cancer, so they can make the best decisions for their lives.
                        </p>

                        <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
                            <a
                                href="/about"
                                target="_self"
                                rel="noopener"
                                className="px-8 py-2 text-lg font-medium text-center text-white bg-pink-400 rounded-full ">
                                About Us
                            </a>

                        </div>
                    </div>
                </div>
                <div className="flex items-end justify-end w-full lg:w-1/2">
                    <div className="">
                        <Image
                            src={heroImg}
                            width="616"
                            height="617"
                            className={"object-cover"}
                            alt="Home Image 1"
                            loading="eager"
                        />
                    </div>
                </div>
            </Container>

        </>
    );
}

export default Hero;