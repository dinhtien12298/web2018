<?php
    require_once 'connectDB.php';
    function fetchData($query) {
        global $conn;
        $all_data = mysqli_query($conn, $query);
        $list_data = array();
        while ($result = mysqli_fetch_object($all_data)) {
            array_push($list_data, $result);
        }
        return $list_data;
    }

    $query_posts = "
        SELECT posts.id, title, view_num, like_num, content, fullname, classes.class, subjects.subject
        FROM users, subjects, classes, posts
        WHERE users.id = posts.user_id AND
        classes.id = subjects.class_id AND
        subjects.id = posts.subject_id
    ";

    require_once 'navigation.php';
    require_once 'footer.php';
    $all_posts = fetchData($query_posts);

    $list_classes = array("Mới nhất", "lớp 9", "lớp 8");


