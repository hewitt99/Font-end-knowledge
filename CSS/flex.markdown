# Flexbox
Flexbox（弹性盒子）是最新版本的 CSS（即 CSS3）中引入的一种强大且兼容性好的布局方法。
使用 flexbox，我们可以很容易地处理好页面上的元素布局，并创建可以自动缩小和放大的动态用户界面。
适配所有浏览器，flex/inline-flex/-webkit-flex

  ---  
+ display: flex;
+ flex-direction: row/column/row-reverse/column-reverse;

 --- 

## 主轴
回忆一下，如果把 flex 容器设为一个行，它的子元素会从左到右逐个排列；
如果把 flex 容器设为一个列，它的子元素会从上到下逐个排列。 
子元素排列的方向被称为 **main axis（主轴）**,与其垂直的是**cross axis（交叉轴）**

## 排列方式
  flexbox内的元素按主轴排序，通过属性justify-content调整主轴,用align-items调整交叉轴。设置在父元素上。<br>

  justify-content: '属性值'
  >- flex-start: 从头排列<br>
  >- flex-end: 从尾排列<br>
  >- center: 居中排列<br>
  >- space-around: <br>
  >- space-between: 一头一尾，余下均分<br>
  >- space-evenly: 余下空间均分
  
  align-items: '属性值'
  >- flex-start
  >- flex-end
  >- center
  >- baseline: 项目中第一行text文本作为基线
  >- stretch: 项目拉伸到底部，如果未设置align-item的值，这个就是默认值

## 换行
  flexbox将元素放在一行,通过flex-wrap: wrap/wrap-reverse,默认nowrap

## 放缩控制
  flex-shrink和flex-grow,如果没有设置原宽度,就是按growA/growB比例分配
  >缩小方法：
  >父元素宽度小于A、B子元素宽度之和，A缩小后子元素宽度 = A原宽度 - (A原宽度  * shrink) / (A原宽度 * shirink)

## 设置初始大小
  子元素下设置flex-basis，为子元素初始大小。
  除值为auto外，同时设置width或者flex-direction: column下的height，flex-basis的优先级更高。

## flex短方法
  flex: flex-grow flex-shrink flex-basis

## 排序
  order属性，给子元素排序

## align-self
  align-self 可设置的值与 align-items 的一样，并且它会覆盖 align-items 所设置的值。


## 属性使用概括
  父元素：
  - display: flex
  - justify-content
  - align-item
  - flex-direction
  - flex-wrap

  子元素：
  - flex短语法
  - flex-grow
  - flex-shrink
  - flex-basis
  - align-self
  - order


