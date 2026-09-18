import { View, Text, Pressable, StyleSheet } from "react-native";
import { auth } from "../config/firebase";
import { sair } from "../services/auth";

export default function Home({ navigation }) {
    async function realizarLogOut() {
        await sair()
        navigation.navigate('Login')
    }

    return (
        <View style={styles.container}>
            <View style={styles.conteudo}>
                <Text style={styles.emoji}>👋</Text>
                <Text style={styles.titulo}>Olá, seja bem-vindo(a)!</Text>
                <Text style={styles.subtitulo}>
                    É muito bom ter você por aqui.
                </Text>

                <View style={styles.card}>
                    <Text style={styles.cardTitulo}>Sua conta</Text>
                    <Text style={styles.email}>{auth.currentUser?.email}</Text>
                </View>

                <Text style={styles.mensagem}>
                    Você já está conectado e pode continuar usando o aplicativo normalmente.
                </Text>

                <Pressable
                    style={styles.botao}
                    onPress={realizarLogOut}
                >
                    <Text style={styles.textoBotao}>Sair da conta</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f9fc",
        justifyContent: "center",
        paddingHorizontal: 25,
    },
    conteudo: {
        alignItems: "center",
    },
    emoji: {
        fontSize: 45,
        marginBottom: 15,
    },
    titulo: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#222",
        textAlign: "center",
        marginBottom: 8,
    },
    subtitulo: {
        fontSize: 16,
        color: "#666",
        textAlign: "center",
        marginBottom: 30,
    },
    card: {
        width: "100%",
        backgroundColor: "#fff",
        borderRadius: 18,
        padding: 20,
        marginBottom: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.08,
        shadowRadius: 6,
        elevation: 3,
    },
    cardTitulo: {
        fontSize: 14,
        color: "#888",
        marginBottom: 7,
    },
    email: {
        fontSize: 17,
        fontWeight: "600",
        color: "#3498db",
    },
    mensagem: {
        fontSize: 15,
        color: "#666",
        textAlign: "center",
        lineHeight: 22,
        marginBottom: 25,
    },
    botao: {
        width: "100%",
        height: 40,
        backgroundColor: "#3498db",
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center",
    },
    textoBotao: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
});