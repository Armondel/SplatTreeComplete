function dragStart(ev) {
    ev.dataTransfer.effectAllowed='move';
    ev.dataTransfer.setData("Text", $(ev.target).attr('id'));
    return true;
}
function dragEnter(ev) {
    ev.preventDefault();
    return true;
}
function dragOver(ev) {
    ev.preventDefault();
}
function dragDrop(ev) {
    var data = ev.dataTransfer.getData("Text");
    var lis = ev.target.parentNode.nextElementSibling.childNodes[1];
    lis.appendChild(document.getElementById(data).closest('li'));
    ev.stopPropagation();
    return false;
}
