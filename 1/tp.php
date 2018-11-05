<?php 
$img_array = glob("*.{gif,jpg,png}",GLOB_BRACE); 
$img = array_rand($img_array); 
$bb=$img_array[$img]; 
if($bb){
header('Content-Type: image/JPEG');
@ob_end_clean();
@readfile($bb);
@flush(); @ob_flush();
 exit();
 }else{
 exit('error');
}
?>