const Nav = () => {
    return (
        <nav>
            <ul>
                <li>
                    <a href="/">html</a>
                </li>
                <li>
                    <a href="/">css</a>
                </li>
                <li>
                    <a href="/">js</a>
                </li>
            </ul>
        </nav>
        
    );
};

export const NavMobile = (props) => {
    console.log(props)
    console.log(props.nav)
    console.log(props.nav[0])
    console.log(props.nav[0].title)
    console.log(props.nav[1])
    console.log(props.nav[1].title)
    console.log(props.nav[2])
    console.log(props.nav[2].title)
    const list = []
    for (let i = 0; i < props.nav.length; i++) {
        list.push(
            <li>
                <a href="{'/sub/'+ props.nav[i].title = '.html'}">{props.nav[i].title}</a>
            </li>
        )
    }
    return (
        <nav>
            <ul>
                {/* 문자가 아닌 데이터를 받을 땐 {}로 감싸주어야한다. */}
                {list}
            </ul>
        </nav>
    );
}

export default Nav;
// export {NavMobile};