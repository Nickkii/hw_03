const Pet = (props) => {
    const name = 'Буч'
    const photo = 'https://happypaw.ua/upload/images/4d7b9a82-ef10-4d61-8733-b0c550c81432jpeg01112021113311_23596c55e40499239209cc4cd482c461.jpeg'
    const gender = 'мальчик'
    const growth = 'от 50 см'
    const telephone = '+380672183265'
    const email = 'home4pet@happypaw.ua    '
    const shelter = 'Гостомельський приют (БО «ЦСА Гостомельский приют для животных»)'
    const address = 'Київська область, м. Гостомель'

    const pickUp = () =>{
        console.log('По кнопке кликнули');
        alert(`Наберите по номеру телефона: ${telephone} и узнайте все подробности`)
    }
    
    return(

        <>
        <div className='homeDog'>
        <h1>Возьмите собаку к себе домой</h1>
        <div className='specificationsDog'>
                <div className="dogImg">
                    <img src={photo} alt="" />
                    
                </div>
                <div className='dogInfo'>
                    <h3>Давай знакомиться</h3>
                    <div>
                        <p>Меня зовут: {name}</p>
                        <p>Я: {gender}</p>
                        <p>Мой рост: {growth}</p>
                    </div>
                    <div>
                        <p>Телефон: {telephone}</p>
                        <p>E-mail: {email}</p>
                        <p>Название приюта: {shelter}</p>
                        <p>Адрес: {address}</p>

                        
                    </div>
                    <button onClick={pickUp}>Забрать к себе домой</button>
                </div>
        </div>
        </div>
        </>

    )




}
export default Pet;

