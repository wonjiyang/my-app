import { IoIosAlarm } from "react-icons/io";

const Nav = ({nav}) => {
    // console.log(props)
    // console.log(props.nav)
    // console.log(props.nav[0])
    // console.log(props.nav[0].title) 
    // console.log(props.nav[1])
    // console.log(props.nav[1].title)
    // console.log(props.nav[2])
    // console.log(props.nav[2 ].title)
    return (
        <nav>
            {/* 문자가 아닌 데이터를 받을 땐  {}로 감싸주어야 한다. */}
            <ul>
                {nav.map((item, index) => (
                    <li key={index}>
                        {/* /sub/title.html로 이동하는 링크. 여기서 item.title은 각 항목의 제목(html, css, js)입니다. */}
                        <a href={`/sub/${item.title}.html`}>
                            <IoIosAlarm />
                            {item.title}</a>
                    </li>
                ))}
            </ul>
        </nav>

        // {props.nav.map((item, index) => (
        //     // cosole.log(item); // {title: "html"}
        //     <li key={index}>
        //         {/* /sub/title.html */}
        //         <a href={'/sub/' + item.title + '.html'}>{item.title}</a>
        //     </li>
        // ))}
    )
}

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
            <li key={i}>
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