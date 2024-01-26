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
            text: '봄이 왔다.',
            date: '2024.01.27'
        },
        {
            user: userArr[1],
            text: '봄이 왔다.',
            date: '2024.01.27'
        },
    ]
    return (
        <>
        {commentArr.map((item, index) => (
            <Comment key={index} />
        ))}
        </>
    )
}

export default Comments