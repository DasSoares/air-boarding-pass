import { StyleSheet } from "react-native";
import { colors } from "../styles/colors";
import { fontFamily } from "../styles/fontFamily";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    alignItems: "center",
  },
  header: {
    width: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: colors.white,
    fontSize: 24,
    fontFamily: fontFamily.bold,
  },
  subtitle: {
    color: colors.white,
    fontSize: 14,
    fontFamily: fontFamily.bold,
  },
  ticket: {
    backgroundColor: colors.white,
    width: "100%",
    borderTopRightRadius: 22,
    borderTopLeftRadius: 22,
    overflow: "hidden",
    paddingBottom: 24,
    marginTop: -20, // Para que o ticket fique em cima do container e não apareça os cantos pretos
  },
  content: {
    padding: 20,
  },
  flight: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 52,
  },
  duration: {
    alignItems: "center",
  },
  hours: {
    color: colors.gray[800],
    fontSize: 14,
    fontFamily: fontFamily.regular,
  },
  label: {
    color: colors.gray[400],
    fontSize: 12,
    textTransform: "uppercase",
    fontFamily: fontFamily.medium,
  },
  customerName: {
    color: colors.black,
    fontSize: 24,
    fontFamily: fontFamily.bold,
  },
  details: {
    marginTop: 52,
  },
  inline: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  footer: {
    width: "100%",
    padding: 20,
    flexDirection: "row",
    gap: 22,
  },
  footerContent: {
    flex: 1,
    gap: 25,
  },
});
