function site(){
    var pro=document.getElementById('province');
    var city=document.getElementById('city');
    var country=document.getElementById('country');
    //获取省份
    for(var key in place){
        // console.log(key);
        var node=document.createElement('option');
        node.innerHTML=key;
        pro.appendChild(node);
    }
    
    //获取城市
    var s='河南省',c='郑州市';
    // console.log(place['河南省'][0]);
    for(var i in place[s][0]){
        // console.log(i)
        var node=document.createElement('option');
        node.innerHTML=i;
        city.appendChild(node);
    }
    
    //获取郑州的地区
    // console.log(place['河南省'][0]['郑州市'])
    for(var i in place[s][0][c]){
        // console.log(place[s][0][c][i]);
        for(var key in place[s][0][c][i]){
            var node=document.createElement('option');
            node.innerHTML=key;
            country.appendChild(node);
        }
    }
    
    pro.onchange=function(){
        // var index=this.selectedIndex;
        // s=this.value;
        s=pro.children[this.selectedIndex].innerHTML;
        console.log(s);
        city.innerHTML='';
        country.innerHTML='';
        for(var key in place[s][0]){
            var node=document.createElement('option');
            node.innerHTML=key;
            city.appendChild(node);
            // console.log(key);
        }
        // console.log(city.children[0].innerHTML);
        
        c=city.children[0].innerHTML;
    
        for(var i in place[s][0][c]){
            for(var key in place[s][0][c][i]){
                var node=document.createElement('option');
                node.innerHTML=key;
                country.appendChild(node);
            }
        }
    }
    
    city.onchange=function(){
        // c=this.value;
        c=city.children[this.selectedIndex].innerHTML;
        country.innerHTML='';
        for(var i in place[s][0][c]){
            for(var key in place[s][0][c][i]){
                var node=document.createElement('option');
                node.innerHTML=key;
                country.appendChild(node);
            }
        }
    }
}
site();
