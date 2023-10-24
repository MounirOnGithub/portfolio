import { Component, ReactNode } from "react";
import Layout from "../app/layout"
import ContactForm from "@/app/components/contact-form";

export default class Index extends Component {
    render(): ReactNode {
        return (
            <Layout>
                <h1 className="text-3xl font-bold underline text-orange-500">
                    Hello
                </h1>
                <ContactForm />
            </Layout>
        )
    }
}