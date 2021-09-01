// 回上層js製作
window.onscroll=()=>{
    if (scrollY > 100){
        document.querySelector("#scroll-up").classList.add("active")
    }
    else{
        document.querySelector("#scroll-up").classList.remove("active")
    }
}


// 搜尋切割文字
$(document).ready(function() {
    $("#myInput").on("keyup", function() 
    {
    // 抓 搜尋的關鍵詞
        var value = $(this).val().toLowerCase();
    // 抓Table裡頭有沒有符合
        $("#myTable tr").filter(function()
        {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});


// 按鈕顯示navbar
var menu = document.querySelector("#menu");
var navbar = document.querySelector(".navbar");

menu.onclick=() =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active')
}

// 計數器
function visitedCounter(){
    var link = "https://api.countapi.xyz/update/AerowSeast/0923/?amount=1"
    fetch(link)
        .then((response)=>{
            return response.json();
        })
        .then((data)=>{
            document.getElementById("visited").innerHTML=data.value;
        })
}

// 放入下載檔案
const dlbtn = document.getElementById('dlbtn')
dlbtn.addEventListener('click', () => {
	window.open("https://docs.google.com/spreadsheets/d/1koyJ4QZk_mzChfIOjYNTFwLF8UWSavjM/edit?usp=sharing&ouid=111161234247548322303&rtpof=true&sd=true")
})

