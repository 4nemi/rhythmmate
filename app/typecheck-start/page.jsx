import Link from 'next/link';
import Image from 'next/image';

const typecheck_start = () => {
    return (
        <section className="w-full flex-center flex-col">
            <h1 className="head_text text-center m-4">
                Chronotype Check
                <br />
            </h1>
            <h2 className="desc text-center">
                自分のタイプを知る
            </h2>
            <p className="text-center">
                あなたに合った生活スタイルの生き物タイプを知りましょう!
            </p>
            <Image
                    src="/images/undraw_medicine_b-1-ol.svg"
                    alt="Promptopia Logo"
                    width={500}
                    height={1000}
                    className="object-contain m-10"
            /> 
            <Link href="/typecheck" className="black_btn">
                次へ
            </Link>
        </section>
    )
}

export default typecheck_start