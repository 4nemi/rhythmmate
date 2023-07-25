import Link from 'next/link';
import Image from 'next/image';

const Home = () => {
    return (
        <section className="w-full flex-center flex-col">
            <h1 className="head_text text-center m-4">
                RhythmMate
                <br />
            </h1>
            <h2 className="desc text-center">
                はじめに
            </h2>
            <p className="text-center">
                RhythmMateはキャラクターと一緒に、生活リズムを調えるためのアプリです。
            </p>
            <Image
                    src="/images/undraw_dog_c7i6.svg"
                    alt="Promptopia Logo"
                    width={1000}
                    height={1000}
                    className="object-contain m-10"
            /> 
            <Link href="/typecheck-start" className="black_btn">
                次へ
            </Link>
        </section>
    )
}

export default Home