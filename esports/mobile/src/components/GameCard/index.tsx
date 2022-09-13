import {
  ImageBackground,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";

import { THEME } from "../../theme";
import { styles } from "./styles";

export interface IGameProps {
  id: string;
  name: string;
  ads: string;
  cover: ImageSourcePropType;
}

interface IIGameCardProps extends TouchableOpacityProps {
  data: IGameProps;
}

export function GameCard({ data, ...rest }: IIGameCardProps) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <ImageBackground source={data.cover} style={styles.cover}>
        <LinearGradient colors={THEME.COLORS.FOOTER} style={styles.footer}>
          <Text style={styles.name}>{data.name}</Text>
          <Text style={styles.ads}>{data.ads} anúncios</Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
}
