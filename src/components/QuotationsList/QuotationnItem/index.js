import React, { Fragment } from 'react'
import { View, Text, Image } from 'react-native'
import styles from './styles'

export default function QuotationItems(){
    return(
        <View style={styles.mainContent}>
            <View style={styles.contextLeft}>
                <View style={styles.boxLogo}>
                    <Image
                        style={styles.logoBitcoin}
                        source={require('../../../img/Bitcoin.jpeg')}
                    />
                    <Text style={styles.dayCotation}>06/09/2024</Text>
                </View>
            </View>
            <View style={styles.contextRight}>
                <Text style={styles.price}>$ 53331.052</Text>
            </View>
            
        </View>
    )
}
