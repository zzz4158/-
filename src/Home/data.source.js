import React from 'react';
import logo from '../asset/logo.png'
import teamImg0 from '../asset/fateSN.jpg'
import teamImg1 from '../asset/gmzr.png'
import teamImg2 from '../asset/dzyz.png'

import { Typography,Icon } from 'antd';
const { Paragraph } = Typography;

export const Nav10DataSource = {
  wrapper: { className: 'header1 home-page-wrapper jwhlt2t26y9z-editor_css' },
  page: { className: 'home-page' },
  logo: {
    className: 'header1-logo',
    children: logo,
  },
  Menu: {
    className: 'header1-menu',
    children: [
      { name: 'item0', a: { children: '首页', link: '/' } },
      { name: 'item1', a: { children: '动漫', link: '/dongman' } },
      { name: 'item2', a: { children: '音乐', href: '/yinyue' } },
      // { name: 'item3', a: { children: '导航四', href: '' } },
    ],
  },
  mobileMenu: { className: 'header1-mobile-menu' },
  user: {},
};
export const Banner10DataSource = {
  wrapper: { className: 'banner1 jwhlup0yo4j9-editor_css' },
  BannerAnim: {
    children: [
      {
        name: 'elem0',
        BannerElement: { className: 'banner-user-elem' },
        textWrapper: { className: 'banner1-text-wrapper' },
        bg: {className:'bg bg0'},
        title: {
          className: 'banner1-title',
          children:
            '刀剑神域',
        },
        content: {
          className: 'banner1-content',
          children: '这虽然是游戏，但可不是闹着玩的',
        },
        button: { className: 'banner1-button', children: <a href='/dongman/0'>追番</a> },
      },
      {
        name: 'elem1',
        BannerElement: { className: 'banner-user-elem' },
        textWrapper: { className: 'banner1-text-wrapper' },
        bg: { className: 'bg bg1'
          // src:bannerImg2
        },
        title: {
          className: 'banner1-title',
          children:
            '某科学的超电磁炮',
        },
        content: {
          className: 'banner1-content',
          children: '你指尖跃动的光芒，是我一生不变的信仰',
        },
        button: { className: 'banner1-button', children: <a href='/dongman/1'>追番</a> },
      },
      {
        name: 'elem2',
        BannerElement: { className: 'banner-user-elem' },
        textWrapper: { className: 'banner1-text-wrapper' },
        bg: { className: 'bg bg2' },
        title: {
          className: 'banner1-title',
          children:
            'JoJo的奇妙冒险：黄金之风',
        },
        content: {
          className: 'banner1-content',
          children: '我真是HIGH到不行啦！',
        },
        button: { className: 'banner1-button', children: <a href='/dongman/2'>追番</a> },
      },
    ],
  },
};
export const Teams30DataSource = {
  wrapper: { className: 'home-page-wrapper teams3-wrapper' },
  page: { className: 'home-page teams3' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [{ name: 'title', children: '最近更新' }],
  },
  blockTop: {
    className: 'block-top-wrapper',
    children: [
      {
        name: 'block0',
        className: 'block-top',
        md: 8,
        xs: 24,
        titleWrapper: {
          children: [
            {
              name: 'image',
              className: 'teams3-top-image',
              children:
              <a href="/dongman/3"><img src={teamImg0} alt="img"/></a>,
            },
            {
              name: 'title',
              className: 'teams3-top-title',
              children: 'Fate/Stay Night',
            },
            {
              name: 'content',
              className: 'teams3-top-job',
              children: '原作 奈须蘑菇/TYPE-MOON',
            },
            {
              name: 'content1',
              className: 'teams3-top-content',
              children:
                <Paragraph ellipsis={{ rows: 3, expandable: true }}>
                  简介：圣杯是传说中可实现持有者一切愿望的宝物。而为了得到圣杯的仪式就被称为圣杯战争。参加圣杯战争的七名由圣杯选出的魔术师被称为Master，与七名被称为Servant的使魔订定契约。他们是由圣杯选择的七位英灵，被分为七个职阶，以使魔的身份被召唤出来。能获得圣杯的只有一组，这七组人马各自为了成为最后的那一组而互相残杀。
                </Paragraph>,
            },
          ],
        },
      },
      {
        name: 'block1',
        className: 'block-top',
        md: 8,
        xs: 24,
        titleWrapper: {
          children: [
            {
              name: 'image',
              className: 'teams3-top-image',
              children:
                <a href="/dongman/4"><img src={teamImg1} alt="" /></a> ,
            },
            {
              name: 'title',
              className: 'teams3-top-title',
              children: '鬼灭之刃',
            },
            {
              name: 'content',
              className: 'teams3-top-job',
              children: '原作：吾峠呼世晴',
            },
            {
              name: 'content1',
              className: 'teams3-top-content',
              children:
              <Paragraph ellipsis={{ rows: 3, expandable: true }}>
                  简介：大正时期，日本。心地善良的卖炭少年·炭治郎，有一天他的家人被鬼杀死了。而唯一幸存下来的妹妹——祢豆子变成了鬼。被绝望的现实打垮的炭治郎，为了寻找让妹妹变回人类的方法，决心朝着“鬼杀队”的道路前进。人与鬼交织的悲哀的兄妹的故事，现在开始！
                  </Paragraph>,
            },
          ],
        },
      },
      {
        name: 'block2',
        className: 'block-top',
        md: 8,
        xs: 24,
        titleWrapper: {
          children: [
            {
              name: 'image',
              className: 'teams3-top-image',
              children:
               <a href="dongman/5"><img src={teamImg2} alt=""/></a> ,
            },
            {
              name: 'title',
              className: 'teams3-top-title',
              children: '盾之勇者成名录',
            },
            {
              name: 'content',
              className: 'teams3-top-job',
              children: '原作：Aneko Yusagi',
            },
            {
              name: 'content1',
              className: 'teams3-top-content',
              children:
                <Paragraph ellipsis={{ rows: 3, expandable: true }}>
                  简介：极为平凡的御宅族大学生·岩谷尚文，受到在图书馆发现的一本书所引导，被召唤到了异世界。他被赋予的使命，是作为装备着剑、枪、弓、盾的四圣勇者之一“盾之勇者”，驱逐给世界带来混沌的灾害“波”。因为大冒险而心潮澎湃，和同伴一同踏上旅程的尚文。但，他刚出发没几天就遭到背叛，金钱和立场全都失去。变得无法相信他人的尚文，驱使着奴隶少女·拉芙塔莉雅，向波和世界发起对抗——。究竟他能否打破这种绝望的状况？失去一切的男人的成名奇幻故事，开幕。
                </Paragraph>,
            },
          ],
        },
      },
    ],
  },
  block: {
    className: 'block-wrapper',
    gutter: 72,
    children: [
      {
        name: 'block0',
        className: 'block',
        md: 8,
        xs: 24,
        image: {
          name: 'image',
          className: 'teams3-image',
          children:
            'http://p1.music.126.net/5ErsmSshTKt5AKrXWUuqvw==/528865136464112.jpg?param=130y130',
          href:'/music/'
        },
        titleWrapper: {
          className: 'teams3-textWrapper',
          children: [
            { name: 'title', className: 'teams3-title', children: "sister's noise"},
            {
              name: 'content',
              className: 'teams3-job',
              children: '歌手：FripSide',
            },
            {
              name: 'content1',
              className: 'teams3-content',
              children: 'TV动画『某科学的超电磁炮S』主题曲',
            },
          ],
        },
      },
      {
        name: 'block1',
        className: 'block',
        md: 8,
        xs: 24,
        image: {
          name: 'image',
          className: 'teams3-image',
          children:
            'http://p2.music.126.net/zCWJLVIKMDzcTI6bHMdp1Q==/109951163573651083.jpg?param=130y130',
          href:"/music/"
        },
        titleWrapper: {
          className: 'teams3-textWrapper',
          children: [
            { name: 'title', className: 'teams3-title', children: 'crossing field' },
            {
              name: 'content',
              className: 'teams3-job',
              children: '歌手：LiSA',
            },
            {
              name: 'content1',
              className: 'teams3-content',
              children: 'TV动画《刀剑神域》OP1',
            },
          ],
        },
      },
      {
        name: 'block2',
        className: 'block',
        md: 8,
        xs: 24,
        image: {
          name: 'image',
          className: 'teams3-image',
          children:
            'http://p2.music.126.net/DjmKdzlQU7eXaGZ7H6lZmg==/109951163118580658.jpg?param=130y130',
            href:"/music/"
        },
        titleWrapper: {
          className: 'teams3-textWrapper',
          children: [
            { name: 'title', className: 'teams3-title', children: 'only my railgun' },
            {
              name: 'content',
              className: 'teams3-job',
              children: '歌手：fripSide',
            },
            {
              name: 'content1',
              className: 'teams3-content',
              children: 'TV动画「某科学的超电磁炮」OP1',
            },
          ],
        },
      },
      {
        name: 'block3',
        className: 'block',
        md: 8,
        xs: 24,
        image: {
          name: 'image',
          className: 'teams3-image',
          children:
            'http://p1.music.126.net/KJSlCNw5LkUO_TzRsbwTNQ==/3263350512581176.jpg?param=130y130',
          href:"/music/",
        },
        titleWrapper: {
          className: 'teams3-textWrapper',
          children: [
            { name: 'title', className: 'teams3-title', children: 'THE HERO !!' },
            {
              name: 'content',
              className: 'teams3-job',
              children: '歌手：JAM Project',
            },
            {
              name: 'content1',
              className: 'teams3-content',
              children: 'TV动画《一拳超人》片头曲',
            },
          ],
        },
      },
      {
        name: 'block4',
        className: 'block',
        md: 8,
        xs: 24,
        image: {
          name: 'image',
          className: 'teams3-image',
          children:
            'http://p1.music.126.net/Tx8vVaU1tLPl__CkevMfKQ==/109951164021494660.jpg?param=130y130',
          href:'/music/'
        },
        titleWrapper: {
          className: 'teams3-textWrapper',
          children: [
            { name: 'title', className: 'teams3-title', children: '静寂のアポストル' },
            {
              name: 'content',
              className: 'teams3-job',
              children: '歌手：JAM Project',
            },
            {
              name: 'content1',
              className: 'teams3-content',
              children: 'TV动画《一拳超人》第二季片头曲',
            },
          ],
        },
      },
      {
        name: 'block5',
        className: 'block',
        md: 8,
        xs: 24,
        image: {
          name: 'image',
          className: 'teams3-image',
          children:
            'http://p2.music.126.net/a0R0gpgnlpAWbXVLbKVxhA==/109951163641015775.jpg?param=130y130',
          href:'/music/'
        },
        titleWrapper: {
          className: 'teams3-textWrapper',
          children: [
            { name: 'title', className: 'teams3-title', children: 'ADAMAS (TV Size) ' },
            {
              name: 'content',
              className: 'teams3-job',
              children: '歌手：LiSA',
            },
            {
              name: 'content1',
              className: 'teams3-content',
              children: 'TV动画《刀剑神域 Alicization篇》片头曲 ',
            },
          ],
        },
      },
      {
        name: 'block6',
        className: 'block',
        md: 8,
        xs: 24,
        image: {
          name: 'image',
          className: 'teams3-image',
          children:
            'http://p1.music.126.net/g6s-iioHTF6eiilP9reexQ==/19039143346587517.jpg?param=130y130',
          href:'/music/'
        },
        titleWrapper: {
          className: 'teams3-textWrapper',
          children: [
            { name: 'title', className: 'teams3-title', children: 'Red Battle' },
            {
              name: 'content',
              className: 'teams3-job',
              children: '歌手：高橋李依 / 豊崎愛生',
            },
            {
              name: 'content1',
              className: 'teams3-content',
              children: 'TV动画《为美好的世界献上祝福》原声',
            },
          ],
        },
      },
      {
        name: 'block7',
        className: 'block',
        md: 8,
        xs: 24,
        image: {
          name: 'image',
          className: 'teams3-image',
          children:
            'http://p2.music.126.net/yiyuZq6zuLxrMV1X-1MEOw==/7773547208889422.jpg?param=130y130',
          href:'/music/'
        },
        titleWrapper: {
          className: 'teams3-textWrapper',
          children: [
            { name: 'title', className: 'teams3-title', children: 'courage' },
            {
              name: 'content',
              className: 'teams3-job',
              children: '歌手：戸松遥',
            },
            {
              name: 'content1',
              className: 'teams3-content',
              children: 'TV动画《刀剑神域II》OP2',
            },
          ],
        },
      },
      {
        name: 'block8',
        className: 'block',
        md: 8,
        xs: 24,
        image: {
          name: 'image',
          className: 'teams3-image',
          children:
            'http://p2.music.126.net/TXdH_qsA3L8Qlxt_acr4fw==/2412328511393200.jpg?param=130y130',
          href:'/music/'
        },
        titleWrapper: {
          className: 'teams3-textWrapper',
          children: [
            { name: 'title', className: 'teams3-title', children: 'Grow Slowly' },
            {
              name: 'content',
              className: 'teams3-job',
              children: '歌手：井口裕香',
            },
            {
              name: 'content1',
              className: 'teams3-content',
              children: 'TV动画「某科学的超电磁炮S」ED1',
            },
          ],
        },
      },
    ],
  },
};
export const Footer20DataSource = {
  wrapper: { className: 'home-page-wrapper  footer2-wrapper' },
  OverPack: { className: 'home-page footer2', playScale: 0.05 },
  copyright: {
    className: 'copyright',
    children: [
      // {
      //   name: 'image',
      //   children:
      //     'https://gw.alipayobjects.com/zos/rmsportal/NuuAwJBxewWglRSoNjET.png',
      //   className: 'copyright-logo',
      // },
      {
        name: 'group',
        children: <a href="https://github.com/zzz4158/dongmanjia/blob/master/README.md">开发环境</a>,
        className: 'copyright-group',
      },
      {
        name: 'image2',
        children:
          'https://gw.alipayobjects.com/zos/rmsportal/fgGmQUfiUfSBfvsQpfOj.svg',
        className: 'copyright-line',
      },
      {
        name: 'copyright',
        children: 'Copyright © zhy',
        className: 'copyright-text',
      },
    ],
  },
  links: {
    className: 'links',
    children: [
      {
        name: 'github',
        href: 'https://github.com/zzz4158/dongmanjia',
        className: '',
        style:{lineHeight:'80px',fontSize:'25px',height:'80px'},
        children:
          <Icon type="github"/>,
      },
      // {
      //   name: 'zhihu',
      //   href: '#',
      //   className: 'links-zhihu',
      //   children:
      //     'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjFweCIgaGVpZ2h0PSIyMXB4IiB2aWV3Qm94PSIwIDAgMjEgMjEiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ3LjEgKDQ1NDIyKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT7nn6XkuY48L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBvcGFjaXR5PSIwLjQiPgogICAgICAgIDxnIGlkPSLpobXohJoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMTQuMDAwMDAwLCAtMjEuMDAwMDAwKSIgZmlsbC1ydWxlPSJub256ZXJvIiBmaWxsPSIjRkZGRkZGIj4KICAgICAgICAgICAgPGcgaWQ9IuefpeS5jiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTE0LjAwMDAwMCwgMjEuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNi43Nzg1ODQ2MSwxMS43MjI5IEwxMS4yOTA5Nzg1LDExLjcyMjkgQzExLjI5MDk3ODUsMTAuNjQ0OSAxMC43OTEyODYyLDEwLjAxMzUgMTAuNzkxMjg2MiwxMC4wMTM1IEw2Ljg3NDM4NzcsMTAuMDEzNSBDNi45Njc0MzM4NSw4LjA2MTE5OTk5IDcuMDUwODMwNzcsNS41NTU4OTk5OSA3LjA4MTE1NjkzLDQuNjI0ODk5OTkgTDEwLjgwNjQ0OTIsNC42MjQ4OTk5OSBDMTAuODA2NDQ5Miw0LjYyNDg5OTk5IDEwLjc4NTc3MjMsMy4wMjQgMTAuMzcyMjMzOCwzLjAyNCBMMy44MjI0NzM4NSwzLjAyNCBDMy44MjI0NzM4NSwzLjAyNCA0LjIxNjcxMzg0LDAuOTMwMyA0Ljc0MTkwNzY5LDAuMDA1NjAwMDA2ODQgQzQuNzQxOTA3NjksMC4wMDU2MDAwMDY4NCAyLjc4NjU1OTk5LC0wLjEwMTQ5OTk5MyAyLjExOTM4NDYyLDIuNTQ2NjAwMDEgQzEuNDUyMjA5MjQsNS4xOTQ3MDAwMSAwLjQ1MjEzNTM5MSw2Ljc5NTYgMC4zNDY2ODMwODQsNy4wODgxOTk5OSBDMC4yNDA1NDE1NTIsNy4zODA3OTk5OSAwLjkyMjE5MDc2OSw3LjIyNjc5OTk5IDEuMjEwMjg5MjIsNy4wODgxOTk5OSBDMS40OTgzODc2OCw2Ljk0OTU5OTk5IDIuODAyNDEyMyw2LjQ3MjIgMy4xODE0ODkyNCw0LjYyNDg5OTk5IEw1LjIwNTc2MDAxLDQuNjI0ODk5OTkgQzUuMjMzMzI5MjMsNS43OTYgNS4zMTMyODAwMSw5LjM4NDE5OTk5IDUuMjg4NDY3NywxMC4wMTM1IEwxLjExOTMxMDc2LDEwLjAxMzUgQzAuNTI3OTUwNzYzLDEwLjQ0NDcgMC4zMzE1MTk5OTMsMTEuNzIyOSAwLjMzMTUxOTk5MywxMS43MjI5IEw1LjA5NjE3MjMxLDExLjcyMjkgQzQuODk2OTg0NjMsMTMuMDU5MiA0LjU0ODIzMzg1LDE0Ljc4MTkgNC4wNjAyNTg0NywxNS42OTQ3IEMzLjI4NzYzMDc3LDE3LjE0MyAyLjg3ODIyNzY5LDE4LjQ2NjcgMC4wODk1OTk5OTMzLDIwLjc0NDUgQzAuMDg5NTk5OTkzMywyMC43NDQ1IC0wLjM2NTI5MjMxNCwyMS4wODMzIDEuMDQ0MTg0NjIsMjAuOTYwMSBDMi40NTQzNTA3NywyMC44MzY5IDMuNzg4MDEyMzEsMjAuNDY3MyA0LjcxMjk1OTk5LDE4LjU4OTIgQzUuMjU1MTIxMjcsMTcuNDY5MTYwNiA1LjcxMTU5MTYsMTYuMzA4Mzk4NyA2LjA3ODMyNjE2LDE1LjExNzIgTDYuMDc2OTQ3NjksMTUuMTIyMSBMMTAuMDAzNDk1NCwxOS43MTM0IEMxMC4wMDM0OTU0LDE5LjcxMzQgMTAuNTE5MDQsMTguNDgxNCAxMC4xMzk5NjMxLDE3LjEyNjkgTDcuMjI5MzQxNTMsMTMuODE1OSBMNi4yNDM3NDE1NSwxNC41NTY1IEw2LjI0MzA1MjMsMTQuNTYgQzYuNTE2Njc2OTEsMTMuNTg1NiA2LjcxMzEwNzY4LDEyLjYyMjQgNi43NzQ0NDkyMiwxMS43ODQ1IEw2Ljc3OTI3Mzg1LDExLjcyMjkgTDYuNzc4NTg0NjEsMTEuNzIyOSBaIE0xMi4yMzEwODkyLDIuNjg1MjAwMDEgTDEyLjIzMTA4OTIsMTguNTczOCBMMTMuODc1NTkzOSwxOC41NzM4IEwxNC41NDk2NjE1LDIwLjQ4NjkgTDE3LjQwMDMyLDE4LjU3MzggTDIwLjk5MzI4LDE4LjU3MzggTDIwLjk5MzI4LDIuNjg1MjAwMDEgTDEyLjIzMTA4OTIsMi42ODUyMDAwMSBaIE0xOS4zMDA1MjkyLDE2Ljg2NTEgTDE3LjQzMjcxMzgsMTYuODY1MSBMMTUuMTAzODAzMSwxOC40Mjc1IEwxNC41NTMxMDc3LDE2Ljg2NTEgTDEzLjk3MjA4NjEsMTYuODY1MSBMMTMuOTcyMDg2MSw0LjQ1ODMgTDE5LjI5OTg0LDQuNDU4MyBMMTkuMjk5ODQsMTYuODY1MSBMMTkuMzAwNTI5MiwxNi44NjUxIFoiIGlkPSJTaGFwZSI+PC9wYXRoPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=',
      // },
    ],
  },
};
