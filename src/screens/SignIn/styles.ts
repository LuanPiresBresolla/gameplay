import { StyleSheet } from "react-native";

import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.background,
  },

  image: {
    width: '100%',
    height: 360,
  },

  content: {
    marginTop: -50,
    paddingHorizontal: 40,
  },

  title: {
    textAlign: 'center',
    color: theme.colors.heading,
    fontSize: 40,
    marginBottom: 16
  },

  subtitle: {
    textAlign: 'center',
    color: theme.colors.heading,
    fontSize: 15,
    marginBottom: 64
  },
});
