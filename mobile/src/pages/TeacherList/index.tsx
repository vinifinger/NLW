import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../TeacherItem';
import { ScrollView, TextInput, BorderlessButton, RectButton } from 'react-native-gesture-handler';
import api from '../../services/api';
//import { Feather } from '@expo/vector-icons';

interface Teacher {
    id: number,
    avatar: string,
    name: string,
    subject: string,
    bio: string,
    cost: string,
    whatsapp: string
}

function TeacherList() {
    const [isFiltersVisible, setIsFiltersVisible] = useState(false);

    const [teachers, setTeachers] = useState([]);

    const [subject, setSubject] = useState('');
    const [week_day, setWeekDay] = useState('');
    const [time, setTime] = useState('');

    function handleToogleFiltrersVisible() {
        setIsFiltersVisible(!isFiltersVisible);
    }

    async function handleFiltersSubmit() {
        const response = await api.get('/classes', {
            params: {
                subject,
                week_day,
                time
            }
        });

        setTeachers(response.data);
    }

    useEffect(() => {
        api.get('/all').then(res => {
            setTeachers(res.data);
        });
    }, []);

    return ( 
        <View style={styles.container}>
            <PageHeader 
                title="Proffys disponíveis" 
                headerRight={(
                    <BorderlessButton onPress={handleToogleFiltrersVisible}>
                        { /* <Feather name="filter" size={20} color="#fff" /> */ }
                        <Text>FILTRO</Text>
                    </BorderlessButton>
                )}
            >
                { isFiltersVisible && (
                    <View style={styles.searchForm}>
                        <Text style={styles.label}>Matéria</Text>
                        <TextInput 
                            style={styles.input}
                            value={subject}
                            onChangeText={setSubject}
                            placeholder="Qual a matéria?"
                            placeholderTextColor="#C1BCCC"
                        />

                        <View style={styles.inputGroup}>
                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Dia da semana</Text>
                                <TextInput 
                                    style={styles.input}
                                    value={week_day}
                                    onChangeText={setWeekDay}
                                    placeholder="Qual o dia?"
                                    placeholderTextColor="#C1BCCC"      
                                />
                            </View>

                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Horário</Text>
                                <TextInput 
                                    style={styles.input}
                                    value={time}
                                    onChangeText={setTime}
                                    placeholder="Qual o horário?"
                                    placeholderTextColor="#C1BCCC"
                                />
                            </View>
                        </View>

                    <RectButton onPress={handleFiltersSubmit} style={styles.submitButton}>
                        <Text style={styles.submitButtonText}>Filtrar</Text>
                    </RectButton>

                    </View>
                )}
            </PageHeader>
            
            <ScrollView
                style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16
                }}
            >
                {teachers.map((teacher: Teacher) => {
                    return (
                        <TeacherItem
                            key={teacher.id}
                            props={teacher}
                        />
                    )
                })}
            </ScrollView>
        </View>
    )
} 

export default TeacherList;