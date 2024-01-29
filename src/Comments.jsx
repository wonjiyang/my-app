import Comment from "./Comment"

const Comments = () => {
    const userArr = [
        {
            name: '겨울이',
            img: 'https://assets.chatgpt4google.com/assets/promo/43.gif',
        },
        {
            name: '가을이',
            img: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
        }
    ]
    const commentArr = [
        {
            user: userArr[0],
            text: '겨울이 왔다.',
            date: '2024.12.27'
        },
        {
            user: userArr[1],
            text: '가을이 왔다.',
            date: '2024.10.29'
        },
        {
            user: userArr[1],
            text: '봄이 왔다.',
            date: '2024.02.30'
        },
        {
            user: userArr[1],
            text: '여름이 왔다.',
            date: '2024.06.30'
        },
    ]
    return (
        <>
        {commentArr.map((item, index) => (
            <Comment key={index} data={item} />
        ))}
        </>
    )
}

export default Comments