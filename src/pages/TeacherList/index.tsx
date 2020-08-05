import React from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import './styles.css';

function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Esses são os proffys disponíveis.">
                <form id="search-teachers">
                    <div className="input-block">
                        <label htmlFor="subject">Matéria</label>
                        <input type="text" id="subject" />
                    </div>

                    <div className="input-block">
                        <label htmlFor="week-day">Dia da semana</label>
                        <input type="text" id="week_day" />
                    </div>

                    <div className="input-block">
                        <label htmlFor="time">Hora</label>
                        <input type="text" id="time" />
                    </div>
                </form>
            </PageHeader>

            <main>
                 <TeacherItem 
                    img="https://pbs.twimg.com/profile_images/1089866343149654017/R9xVRsZY_400x400.jpg" 
                    name="Vinicius Finger" 
                    matter="Programação"
                    title="Entusiasta das melhores tecnologias de programação avançada."
                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." 
                    value= "90,90"
                />
                <TeacherItem 
                    img="https://pbs.twimg.com/profile_images/1274060745093890053/64nQT-P6_400x400.jpg" 
                    name="Yasmin Portes Nenê Boeira" 
                    matter="Redação"
                    title="Eu sou a melhor professora em redação de toda Viamão, seus Porra."
                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." 
                    value= "50,00"
                />
                <TeacherItem 
                    img="https://pbs.twimg.com/profile_images/1285995822631526406/NoA-AgjB_400x400.jpg" 
                    name="Gabriel Ferreira" 
                    matter="Administração"
                    title="Eu sou um professor que ensina adminstrar o seu tempo."
                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." 
                    value= "25,00"
                />
                <TeacherItem 
                    img="https://pbs.twimg.com/profile_images/1276276463474524160/hjCSv7jb_400x400.jpg" 
                    name="Luciano Pamplona" 
                    matter="Youtuber"
                    title="Ensino você a trazer uma razão para sua vida, com entreterimento de qualidade e jogos idiotas."
                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." 
                    value= "66,00"
                />
            </main>
        </div>
    )
}

export default TeacherList;