function showPageView(count){
      $("#page_view").html('&nbsp;&nbsp;<font color="red">'+count+'</font>');
}
$(function() {
      var article_id = 1;
      $.ajax({
          url:"http://123.56.118.120/?r=stat/pageview",
          data:{"article_id":article_id},
          type:"post",
          dataType:'jsonp',
          crossDomain:true,
          success:function(e){
              var json = e;
              var err_code = json.err_code;
              var message = json.message;
              if(err_code==0){
                  showPageView(json.data.page_view);
                  return true;
              }else{ 
                  showPageView(0);
                  return false;
              }
          }
      });
});
