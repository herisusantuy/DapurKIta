import React from 'react';
import {View, StyleSheet} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';

const DrawerContent = (props) => {
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);
  const toggleTheme = () => setIsDarkTheme(!isDarkTheme);

  return (
    <View style={styles.drawerContent}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{flexDirection: 'row', marginTop: 15}}>
              <Avatar.Image
                source={{
                  uri:
                    'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.hollywoodreporter.com%2Fheat-vision%2Fwhy-has-avatar-2-release-date-been-delayed-years-1208612&psig=AOvVaw1dJ2EIRFMFLc2JU44OGt1i&ust=1595519774873000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKjN0L2c4eoCFQAAAAAdAAAAABAD',
                }}
                size={50}
              />
              <View style={{flexDirection: 'column', marginLeft: 15}}>
                <Title style={styles.title}>Indah Nurul Hanifah</Title>
                <Caption style={styles.caption}>@indahnurulhanifah</Caption>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.caption]}>
                  100
                </Paragraph>
                <Caption style={styles.caption}>Orders</Caption>
              </View>
              <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.caption]}>
                  100
                </Paragraph>
                <Caption style={styles.caption}>Points</Caption>
              </View>
            </View>
          </View>
          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="md-fast-food-outline" color={color} size={size} />
              )}
              label="Explore"
              onPress={() => props.navigation.navigate('Explore')}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="ios-newspaper-outline" color={color} size={size} />
              )}
              label="My Order"
              onPress={() => props.navigation.navigate('My Order')}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="ios-heart-outline" color={color} size={size} />
              )}
              label="Favourites"
              onPress={() => props.navigation.navigate('Favourites')}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="ios-person-outline" color={color} size={size} />
              )}
              label="Profile"
              onPress={() => props.navigation.navigate('Profile')}
            />
          </Drawer.Section>
          <Drawer.Section title="Preferences">
            <TouchableRipple
              onPress={() => {
                toggleTheme();
              }}>
              <View style={styles.preference}>
                <Text>Dark Theme</Text>
                <View pointerEvents="none">
                  <Switch value={isDarkTheme} />
                </View>
              </View>
            </TouchableRipple>
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({color, size}) => (
            <Icon name="ios-exit-outline" color={color} size={size} />
          )}
          label="Sign Out"
          onPress={() => {}}
        />
      </Drawer.Section>
    </View>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
