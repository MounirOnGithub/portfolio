import { Component, ReactNode } from "react";
import Layout from "../app/layout"
import ContactForm from "../app/components/contact-form";
import Experiences from "@/app/components/experiences";

export default class Index extends Component {
    render(): ReactNode {
        return (
            <Layout>
                <div>
                    <Experiences />
                </div>
                <div className={"flex justify-center"}>
                    <ContactForm />
                </div>

            </Layout>
        )
    }
}