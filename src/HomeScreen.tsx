import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';

// HomeScreen bileşeninin props türünü tanımlayın
type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
      <Button
        onPress={() => navigation.navigate('Profile')}
        title="Profile"
        color="#841584"
        accessibilityLabel="Profile about this purple button"
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Likes')}
      >
        <Text>Likes</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
  },
  button: {
    backgroundColor: 'tomato',
    marginTop: 15,
    padding: 10,
  },
});

export default HomeScreen;


/**
 * Açıklamalar:
1-HomeScreenProps: Bu tip, HomeScreen bileşeninin navigation prop'unun doğru şekilde tiplenmesini sağlar. NativeStackScreenProps türü kullanılarak RootStackParamList ve 'Home' ekranı için tip belirlenir.

2-React.FC: Bu, fonksiyon bileşenlerinin tipini belirtir ve bileşenlerin props'larının doğru şekilde işlenmesini sağlar.

3- HomeScreen bileşeni:props ve navigation objelerinin türleri belirlenir.

 */


/***************** */

/* NativeStackScreenProps
Bu, React Navigation'ın TypeScript desteği için sağladığı bir türdür. NativeStackScreenProps türü, belirli bir ekran için props'ların tipini oluşturur. Bu tür, ekranın navigation ve route prop'larını içerir ve tip güvenliği sağlar.
 */

/***************** */

/**type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
Bu satır, HomeScreen bileşeninin props'larının tipini tanımlar. NativeStackScreenProps türü iki parametre alır:
İlk parametre: RootStackParamList – Bu, navigator'daki ekranları ve bu ekranlara ait parametreleri tanımlar.
İkinci parametre: 'Home' – Bu, RootStackParamList içinde belirli bir ekranın adıdır. Bu durumda, Home ekranı için props türünü belirtiyoruz.
NativeStackScreenProps<RootStackParamList, 'Home'>, HomeScreen bileşeninin navigation ve route prop'larının türlerini sağlar. */


/***************** */


/**Özet
NativeStackScreenProps türü, ekranlar arasında geçiş yapmak için kullanılan navigation ve route prop'larını tip güvenliği ile tanımlar.
RootStackParamList türü, navigator'daki ekranları ve bu ekranlara ait parametreleri tanımlar.
HomeScreenProps türü, HomeScreen bileşeninin props'larının tipini belirler, böylece navigation ve route prop'larının doğru türde olduğunu garanti eder.
React.FC<HomeScreenProps> kullanarak, HomeScreen bileşeninin props'larının doğru türde olduğunu belirtir ve TypeScript'in bu türleri kontrol etmesini sağlar. */