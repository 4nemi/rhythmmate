import Link from 'next/link';
import Image from 'next/image';

const typecheck_result = () => {
    return (
        <div className="w-full flex-center flex-col bg-beige min-h-screen">
            <h2 className="text-center text-gray-700 mt-10">あなたは...</h2>
            <h1 className="blue_gradient text-[70px] font-bold text-center m-2">
                イルカ
            </h1>
            <h2 className="text-center text-gray-700 m-2">
                タイプです
            </h2>
            
            <Image
                    src="/images/dolphin/dolphin0.png"
                    alt="Your Chronotype"
                    width={450}
                    height={450}
                    className="object-contain m-2 p-4"
            /> 
            <p className="text-center">
                適切な睡眠時間... 7時間
            </p>
            <Link href="/timesetting" className="black_btn m-2">
                目標設定をする
            </Link>
        </div>
    )
}

export default typecheck_result