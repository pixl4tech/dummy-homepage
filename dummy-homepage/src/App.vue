<template>
  <a-layout class="layout">
    <a-layout-header :style="{ minHeight: '80px', background: '#fff' }">
      <Row>
        <Col xs={24} xl={8}>
        <div class="logo" style="float:left;"><a href="/"><img src="logo.svg" alt=""></a></div>
        </Col>

        <Col xs={24} xl={8} style="width: 30%;">
      <a-menu
        v-model:selectedKeys="selectedKeys"
        mode="horizontal"
        :style="{color: '#000', lineHeight: '80px', fontWeight: 300}"
      >
        <a-menu-item key="1">Main page</a-menu-item>
        <a-menu-item key="2">About</a-menu-item>
        <a-menu-item key="3">Blog</a-menu-item>
      </a-menu>
      </Col>

        <Col xs={24} xl={8} style="margin-left: auto; order: 2;">
       <div style="float:right; color:#000; margin-top: 8px;">

          <div class="social" style="float: left; font-size: 24px;">
            <a href="https://www.linkedin.com/in/pixl4tech/"><linkedin-filled /></a>
            <a href="https://github.com/pixl4tech"><github-filled /></a>
            <a href="#"><gitlab-filled /></a>
            <a href="#"><medium-square-filled /></a>
            <a href="#"><behance-circle-filled /></a>
            <a href="#"><twitter-circle-filled /></a>
            <a href="#"><instagram-filled /></a>
          </div>
        </div>
        </Col>

     </Row>
    </a-layout-header>
    <a-layout-content :style="{ background: '#45207E'}">
      <HelloWorld />
    </a-layout-content>
    <a-layout-footer style="text-align: left; min-height: 60px; height:auto; font-size:13px; padding: 20px 45px 0px 50px">
            <Row>
        <Col xs={24} xl={12}>
      <p style="float: left">Kolosov.dev © 2024 Software Developer</p>
      </Col>
        <Col xs={24} xl={12} style="margin-left: auto; order: 2;">
      <div class="footer-link" style="float: right">
        <a href="#">Contact email</a>
        <a href="#">Privacy</a>
        <a href="#">About</a>
      </div>
      </Col>
         </Row>
    </a-layout-footer>
  </a-layout>
</template>
<script>
import { 
        InstagramFilled, 
        GithubFilled, 
        LinkedinFilled, 
        GitlabFilled, 
        MediumSquareFilled, 
        BehanceCircleFilled,
        TwitterCircleFilled 
        } from '@ant-design/icons-vue';
import HelloWorld from './components/HelloWorld.vue'
import { ref } from 'vue';
import { Row, Col } from 'ant-design-vue';
export default {
  name: 'App',
  components: {
    HelloWorld,
    InstagramFilled,
    GithubFilled,
    GitlabFilled,
    LinkedinFilled,
    MediumSquareFilled,
    BehanceCircleFilled,
    TwitterCircleFilled,
    Row,
    Col
  },
  setup() {
    return {
      selectedKeys: ref(['1']),
    };
  },
}
;

</script>
<style>

.social a {
  color: #000;
  margin-left: 12px;
}

.footer-link a {
  color: #7E7E7E;
  margin-right: 15px;
}

.footer-link a:hover {
  color: #494949;
}


.social a:hover {
  color: #44207e;
  margin-left: 12px;
}

.site-layout-content {
  min-height: 280px;
  padding: 24px;
  background: #fff;
}
.logo {
  float: left;
  width: 70px;
  height: 31px;
  margin: 6px 0px 16px 0;
}
.ant-row-rtl #components-layout-demo-top .logo {
  float: right;
  margin: 16px 0 16px 24px;
}

.ant-layout-header {
    height: auto !important;
}

.ant-menu-item-selected, .ant-menu-item-active {
  color: rgb(0, 0, 0) !important;
}

.ant-menu-item-selected {
  font-weight: 500;
}

.ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item-selected::after, .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu-selected::after {
    border-bottom: 2px solid #000000 !important;
}
.ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item-active::after, .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item-active::after {
    border-bottom: 2px solid #000000 !important;
}

.ant-btn.ant-btn-background-ghost {
    color: #44207e !important;
    border-color: #44207e !important;
    border-radius: 20px;
    font-size: 13px;
}

.site-layout-content {
  background: #45207E;
}
</style>