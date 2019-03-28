/**
 * 判断字符串是否为空
 * @param {*} str 需要判断的字符串
 */
function isEmpty(str){
    if (str == null || str == "" || str == undefined) {
        return true
    } else {
        return false
    }
}


export default StringUtil ={isEmpty}