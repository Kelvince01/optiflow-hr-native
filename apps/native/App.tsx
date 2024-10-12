import { createTheme, makeStyles, ThemeProvider } from "@rneui/themed";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import React from "react";
import useSession from "./hooks/use-session";
import BaseLayout from "./components/base-layout";
import Auth from "./components/auth";

const theme = createTheme({
    lightColors: {
        primary: "orange",
        tertiary: "#124789",
        accent: "#f98652",
        surface: "#0990763",
    },
    darkColors: {
        primary: "slate",
        tertiary: "#124789",
        accent: "#908652",
        surface: "#0990763",
    },
    components: {
        Button: (props, theme) => ({
            containerStyle: {
                backgroundColor: theme.colors.tertiary,
            },
        }),
    },
});

export default function Native() {
    const styles = useStyles();
    const session = useSession();

    return (
        <ThemeProvider theme={theme}>
            <View style={styles.container}>
                <Text style={styles.header}>Native</Text>
                {session?.user ? <BaseLayout key={session.user.id} session={session} /> : <Auth />}
                <StatusBar style="auto" />
            </View>
        </ThemeProvider>
    );
}

const useStyles = makeStyles((theme) => ({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    header: {
        fontWeight: "bold",
        marginBottom: 20,
        fontSize: 36,
    },
}));
