import React from 'react';
import logo from '../asset/logo.png'
import teamImg0 from '../asset/fateSN.jpg'
import teamImg1 from '../asset/gmzr.png'
import teamImg2 from '../asset/dzyz.png'
import qq from '../asset/qq.jpg'
import Link from 'umi/link';
import { Typography,Icon,Popover } from 'antd';
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
        button: { className: 'banner1-button', children: <Link to='/dongman/0'>追番</Link> },
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
        button: { className: 'banner1-button', children: <Link to='/dongman/1'>追番</Link> },
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
        button: { className: 'banner1-button', children: <Link to='/dongman/2'>追番</Link> },
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
              <Link to="/dongman/3"><img src={teamImg0} alt="img"/></Link>,
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
                <Link to="/dongman/4"><img src={teamImg1} alt="" /></Link> ,
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
               <Link to="dongman/5"><img src={teamImg2} alt=""/></Link> ,
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
        children: <Link to="https://github.com/zzz4158/dongmanjia/blob/master/README.md">开发环境</Link>,
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
      {
        name: 'qq',
        href: 'mailto:415874251@qq.com',
        className: 'links-qq',
        style:{lineHeight:'80px',fontSize:'25px',height:'80px'},
        children:
          <Popover content={<img src={qq} alt="" height='300px'/> } title="QQ" trigger="hover">
          <Icon type='qq'></Icon>
        </Popover>,
      },
    ],
  },
};
