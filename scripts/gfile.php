<?php
// В PHP 4.1.0 и более ранних версиях следует использовать $HTTP_POST_FILES
// вместо $_FILES.

$uploaddir = "/pictures/";
$uploadfile = $uploaddir.$_FILES['file']['name'];

move_uploaded_file($_FILES['file']['tmp_name'], $uploadfile);

echo 'Некоторая отладочная информация:';
print_r($_FILES);

?>
