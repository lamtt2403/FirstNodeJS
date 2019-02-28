/**
    Sử dụng modul express(là một web application framework) 
*/
var express = require('express');

//Tạo đối tượng express()
var app = express();

//Khai báo với server, những dữ liệu hình ảnh trong thư mục này  người dùng có thể truy cập vào
app.use(express.static('public'));

// Sử dụng thư viện EJS để xử lý các trang, sẽ tạo ra các trong html để trả về giao diện người dùng 
app.set('view engine', 'ejs');

//Khai báo đường dẫn tới thư mục chứa các trang của ApplicationServer
app.set('views', './views');

//Định nghĩa cổng lắng nghe 
app.listen(3000);

// Định nghĩa đường dẫn để truy cập tới một trang 
app.get('/', function(request, response){
    response.render('home_page');
})

app.get('/test', function(request, response){
    response.render('test_page')
})