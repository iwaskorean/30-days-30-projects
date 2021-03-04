## Things I've learned 
**[Chris course - How to Code: Circular Motion]**



#### 1. Theorem

- 1rad는 원의 반지름과 길이가 같은 호가 대하는 중심각의 크기
- 1𝝅 rad = 180도 / 2𝝅 rad = 360도
- 좌표 상 점 p가 있을때  p의 x,y 좌표구하기
  - p.x = cos(angle) * 빗면
  - p.y = sin(angle) * 빗면



#### 2. Circular Motion

- 실제 canvas에 draw되는 객체인 p를 Math.cos/sin을 이용해 p의 좌표를 계속해서 update

  - radians += velocity
  - draw(lastPoint)
  - p의 x,y 좌표 update
    - x = 현재 마우스의 x좌표 +  cos(radians) * 좌표에서부터 중심까지의 거리
    - y = 현재 마우스의 y좌표 +  sin(radians) * 좌표에서부터 중심까지의 거리

- draw

  - moveTo(pre x, pre y)

  - lineTo(updated x, updated y)

    =>  이전위치에서부터 radians와 velocity로 갱신된 x,y좌표까지 lineTo



- animate

  - context.fillStyle = 'rgba(...)'

  - context.fillRect = (0,0, ...)

    => circular motion 표현



#### 3. Drag Effect

- 이전 마우스의 좌표 = (현재 마우스 좌표 - 이전 마우스 좌표) * **<u>보정값</u>**
- Particles들이 update될때 보정치만큼 느리게 따라가게 되어서 자연스러운 Drag Effect 구현