# 데이터시각화 2회차

---
md파일이란 **markdown** 문서를 이야기한다.

---
![이미지설명](https://images.pexels.com/photos/17904851/pexels-photo-17904851.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)

---
- 리스트는 이렇게 작성합니다.
- 두번째 리스트

1. 순번있는 리스트는 이렇게 작성합니다.
2. 순번이 이렇게 들어갑니다.

---
.red라는 클래스를 사용하면 바탕화면이 붉은색이 됩니다.

```html
<p class="red">배경이 붉은 색이 됩니다.</p>
```

css 내용은 아래와 같습니다.
```css
.red{
    background-color: red;
}
```

---
absolute position을 이용해서 중앙정렬하는 방법

```css
.center{
    position:absolute;
    top:50%;
    left:50%;
    transform: translate(-50%, -50%);
}
```