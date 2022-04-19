
const OptionsComponent = ({ children, isCategorySelected, handleClick, name }) => {

    const showOptions = () => {

        return isCategorySelected === true ?
            <button className={name==="movies"?"selected bt_left":"selected bt_right"} name={name} onClick={handleClick}>
                {children}
            </button> :
            <button name={name} className={name==="movies"?"unselected bt_left":"unselected bt_right"} onClick={handleClick}>
                {children}
            </button>
    }


    return (
        <>
            {showOptions()}
        </>
    )
}
export default OptionsComponent;