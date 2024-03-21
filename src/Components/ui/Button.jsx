import "../../Styles/Icons.css";

export default function({classNames, handleOnClick, children}) {
    return (
        <button id="rounded-button" className={classNames} onClick={handleOnClick}>{children}</button>
    );
}