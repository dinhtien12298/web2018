var subjectTab = document.getElementsByClassName('subject-tab');
var tabPost = document.getElementsByClassName('tab-post');
var viewAllTag = document.getElementsByClassName('view-all-tag');

for (let i = 0; i < subjectTab.length; i++) {
    if (i == 0 || i == 4) {
        subjectTab[i].classList.add('subject-active');
    }
    subjectTab[i].onclick = function() {
        var subjectActive = document.getElementsByClassName('subject-active');
        for (let j = 0; j < subjectActive.length; j++) {
            if (j == parseInt(i/4)) {
                subjectActive[j].classList.remove('subject-active');
            }
        }
        subjectTab[i].classList.add('subject-active');
        for (let k = 0; k < tabPost.length; k++) {
            if (k == parseInt(i/4) + 1) {
                axios({
                    method: 'GET',
                    url: "/miny/controllers/contentHomepage.php",
                    params: {
                        "subjectid": subjectTab[i].dataset.subjectid,
                    }
                }).then((response) => {
                    var posts = response.data;
                    var tabPostHTML = posts.map(
                        post => `
                            <div class="post-model" data-location="/miny/detail.php?post=${ post.id }">
                                <div class="post-title">
                                    <a href="/miny/detail.php?post=${ post.id }" class="f-medium-17">${ post.title }</a>
                                </div>
                                <div class="post-heading d-flex">
                                    <div class="post-author f-medium-12">
                                        ${ post.fullname }
                                    </div>
                                    <div class="post-info f-regular-13">
                                        <div><img src="./assets/images/homepage/icon-view.png" alt="icon-view">${ post.view_num }</div>
                                        <div><img src="./assets/images/homepage/icon-heart.png" alt="icon-like">${ post.like_num }</div>
                                    </div>
                                </div>
                                <div class="post-content f-regular-13">
                                    ${ post.content }
                                </div>
                            </div>
                        `
                    );
                    tabPost[k].innerHTML = `${tabPostHTML.join("")}`;
                    // Click on PostModel
                    var postModel = document.getElementsByClassName('post-model');
                    for (let h = 0; h < postModel.length; h++) {
                        postModel[h].onclick = function () {
                            window.location.href = postModel[h].dataset.location;
                        }
                    }
                })
            }
        }
    }
}

for (let i = 0; i < viewAllTag.length; i++) {
    viewAllTag[i].onclick = function() {
        var subjectActive = document.getElementsByClassName('subject-active');
        for (let j = 0; j < subjectActive.length; j++) {
            if (j == parseInt(i/4)) {
                window.location.href = `/miny/category.php?class=${viewAllTag[i].dataset.classname}&subject=${subjectActive[j].innerHTML}&page=1`;
            }
        }
    }
}