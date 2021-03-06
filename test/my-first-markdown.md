# 마크다운 문법 학습하기

## 마크다운 소개

## 마크다운 문법

### 제목

## 강조(Empahsis)

이텔릭체는 _별표(asterisks)_ 혹은 *언더바(underscore)*를 사용하세요.

두껍게는 **별표(asterisks)** 혹은 **언더바(underscore)**를 사용하세요.

***이텔릭체*와 두껍게**를 같이 사용할 수 있습니다.

취소선은 ~~물결표시(tilde)~~ 를 사용하세요.

<u>밑줄</u>은 `<u></u>`를 사용하세요.

<u style="color: red;">**style**</u>

## 목록(List)

1. 순서가 필요한 목록
1. 순서가 필요한 목록

- 순서가 필요하지 않은 목록(서브)
- 순서가 필요하지 않은 목록(서브)

1. 순서가 필요한 목록
1. 순서가 필요한 목록(서브)
1. 순서가 필요한 목록(서브)
1. 순서가 필요한 목록

- 순서가 필요하지 않은 목록에 사용 가능한 기호
  - 대쉬(hyphen)
  * 별표(asterisks)
  - 더하기(plus sign)

## 링크(Link)

[GOOGLE](https://google.com)

[NAVER](https://naver.com "링크 설명(title)을 작성하세요.")

[상대적 참조](../users/login)

[Dribbble][dribbble link]

[GitHub][1]

문서 안에서 [참조 링크]를 그대로 사용할 수도 있습니다.

다음과 같이 문서 내 일반 URL이나 꺾쇠 괄호(`< >`, Angle Brackets)안의 URL은 자동으로 링크를 사용합니다.
구글 홈페이지: https://google.com
네이버 홈페이지: <https://naver.com>

[dribbble link]: https://dribbble.com
[1]: https://github.com
[참조 링크]: https://naver.com "네이버로 이동합니다!"

## 이미지(Images)

![대체 텍스트(alternative text)를 입력하세요!](http://www.gstatic.com/webp/gallery/5.jpg "링크 설명(title)을 작성하세요.")

![Kayak][logo]

[logo]: http://www.gstatic.com/webp/gallery/2.jpg "To go kayaking."

![namacoel][namacoel-image]

<img width="150" src=" https://avatars3.githubusercontent.com/u/46400701?s=400&u=0275763c4b5afa32e51478cda241bbc36f8633d7&v=4 " alt="Prunus" title="A Wild Cherry (Prunus avium) in flower">

[namacoel-image]: https://avatars3.githubusercontent.com/u/46400701?s=400&u=0275763c4b5afa32e51478cda241bbc36f8633d7&v=4 "namacoel Image"

## 코드(Code) 강조

`background`혹은 `background-image` 속성으로 요소에 배경 이미지를 삽입할 수 있습니다.

```html
<a href="https://www.google.co.kr/" target="_blank">GOOGLE</a>
```

```css
.list > li {
  position: absolute;
  top: 40px;
}
```

```javascript
function func() {
  var a = "AAA";
  return a;
}
```

```bash
$ vim ./~zshrc
```

```python
s = "Python syntax highlighting"
print s
```

```
No language indicated, so no syntax highlighting.
But let's throw in a tag.
```

## 표(Table)

<table> 태그로 변환됩니다.
헤더 셀을 구분할 때 3개 이상의 -(hyphen/dash) 기호가 필요합니다.
헤더 셀을 구분하면서 :(Colons) 기호로 셀(열/칸) 안에 내용을 정렬할 수 있습니다.
가장 좌측과 가장 우측에 있는 |(vertical bar) 기호는 생략 가능합니다.

| 값         |                  의미                  |   기본값 |
| ---------- | :------------------------------------: | -------: |
| `static`   |     유형(기준) 없음 / 배치 불가능      | `static` |
| `relative` |       요소 자신을 기준으로 배치        |          |
| `absolute` | 위치 상 부모(조상)요소를 기준으로 배치 |          |
| `fixed`    |      브라우저 창을 기준으로 배치       |          |

| 값         |                     의미                     |   기본값 |
| ---------- | :------------------------------------------: | -------: |
| `static`   |        유형(기준) 없음 / 배치 불가능         | `static` |
| `relative` |        요소 **자신**을 기준으로 배치         |
| `absolute` | 위치 상 **_부모_(조상)요소**를 기준으로 배치 |
| `fixed`    |       **브라우저 창**을 기준으로 배치        |

## 인용문(BlockQuote)

> 남의 말이나 글에서 직접 또는 간접으로 따온 문장.
> _(네이버 국어 사전)_

BREAK!

> 인용문을 작성하세요!
>
> > 중첩된 인용문(nested blockquote)을 만들 수 있습니다.
> >
> > > 중중첩된 인용문 1
> > > 중중첩된 인용문 2
> > > 중중첩된 인용문 3

## 원시 HTML(Raw HTML)

<u>마크다운에서 지원하지 않는 기능</u>을 사용할 때 유용하며 대부분 잘 동작합니다.

<img width="150" src="http://www.gstatic.com/webp/gallery/4.jpg" alt="Prunus" title="A Wild Cherry (Prunus avium) in flower">

![Prunus](http://www.gstatic.com/webp/gallery/4.jpg)

## 수평선(Horizontal Rule)

---

(Hyphens)

---

(Asterisks)

---

(Underscores)

## 줄바꿈(Line Breaks)

동해물과 백두산이 마르고 닳도록
하느님이 보우하사 우리나라 만세 <!--띄어쓰기 2번-->
무궁화 삼천리 화려 강산<br>
대한 사람 대한으로 길이 보전하세
