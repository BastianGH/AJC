// //const { createSlice } = require('@reduxjs/toolkit')
// import { createSlice } from '@reduxjs/toolkit'

// const xxxSlice = createSlice({

//     name: 'xxx',
//     initialState: {
//         /* clés du state, exemple :
//             cartList: [],
//             total: 0,
//             etc. etc.
//         */
//     },
//     reducers: {
//         add(state, action) {
//             const updatedCartList = state.cartList.concat(action.payload);
//             const updatedTotal = state.total + action.payload.price;
//             return {...state, total: updatedTotal, cartList: updatedCartList};
//         },
//         remove(state, action) {
//             const updatedCartList = state.cartList.filter(product => product.id !== action.payload.id);
//             const updatedTotal = state.total - action.payload.price;
//             return {...state, total: updatedTotal, cartList: updatedCartList};
//         }
//     }

// })

// export const { add, remove } = xxxSlice.actions;
// export const xxxReducer = xxxSlice.reducer;



// /* Pour utiliser les éléments du Slice dans le composant :

// // en lecture :
// import { useSelector } from 'react-redux'
// puis avant le return :
// const cartList = useSelector(state => state.xxxState.cartList);
// enfin dans le return on bind de cette façon :
// {cartList.length} par exemple pour avoir la taille du tableau

// // en écriture :
// import { useDispatch, useSelector } from 'react-redux'
// import { add, remove } from '../store/xxxSlice'

// puis avant le return :
// const dispatch = useDispatch();
// const cartList = useSelector(state => state.xxxState.cartList);

// ensuite dans une fonction (liée à un écouteur d'évènement click sur un bouton par exemple)>
// <button onClick={() => dispatch(add(données))}  // pour ajouter un élément
// <button onClick={() => dispatch(remove(données))}  // pour supprimer un élément

// Si un composant a besoin d'agir sur plusieurs slices, bien définir des noms d'actions précis dans chaque slice 
// exemple : addCart, addProduct, addUser, etc au lieu de seulement add

// */

