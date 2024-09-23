import { ImageBackground, Text, View } from "react-native";
import { styles } from "./styles";
import { Flight } from "@/app/components/flight";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "@/app/styles/colors";
import { Info } from "@/app/components/info";
import QRCode from "react-native-qrcode-svg";
import Svg, { Line, Circle } from "react-native-svg";

export function Home() {
  const dataInicio = new Date();
  const dataEmbarque = new Date(dataInicio);
  dataEmbarque.setDate(dataEmbarque.getDate() + 45);

  const terminal = String(geraNumeros()).slice(0, 1);
  const portao = String(geraNumeros()).slice(2, 4);
  const assento = `${String(geraNumeros()).slice(-2)}${gerarSigla(1)}`;
  const voo = "NYK";
  const qcCodeValue = `${gerarSigla(geraNumeros(10, 100))}`;

  function geraNumeros(min: number = 1, max: number = 9) {
    return Math.random() * (max - min) + min;
  }

  function gerarSigla(length: number) {
    const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // Letras possíveis
    let sigla = "";

    for (let i = 0; i < length; i++) {
      const indiceAleatorio = Math.floor(Math.random() * letras.length);
      sigla += letras.charAt(indiceAleatorio);
    }

    return sigla;
  }

  return (
    <View style={styles.container}>
      {/* Imagem de fundo */}
      <ImageBackground
        style={styles.header}
        source={require("../assets/images/cover.png")}
      >
        <Text style={styles.title}>Cartão de embarque</Text>
        <Text style={styles.subtitle}>Falta 45 dias para sua viagem</Text>
      </ImageBackground>

      <View style={styles.ticket}>
        <View style={styles.content}>
          <View style={styles.flight}>
            <Flight label="São Paulo" value="GRU" />
            {/* Informações da duração do voo */}

            <View style={styles.duration}>
              <Ionicons
                name="airplane-sharp"
                size={32}
                // style={colors.black}
                color={colors.black}
              ></Ionicons>
              <Text style={styles.hours}>09h 45m</Text>
            </View>

            <Flight label="Nova Iorque" value="NYK"></Flight>
          </View>

          {/* Informações do passageiro */}
          <Text style={styles.label}>Passageiro</Text>
          <Text style={styles.customerName}>Danilo Soares</Text>

          {/* Informações e detalhes do voo */}
          <View style={styles.details}>
            <View style={styles.inline}>
              <Info
                label="Data"
                value={dataEmbarque.toLocaleDateString("pt-BR")}
              />
              <Info label="Embarque" value="17:25" />
            </View>
          </View>
        </View>

        {/* Destaque do Ticket */}
        <View>
          <Svg height={20} width="100%">
            <Line
              x1="0%"
              y1="50%"
              x2="100%"
              y2="50%"
              stroke={colors.gray[400]}
              strokeWidth={1}
              strokeDasharray="5,5" // espaço a cada 5 unidades
            />
            <Circle r={8} cx="0%" cy="50%" fill={colors.black} />
            <Circle r={8} cx="100%" cy="50%" fill={colors.black} />
          </Svg>
        </View>
        {/*  */}
        <View style={styles.footer}>
          <View style={styles.footerContent}>
            <View style={styles.inline}>
              <Info label="Classe" value="Economica" />
              <Info label="Assento" value={assento} />
            </View>
            <View style={styles.inline}>
              <Info label="Terminal" value={terminal} />
              <Info label="Portão" value={portao} />
              <Info label="Voo" value={voo} />
            </View>
          </View>
          {/* QR Code */}
          <QRCode value={qcCodeValue} size={130} />
        </View>
      </View>
    </View>
  );
}
