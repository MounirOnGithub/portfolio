import stitch from "../../images/stich.jpeg"
import Image from "next/image"

export default function JobTitle() {
    return (
        <div className="min-h-screen grid grid-cols-2 items-center text-center">
            <div className="
                flex flex-col text-left mx-auto
                text-7xl
            ">
                Frontend,
                <div>
                    Web Developer
                </div>
                <div className="font-bold my-3 ">
                    Mounir
                </div>
            </div>

            <div className="flex mx-auto">
                <div className="rounded-full flex items-center justify-center">
                    <Image className="border border-8 border-sky-500 rounded-full" src={stitch} alt="profile" />
                </div>
            </div>
        </div>
    )
}