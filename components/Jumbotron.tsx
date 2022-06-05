import Image from "next/image";

const Jumbotron = () => {
    return (
        <div className="bg-theme-blue p-4 border-b">
            <div className="container mx-auto flex justify-between items-center">
                <div className="py-20">
                    <h1 className="text-4xl md:text-5xl xl:text-6xl font-kanit mb-8">
                        Stay curious.
                    </h1>
                    <p className="text-white text-xl md:text-2xl xl:text-3xl mb-6">
                        Discover stories, thinking, and expertise <br />
                        from writers on any topic.
                    </p>
                    <button className="bg-theme-brown-dark px-10 py-2 rounded-2xl font-black">
                        Start Reading
                    </button>
                </div>
                <div className="hidden md:block rounded-full">
                    <Image
                        src="/jumbotron-img.png"
                        alt="decentralised"
                        width={500}
                        height={500}
                    />
                </div>
            </div>
        </div>
    );
};

export default Jumbotron;
