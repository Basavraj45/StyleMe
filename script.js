let editContent=document.getElementById('edit-box');
function changeBgColor(bgcolorName)

{
     editContent.style.background='none';
     editContent.style.backgroundColor=bgcolorName;
}

function changeTextColor(colorName)
{
     editContent.style.color=colorName;
}

function changeFontStyle(fontStyleName)
{
     editContent.style.fontFamily=fontStyleName;
}
function changeBgImage(bgImage)
{
     
    editContent.style.backgroundImage="url("+ bgImage + ")"
    editContent.style.backgroundPosition='center';
    editContent.style.backgroundSize='cover';
    editContent.style.backgroundRepeat='no-repeat';


}
/* second method
function changeBgImage(bgImage)
{
    editContent.style.backgroundImage=`url('${bgImage}')`
    editContent.style.backgroundPosition='center';
    editContent.style.backgroundSize='cover';
    editContent.style.backgroundRepeat='no-repeat';

}
*/
