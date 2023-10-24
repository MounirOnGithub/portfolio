import { Component, ReactNode } from "react";

export default class ContactForm extends Component {
    render(): ReactNode {
        return (
            <div className="">
                <h3 className="flex justify-center">Formulaire de contact</h3>
                
                <div className="flex shadow-xl m-4">    
                    <form action="">
                        <div className="flex flex-row">
                            <input className="" type="text" name="subject" id="subject" />
                            <input type="email" name="email" id="email" />
                        </div>
                        <div className="flex flex-row">
                            <textarea name="message" id="message" cols="30" rows="10"></textarea>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}