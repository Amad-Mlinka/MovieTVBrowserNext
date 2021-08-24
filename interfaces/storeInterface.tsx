import { pageInterface } from "./pageInterface";
import { searchTermState } from "./searchTermInterface";
import { sidebarState } from "./sidebarInterface";


export interface storeInterface {
    sidebarReducer: sidebarState,
    searchReducer: searchTermState,
    pageReducer: pageInterface
}

