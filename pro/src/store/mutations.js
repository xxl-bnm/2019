var mutations={
    //更改count值，
    add(state){
        state.count++;
    },
    login(state,username){
        state.name =username;
    }
    //异步提交在actions里
}
export default mutations;