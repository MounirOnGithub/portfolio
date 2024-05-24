import {Component} from "react";
import ExperienceCard from "@/app/components/molecules/experience-card";
import {Experience} from "@/app/types/experience";
import Title from "@/app/components/atoms/title";

export default class ExperiencesSection extends Component<{ experiences: Experience[] }> {
    experienceCards = this.props.experiences.map(exp => {
        return (
            <ExperienceCard experience={exp} key={exp.id} />
        )
    })
    render() {
        return (
            <div>
                <Title title={"Expériences"} />

                <div className={"flex flex-wrap md:space-x-6"}>
                    {this.experienceCards}
                </div>
            </div>
        )
    }
}