import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer'
import Inbox from './Inbox';
import Outbox from './Outbox';

export default function Messages() {
    const Drawer = createDrawerNavigator();
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Inbox" component={Inbox}/>
            <Drawer.Screen name="Outbox" component={Outbox}/>
        </Drawer.Navigator>
    )
}
