import { Component, ReactNode } from "react";

export default class ContactForm extends Component {
  render(): ReactNode {
    return (
      <div className="py-6">
        <h3 className="
              flex
              justify-center
              items-center
              text-3xl
              font-bold
            "
        >
          Formulaire de contact
        </h3>

        <div className="shadow-xl p-10">
            <div className="flex">
              <input className="rounded mr-4" type="text" placeholder="Objet" name="subject" id="subject" />
              <input className="rounded" type="email" placeholder="E-mail" name="email" id="email" />
            </div>
            <div className="flex py-6">
              <textarea className="rounded" name="message" id="message" placeholder="Entrez votre message..." cols={100} rows={8}/>
            </div>
        </div>
      </div>
    )
  }
}
