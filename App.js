import { SafeAreaView, StyleSheet, Text, View, Button } from "react-native";
import Card from './src/components/card/index'
import style from './src/components/card/Card.style'

export default function App() {
  return (
    <SafeAreaView style={style.continer}>
      <Card title="Joe Cole" text="lorem lorem lorem"></Card>
      <Card title="Helena Pat" text="lorem lorem lorem"></Card>
      <Card title="Hans Zimmer" text="lorem lorem lorem"></Card>
    </SafeAreaView>
  );
}

