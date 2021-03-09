## Things I've learned 
**[Chris course - How to code: Sine Waves]**



* **Note**
  * dat.gui 
    * const gui = new dat.GUI()
    * gui.add | addFolder(*컨트롤러 객체*, *프로퍼티*, *최대값*, *최소값*)
    * 객체의 프로퍼티들을 컨트롤 할 수 있는 컨트롤러 생성



1. ####  **Animate**

   - moveTo(0, canvas.height/2);
   - lineTo(i, wave.y + Math.sin(i * wavy.y + increment) * wave.attitude * Math.sin(increment) );
     - wave.y: wave의 y축
     - wave.attitude: wave 진폭 / 2
     - increment = frequency(진동수) // init
   - increment += frequency



2. ####  **Stroke style**

   - hsl 색상모델로 지정한 wave의 storke style을 어떻게 계속해서 변화시킬것인가?
     - storkeColor.h = 200 // init
     - strokeColor.h * Math.sin(increment) :  sin 최대/최소값은 1/-1이므로 strokeStyle의 h 값 -200 ~ 200 설정
     - => Math.abs(strokeColor.h * Math.sin(increment)) : strokeStyle h 값 0~ 200 설정 