<template>
  <div style="padding: 90px 0px;">
    <center><img src="hello.svg" alt="" style="width: 50%;"></center>
    <center>
      <p class="desc" style="margin: 35px 0px 30px 0px;">
        My <b>passion</b> is digital products. Combining my own <b>creative</b> and <b>technical</b> skills,<br> 
I bring <b>original</b> and fresh ideas to life. I love <b>sharing</b> my experiences and thoughts. <br> 
I’m working on something exciting here about <b>programming</b> and <b>technology</b>.<br>
In the meantime, feel free to <b>connect</b> with me on <b>social</b> media!
      </p>
    </center>
    <div class="main-themes" style="background-image: url('themes.svg')">
      <center>
        <img class="main-ava" src="ava.png" alt="">
      </center>
    </div> 
    <center>
      <p class="desc" style="margin: 35px 0px 40px 0px;">
        <a href="https://www.linkedin.com/in/pixl4tech/">Contact Me</a> 𐤟
         <a href="Profile.pdf">Download CV</a>
      </p>
    <div class="under-construction" style="background-image: url('under-construction.svg')">
      <p>{ ... website under construction ... }</p>
    </div>   
    </center>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  image: "themes.svg"
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

.main-themes {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    max-width: 748px;
    max-height: 408px;
    margin: auto;
    height: 400px;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
}

.under-construction {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 410px;
    height: 172px;
    margin: 30px auto 0px auto;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
}

.under-construction p {
    color: #bf99fd;
    font-size: 17px;
    font-weight: 200;
    margin-top: 14px;
}

.main-ava {
    max-width: 195px;
    border: solid 12px #44207e;
    border-radius: 300px;
    margin-top: -82%;
    margin-left: 7%;
}

.desc {
    font-size: 17px;
    line-height: 32px;
    color: #FFFFFF;
    font-style: normal;
    font-weight: 200;
}

a {
    color: #cbbfff;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}

</style>
