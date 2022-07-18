//select Bill
    let bill=document.querySelector(".bill");
    let bl=0;
    bill.onblur=function(){
      bl=this.value;
      if(bl==""|| parseInt(bl)<=0||isNaN(bl)){
        document.querySelector(".w1").style.display="block";
        bill.style.border="1px solid red";
      }
      else{
          document.querySelector(".w1").style.display="none";
          bill.style.border="1px solid green";
      }
      active();
    }
    //select tip
    let tips=document.querySelectorAll(".tp");
    //console.log(tips);
    let tip=0;
    tips.forEach(el=>{
      el.onclick=function(){
      if(parseInt(el.innerHTML)!==tip){
      el.style.backgroundColor="hsl(172, 67%, 45%)";
      el.style.color="hsl(183, 100%, 15%)";
      tip=parseInt(el.innerHTML);
      tips.forEach(elm=>{if(elm!=el){
        elm.style.backgroundColor="hsl(183, 100%, 15%)";
        elm.style.color="white";
      }});
      }
      else{
        tips.forEach(elm=>{
          elm.style.backgroundColor="hsl(183, 100%, 15%)";
          elm.style.color="white";
        });
        tip=0;
      }
      active();
    }});
    //select custom
    let cstm=document.querySelector(".ctm");
    cstm.onclick=function(){
      tips.forEach(elm=>{
          elm.style.backgroundColor="hsl(183, 100%, 15%)";
          elm.style.color="white";
        });
        tip=0;
        active()
    }
    cstm.onblur=function(){
      tip=parseInt(cstm.value);
      if(isNaN(tip))
      tip=0;
      active();
    }
    //select num of people
    let peo=document.querySelector(".pep");
    let people=0;
    peo.onblur=function(){
      people=this.value;
      if(people==""|| parseInt(people)<=0||isNaN(people)){
        document.querySelector(".w2").style.display="block";
        this.style.border="1px solid red";
      }
      else{
          document.querySelector(".w2").style.display="none";
          this.style.border="1px solid green";
      }
      active();
    }
    let btn=document.querySelector("button");
    let act=false;
    function active(){
       //calc amount of tip per person
        bl=parseFloat(bl);
        people=parseInt(people);
        tip=parseFloat(tip);
        let amount_tip=0.0;
        amount_tip=parseFloat((bl*(tip/100))/people).toFixed(2);
        //calc total per person 
        let total=0.0;
        total=parseFloat(tip+(bl/people)).toFixed(2);
      if(bl>0&&people>0&&tip>0&&total>0&&amount_tip>0){
        let amountTipDisplay=document.querySelector(".fr");
        amountTipDisplay.innerHTML=amount_tip;
        let totalDisplay=document.querySelector(".sc");
        totalDisplay.innerHTML=total;
        btn.style.backgroundColor="hsl(172, 67%, 45%)";
        btn.style.color="white";
        act=true;
      }
    }
    //btn click
    btn.onclick=function(){
      if(act)
      window.location.reload();
    }