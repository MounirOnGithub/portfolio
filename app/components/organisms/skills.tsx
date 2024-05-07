import Title from "../atoms/title";
import Image from "next/image";
import vuejs from "@/app/images/vue.png";

export default function Skills () {
    return (
        <div className="flex flex-col">
            <Title title="Compétences"/>

            <div className="flex mx-auto space-x-10">
                <Image src={vuejs} alt="Vue.js" width={200} height={200} />
                <Image src={vuejs} alt="Vue.js" width={200} height={200} />
                <Image src={vuejs} alt="Vue.js" width={200} height={200} />
            </div>
        </div>
    )
}