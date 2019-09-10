import React from 'react';
import {View} from 'react-native';
import {Icon as ReactIcon} from 'react-native-elements';

import {WHITE} from '../constants/color';

type Props = {
  nameIcon?: string;
  typeIcon?:
    | 'material'
    | 'material-community'
    | 'font-awesome'
    | 'octicon'
    | 'ionicon'
    | 'foundation'
    | 'evilicon'
    | 'simple-line-icon'
    | 'zocial'
    | 'entypo'
    | 'feather'
    | 'materialcommunityicons'
    | 'antdesign';
  sizeIcon?: number;
  colorIcon?: string;
};

export default function Icon(props: Props) {
  let {nameIcon, typeIcon, sizeIcon, colorIcon, ...otherProps} = props;

  return nameIcon ? (
    <ReactIcon
      name={nameIcon}
      type={typeIcon || 'material'}
      size={sizeIcon || 30}
      color={colorIcon || WHITE}
      {...otherProps}
    />
  ) : (
    <View />
  );
}

//MenuBar icon = menu, Entypo
//Dashboard icon = home, Feather
//User Module icon = user, Feather
//News icon = printer, Feather
//Forum icon = clipboard, Feather
//Courses icon = book-open, Feather
//Events icon = calendar, Feather
//Support icon = phone-call, Feather
//Banner icon = image, Feather  
//Setting icon = gear, EvilIcons
//Logout icon = exit-to-app, MaterialIcons

// Buttons Icon =>
//Pencil icon = pencil, MaterialCommunityIcons (warnain putih)
//Comment icon = md-chatboxes, Ionicons (warnain putih)
//Delete icon = trash, Foundation (warnain putih)
//Logo X icon = cross, Entypo (warnain putih)
//Action (tidak ketemu)

//Category segitiga kebawah icon = caretdown, AntDesign (warnain abu2)
//Logo Tambah di thumbnail icon = plus, Feather