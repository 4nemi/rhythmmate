import Link from 'next/link';
import Image from 'next/image';

const namesetting = () => {
    return (
        <section className="w-full flex-center flex-col">
            <Image
                    src="/images/dolphin1.jpg"
                    alt="Your Partner"
                    width={450}
                    height={450}
                    className="object-contain m-10"
            /> 
        </section>
    )
}

export default namesetting