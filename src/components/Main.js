import MainCSS from './Main.module.css';

const Main = (props) => {
    return(
        <div className={MainCSS.main}>
            {props.children}
        </div>
    )
}

export default Main;