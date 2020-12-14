import  { 
    configureStore, 
    ConfigureStoreOptions, 
    Store 
} from "@reduxjs/toolkit";
import postReducer from "../features/post/postSlice";

const storeConfig: ConfigureStoreOptions<any> = {
    reducer: {
        post: postReducer
    }
};

const store: Store<any> = configureStore(storeConfig);
export default store;
