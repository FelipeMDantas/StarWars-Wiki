import AsyncStorage from '@react-native-async-storage/async-storage'

const DB_KEY = '@StarWarsWiki:Favorites'

//AsyncStorage.clear()

export const useFavorites = () => {
  const addFavorite = async (data) => {
    try {
      let newDB
      const value = await AsyncStorage.getItem(DB_KEY)
      if (value !== null) {
        //there already is a database
        const db = JSON.parse(value)
        newDB = [...db, data]
      } else {
        //it is necessary to create a new database
        newDB = [data]
      }
      const jsonValue = JSON.stringify(newDB)
      await AsyncStorage.setItem(DB_KEY, jsonValue)
      return newDB
    } catch (error) {
      console.log({ error })
      return { error }
    }
  }

  const getFavorites = async () => {
    const value = await AsyncStorage.getItem(DB_KEY)
    if (value != null) {
      const db = JSON.parse(value)
      return db
    }
    return []
  }

  const removeFavorite = async (data) => {
    try {
      let newDB
      const value = await AsyncStorage.getItem(DB_KEY)
      if (value !== null) {
        const db = JSON.parse(value)
        newDB = db.filter(
          (item) => item.id !== data.id && item.title !== data.title
        )
      } else {
        newDB = []
      }
      const jsonValue = JSON.stringify(newDB)
      await AsyncStorage.setItem(DB_KEY, jsonValue)
      return newDB
    } catch (error) {
      console.log({ error })
      return { error }
    }
  }

  return {
    addFavorite,
    getFavorites,
    removeFavorite,
  }
}
