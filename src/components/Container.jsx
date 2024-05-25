import classNames from 'classnames';

export default function Container (props) {
    return (
        <div className={classNames("w-full", props.containerClass)}>
            {props.children}
        </div>
    )
}