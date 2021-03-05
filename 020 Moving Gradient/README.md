## Things I've learned 
**[Creative Coding Tutorial: Moving Gradient with JS by Interactive developer]**



* ### Summary

  * Math.sin() : 라디안으로 주어진 각도의 사인값인 1과 -1 사이의 수 반환

  * sin은 주기가 2𝝅, 최대값 1, 최소값 -1을 가지므로 sin value에 일정 수를 계속해서 더해주면 1과 -1의 값을 가지게 됨  ->  radius

  * **Gradient Effect**

    * *var* = ctx.createRadialGradient(x1, y1, r1, x2 ,y2, r2) : 원형 그라데이션 지정
    * *var*.addColorStop(value, color) : value는 실수값으로 0(시작) ~ 1(끝)
    * ctx.fillStyle = *var*; // draw
    * ctx.globalCompositeOperation = *type* ('saturation') : 도형 합성 방법 지정 // init

    