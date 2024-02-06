// import Comment from "./Comments";
import Layout from "./Layout";
import Product from "./Product";
import Sort from "./Sort";
import Event from "./Event";

export default function App() {
    // return 내부에는 하나의 태그만 존재
    // 여러 태그를 사용하고 싶다면 (<> </>)를 사용한다.
    return (
    <>
        <Event />
        <Product />
        {/* <Comment /> */}
        <Sort />

        {/* 부모 컨포넌트 */}
        <Cat name="가을" age="2"/>
        {/* {name: '가을', age:2} 객체가 Cat 컴포넌트로 전달 */}
        <Cat name="겨울" age="3" />
        <Cat name="봄" age="4" />
        <Layout />
    </>
    );
}

const Cat = ({ name, age }) => {
    // const props = {name:'가을, age:2}
    // const {name, age} = props;
    return (
        <>
        {/* 자식 컨포넌트 */}
            <div>{name}는 {age}살입니다.</div>
        </>
    )
}

// export default App;