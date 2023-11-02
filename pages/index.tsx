import { Component, ReactNode } from "react";
import Layout from "../app/layout"
import ContactForm from "../app/components/molecules/contact-form";
import ExperiencesSection from "@/app/components/organisms/experiences-section";
import {Experience} from "@/app/types/experience";

export default class Index extends Component {
    experiencesArray: Experience[] = [
        {
            id: 0,
            title: "Développeur Frontend",
            startDate: new Date(2019, 2),
            endDate: new Date(2019, 12),
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed dolor sed nunc auctor rhoncus. Morbi tempus enim vel augue accumsan pellentesque. Proin eu tincidunt velit. In posuere neque sit amet neque fermentum, sed consectetur enim condimentum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer faucibus risus nunc, sed finibus metus viverra quis. Fusce vitae efficitur mi, in maximus libero. Aliquam id lectus augue. Aenean vitae blandit est. Morbi accumsan, eros vel ultrices dictum, dolor massa pretium quam, nec mollis dui risus vel lectus. Nulla accumsan quam scelerisque nisl rhoncus, ac suscipit nisi feugiat. Cras malesuada lobortis ipsum, sit amet malesuada urna scelerisque sollicitudin. Nunc mattis nibh luctus nisi tempor, id sodales nisi cursus.\n",
            skills: ["vue.js", "typescript", "node.js", "ci/cd"],
            company: "Décathlon"
        },
        {
            id: 1,
            title: "Développeur Frontend",
            startDate: new Date(2020, 2),
            endDate: new Date(2020, 4),
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed dolor sed nunc auctor rhoncus. Morbi tempus enim vel augue accumsan pellentesque. Proin eu tincidunt velit. In posuere neque sit amet neque fermentum, sed consectetur enim condimentum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer faucibus risus nunc, sed finibus metus viverra quis. Fusce vitae efficitur mi, in maximus libero. Aliquam id lectus augue. Aenean vitae blandit est. Morbi accumsan, eros vel ultrices dictum, dolor massa pretium quam, nec mollis dui risus vel lectus. Nulla accumsan quam scelerisque nisl rhoncus, ac suscipit nisi feugiat. Cras malesuada lobortis ipsum, sit amet malesuada urna scelerisque sollicitudin. Nunc mattis nibh luctus nisi tempor, id sodales nisi cursus.\n",
            skills: ["vue.js", "typescript", "node.js", "ci/cd"],
            company: "Vestiaire Collective"
        },
        {
            id: 2,
            title: "Développeur Frontend",
            startDate: new Date(2020, 6),
            endDate: new Date(2020, 7),
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed dolor sed nunc auctor rhoncus. Morbi tempus enim vel augue accumsan pellentesque. Proin eu tincidunt velit. In posuere neque sit amet neque fermentum, sed consectetur enim condimentum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer faucibus risus nunc, sed finibus metus viverra quis. Fusce vitae efficitur mi, in maximus libero. Aliquam id lectus augue. Aenean vitae blandit est. Morbi accumsan, eros vel ultrices dictum, dolor massa pretium quam, nec mollis dui risus vel lectus. Nulla accumsan quam scelerisque nisl rhoncus, ac suscipit nisi feugiat. Cras malesuada lobortis ipsum, sit amet malesuada urna scelerisque sollicitudin. Nunc mattis nibh luctus nisi tempor, id sodales nisi cursus.\n",
            skills: ["vue.js", "typescript", "node.js", "ci/cd"],
            company: "Iroko"
        },
    ]

    render(): ReactNode {
        return (
            <Layout>
                <div className={"container mx-auto"}>
                    <ExperiencesSection experiences={this.experiencesArray} />
                </div>
                <div className={"flex justify-center"}>
                    <ContactForm />
                </div>

            </Layout>
        )
    }
}