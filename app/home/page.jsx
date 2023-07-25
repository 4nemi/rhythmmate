import Link from 'next/link';
import Image from 'next/image';

import Nav from "@/components/Nav";
import UnderNav from "@/components/UnderNav";

const Home = () => {
    return (
        <div>
            <Nav />
            <div className="flex justify-center">
                <Image
                    src="/images/dolphin/dolphin1.png"
                    alt="Your Partner"
                    width={450}
                    height={450}
                    className="object-contain m-10"
                /> 
            </div>
            <UnderNav /> 
        </div>
    )
}

export default Home