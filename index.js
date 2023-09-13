const $contentInput=document.getElementById("content-in")
const $contentOutput=document.getElementById("content")

const updateOutput=(e)=>{
    contentString=e.target.value
    //TODO :- detect and relace all literal escape characters
    formattedString=contentString.replace(/\\n/g, '\n');
    $contentOutput.innerHTML=formattedString
}
$contentInput.addEventListener("input",updateOutput)