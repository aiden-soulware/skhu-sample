<template>
  <div>1</div>
</template>
<script>

export default {
 mounted() {
    this.getData();
  },
    methods :{
    getDataresult(){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
     resolve("ok");
    },1000),
    (err)=>{
        reject(err);
    }
    })
    },

    getData(){
    console.log("시작");
    let p = this.getDataresult();
    p.then((result)=>{
    console.log(result);
    })
    .catch((err)=>{
        console.log(err);
    })
    .finally(()=>{
        console.log("끝");
    })
    }
    }
};
</script>