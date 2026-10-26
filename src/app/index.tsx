import CustomButton from "@/app/components/ui/CustomButton";
import WelcomePreview from "@/assets/images/WelcomePreview.svg";
import { useRouter } from "expo-router";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/Colors";

const Index = () => {

    const router = useRouter()

    const getStartedHandler = () => {
        router.push("/get-started1")
    }
    const loginHandler = () => {
        router.push("/login")
    }

    return (

        <ImageBackground source={require("@/assets/images/WelcomeBackground.jpg")} style={styles.container}  resizeMode="cover">
            <View pointerEvents="none" style={styles.welcomePreview}>
                <WelcomePreview height="100%" width="100%" />
            </View>
            <Text style={styles.title}>Welcome to ServiceHub</Text>
            <Text style={styles.subtitle}>Find trusted professionals for your everydayeeds. Quality services, right at your fingertips.</Text>
            <CustomButton buttonContainer={styles.buttonContainer}  onPress={getStartedHandler}> Get Started</CustomButton>
            <View style={styles.loginContainer}>
                <Text>Already have an account?</Text>
                <CustomButton  buttonContainer={styles.login} buttonText={styles.loginText} onPress={loginHandler}> Sign In </CustomButton>
            </View>
        </ImageBackground>
            
    )
}

export default Index

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: "flex-end",
        paddingBottom: 100,
        backgroundColor: Colors.background
    },

    welcomePreview: {
        position: "absolute",
        top:0,
        right: 0,
        left: 0,
        bottom: 200
    },
    title: {
        fontSize: 24,
        textAlign: "center",
        fontWeight: "bold",
        color: Colors.textDark,
    },
    subtitle: {
        textAlign: "center",
        fontSize: 16,
        padding: 14,
        color: Colors.textDark,

  },
    buttonContainer: {
        marginHorizontal: "auto"
    },
    brandInfo: {
       textAlign: "center",
    },
    logo: {
        height: 100,
        width: 100
    },
     loginContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems:"center"
    },
    login: {
      backgroundColor: "transparent",
      paddingHorizontal: 0
    },
   
    loginText: {
        color: Colors.primary,
    }
 
})