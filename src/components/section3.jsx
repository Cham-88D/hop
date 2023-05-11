import Container from "./container";
import rs from "../../public/risk.png";
import ch from "../../public/chatbot.png";
import su from "../../public/survival.png";
import Image from "next/image";


const Section = () => {
    return (
        <>
            <Container className=" w-full mb-24">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="flex flex-col justify-start items-start p-4">
                        <div className="max-w-sm rounded overflow-hidden shadow-xl z-10 bg-pink-50 ">
                            <Image
                                src={rs}
                                className={"bg-cover w-1/2 h-1/2 rounded-l-sm px-2"}
                                alt="Home Image 3"
                                loading="eager"
                            />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">Risk</div>
                                <p className="text-gray-700 text-base">
                                    Our risk prediction tool uses the latest scientific research and medical data to estimate your risk of developing breast cancer, based on factors such as age, family history, and lifestyle factors. This information can help you take proactive steps to reduce your risk and improve your overall health.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center p-4">
                        <div className="max-w-sm rounded overflow-hidden shadow-xl z-10 bg-pink-50  ">
                            <Image
                                src={su}
                                className={"bg-cover   w-1/2 h-1/2 rounded-l-sm px-2"}
                                alt="Home Image 3"
                                loading="eager"
                            />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">Survival</div>
                                <p className="text-gray-700 text-base">
                                    Our risk prediction tool uses the latest scientific research and medical data to estimate your risk of developing breast cancer, based on factors such as age, family history, and lifestyle factors. This information can help you take proactive steps to reduce your risk and improve your overall health.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-end items-end p-4">
                        <div className="max-w-sm rounded overflow-hidden shadow-xl z-10 bg-pink-50 ">
                            <Image
                                src={ch}
                                className={"bg-cover   w-1/2 h-1/2 rounded-l-sm px-2"}
                                alt="Home Image 3"
                                loading="eager"
                            />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">Chat bot</div>
                                <p className="text-gray-700 text-base">
                                    Our risk prediction tool uses the latest scientific research and medical data to estimate your risk of developing breast cancer, based on factors such as age, family history, and lifestyle factors. This information can help you take proactive steps to reduce your risk and improve your overall health.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>

        </>
    );
}

export default Section;

