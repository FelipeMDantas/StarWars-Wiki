import { FlatList } from "react-native"
import { Card } from "~/components/molecules"

export const GridList = ({ data }) => {
    return (
        <FlatList 
            numColumns={3}
            data={data}
            renderItem={({ item }) => <Card item={item} />}
            keyExtractor={(item) => String(item.id)}
        />
    )
}