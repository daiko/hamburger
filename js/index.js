// ハンバーガーメニュー
function drawer(){
    document.getElementById('line1').classList.toggle('line_1');
    document.getElementById('line2').classList.toggle('line_2');
    document.getElementById('line3').classList.toggle('line_3');
    document.getElementById('navigation').classList.toggle('in');
}
document.getElementById('drawer-navigation').addEventListener('click',function(){
    drawer(),false;
});

//HOMEをクリックすると閉じて消える
function drawer(){
    document.getElementById('line1').classList.toggle('line_1');
    document.getElementById('line2').classList.toggle('line_2');
    document.getElementById('line3').classList.toggle('line_3');
    document.getElementById('navigation').classList.toggle('in');
}
document.getElementById('home').addEventListener('click',function(){
    drawer(),false;
});

// //MENUをクリックすると閉じて消える
function drawer(){
    document.getElementById('line1').classList.toggle('line_1');
    document.getElementById('line2').classList.toggle('line_2');
    document.getElementById('line3').classList.toggle('line_3');
    document.getElementById('navigation').classList.toggle('in');
}
document.getElementById('menu').addEventListener('click',function(){
    drawer(),false;
});

//LOCATIONをクリックすると閉じて消える
function drawer(){
    document.getElementById('line1').classList.toggle('line_1');
    document.getElementById('line2').classList.toggle('line_2');
    document.getElementById('line3').classList.toggle('line_3');
    document.getElementById('navigation').classList.toggle('in');
}
document.getElementById('location').addEventListener('click',function(){
    drawer(),false;
});

//CONTACTをクリックすると閉じて消える
function drawer(){
    document.getElementById('line1').classList.toggle('line_1');
    document.getElementById('line2').classList.toggle('line_2');
    document.getElementById('line3').classList.toggle('line_3');
    document.getElementById('navigation').classList.toggle('in');
}
document.getElementById('contact').addEventListener('click',function(){
    drawer(),false;
});

//   スムーススクロール
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault()

        const target = document.querySelector(link.hash),
            //   adjust = 50,
              offsetTop = window.pageYOffset + target.getBoundingClientRect().top 

        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        })
        //指定したところに飛んだら消える
        if(document.getElementById('navigation').classList.contains('in')){
            const timerId = setInterval(() => {
                if (window.pageYOffset === offsetTop){
                    clearInterval(timerId)
                    document.getElementById('navigation').classList.remove('in')
                }
            }, 16)
        }
    })
  })

