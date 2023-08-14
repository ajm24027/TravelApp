import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import Categories from '../../components/Categories'
import Title from '../../components/Title'
import styles from './styles'

const Home = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Title text="Where do" style={{ fontWeight: 'normal' }} />
        <Title text="you want to go?" />
        <Title text="Explore Attractions" style={styles.subtitle} />

        <Categories
          selectedCategory="All"
          categories={[
            'All',
            'Popular',
            'Historical',
            'Random',
            'Trending',
            'Exclusive',
            'Camping'
          ]}
        />
      </View>
    </SafeAreaView>
  )
}

export default Home
