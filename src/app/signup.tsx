import AppleIcon from "@/assets/images/apple-icon.svg"
import GoogleIcon from "@/assets/images/google-icon.svg"
import { useRouter } from "expo-router"
import { StyleSheet, Text, TextInput, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import Colors from "../../constants/Colors"
import { thisYear } from "../../utils/date"
import CustomButton from "./components/ui/CustomButton"
import CustomIcon from "./components/ui/CustomIcon"
import Logo from "./components/ui/Logo"

const Signup = () => {

    const router = useRouter()

     const logoHandler = () => {
        router.push("/")
    }
    
    const signUpHandler = () => {
        return
    }

    const loginHandler = () => {
        router.push("/login")
    }
   


    return (
        <SafeAreaView style={styles.background}>
          <View style={styles.logoContainer}><Logo style={styles.logo} onPress={logoHandler}/><Text style={styles.logoText}>Create Account</Text></View>  
                <TextInput style={styles.input} placeholder="Username" />
                <TextInput style={styles.input} placeholder="Email"/>
                <TextInput style={styles.input} placeholder="Password" />
                <TextInput style={styles.input} placeholder="Confirm Password" />
             
        
        <CustomButton buttonText={styles.signUpText} buttonContainer={styles.signUpContainer} onPress={signUpHandler}>SignUp</CustomButton>
            <CustomIcon iconContainer={styles.signUpContainer}><GoogleIcon height={20} width={20}/><Text> Continue with Google</Text></CustomIcon>
                <CustomIcon iconContainer={styles.signUpContainer}><AppleIcon height={20} width={20}/><Text>Continue With Apple</Text></CustomIcon>

                <View style={styles.loginContainer2}><Text>Already have an account?</Text><CustomButton buttonContainer={styles.loginButton} buttonText={styles.loginText} onPress={loginHandler}>Login</CustomButton></View>


            <Text style={styles.footer}>ServiceHub &copy; {thisYear()}</Text>
        
        </SafeAreaView>
    )
}


export default Signup

const styles = StyleSheet.create({
    background: {
        padding: 20,
        paddingVertical: 100

    },
    logoContainer: {
        alignItems: "center",
        marginBottom: 50
    },
    logo: {
        height: 50,
        width: 50,
    },
      logoText: {
        fontSize: 24,
        fontStyle: "italic"
    },
    input: {
        borderWidth: 0.5,
        padding: 10,
        borderRadius: 8,
        marginBottom: 15,
        
    },

     
      signUpContainer: {
         backgroundColor: Colors.successLight,
        borderRadius: 8,
        padding: 10,
        borderWidth: 0.5,
        marginBottom: 10,

    },
    signUpText: {
        color: Colors.textDark,
        textAlign: "center",
      
    },
    loginContainer2: {
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center"

    },
    loginButton: {
        backgroundColor: "transparent"
    },
    loginText: {
        color: Colors.primary
    },
     footer: {
        marginVertical: 50,
        textAlign: "center"
    },
})