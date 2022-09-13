import { ImageBackground } from "react-native";

import backgroundIMG from "../../assets/background-galaxy.png";
import { styles } from "./styles";

interface IBackgroundProps {
  children: React.ReactNode;
}

export function Background({ children }: IBackgroundProps) {
  return (
    <ImageBackground
      source={backgroundIMG}
      style={styles.container}
      defaultSource={backgroundIMG}
    >
      {children}
    </ImageBackground>
  );
}
