import Title from "../atoms/title";
import Image from "next/image";
import vuejs from "@/app/images/vue.png";
import node from "@/app/images/node.png";
import js from "@/app/images/js.png";
import html from "@/app/images/html.png";
import css from "@/app/images/css.png";
import gitlab from "@/app/images/gitlab.png";
import typescript from "@/app/images/typescript.png";
import vscode from "@/app/images/vscode.png";
import nestjs from "@/app/images/nestjs.png";

export default function Skills () {
    return (
        <div className="flex flex-col">
            <Title title="Compétences"/>

            <div className="flex mx-auto space-x-10 mt-10">
                <Image src={vuejs} alt="Vue.js" width={200} height={200} />
                <Image src={node} alt="Node.js" width={200} height={200} />
                <Image src={js} alt="js" width={200} height={200} />
                <Image src={html} alt="HTML" width={200} height={200} />
                <Image src={css} alt="CSS" width={200} height={200} />
            </div>

            <div className="flex mx-auto space-x-10 mb-10">
                <Image src={gitlab} alt="Gitlab" width={200} height={200} />
                <Image src={typescript} alt="typescript" width={200} height={200} />
                <Image src={vscode} alt="vscode" width={400} height={200} />
                <Image src={nestjs} alt="nestjs" width={200} height={200} />
            </div>
        </div>
    )
}