var actions ={
//函数一致
    add1({commit}){
        setTimeout(() => {
            commit('add');//和mutations方法名保持一致
        },2000);
    }
}
export default actions;