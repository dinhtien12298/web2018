<?php
    $data_navbar = json_decode( file_get_contents("./data/navbar.json") );
    $data_post = json_decode( file_get_contents("./data/posts.json") );
    $data_footer = json_decode( file_get_contents("./data/footer.json") );
    $data_ad = json_decode( file_get_contents("./data/advertiment.json") );
    $data_type = json_decode( file_get_contents("./data/type.json") )[0];
    $post_class = "Lớp 9";
    $list_subject = array("Soạn văn", "Toán học");
?>