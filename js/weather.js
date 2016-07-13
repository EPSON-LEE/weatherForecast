function httpRequest(url, callback){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function() {
            if (xhr.readyState == 4) {
                if(xhr.status == 200) {
                    callback && callback(xhr.responseText);
                }else{
                    alert('出错了：' + xhr.status);
                }
            }
    }
    xhr.send();
}

function showWeather(result){
    result = JSON.parse(result);
    var list = result;
    var table = '<table><tr><th>查询状态</th><th>天气</th><th>温度</th></tr>';
    table += '<tr>';
    table += '<td>'+list.msg+'</td>';
    table += '<td>'+list.counts +'</td>';
    table += '<td>'+list.data +' °C</td>';
    table += '</tr>';
    table += '</table>';

    document.getElementById('weather').innerHTML = table;
}

var city = localStorage.city;
city = city?city:'CH10200';
var url = 'http://api.yytianqi.com/observe?city='+city+'&key=geqgejb2w2bj19pf';
httpRequest(url, showWeather);
