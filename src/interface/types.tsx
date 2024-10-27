// types.ts
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  Contacts: undefined;
  Calling: { user: string };
};

export type ContactsScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Contacts'
>;

export default RootStackParamList;
