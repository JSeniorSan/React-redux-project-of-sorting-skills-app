import { createStore } from "redux";
import { filterReducer } from "../store/filter/filter-redusers";
export const store = createStore(filterReducer);

// будет 2 редьюсера, нужен роутинг.
// Идея: стор - дата список, нажатие на кнопку приводит к созданию экшена, котрый передаст массив с фильтруемыми компонентами, после чего в редьюрсере будет возврат стэйта, а в селекторе будет фильтроваться содержимое.
