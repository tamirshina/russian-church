
function helloWorld (textParaEl){

        if(textParaEl.current){
            console.log(textParaEl.current.scrollHeight);
            if(textParaEl.current.scrollHeight>textParaEl.current.offsetHeight){
                return true;
            }else{
                return false;
            }
        }

}
export default helloWorld;