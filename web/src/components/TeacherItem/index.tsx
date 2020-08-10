import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';
import api from '../../services/api';

interface TeacherItem {
    props: {
        id: number,
        avatar: string,
        name: string,
        subject: string,
        bio: string,
        cost: string,
        whatsapp: string
    }
}

const TeacherItem: React.FC <TeacherItem> = ({props}) => {

    function createNewConnection() {
        api.post('connections', {
            user_id: props.id
        });
    }

    return (
        <article className="teacher-item">
            <header>
                <img 
                    src={props.avatar} 
                    alt={props.name}
                />

                <div>
                    <strong>{props.name}</strong>
                    <span>{props.subject}</span>
                </div>
            </header>

            <p>
                {props.bio}
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ {props.cost}</strong>
                </p>

                <a onClick={createNewConnection} href={`https://wa.me/${props.whatsapp}`} target="_blank" >
                    <img src={whatsappIcon} alt="WhatsApp" />
                    Entrar em contato
                </a>
            </footer>
        </article>
    )

}

export default TeacherItem;