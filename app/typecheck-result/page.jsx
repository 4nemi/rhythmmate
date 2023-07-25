import Link from 'next/link';
import Image from 'next/image';

const typecheck_result = () => {
    return (
        <section className="w-full flex-center flex-col">
            <h2 className="text-center mt-10">あなたは...</h2>
            <h1 className="head_text text-center m-2">
                イルカ
            </h1>
            <h2 className="text-center m-2">
                タイプです
            </h2>
            <p className="text-center m-5">
                イルカタイプの特徴: 
                <br />
                早起きが得意で、リスクを取る性格です。
            </p>
            <Image
                    src="/images/dolphin5.jpg"
                    alt="Promptopia Logo"
                    width={450}
                    height={450}
                    className="object-contain m-10"
            /> 
            <p className="text-center m-2">
                適切な睡眠時間: 7時間
            </p>
            <Link href="/timesetting" className="black_btn">
                次へ
            </Link>
        </section>
    )
}

export default typecheck_result