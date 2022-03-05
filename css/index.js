hoursCount:number =0;
   hoursCountStop:any =setInterval(()=>{
       this.hoursCount++;
        if(this.hoursCount==8600){
          clearInterval(this.hoursCountStop);
        }
   },1);
   minutesCount:number=0;
   minutesCountStop:any =setInterval(()=>{
     this.minutesCount++;
     if(this. minutesCount==720){
       clearInterval(this.minutesCountStop);
     }
   },20);
   daysCount:number=0;
   daysCountStop:any=setInterval(()=>{
     this.daysCount++;
     if(this.daysCount==30){
       clearInterval(this.daysCountStop);
     }
   },120);