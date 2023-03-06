import {createStore} from 'vuex'

export default createStore({
    state() {
        return {
            userItems: [
                {
                    "id": 1,
                    "name": "Shoes 1"
                },
                {
                    "id": 2,
                    "name": "Shoes 2"
                },
                {
                    "id": 3,
                    "name": "Shoes 3"
                },
                {
                    "id": 4,
                    "name": "Shoes 4"
                },
                {
                    "id": 5,
                    "name": "T-shirt 1"
                },
                {
                    "id": 6,
                    "name": "T-shirt 2"
                },
                {
                    "id": 7,
                    "name": "T-shirt 3"
                },
                {
                    "id": 8,
                    "name": "T-shirt 4"
                }
            ],
            availableItems: [
                {
                    "id": 11,
                    "name": "Jacket 1"
                },
                {
                    "id": 12,
                    "name": "Jacket 2"
                },
                {
                    "id": 13,
                    "name": "Jacket 3"
                },
                {
                    "id": 14,
                    "name": "Jacket 4"
                },
                {
                    "id": 15,
                    "name": "Hoodie 1"
                },
                {
                    "id": 16,
                    "name": "Hoodie 2"
                },
                {
                    "id": 17,
                    "name": "Hoodie 3"
                },
                {
                    "id": 18,
                    "name": "Hoodie 4"
                }
            ],
            userSelected: [],
            userSelectedMaxCount: 6,
            availableSelected: null
        }
    },
    mutations: {
        setUserSelected(state, items) {
            state.userSelected = items
        },
        setAvailableSelected(state, id) {
            state.availableSelected = id
        }
    },
    actions: {
        toggleUserSelected({commit, state}, id) {
            let selectedItems = [...state.userSelected];
            const selectedId = selectedItems.indexOf(id)

            if (selectedId !== -1) {
                selectedItems.splice(selectedId, 1)
            } else {
                if (selectedItems.length >= state.userSelectedMaxCount) {
                    alert('Maximum number of items selected');
                    return;
                }
                selectedItems.push(id)
            }
            // можно было использовать индекс исходного массива, но так не интересно
            commit('setUserSelected', selectedItems)
        },

        toggleAvailableSelected({commit, state}, id) {
            commit('setAvailableSelected', state.availableSelected === id ? null : id)
        }
    },

    getters: {
        getUserItems(state) {
            let items = JSON.parse(JSON.stringify(state.userItems));
            let selected = [...state.userSelected]
            items = items.map(item => {
                if (selected.includes(item.id)) {
                    item.isSelected = true
                }
                return item
            })
            return items
        },

        getUserSelected(state) {
            if (!state.userSelected) return false;
            let items = []
            state.userSelected.forEach(id => {
                items.push(state.userItems.find((item) => item.id === id))
            })
            return items;
        },

        getUserSelectedMaxCount(state) {
            return state.userSelectedMaxCount
        },

        getAvailableSelected(state) {
            return state.availableSelected
                ? state.availableItems.find((item) => item.id === state.availableSelected)
                : false
        },

        getAvailableItems(state) {
            if (!state.availableSelected) return state.availableItems;

            let items = JSON.parse(JSON.stringify(state.availableItems));
            let selected = items.find((item) => item.id === state.availableSelected);
            selected.isSelected = true;
            return items;
        },
    }
})


