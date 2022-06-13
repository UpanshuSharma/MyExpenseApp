import { View } from 'react-native';
import React from 'react';
import {Avatar, Button, Menu, Divider, Provider} from 'react-native-paper';


const MenuComponent = () => {
  const [visible, setVisible] = React.useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  return (
        <Provider>
              <View
                    style={{
                    paddingTop: 50,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    }}>
                    <Menu
                          visible={visible}
                          onDismiss={closeMenu}
                          anchor={<Button onPress={openMenu}>Up</Button>}>
                          <View >
                                  <Menu.Item icon="redo" onPress={() => {}} title="Redo" />
                                  <Menu.Item icon="undo" onPress={() => {}} title="Undo" />
                                  <Menu.Item icon="content-cut" onPress={() => {}} title="Cut" disabled />
                                  <Menu.Item icon="content-copy" onPress={() => {}} title="Copy" disabled />
                                  <Menu.Item icon="content-paste" onPress={() => {}} title="Paste" />
                          </View>
                    </Menu>
            </View>
      </Provider>

  )
}

export default MenuComponent;