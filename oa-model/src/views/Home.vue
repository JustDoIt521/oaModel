<template>
  <div class="home">
    <el-container>
      <el-header>头部</el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu default-active="phone"
            class="el-menu-vertical-demo"
            :router="true"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
          >
            <!-- <el-menu-item v-for="(item, index) in routers" :index="item.index" :key="index">
              {{item.label}}
            </el-menu-item> -->
            <template v-for="item in menu">
              <el-submenu v-if="(item.children.length) > 0" :index="item.index" :key="item.index">
                <template slot="title">
                  <i :class="item.resoucesIcon"></i>
                  <span>{{item.label}}</span>
                </template>
                <el-menu-item v-for="(child,index) in item.children" :key="index" :index="child.index">
                  <span slot="title">{{child.label}}</span>
                </el-menu-item>
              </el-submenu>
              <el-menu-item v-else :index="item.index" :key="item.index">
                <i :class="item.resoucesIcon"></i>
                <span slot="title">{{item.label}}</span>
              </el-menu-item>
            </template>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
export default {
  name: 'home',
  data () {
    return {
      menu: [
        {
          index: '电器',
          label: '电器',
          resoucesIcon: '',
          children: [{
            index: 'phone',
            label: '手机',
            resoucesIcon: ''
          },
          {
            index: 'tv',
            label: '电视',
            resoucesIcon: ''
          }]
        },
        {
          index: 'desk',
          label: '桌子',
          resoucesIcon: '',
          children: []
        }
      ]
    }
  }
}
</script>
