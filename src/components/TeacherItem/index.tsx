import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

interface TeacherItem {
    img: string,
    name: string,
    matter: string,
    title: string,
    description: string,
    value: string
}

const TeacherItem: React.FC <TeacherItem> = (props) => {
    return (
        <article className="teacher-item">
            <header>
                <img 
                    src={props.img} 
                    alt={props.name}
                />

                <div>
                    <strong>{props.name}</strong>
                    <span>{props.matter}</span>
                </div>
            </header>

            <p>
                {props.title}
                <br /> <br />
                {props.description}
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ {props.value}</strong>
                </p>

                <button type="button" >
                    <img src={whatsappIcon} alt="WhatsApp" />
                    Entrar em contato
                </button>
            </footer>
        </article>
    )

}

export default TeacherItem;