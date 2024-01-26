const Header = (props) =>
{
    console.log(props);
    return (
        <header>
            <h1>{props.title}</h1>
            {props.content}
        </header>
    );
}

export default Header;