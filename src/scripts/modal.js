const modal = () => {
    let instruction = document.getElementsByClassName("instruction-container")[0];
    let button = document.getElementById("instruction");
    let span = document.getElementsByClassName("close")[0];
    
    button.onclick = () => { instruction.style.display = "block"; };
    span.onclick = () => { instruction.style.display = "none"; };
    document.onclick = (e) => { if (e.target === instruction) instruction.style.display = "none"; };
}

export default modal;