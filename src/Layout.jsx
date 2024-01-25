import Article from "./Article";
import Footer from "./Footer";
import Header from "./Header";
import  { NavMobile } from "./Nav";

export default function Layout() {
  // return 내부에는 하나의 태그만 존재
  // 여러 태그를 사용하고 싶다면 (<> </>)를 사용한다.
  const navArr = [
    {title: 'html'},
    {title: 'css'},
    {title: 'js'},
  ]
  return (
  <div className="wrap">
    <Header />
    <NavMobile nav={navArr} />
    <Article title="html이란?" desc="html이란 뭐뭐다."/>
    <Article title="css이란?" desc="css이란 뭐뭐다."/>
    <Article title="js이란?" desc="js이란 뭐뭐다."/>
    <Footer />
  </div>
  );
}

// export default Layout;