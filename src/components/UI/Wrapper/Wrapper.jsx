const Wrapper = (props) => {
    return (
        <div className="wrapper">
            <div className="wrapper-inner">
            {props.children}</div>
        </div>
    );
}

export default Wrapper;