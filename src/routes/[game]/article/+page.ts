import type { Tag } from "$lib/types";

export async function load() {
	return {
		name: "Cities: Skylines",
		year: 2012,
		developer: "Blizzard Entertainment",
		tags: [{
			id: 1,
			label: "Песочница"
		},{
			id: 2,
			label: "Симулятор"
		},{
			id: 3,
			label: "Singleplayer"
		}] as Tag[],
// 		article: `
// Cities: Skylines — компьютерная игра в жанре градостроительного симулятора,
// разработанная финской компанией Colossal Order и изданная Paradox Interactive
// 10 марта 2015 года.
//
// # Игровой процесс
//
// Как и в большинстве игр градостроительного жанра, в Cities: Skylines главным заданием игрока является строительство собственного города. Игрок занимается планированием зон застройки, размещением дорог, налогообложением, организовывает работу городских служб и общественного транспорта. Во время этого игроку нужно поддерживать уровень бюджета города, населения, здоровья, счастья, занятости, загрязнения окружающей среды (воздуха, воды и почвы), поток автомобильного трафика и других факторов.
//
// Игра начинается с участка земли в 4 км² (2 на 2 километра), небольшого запаса денег и набора начальных инструментов планирования. Карта являет собой участок суши с возможным доступом к морю или другим водным ресурсам. На ней уже расположены основные автомагистрали и железнодорожные пути, через которые в город игрока будут прибывать новые жители.
//
// Игрок размечает зоны застройки (жилые, коммерческие, офисные и промышленные районы), организовывает прокладку дорог, водопровода, канализации и электрических сетей. Постепенно, с развитием города и ростом населения, становятся доступные новые здания (школы, больницы, полицейские и пожарные участки, свалки) и новые инструменты (контролирование расходов и доходов, создание районов). С помощью инструментов создания и управления районами игрок может объединять части города в единые районы и задавать этим районам различные политики (например, поддержка малого бизнеса или повышение налогов для населения).
//
// # Разработка
//
// Разработка игры велась в студии Colossal Order при участии 13 человек[2]. Ранее эта студия уже работала над Cities in Motion, симулятором городского транспорта. От построения транспортных систем разработчики решили перейти к созданию полноценного градостроительного симулятора. За основу новой игры они взяли графический движок Cities in Motion. По сути, разработчики расширили геймплей в игре, чтобы иметь возможность с нуля строить здания и дороги[3].
//
// Разработка симулятора началась ещё в 2009 году и шла довольно вяло, отчасти это было вызвано скептическими настроениями относительно продаж будущей игры, так как на игровом рынке доминировала серия игр SimCity. Первоначально разработчики Cities: Skylines сделали акцент на политическом аспекте управления городом, а не на его планировании. Игрок должен был продумывать законы и постановления для развития города. Однако издатель Paradox Interactive посчитал, что эта идея не сможет стать конкурентной.
// `
		article: `
# An h1 header

Paragraphs are separated by a blank line.

2nd paragraph. *Italic*, **bold**, and \`monospace\`. Itemized lists
look like:

  * this one
  * that one
  * the other one

Note that --- not considering the asterisk --- the actual text
content starts at 4-columns in.

> Block quotes are
> written like so.
>
> They can span multiple paragraphs,
> if you like.

Use 3 dashes for an em-dash. Use 2 dashes for ranges (ex., "it's all
in chapters 12--14"). Three dots ... will be converted to an ellipsis.
Unicode is supported. 🤔



An h2 header
------------

Here's a numbered list:

 1. first item
 2. second item
 3. third item

Note again how the actual text starts at 4 columns in (4 characters
from the left side). Here's a code sample:

    # Let me re-iterate ...
    for i in 1 .. 10 { do-something(i) }

As you probably guessed, indented 4 spaces. By the way, instead of
indenting the block, you can use delimited blocks, if you like:

~~~
define foobar() {
    print "Welcome to flavor country!";
}
~~~

(which makes copying & pasting easier). You can optionally mark the
delimited block for Pandoc to syntax highlight it:

~~~python
import time
# Quick, count to ten!
for i in range(10):
    # (but not *too* quick)
    time.sleep(0.5)
    print(i)
~~~



### An h3 header ###

Now a nested list:

 1. First, get these ingredients:

      * carrots
      * celery
      * lentils

 2. Boil some water.

 3. Dump everything in the pot and follow
    this algorithm:

        find wooden spoon
        uncover pot
        stir
        cover pot
        balance wooden spoon precariously on pot handle
        wait 10 minutes
        goto first step (or shut off burner when done)

    Do not bump wooden spoon or it will fall.

Notice again how text always lines up on 4-space indents (including
that last line which continues item 3 above).

Here's a link to [a website](https://foo.bar), to a [local
doc](local-doc.html), and to a [section heading in the current
doc](#an-h2-header). Here's a footnote.

Tables can look like this:

| Name          | Size  | Material    | Color       |
| ------------- |-------|-------------|-------------|
| All Business  |     9 | leather     | brown       |
| Roundabout    |    10 | hemp canvas | natural     |
| Cnderella     |    11 | glass       | transparent |

Table: Shoes sizes, materials, and colors.

A horizontal rule follows.

***

Again, text is indented 4 spaces. (Put a blank line between each
term and  its definition to spread things out more.)

Here's a "line block" (note how whitespace is honored):

| Line one
|   Line too
| Line tree

and images can be specified like so:
		`
	};
}