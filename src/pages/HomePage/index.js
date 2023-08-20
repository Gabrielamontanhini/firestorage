import React from "react";
import { View , Text , StyleSheet , TouchableOpacity , Image} from "react-native";

export default function HomePage(){
    return (
        <View style={styles.container}>
            <Text>HOMEPAGE DO CARALHO FDP</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingStart: 14,
        paddingEnd: 14,
        backgroundColor:"#FFF0F5"
    }
})