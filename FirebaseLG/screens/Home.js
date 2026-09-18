import { View, Text, Pressable, StyleSheet } from "react-native";
import { useState } from "react";
import { auth } from "../config/firebase";
import { sair } from "../services/auth";

export default function Home({ navigation }) {
    const [passo, setPasso] = useState(1);

    async function realizarLogOut() {
        await sair()
        navigation.navigate('Login')
    }

    const passos = [
        {
            titulo: "Passo 1",
            descricao: "Comece criando sua conta com seu e-mail e uma senha."
        },
        {
            titulo: "Passo 2",
            descricao: "Depois, faça login usando os dados cadastrados."
        },
        {
            titulo: "Passo 3",
            descricao: "Agora você já pode acessar e utilizar o aplicativo."
        },
        {
            titulo: "Passo 4",
            descricao: "Pronto! Você concluiu o manual e já pode começar."
        }
    ];

    const passoAtual = passos[passo - 1];

    return (
        <View style={styles.container}>
            <View style={styles.conteudo}>
                <Text style={styles.emoji}>👋</Text>

                <Text style={styles.titulo}>
                    Olá, seja bem-vindo(a)!
                </Text>

                <Text style={styles.subtitulo}>
                    É muito bom ter você por aqui.
                </Text>

                <View style={styles.card}>
                    <Text style={styles.cardTitulo}>Sua conta</Text>
                    <Text style={styles.email}>
                        {auth.currentUser?.email}
                    </Text>
                </View>

                <View style={styles.manual}>
                    <Text style={styles.manualTitulo}>
                        {passoAtual.titulo}
                    </Text>

                    <Text style={styles.descricao}>
                        {passoAtual.descricao}
                    </Text>

                    <View style={styles.navegacao}>
                        {passo > 1 && (
                            <Pressable
                                style={styles.botaoVoltar}
                                onPress={() => setPasso(passo - 1)}
                            >
                                <Text style={styles.textoVoltar}>
                                    Voltar
                                </Text>
                            </Pressable>
                        )}

                        {passo < passos.length && (
                            <Pressable
                                style={styles.botaoProximo}
                                onPress={() => setPasso(passo + 1)}
                            >
                                <Text style={styles.textoProximo}>
                                    Pular para passo {passo + 1}
                                </Text>
                            </Pressable>
                        )}
                    </View>

                    <View style={styles.indicadores}>
                        {passos.map((_, index) => (
                            <View
                                key={index}
                                style={[
                                    styles.indicador,
                                    index + 1 === passo && styles.indicadorAtivo
                                ]}
                            />
                        ))}
                    </View>
                </View>

                <Text style={styles.mensagem}>
                    Você já está conectado e pode continuar usando o aplicativo normalmente.
                </Text>

                <Button
                    title='Sair'
                    onPress={realizarLogOut}
                    style={styles.botao}
                />
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
        marginBottom: 25,
    },
    card: {
        width: "100%",
        backgroundColor: "#fff",
        borderRadius: 18,
        padding: 20,
        marginBottom: 15,
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
    manual: {
        width: "100%",
        backgroundColor: "#fff",
        borderRadius: 18,
        padding: 22,
        marginBottom: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.08,
        shadowRadius: 6,
        elevation: 3,
    },
    manualTitulo: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#3498db",
        marginBottom: 10,
    },
    descricao: {
        fontSize: 15,
        color: "#555",
        lineHeight: 22,
        marginBottom: 18,
    },
    navegacao: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 10,
    },
    botaoVoltar: {
        flex: 1,
        height: 45,
        borderWidth: 1,
        borderColor: "#3498db",
        borderRadius: 23,
        alignItems: "center",
        justifyContent: "center",
    },
    textoVoltar: {
        color: "#3498db",
        fontSize: 14,
        fontWeight: "bold",
    },
    botaoProximo: {
        flex: 1,
        height: 45,
        backgroundColor: "#3498db",
        borderRadius: 23,
        alignItems: "center",
        justifyContent: "center",
    },
    textoProximo: {
        color: "#fff",
        fontSize: 14,
        fontWeight: "bold",
        textAlign: "center",
    },
    indicadores: {
        flexDirection: "row",
        justifyContent: "center",
        gap: 7,
        marginTop: 18,
    },
    indicador: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: "#ccc",
    },
    indicadorAtivo: {
        width: 20,
        backgroundColor: "#3498db",
    },
    mensagem: {
        fontSize: 14,
        color: "#666",
        textAlign: "center",
        lineHeight: 21,
        marginBottom: 18,
    },
    botao: {
        width: "100%",
        height: 50,
        borderWidth: 1,
        borderColor: "#3498db",
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center",
    },
    textoSair: {
        color: "#3498db",
        fontSize: 16,
        fontWeight: "bold",
    },
});