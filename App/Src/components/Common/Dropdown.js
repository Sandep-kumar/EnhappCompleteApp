import React, {useState} from 'react';
    import {StyleSheet, View, Text, Image} from 'react-native';
    import {Dropdown, MultiSelect} from 'react-native-element-dropdown';
    import { styles } from '../../StylePage';

    const data = [
        {label: 'Item 1', value: '1'},
        {label: 'Item 2', value: '2'},
        {label: 'Item 3', value: '3'},
        {label: 'Item 4', value: '4'},
       
    ];

    const DropdownScreen = _props => {
        const [dropdown, setDropdown] = useState(null);
        const [selected, setSelected] = useState([]);

        const _renderItem = item => {
            return (
            <View style={styles.item}>
                <Text style={styles.textItem}>{item.label}</Text>
                {/* <Image style={styles.icon}  source={{ uri: "https://randomuser.me/api/portraits/men/36.jpg" }} /> */}
            </View>
            );
        };

        return (
            <View style={styles.container}>
                <Dropdown
                    style={styles.dropdown}
                    containerStyle={styles.shadow}
                    data={data}
                    // search
                    // searchPlaceholder="Search"
                    labelField="label"
                    valueField="value"
                    label="Dropdown"
                    placeholder="Select item"
                    value={dropdown}
                    onChange={item => {
                    setDropdown(item.value);
                        console.log('selected', item);
                    }}
                    // renderLeftIcon={() => (
                    //     <Image style={styles.icon}  source={{ uri: "https://randomuser.me/api/portraits/men/36.jpg" }} />
                    // )}
                    renderItem={item => _renderItem(item)}
                    textError="Error"
                />

                {/* <MultiSelect
                    style={styles.dropdown}
                    data={data}
                    labelField="label"
                    valueField="value"
                    label="Multi Select"
                    placeholder="Select item"
                    search
                    searchPlaceholder="Search"
                    value={selected}
                    onChange={item => {
                    setSelected(item);
                        console.log('selected', item);
                    }}
                    renderItem={item => _renderItem(item)}
                /> */}
            </View>
        );
    };

    export default DropdownScreen;

   