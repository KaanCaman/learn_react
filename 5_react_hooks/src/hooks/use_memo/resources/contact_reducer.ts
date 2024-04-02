import { ConAction, ConActionTypes, ConState } from "../resources/contact_type";

/**
 *
 * @param state ConState
 * @param action ConAction
 *
 * @returns ConState
 *
 * @description
 * Contact reducer is used to manage the state of the contacts.
 * Contact reducer kişilerin state'ini yönetmek için kullanılır.
 *
 *
 */

function reducer(state: ConState, action: ConAction): ConState {
  switch (action.type) {
    case ConActionTypes.ADD_CONTACT:
      return {
        ...state,
        contactList: [...state.contactList, action.payload],
      };
    case ConActionTypes.DELETE_CONTACT:
      return {
        ...state,
        contactList: state.contactList.filter(
          (contact) => contact !== action.payload
        ),
      };
    default:
      return state;
  }
}

export default reducer;
