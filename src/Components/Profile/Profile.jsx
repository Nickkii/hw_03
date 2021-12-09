const Profile = (props) => {


    let workExperience = [
        {id: 1, position: 'Охранник', company: 'Крупный бизнес-центр, Москва', dateWork: 'Октябрь 2013 – работает сейчас'},
        {id: 2, position: 'Охранник', company: 'ООО «Стиль», магазин мужской одежды, Москва', dateWork: 'Декабрь 2010 – август 2013'},
        {id: 3, position: 'Сотрудник службы охраны', company: 'Крупный бизнес-центр, Москва', dateWork: 'Ноябрь 2004 – ноябрь 2010'},
     ];

     let res = workExperience.map(function(item) {
        return (   <tr key={item.id}>
           <td>{item.position}</td>
           <td>{item.company}</td>
           <td>{item.dateWork}</td>
        </tr>)
     });

     let education = [
         "Среднее специальное образование",
         'Технический пожарно-спасательный колледж № 57 имени Героя Российской Федерации В.М. Максимчука',
         'Специальность: Пожарная безопасность',
         'Дневная/Очная         ',
         '2004'

     ]

    return(

        <>

        <h1>Резюме</h1>
        <div className='resume'>
            <h2>Охранник</h2>
            <h2>Опыт работы</h2>
            <table>
                <thead>
                <tr>
                    <td>Автор</td>
                    <td>Название книги</td>
                    <td>Год выпуска</td>
                </tr>
                </thead>
                <tbody>
                {res}
                </tbody>
            </table>
            <h2>Образование</h2>
            <div>
                <p>{education[0]}</p>
                <p>{education[1]}</p>
                <p>{education[2]}</p>
                <p>{education[3]}</p>
                <p>{education[4]}</p>
            </div>
        </div>
        </>
    )

}

export default Profile