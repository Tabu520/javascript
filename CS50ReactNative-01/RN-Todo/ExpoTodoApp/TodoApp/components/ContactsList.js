import React from 'react';
import { SectionList, Text } from 'react-native';
import PropTypes from 'prop-types';

import Row from './Row';

// item : {name: String, phone: String, key: Number}
const renderItem = (obj) => <Row name={obj.item.name} phone={obj.item.phone} />

const renderSectionHeader = (obj) => <Text>{obj.section.title}</Text>

const ContactsList = props => {

    const contactByLetter = props.contacts.reduce((obj, contact) => {
        const firstLetter = contact.name[0].toUpperCase();
        return {
            ...obj,
            [firstLetter]: [...(obj[firstLetter] || []), contact]
        }
    }, {});

    const sections = Object.keys(contactByLetter).sort().map(letter => ({
        title: letter,
        data: contactByLetter[letter]
    }));

    return (
        <SectionList
            keyExtractor={(item, index) => item.key}
            renderItem={renderItem}
            renderSectionHeader={renderSectionHeader}
            sections={sections}
        />
    );
}

ContactsList.propTypes = {
    contacts: PropTypes.array
}

export default ContactsList;