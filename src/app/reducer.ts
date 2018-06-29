/* 
export interface IAppStore{
counter:number;
}
export const INITIAL_STATE:IAppStore={
  counter:0
} */
export function rootReducer(state, action) {
  console.log(action);
  switch (action.type) {
    case 'INCREMENT':
      return { counter: state.counter + 1 };
    case 'DECREMENT':
      return { counter: state.counter - 1 };
    default: return state;
  }
}
