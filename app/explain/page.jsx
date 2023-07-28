import Link from 'next/link';
import Image from 'next/image';

const Explain = () => {
    return (
        <section className="min-h-screen flex flex-center flex-col bg-primary-cyan">
            <Image
                    src="/images/logo.png"
                    alt="Promptopia Logo"
                    width={1000}
                    height={1000}
                    className="object-contain m-10 p-10"
            /> 
            <h2 className="desc">
                はじめに
            </h2>
            <p className="desc text-center m-3">
                RhythmMateはキャラクターと一緒に、<br />
                生活リズムを調えるためのアプリです。
            </p>
            <Link href="/typecheck-start" className="black_btn m-5">
                次へ
            </Link>
        </section>
    )
}

export default Explain