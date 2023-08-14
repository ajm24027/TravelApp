import { FlatList, Text, View } from 'react-native'
import styles from './styles'
import React from 'react'

// To Override a style, you add the styles to an array, as the later index comes after the original style, it will override it like is done in regular CSS.

// Below a ternary operator is used to conditonally overwrite the selectedCategory Style. It's saying if selectedCategory is item, add selectedItem to the style array, thus overwriting the default style with the one later in the array, styles.selectedItem, else, return an empty object.

// style={[
//   styles.item,
//   selectedCategory === item ? styles.selectedItem : {}
// ]}

// renderItem is a required prop --> https://reactnative.dev/docs/flatlist?language=javascript

const Categories = ({ categories, selectedCategory }) => {
  return (
    <FlatList
      horizontal
      data={categories}
      renderItem={({ item }) => {
        const selected = selectedCategory === item
        return (
          <View
            style={[
              styles.itemContainer,
              selected ? styles.selectedItemContainer : {}
            ]}
          >
            <Text style={[styles.item, selected ? styles.selectedItem : {}]}>
              {item}
            </Text>
          </View>
        )
      }}
    />
  )
}

export default React.memo(Categories)
