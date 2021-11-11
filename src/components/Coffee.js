import React from 'react';
import { View, Image, Text, TextInput } from 'react-native';
import Params from '../Params';
import { getUrlOfCoffeByName } from '../Functions';

// Width of items
const image_width = 90;
const padding = 5;
const mini_box_width = 120;

// Box data
const beans = '200';
const mush = '99.99';

class Coffee extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.box}>
                <Image
                    style={styles.image}
                    source={{ uri: getUrlOfCoffeByName(this.props.name) }} />
                <View style={styles.info}>
                    <View>
                        <Text style={styles.title} >{'Type'}</Text>
                        <Text style={styles.name} >{this.props.name}</Text>
                    </View>
                    <View style={styles.line} />
                    <View style={styles.spilt}>
                        <View style={styles.verticleLine} />
                        <View style={styles.miniBox}>
                            <Text style={styles.miniTitle} >{'Defective\nBeans'}</Text>
                            <Text style={styles.bigText} >{beans}</Text>
                        </View>
                        <View style={styles.verticleLine} />
                        <View style={styles.miniBox}>
                            <Text style={styles.title} >{'%'}</Text>
                            <Text style={styles.bigText} >{mush}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.verticleLine} />
                <View style={styles.feedback}>
                    <Text style={styles.title} >{'Feedback'}</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Insert text!"
                        placeholderTextColor={Params.BROWN_COLOR}
                    />
                </View>
            </View>
        );
    }
}


const styles = {
    box: {
        padding: padding,
        marginBottom: padding * 3,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: Params.BROWN_COLOR,
        flexDirection: 'row',
    },
    info: {
        width: mini_box_width + padding,
    },
    miniBox: {
        width: mini_box_width / 2,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    spilt: {
        flex: 1,
        flexDirection: 'row',
    },
    image: {
        width: image_width,
        height: image_width,
        marginEnd: padding,

    },
    title: {
        color: Params.PRIMARY_COLOR,
        fontSize: 13,
    },
    miniTitle: {
        color: Params.PRIMARY_COLOR,
        fontSize: 9,
        textAlign: 'center',
    },
    name: {
        color: Params.PRIMARY_COLOR,
        fontSize: 17,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    text: {
        color: Params.PRIMARY_COLOR,
        fontSize: 17,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    bigText: {
        color: Params.PRIMARY_COLOR,
        fontSize: 19,
        textAlign: 'center',
        fontWeight: 'bold',
        textAlignVertical: 'bottom',
        flex: 1,
    },
    feedback: {
        paddingStart: padding,
    },
    line: {
        borderBottomColor: Params.BROWN_COLOR,
        borderBottomWidth: 1,
        marginStart: padding * 2,
        marginEnd: padding * 2,
    },
    verticleLine: {
        width: 1,
        backgroundColor: Params.BROWN_COLOR,
        marginTop: padding * 2,
        marginBottom: padding * 2,
    },
    input: {
        color: Params.PRIMARY_COLOR
    }
};

export default Coffee;