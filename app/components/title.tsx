import {Component, ReactNode} from 'react'

export default class Title extends Component {
    render(): ReactNode {
        return (
            <h3 className="
                  flex
                  justify-center
                  items-center
                  text-3xl
                  font-bold
                  my-6
                "
            >
                {this.props.title}
            </h3>
        )
    }
}