import Container from "./container";
import mj from "../../public/manoja.png";
import Image from "next/image";


const Section = () => {
    return (
        <>
            <Container className="flex flex-wrap  mb-10">

                <div className="flex items-end w-full lg:w-1/2">
                    <div className="max-w-2xl mb-8">
                        <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
                            We Are Provide Modern
                            Service Care...
                        </h1>
                        <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
                            No matter where you are in your breast cancer journey, our website provides a range of services to help you make informed decisions about your care.
                        </p>
                    </div>
                </div>

                <div className="flex items-end justify-end w-full lg:w-1/2">
                    <div className="max-w-2xl mb-8">
                        <div className="bg-pink-50  w-30 h-70  shadow-xl flex card text-grey-darkest rounded-lg">
                                <div className="w-full flex flex-col">
                                    <div className="p-4 pb-0 flex-1">
                                        <h3 className=" mb-1  text-4xl text-grey-darkest font-bold mb-5">Mammogram</h3>

                                        <span className="text-md text-gray-800">
                                        Our website also features a malignant or benign tumor prediction tool, which uses artificial
                                            intelligence and machine learning algorithms to analyze mammogram images and
                                            identify potentially cancerous lesions. Early detection is crucial in breast cancer,
                                            and this tool can help identify tumors at an early stage, when they are most treatable.
                                        </span>

                                    </div>
                                    <div className="bg-grey-lighter p-3 flex items-center justify-between transition hover:bg-grey-light">
                                        <i className="fas fa-chevron-right"></i>
                                    </div>
                                </div>
                            <Image

                                src={mj}
                                className={"object-cover w-1/3  h-1/3 rounded-l-sm"}
                                alt="Home Image 3"
                                loading="eager"
                            />
                        </div>



                    </div>
                </div>
            </Container>

        </>
    );
}

export default Section;