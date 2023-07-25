import Link from 'next/link';
import Image from 'next/image';

const typecheck_start = () => {
    return (
        <section className="min-h-screen flex flex-center flex-col">
            <Image
                    src="/images/undraw_medicine_b-1-ol.svg"
                    alt="Promptopia Logo"
                    width={500}
                    height={500}
                    className="object-contain m-10 p-10"
            /> 
            <h2 className="desc">
                自分のタイプを知る
            </h2>
            <p className="desc text-center m-3">
                あなたに合った生活スタイルの<br />
                生き物タイプを知りましょう!
            </p>
            <Link href="/typecheck" className="black_btn m-5">
                次へ
            </Link>
        </section>
    )
}

export default typecheck_start