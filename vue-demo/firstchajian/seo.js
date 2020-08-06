
let Btn1 = document.getElementById('btn1');
let Btn2 = document.getElementById('btn2');
let Btn3 = document.getElementById('btn3');
let Result = document.getElementById('result');
let Reg = new RegExp('(http|https):\\/\\/([\\w.]+\\/?)\\S*', 'g')
Btn1.onclick=function() {      //执行数据筛选
    let result = '';
    let result2 = '';   //左边框删选出url地址字符串
    let BoxL = document.getElementsByClassName('boxL')[0];
    let BoxR = document.getElementsByClassName('boxR')[0];
    let BoxLValue1 = BoxL.value.replace(/\s*\n+/g,'\n').replace(/^\n/g,'').replace(/^[\u4e00-\u9fa5\s]*$\n?/mg,'').split('\n');//左边输入框数据转成数组，用来获取次数，exec方法执行多少次,也是用来最后输出的结果             
    for (let index = 0; index < BoxLValue1.length; index++) {  
        BoxLValue1[index]==''? null:result2 += Reg.exec(BoxL.value)[0]+'\n';
    };
    let BoxLValue=result2.split('\n');  //左边的删选出来的url转成数组
    let BoxRValue = BoxR.value.split('\n')//右边输入框转成数组
    for (let a = 0; a < BoxRValue.length; a++) {
        let elementR = BoxRValue[a];
        for (let p = 0; p < BoxLValue.length; p++) {
            if (BoxLValue[p]) {  //判断左边的框是否为空
                let elementL = BoxLValue[p];
                elementL == elementR ? result += a + 1 + '\t' + BoxRValue[a] + '\t' + BoxLValue1[p] + '\n' : null;
            }
        }
    }            
    Result.value = result;
    Reg.lastIndex=0;
}
Btn2.onclick=function ()  {               //一键复制结果
    Result.select();                // 选择对象
    document.execCommand("Copy");   // 执行浏览器复制命令
    alert('复制成功');
}  

Btn3.onclick=function ()  {   //清空数据
    document.getElementsByClassName('boxL')[0].value = null;
    document.getElementsByClassName('boxR')[0].value = null;
    Result.value = null;
}
      
