import { StyleSheet } from "react-native";
import { ScaledSheet } from 'react-native-size-matters';

export const styles = ScaledSheet.create({
  containers: {
    flex: 1,
    height:"100%",
    width:"100%",
    position: "relative"
  },
  titles: {
    color: "white",
    fontSize: '20@ms',
  },
  texts: {
    margin: "15@ms",
    textAlign: "center",
    color: "white",
    fontSize: '15@ms',
    fontWeight: "bold",
  },
  buttons: {
    backgroundColor: "rgba(0, 0, 0, 1)",
    padding: '10@s',
    borderRadius: "10@s"
    
  },
  imgContainer: {
    borderWidth: '1@ms',
    borderRadius: '16@ms',
    padding: '10@ms',
    margin: '20@ms',
    backgroundColor: "black",
    // width: "50%",
  },
  img: {
    resizeMode: "cover",
    width: '100%',
    height: '100%',
    // margin: '10@ms',
    flex:1,
    aspectRatio:1
  },
  textButtons: {
    textAlign: "center",
    color: "white",
    fontSize: '16@ms',
    fontWeight: "bold",
  },
  inputSearch: {
    textAlign: "center",
    marginTop: "20@ms",
    backgroundColor: "#f9f9f9",
    height: '30@vs',
    width: '200@s',
    borderRadius: '10@s',
  },
  iconContainer: {
    marginTop: '30@s',
    width: '40@ms',
    height: '40@vs',
 
  },
  imgBackground: {
    position:"absolute",
    justifyContent: "center",
    resizeMode: "cover", // Ajusta la imagen al tamaño del contenedor
    width: "100%", // Opcional: ajusta el ancho de la imagen al 100% del contenedor
    height: "100%",
    alignItems:"center"
  },
  viewCharacter: {
    flex:1,
    width: "50%",
    padding: '5@ms',
    margin: '20@ms',
    backgroundColor: "rgba(0, 0, 0, 0.2)",
  },
  msgHome: {
    padding: "20@ms",
    // backgroundColor: "#000000c0",
    justifyContent: "center",
    alignItems:"center"
  },
  buttonHome: {
    // marginLeft: '80@ms',
    padding: '10@s',
    width: '150@s',
    backgroundColor: "rgba(255, 0, 0, 0.5)",
   borderRadius: '20@ms',

  },
  directionRow:{
    flexDirection:"row",    
    justifyContent: "center",
    alignItems:"center"

  }, 
  directionColumn:{
    flexDirection: "column"
  },
  containerList:{
    flex:1,

  },
  logo:{
    width: "70%",
    height: "70%",
    resizeMode: "center",


  }
});
