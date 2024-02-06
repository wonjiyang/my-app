const Event = () => {
    const handleClick = (event) => {
        console.log('버튼이 클릭되었습니다.')
        // alert("버튼이 클릭되었습니다.")
        console.log(event)
        console.log(event.target)
        console.log(event.type)
    }

    const handleMouseOver = (event) => {
        event.target.style.backgroundColor = 'lightgrey'
    }

    const handleChange = (e) => {
        document.querySelector('.text-value').innerText = e.target.value
    }

    return (
    <>
        <h1>클릭 이벤트</h1>
        <button onClick={handleClick}>버튼</button>

        <h1>마우스 오버 이벤트</h1>
        <button onClick={handleMouseOver}>버튼</button>

        <h1>입력 이벤트</h1>
        <input onChange={handleChange} type="text" placeholder="placeholder" />
        <div className="text-value"></div>
    </>
    )
}

export default Event