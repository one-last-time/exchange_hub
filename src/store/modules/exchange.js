import {db} from "../../db";
import { getDocs, query, collectionGroup } from "firebase/firestore";


export default {
    namespaced: true,
    state(){
        return{
            exchanges: []
        }
    },
    actions: {
        async getExchanges({commit}){
            const echange_query = query(collectionGroup(db, 'exchanges'))
            const snapshot = await getDocs(echange_query)
            const exchanges = snapshot.docs.map(doc => {
                const data = doc.data()
                return data
            })
            commit("setExchanges", exchanges)
        }
    },
    mutations: {
        setExchanges(state, exchanges){
            state.exchanges = exchanges;
        }
    }
}