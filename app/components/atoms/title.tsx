import {Component, ReactNode} from 'react'

export default class Title extends Component<{ title: string }> {
    render(): ReactNode {
        return (
            <h3 className="
                  flex
                  justify-center
                  items-center
                  text-3xl
                  font-bold
                  my-8
                "
            >
                {this.props.title}
            </h3>
        )
    }
}