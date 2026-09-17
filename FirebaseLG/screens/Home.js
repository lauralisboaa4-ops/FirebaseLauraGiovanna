import { View, Text, Button } from "react-native";
import {auth} from "../config/firebase"
import {sair} from "../services/auth"

export default function Home({navigation}) {
    async function realizarLogOut() {
        await sair()
        navigation.navigate('Login')
    }
    return(
        <View>
            <Text>Seja bem-vindo(a)!</Text>
            <Text>Usuário: {auth.currentUser?.email}</Text>
            <Button 
                title='Sair'
                onPress={realizarLogOut}
            />
        </View>
    )
}