import {Component} from "react";
import {Experience} from "@/app/types/experience";

export default class ExperienceCard extends Component<{ experience: Experience}> {
    render() {
        return (
            <div className={"md:flex-1 mx-auto shadow-xl w-80 rounded p-10"}>
                <h2 className={"font-bold"}>
                    {this.props.experience.title}
                </h2>

                <div>
                    <div className={"underline"}>
                        {this.props.experience.company}
                    </div>
                    From {`${this.props.experience.startDate.getFullYear()} / ${this.props.experience.startDate.getMonth()} `}
                    to {`${this.props.experience.endDate.getFullYear()} / ${this.props.experience.endDate.getMonth()}`}
                </div>

                <p className={"my-6"}>
                    {this.props.experience.description}
                </p>
            </div>
        )
    }
}