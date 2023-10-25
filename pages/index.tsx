import { Component, ReactNode } from "react";
import Layout from "../app/layout"
import ContactForm from "../app/components/contact-form";

export default class Index extends Component {
    render(): ReactNode {
        return (
            <Layout>
                <div className={"container mx-auto"}>
                    <ContactForm />
                </div>
            </Layout>
        )
    }
}