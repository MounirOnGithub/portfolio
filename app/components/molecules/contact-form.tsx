import { Component, ReactNode } from "react";
import Title from "@/app/components/atoms/title";

export default class ContactForm extends Component {
  render(): ReactNode {
    return (
      <div className="md:w-[50%] py-6">
        <Title title={"Contactez-moi"}/>

        <div className="flex flex-wrap shadow-2xl p-10">
            <div>
                <input className="rounded mr-4 mb-4 sm:my-0" type="text" placeholder="Objet" name="subject" id="subject" />
            </div>
            <div>
                <input className="rounded" type="email" placeholder="E-mail" name="email" id="email" />
            </div>

            <div className="w-full py-6">
              <textarea className="rounded w-full" name="message" id="message" placeholder="Entrez votre message..." rows={8}/>
            </div>
        </div>

      </div>
    )
  }
}
