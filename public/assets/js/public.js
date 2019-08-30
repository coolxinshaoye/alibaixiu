//随机推荐数据
$.ajax({
    type: 'get',
    url: '/posts/random',
    success: function (res) {
        var temp = `
        {{each data}}
        <li>
        <a href="detail.html?id={{$value._id}}">
          <p class="title">{{$value.title}}</p>
          <p class="reading">阅读({{$value.meta.views}})</p>
          <div class="pic">
            <img src="{{$value.thumbnail}}" alt="">
          </div>
        </a>
      </li>
        {{/each}}
        `;
        var html = template.render(temp, {
            data: res
        });
        $('#randomBox').html(html);
    }
})
//向服务器端发送请求，索要文章分类列表数据
$.ajax({
    type: 'get',
    url: '/categories',
    success: function (res) {
        // console.log(res);
        var navTpl = `
        {{each data}}
        <li>
            <a href="list.html?categroyId = {{$value._id}}">
                <i class="fa {{$value.className}}"></i>{{$value.title}}
            </a>
        </li>
        {{/each}}
        `;
        var html = template.render(navTpl , {data:res});
        $('#navClass').html(html);
    }
})