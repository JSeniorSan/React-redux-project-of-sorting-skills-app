import file from "../../mock/data.json";
import { FILTERED } from "./filter-const";
export const filterReducer = (state = file, action) => {
  switch (action.type) {
    case FILTERED: {
      return state;
    }
  }
};
