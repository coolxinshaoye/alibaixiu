//获取热门推荐功能
$.ajax({
    url: '/posts/recommend',
    type: 'get',
    success: function (res) {
        // console.log(res);
        var temp =`
        {{each data}}
            <li>
                 <a href="detail.html?{{$value._id}}">
                    <img src="{{$value.thumbnail}}" alt="">
                    <span>{{$value.title}}</span>
                </a>
            </li>
        {{/each}}`;
        var str = template.render(temp,{data:res});
        $('#recommend').html(str);
    }
})
